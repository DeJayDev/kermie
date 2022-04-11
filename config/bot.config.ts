import { Intents, PermissionString, PresenceData } from "discord.js";

export default {
    prefixes: process.env.NODE_ENV === "production" ? ["!"] : ["!!"],
    botName: "kermie",

    version: "1.0.0",
    admins: ["194861788926443520"],

    // If your bot isn't public, or open source, or doesn't have a
    // Support server, feel free to remove the following variables.
    gitHub: "https://github.com/dejaydev/kermie",

    presence: {
        status: "online",
        activities: [
            {
                type: "PLAYING",
                name: "with /help"
            }
        ]
    } as PresenceData,

    hastebin: "https://hst.sh",

    // To replace these colors please make sure you are providing a
    // hexadecimal color.
    colors: {
        primary: "5865F2",
        success: "57F287",
        warning: "FEE75C",
        error: "ED4245"
    },

    // Properly update the following intents list for the bot to
    // Function properly, it currently only listens for guilds
    // And interactions.
    intents: [Intents.FLAGS.GUILDS],

    // If your bot requires any permissions other than the ones below
    // Add them and all commands and interactions will only work if
    // The bot has said permissions in the environment they're run in.
    requiredPermissions: [
        "EMBED_LINKS",
        "SEND_MESSAGES",
        "USE_EXTERNAL_EMOJIS"
    ] as PermissionString[],

    dataDog: {
        apiKey: process.env.DATADOG_API_KEY,
        baseURL: "https://app.datadoghq.com/api/v1/"
    }
};
