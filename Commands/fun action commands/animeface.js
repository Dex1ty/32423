module.exports = {
    name: "animeface",
    description: "Call the loli police on someone",
  async run(client, message, args){
      const fetch = require("node-fetch");
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author; //GET USERS ID
        let avatar = member.avatarURL({ size: 1024, dynamic: true }); //GETS USERS AVATAR

        fetch('https://nekobot.xyz/api/imagegen?type=animeface&image=' + avatar)
    .then(res => res.json())
    .then(json => {
        if (json.success === false) return message.reply("There was an error getting the animeface.");

      message.channel.send(`${json.message}`)
    });
    }
}
