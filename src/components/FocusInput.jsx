import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input  />
      <input ref={inputRef}/>
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default FocusInput;