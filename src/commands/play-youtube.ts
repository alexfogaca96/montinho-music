import {
  Discord,
  SimpleCommand,
  SimpleCommandMessage,
  SimpleCommandOption,
} from "discordx";

@Discord()
class PlayYoutubeCommand {
  @SimpleCommand("pog", { aliases: ["p", "play"], argSplitter: " " })
  playYoutube(
    @SimpleCommandOption("url") url: string,
    command: SimpleCommandMessage
  ) {
    if (!url) {
      return command.message.reply(`Acho que faltou a url 🤔 ex: '!pog https://www.youtube.com/watch?v=dQw4w9WgXcQ'`);
    }
    return command.message.reply(`Funcionalidade ainda não implementada... 😥`);
  }
}