import StyledImage from '../components-styled/StyledImage';
import StyledCard from '../components-styled/StyledCard';
import { useState } from 'react';
import StyledOverlay from '../components-styled/StyledOverlay';
import SeaCreatureDetailedCard from './SeaCreatureDetailedCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSeaCreatures,
  toggleCaught,
} from '../features/seaCreatures/seaCreatureSlice';

export default function SeaCreatureCard({
  name,
  imageUri,
  index,
  catchPhrase,
  price,
  speed,
  shadow,
  id,
}) {
  const hue = index + 250;
  const [showDetailedCard, setShowDetailedCard] = useState(false);
  const { caught } = useSelector(selectSeaCreatures);
  const dispatch = useDispatch();

  function detailedCard() {
    return (
      <StyledOverlay>
        <SeaCreatureDetailedCard
          name={name}
          imageUri={imageUri}
          catchPhrase={catchPhrase}
          speed={speed}
          shadow={shadow}
          price={price}
          hue={hue}
          onClick={setShowDetailedCard}
          id={id}
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
      <div>
        <h2>{name}</h2>
        <ul>
          <li>{speed}</li>
          <li>{shadow} shadow</li>
        </ul>
        {showDetailedCard && detailedCard()}
      </div>
    </StyledCard>
  );
}
