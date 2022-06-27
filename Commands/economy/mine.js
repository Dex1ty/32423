module.exports = {
    name: "mine",
    aliases: ['dig'],
    cooldown: 1000 * 43200,
    description: "Shows your balance of coins.",
  async run(client, message, args, ProfileData){
    let userQuery =  { userID: message.author.id };
    let user = await ProfileData.findOne(userQuery);
    if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")        
    }
    const minerAmount = user.miners;
    if(!minerAmount){
      return message.reply("You need to purchase atleast 1 miner to use this command.")
    }
    const moneyMade = minerAmount * 10000

    await ProfileData.findOneAndUpdate({
      userID: message.author.id,
    },{
      "$inc": {
        "coins": moneyMade
      }
    })
    message.reply(`You're miners made ${moneyMade} coins for you.`)






    }
  }

