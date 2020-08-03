import React, {createContext, useReducer, useContext,} from 'react';

//empty data layer
export const StateContext = createContext();

//provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//store
export const useStateValue = () => useContext(StateContext);