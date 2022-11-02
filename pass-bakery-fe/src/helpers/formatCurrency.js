export const formatCurrency = (inCurr) => {
  const formatMoney = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatMoney.format(inCurr);
};
