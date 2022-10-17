import styled from "styled-components"
export default function AddNewImage({props}){
    return(
        <Photo alt="imagen" src={props} accept="image/jpeg, image/png"/>
    )
}
const Photo=styled.img`
    height: 15.1rem;
        width: 15.1rem;
        border-radius: 50%;
`