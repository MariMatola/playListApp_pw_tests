import { test } from '@playwright/test';
import { MainPage } from '../src/pages/MainPage';
require ('dotenv').config();

test('The correct total playlist tracks duration is displayed after adding the tracks to the playlist', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();


  // add tracks to the playlist
  await mainPage.clickPlusButton(process.env.SummerBreatheTrack);
  await mainPage.clickPlusButton(process.env.AutumnLeavesTrack);
  await mainPage.clickPlusButton(process.env.WinterWindsTrack);
  await mainPage.assertPlaylistDurationIsVisible();
  await mainPage.assertCorrectPlaylistDuration(
    process.env.SummerBreatheTrack, 
    process.env.AutumnLeavesTrack, 
    process.env.WinterWindsTrack,
  );
  
});

