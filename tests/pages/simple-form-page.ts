import { expect, Locator, Page } from '@playwright/test';
import { SeleniumPlaygroundPage } from './selenium-playground-page';

export class SimpleFormPage extends SeleniumPlaygroundPage {
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly outputValue: Locator;

  constructor(page: Page) {
    super(page);
    this.messageInput = page
      .getByPlaceholder('Please enter your Message')
      .first();
    this.submitButton = page
      .getByRole('button', { name: 'Get Checked Value' })
      .first();
    this.outputValue = page
      .getByText('Your Message:')
      .locator('xpath=following-sibling::p[1]');
  }

  async open(): Promise<void> {
    await this.goto('/selenium-playground/simple-form-demo/');
  }

  async enterMessage(value: string): Promise<void> {
    await this.messageInput.fill(value);
  }

  async clickGetCheckedValue(): Promise<void> {
    await this.submitButton.click();
  }

  async submitMessage(value: string): Promise<void> {
    await this.enterMessage(value);
    await this.clickGetCheckedValue();
  }

  async expectMessageShown(expectedMessage: string): Promise<void> {
    await expect(this.outputValue).toContainText(expectedMessage);
  }
}
