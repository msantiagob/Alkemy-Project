import styled from "styled-components";
import AddNewImage from "../BtnFunctions/Functions/AddImageProfile";

import ColorContext from "../../../context/ColorContext";
import { useContext } from "react";

export default function Wallet(){

    const { bgColor } = useContext(ColorContext);

   
    
    return(
        <Container newBgColor={`${bgColor}`}>
            <header>
                <AddNewImage props='https://rickandmortyapi.com/api/character/avatar/1.jpeg'/>
            </header>
            <footer >
                <div className="positions">
                <div className="description">
                <div className="profileinfo"> nombre</div>
                    <hr className="verticaldiv"/>
                <div className="profileinfo"> apellido</div>
                </div>
                <hr className="line"/>    
                <div className="description">
                <div className="profileinfo"> nombre</div>
                    <hr className="verticaldiv"/>
                <div className="profileinfo"> apellido</div>
                </div>
                <hr className="line"/>
                <div className="description">
                <div className="profileinfo"> nombre</div>
                    <hr className="verticaldiv"/>
                <div className="profileinfo"> apellido</div>
                </div>
                </div>
            </footer>
        </Container>
    )
}
const Container=styled.article`
    width: 20%;
    height: 100%;
    outline: 2px solid blue;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    footer{
        height:14.5rem;
        width: 84%;
        //outline: 2px solid green;
        position: absolute;
        border-radius: 0 0 10px 10px;
        top: 40%;
        z-index: -1;
        background: ${(props)=>props.newBgColor};
        padding-top: 35%;
    }
    .positions{
        display: flex;
        flex-direction: column;
    }    
    .description{
        height: 40px;
        width: 100%;
        display: flex;  
        justify-content: space-between;
       
    }
    .profileinfo{
        height: 2rem;
        width: 12rem;
      // outline: 2px solid red;                
        text-align: center;
    }
    .verticaldiv{       
        transform: rotate(90deg);
        height: 1px;
        width: 19%;
        border: none;
        margin-top: 5%;
        background: #fff;
        }
    .line{
        border: none;
        height: 1px;       
        margin-bottom: 2%;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 253, 253, 0.75), rgba(0, 0, 0, 0));
    }
`