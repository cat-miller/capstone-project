import { sortByNumbers, sortName } from './sorting';

export default function addSort(array, filter) {
  const sortAlphabet = (elA, elB) =>
    !filter.name.isActive || sortName(elA.name, elB.name, filter.name.isAsc);

  const sortPrice = (elA, elB) =>
    !filter.price.isActive ||
    sortByNumbers(elA.price, elB.price, filter.price.isAsc);

  return array
    .sort((a, b) => sortAlphabet(a, b))
    .sort((a, b) => sortPrice(a, b));
}
