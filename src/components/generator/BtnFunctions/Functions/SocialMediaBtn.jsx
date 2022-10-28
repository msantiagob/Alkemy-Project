import { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../../../../context/ColorContext";
export default function SocialMediaDisplay(){
    const{setSeeSocialMedia}=useContext(ColorContext)
    return (
        <Container>
            <button className="btnmedia" onClick={()=>setSeeSocialMedia('visible')}>Gmail</button>
            <button className="btnmedia" onClick={()=>setSeeSocialMedia('none')}>None</button>
        </Container>
    )
}
const Container=styled.div`
    height: 100%;
    width: 100%;  
    display: flex;
    text-align: center;
    justify-content: center;
    .btnmedia{
        width: 72px;
        height: 24px;
        margin: auto;
        background: #3e3e72;
        color: #fff;
        border: none;
        border-radius:5px;
        cursor: pointer;
    }
    `