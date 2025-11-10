import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{ App} from './Hello.jsx'
import DynamicValue from './01_dynamicValueInJSX.jsx'
import Conditional from './02_conditional.jsx'
import JsonMap from './03_looping.jsx'
import Parent from './propsWithDestructing/parent.jsx'
import Parent1 from './propsWithOutDestructing/parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DynamicValue/>
   <Conditional/>
   <JsonMap/>
   <Parent/>
   <Parent1/>
  </StrictMode>,
)
