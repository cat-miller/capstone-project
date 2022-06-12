import Link from 'next/link';
import StyledOverviewImage from '../components-styled/StyledOverviewImage';
import StyledShowMore from '../components-styled/StyledShowMore';
import StyledOverviewList from '../components-styled/StyledOverviewList';
import styled from 'styled-components';

function OverviewList({ origin, target, title }) {
  return (
    <StyledWrapper>
      <h3>{title.toUpperCase()}</h3>
      <StyledOverviewList className={target}>
        {origin?.slice(0, 9).map(element => (
          <StyledOverviewImage
            className={target}
            src={element.iconUri}
            alt=""
            key={element.id}
          />
        ))}
        <Link passHref href={`/${target}`}>
          <StyledShowMore className={target}>...</StyledShowMore>
        </Link>
      </StyledOverviewList>
    </StyledWrapper>
  );
}

export default OverviewList;

const StyledWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
`;
