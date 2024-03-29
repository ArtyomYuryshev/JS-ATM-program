const { Then } = require('@wdio/cucumber-framework');
const { page } = require('../po');
const compareText = require('./utils/compare-text');

Then('Page title should {string} {string}', async function (shouldBeParam, titleText) {
  const pageTitle = await browser.getTitle();
  return compareText(pageTitle, titleText, shouldBeParam);
});

Then(/^modal window should( not)? be displayed$/, async param => {
  let assert = expect(page('doctors').addDoctorModal.rootEl);
  if (param) {
    assert = assert.not;
  }
  return assert.toBeDisplayed();
});

// Then(/^Page title should "(:not )? (conatin|be equal to)" "(.*)"$/, function(notArg, shouldBeParam, titleText) {
//   const compareParameter = `${notArg}${shouldBeParam}`;
//   const pageTitle = await browser.getTitle();
//   return compareText(pageTitle, titleText, shouldBeParam, compareParameter);
// });

Then('{int} card name should {string} {string}', async function (id, shouldBeParam, cardName) {
  const docName = await page('doctors').specialistCard(id).name.getText();
  return compareText(docName, cardName, shouldBeParam);
});

Then('should open page with name of doctor {string} {string}', async function (shouldBeParam, expectedName) {
  const actualName = await page('doctors').doctorDetails.docName.getText();
  return compareText(actualName, expectedName, shouldBeParam);
});
