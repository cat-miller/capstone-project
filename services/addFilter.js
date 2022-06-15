export default function addFilter(array, filter) {
  const filterSpecies = el => !filter?.species || el.species === filter.species;
  const filterPersonality = el =>
    !filter?.personality || el.personality === filter.personality;
  const filterShadow = el => !filter?.shadow || el.shadow === filter.shadow;

  return array
    .filter(filterPersonality)
    .filter(filterSpecies)
    .filter(filterShadow);
}
