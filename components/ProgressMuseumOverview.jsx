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

export default function ProgressMuseumOverview() {
  const dispatch = useDispatch();
  const { donated: donatedSeaCreatures, data: seaCreatures } =
    useSelector(selectSeaCreatures);

  const { donated: donatedBugs, data: bugs } = useSelector(selectBugs);

  const { donated: donatedFishes, data: fishes } = useSelector(selectFishes);

  return (
    <>
      <LabeledLinkButton
        onClick={() =>
          dispatch(setSeaCreatureView({ showCaught: false, showDonated: true }))
        }
        target="seacreatures"
        label={`${donatedSeaCreatures.length}/${seaCreatures.length}`}
        className="museum bookmark"
      >
        <SeaCreatures />
      </LabeledLinkButton>
      <LabeledLinkButton
        onClick={() =>
          dispatch(setFishView({ showCaught: false, showDonated: true }))
        }
        target="fishes"
        label={`${donatedFishes.length}/${fishes.length}`}
        className="museum bookmark"
      >
        <Fishes />
      </LabeledLinkButton>
      <LabeledLinkButton
        onClick={() =>
          dispatch(setBugView({ showCaught: false, showDonated: true }))
        }
        target="bugs"
        label={`${donatedBugs.length}/${bugs.length}`}
        className="museum bookmark"
      >
        <Bugs />
      </LabeledLinkButton>
    </>
  );
}
