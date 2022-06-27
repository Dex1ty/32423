module.exports = {
    name: "craft",
    cooldown: 1000 * 5,
    description: "craft something",
  async run(client, message, args, ProfileData){
   userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 
  if(!args[0]) return message.reply("What are you trying to craft?? Baka, do \`!craftmenu\`")

  const craftingItem = args.slice(0).join(" ");
  switch (craftingItem.toLowerCase()){
    case "fishing rod" || "fishingrod":
    
    const checkingWood = user.wood;
    const checkingRope = user.rope;
    if(checkingWood < 2) return message.reply(`You need to have atleast 2 wood and 1 rope to craft a fishing rod. You currently have ${user.wood} wood and ${user.rope} rope.`)
    if(checkingRope < 1) return message.reply(`You need to have atleast 2 wood and 1 rope to craft a fishing rod. You currently have ${user.wood} wood and ${user.rope} rope.`);
      await ProfileData.findOneAndUpdate({
        userID: message.author.id,
      },{
        "$inc":{
          "wood": -2,
          "rope": -1,
        }, 
        "$set": {
          "fishingRod": true,
        
      }
      })
      return message.reply("You have crafted a fishing rod for 2 wood and 1 rope.")

    }
  }
}
