import { createAsyncThunk } from '@reduxjs/toolkit';
import { setVillagers } from '../villagers/villagerSlice';
import { setSeaCreatures } from '../seaCreatures/seaCreatureSlice';
import { setFishes } from '../fishes/fishSlice';
import { setBugs } from '../bugs/bugSlice';
import parseVillagers from '../../services/parseVillagers';
import parseSeaCreatures from '../../services/parseSeaCreatures';
import parseFishes from '../../services/parseFishes';
import parseBugs from '../../services/parseBugs';

const fetchDataThunk = createAsyncThunk(
  'villagers/fetchData',
  async (_, { dispatch, getState }) => {
    const { villagers, seaCreatures, fishes, bugs } = getState();

    if (villagers.data.length < 1) {
      fetch('https://acnhapi.com/v1/villagers')
        .then(response => response.json())
        .then(data => dispatch(setVillagers(parseVillagers(data))));
    }

    if (seaCreatures.data.length < 1) {
      fetch('https://acnhapi.com/v1/sea')
        .then(response => response.json())
        .then(data => dispatch(setSeaCreatures(parseSeaCreatures(data))));
    }

    if (fishes.data.length < 1) {
      fetch('https://acnhapi.com/v1/fish')
        .then(response => response.json())
        .then(data => dispatch(setFishes(parseFishes(data))));
    }

    if (bugs.data.length < 1) {
      fetch('https://acnhapi.com/v1/bugs')
        .then(response => response.json())
        .then(data => dispatch(setBugs(parseBugs(data))));
    }
  }
);

export default fetchDataThunk;
