module.exports= {
    name:"mute",
    description: "This will mute the member!",
    execute(message, args){

        if(message.member.permissions.has('MANAGE_MESSAGES')){
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if(member){

            }else{
                message.channel.send('Cant find the member!');

            }

        } else{
            message.channel.send('You dont have the required permissions');
        }
        
    }
}