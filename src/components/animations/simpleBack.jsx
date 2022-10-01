import styled,{keyframes} from "styled-components";

export default function SimpleChange({variant}){
    return(
        <Container variant={variant}>

        </Container>
    )
}
const Container=styled.div`
    height: 500px;
    width: 500px;
    background: ${(props)=>props.variant === '' ? 'transparent' : props.variant === 'yes' ? 'blue' : 'transparent'};
    z-index: -1;
    position: absolute;
    top: 0;
`