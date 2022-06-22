import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import SeaCreatureCard from '../components/SeaCreatureCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSeaCreatures,
  setView,
} from '../features/seaCreatures/seaCreatureSlice';
import { useEffect, useState } from 'react';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import StyledSelection from '../components-styled/StyledSelection';
import addFilter from '../services/addFilter';
import { shadows } from '../constants/shadows';
import { sortByNumbers, sortName } from '../services/sorting';
import addSort from '../services/addSort';

export default function SeaCreaturesPage() {
  const {
    caught,
    donated,
    data: seaCreatures,
    view: { showDonated, showCaught },
  } = useSelector(selectSeaCreatures);

  const [crittersToShow, setCrittersToShow] = useState([]);
  const [filter, setFilter] = useState({ shadow: null });
  const [sort, setSort] = useState({
    name: { isActive: false, isAsc: false },
    price: { isActive: false, isAsc: false },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    switch (true) {
      case showCaught:
        setCrittersToShow(
          caught.map(caughtID => seaCreatures.find(({ id }) => id === caughtID))
        );
        break;

      case showDonated:
        setCrittersToShow(
          donated.map(donatedID =>
            seaCreatures.find(({ id }) => id === donatedID)
          )
        );
        break;

      default:
        setCrittersToShow(seaCreatures);
    }
  }, [seaCreatures, donated, caught, showDonated, showCaught]);

  function toggleCaughtCards() {
    dispatch(setView({ showDonated: false, showCaught: !showCaught }));
  }

  function toggleDonatedCards() {
    dispatch(setView({ showCaught: false, showDonated: !showDonated }));
  }

  const sortByName = () => {
    setCrittersToShow(
      [...crittersToShow].sort((critterA, critterB) =>
        sortName(critterA.name, critterB.name, sort.name.isAsc)
      )
    );

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
          sort.price.isAsc
        )
      )
    );

    setSort({
      ...sort,
      name: { isActive: false },
      price: { isActive: true, isAsc: !sort.price.isAsc },
    });
  };

  const selectShadows = event => {
    const shadow = event.target.value;
    shadow === 'all'
      ? setFilter({ ...filter, shadow: null })
      : setFilter({ ...filter, shadow });
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
            {donated.length}/{seaCreatures.length}
          </StyledButton>
          <h1>Sea Creatures</h1>
          <StyledButton
            className="caught"
            isActive={showCaught}
            onClick={toggleCaughtCards}
          >
            {caught.length}/{seaCreatures.length}
          </StyledButton>
        </StyledDetailFlexWrapper>
        <StyledDetailFlexWrapper>
          <StyledButton onClick={sortByName} className="sort">
            {sort.name.isAsc ? 'Z - A' : 'A - Z'}
          </StyledButton>

          <StyledButton onClick={sortPrice} className="sort">
            {sort.price.isAsc ? 'Price des' : ' Price asc'}
          </StyledButton>

          <StyledSelection
            onChange={selectShadows}
            name="shadow"
            id="shadow-select"
          >
            {shadows.map(shadow => (
              <option key={shadow.value} value={shadow.value}>
                {shadow.label}
              </option>
            ))}
          </StyledSelection>
        </StyledDetailFlexWrapper>
      </StyledHeader>
      <StyledCardsWrapper>
        {addSort(addFilter(crittersToShow, filter), sort)?.map(seaCreature => (
          <SeaCreatureCard key={seaCreature.id} seaCreature={seaCreature} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
