import styled from "styled-components";
import SpaceWorker from "../space-worker/SpaceWorker";
import Code from "../space-worker/code/Code";

const Background = styled.div`
  background: gray;
`;

  
const Generator = () => {
 
  
  return (
    <Background>
      <SpaceWorker />
      <br />
      <Code />
    </Background>
  );
};

export default Generator;
