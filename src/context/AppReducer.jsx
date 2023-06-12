// Espera dos cosas; el arreglo vacio y la función que queremos hacer sobre el.
export default (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                // Copia todo el state
                ...state,
                // Si "ADD_TRANSACTION" entonces copia lo que ya está en el state.transactions y añade el valor que recibas
                transactions: [...state.transactions, action.payload],
            };
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(
                    // Si la id de la transacción es diferente a lo que hay en payload entonces deja pasar la transacción
                    (transaction) => transaction.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
