import { test } from '@playwright/test';
import { MainPage } from '../src/MainPage';
import { selectSongs, randomInteger } from '../helpers/selectSongFunction'

test('The user is able to find correct track using the search field', async ({ page }) => {
  const mainPage = new MainPage(page);
  // select one random song
  // define random song name
  const randomTrack = await selectSongs(page, 1);
  
  await mainPage.open();

  await mainPage.clickPlusButton(randomTrack);
  await mainPage.assertTrackIsVisibleInPlaylist(randomTrack);

});

