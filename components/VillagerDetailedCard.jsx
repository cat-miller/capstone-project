import StyledImage from '../components-styled/StyledImage';
import StyledDetailedCard from '../components-styled/StyledDetailedCard';
import StyledSpan from '../components-styled/StyledSpan';
import StyledButton from '../components-styled/StyledButton';

export default function VillagerDetailedCard({
  name,
  personality,
  species,
  gender,
  imageUri,
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
    <StyledDetailedCard
      className="villagers"
      style={{
        backgroundColor: `hsl(${hue}, 100%, 95%)`,
        border: `2px solid hsl(${hue}, 100%, 80%)`,
        boxShadow: `0px 4px 15px hsla(${hue}, 100%, 73%, 0.53)`,
      }}
    >
      <StyledImage
        style={{ border: `2px solid hsl(${hue}, 100%, 80%)` }}
        src={imageUri}
        alt=""
      />
      <div>
        <StyledSpan color={bubbleColor} backgroundColor={textColor}>
          &quot;{catchPhrase}!&quot;
        </StyledSpan>
        <h2>{name.toUpperCase()}</h2>
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
