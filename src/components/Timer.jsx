// import { useEffect, useState } from "react";

// import { useRef } from "react";

// function Timer() {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(prev => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <p>Time: {time}s</p>;
// }
// export default Timer;

// function Timer() {
//   const intervalRef = useRef(null);

//   const start = () => {
//     intervalRef.current = setInterval(() => {
//       console.log("Running...");
//     }, 1000);
//   }

//   const stop = () => {
//     clearInterval(intervalRef.current);
//   }

//   return (
//     <>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </>
//   );
// }


import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

function Timer() {
  const inputRef = useRef(null);

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus Child Input
      </button>
    </>
  );
}


export default Timer;