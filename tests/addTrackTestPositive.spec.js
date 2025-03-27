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

  // add Summer Breeze track 
  await mainPage.clickPlusButton(SummerBreatheTrach);
  await mainPage.assertTrackIsVisibleInPlaylist(SummerBreatheTrach);

  // add Autumn Leaves track
  await mainPage.clickPlusButton(autumnLeavesTrack);
  await mainPage.assertTrackIsVisibleInPlaylist(autumnLeavesTrack);
  
  // add Winter Winds track
  await mainPage.clickPlusButton(winterWindsTrack);
  await mainPage.assertTrackIsVisibleInPlaylist(winterWindsTrack);
  
  // add Spring Dance track
  await mainPage.clickPlusButton(springDanceTrack);
  await mainPage.assertTrackIsVisibleInPlaylist(springDanceTrack);
  
  // add Rainy Mood track
  await mainPage.clickPlusButton(rainyMoodTrack);
  await mainPage.assertTrackIsVisibleInPlaylist(rainyMoodTrack);

});

