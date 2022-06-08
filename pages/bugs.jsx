import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import BugCard from '../components/BugCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectBugs } from '../features/bugs/bugSlice';
import StyledButton from '../components-styled/StyledButton';

export default function BugsPage() {
  const { data } = useFetch('https://acnhapi.com/v1/bugs');
  const [bugs, setBugs] = useState([]);
  const { caught, donated } = useSelector(selectBugs);

  useEffect(() => {
    if (!data) return;
    setBugs(Object.values(data));
  }, [data]);

  return (
    <StyledPageWrapper>
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
        {bugs?.map(
          (
            {
              id,
              name,
              image_uri: imageUri,
              'catch-phrase': catchPhrase,
              availability,
              price,
              'price-flick': priceFlick,
            },
            index
          ) => (
            <BugCard
              index={index}
              id={id}
              key={id}
              name={name['name-EUen'].toUpperCase()}
              imageUri={imageUri}
              catchPhrase={catchPhrase}
              price={price}
              priceFlick={priceFlick}
              location={availability['location']}
              rarity={availability['rarity']}
            />
          )
        )}
      </StyledCardsWrapper>
      <Navigation />
    </StyledPageWrapper>
  );
}
