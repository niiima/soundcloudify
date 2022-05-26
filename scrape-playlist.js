const path = require("path");
const fs = require("fs");
const cheerio = require("cheerio");

async function getPlaylist() {
  try {
    const filePath = path.join(__dirname, "./playlist.html");
    const $ = cheerio.load(fs.readFileSync(filePath));
    //console.log($.html());

    const selectors = {
      title: "#content a.sc-link-primary",
      image: "#content div.image__lightOutline",
      address: "#content div.playableTile__artwork",
    };

    let titles = $(selectors.title);
    let images = $(selectors.image);
    let addresses = $(selectors.address);

    const itemsLength = titles.length;
    titlesArray = [];

    // loop trough tiles
    for (i = 0; i < itemsLength; i++) {
      // Get image url from css property of an span
      let FullUrl = $(images[i]).find("span").css("background-image");
      let urlWithQuotation =
        FullUrl !== "undefined" && FullUrl !== undefined
          ? FullUrl.substring(4, FullUrl.length - 1)
          : FullUrl;
      let url =
        urlWithQuotation !== "undefined" && urlWithQuotation !== undefined
          ? urlWithQuotation.replace(/"/g, "") // remove quotation marks from url
          : urlWithQuotation;

      // Get song path on soundcloud server from css property of an span
      let address = $(addresses[i]);
      const adr = $(address).find("a").attr("href");

      titlesArray.push({
        title: $(titles[i]).text().trim(),
        url: url,
        address: adr,
      });
    }

    // Write down songs info into a json file
    fs.writeFile(
      "src/data/playlist.json",
      JSON.stringify(titlesArray, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Successfully written data to file playlists");
      }
    );
  } catch (err) {
    console.error(err);
  }
}
// run main
getPlaylist();
