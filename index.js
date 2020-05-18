const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const PREFIX = "/";

clientDiscord.on('ready', function () {
  console.log("Je suis prêt à être utilisé. !")
  clientDiscord.user.setActivity('https://discord.gg/j98HThB').catch(console.error)
});

clientDiscord.on("message", message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "/enchere1") {
            //message.reply("votre enchère a été mise en ligne");
            message.reply("Votre enchère a été mise en ligne!");
            clientDiscord.channels.cache.get("712047398339215370").send("Enchère de l'utilisateur: " + message.author.username);
        }
    }
});









// Connexion
clientDiscord.login('');
