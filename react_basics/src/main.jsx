import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  App  from './App.jsx'
import DynamicValue from './01_dynamicValueInJSX.jsx'
import Conditional from './02_conditional.jsx'
import JsonMap from './03_looping.jsx'
import { Parent } from './propsWithEvent/parent.jsx'
import Parent1 from './propsWithOutDestructing/parent.jsx'
import { EventHandling } from './04_eventHandling.jsx'
import EventPropagationDemo from './05_eventPropogation.jsx'
import EventPropagationWithP from './05_eventPropogation.jsx'
import EventPropagation from './05_eventPropogation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <DynamicValue/>
   <Conditional/>
   <JsonMap/>
   <Parent/>
   <Parent1/> */
    /* <EventHandling />
    <Parent/> */}

    {/* <EventPropagation /> */}

    <App/>
  </StrictMode>,
)
