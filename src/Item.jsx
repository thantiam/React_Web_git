import { ListItem, ListItemText, IconButton } from "@mui/material";
import { 
  Delete as DeleteIcon,
  Check as CheckIcon, 
  Replay as UndoneIcon,
} from "@mui/icons-material";


export default function Item({data, toggle, remove }) {
          return <ListItem> 
              {/* {data.done ? 
                      ( <button style={{ marginRight:12, }} onClick={ () => toggle(data.id)} > Undo </button> )
                      <IconButton onClick={ () => toggle(data.id)} >
                          <UndoneIcon sx={{ color:"orange" }}/>
                      </IconButton>
                      :
                      ( <button style={{ marginRight:12, }} onClick={ () => toggle(data.id)} > Check </button> )
                      <IconButton onClick={ () => toggle(data.id)} >
                          <CheckIcon sx={{ color: "#608000" }} />
                      </IconButton>
              } */}

                 <IconButton onClick={ () => toggle(data.id)} >
                          {  data.done ? 
                                         <UndoneIcon sx={{ color:"orange" }}/> 
                                       : <CheckIcon sx={{ color: "#608000" }} /> 
                             }
                 </IconButton>

                 <ListItemText secondary = {data.name} />



              {/* <button style={{ marginLeft:12, }} onClick={ () => remove(data.id)} > &times; </button>  */}
              <IconButton onClick={ () => remove(data.id)} >
                <DeleteIcon sx={{ color:"red" }} />
              </IconButton>


            </ListItem>
        }