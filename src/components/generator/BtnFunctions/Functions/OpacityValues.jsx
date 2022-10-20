import { useState } from "react";
import styled from "styled-components";
export default function ValuesBar(){
    const[state,setState]=useState({
        price:1
    })
    const hadleChange=(e)=>{
        let newres= e.target.value
        setState({price:newres})
    }
    return(
        <Container>
        <label className="opaci">
          Opacity{state.price / 10}
          <input
          className="range-input"
            type="range"
            name="opacity"
            min="1"
            max="10"
            value={state.price}
            onChange={hadleChange}
          />
        </label>
        </Container>
    )
}
const Container=styled.div`
    height: 100%;
    width: 100%;  
    display: flex;
    text-align: center;
    justify-content: center;
    .opaci{
        width: 80%;
        margin-top: 15%;
    }
    .range-input{
        outline: 0;
        height: 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        border-radius: 40px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
        ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
        border-radius: 50%;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
    }
`