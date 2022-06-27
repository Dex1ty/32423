module.exports = {
    name: "fishtypes",
    aliases: ['ft'],
    cooldown: 1000 * 5,
    description: "Shows the types of fish you can catch",
  async run(client, message, args, ProfileData){
          const Discord = require("discord.js")
                      var fishtypes = [
            "Common Carp",
            "Blue Tang",
            "Atlantic Salmon",
            "Gummy Shark",
            "Grouper",
            "Tuna",
            "Marlin",
            "Burramundi",
            "King Mackerel"
        ];
        const fishtypeEmbed = new Discord.MessageEmbed();

        fishtypeEmbed.setTitle("Fish Types")
        .setDescription(fishtypes)
        .setColor("AQUA")
        .setFooter("These are the fish that can be collected from fishing.");
        message.reply({ embeds: [fishtypeEmbed] })




    }
}
