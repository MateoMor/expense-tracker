// nesecitamos importar el useContext de react y el context de ../context/GlobalState.jsx
import { useGlobalState } from "../context/GlobalState";

function Balance() {
    // useGlobalState remplaza a useContext(Context)
    const { transactions } = useGlobalState();

    // Esto crea un arreglo con cada uno de los montos de transactions
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // .reduce recibe un acumulador (acc) y un elemento (item), recorre cada uno de los elementos del arreglo, usandolos como item y los suma al acumulador(acc). El cero al final es el valor inicial del acumulador. Al final la función devuelve el acumulador

    return (
        <div className="flex justify-between">
            <h3>Balance</h3>
            <h1 className="text-2xl font-bold">${total}</h1>
        </div>
    );
}

export default Balance;
