let floatingDiv = document.createElement("div");
floatingDiv.id = "myFloatingDiv";

let scrapeButton = document.createElement("button");
scrapeButton.id = "scrapeButton";
scrapeButton.textContent = "Scrape";
floatingDiv.appendChild(scrapeButton);

document.body.appendChild(floatingDiv);

scrapeButton.addEventListener("click", () => {
  // 進行爬蟲
  if (typeof links == undefined) {
    let links = [...document.getElementsByTagName("a")].map(
      (link) => link.href
    );
  } else {
    links = [...document.getElementsByTagName("a")].map((link) => link.href);
  }
  
  try {
    console.log(typeof links);
    console.log(links);
  } catch (error) {
    console.log(error);
  }
});
