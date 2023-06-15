import { GlobalProvider } from "./context/GlobalState";

import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

function App() {
    return (
        <GlobalProvider>
            <div className="bg-zinc-950 text-white min-h-screen flex justify-center py-10">
                <div className="container mx-auto min-w-[248px] w-1/2">
                    <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2 flex-wrap flex-s">
                        <div className="basis-1 grow">
                            <h1 className="text-4xl font-bold">
                                Expense Tracker
                            </h1>
                            <IncomeExpenses />
                            <Balance />
                            <TransactionForm />
                        </div>
                        <div className="flex flex-col basis-1 grow">
                            <div className="">
                                <ExpenseChart />
                            </div>

                            <TransactionList />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
