module.exports = {
    name: "level",
    aliases: ['rank'],
    description: "Shows bot ping",
  async run(client, message, args){
      const Discord = require("discord.js");
      const Levels = require("discord-xp"); 
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;
        
        const user = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if (!user) return message.channel.send("The member stated does not have any levels within the server.");
        const target = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed();
        
            embed.setTitle(`${target.tag}'s Level Data`)
                .setColor("AQUA")
                .setThumbnail(target.avatarURL({ dynamic: false }))
                .setTimestamp(`Today at ${message.createdAt.toUTCString()}`)
                .addFields({
                    name: "Level",
                    value: `${user.level}`,
                    inline: true
                }, {
                    name: "Xp",
                    value: `${user.xp}/${Levels.xpFor(user.level + 1)}`,
                    inline: true
                });
                message.reply({embeds: [embed] })
    }
}
