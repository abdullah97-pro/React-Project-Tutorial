// function Header({children}) {
//     return (
//         <div className="box">
//             {children}
//         </div>
//     )
// }

function Header({header,content}) {
    return (
        <>
        <header>{header}</header>
        <main>{content}</main>
        </>
    )
}

export default Header;