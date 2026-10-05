# Playwright 101 Assignment Project

This project demonstrates a TypeScript-based Page Object Model for the TestMu AI Selenium playground.

## Included scenarios
- Simple form demo
- Drag-and-drop slider demo
- Input form validation and success states

## Project structure
- tests/pages/
- tests/test-data/
- tests/fixtures/
- tests/simple-form.spec.ts
- tests/drag-drop-slider.spec.ts
- tests/input-form.spec.ts

## Locator strategies used
- getByPlaceholder
- getByLabel
- getByRole
- locator(...)

## Usage
1. Install dependencies with `npm install`
2. Run the suite with `npx playwright test`
3. Open the HTML report with `npx playwright show-report`

## Notes
The selectors are aligned to the live TestMu AI Selenium playground and its current public routes. The input form route is currently unstable in the live site, so it should be revalidated against the host before final execution if the path changes again.
