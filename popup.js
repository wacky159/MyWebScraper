document.getElementById("scrapeButton").addEventListener("click", function () {
  chrome.runtime.sendMessage({ action: "scrape" });
});
