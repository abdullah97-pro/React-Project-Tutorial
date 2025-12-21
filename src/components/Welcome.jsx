import { useEffect, useState } from "react";

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

  return <h1>Welcome to useEffect Hook</h1>
}

export default Welcome;