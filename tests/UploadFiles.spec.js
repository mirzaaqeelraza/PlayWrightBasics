const{test, expect} = require('@playwright/test')

const path = require('path');

test('Upload Single File', async ({ page }) => {

  // Navigate to the test site
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Wait for the file input to be available
  await page.waitForSelector('#singleFileInput');

  // Define the absolute path to the file
  const filePath = path.resolve('tests/UploadFiles/file1.pdf');

  // Set the file to the input element
  await page.setInputFiles('#singleFileInput', filePath);

  // Click the upload button
  await page.click('//button[normalize-space()="Upload Single File"]');

  // Wait for upload status and get the message
  const status = await page.locator('#singleFileStatus').textContent();
  console.log('Upload Status:', status);
 // await expect(status.includes()).toBeTruthy()

  await page.waitForTimeout(5000);
});


test.only('Upload Multiple Files', async ({ page }) => {
  // Navigate to the test site
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Wait for the file input
  await page.waitForSelector('#multipleFilesInput');

  // Resolve each file path individually
  const filePath1 = path.resolve('tests/UploadFiles/file1.pdf');
  const filePath2 = path.resolve('tests/UploadFiles/file2.pdf');

  // Upload both files
  await page.setInputFiles('#multipleFilesInput', [filePath1, filePath2]);

  // Click the upload button
  await page.click('//button[normalize-space()="Upload Multiple Files"]');

  // Get the upload status
  const status = await page.locator('#multipleFilesStatus').textContent();
  console.log('Upload Status:', status);

  await page.waitForTimeout(5000);
});