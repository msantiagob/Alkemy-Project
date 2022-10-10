import { useState } from "react";
import styled,{keyframes} from "styled-components";

export default function Loop({ver}){
    const[time,setTime]=useState(4) 
    return(
        <Container variant={ver} timeLapse={`${time}s`} onMouseOver={()=>setTime(1)} onMouseOut={()=>setTime(4)} >
            <div className="content-animation">
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            <div className="spiral"  >
            <div className="diamond4">
            </div>
            <div className="diamond4">
            </div>
            </div>
            </div>
        </Container>
    )
}
const animate=keyframes`
    0%{
        transform: rotateY(0deg);
        opacity: 1;
    }
    25%{
        opacity: 0.8;
    }
    50%{
        opacity: 0.6;
    }
    75%{
        opacity: 0.8;
    }
    100%{
        transform: rotateY(360deg);
       opacity: 1;
    }
`

const Container=styled.div`
    height: 500px;
    width: 400px;
    border: 2px solid black;
    overflow: hidden;
    position: absolute;
    top: 0;  
    --c: #1095c1;
    background: 
    linear-gradient(45deg, #fff 50%, var(--c) 0) calc(100% - var(--_p, 0%)) / 200%, 
    linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) no-repeat,
    var(--_c, #0000);
    display: flex;
    justify-content: center;
    text-align: center;
    visibility: ${(props)=>props.variant === '' ? 'hidden' : props.variant === 'yes' ? 'visible' : 'hidden'};
    .content-animation{
        height: 500px;
        width: 500px;
        position: relative;
    }
     .spiral{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.3%;
     }
    .diamond4 {
        border-style: solid;
        border-color: transparent transparent #4ee80c transparent;
        border-width: 0 12.5px 12.5px 12.5px;
        height: 0;
        width: 25px;
        box-sizing: content-box;
        position: relative;
        margin: 10px 0 25px 0;
        animation: ${animate} linear ${(props)=>props.timeLapse} infinite;
       
        &::after {
            content: '';
            position: absolute;
            top: 12.5px;
            left: -12.5px;
            width: 0;
            height: 0;
            border-style: solid;
            border-color: #4ee80c transparent transparent transparent;
            border-width: 35px 25px 0 25px;
            
        }
    }
    &:hover {
        color: #fff;
  --_c: var(--c);
  --_p: 100%;
  transition: 2.5s, color 2s 2.5s, background-color 2s 2.5s;
  }
  
`


