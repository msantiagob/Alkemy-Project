import styled from "styled-components";

function Horizontal() {
  return (
    <Cards>
      <Image
        src="https://rickandmortyapi.com/api/character/avatar/192.jpeg"
        alt=""
      />
      <div class="division">
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
          <button class="btn-card btn-info">Info</button>
        </Section>
      </div>
    </Cards>
  );
}
function Vertical() {
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
        <button class="btn-card btn-info">Info</button>
      </Section>
    </Cards>
  );
}
const Cards = styled.div`
  background-color: rgb(32, 35, 41);
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 25px;
  color: white;
  width: 290px;
  margin: 15px;
`;
const Image = styled.img`
  border: none;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  width: 290px;
  background-color: #fff;
`;
const Link = styled.a`
  text-decoration: none;
  color: rgb(160, 160, 160);
  font-weight: bold;
  display: grid;
`;
const Section = styled.div`
  margin: 2px;
`;
export { Horizontal, Vertical };
