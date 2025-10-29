        import { useState, useRef } from "react";
        import Item from "./Item";

  
        function List({children}){
         return <ul style={{ listStyle:"none", padding: 21, background: "#608000", color:"#fff", }}>
                       {children}
                </ul>
        }


export default function App() {

    const inputRef = useRef();

  const [data, setData] = useState([
      {id:3,name: "Three", done: "true"},
      {id:2,name: "Two", done: "false"},
      {id:1,name: "One", done: "false"},
  ]);

     function add() {
             const id = data[0].id + 1;

             const name = inputRef.current.value;
               if (name == "") return false;

          setData([{id, name, done: "false"},...data]);
     }

     const remove = id => {
        setData(data.filter( data => data.id != id ));
      }

  return  <>
            <h1> React WEB... ... ... </h1>
                {/* <button onClick= {add} >+</button> */}
                <button> Lists - { data.length } </button>
                <br />
                <br />

                <form style={{ display:"flex", justifyContent:"center", }} onSubmit={ e => {
                    e.preventDefault();
                    add();
                    e.currentTarget.reset();
                } } >

                  <input type="text" ref={inputRef} />
                  <button style={{ marginLeft:6, color:"#fff", background:"#608000", border:"none", }} type="submit">Add</button>
                </form>

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