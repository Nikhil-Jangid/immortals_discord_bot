const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('#aka_IMMORTALS.', {type: 'WATCHING'});
})

client.on(`message`, function(message){
    if (message.mentions.users.first() === client.user){
       message.channel.send("Did you ping me ? | My prefix is -");
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
        if(command === 'creator'){
        client.commands.get('creator').execute(message, args);
    }
    else if(command === 'info'){
        client.commands.get('info').execute(message, args);
    }
    else if(command === 'server'){
        client.commands.get('server').execute(message, args);
    }
    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    else if(command === 'birthday'){
        client.commands.get('birthday').execute(message, args);
    }
    else if(command === 'device'){
        client.commands.get('device').execute(message, args);
    }
    else if(command === 'favactor'){
        client.commands.get('favactor').execute(message, args);
    }
    else if(command === 'favactress'){
        client.commands.get('favactress').execute(message, args);
    }
    else if(command === 'favsong'){
        client.commands.get('favsong').execute(message, args);
    }
    else if(command === 'laptop'){
        client.commands.get('laptop').execute(message, args);
    }
    else if(command === 'pc'){
        client.commands.get('pc').execute(message, args);
    }
    else if(command === 'place'){
        client.commands.get('place').execute(message, args);
    }
    else if(command === 'specs'){
        client.commands.get('specs').execute(message, args);
    }
    else if(command === 'name'){
        client.commands.get('name').execute(message, args);
    }
    else if(command === 'os'){
        client.commands.get('os').execute(message, args);
    }
    else if(command === 'headphones'){
        client.commands.get('headphones').execute(message, args);
    }
    else if(command === 'mouse'){
        client.commands.get('mouse').execute(message, args);
    }
    else if(command === 'keyboard'){
        client.commands.get('keyboard').execute(message, args);
    }
    else if(command === 'social_media'){
        client.commands.get('social_media').execute(message, args);
    }

});

client.login('YOUR_BOT_ID');
