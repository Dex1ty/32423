module.exports = {
    name: "sell",
    description: "Sell an item that you have purchased.",
  async run(client, message, args, ProfileData){
       userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 
    if(!args[0]) return message.reply("Please state what you would like to sell.")
    let item = user.inventory.find(v => v.name === args[0].toLowerCase());
    if(!item){
      return message.reply("No such item was found in your inventory");
    }

    await ProfileData.updateOne(userQuery, {
      "$pull": {
        "inventory": item
      },
      "$inc": {
        coins: Math.round(item.cost * 2/3)
      }
    });

    await message.reply(`You sold ${item.name} and recieved ${Math.round(item.cost * 2/3)} coins.`)
    }
}
