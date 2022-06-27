module.exports = {
    name: "chopwood",
    cooldown: 1000 * 43200,
    description: "chops wood",
  async run(client, message, args, ProfileData){
    
    let userQuery =  { userID: message.author.id };
    let user = await ProfileData.findOne(userQuery);
    if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")        
    }
    const lumberJacks = user.lumberjacks;
    if(!lumberJacks){
      return message.reply("You need to purchase atleast 1 miner to use this command.")
    }
    const moneyMade = lumberJacks * 5000

    await ProfileData.findOneAndUpdate({
      userID: message.author.id,
    },{
      "$inc": {
        "coins": moneyMade
      }
    })
    message.reply(`You're lumberjacks made ${moneyMade} coins for you.`)


  }
}
