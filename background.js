//let chrome.storage.local = chrome.storage.local
chrome.browserAction.onClicked.addListener(function(tab) {
   //let chrome.storage.local = chrome.storage.local
   chrome.tabs.executeScript(null, {file: "deltamath.js"});
});