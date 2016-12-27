const settings = require('./package.json');
const aliases = {}


let arrays = require('./array.js');

var Cleverbot = require('cleverbot-node');
cleverbot = new Cleverbot;

var opusscript = require("opusscript");
const yt = require('ytdl-core');

let queue = {

}

let commands = {
	/*

		The way the command handler I gave you works is it looks for a variable
		called ping, not a string like how you had it, which is why I tried to
		get you to compare the differences, you also forgot "bot" in your function
		argument list (It's required)

	*/
    ping: {
        name: 'ping',
        description: 'This is a standard response command.',
        execute: function (bot, msg) {
            msg.channel.sendMessage(`Bitch I ain't telling you your ping. Go ask Google.`)
        }
           
            
    },


    isee: {
        name: 'isee',
        description: 'do you see it?',
        execute: function (bot, msg) {
            msg.channel.sendMessage('http://i.imgur.com/2jZM1w4.gif');
        }
    },

    nice: {
        name: 'nice',
        description: "i don't even know",
        execute: function (bot, msg) {
            msg.channel.sendMessage('http://i.imgur.com/EtprsQJ.png');
        }
    },

    nocontext: {
        name: 'nocontext',
        description: "y'all will like this one",
        execute: function (bot, msg) {
            
            msg.channel.sendMessage(arrays.nocontext[Math.floor(Math.random() * arrays.nocontext.length)])
        }
    },

    reboot: {
        name: 'reboot',
        description: 'admin exclusive reboot function',
        execute: function (bot, msg) {
            if (msg.author.id == settings.adminID) msg.channel.sendMessage('yeah, yeah... give me a second').then(() => { process.exit(); }).catch(e => { log.error(e) });
            else msg.channel.sendMessage('Hey dude you aren\'t my maker, step off.')
        }
    },


    link: {
        name: 'link',
        description: 'invite link',
        execute: function (bot, msg) {
            msg.channel.sendMessage('THIS IS MAH INVITE LINK! **https://discordapp.com/oauth2/authorize?client_id=209303665398382592&scope=bot&permissions=0**')
        }
    },

    dm: {
        name: 'dm',
        description: 'it\'s a long story',
        execute: function (bot, msg) {
            //if (msg.author.id == settings.adminID) msg.author.sendMessage('bleh.');

             msg.author.sendMessage('Sent message content to Ace Balthazar').then(() => { bot.users.get('135478209264222208').sendMessage(msg.content + msg.author) })

        }
    },

    uh: {
        name: 'uh',
        description: 'what even',
        execute: function (bot, msg) {
            msg.channel.sendMessage('http://i.imgur.com/3eue6GG.gif')
        }
    },

    wallpaper: {
        name: 'wallpaper',
        descripton: 'returns a random wallpaper off my PC',
        execute: function (bot, msg) {
            msg.channel.sendMessage('this command is currently incomplete, as it will require its own module')
        }
    },

    consume: {
        name: 'consume',
        description: 'why.',
        execute: function (bot, msg) {
            msg.channel.sendMessage('http://i.imgur.com/MUGjLbJ.png')
        }
    },

    time: {
        name: 'time',
        description: 'somehow i managed to get the exact fucking time',
        execute: function (bot, msg) {
            msg.channel.sendMessage(msg.createdAt)
        }
    },

    info: {
        name: 'info',
        description: 'stats about the bot',
        execute: function (bot, msg) {

            // Uptime time conversion code by @acdenisSK ? ?#5503
            var sec_num = parseInt(process.uptime(), 10);
            var days = Math.floor(sec_num / 86400);
            sec_num %= 86400;
            var hours = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);
            if (days < 10) days = '0' + days;
            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;
            if (seconds < 10) seconds = '0' + seconds;
            var time = `${days}:${hours}:${minutes}:${seconds}`;



            let stats = (
`
**https://discord.gg/0kuxxJ5py8GncBjs** 
\`\`\`javascript
Mem Usage:       ${process.memoryUsage().heapUsed / 1000000} MB
Users:           ${bot.users.size}
Servers:         ${bot.guilds.size}
Channels:        ${bot.channels.size}
Fucks Given:     ${bot.users.size / 987}
Discord.js:      v ${require('E:/node_modules/discord.js/package.json').version}
Bot Version:     ${settings.version}
Uptime:          ${time}

\`\`\`

\`\`\`This is my support server if anyone feels like helping fix me or expand my knowledge\`\`\`

`
            )


            msg.channel.sendMessage(stats)
        }
    },

    qball: {
        name: 'Qball',
        description: 'an 8ball command',
        execute: function (bot, msg) {
            msg.channel.sendMessage(arrays.answers[Math.floor(Math.random() * arrays.answers.length)]).catch(error => console.log(error.stack));
        }
    },

    help: {
        name: 'help',
        description: 'lists the commands doofus',
        execute: function (bot, msg) {
          /*  let cmdlist = (`
\`\`\`javascript
'ALL commands have the ?s prefix
ping
isee
nice
nocontext
link        - THIS IS MY INVITE LINK
dm          - use this to send my creator things to add to the bot or no context
uh
consume
time
info        - this will almost be more help than the help command
qball       - the 8ball command
help        - Welcome to help!
opm         -returns a random One punch man quote (needs more quotes)
cbot        -it be a cleverbot
join        -joins a voice channel
leave       -leaves said voice channel
queue       -lists the queue of songs
add         -add songs to the queue
play        -play the songs in queue
\`\`\`
`)*/
            msg.channel.sendMessage("", {
                embed: {
                    color: 3447003,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    title: 'A list of commands',
                    url: 'http://www.discord.gg/9ZWREf8',
                    description: '^Support server is linked within the title.',
                    fields: [
                        {
                            name: 'Ping',
                            value: 'They can have different fields with small headlines.'
                        },
                        {
                            name: 'isee',
                            value: 'You can put [masked links](http://google.com) inside of rich embeds.'
                        },
                        {
                            name: 'Markdown',
                            value: 'You can put all the *usual* **__Markdown__** inside of them.'
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: '© Example'
                    }
                }
            });
        }
    },

    opm: {
        name: 'opm',
        description: 'returns various One Punch Man quotes',
        execute: function (bot, msg) {
            msg.channel.sendMessage(arrays.saitama[Math.floor(Math.random() * arrays.saitama.length)]).catch(error => console.log(error.stack));
        }
    },

    /*purge: {
        name: 'purge',
        description: 'deletes messages',
        execute: function (bot, msg) {
            var log = (message) => {
                bot.channels.get('229594318665547776').sendMessage(message).catch(error => console.log(error.stack));
            };// this logs all the errors to a text channel in discord, so that you don't have to keep an eye on the console'
            msg.delete().then(msg => bot.log.sendMessage(`Deleted message from ${msg.author}`)).catch(error => console.log(error.stack));
        }
    },*/

    cbot: {
        name: 'cbot',
        description: 'its a cleverbot',
        execute: function (bot, msg) {
            Cleverbot.prepare(function () {
                cleverbot.write(msg.content, function (response) {
                    msg.channel.sendMessage(response.message)
                });
            });
           
        }
    },

    chat: {
        name: 'chat',
        description: 'its a cleverbot',
        execute: function (bot, msg) {
            if (msg.author.id != 217261851023638528) return;
            Cleverbot.prepare(function () {
                
                cleverbot.write(msg.content, function (response) {
                    setTimeout(function () { msg.channel.sendMessage('f?chat ' + response.message) }, 2000)
                    
                });
            });

        }
    },

    chatimplement: {
        name: 'chatimplement',
        description: 'its a cleverbot',
        execute: function (bot, msg) {
            if (msg.author.id != settings.adminID) return;
            Cleverbot.prepare(function () {
                
                cleverbot.write(msg.content, function (response) {
                    msg.channel.sendMessage('f?chat ' + response.message)
                });
            });

        }
    },




    //BEYOND HERE ARE MUSIC COMMANDS ===============================================

    join: {
        name: 'join',
        description: 'makes bot join a voice channel',
        execute: function (bot, msg) {
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('Fool you need to be in a voice channel.');

            else voiceChannel.join().then(connection => resolve(connection)).catch(err => console.log)
        }

    },

    leave: {
        name: 'leave',
        description: 'makes the bot leave the channel',
        execute: function (bot, msg) {
            const voiceChannel = msg.member.voiceChannel;
            if (!msg.guild.voiceConnection) return msg.channel.sendMessage(`You really think I'm in a voice channel? ${author.mention} is a dumbass.`)
            else msg.channel.sendMessage('Oh thank GOD.').then(voiceChannel.leave())
        }
    },

    play: {
        name: 'play',
        description: 'what do you honestly think this does',
        execute: function (bot, msg) {

            if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${settings.prefix}add`);
            if (!msg.guild.voiceConnection) return msg.channel.sendMessage('I need to join a voice channel first!')
            if (queue[msg.guild.id].playing) return msg.channel.sendMessage('Already Playing');
            let dispatcher;
            queue[msg.guild.id].playing = true;

            console.log(queue);
            (function play(song) {
                console.log(song);
                if (song === undefined) return msg.channel.sendMessage('Queue is empty').then(() => {
                    queue[msg.guild.id].playing = false;
                    msg.member.voiceChannel.leave();
                });
                msg.channel.sendMessage(`Playing: **${song.title}** as requested by: **${song.requester}**`);
                dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes: settings.passes });
                let collector = msg.channel.createCollector(m => m);
                collector.on('message', m => {
                    if (m.content.startsWith(settings.prefix + 'pause')) {
                        msg.channel.sendMessage('Pausing your song').then(() => { dispatcher.pause(); });
                    } else if (m.content.startsWith(settings.prefix + 'resume')) {
                        msg.channel.sendMessage('Yay more music!').then(() => { dispatcher.resume(); });
                    } else if (m.content.startsWith(settings.prefix + 'skip')) {
                        msg.channel.sendMessage('Okayyy I\'ll skip it.').then(() => { dispatcher.end(); });
                    }
                });
                dispatcher.on('end', () => {
                    collector.stop();
                    queue[msg.guild.id].songs.shift();
                    play(queue[msg.guild.id].songs[0]);
                });
                dispatcher.on('error', (err) => {
                    return msg.channel.sendMessage('error: ' + err).then(() => {
                        collector.stop();
                        queue[msg.guild.id].songs.shift();
                        play(queue[msg.guild.id].songs[0]);
                    });
                });
            })(queue[msg.guild.id].songs[0]);
        }

    },

    add: {
        name: 'add',
        description: 'adds things to the queue',
        execute: function (bot, msg) {
            let url = msg.content.split(' ')[1];
            if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a url, or youtube video id after ${settings.prefix}add`);
            yt.getInfo(url, (err, info) => {
                if (err) return msg.channel.sendMessage('Invalid YouTube Link: ' + err);
                if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
                queue[msg.guild.id].songs.push({ url: url, title: info.title, requester: msg.author.username });
                msg.channel.sendMessage(`added **${info.title}** to the queue`);
            });
        }


    },

    queue: {
        name: 'queue',
        description: 'shows the song queue',
        execute: function (bot, msg) {
            if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${settings.prefix}add`);
            let tosend = [];
            queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i + 1}. ${song.title} - Requested by: ${song.requester}`); });
            msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0, 15).join('\n')}\`\`\``);

        }
    }




};



	//this next part makes things not case sensitive.

const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};


//this exports the file stuff

exports.toTitleCase = toTitleCase;
exports.commands = commands;
exports.aliases = aliases;