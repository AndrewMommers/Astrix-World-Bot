module.exports = function (client) {

    const Gamedig = require('gamedig');

function refresh() {
    Gamedig.query({
        type: 'minecraft',
        host: '51.161.131.154',
        port: 25565
    }).then((body) => {
        if (body.raw.vanilla.raw.players.online > 0) {
            client.user.setPresence({
                activity: {
                    name: `${body.raw.vanilla.raw.players.online} / ${body.raw.vanilla.raw.players.max} Players`,
                    type: "WATCHING",
                    url: "https://www.horizons.gg"
                },
                status: "online"
            });
        }
        else {
            client.user.setPresence({
                activity: {
                    name: `No Players Online`,
                    type: "WATCHING",
                    url: "https://www.horizons.gg"
                },
                status: "idle"
            });
        }
    }).catch((error) => {
        client.user.setPresence({
            activity: {
                name: "Server Offline",
                type: "WATCHING",
                url: "https://www.horizons.gg"
            },
            status: "dnd"
        });
    });

    setTimeout(refresh, 1000 * 10)
}
refresh()

}