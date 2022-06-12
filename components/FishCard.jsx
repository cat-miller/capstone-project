import StyledImage from '../components-styled/StyledImage';
import StyledFishCard from '../components-styled/StyledFishCard';
import { useState } from 'react';
import StyledOverlay from '../components-styled/StyledOverlay';
import FishDetailedCard from './FishDetailedCard';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import StyledCardDetails from '../components-styled/StyledCardDetails';
import StyledIconButton from '../components-styled/StyledIconButton';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import StyledIconButtonWrapper from '../components-styled/StyledIconButtonwrapper';
import Caught from '../public/caught.svg';
import Donated from '../public/donated.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFishes,
  toggleCaught,
  toggleDonated,
} from '../features/fishes/fishSlice';

export default function FishCard({ fish, index }) {
  const { id, name, imageUri, location, rarity } = fish;
  const hue = index + 200;
  const [showDetailedCard, setShowDetailedCard] = useState(false);
  const { caught, donated } = useSelector(selectFishes);
  const isActive = {
    caught: caught.includes(id),
    donated: donated.includes(id),
  };
  const dispatch = useDispatch();

  const handleCaughtClick = e => {
    e.stopPropagation();
    dispatch(toggleCaught(id));
  };

  const handleDonatedClick = e => {
    e.stopPropagation();
    dispatch(toggleDonated(id));
  };

  function detailedCard() {
    return (
      <StyledOverlay>
        <FishDetailedCard fish={fish} hue={hue} onClick={setShowDetailedCard} />
      </StyledOverlay>
    );
  }

  return (
    <StyledFishCard
      style={{
        backgroundColor: `hsl(${hue}, 100%, 95%)`,
        border: `2px solid hsl(${hue}, 100%, 80%)`,
        boxShadow: `0px 4px 15px hsla(${hue}, 100%, 73%, 0.53)`,
      }}
      onClick={() => setShowDetailedCard(true)}
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
          <h2>{name}</h2>
          <ul>
            <li>{rarity}</li>
            <li>{location}</li>
          </ul>
        </StyledCardDetails>
        <StyledIconButtonWrapper>
          <StyledIconButton
            className="donated"
            onClick={handleDonatedClick}
            isActive={isActive.donated}
          >
            <StyledSvgWrapper>
              <Donated />
            </StyledSvgWrapper>
          </StyledIconButton>
          <StyledIconButton
            className="caught"
            onClick={handleCaughtClick}
            isActive={isActive.caught}
          >
            <StyledSvgWrapper>
              <Caught />
            </StyledSvgWrapper>
          </StyledIconButton>
        </StyledIconButtonWrapper>
        {showDetailedCard && detailedCard()}
      </StyledDetailFlexWrapper>
    </StyledFishCard>
  );
}
