module.exports= {
    name:"command",
    description: "Embed!!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Test Embed 2')
        .setDescription('This is the 2nd test embed!')
        .setImage('https://techbeacon.scdn7.secure.raxcdn.com/sites/default/files/styles/article_hero_image/public/field/image/testing-trends-world-quality-report.jpg?itok=vUyONZsj')
        .setFooter('Hope this worked too!')

        message.channel.send(newEmbed);
    }
}