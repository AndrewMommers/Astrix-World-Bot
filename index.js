require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client

console.log('Authenticating Token!');
client.login (process.env.BOT_TOKEN);
    console.log(process.env.BOT_TOKEN);
console.log('Token has been accepted!');

console.log('Bot is now Starting!');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        activity: {
            name: "Gathering Data...",
            type: "WATCHING"
        },
        status: "idle"
    });
});

require('./minecraft-status.js')(client);
