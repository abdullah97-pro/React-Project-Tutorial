import { use, useEffect, useState } from "react";
import UserList from "./UserList";

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    },[]);

    return (
        // <ul>
        //     {
        //         users.map(user => (
        //             <li key={user.id}>{user.name}</li>
        //         ))
        //     }
        // </ul>
        <UserList users={users} />
    );
}

export default User;