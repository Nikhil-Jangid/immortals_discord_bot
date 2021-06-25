module.exports = {
    name: 'headphones',
    description: "this is a headphones command!",
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
                name: "CosmicByte GS430 Gaming Headset.",
                value: "You can buy it at [Amazon](https://www.amazon.in/Cosmic-Byte-GS430-Camo-Green/dp/B08FMGH7T8/ref=sr_1_6?adgrpid=75159523577&dchild=1&ext_vrnc=hi&gclid=CjwKCAiAp4KCBhB6EiwAxRxbpPvvaBJcI0QVO4uNJSIgAwnWYNvKIPKwfZsri2e5pFC3eh6V0g3KIhoCNmAQAvD_BwE&hvadid=398021276853&hvdev=c&hvlocphy=9062203&hvnetw=g&hvqmt=e&hvrand=15039456239224870433&hvtargid=kwd-928479547180&hydadcr=15880_1995150&keywords=cosmic+byte+gs430&qid=1614855331&sr=8-6)"
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