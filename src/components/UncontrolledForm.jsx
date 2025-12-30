import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const submit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={submit}>Submit</button>
    </>
  );
}

export default UncontrolledForm;