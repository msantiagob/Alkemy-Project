import styled, { css } from "styled-components";
import { SketchPicker } from "react-color";
import { useState } from "react";

const Generator = () => {
  var foo = 1;
  var bar = '"a b   c"';
  const [color, setColor] = useState("#fff");

  //css
  const Background = styled.div`
    background: Black;
    color: white;
  `;
  const Code = styled.div`
    background: #5c5c5b;
    color: white;
  `;
  const Card = styled.div`
    background: none;
    border-radius: 3px;

    ${(props) =>
      props.primary &&
      css`
        color: white;
      `}
  `;
  const Performance = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
  `;
  return (
    <Background>
      <Performance>
        <div>
          <Card>pepe</Card>
          <Card primary>pepe</Card>
          <Card primary> melo</Card>
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
        <pre>{`
  var foo = ${foo};
  var bar = ${bar};
  
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/skeleton" element={<Skele />} />
        <Route path="/code" element={<Code />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/vl" element={<ValidationSchemaExample />} />
    </Routes>
  </BrowserRouter>
  
`}</pre>
      </Code>
    </Background>
  );
};

export default Generator;
