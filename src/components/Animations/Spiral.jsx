import styled,{keyframes} from "styled-components";

export default function DotsRotation ({ver}){
    return(
        <Container variant={ver}>
            <BackRotate>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            <span></span>  
            <span></span>
            <span></span>
            <span></span>
            </BackRotate>
        </Container>
    )
}
const Container=styled.div`
     height: 500px;
    width: 500px;
    position: absolute;
    top: 0;
    filter: blur(5px);
    z-index: -1;
   
    visibility: ${(props)=>props.variant === '' ? 'hidden' : props.variant === 'yes' ? 'visible' : 'hidden'};
    overflow: hidden;
    
`
const rotate=keyframes`
       0% {
        background-position: 0% 10%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 10%;
    }
`
const BackRotate=styled.div`
    height: 500px;
    width: 500px;
    display: grid;
    grid-template-columns:  repeat(8, 1fr) ;
    gap: 8px;
    grid-template-rows:  repeat(8, 1fr);  
    background: linear-gradient(blue,red);
    animation: ${rotate}  ease 5s infinite;
    background-size: 300% 300%;
    
    span{
        height: 35px;
        height: 35px;
        border-radius: 50%;
        background: transparent;
        text-align: center;
        padding-top: 25%;
        border: 1px solid black;
    }
`