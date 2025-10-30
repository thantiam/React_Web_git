        import { useState, useRef } from "react";
        import Item from "./Item";

  
        function List({children,data}){
           const style = { 
             listStyle:"none", padding: 21, 
             background: "#608000",
             color:"#fff", 
           };

         return <ul style={style}>
                       {children}
                </ul>
        }


export default function App() {

    const inputRef = useRef();

  const [data, setData] = useState([
      // {id:3,name: "Three", done: true},
      // {id:2,name: "Two", done: false},
      // {id:1,name: "One", done: false},
  ]);

     function add() {
             const id = data.length ? data[0].id + 1 : 1;

             const name = inputRef.current.value;
               if (name == "") return false;

          setData([{id, name, done: false},...data]);
     }

     const toggle = id => {
          setData(
            data.map(data => {
             if (data.id == id ) data.done = !data.done;
            return data;
          })
        ); 
     }

     const remove = id => {
        setData(data.filter( data => data.id != id ));
      }

  return  <>
            <h1> React WEB... ... ... </h1>
                {/* <button onClick= {add} >+</button> */}
                {/* <button> Lists - { data.filter(data => !data.done).length } </button> */}
                <br />
                <br />

                <form style={{ display:"flex", justifyContent:"center", }} onSubmit={ e => {
                    e.preventDefault();
                    add();
                    e.currentTarget.reset();
                } } >

                  <input placeholder="To Do List..." type="text" ref={inputRef} />
                  <button style={{ marginLeft:6, color:"#fff", background:"#608000", border:"none", }} type="submit">Add</button>
                </form>
                <br /><br />
             <h3>To Do Lists - { data.filter(data => !data.done).length }</h3>

            <List>
               { data.filter(data => !data.done).map(data => {
                    return <Item 
                      key = {data.id}
                      data = {data}
                      remove = { remove }
                      toggle = {toggle}
                      />
                    })}
            </List>
                <br />
                <hr />
                <br />
                
                <h3>Done - { data.filter(data => data.done).length }</h3>
                <br />
                <List>
               { data.filter(data => data.done).map(data => {
                    return <Item 
                      key = {data.id}
                      data = {data}
                      remove = { remove }
                      toggle = {toggle}
                      />
                    })}
            </List>
          </>
}