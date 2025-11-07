        import { useState } from "react";
        import Item from "./Item";
        import Header from "./Header";
        import Form from "./Form";
        import { Typography, Container, List, Divider } from "@mui/material";

  
        // function List({children,data}){
        //    const style = { 
        //      listStyle:"none", padding: 21, 
        //      background: "#608000",
        //      color:"#fff", 
        //      borderRadius: 6,
        //    };

        //  return <ul style={style}>
        //                {children}
        //         </ul>
        // }


export default function App() {

    // const inputRef = useRef();

  const [data, setData] = useState([
      // {id:3,name: "Three", done: true},
      // {id:2,name: "Two", done: false},
      // {id:1,name: "One", done: false},
  ]);

     function add(name) {
             const id = data.length ? data[0].id + 1 : 1;

            //  const name = inputRef.current.value;
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
            <Header count={data.filter(data => !data.done).length} /> 
            {/* <h1> React WEB... ... ... </h1>
                <button onClick= {add} >+</button>
                <button> Lists - { data.filter(data => !data.done).length } </button>
                <br />
                <br /> */}

               <Container maxWidth = "sm" sx = {{ my: 4, }} >

                 {/* <form onSubmit={ e => {
                    e.preventDefault();
                    add();
                    e.currentTarget.reset();
                } } >

                  <input placeholder="To Do List..." type="text" ref={inputRef} />
                  <button style={{ marginLeft:6, color:"#fff", background:"#608000", border:"none", }} type="submit">Add</button>
                </form> */}

                <Form add = {add} />

                <br /><br />
             <Typography color="#608000" fontWeight={600} >Lists - { data.filter(data => !data.done).length }</Typography>

            <List sx={{ color: "#000", borderRadius: 3, }} >
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
                <Divider />
                <br />
                
                <Typography color="#608000" fontWeight={600}>Done - { data.filter(data => data.done).length }</Typography>
                <br />
                <List sx={{ color: "#000", borderRadius: 3, }} >
               { data.filter(data => data.done).map(data => {
                    return <Item 
                      key = {data.id}
                      data = {data}
                      remove = { remove }
                      toggle = {toggle}
                      />
                    })}
            </List>
               </Container>
          </>
}