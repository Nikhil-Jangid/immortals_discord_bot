 
module.exports = {
    name: 'name',
    description: "this is a name command!",
    execute(message, args){
        message.channel.send({embed: {
            color: 3447003,
            author: {
                icon_url: "https://cdn.discordapp.com/avatars/781218921603792906/6ddbc59147c70337a7687cf0487fa44d.png?size=256",
                text: "IMMORTALS_GAMING#5463",
              },
              title: "",
              description: "",
            fields: [{
                name: "Nikhilesh Jangid aka IMMORTALS.",
                value: "You can call me IMMORTALS."
              },
              
            ],timestamp: new Date(),
            footer: {
              icon_url: "https://cdn.discordapp.com/avatars/781218921603792906/6ddbc59147c70337a7687cf0487fa44d.png?size=256",
              text: "aka_IMMORTALS ©."
            }
          }
          });
    }
}