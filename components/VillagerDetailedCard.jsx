import StyledDetailedImage from '../components-styled/StyledDetailedImage';
import StyledDetailedCard from '../components-styled/StyledDetailedCard';

export default function VillagerDetailedCard({
  name,
  personality,
  species,
  gender,
  imageUri,
  index,
  hue,
}) {
  return (
    <StyledDetailedCard index={index} hue={hue}>
      <StyledDetailedImage hue={hue} src={imageUri} alt="" />
      <div>
        <h2>{name['name-EUen']}</h2>
        <ul>
          <li>{personality}</li>
          <li>{gender}</li>
          <li>{species}</li>
        </ul>
      </div>
    </StyledDetailedCard>
  );
}
