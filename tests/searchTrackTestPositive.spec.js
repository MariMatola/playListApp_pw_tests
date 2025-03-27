import { test } from '@playwright/test';
import { MainPage } from '../src/MainPage';

test('The user is able to find correct track using the search field', async ({ page }) => {
  const mainPage = new MainPage(page);

  const SummerBreatheTrach = 'Summer Breeze';
  const autumnLeavesTrack = 'Autumn Leaves';
  const winterWindsTrack = 'Winter Winds';
  const springDanceTrack = 'Spring Dance';
  const rainyMoodTrack = 'Rainy Mood';

  await mainPage.open();

  await mainPage.assertSearchFieldIsVisible();
  
  //Summer Breeze search
  await mainPage.fillInTheSearchField(SummerBreatheTrach);
  await mainPage.assertCorrecFoundTrack(SummerBreatheTrach);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();

  // Autumn Leaves search
  await mainPage.fillInTheSearchField(autumnLeavesTrack);
  await mainPage.assertCorrecFoundTrack(autumnLeavesTrack);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();

  // Winter Winds search
  await mainPage.fillInTheSearchField(winterWindsTrack);
  await mainPage.assertCorrecFoundTrack(winterWindsTrack);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();
 
  // Spring Dance search
  await mainPage.fillInTheSearchField(springDanceTrack);
  await mainPage.assertCorrecFoundTrack(springDanceTrack);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();
  
  // Rainy Mood search
  await mainPage.fillInTheSearchField(rainyMoodTrack);
  await mainPage.assertCorrecFoundTrack(rainyMoodTrack);
  await mainPage.assertNoRedundantTracksAreInTheTracklist();
});