import styled from "styled-components";
import { useState,useEffect } from "react";
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
    width: 100%;
    height: 100%;
    outline: 2px solid red;
    text-align: center;
    display: flex;
    justify-content: center;
    .content-opt{
        list-style-type: none;
        margin: auto;
    }
    .options{        
        display: grid;
        }
    p{
        color:red;
        font-size: 10px;
    }
    .btn-list{
        border: 1px solid black;
        background: rgb(62, 62, 114);
        width: auto;
        color: white;
        cursor: pointer;
        border-radius: 2px;
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
    useEffect(()=>{
        document.addEventListener('mousedown',()=>{
            setOpen(false)
        })
    })
    return(
        <li  className="options"><button className="btn-list"  onClick={()=>setOpen(!open)}>Tamaño de fuente </button>
            {open && props.children}
        </li>
    )
}