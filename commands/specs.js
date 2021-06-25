
module.exports = {
    name: 'specs',
    description: "this is a specs command!",
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
                name: "Processor:-",
                value: "Intel(R) Core(TM) i7-3540M CPU @3.00 GHz."
              },{
                name: "RAM:-",
                value: "6GB RAM."
              },{
                name: "Storage:-",
                value: "120GB SSD + 500GB hard disk."
              },{
                name: "Graphics Card:-",
                value: "Intel Graphics 4000."
              },{
                name: "Screen Size:-",
                value: "15.6 inches."
              },{
                name: "System Type:-",
                value: "64 bit"
              },{
                name: "RAM Type:-",
                value: "DDR3 SDRAM"
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