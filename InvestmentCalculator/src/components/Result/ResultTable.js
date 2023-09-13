import ResultByYear from "./ResultByYear";

import styles from "./ResultTable.module.css";

function ResultTable({ yearlyData }) {
  return (
    <div>
      {yearlyData.length === 0 && <p className={styles.noResults}>No investment calculated yet!</p>}
      {yearlyData.length > 0 && (
        <table className={styles.result}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {yearlyData.map((x) => (
              <ResultByYear key={x.year} result={x} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ResultTable;
