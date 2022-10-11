import React from "react";
import styled from "styled-components";
const Code = () => {
  return (
    <Scripts>
      <SubTitle>HTML</SubTitle>

      <pre>{`
<article>
<img src={props.character.image} alt="" />
<div  ></div>
</article>
`}</pre>
      <SubTitle>CSS</SubTitle>
      <pre>{`
article {
background-color: rgb(60, 62, 68);
width: 290px;
color: white;
margin: 10px;
border-radius: 25px;


`}</pre>
    </Scripts>
  );
};

const Scripts = styled.div`
  background: #5c5c5b;
  color: white;
  margin: 2px;
`;
const SubTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: white;
  border-bottom: 1px solid #fff;
`;
export default Code;
