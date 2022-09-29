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
    see()

   },[])
    return(
        <div style={{outline:'2px solid black'}}>
            <Container>
            <article className="inside">
                    <header>hola</header>
                Esta etiqueta es article, aqui usamos header y footer
                <footer>Chau</footer>
                </article>
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
    width: 400px;
    height: 400px;
    display: flex;
    justify-content:space-between;
    outline: 2px solid black;
    margin-left: 100px;
    margin-top: 100px; 
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
    
    .inside{
        box-sizing: border-box;
        position: absolute;
        margin-left: 45%;
        margin-top: 10%;
        height: 280px;
        width: 150px;
        outline: 2px solid red;
        overflow: hidden;
        background: white;
        display: grid;
        justify-content: space-around;
        text-align: center;
    }
`