import {
  selectSeaCreatures,
  setView as setSeaCreatureView,
} from '../features/seaCreatures/seaCreatureSlice';

import SeaCreatures from '../public/seacreatures.svg';
import LabeledLinkButton from './LabeledLinkButton';
import { useDispatch, useSelector } from 'react-redux';

import { selectBugs, setView as setBugView } from '../features/bugs/bugSlice';
import {
  selectFishes,
  setView as setFishView,
} from '../features/fishes/fishSlice';
import Fishes from '../public/fishes.svg';
import Bugs from '../public/bugs.svg';

export default function ProgressCaughtOverview() {
  const dispatch = useDispatch();
  const { caught: caughtSeaCreatures, data: seaCreatures } =
    useSelector(selectSeaCreatures);

  const { caught: caughtBugs, data: bugs } = useSelector(selectBugs);

  const { caught: caughtFishes, data: fishes } = useSelector(selectFishes);

  return (
    <>
      <LabeledLinkButton
        onClick={() =>
          dispatch(setSeaCreatureView({ showDonated: false, showCaught: true }))
        }
        target="seacreatures"
        label={`${caughtSeaCreatures.length}/${seaCreatures.length}`}
        className="collection bookmark"
      >
        <SeaCreatures />
      </LabeledLinkButton>
      <LabeledLinkButton
        onClick={() =>
          dispatch(setFishView({ showDonated: false, showCaught: true }))
        }
        target="fishes"
        label={`${caughtFishes.length}/${fishes.length}`}
        className="collection bookmark"
      >
        <Fishes />
      </LabeledLinkButton>
      <LabeledLinkButton
        onClick={() =>
          dispatch(setBugView({ showDonated: false, showCaught: true }))
        }
        target="bugs"
        label={`${caughtBugs.length}/${bugs.length}`}
        className="collection bookmark"
      >
        <Bugs />
      </LabeledLinkButton>
    </>
  );
}
