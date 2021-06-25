
module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args, discord){      
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name:  'IMMORTALS_GAMING#5463',
          icon_url: 'https://cdn.discordapp.com/avatars/781218921603792906/6b41ae7ed4c655559476bf7f27d30dfd.png?size=256'
        },
        title: "The commands start with -.",
        description: "This commands can ne used by anyone in this server.",
        fields: [{
            name: "birthday",
            value: "This command will tell you my birth date."
          },
          {
            name: "device",
            value: "This command will tell you about my device."
          },
          {
            name: "place",
            value: "This command will tell you my location."
          },
          {
            name: "os",
            value: "This command will tell you which Operation system i am using."
          },
          {
            name: "favactor",
            value: "This command will tell you about my favourite Actor."
          },
          {
            name: "favactress",
            value: "This command will tell you about my favourite Actress."
          },
          {
            name: "favsong",
            value: "This command will tell you about my favourite Song."
          },
          {
            name: "help",
            value: "This command will tell you about all commands."
          },
          {
            name: "info",
            value: "This command will tell you about my general info."
          },
          {
            name: "laptop",
            value: "This command will tell you about my laptop."
          },
          {
            name: "pc",
            value: "This command will tell you about my pc."
          },
          {
            name: "creator",
            value: "This command will tell you about creator of this bot."
          },
          {
            name: "name",
            value: "This command will tell you my name."
          },
          {
            name: "server",
            value: "This command will tell you name of this server."
          },
          {
            name: "specs",
            value: "This command will tell you specs of my device."
          },
          {
            name: "headphones",
            value: "This command will tell you about my headphones."
          },
          {
            name: "keyboard",
            value: "This command will tell you about my keyboard."
          },
          {
            name: "mouse",
            value: "This command will tell you about my mouse."
          },
          {
            name: "social_media",
            value: "This command will give you links to all my social media."
          },

        ],timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/avatars/781218921603792906/6b41ae7ed4c655559476bf7f27d30dfd.png?size=256',
          text: "aka_IMMORTALS ©."
        }
      }
    });
    }
}
