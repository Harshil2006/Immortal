module.exports= {
    name:"clear",
    description: "clear messages!",
    async execute(message, args){
        if(!args[0]) return message.reply("You must enter the amount of messages to be cleared!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages");
        if(args[0] < 1) return message.reply("You must enter a positive number!");

        await message.channel.messages.fetch({limit: args[0]}).then(message =>{
            message.channel.bulkDelete(messages);
        });
    }
}