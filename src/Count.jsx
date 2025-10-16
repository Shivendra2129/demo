import React from "react";
import { useState } from "react";

 const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button className="" onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default Count;