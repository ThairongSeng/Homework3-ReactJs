export function FormSubmit(){

    const handleClick = () => {
        alert("Hello")
    }
    function otherHandleClick(){
        alert("istad")
    }

    return (
        <>
            <h1>Welcome</h1>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={otherHandleClick}>Click Here</button>
            <button onClick={() => alert("Hi")}>Click</button>
        </>
    )
    
}