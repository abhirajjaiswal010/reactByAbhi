import { Home } from "./components/home"
import { ThemeProvider } from "./components/Toggle"

export const App=()=>{
return<>
<ThemeProvider>
<Home/>
</ThemeProvider>

</>
}
