import { useEffect, useRef, useState } from "react";

function PreviousValue() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(count);

    useEffect(() => {
        prevCount.current = count
    },[count]);

    return (
        <>
            <p><strong>Current: </strong>{count}</p>
            <p><strong>Previouse: </strong>{prevCount.current}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </>
    );
}

export default PreviousValue;