import { useState } from "react";

function Form() {
    const [user, setUser] = useState({email:"",passwd:""});
    return (
        <>
        <input onChange={e => setUser({...user, email:e.target.value})} />
        <input type="password" onChange={e => setUser({...user, passwd:e.target.value})} />
        </>
    );
}

export default Form;