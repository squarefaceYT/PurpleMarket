const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const prefix = ("/");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé. !")
    bot.user.setActivity('https://discord.gg/j98HThB').catch(console.error)
  })


bot.on('message', message => {
    if (message.content === '/prends') {
      message.reply('**a pris votre commande, nous faisons le nécessaire afin que vous soyez livré au plus vite, vous serez ping pour la réception de votre commande , Merci de votre patience**') 
     
      message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);


    }
  })

  bot.on('message', message => {
    if (message.content === '/pret') {
      message.reply('**La transaction sera sur le serveur de votyre choix, la livraison sera de la manière suivante: dans un premier temps vous payé le vendeur et il se tp à vous ou inverse et donne la commande**') 
     
      message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);


    }
  })

  bot.on('message', message => {
    if (message.content === '/fini') {
      message.reply('**Nous vous remercions pour votre achat et à bientôt sur le PurpleMarket Je vous invite a écrire la commande /ticket close dans ce Channel ! Vous pouvez aussi nous laisser un avis dans #『⭐』𝐀𝐯𝐢𝐬**') 

      message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
    
    
    }
})
      

  bot.login(process.env.TOKEN);
