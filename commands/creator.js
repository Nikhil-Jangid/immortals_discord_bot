 
module.exports = {
    name: 'creator',
    description: "this is a creator command!",
    execute(message, args){
        message.channel.send(`I am created by <@737900208444145816>`);
    }
}