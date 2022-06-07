import StyledImage from '../components-styled/StyledImage';
import StyledDetailedCard from '../components-styled/StyledDetailedCard';
import StyledSpan from '../components-styled/StyledSpan';
import StyledButton from '../components-styled/StyledButton';
import StyledIconButton from '../components-styled/StyledIconButton';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import Favorite from '../public/favorite.svg';
import Neighbor from '../public/neighbor.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectVillagers,
  toggleFavorites,
  toggleNeighbors,
} from '../features/villagers/VillagerSlice';
import StyledIconButtonWrapper from '../components-styled/StyledIconButtonwrapper';

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
  id,
}) {
  const dispatch = useDispatch();
  const { favorites, neighbors } = useSelector(selectVillagers);
  const isActive = {
    favorites: favorites.includes(id),
    neighbors: neighbors.includes(id),
  };

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
      <StyledIconButtonWrapper>
        <StyledIconButton
          className="donated"
          onClick={() => dispatch(toggleFavorites(id))}
          isActive={isActive.favorites}
        >
          <StyledSvgWrapper>
            <Favorite />
          </StyledSvgWrapper>
        </StyledIconButton>
        <StyledIconButton
          className="caught"
          onClick={() => dispatch(toggleNeighbors(id))}
          isActive={isActive.neighbors}
        >
          <StyledSvgWrapper>
            <Neighbor />
          </StyledSvgWrapper>
        </StyledIconButton>
      </StyledIconButtonWrapper>
    </StyledDetailedCard>
  );
}
