/*this code is an implementation of the React Context API using the createContext, useContext, and useReducer hooks.
The React Context API provides a way to pass data down through the component tree without having to pass props manually at every level. It allows components to share state and functionality without the need to pass props through every level of the component tree.
In this example, the StateContext acts as the "provider" for the state and functions that will be shared between components. The StateProvider component is similar to the <Provider> component in the React Context API, which wraps the child components and passes the shared state to them. The useStateValue hook is similar to the useContext hook, which allows components to access the shared state provided by the context.
Overall, this code demonstrates how the React Context API can be implemented using the newer useReducer hook to manage complex state updates.
*/
import React, {createContext, useContext, useReducer} from "react";

//prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from data layer
export const useStateValue = () => useContext(StateContext);