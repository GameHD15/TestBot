const Discord = require('discord.js');  
const bot = new Discord.Client();
const PREFIX = '?';
const TOKEN = 'ODc2ODg0NzIzNTAxMjY5MDYy.YRqkiQ.XKLXr5Cs6h-K2Mo2weqEmIWOTHA';

var version = '1.0.1';

bot.on('ready', () => (
    console.log('Der Bot ist nun einsatzbereit')

    bot.user.setActivity('!help' , {type: 'PLAYING'}).catch(console.error)
))

bot.login(TOKEN)