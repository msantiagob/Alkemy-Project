import styled from "styled-components";
import AddNewImage from "../BtnFunctions/Functions/AddImageProfile";

import ColorContext from "../../../context/ColorContext";
import { useContext } from "react";

export default function Wallet(){

    const { bgColor,images, opacity,shadow,borderStyle,fontSize,seeSocialMedia } = useContext(ColorContext);

    
    
    return(
        <Container newBgColor={`${bgColor}`} displayMediaBtn={seeSocialMedia} shadowDisplay={shadow} newFontSize={fontSize} newBorders={borderStyle}>
            <header className="imageprofile">
                <AddNewImage props={images}/>
            </header>
            <footer style={ { opacity: opacity} }>
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
                <div className="profileinfo"> 
                    <button className="social"></button>
                    <button className="social"></button>
                    <button className="social"></button>
                </div>
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
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-size: ${(props)=>props.newFontSize === '' ? '15px' : props.newFontSize};
    border: ${(props)=>props.newBorders.border === undefined ? '4px ridge white' : props.newBorders.border};
    border-top: ${(props)=>props.newBorders.top === undefined ? 'ridge 4px white' : props.newBorders.top};
    border-bottom:  ${(props)=>props.newBorders.bottom === undefined ? 'ridge 4px white' : props.newBorders.bottom};
    border-radius:  ${(props)=>props.newBorders.radius === undefined ? 'none' : props.newBorders.radius};
    box-shadow: ${(props)=> props.shadowDisplay === false ? 'none' : '8px 8px 8px 0px rgba(0,0,0,0.5)'};
    footer{
        height:14.5rem;
        width: 84%;
        position: absolute;
        border-radius: 0 0 10px 10px;
        top: 40%;
        background: ${(props)=>props.newBgColor === '' ? 'green': props.newBgColor};
        padding-top: 35%;
    }
    .imageprofile{
        z-index: 1;
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
        text-align: center;
        color: black;
    }
    .social{
        display: ${(props)=>props.displayMediaBtn === '' ? 'none' : props.displayMediaBtn};
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: url('https://cdn-icons-png.flaticon.com/512/281/281769.png');
        background-size: cover;
        border: none;
        margin: 2px;
        cursor: pointer;
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