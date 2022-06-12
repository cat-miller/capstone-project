export default function parseSeaCreatures(data) {
  return Object.values(data).map(seaCreature => ({
    id: seaCreature.id,
    name: seaCreature.name['name-EUen'].toUpperCase(),
    catchPhrase: seaCreature['catch-phrase'],
    iconUri: seaCreature['icon_uri'],
    imageUri: seaCreature['image_uri'],
    shadow: seaCreature.shadow,
    price: seaCreature.price,
    speed: seaCreature.speed,
    northernMonths: seaCreature.availability['month-northern'],
    southernMonths: seaCreature.availability['month-southern'],
    time: seaCreature.availability['time'],
    isAllDay: seaCreature.availability['isAllDay'],
    isAllYear: seaCreature.availability['isAllYear'],
  }));
}
