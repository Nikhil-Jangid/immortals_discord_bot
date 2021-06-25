 
module.exports = {
    name: 'server',
    description: "this is a server command!",
    execute(message, args){
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
}