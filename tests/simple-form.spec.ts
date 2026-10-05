import { expect } from './fixtures/fixture';
import { SimpleFormPage } from './pages/simple-form-page';
import { simpleFormData } from './test-data/form-data';
import { test } from './fixtures/fixture';

test.describe('Selenium Playground', () => {
  test.fixme('Simple Form Demo should display the custom message', async ({
    page,
  }) => {
    const simpleFormPage = new SimpleFormPage(page);

    await simpleFormPage.open();
    await simpleFormPage.submitMessage(simpleFormData.message);
    await simpleFormPage.expectMessageShown(simpleFormData.message);
    await expect(page).toHaveURL(/simple-form-demo/);
  });
});
