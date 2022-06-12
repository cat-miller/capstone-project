import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import FishCard from '../components/FishCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectFishes } from '../features/fishes/fishSlice';
import StyledButton from '../components-styled/StyledButton';

export default function FishesPage() {
  const { caught, donated, data: fishes } = useSelector(selectFishes);

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledButton className="donated">
          {donated.length}/{fishes.length}
        </StyledButton>
        Fishes
        <StyledButton className="caught">
          {caught.length}/{fishes.length}
        </StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {fishes?.map((fish, index) => (
          <FishCard index={index} key={fish.id} fish={fish} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
