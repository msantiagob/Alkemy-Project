import styled from "styled-components";
import { SketchPicker } from "react-color";
import { useState } from "react";
import { Horizontal, Vertical } from "../Cards/Cards";
const Generator = () => {
  const [color, setColor] = useState("#fff");
  const Background = styled.div`
    background: ${color};
  `;
  return (
    <Background>
      <Performance>
        <div>
          <Horizontal />
        </div>
        <SketchPicker
          color={color}
          onChangeComplete={(color) => {
            setColor(color.hex);
          }}
        />
        <Vertical />
      </Performance>
      <br />
      <Code>
        <SubTitle>HTML</SubTitle>

        <pre>{`
  <article>
    <img src={props.character.image} alt="" />
    <div class=${color} ></div>
  </article>
`}</pre>
        <SubTitle>CSS</SubTitle>
        <pre>{`
article {
    background-color: rgb(60, 62, 68);
    width: 290px;
    color: white;
    margin: 10px;
    border-radius: 25px;
  }
  img {
    border: none;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    width: 290px;
  }

  `}</pre>
      </Code>
    </Background>
  );
};

//css
//Page Design

const Performance = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  text-align: center;
`;
//Code
const Code = styled.div`
  background: #5c5c5b;
  color: white;
`;
const SubTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: white;
  border-bottom: 1px solid #fff;
`;
// const Card = styled.div`
//   background: ${color};
//   width: 200px;
//   height: 200px;
//   border-radius: 3px;
// `;

export default Generator;
