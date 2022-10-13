import { useState } from "react";
import styled, { css } from "styled-components";
import { Info, Add, Delete, Edit } from "./Buttons";

function Card({ cardProperties }) {
  let { orientation, background, buttons } = cardProperties;
  const[images,setImages]=useState([])
  const imgDefault='https://www.dklo.co/DkLMRsT/cfDftOpaytr?u=QY9nNLQ5uo28'
  const uploadPhoto=(file)=>{       
    const arr=Array.from(file) // si quisiera subir mas de una foto aunque podria usar spred operator
    const allImg= arr.map((e)=>{
       return URL.createObjectURL(e)
    })           
    setImages(allImg)        
   }

  return (
    <Cards category={orientation} background={background}>
      <Image
        category={orientation}
        vertical
        src={!images[0] ? imgDefault:images[0]}
        alt=""
      />
      <input type='file' onChange={(e)=>uploadPhoto(e.target.files)} accept="image/jpeg, image/png"/>
      <Division>
        <Section>
          <h2>Title</h2>
        </Section>
        <Section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            molestias!
          </p>
        </Section>
        <Section>
          <Link href="#">Link</Link>
        </Section>
        <Section>
          {buttons.info ? <Info /> : null}

          <Add></Add>
          <Delete></Delete>
          <Edit />
        </Section>
      </Division>
    </Cards>
  );
}

const Cards = styled.div`
  background-color: ${(props) => props.background};
  display: flex;
  text-align: center;
  border-radius: 25px;
  color: white;
  ${(props) =>
    props.category
      ? css`
          width: 500px;
          flex-direction: row;
        `
      : `
      width: 290px;
      flex-direction: column;
      `};
  input{
    width:30px;
    cursor:pointer;
  }
`;

const Image = styled.img`
  background-color: #fff;
  object-fit: cover;
 // height: 250px;
  ${(props) =>
    props.category
      ? css`
          width: 290px;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
        `
      : props.vertical &&
        css`
          border-top-right-radius: 25px;
          border-top-left-radius: 25px;
        `};
`;
const Division = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: rgb(160, 160, 160);
  font-weight: bold;
  display: grid;
`;
const Section = styled.div`
  margin: 2px;

  text-align: center;
`;
export default Card;
