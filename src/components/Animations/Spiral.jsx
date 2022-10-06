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
    width: 400px;
    position: absolute;
    top: 0;
    filter: blur(3px);
  
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
    animation: ${rotate}  ease 4s infinite;
    background-size: 300% 300%;
    
    span{
        height: 40px;
        width: 40px;
        background: transparent;
        border-width: 2px;
        border-style: dashed;
        border-color:black ;
        border-radius: 50%;
     
    }
`