import StyledShowMore from '../components-styled/StyledShowMore';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import Link from 'next/link';

export default function LabeledLinkButton({
  label,
  target,
  children,
  ...remainingProps
}) {
  return (
    <Link passHref href={`/${target}`}>
      <StyledShowMore {...remainingProps}>
        <StyledSvgWrapper>
          {children}
          {label}
        </StyledSvgWrapper>
      </StyledShowMore>
    </Link>
  );
}
