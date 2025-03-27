const { expect } = require('@playwright/test');

export class MainPage {
  constructor(page) {
    this.page = page; 
    this.searchField = page.getByTestId(':r0:');
    this.trackList = page.getByTestId('tracklist');
    this.foundTrack = this.trackList.locator('div').first();
    this.tracklisItem = this.trackList.locator('div.MuiGrid-root.MuiGrid-container.css-adtkzx');
    this.playList = page.getByTestId('playlist'); 
    this.playListItem = this.playList.locator('div.MuiGrid-root.MuiGrid-container.css-adtkzx'); 
    this.playlistDuration = page.getByTestId('playlist-duration');
  }

  async open() {
    await this.page.goto('/'); //Base URL is set in the playwright.config.js
  }

  async fillInTheSearchField(trackName) {
    await this.searchField.fill(trackName);
  }

  async clickPlusButton(trackName) {
    const specificTrackListItem = this.tracklisItem.filter({ hasText: new RegExp(trackName) });
    const plusButtonLocator = specificTrackListItem.locator('button', { hasText: '+' });

    await plusButtonLocator.click();
  }

  async assertTrackIsVisibleInPlaylist(trackName) {
    const specificPlayListItem = this.playListItem.filter({ hasText: new RegExp(trackName) });

    await expect(specificPlayListItem).toBeVisible();
  }

  async assertSearchFieldIsVisible() {
    await expect(this.searchField).toBeVisible();
  }

  async assertCorrecFoundTrack(trackName) {
    await expect(this.foundTrack).toContainText(trackName);
  }

  async assertNoRedundantTracksAreInTheTracklist() {
    const itemsCount = await this.tracklisItem.count();
    await expect(itemsCount).toBe(1);
  }
  
  async assertPlaylistDurationIsVisible() {
    await expect(this.playlistDuration).toBeVisible();
  }

  async assertCorrectPlaylistDuration (...tracknames) {
    const timeArray = await Promise.all(tracknames.map(async (trackName) => {
      return await this.playListItem
        .filter({ hasText: new RegExp(trackName) })
        .locator('p.MuiTypography-root.MuiTypography-body1.css-3ffyn9').nth(1)
        .textContent();
    }));

    const totalTime = await sumTimeInSeconds(timeArray);
    
    const playListValue = await this.playlistDuration.textContent();
    await expect(playListValue).toEqual(totalTime);
  }

}

function sumTimeInSeconds(times) {
  let totalMinutes = 0;
  let totalSeconds = 0;

  times.forEach(time => {
    const [minutes, seconds] = time.split(':').map(Number); 
    totalMinutes += minutes;
    totalSeconds += seconds;
  });

  totalSeconds += totalMinutes*60;

  return `${totalSeconds}`;
}
