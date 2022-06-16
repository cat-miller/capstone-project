export const sortName = (nameA, nameB, isAsc = true) =>
  isAsc
    ? nameA.localeCompare(nameB, 'en', {
        sensitivity: 'base',
      })
    : nameB.localeCompare(nameA, 'en', {
        sensitivity: 'base',
      });

export const sortByNumbers = (numberA, numberB, isAsc = true) =>
  isAsc ? numberA - numberB : numberB - numberA;
