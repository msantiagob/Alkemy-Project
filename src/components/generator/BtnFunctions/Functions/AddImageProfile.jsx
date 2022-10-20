import styled from "styled-components"
export default function AddNewImage({props}){
    let arrSrc=[]
    let srcValids=arrSrc.concat(props[0],'https://rickandmortyapi.com/api/character/avatar/1.jpeg')
    return(<>
        <Photo alt="imagen" src={srcValids[0] === undefined ? srcValids[1] : srcValids[0]}  accept="image/jpeg, image/png"/>
        {console.log(srcValids[0])}
        </>
    )
}
const Photo=styled.img`
    height: 15.1rem;
    width: 15.1rem;
    border-radius: 50%;
`