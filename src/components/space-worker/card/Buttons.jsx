import styled, { css } from "styled-components";
function Info() {
  return (
    <Button info onClick={() => console.log("pepe")}>
      Info
    </Button>
  );
}
function Add() {
  return <Button add>Add</Button>;
}
function Delete() {
  return <Button delete>Delete</Button>;
}
function Edit() {
  return <Button edit>Edit</Button>;
}
const Button = styled.button`
  cursor: pointer;
  border-radius: 6px;
  display: inline-block;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  margin: 2px;
  &:active {
    position: relative;
    top: 1px;
  }
  ${(props) =>
    (props.info &&
      css`
        box-shadow: 0px 1px 0px 0px #019ad2;
        background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
        background-color: #33bdef;
        border: 1px solid #057fd0;
        text-shadow: 0px -1px 0px #5b6178;
        &:hover {
          background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
          background-color: #019ad2;
        }
      `) ||
    (props.add &&
      css`
        box-shadow: 0px 1px 0px 0px #3dc21b;
        background: linear-gradient(to bottom, #5eff4f 5%, #5cbf2a 100%);
        background-color: #5eff4f;

        border: 1px solid #18ab29;
        text-shadow: 0px 0px 0px #2f6627;
        &:hover {
          background: linear-gradient(to bottom, #5cbf2a 5%, #5eff4f 100%);
          background-color: #5cbf2a;
        }
      `) ||
    (props.delete &&
      css`
        box-shadow: 0px 1px 0px 0px #c21b1b;
        background: linear-gradient(to bottom, #e84343 5%, #a11b1b 100%);
        background-color: #e84343;
        text-shadow: 0px 0px 0px #662828;
        border: 1px solid #ab1919;
        &:hover {
          background: linear-gradient(to bottom, #a11b1b 5%, #e84343 100%);
          background-color: #a11b1b;
        }
      `) ||
    (props.edit &&
      css`
        box-shadow: 0px 1px 0px 0px #c2931b;
        background: linear-gradient(to bottom, #e6d045 5%, #99920e 100%);
        background-color: #e6d045;
        border: 1px solid #ab9819;
        text-shadow: 0px 0px 0px #c2a11b;
        &:hover {
          background: linear-gradient(to bottom, #99920e 5%, #e6d045 100%);
          background-color: #99920e;
        }
      `)};
`;
export { Info, Add, Delete, Edit };
