export function UserGreeting({name}){
    return (
        <h1>Welcome, back {name}</h1>
    )
}

export function GuestGreeting(){
    return (
        <h1>Please sign up!</h1>
    )
}

export function Greeting({isLogin}){
    // if(isLogin){
    //     return <UserGreeting name="Ah Bee"/>
    // }
    // return <GuestGreeting/>

    return isLogin ? <UserGreeting name="Ah Bee"/> : <GuestGreeting/>
    //condition ? true_express : false_express
}