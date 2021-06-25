
module.exports = {
    name: 'mouse',
    description: "this is a mouse command!",
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
                name: "Dell WM118 Wireless Mouse ",
                value: "You can buy at [Amazon](https://www.amazon.in/DELL-WM118-Wireless-Optical-Mouse/dp/B07JPX9CR7/ref=asc_df_B07JPX9CR7/?tag=googleshopdes-21&linkCode=df0&hvadid=397083155954&hvpos=&hvnetw=g&hvrand=14573186916708160070&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062203&hvtargid=pla-812317981150&psc=1&ext_vrnc=hi)"
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