import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import BugCard from '../components/BugCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectBugs } from '../features/bugs/bugSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import addFilter from '../services/addFilter';
import { sortByNumbers, sortName } from '../services/sorting';

export default function BugsPage() {
  const { caught, donated, data: bugs } = useSelector(selectBugs);
  const [showCaught, setShowCaught] = useState(false);
  const [showDonated, setShowDonated] = useState(false);
  const [crittersToShow, setCrittersToShow] = useState([]);
  const [isAscAlph, setIsAscAlph] = useState(true);
  const [isAscPr, setIsAscPr] = useState(true);
  const [filter, setFilter] = useState({ isAvailable: false });

  useEffect(() => {
    switch (true) {
      case showCaught:
        setCrittersToShow(
          caught.map(caughtID => bugs.find(({ id }) => id === caughtID))
        );
        break;

      case showDonated:
        setCrittersToShow(
          donated.map(donatedID => bugs.find(({ id }) => id === donatedID))
        );
        break;

      default:
        setCrittersToShow(bugs);
    }
  }, [bugs, donated, caught, showDonated, showCaught]);

  function toggleCaughtCards() {
    setShowDonated(false);
    setShowCaught(!showCaught);
  }

  function toggleDonatedCards() {
    setShowCaught(false);
    setShowDonated(!showDonated);
  }

  const sortByName = () => {
    setCrittersToShow(
      [...crittersToShow].sort((critterA, critterB) =>
        sortName(critterA.name, critterB.name, isAscAlph)
      )
    );
    setIsAscAlph(!isAscAlph);
  };

  const sortPrice = () => {
    setCrittersToShow(
      [...crittersToShow].sort((critterA, critterB) =>
        sortByNumbers(
          parseInt(critterA.price),
          parseInt(critterB.price),
          isAscPr
        )
      )
    );
    setIsAscPr(!isAscPr);
  };
  const setAvailability = () => {
    return setFilter({ ...filter, isAvailable: !filter.isAvailable });
  };

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledDetailFlexWrapper>
          <StyledButton
            className="donated"
            isActive={showDonated}
            onClick={toggleDonatedCards}
          >
            {donated.length}/{bugs.length}
          </StyledButton>
          <h1>Bugs</h1>
          <StyledButton
            className="caught"
            isActive={showCaught}
            onClick={toggleCaughtCards}
          >
            {caught.length}/{bugs.length}
          </StyledButton>
        </StyledDetailFlexWrapper>
        <StyledDetailFlexWrapper>
          <StyledButton onClick={sortByName} className="sort">
            {isAscAlph ? 'A - Z' : 'Z - A'}
          </StyledButton>

          <StyledButton onClick={sortPrice} className="sort">
            {isAscPr ? 'Price asc' : ' Price des'}
          </StyledButton>

          <StyledButton onClick={setAvailability} className="sort">
            {filter.isAvailable ? 'Show all' : 'What is available now?'}
          </StyledButton>
        </StyledDetailFlexWrapper>
      </StyledHeader>
      <StyledCardsWrapper>
        {addFilter(crittersToShow, filter)?.map(bug => (
          <BugCard key={bug.id} bug={bug} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
