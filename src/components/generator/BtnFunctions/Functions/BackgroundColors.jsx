import styled from "styled-components";
import { useContext  } from "react";
import ColorContext from "../../../../context/ColorContext";

export default function ChekBack(){
    const { handleBgColorChange } = useContext(ColorContext);

    return(
        <Container>
            <label htmlFor="bg-color">Color de fondo</label>
            <input type='color' name='bg-color' onChange={handleBgColorChange}/>

        </Container>
    )
}
const Container=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .back1{
        margin: 5%;
        width: 40%;
        display: flex;
        justify-content: space-between;
    }
`