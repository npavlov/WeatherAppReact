const formatNumber = x => ("0" + x).slice(-2);
const getFormatedDate = (x: Date) =>
  formatNumber(x.getHours()) + ":" + formatNumber(x.getMinutes());

const getDayName = (date: Date) => {
  return date.toLocaleDateString("en-US", { weekday: "long" });
};

const getDateFormatted = (date: Date) => {
  return date.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
};
export { getFormatedDate, getDayName, getDateFormatted };
