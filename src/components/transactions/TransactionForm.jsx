import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
    // Le pasa la función addTransaction
    const { addTransaction } = useGlobalState();

    // Nos permite añadir la descripción
    const [description, setDescription] = useState("");

    // Nos permite añadir el monto
    const [amount, setAmount] = useState(0);

    // Con esto se ejecuta addTransaction
    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            // Este es el argumento de transaction
            id: window.crypto.randomUUID(), // Con esto accedemos desde el objeto global del nacegador a su elemento crypto y usamos el metodo randomUUID para generar una id
            description,
            amount: +amount, // El simbolo + se encarga de convertir un string a integer
        });
        setAmount(0);
        setDescription("");
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Enter a Description"
                    // Por cada dato recibido se le asignará a description
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    value={description}
                />
                <input
                    type="number"
                    step={0.01} // permite indicar el tamaño de los incrementos por botón
                    placeholder="00.00"
                    // Por cada dato recibido se le asignará a el monto
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    value={amount}
                />
                <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;
