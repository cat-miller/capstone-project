export default function addFilter(array, filter) {
  const date = new Date();
  const time = date.getHours();
  const month = date.getMonth() + 1;

  const filterSpecies = el => !filter?.species || el.species === filter.species;
  const filterPersonality = el =>
    !filter?.personality || el.personality === filter.personality;
  const filterShadow = el => !filter?.shadow || el.shadow === filter.shadow;
  const availability = el =>
    !filter?.isAvailable ||
    ((el.northernMonthsArray.includes(month) || el.isAllYear) &&
      (el.timeArray.includes(time) || el.isAllDay));

  return array
    .filter(filterPersonality)
    .filter(filterSpecies)
    .filter(filterShadow)
    .filter(availability);
}
