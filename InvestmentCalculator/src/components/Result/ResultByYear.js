function ResultByYear({ result }) {
  return (
    <tr>
      <td>{result.year}</td>
      <td>{result.savingsEndOfYear.toFixed(2)}</td>
      <td>{result.yearlyInterest.toFixed(2)}</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  );
}
export default ResultByYear;
