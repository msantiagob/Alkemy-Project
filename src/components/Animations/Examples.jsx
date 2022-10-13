import { useState } from "react";
import styled from "styled-components";
import Bubble from "./Blubble";
import ShakeIt from "./EarthQuake";
import GradientMotion from "./GradientMoves";
import Loop from "./LoopsUps";
import Letters from "./NeonLetters";
import DotsRotation from "./Spiral";


export default function Lauta (){
    const[show,setShow]=useState('')
    const[gradient,setGradient]=useState('')
    const[dots,setDots]=useState('')
    const[corner,setCorner]=useState('')
    const[neon,setNeon]=useState('')
    const[booty,setBooty]=useState('')
    function seeBubbles(){
        if(show === ''){
            setShow('yes')
            setGradient('')
            setDots('')
            setCorner('')
            setNeon('')
        }else{
            setShow('')
        }
    }
    function seeGradient(){
        if(gradient === ''){
            setGradient('yes')
            setShow('')
            setNeon('')
            setDots('')
            setCorner('')
        }else{
            setGradient('')
        }
    }
    function seeDots(){
        if(dots === ''){
            setDots('yes')
            setGradient('')
            setShow('')
            setNeon('')
            setCorner('')
        }else{
            setDots('')
        }
    }
    function visibleCorner(){
        if(corner === ''){
            setDots('')
            setGradient('')
            setShow('')
            setNeon('')
            setCorner('yes')
        }else{
            setCorner('')
    }}
    function seeNeons(){
        if( neon === ''){
            setDots('')
            setGradient('')
            setShow('')
            setNeon('yes')
            setCorner('')
        }else{
            setNeon('')
        }
    }
    function seeQuake(){
        if( booty === ''){
            setDots('')
            setGradient('')
            setShow('')
            setBooty('yes')
            setNeon('')
            setCorner('')
        }else{
            setBooty('')
        }
    }
    return(<Example>
        <div className="ani-container">
            <article className="info-container">
                <header>Lautaro aniamciones </header>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt='imagen-de-muestra'/>
                    <hr />
                    <div className="text-description">
                    <p>Desarrollador de aplicaciones Front-end con mas de 1 año de experiencia</p>
                    </div>
                    <footer className="social-media"><button>1</button>
                    <button>2</button>
                    <button>3</button></footer>
            </article>
        <Bubble ver={show}/>
        <GradientMotion ver={gradient}/>
        <DotsRotation ver={dots} />
        <Loop ver={corner}/>
        <Letters ver={neon}/>
        <ShakeIt  ver={booty}/>
        </div>
        <div className="btn-display">
        <button onClick={()=>seeBubbles()}>Burbujas </button>
        <button onClick={()=>seeGradient()}>Gradiente</button>
        <button onClick={()=>seeDots()}>Espiral</button>
        <button onClick={()=>visibleCorner()}> Esquinas</button>
        <button onClick={()=>seeNeons()}>Neon</button>
        <button onClick={()=>seeQuake()}>Piezas</button>
        <button>3</button>
        <button>4</button>
        </div>
    </Example>)
}

const Example=styled.div`
    display: grid;
    overflow-y: hidden;
    width: 100%;   
    height: 100vh;
    justify-content: center;   
    .ani-container{
        width: 600px;
        position: relative;
        margin-top: 4%;
        display: flex;       
        justify-content: center;
       .info-container{
        position: absolute;
        outline: 2px solid red;
        width: 240px;
        color: #fff;
        height: 380px;
        background: #000;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 1;
        display: grid;
        transition: all .78s ease-in;
        justify-content: space-between;
        transition-property: background;
        &:hover{
            background: transparent;
            transition-delay: .78s;
        }
        .text-description{
            width: 200px;
            height: 80px;
            margin-left: 8%;
        }
        hr{
            background:linear-gradient(90deg, red,blue);
            height: 3px;
            border: none;
            margin-left:  8%;
            width: 200px;
        }
        img{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-left: 5%;
        }
        header{
           // outline: 2px solid black;
            width: 200px;
            height: 30px;
            margin-left: 10%;
            margin-top: 5%;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: larger;
            letter-spacing: 0.5px;
            text-align: center;
        }
        .social-media{
            height: 50px;
            width: 120px;
           // outline: 2px solid black;
            margin-top: auto;
            margin-left: 14%;
            display: flex;
            justify-content: space-between;
            button{
                border-radius:50%;
                height: 35px;
                width: 35px;
                margin-top: auto;
                cursor: pointer;
                background: red;
                margin-bottom: 3%;
            }
        }

       }
    }
    .btn-display{
        width: 400px;
        outline: 2px solid blue;
        height: 100px;
        display: grid;
        margin: auto;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
        button{
            margin-top: 8%;
            margin-left:10% ;
            height: 24px;
            width: 70px;
        }
    }
`