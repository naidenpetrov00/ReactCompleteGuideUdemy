import CalculatorForm from "./components/Calculator/CalculatorForm";
import Header from "./UI/Header/Header";
import ResultTable from "./components/Result/ResultTable";
import { useState } from "react";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (event) => {
    event.preventDefault();

    const userInput = event.target;
    const yearlyDataValue = []; // per-year results

    let currentSavings = +userInput["current-savings"].value; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"].value; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"].value / 100;
    const duration = +userInput["duration"].value;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyDataValue.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(yearlyDataValue);
  };
  return (
    <div>
      <Header />
      <CalculatorForm onSubmit={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {/* No investment calculated yet! */}
      <ResultTable yearlyData={yearlyData} />
    </div>
  );
}

export default App;
