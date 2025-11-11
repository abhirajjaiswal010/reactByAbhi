import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './Hello.jsx'
import DynamicValue from './01_dynamicValueInJSX.jsx'
import Conditional from './02_conditional.jsx'
import JsonMap from './03_looping.jsx'
import {Parent} from './propsWithEvent/parent.jsx'
import Parent1 from './propsWithOutDestructing/parent.jsx'
import { EventHandling } from './04_eventHandling.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <DynamicValue/>
   <Conditional/>
   <JsonMap/>
   <Parent/>
   <Parent1/> */}
    <EventHandling />
    <Parent/>
  </StrictMode>,
)
