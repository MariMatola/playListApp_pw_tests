# playListApp_pw_tests

This project implements test coverage for the Playlist App functionality using Playwright. 

# Tech Stack:

- **Testing Framework:** Playwright
- **Language:** JavaScript
- **Test Coverage:** Functional UI testing for the app’s core features

# Implemented Test Case:

1. **Search Functionality:**
    - Test the search input field for filtering the available tracks.
    - Ensure that when a user types a track name in the search box, only matching tracks are displayed.
2. **Add Track Using "+" Button:**
    - Test the ability to add a single track using the "+" button for a given track.
    - Ensure that clicking the "+" button next to a track adds it to the “Your Playlist” list
3. **Verify Total Duration of the Playlist in Seconds:**
    - Test that the total duration of all tracks in "Your Playlist" is accurately calculated and displayed in seconds.
    - Manually calculate the expected total duration by summing the durations of added tracks (in the format `"mm:ss"`) and verify that this matches the displayed total duration in the UI.


# How to run the tests

## Install project
```bash
npm i
npx playwright install
```
 ## Run tests in UI mode
```bash
npx playwright test --ui
```
 ## Run tests in debug mode
```bash
npx playwright test --debug
```
 ## Run tests in headless mode
```bash
npx playwright test
```
 ## Generate report for headless run
```bash
npx playwright show-report
```
