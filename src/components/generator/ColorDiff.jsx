import {useEffect,useState} from "react";
import styled,{keyframes} from 'styled-components'

function BackDv(){
   const[show,setShow]=useState('lau')
   function see() {
    if(show === 'lau'){
        setShow('')
    }else{
        setShow('lau')
    }
}
   useEffect(()=>{    
    return see()
   },[])
    return(
        <div style={{outline:'2px solid black',height:'100vh'}}>
            <Container>
            <article className="inside">
                    <header>hola</header>
                Esta etiqueta es article, aqui usamos header y footer
                <footer className="foo">Chau</footer>
                </article>
            <BackGradient variant={show}></BackGradient>
           <Bubbles variant={show}>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>

            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>

            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>

            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
         
            </Bubbles>
            
            </Container>
            <button onClick={()=>see()}>Animacion</button>
            </div>
        

    )
}
export default BackDv


const animate=keyframes`
    0%{
        top:100%;
        opacity: 1;
    }
    100%{
       top:0%;
       opacity: 0.6;
    }
`
const Bubbles=styled.div`
    width: 500px;
    height:500px;
    display: flex;
    justify-content:space-between;
    outline: 2px solid black;
    
   
    position: relative;
    z-index: -1;
    visibility: ${(props)=>props.variant === 'lau' ? 'visible': 'hidden'};
     .ball{
            width: 12px;
            height: 12px;            
            background: radial-gradient(#3605A8,#FFF);  
            position: relative;
            animation: ${animate} infinite 1s linear;
            border-radius:50% ;
           
        }
        .ball:nth-child(2){           
             animation: ${animate} infinite 3s linear;
        }
        .ball:nth-child(3){
            animation: ${animate} infinite 1.7s linear;
        }
        .ball:nth-child(4){           
            animation: ${animate} infinite 2s linear;
        }
        .ball:nth-child(5){           
            animation: ${animate} infinite 1.4s linear;
        }
        .ball:nth-child(7){           
             animation: ${animate} infinite 3s linear;
        }
        .ball:nth-child(8){
            animation: ${animate} infinite 1.7s linear;
        }
        .ball:nth-child(9){           
            animation: ${animate} infinite 2s linear;
        }
        .ball:nth-child(10){           
            animation: ${animate} infinite 1.4s linear;
        }
        .ball:nth-child(12){           
             animation: ${animate} infinite 3s linear;
        }
        .ball:nth-child(13){
            animation: ${animate} infinite 1.7s linear;
        }
        .ball:nth-child(14){           
            animation: ${animate} infinite 2s linear;
        }
        .ball:nth-child(15){           
            animation: ${animate} infinite 1.4s linear;
        }
        .ball:nth-child(17){           
             animation: ${animate} infinite 3s linear;
        }
        .ball:nth-child(18){
            animation: ${animate} infinite 1.7s linear;
        }
        .ball:nth-child(19){           
            animation: ${animate} infinite 2s linear;
        }
        .ball:nth-child(20){           
            animation: ${animate} infinite 1.4s linear;
        }
`
const Container=styled.div`
    height: 500px;
    width: 500px;
    position: relative;
    outline: 2px solid blue;
    margin-left: 30%;
   
    .inside{
        box-sizing: border-box;
        position: absolute;
        margin-left: 35%;
        margin-top: 10%;
        height: 280px;
        width: 150px;
        outline: 2px solid red;
        overflow: hidden;
        background: white;
        display: grid;
        justify-content: space-between;
        text-align: center;
    }
    .foo{
        height: 25px;
        margin-top: auto;
    }
`
const gradient=keyframes`
     0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`
const BackGradient=styled.body`
    
    background: ${(props)=>props.variant === 'lau' ? 'white' : props.variant !== 'lau'? 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)': 'white'};
    background-size: 400% 400%;
    animation: ${gradient} 5s ease infinite;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
`