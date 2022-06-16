export default function parseFishes(data) {
  return Object.values(data).map(fish => ({
    id: fish.id,
    name: fish.name['name-EUen'].toUpperCase(),
    catchPhrase: fish['catch-phrase'],
    iconUri: fish['icon_uri'],
    imageUri: fish['image_uri'],
    shadow: fish.shadow,
    price: fish.price,
    priceCJ: fish['price-cj'],
    rarity: fish.availability['rarity'],
    location: fish.availability['location'],
    time: fish.availability['time'],
    northernMonths: fish.availability['month-northern'],
    southernMonths: fish.availability['month-southern'],
    northernMonthsArray: fish.availability['month-array-northern'],
    southernMonthsArray: fish.availability['month-array-southern'],
    timeArray: fish.availability['time-array'],
    isAllDay: fish.availability['isAllDay'],
    isAllYear: fish.availability['isAllYear'],
  }));
}
