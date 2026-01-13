import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Welcome() {
  // const [isOn, setIsOn] = useState(false);

  // return (
  //   <button onClick={() => setIsOn(!isOn)}>
  //     {isOn ? "ON" : "OFF"}
  //   </button>
  // );
  useEffect(()=>{
    console.log("Component Mount");
  },[]);

  return(
    <>
    <h1>Welcome page</h1>
    <Link to="/user">User</Link>
    <Link to="/form">Form</Link>
    </>
  );
}

export default Welcome;