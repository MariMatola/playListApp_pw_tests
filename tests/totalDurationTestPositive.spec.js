import { test } from '@playwright/test';
import { MainPage } from '../src/MainPage';

test('The correct total playlist tracks duration is displayed after adding the tracks to the playlist', async ({ page }) => {
  const mainPage = new MainPage(page);
  const summerBreatheTrach = 'Summer Breeze';
  const autumnLeavesTrack = 'Autumn Leaves';
  const winterWindsTrack = 'Winter Winds';

  await mainPage.open();


  // add tracks to the playlist
  await mainPage.clickPlusButton(summerBreatheTrach);
  await mainPage.clickPlusButton(autumnLeavesTrack);
  await mainPage.clickPlusButton(winterWindsTrack);
  await mainPage.assertPlaylistDurationIsVisible();
  await mainPage.assertCorrectPlaylistDuration(summerBreatheTrach, autumnLeavesTrack, winterWindsTrack);
  
});

