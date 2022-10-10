import style from "styled-components";
import { useState } from "react";
import DragDrop from "../drag-drop/DragDrop";
import SpaceWorker from "../space-worker/SpaceWorker";
import Code from "../code/Code";
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
