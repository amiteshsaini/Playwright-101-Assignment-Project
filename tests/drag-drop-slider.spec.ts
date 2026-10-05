import { expect } from './fixtures/fixture';
import { DragDropSliderPage } from './pages/drag-drop-slider-page';
import { sliderData } from './test-data/form-data';
import { test } from './fixtures/fixture';

test.describe('Selenium Playground', () => {
  test('Drag and Drop Sliders should update the displayed value to 95', async ({ page }) => {
    const sliderPage = new DragDropSliderPage(page);

    await sliderPage.open();
    const initialValue = await sliderPage.getSliderValue();
    expect(initialValue).toBe(sliderData.defaultValue);

    await sliderPage.dragSliderTo(sliderData.targetValue);
    await sliderPage.expectValue(sliderData.targetValue);
    await expect(page).toHaveURL(/drag-drop-range-sliders-demo/);
  });
});
