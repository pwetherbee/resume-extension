document.addEventListener("DOMContentLoaded", function () {
  var grabTextButton = document.getElementById("grabTextButton");
  grabTextButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: function () {
          console.log(document.getElementById("job-details").textContent);
        },
      });
    });
  });
});
