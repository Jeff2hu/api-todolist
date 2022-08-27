import { createContext,useContext,useEffect,useState } from "react";
import { LoginContext } from "../login/LoginContext";

export const TodoListContext = createContext({
  tabs:[],
  clickTab:"",
  setClickTab:"",
  filterData:[]
});

export const TodoListProvider = ({children}) => {

  const { data } = useContext(LoginContext);
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
  const [ filterData,setFilterData ] = useState([]);

  useEffect(()=>{
    switch(clickTab){
      case"all":
        setFilterData(data.todos)
        break;
      case"working":
        setFilterData(data.todos.filter((item)=>!item.completed_at))
        break;
      case"done":
        setFilterData(data.todos.filter((item)=>item.completed_at))
        break;
      }
  },[data,clickTab])

  const value = { tabs,clickTab,setClickTab,filterData }
  
  return(
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  )
}