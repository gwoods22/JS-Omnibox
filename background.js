
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    // suggest([
    //   {content: "console.log(", description: "log"},
    //   {content: "alert(", description: "alert"}
    // ]);
  });

chrome.omnibox.onInputEntered.addListener(
  function(text) {
    chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
      chrome.tabs.executeScript(null, {code: text});
    });
  });
