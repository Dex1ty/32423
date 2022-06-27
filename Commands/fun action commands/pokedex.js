module.exports = {
    name: "pokedex",
    description: "Find the info about any pokemon.",
  async run(client, message, args){
      const fetch = require("node-fetch");
      const Discord = require("discord.js")
        const pokemon = args.join(" ");
fetch('https://some-random-api.ml/pokedex?pokemon=' + pokemon)
    .then(res => res.json())
    .then(json => {
        const pokedex = new Discord.MessageEmbed();
        pokedex.setTitle(`Pokemon name: ${json.name}`)
        .setThumbnail(`${json.sprites.normal}`, ({ size: 1024, type: "png"}))
        .setDescription(`${json.description}`)
        .setColor("AQUA")
        .addFields({
            name: "Id",
            value: `${json.id}.`,
            inline: false
        })
        .addFields({
            name: "Type",
            value: `${json.type}.`,
            inline: false
        })
        .addFields({
            name: "Species",
            value: `${json.species}.`,
            inline: false
        })
        .addFields({
            name: "Abilities",
            value: `${json.abilities}`,
            inline: false
        })
        .addFields({
            name: "Height",
            value: `${json.height}`,
            inline: false
        })
        .addFields({
            name: "Weight",
            value: `${json.weight}`,
            inline: false
        })
        .addFields({
            name: "Stats",
            value: `Hp: ${json.stats.hp} \n Attack: ${json.stats.attack} \n Defense: ${json.stats.defense} \n Speed: ${json.stats.speed}`,
            inline: false
        })
        .addFields({
            name: "Evolution",
            value: ` Stage: ${json.family.evolutionStage} \n Evolution Line: ${json.family.evolutionLine}.`,
            inline: false
        })
        .addFields({
            name: "Generation",
            value: `${json.generation}`,
            inline: false
        })
        const answer = json.error || pokedex 
        if(!args[0]) return ("Please state the name of the pokemon you would like to find the stats for.")
        if(answer === json.error) return message.reply("That pokemon could not be found in my pokedex.");
        if(answer === pokedex) return message.reply({embeds: [pokedex] });
        else message.reply("That pokemon could not be found in my pokedex.");
    });
    }
}
