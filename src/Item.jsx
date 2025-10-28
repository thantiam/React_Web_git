export default function Item({data, remove }) {
          return <li> 
            {data.name}
              <button onClick={ () => remove(data.id)} > &times; </button> 
            </li>
        }