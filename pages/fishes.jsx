import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import FishCard from '../components/FishCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector, useDispatch } from 'react-redux';
import { selectFishes, setView } from '../features/fishes/fishSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import addFilter from '../services/addFilter';
import { sortByNumbers, sortName } from '../services/sorting';
import addSort from '../services/addSort';

export default function FishesPage() {
  const dispatch = useDispatch();
  const {
    caught,
    donated,
    data: fishes,
    view: { showDonated, showCaught },
  } = useSelector(selectFishes);

  const [crittersToShow, setCrittersToShow] = useState([]);
  const [isAscAlph, setIsAscAlph] = useState(true);
  const [isAscPr, setIsAscPr] = useState(true);
  const [filter, setFilter] = useState({ isAvailable: false });
  const [sort, setSort] = useState({
    name: { isActive: false, isAsc: false },
    price: { isActive: false, isAsc: false },
  });

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
    dispatch(setView({ showDonated: false, showCaught: !showCaught }));
  }

  function toggleDonatedCards() {
    dispatch(setView({ showCaught: false, showDonated: !showDonated }));
  }

  const sortByName = () => {
    setCrittersToShow(
      [...crittersToShow].sort((critterA, critterB) =>
        sortName(critterA.name, critterB.name, isAscAlph)
      )
    );
    setIsAscAlph(!isAscAlph);
    setSort({
      ...sort,
      name: { isActive: true, isAsc: !sort.name.isAsc },
      price: { isActive: false },
    });
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
    setSort({
      ...sort,
      name: { isActive: false },
      price: { isActive: true, isAsc: !sort.price.isAsc },
    });
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
        {addSort(addFilter(crittersToShow, filter), sort)?.map(fish => (
          <FishCard key={fish.id} fish={fish} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
