import { createContext, useState } from "react";

export const TodoListContext = createContext({

});

export const TodoListProvider = ({children}) => {
  
  const [ tabs,setTabs ] = useState([
    {
      title:"全部",
      id:"all"
    },
    {
      title:"待完成",
      id:"working"
    },
    {
      title:"已完成",
      id:"done"
    }
  ])
  const [ clickTab,setClickTab ] = useState("all");

  const value = { tabs,clickTab,setClickTab }
  
  return(
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  )
}