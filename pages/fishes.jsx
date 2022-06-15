import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import FishCard from '../components/FishCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectFishes } from '../features/fishes/fishSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import addFilter from '../services/addFilter';

export default function FishesPage() {
  const { caught, donated, data: fishes } = useSelector(selectFishes);

  const [showCaught, setShowCaught] = useState(false);
  const [showDonated, setShowDonated] = useState(false);
  const [crittersToShow, setCrittersToShow] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  // const [isAvailable, setIsAvailable] = useState(false);
  const [filter, setFilter] = useState({ isAvailable: false });

  useEffect(() => {
    switch (true) {
      case showCaught:
        setCrittersToShow(
          caught.map(caughtID => fishes.find(({ id }) => id === caughtID))
        );
        break;

      case showDonated:
        setCrittersToShow(
          donated.map(donatedID => fishes.find(({ id }) => id === donatedID))
        );
        break;

      default:
        setCrittersToShow(fishes);
    }
  }, [fishes, donated, caught, showDonated, showCaught]);

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

  const setAvailability = e => {
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
            {donated.length}/{fishes.length}
          </StyledButton>
          <h1>Fishes</h1>
          <StyledButton
            className="caught"
            isActive={showCaught}
            onClick={toggleCaughtCards}
          >
            {caught.length}/{fishes.length}
          </StyledButton>
        </StyledDetailFlexWrapper>
        <StyledDetailFlexWrapper>
          <StyledButton onClick={sortName} className="sort">
            {isAsc ? 'A - Z' : 'Z - A'}
          </StyledButton>

          <StyledButton onClick={sortPrice} className="sort">
            {isAsc ? 'Price asc' : ' Price des'}
          </StyledButton>

          <StyledButton onClick={setAvailability} className="sort">
            {filter.isAvailable ? 'Just available shown' : 'All shown'}
          </StyledButton>
        </StyledDetailFlexWrapper>
      </StyledHeader>
      <StyledCardsWrapper>
        {addFilter(crittersToShow, filter)?.map(fish => (
          <FishCard key={fish.id} fish={fish} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
