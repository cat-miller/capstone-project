import StyledImage from '../components-styled/StyledImage';
import StyledDetailedCard from '../components-styled/StyledDetailedCard';
import StyledSpan from '../components-styled/StyledSpan';
import StyledButton from '../components-styled/StyledButton';
import StyledIconButton from '../components-styled/StyledIconButton';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import Caught from '../public/caught.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSeaCreatures,
  toggleCaught,
} from '../features/seaCreatures/seaCreatureSlice';

export default function SeaCreatureDetailedCard({
  name,
  imageUri,
  hue,
  catchPhrase,
  price,
  shadow,
  speed,
  onClick,
  id,
}) {
  const dispatch = useDispatch();
  const { caught } = useSelector(selectSeaCreatures);
  const isActive = caught.includes(id);

  function handleClose(e) {
    e.stopPropagation();
    onClick(false);
  }

  return (
    <StyledDetailedCard
      className="seacreature"
      style={{
        backgroundColor: `hsl(${hue}, 100%, 95%)`,
        border: `2px solid hsl(${hue}, 100%, 80%)`,
        boxShadow: `0px 4px 15px hsla(${hue}, 100%, 73%, 0.53)`,
      }}
    >
      <StyledImage
        style={{
          border: `2px solid hsl(${hue}, 100%, 80%)`,
          backgroundColor: `hsl(${hue}, 100%, 88%)`,
        }}
        src={imageUri}
        alt=""
      />
      <div>
        <StyledSpan>&quot;{catchPhrase}!&quot;</StyledSpan>
        <h2>{name.toUpperCase()}</h2>
        <ul>
          <li>Shadow: {shadow}</li>
          <li>Speed: {speed}</li>
          <li>Price: {price}</li>
        </ul>
        <StyledButton onClick={handleClose}>close</StyledButton>
      </div>
      <StyledIconButton
        onClick={() => dispatch(toggleCaught(id))}
        isActive={isActive}
      >
        <StyledSvgWrapper>
          <Caught />
        </StyledSvgWrapper>
      </StyledIconButton>
    </StyledDetailedCard>
  );
}
