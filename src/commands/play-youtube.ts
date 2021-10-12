import { Discord, SimpleCommand, SimpleCommandMessage, SimpleCommandOption } from 'discordx'

@Discord()
class PlayYoutubeCommand {
  @SimpleCommand('pog', { aliases: ['p', 'play'] })
  playYoutube(command: SimpleCommandMessage) {
    if (!command.argString) {
      return command.message.reply(
        `Acho que você esqueceu de mandar o parâmetro do comando 🤔
        '!pog rick roll'
        '!pog https://www.youtube.com/watch?v=dQw4w9WgXcQ'`
      )
    }
    console.log(`Arguments: ${command.argString}`)
    return command.message.reply(`Funcionalidade ainda não implementada... 😥`)
  }
}
