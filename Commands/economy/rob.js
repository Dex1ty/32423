module.exports = {
    name: "rob",
    cooldown: 1000 * 1800,
    description: "steal something from someone",
  async run(client, message, args, ProfileData){
   userQuery = { userID: message.author.id };
  
   const user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .");
   } 
  const taggedUser = message.mentions.users.first();
  if(!taggedUser) return message.reply("Please tag someone that you would like to rob.")

  if(taggedUser){
    const taggedUserQuery =  { userID: taggedUser.id };
   const weUser = await ProfileData.findOne(taggedUserQuery);
   if(!weUser){
     return message.reply("That person has not ran the command \`!prcreate\` . Get them to run that command to create their account.")
   }

  const max =  500
  const min = 5 
  const robbedMoney1 = Math.random() * (max - min) + min;
  const robbedMoney = Math.round(robbedMoney1 * 100) / 100
  
  await ProfileData.findOneAndUpdate({
    taggedUserQuery
  }, {
    "$inc": {
      "coins": -robbedMoney
    }
  })


  await ProfileData.findOneAndUpdate({
    userQuery
  },{
    "$inc": {
      "coins": robbedMoney
    }
  })

  return message.reply(`You have robbed ${taggedUser} and taken ${robbedMoney} coins from them.`)   
    }
  }
}
