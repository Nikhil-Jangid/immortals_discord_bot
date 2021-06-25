
module.exports = {
    name: 'device',
    description: "this is a device command!",
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
                name: "MI A2",
                value: "6GB Version. You can but at [Flipkart](https://www.flipkart.com/mi-a2-red-128-gb/p/itmfghsgrkphksag?gclid=CjwKCAiAp4KCBhB6EiwAxRxbpHXj-InCryrOB2xGu1T6aprz4oFyDYFTPvBe47YBg8waez2LBwiADxoC-kQQAvD_BwE&pid=MOBFD94CUVXZYMZH&lid=LSTMOBFD94CUVXZYMZH81NSEK&marketplace=FLIPKART&cmpid=content_mobile_730597647_g_8965229628_gmc_pla&tgi=sem,1,G,11214002,g,search,,476044024748,,,,c,,,,,,,&ef_id=CjwKCAiAp4KCBhB6EiwAxRxbpHXj-InCryrOB2xGu1T6aprz4oFyDYFTPvBe47YBg8waez2LBwiADxoC-kQQAvD_BwE:G:s&s_kwcid=AL!739!3!476044024748!!!g!293946777986!&gclsrc=aw.ds)"
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
