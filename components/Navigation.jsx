import Link from 'next/link';
import StyledNavigation from '../components-styled/StyledNavigation';
import StyledActiveWrapper from '../components-styled/StyledActiveWrapper';
import { useRouter } from 'next/router';

import Image from 'next/image';

export default function Navigation() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <Link passHref href="/villagers">
        <StyledActiveWrapper isActive={router.pathname === '/villagers'}>
          <Image src={'/villagers.svg'} alt="" width="40px" height="40px" />
        </StyledActiveWrapper>
      </Link>
      <Link passHref href="/fishes">
        <StyledActiveWrapper isActive={router.pathname === '/fishes'}>
          <Image src={'/fishes.svg'} alt="" width="40px" height="40px" />
        </StyledActiveWrapper>
      </Link>
    </StyledNavigation>
  );
}
