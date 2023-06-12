import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Definición del estado inicial de state, (un objeto con una propiedad transactions: []) luego será llenado con objetos
const initialState = {
    transactions: [],
};

export const Context = createContext();

// Con esto nos ahorramos la necesidad de importar el use context ni importar el contexto
export const useGlobalState = () => {
    const context = useContext(Context);
    return context;
};

export const GlobalProvider = ({ children }) => {
    // Estamos definiendo una variable llamada state que será modificada por useReducer. useReducer recibe dos argumentos, el primero evaluará la acción para ejecutarla y el segundo es el valor inicial
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem("transactions"); // Con esteo llamamos a una función que guarda en el localStorage los datos de transactions
        return localData ? JSON.parse(localData) : initialState; // Con parse la información se convertirá de formato string a formato JSON. Si localData no existe se devolverá initialState, es decir []
    });

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(state))
    }, [state]) // los corchetes del final le indican al useEffect que guarde la información de "transactions" en el localStorage cuando state cambie. state se convierte a string porque localStorage solo acepta strings
    
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION", // Este parametro le asignará el tipo a la función
            payload: transaction, // payload es el objeto que contendrá a description y amount
        });
    };

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION", // Este parametro le asignará el tipo a la función
            payload: id, // payload es el objeto que contendrá a description y amount
        });
    };

    // En este contexto se alojan todos los datos que se compartirán entre componentes
    return (
        <Context.Provider
            value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </Context.Provider>
    );
};
