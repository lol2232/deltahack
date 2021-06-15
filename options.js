// Saves options to chrome.storage
chrome.runtime.onInstalled.addListener(function(details) {
  if(details.reason == "install") {
    chrome.storage.local.set({
      testmode: 'off'
    })
    // This code runs once
  }
});



function save_options() {
  var color = document.getElementById('color').value;
  chrome.storage.local.set({
    testmode: color,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get({
    testmode: 'off',
  }, function(items) {
    document.getElementById('color').value = items.testmode;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);