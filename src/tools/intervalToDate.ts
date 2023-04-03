const intervalToDate = (interval: number) => {
  const d: Date = new Date(Date.now() - interval * 24 * 60 * 60 * 1000);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const date = `${year}-${(month).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}-${(day).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
  return date;
}

export default intervalToDate;