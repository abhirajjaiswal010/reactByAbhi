export const EventHandling = () => {
    const handleBtnClick = (e) => {
        console.log(e);

        alert("Button Clicked!");
    }
    return (
        <>
            <button onClick={handleBtnClick}>hey bro click me </button>
            <button onClick={()=>handleBtnClick()}>hey bro click me </button>
        </>
    )
}