import { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../../../../context/ColorContext";
export default function Shadow(){
    const {shadow,handleShadowChange}=useContext(ColorContext)
    return(
        <Container>
            <div className="titlecheck">
                <label >Sombra</label>
                <input type='checkbox' checked={shadow} onChange={()=>handleShadowChange('shadow')} />
            </div>
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
    .titlecheck{
        height: 24px;
        width: 100px;
    }
    input{
        margin-left: 8px;
        cursor: pointer;
    }
`