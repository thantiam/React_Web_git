    import { useRef } from "react";

export default function Form({add}) { 

         const inputRef = useRef();

    return <form onSubmit={ e => {
                    e.preventDefault();
                    add(inputRef.current.value);
                    e.currentTarget.reset();
                } } >

                  <input placeholder="To Do List..." type="text" ref={inputRef} />
                  <button style={{ marginLeft:6, color:"#fff", background:"#608000", border:"none", }} type="submit">Add</button>
                </form>
}