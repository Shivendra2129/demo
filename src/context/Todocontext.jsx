// import React from "react";
// import { createContext, useState } from "react";


// export const TodoContext=createContext();

// export const TodoProvider=({children})=>{
//     const [arr,setArr]=useState(["hello","world"]);
//     return(
//         <TodoContext.Provider value={{arr,setArr}}>
//             {children}
//         </TodoContext.Provider>
//     )
// }

import { createContext, useState } from "react";
import React from "react";
export const TodoContext=createContext();

export const TodoProvider=({children})=>{
    const [arr,setArr]=useState(["Apple","Banana"]);
    return(
        <TodoContext.Provider value={{arr,setArr}}>
            {children}
        </TodoContext.Provider>
    )
}