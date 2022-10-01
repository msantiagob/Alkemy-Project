import styled, { ThemeConsumer } from "styled-components";
import { SketchPicker } from "react-color";
import { useState } from "react";
import { Horizontal, Vertical } from "../cards/Cards";
const Generator = () => {
  const [color, setColor] = useState("#fff");
  const Background = styled.div`
    background: ${color};
  `;
  return (
    <Background>
      <SpaceWorker>
        <Work>
          <Horizontal />
        </Work>
        <Performance>
          <SketchPicker
            color={color}
            onChangeComplete={(color) => {
              setColor(color.hex);
            }}
          />
        </Performance>
      </SpaceWorker>
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
const SpaceWorker = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 60px;
  text-align: center;
  margin: 20px 0 0 100px;
`;
const Work = styled.div`
  width: 290px;
`;

const Performance = styled.div`
  margin: 0 0 0 100px;
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
