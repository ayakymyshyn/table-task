import React, { useState, useEffect, Fragment } from "react";

// utils
import { fetchData } from "../../utils/fetchData";
import { findAndAddProp } from "../../utils/findAndAddProp";

// components
import { WrappedPreloader } from "../WrappedPreloader";
import { Cell } from "./Cell";

// mock data
import { accounts as mockAccs } from "../../mockData/accounts";

const Table = () => {
  const [accounts, setAccounts] = useState([]);
  const [accTypes, setAccTypes] = useState([]);
  const [isNameSorted, setNameSorted] = useState(false);
  const [isProfitSorted, setProfitSorted] = useState(false);

  useEffect(() => {
    const fetchFromAPI = async () => {
      const accs = await fetchData(
        "https://recruitmentdb-508d.restdb.io/rest/accounts"
      );
      setAccounts(accs);
      const types = await fetchData(
        "https://recruitmentdb-508d.restdb.io/rest/accounttypes"
      );
      setAccTypes(types);
    };
    fetchFromAPI();
  }, []);

  findAndAddProp(accounts, accTypes);

  const sortByName = e => {
    console.log("name");
    if (e.shiftKey && isProfitSorted) {
      sortMultiple();
      setNameSorted(!isNameSorted);
    } else {
      const stateAccs = [...accounts];
      stateAccs.sort((a, b) => a.name.localeCompare(b.name));
      isNameSorted ? setAccounts(stateAccs.reverse()) : setAccounts(stateAccs);
      setNameSorted(!isNameSorted);
      setProfitSorted(false);
    }
  };

  const sortByProfit = e => {
    console.log("profit");
    if (e.shiftKey && isNameSorted) {
      sortMultiple();
      setProfitSorted(!isProfitSorted);
    } else {
      const stateAccs = [...accounts];
      stateAccs.sort((a, b) => {
        return a.profitLoss - b.profitLoss;
      });
      isProfitSorted
        ? setAccounts(stateAccs.reverse())
        : setAccounts(stateAccs);
      setProfitSorted(!isProfitSorted);
      setNameSorted(false);
    }
  };

  const sortMultiple = () => {
    console.log("multiple");
    const stateAccs = [...accounts];
    stateAccs.sort((a, b) => {
      if (
        a.profitLoss < b.profitLoss ||
        a.name.toLowerCase() < b.name.toLowerCase()
      )
        return -1;
      if (
        a.profitLoss > b.profitLoss ||
        a.name.toLowerCase() > b.name.toLowerCase()
      )
        return 1;
    });
    setAccounts(stateAccs);
    setNameSorted(true);
    setProfitSorted(true);
  };

  return (
    <Fragment>
      <h2>To sort multiple columns, press shift key and select 2 columns</h2>
      <p>It matters, what column you will choose first</p>
      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              className="clickable"
              onClick={sortByName}
              data-testid="name"
            >
              {isNameSorted ? "↓" : "↑"} Name
            </th>
            <th scope="col" className="clickable" onClick={sortByProfit} data-testid="profit">
              {isProfitSorted ? "↓" : "↑"} Profit & Loss
            </th>
            <th scope="col">Account Type</th>
          </tr>
        </thead>
        <tbody>
          {accounts.length > 1 ? (
            <Cell accounts={accounts} />
          ) : (
            <WrappedPreloader />
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;
