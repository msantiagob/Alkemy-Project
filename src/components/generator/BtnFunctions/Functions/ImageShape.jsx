import styled from "styled-components";
import { useContext } from "react";
import ColorContext from "../../../../context/ColorContext";
export default function Trimmings(){
    const {setFormImage}=useContext(ColorContext)
    const forms=['polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)','polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)','polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)']
    return(<Container>
        <button className="img-shape" onClick={()=>setFormImage(forms[0])}>Estrella</button>
        <button className="img-shape" onClick={()=>setFormImage(forms[1])}>Octagono</button>
        <button className="img-shape"onClick={()=>setFormImage(forms[2])}>Raro</button>
        <button className="img-shape"onClick={()=>setFormImage('')}>Circulo</button>
    </Container>
        )
}
const Container=styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    .img-shape{
        width: 65px;
        height: 24px;
        margin: auto;
        background: #3e3e72;
        color: #fff;
        border: none;
        border-radius:5px;
        cursor: pointer;
    }
`