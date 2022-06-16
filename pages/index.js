import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { selectVillagers } from '../features/villagers/villagerSlice';
import { selectSeaCreatures } from '../features/seaCreatures/seaCreatureSlice';
import { selectBugs } from '../features/bugs/bugSlice';
import { selectFishes } from '../features/fishes/fishSlice';
import OverviewList from '../components/OverviewList';
import OverviewListCreatures from '../components/OverviewListCreatures';
import StyledOverviewList from '../components-styled/StyledOverviewList';
import StyledShowMore from '../components-styled/StyledShowMore';
import Bugs from '../public/bugs.svg';
import Fishes from '../public/fishes.svg';
import SeaCreatures from '../public/seacreatures.svg';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import Link from 'next/link';
import StyledListWrapper from '../components-styled/StyledListWrapper';
import LabeledOverviewList from '../components/LabeledOverviewList';
import IconButton from '../components/IconButton';
import { setView as setSeaCreatureView } from '../features/seaCreatures/seaCreatureSlice';

export default function Home({ toggleTheme }) {
  const dispatch = useDispatch();
  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);

  const {
    caught: caughtSeaCreatures,
    donated: donatedSeaCreatures,
    data: seaCreatures,
  } = useSelector(selectSeaCreatures);

  const {
    caught: caughtBugs,
    donated: donatedBugs,
    data: bugs,
  } = useSelector(selectBugs);

  const {
    caught: caughtFishes,
    donated: donatedFishes,
    data: fishes,
  } = useSelector(selectFishes);

  return (
    <PageWrapper>
      <StyledHeader>
        <h1>ANIMAL CROSSING JOURNAL</h1>
      </StyledHeader>

      <StyledCardsWrapper>
        <StyledButton className="themebutton" onClick={toggleTheme}>
          Switch Theme
        </StyledButton>

        <LabeledOverviewList title="PROGRESS MUSEUM">
          <IconButton
            onClick={() =>
              dispatch(
                setSeaCreatureView({ showCaught: false, showDonated: true })
              )
            }
            target="seacreatures"
            bookmark={donatedSeaCreatures}
            origin={seaCreatures}
          >
            <SeaCreatures />
          </IconButton>
          <IconButton target="fishes" bookmark={donatedFishes} origin={fishes}>
            <Fishes />
          </IconButton>
          <IconButton target="bugs" bookmark={donatedBugs} origin={bugs}>
            <Bugs />
          </IconButton>
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
