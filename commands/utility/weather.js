const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Что по погоде'),
	async execute(interaction) {
		await fetch('https://api.openweathermap.org/data/2.5/weather?q=Nizhny%20Novgorod&lang=ru&appid=5f66aa2b29ea594b4ba5c6a69978a90c')
			.then((resp) => resp.json())
			.then((data) => {
				interaction.reply(`
					> Город ${data.name}
					> Температура ${Math.round(data.main.temp - 273)}
					> На улице ${data.weather[0].description}
				`);
			});
	},
};

// https://api.openweathermap.org/data/2.5/forecast?q=Nizhny%20Novgorod&lang=ru&appid=5f66aa2b29ea594b4ba5c6a69978a90c