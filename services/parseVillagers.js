export default function parseVillagers(data) {
  return Object.values(data).map(villager => ({
    id: villager.id,
    name: villager.name['name-EUen'].toUpperCase(),
    personality: villager.personality,
    birthday: villager.birthday,
    species: villager.species,
    gender: villager.gender,
    catchPhrase: villager['catch-phrase'],
    iconUri: villager['icon_uri'],
    imageUri: villager['image_uri'],
    textColor: villager['text-color'],
    bubbleColor: villager['bubble-color'],
    saying: villager.saying,
    hobby: villager.hobby,
  }));
}
