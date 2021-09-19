module.exports = {
    //IMPORTANT: If you need help with the installation of Green-bot, you can join our support server here: https://green-bot.app/discord
    prefix: "*",
    // Your discord bot token. https://discord.com/developpers/bots
    token: "..",
    // Your ID
    ownerID: "",
    // Your name/tag
    ownerName: "swicy",
    //The footer of the embeds that the bot will send
    footer: "Hi (ﾉ◕ヮ◕)ﾉ*.✧",
    // The id of the support
    supportID: "803484095627132939",
    // The status of your bot
    game: "que",
    //the color of the embeds
    color: "#3A871F",
    // OPTIONAL: Your top.gg token.
    topgg: "",
    // OPTIONAL: The link of your bot's top.gg page.
    topgg_url: "",
    //the default bot language. fr or en
    defaultLanguage: "en",
    // If dev mod is enabled
    devMode: true,
    // The server where you test the commands
    devServer: "803484095627132939",
    // If you want to log every command,event etc. Usefull for debuging
    logAll: true,
    // If you want to test your configuration before starting the bot
    checkConfig: null,
    // The categories. Put null to enabled to disable a category
    categories: {
        configuration: { enabled: true, name: "Configuration", desc: "Configurar el bot con los comandos de configuración" },
        moderation: { enabled: true, name: "Moderation", desc: "Modere su servidor fácilmente con {botName}" },
        levelling: { enabled: true, name: "Levelling", desc: "Crea un rango en su servidor" },
        utilities: { enabled: true, name: "Utilities", desc: "Some usefull commands", aliases: ["general"] },
        music: { enabled: true, name: "Music", desc: "Listen music with Green-bot" },
        games: { enabled: null, name: "Games", desc: "Have fun with friends using Green-bot" },
        antiraid: { enabled: true, name: "Antiraid", desc: "Protect your server against raiders", aliases: ["protections"] },
        owner: { hide: true, enabled: true, name: "Owner", desc: "Manage your bot with the owner commands" }
    },
    // some usefull links about your bot, if you don't have an information, put null.
    links: {
        support: "https://discord.gg/nrReAmApVJ",
        website: "https://green-bot.app",
        invite: "https://discord.com/oauth2/authorize?client_id=783708073390112830&scope=bot&permissions=8",
        commands: "https://green-bot.app/commands"
    },
    //Database
    database: {
        // The url of your mongodb database. Check mongodb.org
        MongoURL: "mongodb://reymaicer:6PAYaywBdbS53YYI@linadb-shard-00-00.i6z79.mongodb.net:27017/innabot?ssl=true&replicaSet=atlas-ou5f1g-shard-0&authSource=admin&retryWrites=true&w=majority",
        // If you want to cache the database. For big bots
        cached: false,
        delay: 300000 * 4,
    },

}
