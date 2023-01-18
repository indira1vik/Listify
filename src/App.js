import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './MyComponents/Header.js'
import { Addit } from "./MyComponents/Addit";
import { Footer } from "./MyComponents/Footer.js";
import { Todos } from "./MyComponents/Todos";

const getit = ()=> {
  let initList = localStorage.getItem("List");
  if (initList){
    return JSON.parse(localStorage.getItem("List"));
  }else{
    return [];
  }
}

function App() {
  const onDelete = (each) => {
    setList(List.filter((e)=>{
      return e!==each;
    }));

  }

  const addtolist = (title,desc) => {
    console.log("Clicked");
    let sno;
    if (List.length === 0){
      sno = 0;
    }else{
      sno = List[List.length-1].sno+1;
    }
    const myAdder = {
      sno:sno,
      title:title,
      desc:desc
    }
    setList([...List,myAdder]);
    
  }

  const [List,setList] = useState(getit);
  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(List));
  }, [List]);

  return (
    <>
      <Header title="Listify"/>
      <Addit addtolist={addtolist}/>
      <Todos list={List} onDelete={onDelete}/>
      <Footer/>
    </>

  );
}
export default App;