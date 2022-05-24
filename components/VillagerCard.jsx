import Image from 'next/image';
import styled from 'styled-components';

export default function VillagersCard({
  name,
  personality,
  species,
  gender,
  imageUri,
}) {
  return (
    <StyledCard>
      <Image src={imageUri} alt="" width="127px" height="127px" />
      <div>
        <h2>{name['name-EUen']}</h2>
        <ul>
          <li>{personality}</li>
          <li>{species}</li>
          <li>{gender}</li>
        </ul>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  border: 2px solid hsl(313, 100%, 88%);
  border-radius: 26px;
  background-color: hsl(313, 100%, 95%);
  color: black;
  box-shadow: 0px 4px 15px hsla(313, 100%, 88%, 0.53);
`;
