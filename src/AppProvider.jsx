import { createContext, useContext, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


       const AppContext = createContext();

export default function AppProvider({children}){

           const [mode, setMode] = useState("dark");
           const theme = createTheme({
                 palette: {
                        mode: mode,
                     },
            });

    return <AppContext.Provider value={{ mode, setMode }}>
                  <ThemeProvider theme = {theme} >
                    {children}
                    <CssBaseline />
                  </ThemeProvider>
           </AppContext.Provider>
}

export function useApp(){
    return useContext(AppContext);
}