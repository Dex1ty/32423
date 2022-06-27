// const Discord = require("discord.js");

// module.exports = {
//     name: "inventory",
//     aliases: ["inv"],
//     cooldown: 1000 * 5,
//     description: "daily coins baybee",
//   async run(client, message, args, ProfileData){
//     const invEmbed = new Discord.MessageEmbed();
//     const member = message.mentions.users.first() || message.author;
//     const memberTarger = message.guild.members.cache.get(member.tag);    
    
//      let userQuery =  { userID: member.id };
//    let user = await ProfileData.findOne(userQuery);
//    if(!user){
//      return message.reply("That person has not ran the command \`!prcreate\` . Get them to run that command to create their account.")
//    } else {
     
//     if(user.fishingRod === true){
//       const fishRod = user.fishingRod.toString("Crafted")    
//     } else {
//           const fishRod = user.fishingRod.toString("Not Crafted")    
//     } 
     
//     invEmbed.setTitle(`${memberTarger}'s Inventory`)
//     .addFields({
//       name: "Coins",
//       value: user.coins,
//       inline: true,
//     })
//     .addFields({
//       name: "Wood",
//       value: user.wood,
//       inline: true,
//     })
//     .addFields({
//       name: "Stone",
//       value: user.stone,
//       inline: true,
//     })
//     .addFields({
//        name: "Metal",
//        value: user.metal,
//        inline: true,
//      })
//     .addFields({
//       name: "Rope",
//       value: user.rope,
//       inline: true
//     }) 
//     .addFields({
//       name: "LumberJacks Owned",
//       value: user.lumberjacks,
//       inline: true,
//     })
//     .addFields({
//       name: "Miners Owned",
//       value: user.miners,
//       inline: true,
//     })


//     message.channel.send({ embeds: [invEmbed] })
     
//    }
    

    


    
//     }
// }
