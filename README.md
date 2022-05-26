# Requirements

You need to have Node.js installed. If you don't have Node, just make sure you download it for your system from the Node.js [downloads page](https://nodejs.dev/download/)

## Manual

We use [cheerio](https://cheerio.js.org/) to simply parses markup of the local version of your playlist that has been copied from the [page that shows your likes on soundcloud](https://soundcloud.com/you/likes) and export the manipulated results into a data structure. we then save it into src directory of an react app to use it as source data and generate playable list of our songs.
