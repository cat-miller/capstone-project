import StyledDetailedImage from '../components-styled/StyledDetailedImage';
import StyledDetailedCard from '../components-styled/StyledDetailedCard';
import StyledSpan from '../components-styled/StyledSpan';
import StyledButton from '../components-styled/StyledButton';

export default function VillagerDetailedCard({
  name,
  personality,
  species,
  gender,
  imageUri,
  index,
  hue,
  birthday,
  catchPhrase,
  bubbleColor,
  textColor,
  onClick,
}) {
  function handleClose(e) {
    e.stopPropagation();
    onClick(false);
  }

  return (
    <StyledDetailedCard index={index} hue={hue}>
      <StyledDetailedImage hue={hue} src={imageUri} alt="" />
      <div>
        <StyledSpan bubbleColor={bubbleColor} textColor={textColor}>
          {catchPhrase}
        </StyledSpan>
        <h2>{name['name-EUen']}</h2>
        <ul>
          <li>Personality: {personality}</li>
          <li>Gender: {gender}</li>
          <li>Species: {species}</li>
          <li>Birthday: {birthday}</li>
        </ul>
        <StyledButton onClick={handleClose}>close</StyledButton>
      </div>
    </StyledDetailedCard>
  );
}
