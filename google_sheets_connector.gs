/**
 * adsgraphy.com — Google Sheets Live Offer Connector
 * 
 * INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.new) and name it "adsgraphy.com Offers".
 * 2. Click Extensions > Apps Script and paste this code.
 * 3. Deploy > New Deployment > Web App (Set "Execute as": Me, "Who has access": Anyone).
 * 4. Copy Web App URL and paste into index.html at GOOGLE_WEB_APP_URL.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", 
        "Full Name", 
        "Email Address", 
        "Phone Number", 
        "Country", 
        "Preferred Channel", 
        "Channel ID / Handle", 
        "Offer Amount (USD)", 
        "Intended Use"
      ]);
      sheet.getRange("A1:I1").setFontWeight("bold").setBackground("#3b82f6").setFontColor("#ffffff");
    }

    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }

    sheet.appendRow([
      new Date(),
      data.full_name || "",
      data.email || "",
      data.phone || "",
      data.country || "",
      data.channel || "",
      data.channel_handle || "",
      data.offer_amount || "",
      data.intended_use || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "message": "Offer recorded for adsgraphy.com!" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("adsgraphy.com Google Sheet Webhook is Live!");
}
