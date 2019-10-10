const expect = require('chai').expect;
const Homepage = require('../pageObjects/homepage');

describe('Get Help Button on Homepage', () => {
  it('should go to Get Help page', () => {
    Homepage.open();
    Homepage.getHelpButton.click();

    const getHelpTitle = $('.internal-breadcrumb-header h2');
    getHelpTitle.waitForDisplayed();

    expect(getHelpTitle.getText()).to.equal('Get Help');
  });

  it('should contain essential contact information', () => {
    const firstParagraph = $('.main-container p');
    expect(firstParagraph.getText()).to.include('604-685-7474');
    expect(firstParagraph.getText()).to.include('1-877-685-7474');
    expect(firstParagraph.getText()).to.include('1302 Seymour Street');
  });
});
