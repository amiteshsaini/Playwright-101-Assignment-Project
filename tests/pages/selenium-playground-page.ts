import { Page } from '@playwright/test';

export abstract class SeleniumPlaygroundPage {
  constructor(protected readonly page: Page) {}

  protected async goto(path: string): Promise<void> {
    await this.page.goto(`https://www.testmuai.com${path}`, {
      waitUntil: 'domcontentloaded',
    });
  }
}
