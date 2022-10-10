import styled from "styled-components";
import SpaceWorker from "../space-worker/SpaceWorker";
import Code from "../code/Code";
import DragDrop from "../drag-drop/DragDrop";

const Background = styled.div`
  background: gray;
`;
const Generator = () => {
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
