import StyledImage from '../components-styled/StyledImage';
import StyledDetailedCard from '../components-styled/StyledDetailedCard';
import StyledSpan from '../components-styled/StyledSpan';
import StyledButton from '../components-styled/StyledButton';

export default function FishDetailedCard({
  name,
  imageUri,
  index,
  hue,
  catchPhrase,
  shadow,
  price,
  priceCJ,
  location,
  rarity,
  onClick,
}) {
  function handleClose(e) {
    e.stopPropagation();
    onClick(false);
  }

  return (
    <StyledDetailedCard
      index={index}
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
        <StyledSpan>&quot;{catchPhrase}!&quot;</StyledSpan>
        <h2>{name}</h2>
        <ul>
          <li>Location: {location}</li>
          <li>Shadow: {shadow}</li>
          <li>Rarity: {rarity}</li>
          <li>Price: {price}</li>
          <li>Price-CJ: {priceCJ}</li>
        </ul>
        <StyledButton onClick={handleClose}>close</StyledButton>
      </div>
    </StyledDetailedCard>
  );
}
