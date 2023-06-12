import { useGlobalState, } from "../../context/GlobalState";

function TransactionItem({ transaction }) {
    // Con esto se traen los datos del contexto global
    // Lo que hace es tomar el elemento del objeto
    const { transactions, deleteTransaction } = useGlobalState(); // se importan los datos de transaction y la función deleteTransaction

    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{transaction.description}</p>
            <div>
                <span>${transaction.amount}</span>
                {/* Este botón accede a las caracteristicas de la transacción en cuestión */}
                <button
                    onClick={() => {
                        // Con esto se filtran las ids y se elimina la que coincida
                        deleteTransaction(transaction.id);
                    }}
                >
                    x
                </button>
            </div>
        </li>
    );
}

export default TransactionItem;
