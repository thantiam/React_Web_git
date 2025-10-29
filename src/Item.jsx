export default function Item({data, remove }) {
          return <li> 
            {data.name}
              <button style={{ marginLeft:12, }} onClick={ () => remove(data.id)} > &times; </button> 
            </li>
        }