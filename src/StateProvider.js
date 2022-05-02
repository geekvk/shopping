// setup data layer

import { createContext, useContext, useReducer } from "react";

//track basket information 
export const StateContext = createContext(); // create data layer

// build provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);

