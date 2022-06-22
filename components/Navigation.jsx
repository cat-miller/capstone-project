import { useEffect } from 'react';
import Link from 'next/link';
import StyledNavigation from '../components-styled/StyledNavigation';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Bugs from '../public/bugs.svg';
import Fishes from '../public/fishes.svg';
import Passport from '../public/passport.svg';
import SeaCreatures from '../public/seacreatures.svg';
import Villagers from '../public/villagers.svg';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import { useDispatch } from 'react-redux';
import fetchDataThunk from '../features/thunk/fetchDataThunk';
import { setView as setSeaCreatureView } from '../features/seaCreatures/seaCreatureSlice';
import { setView as setBugView } from '../features/bugs/bugSlice';
import { setView as setFishView } from '../features/fishes/fishSlice';
import { setView as setVillagerView } from '../features/villagers/villagerSlice';

export default function Navigation() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  return (
    <StyledNavigation>
      <StyledScrollShadow />
      <Link passHref href="/villagers">
        <StyledActiveWrapper isActive={router.pathname === '/villagers'}>
          <StyledSvgWrapper
            className={'navigation'}
            onClick={() =>
              dispatch(
                setVillagerView({
                  showFavorites: false,
                  showNeighbors: false,
                })
              )
            }
          >
            <Villagers />
          </StyledSvgWrapper>
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/seacreatures">
        <StyledActiveWrapper isActive={router.pathname === '/seacreatures'}>
          <StyledSvgWrapper
            className={'navigation'}
            onClick={() =>
              dispatch(
                setSeaCreatureView({
                  showDonated: false,
                  showCaught: false,
                })
              )
            }
          >
            <SeaCreatures />
          </StyledSvgWrapper>
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/">
        <StyledActiveWrapper isActive={router.pathname === '/'}>
          <StyledSvgWrapper className={'navigation'}>
            <Passport />
          </StyledSvgWrapper>
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/fishes">
        <StyledActiveWrapper isActive={router.pathname === '/fishes'}>
          <StyledSvgWrapper
            className={'navigation'}
            onClick={() =>
              dispatch(
                setFishView({
                  showDonated: false,
                  showCaught: false,
                })
              )
            }
          >
            <Fishes />
          </StyledSvgWrapper>
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/bugs">
        <StyledActiveWrapper isActive={router.pathname === '/bugs'}>
          <StyledSvgWrapper
            className={'navigation'}
            onClick={() =>
              dispatch(
                setBugView({
                  showDonated: false,
                  showCaught: false,
                })
              )
            }
          >
            <Bugs />
          </StyledSvgWrapper>
        </StyledActiveWrapper>
      </Link>
    </StyledNavigation>
  );
}

const StyledActiveWrapper = styled.div`
  background-color: ${({ isActive }) =>
    isActive ? 'var(--background-color-activewrapper)' : 'transparent'};
  border-top-left-radius: var(--border-radius-inner);
  border-top-right-radius: var(--border-radius-inner);
  padding: 0.2rem 0.7rem;
  height: 44px;
  display: flex;
  align-items: center;
`;

const StyledScrollShadow = styled.div`
  position: absolute;
  top: -5rem;
  left: 0;
  right: 0;
  pointer-events: none;
  height: 5rem;
  background: linear-gradient(
    to top,
    var(--background-color),
    var(--fu-safari)
  );
`;
