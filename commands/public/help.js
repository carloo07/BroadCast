const { Message, Client , MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefixx) => {

const embed = new MessageEmbed()
.setTitle(`:cowboy: ~ Bc Commands :`)
.setTimestamp()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`>>> **-bc [type] [message]**
Type : **Everyone** , **Here** , **Role**
Method : **[user]** = Mention
Ex : **-bc everyone Test [user]** | **-bc here Test**`)
.setColor('RANDOM')
.setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))

message.channel.send({embeds: [embed]})
    }
}