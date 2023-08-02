Bot Battlr This is a React app that allows you to collect and manage your army of robots.

Features View a collection of bots Add bots to your army Remove bots from your army View details about each bot, including name, type, health, damage, armor, catchphrase, and avatar image.

Instructions. npm install Start the app: npm start Open the app in your browser at http://localhost:8001

API The app uses a JSON server as its backend. The server provides the following endpoints:

GET /bots: returns a list of all bots GET /bots/id returns a single bot with the given ID POST /bots: adds a new bot to the collection PUT /bots/id updates the bot with the given ID DELETE /bots/id deletes the bot with the given ID

Technologies Used

React JSON Server Semantic UI HTML CSS Javascript

written by: Nigel Bahati