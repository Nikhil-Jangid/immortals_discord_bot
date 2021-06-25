 
module.exports = {
    name: 'os',
    description: "this is a os command!",
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
                name: "Windows 10 Pro",
                value: "You can buy it from [Amazon](https://www.amazon.in/Microsoft-Windows-Pro-System-Builder/dp/B07NWYG6T7/ref=asc_df_B07NWYG6T7/?tag=googleshopdes-21&linkCode=df0&hvadid=396984945312&hvpos=&hvnetw=g&hvrand=4795755289985770335&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062203&hvtargid=pla-811871449420&psc=1&ext_vrnc=hi)"
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
