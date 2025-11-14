import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


       const AppContext = createContext();
     export const queryClient = new QueryClient();

export default function AppProvider({children}){

           const [mode, setMode] = useState("dark");
           const theme = useMemo(() => {
              return createTheme({
                 palette: {
                        mode: mode,
                     },
            })
           }, [mode]);

    return <AppContext.Provider value={{ mode, setMode }}>
                  <QueryClientProvider client={queryClient} >
                     <ThemeProvider theme = {theme} >
                         {children}
                         <CssBaseline />
                     </ThemeProvider>
                  </QueryClientProvider>
           </AppContext.Provider>
}

export function useApp(){
    return useContext(AppContext);
}