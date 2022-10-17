import styled from "styled-components";
import { useState,useEffect } from "react";
import FontMenu from "./Functions/DropdownMenu";
import ValuesBar from "./Functions/OpacityValues";
import Trimmings from "./Functions/ImageShape";
import ChekBack from "./Functions/BackgroundColors";
export default function GirdOfButtons(){
  const[imageProfile,setImageProfile]=useState('') 
  return(
        <Cotnainer>
              <div className="ftn-container">
                <FontMenu/>
              </div>
              <div className="ftn-container">
                <button>imagen de perfil</button></div>
              <div className="ftn-container">
                <ChekBack/></div>
              <div className="ftn-container">
                   <ValuesBar/>
              </div>
              <div className="ftn-container">
                bordes y estilos
              </div>
              <div className="ftn-container">
                Sombras para efectos 3D
              </div>
              <div className="ftn-container">
                <Trimmings/>
              </div>
              <div className="ftn-container">
                botones de rede sociales
              </div>
              <div className="ftn-container">
                vertical u horizontal
              </div>
        </Cotnainer>
    )
}
const Cotnainer=styled.div`
     width: 40%;
    height: 100%;
    outline: 2px solid blue;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .ftn-container{
        outline: 2px solid black;
        width: 180px;
        height: 130px;
        text-align: center;
       // margin: auto;
    }
`