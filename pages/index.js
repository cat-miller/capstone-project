import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import { useSelector } from 'react-redux';
import { selectVillagers } from '../features/villagers/villagerSlice';
import { selectSeaCreatures } from '../features/seaCreatures/seaCreatureSlice';
import { selectBugs } from '../features/bugs/bugSlice';
import { selectFishes } from '../features/fishes/fishSlice';
import OverviewList from '../components/OverviewList';
import LabeledOverviewList from '../components/LabeledOverviewList';
import ProgressMuseumOverview from '../components/ProgressMuseumOverview';
import ProgressCaughtOverview from '../components/ProgressCaughtOverview';
import ThemeButtonList from '../components/ThemeButtonList';
import PassportForm from '../components/PassportForm';
import { useEffect } from 'react';
import {
  springTheme,
  fallTheme,
  summerTheme,
  winterTheme,
} from '../styles/ThemeConfig';
import { selectPassport } from '../features/passport/passportSlice';

export default function Home({ setTheme }) {
  const { theme } = useSelector(selectPassport);
  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);

  const { data: seaCreatures } = useSelector(selectSeaCreatures);

  const { data: bugs } = useSelector(selectBugs);

  const { data: fishes } = useSelector(selectFishes);

  useEffect(() => {
    switch (theme) {
      case 'winter':
        return setTheme(winterTheme);
      case 'spring':
        return setTheme(springTheme);
      case 'summer':
        return setTheme(summerTheme);
      case 'fall':
        return setTheme(fallTheme);
    }
  }, [setTheme, theme]);

  return (
    <PageWrapper>
      <StyledHeader>
        <h1>ANIMAL CROSSING JOURNAL</h1>
      </StyledHeader>

      <StyledCardsWrapper>
        <LabeledOverviewList className="themes" title="PASSPORT">
          <PassportForm />
        </LabeledOverviewList>
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
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
