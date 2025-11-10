import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{ App} from './Hello.jsx'
import DynamicValue from './01_dynamicValueInJSX.jsx'
import Conditional from './02_conditional.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DynamicValue/>
   <Conditional/>
  </StrictMode>,
)
