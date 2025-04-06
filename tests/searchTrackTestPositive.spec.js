import { test } from '@playwright/test';
import { MainPage } from '../src/pages/MainPage';
require ('dotenv').config();

test('The user is able to find correct track using the search field', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.open();

  await mainPage.assertSearchFieldIsVisible();
  
  //Summer Breeze search
  await mainPage.fillInTheSearchField(process.env.SummerBreatheTrack);
  await mainPage.assertCorrecFoundTrack(process.env.SummerBreatheTrack);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();

  // Autumn Leaves search
  await mainPage.fillInTheSearchField(process.env.AutumnLeavesTrack);
  await mainPage.assertCorrecFoundTrack(process.env.AutumnLeavesTrack);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();

  // Winter Winds search
  await mainPage.fillInTheSearchField(process.env.WinterWindsTrack);
  await mainPage.assertCorrecFoundTrack(process.env.WinterWindsTrack);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();
 
  // Spring Dance search
  await mainPage.fillInTheSearchField(process.env.SpringDanceTrack);
  await mainPage.assertCorrecFoundTrack(process.env.SpringDanceTrack);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();
  
  // Rainy Mood search
  await mainPage.fillInTheSearchField(process.env.RainyMoodTrack);
  await mainPage.assertCorrecFoundTrack(process.env.RainyMoodTrack);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();
});