import { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <>
      <input onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="number" onChange={e => setAge(e.target.value)} placeholder="Age" />
      <p>{name} is {age} years old</p>
    </>
  );
}

export default UserProfile;