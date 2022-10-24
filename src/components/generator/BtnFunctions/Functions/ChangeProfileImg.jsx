import { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../../../../context/ColorContext";

export default function ChangePicture(){
    const { setImages } = useContext(ColorContext);

    const uploadPhoto=(file)=>{       
        const arr=Array.from(file) //por si quisiera subir mas de una foto aunque podria usar spred operator
        const allImg= arr.map((e)=>{
           return URL.createObjectURL(e)      
        })       
         setImages(allImg)
        }

    return(
        <Container>
            <label>
            <span className="click">subir foto aqui</span>
        <Photo type='file' onChange={(e)=>uploadPhoto(e.target.files)} accept="image/jpeg, image/png"/> 
        </label>
        </Container>
    )
}
const Container=styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    .click{
        cursor: pointer;
        border: 2px solid #3e3e72;
        padding: 3%;
        color: #fff;
    }
`
const Photo=styled.input`
    width:  100%;
    display: none;
`