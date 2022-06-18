import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import { useSelector } from 'react-redux';
import { selectVillagers } from '../features/villagers/villagerSlice';
import { selectSeaCreatures } from '../features/seaCreatures/seaCreatureSlice';
import { selectBugs } from '../features/bugs/bugSlice';
import { selectFishes } from '../features/fishes/fishSlice';
import OverviewList from '../components/OverviewList';
import OverviewListCreatures from '../components/OverviewListCreatures';
import LabeledOverviewList from '../components/LabeledOverviewList';
import ProgressMuseumOverview from '../components/ProgressMuseumOverview';
import ProgressCaughtOverview from '../components/ProgressCaughtOverview';
import ThemeButtonList from '../components/ThemeButtonList';
import PassportForm from '../components/PassportForm';

export default function Home({ toggleTheme }) {
  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);

  const { data: seaCreatures } = useSelector(selectSeaCreatures);

  const { data: bugs } = useSelector(selectBugs);

  const { data: fishes } = useSelector(selectFishes);

  return (
    <PageWrapper>
      <StyledHeader>
        <h1>ANIMAL CROSSING JOURNAL</h1>
      </StyledHeader>

      <StyledCardsWrapper>
        <LabeledOverviewList className="themes" title="PASSPORT">
          <PassportForm />
        </LabeledOverviewList>
        <StyledButton className="themebutton" onClick={toggleTheme}>
          Switch Theme
        </StyledButton>
        <LabeledOverviewList className="themes" title="THEMES">
          <ThemeButtonList />
        </LabeledOverviewList>
        <LabeledOverviewList className="museum" title="PROGRESS MUSEUM">
          <ProgressMuseumOverview />
        </LabeledOverviewList>
        <LabeledOverviewList className="collection" title="PROGRESS COLLECTION">
          <ProgressCaughtOverview />
        </LabeledOverviewList>
        <OverviewList
          origin={villagers}
          bookmarks={neighbors}
          target="villagers"
          title="neighbors"
        />
        <OverviewList
          origin={villagers}
          bookmarks={favorites}
          target="villagers"
          title="favorites"
        />
        <OverviewListCreatures
          origin={seaCreatures}
          target="seacreatures"
          title="sea creatures"
        />
        <OverviewListCreatures origin={fishes} target="fishes" title="fishes" />
        <OverviewListCreatures origin={bugs} target="bugs" title="bugs" />
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
