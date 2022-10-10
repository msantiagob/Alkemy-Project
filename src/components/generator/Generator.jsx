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
      <DragDrop />
      <SpaceWorker />
      <br />
      <Code />
    </Background>
  );
};

export default Generator;
