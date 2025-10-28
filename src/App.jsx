        import { useState } from "react";
        import Item from "./Item";

  
        function List(props){
         return <ul style={{ listStyle:"none", padding: 21, background: "#999" }}>
                       {props.children}
                </ul>
        }


export default function App() {
  const [data, setData] = useState([
      {id:3,name: "Three", done: "true"},
      {id:2,name: "Two", done: "false"},
      {id:1,name: "One", done: "false"},
  ]);

     function add(name) {
             const id = data[0].id + 1;
          setData([{id, name: "Ninety Sixty-nine", done: "false"},...data]);
     }

     const remove = id => {
        setData(data.filter( data => data.id != id ));
      }

  return  <>
            <h1> React WEB... ... ... </h1>
                <button onClick= {add} >+</button>
                <button> Lists - { data.length } </button>
            <List>
               { data.map(data => {
                    return <Item 
                      key = {data.id}
                      data = {data}
                      remove = { remove }
                     />
               })}
            </List>
          </>
}