module.exports= {
    name:"invite",
    description: "this is the invite command!",
    execute(message, args){

        if(message.member.permissions.has("MANAGE_CHANNELS")){
            message.channel.send('Here is the Permanent Server invite link: https://discord.gg/fuRqEJGCMc');


        } else{
            message.channel.send('You dont have the required permissions');
        }
        
    }
}