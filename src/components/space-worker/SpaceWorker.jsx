import Card from "./card/Card";
import Picker from "./picker/Picker";
import { Info, Add, Delete, Edit } from "./card/Buttons";
import { useState } from "react";
import styled from "styled-components";

const SpaceWorker = () => {
  const [orientation, setOrientation] = useState(false);
  const [background, setBackground] = useState("black");
  const changeOrientation = () => {
    setOrientation(!orientation);
  };

  const cardProperties = {
    orientation: orientation,
    background: background,
    buttons: {
      info: false,
      Delete: false,
      Add: false,
      Edit: false,
    },
  };

  return (
    <SWorker>
      <Performance>
        <Picker />
        <Button onClick={changeOrientation}>submit</Button>
        <Div>
          <Info />
          <Delete />
          <Add />
          <Edit />
        </Div>
      </Performance>
      <Work>
        <Card cardProperties={cardProperties} />
      </Work>
    </SWorker>
  );
};
const SWorker = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  height: 450px;
  text-align: center;
`;
const Work = styled.div`
  width: 290px;
`;

const Performance = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Div = styled.div``;
const Button = styled.button`
  margin: 5px;
`;

export default SpaceWorker;
