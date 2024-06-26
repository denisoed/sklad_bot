import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN as string);

function createWelcomeMessage(ctx: any) {
  return (
    `Привет <b>${ctx.from.first_name || ''} ${ctx.from.last_name || ''}</b> 👋 \n\n` +
    'Мы рады, что вы присоединились к нам. Теперь управление вашими товарами и продажами станет проще и удобнее.\n\n' +
    'Если у вас возникнут вопросы или потребуется помощь, вступайте в сообщество, там вы всегда сможете получить ответы.\n\n' +
    'Удачи и хороших продаж!'
  );
}

bot.start((ctx) => {
  ctx.replyWithHTML(
    createWelcomeMessage(ctx),
    Markup.inlineKeyboard([
      [Markup.button.webApp('Открыть склад', 'https://sklad.cfd/#/')],
      [Markup.button.url('Вступить в сообщество', 'https://t.me/sklad_community')],
    ]),
  );
});

bot.launch();

console.log('Bot start successfully');

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
