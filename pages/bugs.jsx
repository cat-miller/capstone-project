import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import BugCard from '../components/BugCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectBugs } from '../features/bugs/bugSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';

export default function BugsPage() {
  const { caught, donated, data: bugs } = useSelector(selectBugs);
  const [showCaught, setShowCaught] = useState(false);
  const [showDonated, setShowDonated] = useState(false);
  const [crittersToShow, setCrittersToShow] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [filter, setFilter] = useState({ personality: null, species: null });

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

  const sortName = () => {
    setCrittersToShow(
      [...crittersToShow].sort((critterA, critterB) => {
        const nameA = critterA.name.toUpperCase();
        const nameB = critterB.name.toUpperCase();
        if (isAsc) {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        } else {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
        }
      })
    );
    setIsAsc(!isAsc);
  };

  const sortPrice = () => {
    setCrittersToShow(
      [...crittersToShow].sort((critterA, critterB) => {
        const priceA = parseInt(critterA.price);
        const priceB = parseInt(critterB.price);
        if (isAsc) {
          if (priceA < priceB) {
            return -1;
          }
          if (priceA > priceB) {
            return 1;
          }
        } else {
          if (priceA > priceB) {
            return -1;
          }
          if (priceA < priceB) {
            return 1;
          }
        }
      })
    );
    setIsAsc(!isAsc);
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
          <StyledButton onClick={sortName} className="sort">
            {isAsc ? 'A - Z' : 'Z - A'}
          </StyledButton>

          <StyledButton onClick={sortPrice} className="sort">
            {isAsc ? 'Price asc' : ' Price des'}
          </StyledButton>
        </StyledDetailFlexWrapper>
      </StyledHeader>
      <StyledCardsWrapper>
        {crittersToShow?.map(bug => (
          <BugCard key={bug.id} bug={bug} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
