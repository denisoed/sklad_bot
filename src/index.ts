import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN as string);
const URL = process.env.SITE_URL as string;

const welcomeMessage = `
Привет! 👋 Добро пожаловать на Sklad.

Для начала работы нажмите на кнопку ниже, чтобы открыть веб-приложение и начать исследование!
`;

bot.start((ctx) => {
  ctx.reply(welcomeMessage, Markup.inlineKeyboard([Markup.button.webApp('Открыть склад', URL)]));
});

bot.launch();

console.log('Bot start successfully');

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
