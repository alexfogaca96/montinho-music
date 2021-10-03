import * as dotenv from 'dotenv'
import 'reflect-metadata'
import path from 'path'
import { Intents, Interaction, Message } from 'discord.js'
import { Client } from 'discordx'

dotenv.config()

const client = new Client({
  prefix: '!',
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES
  ],
  classes: [
    path.join(__dirname, 'commands', '**/*.{ts,js}'),
    path.join(__dirname, 'events', '**/*.{ts,js}')
  ],
  silent: false
})

client.once('ready', async () => {
  await client.initApplicationCommands({
    guild: { log: true },
    global: { log: true }
  })
  await client.initApplicationPermissions()
  console.log('Bot started')
})

client.on('interactionCreate', (interaction: Interaction) => {
  client.executeInteraction(interaction)
})

client.on('messageCreate', (message: Message) => {
  client.executeCommand(message)
})

client.login(process.env.BOT_TOKEN ?? '')
