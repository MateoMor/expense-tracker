import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
    // Con esto se traen los datos del contexto global
    // Lo que hace es tomar el elemento del objeto
    const { transactions } = useGlobalState();

    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold block w-full">History</h3>
            <ul>
                {transactions.map((transaction) => (
                    <TransactionItem
                        transaction={transaction}
                        key={transaction.id}
                    /> // Por cada recorrido llamarás al transaction y le pasaras transaction como propiedad
                ))}
            </ul>
        </>
    );
}

export default TransactionList;
