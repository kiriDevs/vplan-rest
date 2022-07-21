const apiDateString = (date: Date) => {
  const day = date.getDate();
  const _month = date.getMonth() + 1;
  const year = date.getFullYear();

  const month = _month < 10 ? `0${_month}` : _month.toString();

  return `${day}.${month}.${year.toString().slice(2, 4)}`;
};

export { apiDateString };
