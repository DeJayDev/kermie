import { CommandInteraction, GuildChannel } from "discord.js";
import SlashCommand from "../../../../lib/classes/SlashCommand.js";
import BetterClient from "../../../../lib/extensions/BetterClient.js";

export default class Ping extends SlashCommand {
    constructor(client: BetterClient) {
        super("unarchive", client, {
            description: `Unarchive all threads in the given channel (or the whole server)`,
            options: [
                {
                    description: "The channel to unarchive threads from",
                    name: "channel",
                    type: "CHANNEL",
                    required: false
                }
            ],
            guildOnly: true
        });
    }

    override async run(interaction: CommandInteraction) {
        const channel = interaction.options.getChannel("channel") as GuildChannel | undefined;
        
        // If no channel was provided, loop through all channels and unarchive threads
        // If a channel was provided, just unarchive threads from that channel
        await interaction.reply("Will finish implementation laterski")
    }
}
