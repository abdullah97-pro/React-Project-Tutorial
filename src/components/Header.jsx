// function Header({children}) {
//     return (
//         <div className="box">
//             {children}
//         </div>
//     )
// }
import './css/header.css';
import styles from './css/Header.module.css';


function Header({header,content}) {
    return (
        <>
        <header className={styles.header}>{header}</header>
        <header className='header'>Testing</header>
        <main>{content}</main>
        </>
    )
}

export default Header;