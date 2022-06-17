import StyledListWrapper from '../components-styled/StyledListWrapper';
import StyledOverviewList from '../components-styled/StyledOverviewList';

export default function LabeledOverviewList({ title, children, className }) {
  return (
    <StyledListWrapper>
      <h3>{title}</h3>
      <StyledOverviewList className={`${className}`}>
        {children}
      </StyledOverviewList>
    </StyledListWrapper>
  );
}
