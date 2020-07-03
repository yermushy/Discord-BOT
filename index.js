const Discord = require('discord.js');
const bot = new Discord.Client();
coofe = emoji.get('coffee');

var emoji = require('node-emoji');
var help =
" [+] HELP >>"+"\n"+
"La commande get-windows permet d'avoir une liste d'exploits sur windows"+"\n"+
"La commande get-android permet d'avoir une liste d'exploits sur Android "+"\n"+
"C'est l'heure d'un petit café..."+"\n"+
""+coofe+"\n"+


bot.on('message', (message) => {
    if (message.content == 'help'){
        message.reply(help);

    }
    if (message.content == 'get-windows') {
        message.reply('[+] Windows Exploits from exploit-db: '+'https://www.exploit-db.com/?platform=windows');
    }
    if (message.content == 'get-android') {
        message.reply('[+] Android Exploits from exploit-db: '+'https://www.exploit-db.com/?platform=android');
    } 
    if (message.content == 'bye') {
        message.reply('[+] shuting-down !');
        bot.off
    }
    });

bot.login('token');