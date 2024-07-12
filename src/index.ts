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
      [Markup.button.webApp('Запустить склад', 'https://sklad.work/#/')],
      [Markup.button.url('Вступить в сообщество', 'https://t.me/sklad_community')],
      [Markup.button.url('Новости', 'https://t.me/sklad_channel')],
    ]),
  );
});

bot.command('login', (ctx) => {
  console.log(ctx);
});

bot.launch();

console.log('Bot start successfully');

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
