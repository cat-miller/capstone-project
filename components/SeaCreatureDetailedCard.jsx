import StyledImage from '../components-styled/StyledImage';
import StyledDetailedCard from '../components-styled/StyledDetailedCard';
import StyledSpan from '../components-styled/StyledSpan';
import StyledButton from '../components-styled/StyledButton';
import StyledCardDetails from '../components-styled/StyledCardDetails';
import StyledDetailWrapper from '../components-styled/StyledDetailWrapper';
import StyledIconButton from '../components-styled/StyledIconButton';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import Caught from '../public/caught.svg';
import Donated from '../public/donated.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSeaCreatures,
  toggleCaught,
  toggleDonated,
} from '../features/seaCreatures/seaCreatureSlice';
import StyledIconButtonWrapper from '../components-styled/StyledIconButtonwrapper';

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
  const { caught, donated } = useSelector(selectSeaCreatures);
  const isActive = {
    caught: caught.includes(id),
    donated: donated.includes(id),
  };

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
      <StyledSpan>&quot;{catchPhrase}!&quot;</StyledSpan>
      <StyledDetailWrapper>
        <StyledCardDetails>
          <h2>{name.toUpperCase()}</h2>
          <ul>
            <li>Shadow: {shadow}</li>
            <li>Speed: {speed}</li>
            <li>Price: {price}</li>
          </ul>
          <StyledButton onClick={handleClose}>close</StyledButton>
        </StyledCardDetails>
        <StyledIconButtonWrapper>
          <StyledIconButton
            className="donated"
            onClick={() => dispatch(toggleDonated(id))}
            isActive={isActive.donated}
          >
            <StyledSvgWrapper>
              <Donated />
            </StyledSvgWrapper>
          </StyledIconButton>
          <StyledIconButton
            className="caught"
            onClick={() => dispatch(toggleCaught(id))}
            isActive={isActive.caught}
          >
            <StyledSvgWrapper>
              <Caught />
            </StyledSvgWrapper>
          </StyledIconButton>
        </StyledIconButtonWrapper>
      </StyledDetailWrapper>
    </StyledDetailedCard>
  );
}
