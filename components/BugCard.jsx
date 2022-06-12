import StyledImage from '../components-styled/StyledImage';
import StyledCard from '../components-styled/StyledCard';
import { useState } from 'react';
import StyledOverlay from '../components-styled/StyledOverlay';
import BugDetailedCard from './BugDetailedCard';
import StyledCardDetails from '../components-styled/StyledCardDetails';
import StyledIconButton from '../components-styled/StyledIconButton';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import StyledIconButtonWrapper from '../components-styled/StyledIconButtonwrapper';
import Caught from '../public/caught.svg';
import Donated from '../public/donated.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBugs,
  toggleCaught,
  toggleDonated,
} from '../features/bugs/bugSlice';

export default function BugCard({ bug, index }) {
  const { id, name, imageUri, location, rarity } = bug;
  const hue = index + 100;
  const [showDetailedCard, setShowDetailedCard] = useState(false);
  const { caught, donated } = useSelector(selectBugs);
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
        <BugDetailedCard bug={bug} hue={hue} onClick={setShowDetailedCard} />
      </StyledOverlay>
    );
  }

  return (
    <StyledCard
      className="bug"
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
      <StyledCardDetails>
        <h2>{name}</h2>
        <ul>
          <li>{rarity}</li>
          <li>{location}</li>
        </ul>
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
      </StyledCardDetails>
    </StyledCard>
  );
}
