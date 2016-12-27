const Discord = require('discord.js'),
    bot = new Discord.Client({
        fetch_all_members: true
    });


const settings = require('./package.json')
var opusscript = require("opusscript");
const yt = require('ytdl-core');
let arrays = require('./array.js');
let cmdhandler = require('./cmdhandler.js');
var Cleverbot = require('cleverbot-node');
//var weather = require('weather-js');
const winston = require('winston');
winston.add(winston.transports.File, {
    filename: 'logs/b-bot.log'
});
winston.remove(winston.transports.Console);
//literally everything above here is just a massive block of what the bot requires. if not all of this is here the bot won't come on at all
var log = (message) => {
    bot.channels.get('229594318665547776').sendMessage(message).catch(error => console.log(error.stack));
};// this is the variable that tells the bot what text channel in discord to log to



bot.on('ready', () => {
    log(`Ready to serve ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
});

bot.on('message', msg => {


    if (!msg.content.startsWith(settings.prefix)) return;

    let cmdTxt = msg.content.split(' ')[0].replace(settings.prefix, '').toLowerCase(),
        args = msg.content.replace(/ {2,}/g, ' ').split(' ').slice(1);

    let cmd;
    if (cmdhandler.commands.hasOwnProperty(cmdTxt)) {
        cmd = cmdhandler.commands[cmdTxt];
    }

    else if (cmdhandler.aliases.hasOwnProperty(cmdTxt)) {
        cmd = cmdhandler.commands[cmdhandler.aliases[cmdTxt]];
    }

    if (cmd) {
        if (cmd.hasOwnProperty('permissions')) {
            let missingPerms = [];
            cmd.permissions.forEach(val => {
                if (!msg.channel.permissionsFor(bot.user).hasPermission(val)) {
                    missingPerms.push(cmdhandler.toTitleCase(val.replace('_', ' ')));
                }
            });
            if (missingPerms.length > 0) {
				/*

					Changed the below sendMessages to use template literals, it's
					more readable now

				*/
                msg.channel.sendMessage(`That command cannot be run without the following Missing Permissions: **${missingPerms}**`);
                return;
            }
        }
        try {
            cmd.execute(bot, msg, args);
        } catch (e) {
            log(e);
            msg.channel.sendMessage(`command ${cmdTxt} failed :(\n ${e.stack}`);
        }
    }
});

// Uncomment the line below if you're using 2FA.
var token = /((?:mfa.[\w-]+))/g;

// Uncomment the line below if you're not using 2FA
var token = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
//i have both of these uncommented as it was not working otherwise, quite oddly
// Catch discord.js errors
bot.on('error', e => {
    winston.error(e.replace(token, '[Redacted]'));
    console.log(e.replace(token, '[Redacted]'));
});
bot.on('warn', e => {
    winston.warn(e.replace(token, '[Redacted]'));
    console.log(e.replace(token, '[Redacted]'));
});
bot.on('debug', e => {
    winston.info(e.replace(token, '[Redacted]'));
    console.log(e.replace(token, '[Redacted]'));
});

bot.login(settings.BalthazarToken);