import styled from "styled-components";
import GirdOfButtons from "./BtnFunctions/BtnContainer";
import Wallet from "./CardModels/Cardwallet";
import MyCode from "./CardsCode/CodeGenerated";



export default function Generator(){
 
  
  return (
    <Container>
      <Cardplay>
        <Wallet/>
        <GirdOfButtons/>
      </Cardplay>
      <Codeplay>
      <MyCode/>
      </Codeplay>
    </Container>
  );
};



const Container = styled.body`
    display:  grid;    
    height: 100vh;
    width: auto;
    padding-top: 1%;
    background: none;
    color:#000000;
    background: #8888fc;

`

const Cardplay=styled.header`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1%;
`
const Codeplay=styled.footer`
  width: 100%;
  height: 30vh;
`