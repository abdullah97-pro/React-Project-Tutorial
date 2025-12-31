// function Header({children}) {
//     return (
//         <div className="box">
//             {children}
//         </div>
//     )
// }
import './css/header.css'
function Header({header,content}) {
    return (
        <>
        <header>{header}</header>
        <main>{content}</main>
        </>
    )
}

export default Header;