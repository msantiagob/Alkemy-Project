import styled,{keyframes} from "styled-components";

export default function Bubble ({ver}){
    return (
        
        <Container variant={ver}>                  
        
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
        </Container>
    )
}
const animate=keyframes`
    0%{
        top:100%;
        opacity: 1;
    }
    25%{    
        opacity: 0,8;
    }
    50%{
        opacity: 0,7;
    }
    75%{
        opacity: 0.5;
    }
    100%{
       top:0%;
       opacity: 0.4;
    }
`
const Container = styled.div`
    height: 500px;
    width: 400px;
    display: flex;
    justify-content:space-between ;
    position: relative;    
    outline: 2px solid blue;
    visibility: ${(props)=>props.variant === '' ? 'hidden' : props.variant === 'yes' ? 'visible' : 'hidden'};
    .ball{
            width: 15px;
            height: 15px;            
            background: radial-gradient( #fff 20%,#3605A8 60%,#FFF 20%);  
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