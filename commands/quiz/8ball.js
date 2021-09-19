const Discord = require('discord.js');
const moment = require('moment')
module.exports = {
    name: '8ball',
    description: 'Responde una pregunta.',
    args: true,
    usage: "<question>",
    cat: 'games',
    async execute(message, args) {
        if (!args[0] || !message.content.endsWith("?")) {
            return message.errorMessage(`${message.guild.settings.lang === "fr" ? "Veuillez poser une vraie question." : "Haz una pregunta real."}`);
        }
        const b = {

            "1": { "en": "I'm sure of it.", "fr": "Je suis sur de ça.", "es": "Estoy segura de ello." },
            "2": { "en": "it's definitely safe.", "fr": "c'est définitivement sûr.", "es": "Definitivamente es seguro." },
            "3": { "en": "Yes, definitely.", "fr": "Bien sur que oui !", "es": "Sí definitivamente." },
            "4": { "en": "Better not tell you now", "fr": "mieux vaut ne pas vous le dire maintenant.", "es": "Mejor no decirte ahora" },
            "5": { "en": "Ask again later.", "fr": "ne comptez pas là-dessus.", "es": "Pregunta de nuevo más tarde." },
            "6": { "en": "Don't count on it.", "fr": "Je ne pense pas.", "es": "No cuentes con eso." },
            "7": { "en": "I don't think.", "fr": "Mes sources me disent que non.", "es": "No creo." },
            "8": { "en": "My sources say no.", "fr": "Non.", "es": "Mis fuentes dicen que no." },
            "9": { "en": "No.", "fr": "Les pronostics ne sont pas très bons.", "es": "No."},
            "10": { "en": "Outlook not so good.", "fr": "Mais oui c'est clair.", "es": "Pero sí, está claro." },
        }
        const answerNO = parseInt(Math.floor(Math.random() * 10), 10);
        let x = answerNO + 1
        let num = `${x}`
        const answer = b[num][message.guild.settings.lang];
        return message.reply(`${answer}`);
    },
};