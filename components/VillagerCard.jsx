import StyledImage from '../components-styled/StyledImage';
import StyledCard from '../components-styled/StyledCard';

export default function VillagersCard({
  name,
  personality,
  species,
  gender,
  imageUri,
  index,
}) {
  const hue = (index % 360) * 18;
  return (
    <StyledCard hue={hue}>
      <StyledImage hue={hue} src={imageUri} alt="" />
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
