module.exports = {
    name: "fish",
    cooldown: 1000 * 900,
    description: "Fish for some fish to gain some free cash.",
  async run(client, message, args, ProfileData){
       userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 
    const ifFish = user.fishingRod;
    if(!ifFish) return message.reply("You need to craft a fishing rod before you can fish. To do that use the command \`!craft fishing rod\`");
     
            var fishtypes = [
            "Common Carp",
            "Blue Tang",
            "Atlantic Salmon",
            "Gummy Shark",
            "Grouper",
            "Tuna",
            "Marlin",
            "Burramundi",
            "King Mackerel",
        ];
      const bigfishmoney = 250000
      const smallfishmoney = Math.floor(Math.random() * 500) + 1;
      const fishtype = fishtypes[Math.floor(Math.random() * fishtypes.length)];
      const fish = Math.floor(Math.random() * 10000) + 1;

      if(fish < 9999) return await ProfileData.updateOne(userQuery, {
      "$inc": { "coins": smallfishmoney }
          }).then(message.reply(`You caught a ${fishtype} and received ${smallfishmoney} coins for your efforts.`))
      if(fish > 9999) return await ProfileData.updateOne(userQuery, {
      "$inc": { "coins": bigfishmoney }
          }).then(message.reply(`You caught a Golden Mythical Fish and received ${bigfishmoney} coins for your efforts.`));
    
  





          }
}
