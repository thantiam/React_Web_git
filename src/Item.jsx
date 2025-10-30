export default function Item({data, toggle, remove }) {
          return <li> 
              <button style={{ marginRight:12, }} onClick={ () => toggle(data.id)} > Check </button> 
            {data.name}
              <button style={{ marginLeft:12, }} onClick={ () => remove(data.id)} > &times; </button> 
            </li>
        }