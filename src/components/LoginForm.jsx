import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </>
    )
}

export default LoginForm;