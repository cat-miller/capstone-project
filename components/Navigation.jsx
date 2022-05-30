import Link from 'next/link';
import StyledNavigation from '../components-styled/StyledNavigation';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Image from 'next/image';

export default function Navigation() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledScrollShadow />
      <Link passHref href="/villagers">
        <StyledActiveWrapper isActive={router.pathname === '/villagers'}>
          <Image src={'/villagers.svg'} alt="" width="40px" height="40px" />
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/seacreatures">
        <StyledActiveWrapper isActive={router.pathname === '/seacreatures'}>
          <Image src={'/seacreatures.svg'} alt="" width="40px" height="40px" />
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/fishes">
        <StyledActiveWrapper isActive={router.pathname === '/fishes'}>
          <Image src={'/fishes.svg'} alt="" width="40px" height="40px" />
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/bugs">
        <StyledActiveWrapper isActive={router.pathname === '/bugs'}>
          <Image src={'/bugs.svg'} alt="" width="40px" height="40px" />
        </StyledActiveWrapper>
      </Link>
    </StyledNavigation>
  );
}

const StyledActiveWrapper = styled.div`
  background-color: ${({ isActive }) =>
    isActive ? 'hsl(248, 89%, 60%)' : 'transparent'};
  border-top-left-radius: var(--border-radius-inner);
  border-top-right-radius: var(--border-radius-inner);
  padding: 0.2rem 0.7rem;
`;

const StyledScrollShadow = styled.div`
  position: absolute;
  top: -5rem;
  left: 0;
  right: 0;
  height: 5rem;
  background: linear-gradient(to top, var(--background-color), transparent);
`;
