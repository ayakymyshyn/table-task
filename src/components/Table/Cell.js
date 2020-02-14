import React from "react";
import { Preloader } from "../Preloader";
import PropTypes from "prop-types";

export const Cell = ({ accounts }) => {
  return accounts ? (
    accounts.map(account => (
      <tr key={account._id}>
        <th scope="row">{account.name}</th>
        <td>{account.profitLoss}</td>
        <td>{account.type ? account.type : <Preloader />}</td>
      </tr>
    ))
  ) : (
    <Preloader />
  );
};

Cell.propTypes = {
  accounts: PropTypes.array
};
