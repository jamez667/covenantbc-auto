class DonationPage {
  get errorContainer() {
    return $('.errorMessageContainer');
  }
  get errorMessage() {
    return $('.page-error .field-error-text');
  }

  get donationLevels() {
    return $('.donation-levels');
  }
  get donationLevel() {
    return $$('.donation-levels .donation-level-input-container');
  }
  get donationLevelInput() {
    return $$('.donation-levels .donation-level-input-container input');
  }
  get donationLevelUser() {
    return $('.donation-levels .donation-level-user-entered input');
  }

  get billingTitle() {
    return $('#billing_title');
  }
  get billingOptions() {
    return $$('#billing_title option');
  }

  get firstName() {
    return $('#billing_first_namename');
  }
  get middleName() {
    return $('#billing_middle_namename');
  }
  get lastName() {
    return $('#billing_last_namename');
  }

  get address1() {
    return $('#billing_addr_street1name');
  }
  get address2() {
    return $('#billing_addr_street2name');
  }
  get cityName() {
    return $('#billing_addr_cityname');
  }
  get provinceName() {
    return $('#billing_addr_state');
  }
  get provinceOptions() {
    return $$('#billing_addr_state option');
  }
  get postalCode() {
    return $('#billing_addr_zipname');
  }
  get countryName() {
    return $('#billing_addr_country');
  }
  get countryOptions() {
    return $$('#billing_addr_country option');
  }

  get phoneNumber() {
    return $('#donor_phonename');
  }
  get emailAddress() {
    return $('#donor_email_addressname');
  }
  get emailUpdates() {
    return $('#donor_email_opt_inname');
  }

  get ccNumber() {
    return $('#responsive_payment_typecc_numbername');
  }
  get expiryMonth() {
    return $('#responsive_payment_typecc_exp_date_MONTH');
  }
  get expiryMonthOptions() {
    return $$('#responsive_payment_typecc_exp_date_MONTH option');
  }
  get expiryYear() {
    return $('#responsive_payment_typecc_exp_date_YEAR');
  }
  get expiryYearOptions() {
    return $$('#responsive_payment_typecc_exp_date_YEAR option');
  }
  get cvvNumber() {
    return $('#responsive_payment_typecc_cvvname');
  }

  get donateSubmit() {
    return $('#pstep_finish');
  }

  get firstNameError() {
    return $('#billing_first_name_row .field-error-text');
  }
  get lastNameError() {
    return $('#billing_last_name_row .field-error-text');
  }
  get address1Error() {
    return $('#billing_addr_street1_row .field-error-text');
  }
  get cityError() {
    return $('#billing_addr_city_row .field-error-text');
  }
  get provinceError() {
    return $('#billing_addr_state_row .field-error-text');
  }
  get postalError() {
    return $('#billing_addr_zip_row .field-error-text');
  }
  get countryError() {
    return $('#billing_addr_country_row .field-error-text');
  }
  get emailError() {
    return $('#donor_email_address_row .field-error-text');
  }
  get ccError() {
    return $('#responsive_payment_typecc_number_row .field-error-text');
  }
  get expiryError() {
    return $('#responsive_payment_typecc_exp_date_row .field-error-text');
  }
  get cvvError() {
    return $('#responsive_payment_typecc_cvv_row .field-error-text');
  }

  open() {
    browser.url(
      'https://secure3.convio.net/chb/site/Donation2?df_id=1940&1940.donation=form1&mfc_pref=T&_ga=2.183122735.809532372.1570638170-394204664.1570486359',
    );
  }
}

module.exports = new DonationPage();
