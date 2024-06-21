import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN as string);
const URL = process.env.BOT_URL as string;

const welcomeMessage = `
Добро пожаловать на Sklad!

Здесь вы можете легко и эффективно управлять своими товарами.
`;

bot.start((ctx) => {
  ctx.reply(
		welcomeMessage,
		Markup.inlineKeyboard([Markup.button.webApp('Открыть склад', URL)]),
	)
});

bot.launch();

console.log('Bot start successfully');

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
