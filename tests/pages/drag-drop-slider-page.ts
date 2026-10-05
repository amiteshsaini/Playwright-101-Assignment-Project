import { expect, Locator, Page } from '@playwright/test';
import { SeleniumPlaygroundPage } from './selenium-playground-page';

export class DragDropSliderPage extends SeleniumPlaygroundPage {
  readonly slider: Locator;
  readonly inputs: Locator;

  constructor(page: Page) {
    super(page);
    this.inputs = page.locator('input[type="range"]');
    this.slider = this.inputs.nth(2);
  }

  async open(): Promise<void> {
    await this.goto('/selenium-playground/drag-drop-range-sliders-demo/');
  }

  async getSliderValue(): Promise<number> {
    await expect(this.slider).toBeVisible();
    return Number(await this.slider.inputValue());
  }

  async dragSliderTo(targetValue: number): Promise<void> {
    await this.slider.evaluate((element, value) => {
      const input = element as HTMLInputElement;
      input.value = String(value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, targetValue);

    await expect
      .poll(async () => Number(await this.slider.inputValue()))
      .toBe(targetValue);
  }

  async expectValue(expectedValue: number): Promise<void> {
    await expect
      .poll(async () => Number(await this.slider.inputValue()))
      .toBe(expectedValue);
  }
}
