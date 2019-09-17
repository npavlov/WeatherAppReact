const getColorByAbbr = x => {
  switch (x) {
    case "c":
      return "#FFF8DE";
    case "hc":
      return "#F9F9F9";
    case "s":
      return "#F9F9F9";
    case "hr":
      return "#E9E9E9";
    case "lc":
      return "#F7FCFF";
    case "sn":
      return "#EEF6F9";
    case "lr":
      return "#EAEAEA";
    default:
      return "#F9F9F9";
  }
};

export default getColorByAbbr;
