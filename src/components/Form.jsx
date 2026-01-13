import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
    const [user, setUser] = useState({email:"",passwd:""});
    return (
        <>
        <input onChange={e => setUser({...user, email:e.target.value})} />
        <input type="password" onChange={e => setUser({...user, passwd:e.target.value})} />
        
        <Link to="/">Welcome</Link>
        <Link to="/user">User</Link>
        </>
    );
}

export default Form;