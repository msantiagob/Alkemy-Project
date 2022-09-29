import styled, { css } from "styled-components";
import { SketchPicker } from "react-color";
import { useState } from "react";

const Generator = () => {
  var foo = 1;
  var bar = '"a b   c"';
  const [color, setColor] = useState("#fff");

  //css
  const SubTitle = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: white;
    border-bottom: 1px solid #fff;
  `;
  const Background = styled.div`
    background: Black;
    color: white;
  `;
  const Code = styled.div`
    background: #5c5c5b;
    color: white;
  `;
  const Card = styled.div`
    background: ${color};
    width: 200px;
    height: 200px;
    border-radius: 3px;
  `;
  const Performance = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 20px 30%;
    text-align: center;
  `;
  return (
    <Background>
      <Performance>
        <div>
          <Card></Card>
        </div>
        <SketchPicker
          color={color}
          onChangeComplete={(color) => {
            setColor(color.hex);
          }}
        />
      </Performance>
      <br />
      <Code>
        <SubTitle>HTML</SubTitle>
        <pre>{`
<div>
    <div class="card" >

    </div>
</div>
  `}</pre>
        <SubTitle>CSS</SubTitle>
        <pre>{`
.card{
    background-color:${color} ;
}
  `}</pre>
      </Code>
    </Background>
  );
};

export default Generator;
