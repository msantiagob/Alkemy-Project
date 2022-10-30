import { useState } from "react";
import styled from "styled-components";
import Bubble from "./Blubble";
import ShakeIt from "./EarthQuake";
import GradientMotion from "./GradientMoves";
import Loop from "./LoopsUps";
import Letters from "./NeonLetters";
import DotsRotation from "./Spiral";
import TagsforBubbles from "./TagsAndStyles/BubbleTags";
import TagsforEarthQuake from "./TagsAndStyles/EarthQuakeTags";
import TagsforGradient from "./TagsAndStyles/GradientTags";
import TagsforLoops from "./TagsAndStyles/LoopsTags";
import TagsforNeon from "./TagsAndStyles/NeonTags";
import TagsforSpiral from "./TagsAndStyles/SpiralTags";

export default function Model() {
  const [show, setShow] = useState("");
  const [gradient, setGradient] = useState("");
  const [dots, setDots] = useState("");
  const [corner, setCorner] = useState("");
  const [neon, setNeon] = useState("");
  const [moving, setMoving] = useState("");
  
  function seeBubbles() {
    if (show === "") {
      setShow("yes");
      setGradient("");
      setDots("");
      setCorner("");
      setNeon("");
    } else {
      setShow("");
    }
  }
  function seeGradient() {
    if (gradient === "") {
      setGradient("yes");
      setShow("");
      setNeon("");
      setDots("");
      setCorner("");
    } else {
      setGradient("");
    }
  }
  function seeDots() {
    if (dots === "") {
      setDots("yes");
      setGradient("");
      setShow("");
      setNeon("");
      setCorner("");
    } else {
      setDots("");
    }
  }
  function visibleCorner() {
    if (corner === "") {
      setDots("");
      setGradient("");
      setShow("");
      setNeon("");
      setCorner("yes");
    } else {
      setCorner("");
    }
  }
  function seeNeons() {
    if (neon === "") {
      setDots("");
      setGradient("");
      setShow("");
      setNeon("yes");
      setCorner("");
    } else {
      setNeon("");
    }
  }
  function seeQuake() {
    if (moving === "") {
      setDots("");
      setGradient("");
      setShow("");
      setMoving("yes");
      setNeon("");
      setCorner("");
    } else {
      setMoving("");
    }
  }

  const showCode = () => {
    if (show === "yes") {
      return <TagsforBubbles/>;
    } else if (moving === "yes") {
      return <TagsforEarthQuake/>;
    } else if (gradient === "yes") {
      return <TagsforGradient/>;
    } else if (corner === "yes") {
      return <TagsforLoops/>;
    } else if (neon === "yes") {
      return <TagsforNeon/>;
    } else if (dots === "yes") {
      return <TagsforSpiral/>;
    } else {
      return <p>Elija una animación. Su código aparecerá aquí</p>;
    }
  };

  return (
    <Container>
      <Example>
        <div className="ani-container">
          <article className="info-container">
            <header>Animaciones de fondo </header>
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="imagen-de-muestra"
            />
            <hr />
            <div className="text-description">
              <p>
                Desarrollamos las animaciones de aplicaciones Front-end con el fin
                de hacer mas agradable la experiencia visual de tu portafolio personal
              </p>
            </div>
            <footer className="social-media">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </footer>
          </article>
          <Bubble ver={show} />
          <GradientMotion ver={gradient} />
          <DotsRotation ver={dots} />
          <Loop ver={corner} />
          <Letters ver={neon} />
          <ShakeIt ver={moving} />
        </div>
        <div className="btn-display">
          <button onClick={() => seeBubbles()}>Burbujas </button>
          <button onClick={() => seeGradient()}>Gradiente</button>
          <button onClick={() => seeDots()}>Espiral</button>
          <button onClick={() => visibleCorner()}> Esquinas</button>
          <button onClick={() => seeNeons()}>Neon</button>
          <button onClick={() => seeQuake()}>Piezas</button>
          <button>3</button>
          <button>4</button>
        </div>
      </Example>
      <div className="code">
        <div className="boxcode">
          <h3 className="title">Etiquetas y Estilos</h3>
          {showCode()}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  background: #8888fc;
  .code {
    height: 100%;
    width: 50%;
    margin: auto;
  }
  .boxcode {
    margin-top: 4%;
    width: 90%;
    outline: 2px solid #3e3e72;
    color: #000000;
    box-shadow: inset 0px 0px 10px 0px #fff;
    padding: 5px;
    overflow-y: scroll;
    max-height: 80vh;
    ::-webkit-scrollbar{
            width: 10px;
        }
        ::-webkit-scrollbar-track{
            background: #3e3e72e8;
        }
        ::-webkit-scrollbar-thumb{
            background: #fff;
            border-radius: 100vw;
        }
  }
  .title {
    margin-bottom: 1%;
  }
`;
const Example = styled.div`
  display: grid;
  overflow-y: hidden;
  width: 700px;
  height: 100vh;
  justify-content: center;
  .ani-container {
    width: 600px;
    position: relative;
    margin-top: 4%;
    display: flex;
    justify-content: center;
    .info-container {
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
      transition: all 0.78s ease-in;
      justify-content: space-between;
      transition-property: background;
      &:hover {
        background: transparent;
        transition-delay: 0.78s;
      }
      .text-description {
        width: 200px;
        height: 80px;
        margin-left: 8%;
        font-size: 14px;
      }
      hr {
        background: linear-gradient(90deg, red, blue);
        height: 3px;
        border: none;
        margin-left: 8%;
        width: 200px;
      }
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin-left: 5%;
      }
      header {
        width: 200px;
        height: 30px;
        margin-left: 10%;
        margin-top: 5%;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: larger;
        letter-spacing: 0.5px;
        text-align: center;
      }
      .social-media {
        height: 50px;
        width: 120px;
        margin-top: auto;
        margin-left: 14%;
        display: flex;
        justify-content: space-between;
        button {
          border-radius: 50%;
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
  .btn-display {
    width: 400px;
    border: 2px solid #3e3e72;
    height: 100px;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    button {
      margin-top: 8%;
      margin-left: 10%;
      width: 68px;
      height: 24px;
      margin: auto;
      background: #3e3e72;
      color: #fff;
      border: none;
      border-radius:5px;
      cursor: pointer;
    }
  }
`;
