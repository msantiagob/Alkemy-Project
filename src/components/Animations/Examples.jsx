import { useState,useEffect } from "react";
import Bubble from "./Blubble";


export default function Lauta (){
    const[show,setShow]=useState('')
    function seeBubbles(){
        if(show === ''){
            setShow('yes')
        }else{
            setShow('')
        }
    }
    return(<div>
        <Bubble ver={show}/>
        <button onClick={()=>seeBubbles()}>Animar </button>
    </div>)
}