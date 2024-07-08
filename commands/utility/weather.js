const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Что по погоде'),
	async execute(interaction) {
		let weather = ''
		await fetch('http://api.openweathermap.org/data/2.5/find?q=nizhniy&units=metric&lang=ru&appid=5f66aa2b29ea594b4ba5c6a69978a90c').then((res) => res.json()).then((data) => {
			weather = data.list.forEach(e => {
				interaction.reply('Привет пёс, а погодка по Нижнему такая: ' + e.name + ' ' + e.main.temp);
			});
		});
		// console.log(weather)
		// await interaction.reply('Привет пёс, а погодка по Нижнему такая: ' + weather);
	},
};