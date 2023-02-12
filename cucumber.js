const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, When, Then }) => {
  Given('I am on the homepage', () => {
    // ...
  });

  When('I click on the link', () => {
    // ...
  });

  Then('I should be taken to the about page', () => {
    // ...
  });
});
