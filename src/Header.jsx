import { AppBar, Toolbar, Typography, } from "@mui/material";





export default function Header() {
    return <AppBar position="static" sx={{ bgcolor: "#608000" }}>
             <Toolbar>
                 <Typography fontSize={25}>Todo Lists...</Typography>
             </Toolbar>
           </AppBar>
}