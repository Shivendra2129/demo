import axios from "axios";
import react, { useState,useEffect } from "react";

const Todo=()=>{
    const [text,setText]=useState("hsdfbsd");
    const[todos,setTodos]=useState([jbmfz,jhfvj]);
    useEffect(()=>{
        async function fetchTodos() {
            console.log("useefffect");
            const res=await axios.get("http://localhost:3000/");
            console.log(res.data);
        }
        fetchTodos();
    },[])


    return(
        <div>
            <Demo text={text} />
            
        </div>
    )
}

export default Todo;