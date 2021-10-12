module.exports = {
    name:"kick",
    description: "It will kick a member!",
    execute(message, args){
        if(message.member.permissions.has('KICK_MEMBERS')){
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                member.kick();
            message.channel.send("User has been kicked");
            }else{
                message.channel.send('You could not kick a member');
            }
        }else{
            message.channel.send('You dont have the required permissions');
        }     
    }
}