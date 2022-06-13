import StyledImage from '../components-styled/StyledImage';
import StyledCard from '../components-styled/StyledCard';
import { useState } from 'react';
import StyledOverlay from '../components-styled/StyledOverlay';
import StyledIconButton from '../components-styled/StyledIconButton';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import StyledCardDetails from '../components-styled/StyledCardDetails';
import Caught from '../public/caught.svg';
import Donated from '../public/donated.svg';
import SeaCreatureDetailedCard from './SeaCreatureDetailedCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSeaCreatures,
  toggleCaught,
  toggleDonated,
} from '../features/seaCreatures/seaCreatureSlice';
import StyledIconButtonWrapper from '../components-styled/StyledIconButtonwrapper';

export default function SeaCreatureCard({ seaCreature }) {
  const { name, imageUri, speed, shadow, id } = seaCreature;
  const {
    caught,
    donated,
    data: seaCreatures,
  } = useSelector(selectSeaCreatures);
  const index = seaCreatures.findIndex(seaCreature => seaCreature.id === id);
  const hue = index + 250;
  const [showDetailedCard, setShowDetailedCard] = useState(false);
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
        <SeaCreatureDetailedCard
          seaCreature={seaCreature}
          hue={hue}
          onClick={setShowDetailedCard}
        />
      </StyledOverlay>
    );
  }

  return (
    <StyledCard
      className="seacreature"
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
          <li>{speed}</li>
          <li>{shadow} shadow</li>
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
