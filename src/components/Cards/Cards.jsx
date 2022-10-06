import styled from "styled-components";

function Horizontal() {
  const Cards = styled.div`
    background-color: rgb(32, 35, 41);
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 25px;
    color: white;
    width: 500px;
    height: 290px;
    flex-direction: row;
  `;
  
  const Image = styled.img`
    border: none;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    width: 290px;
    background-color: #fff;
  `;
  const Division = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Cards>
      <Image
        src="https://rickandmortyapi.com/api/character/avatar/192.jpeg"
        alt=""
      />
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
          <Info>Info</Info>
        </Section>
      </Division>
    </Cards>
  );
}
function Vertical() {
  const Cards = styled.div`
    background-color: rgb(32, 35, 41);
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 25px;
    color: white;
    width: 290px;
  `;
  const Image = styled.img`
    border: none;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    width: 290px;
    background-color: #fff;
  `;
  return (
    <Cards>
      <Image
        class="cards-image"
        src="https://rickandmortyapi.com/api/character/avatar/192.jpeg"
        alt=""
      />

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
        <Info>Info</Info>
      </Section>
    </Cards>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: rgb(160, 160, 160);
  font-weight: bold;
  display: grid;
`;
const Section = styled.div`
  margin: 2px;
`;
const Info = styled.button`
  box-shadow: 0px 1px 0px 0px #019ad2;
  background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
  background-color: #33bdef;
  border-radius: 6px;
  border: 1px solid #057fd0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #5b6178;
  &:hover {
    background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
    background-color: #019ad2;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
export { Horizontal, Vertical };
