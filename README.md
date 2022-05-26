# Requirements

You need to have Node.js installed. If you don't have Node, just make sure you download it for your system from the Node.js [https://nodejs.dev/download/](downloads page)

## Manual

We use [https://cheerio.js.org/](cheerio) to simply parses markup of the local version of your playlist that has been copied from the [https://soundcloud.com/you/likes](page that shows your likes on soundcloud) and export the manipulated results into a data structure. we then save it into src directory of an react app to use it as source data and generate playable list of our songs.
