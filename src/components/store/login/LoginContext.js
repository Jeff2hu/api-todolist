import { createContext, useEffect, useState } from "react";
import { api_todoList } from "../todolist/API_TodoList";

export const LoginContext = createContext({
  token:"",
  setToken:()=>{},
  message:"",
  errorMessage:"",
  setErrorMessage:()=>{},
  setMessage:()=>{},
  data:[],
})

export const LoginProvider = ({children}) => {
  
  const [ data,setData ] = useState([])
  const [ token,setToken ] = useState("");
  const [ message,setMessage ] = useState("")
  const [ errorMessage,setErrorMessage ] = useState("")
  const getList = async() => {
    const todolist = await api_todoList(localStorage.getItem("token"))
    const res = await todolist.json();
    setData(res);
  }

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
    getList()
  },[token,data])

  const value = { setToken,token,message,setMessage,data,errorMessage,setErrorMessage }
  return(
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  )

}