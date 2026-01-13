import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function UserList({ users = [] }) {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <>
      <input onChange={e => setSearch(e.target.value)} placeholder="Search" />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* <UserList users={users} /> */}

        <Link to="/">Welcome</Link>
        <Link to="/form">Form</Link>
    </>
  );
}

export default UserList;