import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import BugCard from '../components/BugCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector, useDispatch } from 'react-redux';
import { selectBugs, setBugs } from '../features/bugs/bugSlice';
import StyledButton from '../components-styled/StyledButton';
import parseBugs from '../services/ParseBugs';

export default function BugsPage() {
  const { data } = useFetch('https://acnhapi.com/v1/bugs');
  const { caught, donated, data: bugs } = useSelector(selectBugs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) return;
    dispatch(setBugs(parseBugs(Object.values(data))));
  }, [data, dispatch]);

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledButton className="donated">
          {donated.length}/{bugs.length}
        </StyledButton>
        Bugs
        <StyledButton className="caught">
          {caught.length}/{bugs.length}
        </StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {bugs?.map((bug, index) => (
          <BugCard index={index} key={bug.id} bug={bug} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
