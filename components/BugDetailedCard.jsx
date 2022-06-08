import StyledImage from '../components-styled/StyledImage';
import StyledDetailedCard from '../components-styled/StyledDetailedCard';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import StyledSpan from '../components-styled/StyledSpan';
import StyledButton from '../components-styled/StyledButton';
import StyledCardDetails from '../components-styled/StyledCardDetails';
import StyledIconButton from '../components-styled/StyledIconButton';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import Caught from '../public/caught.svg';
import Donated from '../public/donated.svg';
import { useSelector, useDispatch } from 'react-redux';
import StyledIconButtonWrapper from '../components-styled/StyledIconButtonwrapper';
import {
  selectBugs,
  toggleCaught,
  toggleDonated,
} from '../features/bugs/bugSlice';

export default function BugDetailedCard({
  name,
  imageUri,
  hue,
  catchPhrase,
  price,
  priceFlick,
  location,
  rarity,
  onClick,
  id,
}) {
  const dispatch = useDispatch();
  const { caught, donated } = useSelector(selectBugs);
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
      className="bug"
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
            <li>Rarity: {rarity}</li>
            <li>Price: {price}</li>
            <li>Price-Flick: {priceFlick}</li>
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
