import styled from "styled-components"
import { useContext } from "react"
import ColorContext from "../../../../context/ColorContext"
export default function AddNewImage({props}){
    const {formImage}=useContext(ColorContext)
    let arrSrc=[]
    let srcValids=arrSrc.concat(props[0],'https://rickandmortyapi.com/api/character/avatar/1.jpeg')
    return(
        <Photo alt="imagen" formadd={formImage} src={srcValids[0] === undefined ? srcValids[1] : srcValids[0]}  accept="image/jpeg, image/png"/>
    )
}
const Photo=styled.img`
    height: 15.1rem;
    width: 15.1rem;
    clip-path: ${(props)=>props.formadd === '' ? 'circle(50% at 50% 50%)' : props.formadd} ;

`