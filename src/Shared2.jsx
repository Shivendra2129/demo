// import React, {use, useState} from "react";
// import { useContext} from "react";
// import { TodoContext } from "./context/Todocontext";

// const Shared2=() => {
//     const {setArr}=useContext(TodoContext);
//     return (
//         <div>
//             <button onClick={()=>setArr(["Changed","Changed2"])}>
//                 Change
//             </button>

//         </div>
//     );
// }
// export default Shared2;
import React from 'react'
import { useContext } from 'react';
import { TodoContext } from './context/Todocontext.jsx';
const Shared2 = () => {
    const {setArr}=useContext(TodoContext);
  return (
    <div>
      <button onClick={()=>setArr(["changed","changed1"])}>change</button>
    </div>
  )
}

export default Shared2