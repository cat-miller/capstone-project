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

export default function SeaCreaturesPage() {
  const {
    caught,
    donated,
    data: seaCreatures,
  } = useSelector(selectSeaCreatures);

  const [showCaught, setShowCaught] = useState(false);
  const [showDonated, setShowDonated] = useState(false);
  const [crittersToShow, setCrittersToShow] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
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

  const selectShadows = e => {
    const shadow = e.target.value;
    if (shadow === 'all') {
      return setFilter({ ...filter, shadow: null });
    }

    setFilter({ ...filter, shadow });
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
          <StyledButton onClick={sortName} className="sort">
            {isAsc ? 'A - Z' : 'Z - A'}
          </StyledButton>

          <StyledButton onClick={sortPrice} className="sort">
            {isAsc ? 'Price asc' : ' Price des'}
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
