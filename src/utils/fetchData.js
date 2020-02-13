export const fetchData = async url => {
  const data = await fetch(url, {
    headers: {
      "x-apikey": process.env.REACT_APP_API_KEY
    }
  });
  const accounts = await data.json();
  return accounts;
};
