import { useRef, useEffect } from "react";

function RenderCounter() {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return <p>Rendered {renderCount.current} times</p>;
}

export default RenderCounter;