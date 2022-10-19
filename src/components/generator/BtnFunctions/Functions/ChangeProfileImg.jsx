import { useState } from "react";
import styled from "styled-components";

export default function ChangePicture(){
    const[images,setImages]=useState([])
    const uploadPhoto=(file)=>{       
         const arr=Array.from(file) //por si quisiera subir mas de una foto aunque podria usar spred operator
         const allImg= arr.map((e)=>{
            return URL.createObjectURL(e)
         })           
         setImages(allImg)        
        }
    return(
  
        <Photo type='file' onChange={(e)=>uploadPhoto(e.target.files)} accept="image/jpeg, image/png"/>
     
    )
}
const Photo=styled.input`
    width:  100%;
    cursor: pointer;
`