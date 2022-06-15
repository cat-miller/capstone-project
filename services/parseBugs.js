export default function parseBugs(data) {
  return Object.values(data).map(bug => ({
    id: bug.id,
    name: bug.name['name-EUen'].toUpperCase(),
    catchPhrase: bug['catch-phrase'],
    iconUri: bug['icon_uri'],
    imageUri: bug['image_uri'],
    price: bug.price,
    priceFlick: bug['price-flick'],
    rarity: bug.availability['rarity'],
    location: bug.availability['location'],
    time: bug.availability['time'],
    northernMonths: bug.availability['month-northern'],
    southernMonths: bug.availability['month-southern'],
    northernMonthsArray: bug.availability['month-array-northern'],
    southernMonthsArray: bug.availability['month-array-southern'],
    timeArray: bug.availability['time-array'],
    isAllDay: bug.availability['isAllDay'],
    isAllYear: bug.availability['isAllYear'],
  }));
}
