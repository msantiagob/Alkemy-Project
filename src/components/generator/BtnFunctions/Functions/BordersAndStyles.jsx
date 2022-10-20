import { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../../../../context/ColorContext";
export default function BorderStyles(){
    const {setBorderStyle}=useContext(ColorContext)
    const beerCan={
        border: '5px solid #32557f',
        top: 'none',
        bottom: 'none',
        radius: '30px/90px',
    }
    return (
        <Container>
            <button className="beer" onClick={()=>setBorderStyle(beerCan)}>Lata</button>
        </Container>
    )
}
const Container=styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    .beer{
        width: 50px;
        margin: auto;
    }
`