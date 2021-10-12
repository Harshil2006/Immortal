module.exports = {
    name:"ban",
    description: "It will ban a member!",
    execute(message, args){
        if(message.member.permissions.has('BAN_MEMBERS')){
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                member.ban();
            message.channel.send("User has been banned!");
            }else{
                message.channel.send('You could not ban a member');
            }
        }else{
            message.channel.send('You dont have the required permissions');
        }     
    }
}