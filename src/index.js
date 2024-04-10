const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
let presets = {};

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {

    if (message.content.startsWith('drac!send')) {
        const args = message.content.slice('d!send'.length).trim().split(/ +/);
        const preset = args[0];
        const msg = args.slice(1).join(' ');

        if (preset in presets) {
            const { guildId, channelId } = presets[preset];
            const guild = client.guilds.cache.get(guildId);
            if (!guild) return console.error(`Guild ${guildId} not found.`);
    
            const channel = guild.channels.cache.get(channelId);
            if (!channel) return console.error(`Channel ${channelId} not found in guild ${guildId}.`);
    
            try {
                await channel.send(msg);
                message.react('✅');
            } catch (error) {
                console.error(`Error sending message: ${error}`);
            }
        } else {
            console.error(`Preset '${preset}' not found.`);
        }
    }

    if (message.content.startsWith('d!savepreset')) {
        const args = message.content.slice('d!savepreset'.length).trim().split(/ +/);
        const preset = args[0];
        const guildId = args[1];
        const channelId = args[2];

        presets[preset] = { guildId, channelId };
        console.log(`Preset '${preset}' saved with guild ID ${guildId} and channel ID ${channelId}.`);
        message.react('✅');
    }

    if (message.content.startsWith('d!delpreset')) {
        const preset = message.content.slice('d!delpreset'.length).trim();
        if (preset in presets) {
            delete presets[preset];
            console.log(`Preset '${preset}' deleted.`);
            message.react('✅');
        } else {
            console.error(`Preset '${preset}' not found.`);
        }
    }

    if (message.content === 'd!info') {
        client.guilds.cache.forEach(guild => {
            const perms = guild.members.me.permissions.toArray();
            let permsFormatted = perms.join(', ');
            message.channel.send(`💠 **${guild.name}, ${guild.id}**:\n\`\`\`\n${permsFormatted}\n\`\`\``);
        });
    }

    if (message.content.startsWith('d!roles')) {
        const args = message.content.slice('drac!roles'.length).trim().split(/ +/);
        const guildId = args[0];

        const guild = client.guilds.cache.get(guildId);
        if (!guild) return console.error(`Guild ${guildId} not found.`);
        
        const roles = guild.roles.cache.map(role => role.name).join(', ');
        message.channel.send(`Roles in ${guild.name}:\n\`\`\`\n${roles}\`\`\``);
    }

    if (message.content.startsWith('d!roleinfo')) {
        const args = message.content.slice('d!roleinfo'.length).trim().split(/ +/);
        const guildId = args[0];
        const roleSpecifier = args.slice(1).join(' ');
        const guild = client.guilds.cache.get(guildId);
        if (!guild) return console.error(`Guild ${guildId} not found.`);

        const role = guild.roles.cache.find(role => role.name === roleSpecifier || role.id === roleSpecifier);
        if (!role) return console.error(`Role ${roleSpecifier} not found in guild ${guildId}.`);

        message.channel.send(`Role Info for **${role.name}** in **${guild.name}**:\n\`\`\`\nID: ${role.id}\nColor: ${role.hexColor}\nPosition: ${role.position}\nMembers: ${role.members.size}\nPermissions: ${role.permissions.toArray().join(', ')}\n\`\`\``);
    }

    if (message.content.startsWith('d!channels')) {
        const args = message.content.slice('drac!channels'.length).trim().split(/ +/);
        const guildId = args[0];
        const guild = client.guilds.cache.get(guildId);
        if (!guild) return console.error(`Guild ${guildId} not found.`);
        
        const textChannels = guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT');
        textChannels.forEach(channel => {
            const channelInfo = `Channel ${channel.name} = ${channel.name}, ${channel.id}\nChannel topic = ${channel.topic ? channel.topic : 'None'}`;
            message.channel.send(`\n\`\`\`\n${channelInfo}\`\`\``);
        });
    }

    if (message.content === 'd!presets') {
        let presetsList = Object.keys(presets).map(preset => `**${preset}**: ${presets[preset].guildId}, ${presets[preset].channelId}`).join('\n');
        message.channel.send(`Presets:\n${presetsList}`);
    }

    if (message.content.startsWith('d!searchchannel')) {
        const args = message.content.slice('drac!searchchannel'.length).trim().split(/ +/);
        const name = args[0];
        const guildId = args[1];
        const guild = client.guilds.cache.get(guildId);
        if (!guild) return console.error(`Guild ${guildId} not found.`);
        
        const matchingChannels = guild.channels.cache.filter(channel => channel.name.includes(name) && channel.type === 'GUILD_TEXT');
        matchingChannels.forEach(channel => {
            const channelInfo = `Channel ${channel.name} = ${channel.name}, ${channel.id}\nChannel topic = ${channel.topic ? channel.topic : 'None'}`;
            message.channel.send(`\n\`\`\`\n${channelInfo}\`\`\``);
        });
    }

    if (message.content === 'd!help') {
        let helpMessage = '**Available commands:**\n\n';
        helpMessage += '\`d!send <preset> <message>\`: Send a message using a preset.\n';
        helpMessage += '\`d!savepreset <preset> <guildId> <channelId>\`: Save a preset for sending messages.\n';
        helpMessage += '\`d!delpreset <preset>\`: Delete a saved preset.\n';
        helpMessage += '\`d!info\`: Display information about the guilds the bot is in.\n';
        helpMessage += '\`d!roles <guildId>\`: List roles in a guild.\n';
        helpMessage += '\`d!roleinfo <guildId> <roleSpecifier>\`: Display information about a role.\n';
        helpMessage += '\`d!channels <guildId>\`: List text channels in a guild.\n';
        helpMessage += '\`d!searchchannel <name> <guildId>\`: Search for channels by name.\n';
        helpMessage += '\`d!presets\`: List saved presets.\n';
        helpMessage += '\`d!help\`: Display this help message.\n';

        message.channel.send(helpMessage);
    }
});

client.login('PUT_YOUR_TOKEN_HERE')
