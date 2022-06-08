import StyledImage from '../components-styled/StyledImage';
import StyledCard from '../components-styled/StyledCard';
import { useState } from 'react';
import StyledOverlay from '../components-styled/StyledOverlay';
import VillagerDetailedCard from './VillagerDetailedCard';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import StyledCardDetails from '../components-styled/StyledCardDetails';
import StyledIconButton from '../components-styled/StyledIconButton';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import StyledIconButtonWrapper from '../components-styled/StyledIconButtonwrapper';
import Favorite from '../public/favorite.svg';
import Neighbor from '../public/neighbor.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectVillagers,
  toggleFavorites,
  toggleNeighbors,
} from '../features/villagers/villagerSlice';

export default function VillagerCard({ villager, index }) {
  const { id, name, personality, species, gender, imageUri } = villager;
  const hue = (index % 360) * 18;
  const [showDetailedCard, setShowDetailedCard] = useState(false);
  const { favorites, neighbors } = useSelector(selectVillagers);
  const isActive = {
    favorites: favorites.includes(id),
    neighbors: neighbors.includes(id),
  };
  const dispatch = useDispatch();

  const handleFavoritesClick = e => {
    e.stopPropagation();
    dispatch(toggleFavorites(id));
  };

  const handleNeighborsClick = e => {
    e.stopPropagation();
    dispatch(toggleNeighbors(id));
  };

  function detailedCard() {
    return (
      <StyledOverlay>
        <VillagerDetailedCard
          hue={hue}
          villager={villager}
          onClick={setShowDetailedCard}
          id={id}
        />
      </StyledOverlay>
    );
  }

  return (
    <StyledCard
      style={{
        backgroundColor: `hsl(${hue}, 100%, 95%)`,
        border: `2px solid hsl(${hue}, 100%, 80%)`,
        boxShadow: `0px 4px 15px hsla(${hue}, 100%, 73%, 0.53)`,
      }}
      onClick={() => setShowDetailedCard(true)}
    >
      <StyledImage
        style={{ border: `2px solid hsl(${hue}, 100%, 80%)` }}
        src={imageUri}
        alt=""
      />
      <StyledDetailFlexWrapper>
        <StyledCardDetails>
          <h2>{name}</h2>
          <ul>
            <li>{personality}</li>
            <li>{gender}</li>
            <li>{species}</li>
          </ul>
          <StyledIconButtonWrapper>
            <StyledIconButton
              className="favorite"
              onClick={handleFavoritesClick}
              isActive={isActive.favorites}
            >
              <StyledSvgWrapper>
                <Favorite />
              </StyledSvgWrapper>
            </StyledIconButton>
            <StyledIconButton
              className="neighbor"
              onClick={handleNeighborsClick}
              isActive={isActive.neighbors}
            >
              <StyledSvgWrapper>
                <Neighbor />
              </StyledSvgWrapper>
            </StyledIconButton>
          </StyledIconButtonWrapper>
          {showDetailedCard && detailedCard()}
        </StyledCardDetails>
      </StyledDetailFlexWrapper>
    </StyledCard>
  );
}
