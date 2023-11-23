export function formatCurrency(amount: number, currencyCode: string = "USD"): string {
  const stringValue = amount.toString();

  const groups = stringValue
    .split("")
    .reverse()
    .join("")
    .match(/\d{1,3}/g);

  const result = groups ? groups.join(".").split("").reverse().join("") : "";

  return `${result} ${currencyCode}`;
}
