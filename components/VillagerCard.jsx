import StyledImage from './StyledImage';
import StyledCard from './StyledCard';

export default function VillagersCard({
  name,
  personality,
  species,
  gender,
  imageUri,
  index,
}) {
  const hue = index + 10;
  return (
    <StyledCard hue={hue}>
      <StyledImage hue={hue} src={imageUri} alt="Picture of villager" />
      <div>
        <h2>{name['name-EUen']}</h2>
        <ul>
          <li>{personality}</li>
          <li>{gender}</li>
          <li>{species}</li>
        </ul>
      </div>
    </StyledCard>
  );
}
