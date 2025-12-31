import Header from "./Header"

export default function Button({text}) {
    return (
        <>
        <button>{text}</button>
        <Header text = {text}/>
        </>
    )
}