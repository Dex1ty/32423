const fs = require("fs");
    const Discord = require("discord.js");
module.exports = {
    name: "shop",
    aliases: ['mall'],
    cooldown: 1000 * 5,
    description: "Shows your balance of coins.",
  async run(client, message, args, ProfileData){
    const shopEmbed = new Discord.MessageEmbed();
      userQuery = { userID: message.author.id };
      let user = await ProfileData.findOne(userQuery);
  if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
      } 

    shopEmbed.setTitle("Shop")
    .setColor("AQUA")
    .addFields({
      name: "Business",
      value: "**Miners** | Cost: 200,000 coins each.  \n **Lumberjacks** | Cost: 100,000 coins each.",
      inline: false,
    })
    .addFields({
      name: "Materials",
      value: "**Wood** | Cost: 250 coins \n **Stone** | Cost: 350 coins \n **Rope** | Cost: 175 coins \n **Metal** | Cost: 500 coins \n **Please remember that you can only select an amount of materials to purchase.**",
      inline: false,
    });
  
    

  

  message.channel.send({ embeds: [shopEmbed] })

    }
}
