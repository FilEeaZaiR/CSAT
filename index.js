//Base bot discord :
const Discord = require('discord.js');

const client = new Discord.Client();

//Variables :
var prefix = "csat!";

//Login + connexion du bot :
client.login();

client.on("ready", () => {
    console.log("Connexion en cours ...");
    client.user.setActivity(`Team Choice Bot`);
});

client.on(`message`, message =>{
    if(message.content.startsWith(prefix + "mute")) {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have the rights !");

    if(message.mentions.users.size === 0) {
        return message.channel.send("You have to mention someone that is on this server to do this command");
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Unknown user");
    }

    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't have the right");
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        message.channel.send(`${mute.user.username} has been muted by ${message.author.username} !`);
    })
}

if(message.content.startsWith(prefix + "unmute")) {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have the rights !");

    if(message.mentions.users.size === 0) {
        return message.channel.send("You have to mention someone that is on this server to do this command");
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Unknown user");
    }

    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't have the right");
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
        message.channel.send(`${mute.user.username} has been unmuted by ${message.author.username} !`);
    })
}

if(message.content.startsWith(prefix + "cabswa")) {

    message.delete()

    let user = message.guild.member(message.author);

    let role = message.guild.roles.find(m => m.name === "CAB x SWA");
    if(!role) return console.log("Le rôle n'existe pas !");

    user.addRole(role).catch(console.error);
    message.channel.send(`**You have now the role !**`);
    
}

if(message.content.startsWith(prefix + "awtw")) {

    message.delete()

    let user = message.guild.member(message.author);

    let role = message.guild.roles.find(m => m.name === "AW x TW");
    if(!role) return console.log("Le rôle n'existe pas !");

    user.addRole(role).catch(console.error);
    message.channel.send(`**You have now the role !**`);
    
}

});