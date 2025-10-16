// import React from "react";
// import { useContext} from "react";
// import { TodoContext } from "./context/Todocontext";
// const Shared1=() => {
//     const arr=useContext(TodoContext);
//     return (
//         <div>
//             {arr.map((e)=><>
//             <div className="mb-3">
//                 {e}
//                 <br/>
//             </div>     
//             </>)}
//         </div>
//     )
// }   
// export default Shared1;
import React from 'react'
import { useContext } from 'react';
import { TodoContext } from './context/Todocontext.jsx';

const Shared1 = () => {
    const {arr}=useContext(TodoContext);
  return (
    <div>
        {arr.map((e) => <>
            <div >{e}</div>
            </>
        )}
    </div>
  )
}

export default Shared1