import styled from "styled-components";
export default function Trimmings(){
    return(<Container>
        <button className="img-shape">triangulo</button>
        <button className="img-shape">hexagono</button>
        <button className="img-shape">estrella</button>
    </Container>
        )
}
const Container=styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    .img-shape{
        width: 60px;
        height: 24px;
        margin: auto;
    }
`