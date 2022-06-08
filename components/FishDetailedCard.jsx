import StyledImage from '../components-styled/StyledImage';
import StyledDetailedCard from '../components-styled/StyledDetailedCard';
import StyledCardDetails from '../components-styled/StyledCardDetails';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import StyledSpan from '../components-styled/StyledSpan';
import StyledButton from '../components-styled/StyledButton';
import StyledIconButton from '../components-styled/StyledIconButton';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import Caught from '../public/caught.svg';
import Donated from '../public/donated.svg';
import { useSelector, useDispatch } from 'react-redux';
import StyledIconButtonWrapper from '../components-styled/StyledIconButtonwrapper';
import {
  selectFishes,
  toggleCaught,
  toggleDonated,
} from '../features/fishes/fishSlice';

export default function FishDetailedCard({
  name,
  imageUri,
  hue,
  catchPhrase,
  shadow,
  price,
  priceCJ,
  location,
  rarity,
  onClick,
  id,
}) {
  const dispatch = useDispatch();
  const { caught, donated } = useSelector(selectFishes);
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
      className="fish"
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
      <StyledDetailFlexWrapper>
        <StyledCardDetails>
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
      </StyledDetailFlexWrapper>
    </StyledDetailedCard>
  );
}
