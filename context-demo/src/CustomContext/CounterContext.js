import React, { useContext } from "react";

export const initState = {
    count: 0
}

export function countReducer(state, action){
    switch (action.type) {
        case 'increase': 
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrease':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}
export const CounterContext = React.createContext();
