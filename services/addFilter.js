export default function addFilter(array, filter) {
  const filterSpecies = el => el.species === filter.species || !filter.species;
  const filterPersonality = el =>
    el.personality === filter.personality || !filter.personality;

  return array.filter(filterPersonality).filter(filterSpecies);
}
