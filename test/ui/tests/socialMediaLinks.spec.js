const expect = require('chai').expect;
const Homepage = require('../pageObjects/home.page');

const socialMedias = [
  {
    siteName: 'Facebook',
    selector: '.facebook.icon',
    expectedURL: 'facebook.com/covenanthousebc',
  },
  {
    siteName: 'Twitter',
    selector: '.twitter.icon',
    expectedURL: 'twitter.com/CovenantHouseBC',
  },
  {
    siteName: 'Pinterest',
    selector: '.pinterest.icon',
    expectedURL: 'pinterest.com/covhousebc',
  },
  {
    siteName: 'Youtube',
    selector: '.youtube.icon',
    expectedURL: 'youtube.com/user/michelleclausius',
  },
  {
    siteName: 'Instagram',
    selector: '.instagram.icon',
    expectedURL: 'instagram.com/covenanthousebc',
  },
];

describe('Social Media Links at bottom of page', () => {
  Homepage.open();
  socialMedias.forEach((socialMedia) => {
    it(`should lead to correct ${socialMedia.siteName} media page`, () => {
      const socialMediaLink = $(socialMedia.selector);
      socialMediaLink.waitForDisplayed();
      socialMediaLink.waitForEnabled();
      socialMediaLink.scrollIntoView({ block: 'center' });
      expect(socialMediaLink.getAttribute('href')).to.include(
        socialMedia.expectedURL,
      );
    });
  });
});
