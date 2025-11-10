import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{ App} from './Hello.jsx'
import DynamicValue from './01_dynamicValueInJSX.jsx'
import  Status from './02_conditional.jsx'
import Message from './02_conditional.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DynamicValue/>
    {/* <GreetUser/> */}
    {/* <Message/> */}
    <Status/>
  </StrictMode>,
)
