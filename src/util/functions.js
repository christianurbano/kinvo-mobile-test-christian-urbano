export const sortStocks = (stocks) =>
  stocks.sort((a, b) => Number(b.favorited) - Number(a.favorited));
export const sortAlphabetically = (data) =>
  data.sort((a, b) => a.name.localeCompare(b.name));
