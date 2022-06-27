  module.exports = {
    name: "hug",
    description: "Hug someone",
  async run(client, message, args){
      const Discord = require("discord.js");
        var images = [
            "https://c.tenor.com/nHkiUCkS04gAAAAM/anime-hug-hearts.gif",
            "https://acegif.com/wp-content/gif/anime-hug-3.gif",
            "https://acegif.com/wp-content/gif/anime-hug-17.gif",
            "https://acegif.com/wp-content/gif/anime-hug-36.gif",
            "https://acegif.com/wp-content/gif/anime-hug-93.gif",
            "https://1.bp.blogspot.com/-86yVsCoo8Lg/YG74owL3TRI/AAAAAAAAD_g/bzEb8XecokcC7jyolOFu6w44nhklUSCwQCLcBGAsYHQ/s16000/anime%2Bhug%2Bgif1.gif",
            "https://cutewallpaper.org/21/anime-boy-hugging-crying-girl/Girl-boy-hug-GIFs-Get-the-best-GIF-on-GIPHY.gif",
            "http://i.imgur.com/V2tjYJT.gif",
            "https://c.tenor.com/cFhjNVecNGcAAAAC/anime-hug.gif",
            "https://thumbs.gfycat.com/LightheartedNeedyBuzzard-small.gif",
            "https://acegif.com/wp-content/gif/anime-hug-15.gif",
            "https://acegif.com/wp-content/gif/anime-hug-70.gif",

        ];
        const image = images[Math.floor(Math.random() * images.length)];
        const member = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        if (member == null) return message.reply("Please state a user you would like to hug.");

        else if (message.author == member) return message.reply("You cannot hug yourself! haha....");
        else {
            const memberTarger = message.guild.members.cache.get(member.tag);
        };        
            embed.setTitle(`${message.author.username} hugged ${member.tag}!`)
                .setImage(image)
                .setColor("AQUA"),
            message.reply({ embeds: [embed] });
    }
}
