import { useEffect, useState } from "react";
import styled from "styled-components";

import { useContext  } from "react";
import ColorContext from "../../../../context/ColorContext";

export default function ChekBack(){
    const[back1,setBack1]=useState(false)
    const[back2,setBack2]=useState(false)
    function newBackground1(){
        setBack1(!back1)
    }
    function newBackground2(){
        setBack2(!back2)
    }

    const { handleBgColorChange } = useContext(ColorContext);

    return(
        <Container>
            {/* <label className="back1">
                <p>Fondo 1</p>
                <input type='checkbox' checked={back1} onChange={newBackground1} />
                </label> 
                <label className="back1">
                <p>Fondo 2</p>
                <input type='checkbox' checked={back2} onChange={newBackground2} />
            </label>               */}

            <label htmlFor="bg-color">BG color</label>
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