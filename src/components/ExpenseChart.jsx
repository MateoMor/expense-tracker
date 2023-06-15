import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

// Esto genera un grafico tipo pie
function ExpenseChart() {
    const { transactions } = useGlobalState();

    const total = transactions.reduce(
        (acc, transaction) => (acc += transaction.amount),
        0
    );

    const totalIncome = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpenses =
        transactions
            .filter((transaction) => transaction.amount < 0)
            .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

    let totalExpensesPercentage = 100;
    let totalIncomePercentage = 0;

    if (totalIncome > totalExpenses) {
        totalExpensesPercentage = Math.round(
            (totalExpenses / (totalIncome != 0 ? totalIncome : 1)) * 100
        ); // Los porcentages se calculan con el expenses respecto al income
        totalIncomePercentage = 100 - totalExpensesPercentage;
    }

    /*     const totalExpensesPercentage = Math.round((totalExpenses / (totalIncome != 0 ? totalIncome : 1)) * 100) // Los porcentages se calculan con el expenses respecto al income
    const totalIncomePercentage = 100 - totalExpensesPercentage */

    return (
        <VictoryPie
            colorScale={["#e74c3e", "#2ecc71"]} // Los colores de los espacios de los gráficos
            data={[
                { x: "Expenses", y: totalExpensesPercentage },
                { x: "Incomes", y: totalIncomePercentage },
            ]}
            // Esto le da propiedades  la animación
            animate={{
                duration: 200,
            }}
            labels={({ datum }) => `${datum.y}%`} // datum es el valor que trae al momento de recorrer cada item
            labelComponent={
                // Ángulo y color de los labels
                <VictoryLabel angle={45} style={{ fill: "white" }} />
            }
        />
    );
}

export default ExpenseChart;
