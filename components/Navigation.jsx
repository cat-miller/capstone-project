import Link from 'next/link';
import StyledNavigation from '../components-styled/StyledNavigation';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Bugs from '../public/bugs.svg';
import Fishes from '../public/fishes.svg';
import Passport from '../public/passport.svg';
import Seacreatures from '../public/seacreatures.svg';
import Villagers from '../public/villagers.svg';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';

export default function Navigation() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledScrollShadow />
      <Link passHref href="/villagers">
        <StyledActiveWrapper isActive={router.pathname === '/villagers'}>
          <StyledSvgWrapper>
            <Villagers />
          </StyledSvgWrapper>
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/seacreatures">
        <StyledActiveWrapper isActive={router.pathname === '/seacreatures'}>
          <StyledSvgWrapper>
            <Seacreatures />
          </StyledSvgWrapper>
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/">
        <StyledActiveWrapper isActive={router.pathname === '/'}>
          <StyledSvgWrapper>
            <Passport />
          </StyledSvgWrapper>
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/fishes">
        <StyledActiveWrapper isActive={router.pathname === '/fishes'}>
          <StyledSvgWrapper>
            <Fishes />
          </StyledSvgWrapper>
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/bugs">
        <StyledActiveWrapper isActive={router.pathname === '/bugs'}>
          <StyledSvgWrapper>
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
  background: linear-gradient(to top, var(--background-color), transparent);
`;
