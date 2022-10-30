import styled,{keyframes} from "styled-components"
export default function GradientMotion ({ver}){
    return (
        <Container variant={ver}>
            
        </Container>
    )
}

const animation=keyframes`
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

const Container=styled.div`
    height: 500px;
    width: 400px;
    position: absolute;
    top: 0;  
    background: ${(props)=>props.variant === '' ? 'none' : props.variant === 'yes' ?'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)' : 'none'};
    animation: ${animation}  ease 5s infinite;
    background-size: 300% 300%;
`
