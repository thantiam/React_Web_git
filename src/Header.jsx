import { AppBar, Toolbar, Typography, Badge } from "@mui/material";





export default function Header({count}) {
    return <AppBar position="static" sx={{ bgcolor: "#608000" }}>
             <Toolbar>
                <Badge badgeContent = {count} color="error">
                 <Typography fontSize={25}>Todo Lists...</Typography>
                </Badge>
             </Toolbar>
           </AppBar>
}