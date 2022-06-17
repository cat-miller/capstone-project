import StyledShowMore from '../components-styled/StyledShowMore';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import Link from 'next/link';

export default function LabeledLinkButton({
  label,
  target,
  children,
  onClick,
  className,
}) {
  return (
    <Link passHref href={`/${target}`}>
      <StyledShowMore onClick={onClick} className={`${className}`}>
        <StyledSvgWrapper>
          {children}
          {label}
        </StyledSvgWrapper>
      </StyledShowMore>
    </Link>
  );
}
