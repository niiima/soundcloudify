# Soundcloudify

Welcome to our project! This is a React app that generates a playable list of your SoundCloud likes. To get started, make sure you have Node.js installed on your system and follow the step-by-step instructions. Enjoy listening to your favorite SoundCloud tracks with our app!

## Requirements

You need to have Node.js installed. If you don't have Node, just make sure you download it for your system from the Node.js [downloads page](https://nodejs.dev/download/)

## Manual

1. Install Node.js on your system if you haven't already. You can download it from the official Node.js [downloads page](https://nodejs.dev/download/).

2. Clone or download the project from the repository.

3. Open a terminal or command prompt and navigate to the project directory.

4. Run the command `npm install` to install all the required dependencies.

5. Copy the markup of your SoundCloud likes playlist from the [page that shows your likes on SoundCloud](https://soundcloud.com/you/likes).

6. Paste the copied markup into the `index.html` file located in the `public` directory of the project.

7. Run the command `npm start` to start the React app.

8. Open a web browser and navigate to `http://localhost:3000` to view the app.

9. The app should display a playable list of your SoundCloud likes.

That's it! You can now enjoy listening to your favorite SoundCloud tracks using this app.

> Please note that this project uses the Cheerio library to parse the markup of your SoundCloud likes playlist. Cheerio is a fast and flexible library for parsing HTML and XML documents, and it is used here to extract the necessary data from your playlist. If you are not familiar with Cheerio, you can learn more about it on the official website at https://cheerio.js.org/. However, you do not need to install or use Cheerio separately, as it is already included as a dependency in this project.
