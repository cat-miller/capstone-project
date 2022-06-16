import StyledShowMore from '../components-styled/StyledShowMore';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import Link from 'next/link';

export default function IconButton({
  origin,
  target,
  bookmark,
  children,
  onClick,
}) {
  return (
    <Link onClick={onClick} passHref href={`/${target}`}>
      <StyledShowMore className={`${target} bookmark`}>
        <StyledSvgWrapper>
          {children}
          {bookmark.length}/{origin.length}
        </StyledSvgWrapper>
      </StyledShowMore>
    </Link>
  );
}
