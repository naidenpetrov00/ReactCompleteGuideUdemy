const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultByYear({ result }) {
  return (
    <tr>
      <td>{result.year}</td>
      <td>{formatter.format(result.savingsEndOfYear)}</td>
      <td>{formatter.format(result.yearlyInterest)}</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  );
}
export default ResultByYear;
