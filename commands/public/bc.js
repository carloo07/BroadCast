const { Message, Client , MessageEmbed } = require("discord.js");
module.exports = {
    name: "bc",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
          if(!message.member?.permissions.has('ADMINISTRATOR')) return message.channel.send(`._. `)
    let aaa = message.content.split(' ')
const type = aaa[1]
if(!type) return 
    if(type.includes('everyone')){
    let a = message.content.split(' ').slice(2).join(' ')
    if(!a) return 
    
    message.guild.members.cache.forEach(r => {
    let f = a.replace('[user]', `<@${r.id}>`)

for(let i =0; i < r.length; i++){
      
  setTimeout(() => {
    let m = client.users.cache.get(r [i].id)
    if(!m) return;
 m.send(f).catch(err => 0); 
},5000+(i*5000));
}
    })
    
    } else if(type.includes('here')) {



        
message.guild.members.fetch().then(members => { 

members.filter((member) => 
    


        !member.user?.bot && member.presence?.status ===  'online').map((member) => {
    let arg = message.content.split(' ').slice(2).join(' ')
    if(!arg) return 
    let f = arg.replace('[user]', `<@${member.id}>`)
    member.send(f).catch(err => console.log(err));
})
members.filter((member) => 
    


        !member.user?.bot && member.presence?.status ===  'dnd').map((member) => {
    let arg = message.content.split(' ').slice(2).join(' ')
    if(!arg) return 
    let ff = arg.replace('[user]', `<@${member.id}>`)
    member.send(ff).catch(err => console.log(err));
})
    members.filter((member) => 
    


        !member.user?.bot && member.presence?.status ===  'idle').map((member) => {
        let arg = message.content.split(' ').slice(2).join(' ')
    if(!arg) return 
    let fff = arg.replace('[user]', `<@${member.id}>`)
    member.send(fff).catch(err => console.log(err));
})
})


    } else if(type.includes('role')) {
    let id = message.content.split(' ')[2]
    if(!id) return 
        let msg = message.content.split(' ').slice(3).join(' ')
    if(!msg) return 

message.guild.roles.cache.get(id).members.map(m => {
        let ffff  = msg.replace('[user]', `<@${m.id}>`)
if (m.id != client.user.id && !m.user.bot) m.send(ffff).catch(err => console.log(err))

})
    }
    }
}
