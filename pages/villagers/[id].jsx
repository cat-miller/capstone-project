import { useRouter } from 'next/router';
import StyledDetailedCard from '../../components-styled/StyledDetailedCard';
import StyledImage from '../../components-styled/StyledImage';
import StyledDetailFlexWrapper from '../../components-styled/StyledDetailFlexWrapper';
import StyledCardDetails from '../../components-styled/StyledCardDetails';
import StyledButton from '../../components-styled/StyledButton';
import StyledSpan from '../../components-styled/StyledSpan';
import StyledIconButtonWrapper from '../../components-styled/StyledIconButtonwrapper';
import StyledIconButton from '../../components-styled/StyledIconButton';
import StyledSvgWrapper from '../../components-styled/StyledSvgWrapper';
import Favorite from '../../public/favorite.svg';
import Neighbor from '../../public/neighbor.svg';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import {
  selectVillagers,
  toggleFavorites,
  toggleNeighbors,
} from '../../features/villagers/villagerSlice';

import { useEffect } from 'react';
import PageWrapper from '../../components/PageWrapper';
import StyledHeader from '../../components-styled/StyledHeader';
import StyledCardsWrapper from '../../components-styled/StyledCardsWrapper';

export default function VillagerDetailPage() {
  const router = useRouter();
  const { id: idString } = router.query;
  const id = parseInt(idString);

  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);
  const dispatch = useDispatch();
  const villager = villagers.find(villager => villager.id === id) || {};

  useEffect(() => {
    if (villagers.length < 1) {
      router.push('/villagers');
    }
  }, [router, villagers]);

  const {
    name,
    personality,
    species,
    gender,
    imageUri,
    birthday,
    catchPhrase,
    bubbleColor,
    textColor,
  } = villager;
  const index = villagers.findIndex(villager => villager.id === id);
  const hue = (index % 360) * 18;
  const isActive = {
    favorites: favorites.includes(id),
    neighbors: neighbors.includes(id),
  };

  return (
    <PageWrapper>
      <StyledHeader>
        <h1>Villagers</h1>
      </StyledHeader>
      <StyledCardsWrapper className="slug">
        <StyledDetailedCard
          className="villagers"
          style={{
            backgroundColor: `hsl(${hue}, 100%, 95%)`,
            border: `2px solid hsl(${hue}, 100%, 80%)`,
            boxShadow: `0px 4px 15px hsla(${hue}, 100%, 73%, 0.53)`,
          }}
        >
          <Link passHref href="/">
            <StyledButton>Back</StyledButton>
          </Link>
          <StyledImage
            style={{ border: `2px solid hsl(${hue}, 100%, 80%)` }}
            src={imageUri}
            alt=""
          />
          <StyledDetailFlexWrapper>
            <StyledCardDetails>
              <StyledSpan color={bubbleColor} backgroundColor={textColor}>
                &quot;{catchPhrase}!&quot;
              </StyledSpan>

              <h2>{name}</h2>
              <ul>
                <li>Personality: {personality}</li>
                <li>Gender: {gender}</li>
                <li>Species: {species}</li>
                <li>Birthday: {birthday}</li>
              </ul>
            </StyledCardDetails>
            <StyledIconButtonWrapper>
              <StyledIconButton
                className="favorite"
                onClick={() => dispatch(toggleFavorites(id))}
                isActive={isActive.favorites}
              >
                <StyledSvgWrapper>
                  <Favorite />
                </StyledSvgWrapper>
              </StyledIconButton>
              <StyledIconButton
                className="neighbor"
                onClick={() => dispatch(toggleNeighbors(id))}
                isActive={isActive.neighbors}
              >
                <StyledSvgWrapper>
                  <Neighbor />
                </StyledSvgWrapper>
              </StyledIconButton>
            </StyledIconButtonWrapper>
          </StyledDetailFlexWrapper>
        </StyledDetailedCard>
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
