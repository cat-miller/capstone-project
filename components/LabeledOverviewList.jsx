import StyledListWrapper from '../components-styled/StyledListWrapper';
import StyledOverviewList from '../components-styled/StyledOverviewList';

export default function LabeledOverviewList({ title, children }) {
  return (
    <StyledListWrapper>
      <h3>{title}</h3>
      <StyledOverviewList className="donated">{children}</StyledOverviewList>
    </StyledListWrapper>
  );
}
