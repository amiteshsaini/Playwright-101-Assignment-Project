import { expect, Locator, Page } from '@playwright/test';
import { SeleniumPlaygroundPage } from './selenium-playground-page';

export type InputFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  message: string;
};

export class InputFormPage extends SeleniumPlaygroundPage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipInput: Locator;
  readonly countrySelect: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly validationMessage: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.getByLabel(/first name/i);
    this.lastNameInput = page.getByLabel(/last name/i);
    this.emailInput = page.getByLabel(/email/i);
    this.phoneInput = page.getByLabel(/phone/i);
    this.addressInput = page.getByLabel(/address/i);
    this.cityInput = page.getByLabel(/city/i);
    this.stateInput = page.getByLabel(/state/i);
    this.zipInput = page.getByLabel(/zip|postal/i);
    this.countrySelect = page.locator('select');
    this.messageInput = page.getByLabel(/message|comments|description/i);
    this.submitButton = page.getByRole('button', { name: /submit/i });
    this.validationMessage = page.getByText(/please fill in the fields/i);
    this.successMessage = page.getByText(/thanks|thank you|success|submitted/i);
  }

  async open(): Promise<void> {
    const candidates = [
      '/selenium-playground/input-form-demo/',
      '/selenium-playground/input-form-submit/',
      '/selenium-playground/input-form-submit-demo/',
      '/selenium-playground/input-form/',
    ];

    for (const path of candidates) {
      const response = await this.page.goto(`https://www.testmuai.com${path}`, {
        waitUntil: 'domcontentloaded',
        timeout: 15000,
      });

      if (response && response.status() !== 404) {
        return;
      }
    }

    throw new Error(
      'Input form demo page is not available on the current TestMu AI site.',
    );
  }

  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  async fillRequiredFields(data: InputFormData): Promise<void> {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.phoneInput.fill(data.phone);
    await this.addressInput.fill(data.address);
    await this.cityInput.fill(data.city);
    await this.stateInput.fill(data.state);
    await this.zipInput.fill(data.zip);
    await this.countrySelect.selectOption({ label: data.country });
    await this.messageInput.fill(data.message);
  }

  async expectValidationMessage(): Promise<void> {
    await expect(this.validationMessage).toBeVisible();
  }

  async expectFormSuccess(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
  }
}
