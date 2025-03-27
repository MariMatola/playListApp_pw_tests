import { MainPage } from '../src/MainPage';

async function getSonglist(page) {
  const mainPage = new MainPage(page);
  await mainPage.open();
  const SongList = await mainPage.getSongNamesList();
  
  return SongList;
}

function randomInteger(max, min) {
  return Math.floor(min + Math.random()*(max + 1 - min));
}

async function selectSongs(page, amount) {
  const resultArray = [];
  const SongList = await getSonglist(page);
  const lastIndexOfSongList = SongList.length - 1;
  

  while (resultArray.length < amount) {
  
    const randomIndex = randomInteger(0, lastIndexOfSongList);
    const newItem = SongList[randomIndex]; 

    if (resultArray.includes(newItem)) {
      continue;
    }
    resultArray.push(newItem);
  }

  if (amount === 1) {
    return resultArray[0];
  }

  return resultArray;
}

module.exports = { selectSongs };


