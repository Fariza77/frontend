import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllComponents from "./components/common/AllComponents";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { globalContext, initialState, globalReducer} from "./store";
import { useReducer } from "react";


export default function App(){
  const [ state, dispatch ] = useReducer(globalReducer,initialState)
  state.dispatch = dispatch

  return(
    <>
    <BrowserRouter>
      <div className="toast-wrapper">
      <ToastContainer/>
      </div>
     <globalContext.Provider value={state}>
     <AllComponents/>
     </globalContext.Provider>
  
 
    </BrowserRouter>
    </>
  )
}