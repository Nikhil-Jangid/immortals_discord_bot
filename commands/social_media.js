
module.exports = {
    name: 'social_media',
    description: "this is a social media command!",
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
                name: "Instagram:-",
                value: "[Click here](https://www.instagram.com/immortals_bolteee)"
              },{
                name: "Facebook:-",
                value: "[Click here](https://www.facebook.com/immortals.gaming.3152/)"
              },{
                name: "Twitch:-",
                value: "[Click here](https://www.twitch.tv/immortals_bolteee)"
              },{
                name: "Youtube:-",
                value: "[Click here](https://www.youtube.com/channel/UCf6MNkIxzQ7QfrnU4q19_5g)"
              },{
                name: "Discord:-",
                value: "[Click here](https://discord.gg/WPJCyP76ys)"
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