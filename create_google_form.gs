/**
 * adsgraphy.com — Google Form Automated Generator
 * 
 * INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Click "New project"
 * 3. Paste this entire code into Editor (Code.gs)
 * 4. Click "Save" (Ctrl+S) and then click "Run" at the top
 * 5. View the Execution Log at the bottom to get your Form Share Link and Embed Code!
 */

function createAdsgraphyOfferForm() {
  var form = FormApp.create('adsgraphy.com — Make an Offer');
  
  form.setDescription('Submit your offer for the acquisition of the premium domain name adsgraphy.com.');
  form.setConfirmationMessage("Thanks — I'll reach out on your preferred channel within 24 hours.");
  
  // 1. Full Name
  form.addTextItem().setTitle('Full Name').setRequired(true);

  // 2. Email Address
  var emailItem = form.addTextItem().setTitle('Email Address').setRequired(true);
  var emailValidation = FormApp.createTextValidation().requireTextIsEmail().setHelpText('Please enter a valid email address.').build();
  emailItem.setValidation(emailValidation);

  // 3. Phone Number
  form.addTextItem().setTitle('Phone Number').setRequired(true);

  // 4. Country
  form.addTextItem().setTitle('Country').setRequired(true);

  // 5. Preferred messaging channel
  form.addMultipleChoiceItem()
      .setTitle('Preferred messaging channel')
      .setChoiceValues(['WhatsApp', 'Telegram', 'Signal', 'WeChat', 'iMessage', 'Other'])
      .setRequired(true);

  // 6. Your ID/handle on that channel
  form.addTextItem()
      .setTitle('Your ID/handle on that channel')
      .setHelpText('e.g. your WhatsApp number, Telegram @username, etc.')
      .setRequired(true);

  // 7. Your offer amount (USD)
  var offerItem = form.addTextItem().setTitle('Your offer amount (USD)').setRequired(true);
  var offerValidation = FormApp.createTextValidation().requireNumberGreaterThan(0).setHelpText('Please enter a valid numeric offer amount in USD.').build();
  offerItem.setValidation(offerValidation);

  // 8. Intended use for the domain
  form.addParagraphTextItem().setTitle('Intended use for the domain').setRequired(false);

  var publishedUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();
  var embedCode = '<iframe src="' + publishedUrl + '?embedded=true" width="100%" height="950" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';

  Logger.log('Shareable Form Link: ' + publishedUrl);
  Logger.log('Form Edit Link: ' + editUrl);
  Logger.log('Embed HTML Code:\n' + embedCode);
}
