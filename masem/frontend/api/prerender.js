import { BOTS } from "./bots";
import { pool, pgPlaceholders } from './v1/_neon.js';






async function botlog(userAgent, targetUrl) {
  const query = {
    text: "INSERT INTO botlogs (project, userAgent, targetUrl) VALUES ($1, $2, $3)",
    values: ["masem.at",userAgent,targetUrl]
  };

  try {
    const res = await pool.query(query);
  } catch(err) {
    console.log("error inserting bot log: ", err);
  }
}


export default async function handler(request, response) {
  // const bots = [
  //   "googlebot", "yahoo! slurp", "bingbot", "yandex", "baiduspider",
  //   "facebookexternalhit", "twitterbot", "rogerbot", "linkedinbot", "embedly",
  //   "quora link preview", "showyoubot", "outbrain", "pinterest/0.",
  //   "developers.google.com/+/web/snippet", "slackbot", "vkshare",
  //   "w3c_validator", "redditbot", "applebot", "whatsapp", "flipboard", "tumblr",
  //   "bitlybot", "skypeuripreview", "nuzzel", "discordbot", "google page speed",
  //   "qwantify", "pinterestbot", "bitrix link preview", "xing-contenttabreceiver",
  //   "chrome-lighthouse", "telegrambot", "OAI-SearchBot", "ChatGPT", "GPTBot",
  //   "Perplexity", "ClaudeBot", "Amazonbot", "integration-test"
  // ];

  const userAgent = request.headers['user-agent']?.toLowerCase() || '';
  const isBot = BOTS.some(bot => userAgent.includes(bot));
  if (!isBot) return response.status(404).end();

  console.info('Bot detected:', userAgent);
  
  const { searchParams } = new URL(request.url, `http://${request.headers.host}`);
  const rawPath = searchParams.get('path') || '/';
  console.log("requested:", rawPath);
  const safePath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  
  const targetUrl = `https://service.prerender.io/https://masem.at${safePath}`;
  console.log("request to prerender:", targetUrl);
  
  await botlog(userAgent, targetUrl);
  
  const headers = {
    'X-Prerender-Token': 'Nw2V48rcSh7oubSszKPk',
    'User-Agent': userAgent
  };

  try {
    const fetchResponse = await fetch(targetUrl, { headers, signal: AbortSignal.timeout(8000) });
    const html = await fetchResponse.text();

    console.log("prerender response status: ", fetchResponse.status);
    console.log("prerender response html: ", html);

    if (fetchResponse.ok && html.trim().length > 0) {
      return response.status(200).send(html);
    }

    throw new Error('Empty or invalid prerender response');
  } catch (err) {
    console.error('Prerender error or timeout:', err);

    // Minimal static fallback HTML
    const fallbackHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>masem.at</title>
          <meta name="robots" content="noindex,nofollow">
        </head>
        <body>
          <h1>masem.at</h1>
          <p>Fallback content for bots.</p>
        </body>
      </html>
    `;
    console.log("send fallback html:", fallbackHtml);
    return response.status(200).send(fallbackHtml);
  }
}
