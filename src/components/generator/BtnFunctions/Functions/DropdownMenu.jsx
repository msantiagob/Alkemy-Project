import styled from "styled-components";
import { useState } from "react";
export default function FontMenu(){

    return(
        <Container>
            <List>
               <ListProducts >
                   <button>font 24</button>
                   <button>font 24</button>
                   <button>font 24</button>
               </ListProducts>
            </List>
        </Container>
    )
}
const Container=styled.div`
    margin:auto ;
    width: 100px;
    height: 80px;
    outline: 2px solid red;
    text-align: center;
    display: flex;
    justify-content: center;
    .content-opt{
        list-style-type: none;
    }
    .options{        
        display: grid;
        }
    p{
        color:red;
        font-size: 10px;
    }
`
function List(props){
    return(
        <ul className="content-opt">
            {props.children}
        </ul>
    )
}
function ListProducts(props){
   
    const[open,setOpen]=useState(false)
  
    return(
        <li  className="options"><a href="#" onClick={()=>setOpen(!open)}>hola </a>
            {open && props.children}
        </li>
    )
}