import { Child } from "./child.jsx";
export const Parent=()=>{

    const handleClick=()=>{
        alert("Button in Child Clicked!");
    }

    return(
        <>
            <h2>Props with Event Handling</h2>
            <Child onBtnClick={handleClick}/>
        </>
    )
}