import dotenv from "dotenv";
dotenv.config();

import { Client } from 'discord.js';
import pkg from 'axios';
const { get } = pkg;

const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async msg => {
  if (msg.author.bot || !msg.content) return;
  const messageParts = msg.content.split(' ')
  console.log(`[${new Date()}]: ${messageParts}`)
  switch (messageParts[0]) {
    case 'ping':
      msg.reply('Pong!')
      break
    case '!cep':
      msg.channel.send("Here's your address information!")
      const img = await getAddressInformation(messageParts[1])
      msg.channel.send(img)
      break
  }
})

async function getAddressInformation(cep) {
  const res = await get(`https://viacep.com.br/ws/${cep}/json/`)
  console.log(res)
  if (res.status >= 400 || res.data.erro) return 'Your address sucks, nothing was found!'
  const data = res.data
  return `${data.logradouro}, ${data.bairro} (${data.localidade} - ${data.uf})`
}

client.login(process.env.CLIENT_TOKEN)
