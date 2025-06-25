export default async function handler(request, response) {
  const bots = [
    "googlebot", "yahoo! slurp", "bingbot", "yandex", "baiduspider",
    "facebookexternalhit", "twitterbot", "rogerbot", "linkedinbot", "embedly",
    "quora link preview", "showyoubot", "outbrain", "pinterest/0.",
    "developers.google.com/+/web/snippet", "slackbot", "vkshare",
    "w3c_validator", "redditbot", "applebot", "whatsapp", "flipboard", "tumblr",
    "bitlybot", "skypeuripreview", "nuzzel", "discordbot", "google page speed",
    "qwantify", "pinterestbot", "bitrix link preview", "xing-contenttabreceiver",
    "chrome-lighthouse", "telegrambot", "OAI-SearchBot", "ChatGPT", "GPTBot",
    "Perplexity", "ClaudeBot", "Amazonbot", "integration-test"
  ];

  const userAgent = request.headers['user-agent']?.toLowerCase() || '';
  const isBot = bots.some(bot => userAgent.includes(bot));
  if (!isBot) return response.status(404).end();

  console.info('Bot detected:', userAgent);

  const { searchParams } = new URL(request.url, `http://${request.headers.host}`);
  const path = searchParams.get('path') || '/';

  const targetUrl = `https://service.prerender.io/https://www.masem.at${path}`;

  const headers = {
    'X-Prerender-Token': 'Nw2V48rcSh7oubSszKPk',
    'User-Agent': userAgent
  };

  try {
    const fetchResponse = await fetch(targetUrl, { headers });
    const html = await fetchResponse.text();
    console.log("prerender response status: ", fetchResponse.status);
    console.log("prerender response html: ", html);
    return response.status(fetchResponse.status).send(html);
  } catch (err) {
    console.error('Prerender error:', err);
    return response.status(500).send("Prerender error");
  }
}
