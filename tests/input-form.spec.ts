import { test } from './fixtures/fixture';
import { InputFormPage } from './pages/input-form-page';
import { inputFormData } from './test-data/form-data';

test.describe('Selenium Playground', () => {
  test.fixme('Input Form Submit should show validation and success states', async ({
    page,
  }) => {
    const formPage = new InputFormPage(page);

    await formPage.open();
    await formPage.clickSubmit();
    await formPage.expectValidationMessage();

    await formPage.fillRequiredFields(inputFormData);
    await formPage.clickSubmit();
    await formPage.expectFormSuccess();
  });
});
