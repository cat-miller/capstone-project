import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import SeaCreatureCard from '../components/SeaCreatureCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';
import { useSelector } from 'react-redux';
import { selectSeaCreatures } from '../features/seaCreatures/seaCreatureSlice';
import { useEffect, useState } from 'react';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import StyledSelection from '../components-styled/StyledSelection';
import addFilter from '../services/addFilter';
import { shadows } from '../constants/shadows';
import { sortByNumbers, sortName } from '../services/sorting';

export default function SeaCreaturesPage() {
  const {
    caught,
    donated,
    data: seaCreatures,
  } = useSelector(selectSeaCreatures);

  const [showCaught, setShowCaught] = useState(false);
  const [showDonated, setShowDonated] = useState(false);
  const [crittersToShow, setCrittersToShow] = useState([]);
  const [isAscAlph, setIsAscAlph] = useState(true);
  const [isAscPr, setIsAscPr] = useState(true);
  const [filter, setFilter] = useState({ shadow: null });

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
            {isAscAlph ? 'A - Z' : 'Z - A'}
          </StyledButton>

          <StyledButton onClick={sortPrice} className="sort">
            {isAscPr ? 'Price asc' : ' Price des'}
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
        {addFilter(crittersToShow, filter)?.map(seaCreature => (
          <SeaCreatureCard key={seaCreature.id} seaCreature={seaCreature} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
