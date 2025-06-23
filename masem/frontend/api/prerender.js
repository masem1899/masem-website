





export default async function handler(request, response) {
    const bots = [
        "googlebot",
        "yahoo! slurp",
        "bingbot",
        "yandex",
        "baiduspider",
        "facebookexternalhit",
        "twitterbot",
        "rogerbot",
        "linkedinbot",
        "embedly",
        "quora link preview",
        "showyoubot",
        "outbrain",
        "pinterest/0.",
        "developers.google.com/+/web/snippet",
        "slackbot",
        "vkshare",
        "w3c_validator",
        "redditbot",
        "applebot",
        "whatsapp",
        "flipboard",
        "tumblr",
        "bitlybot",
        "skypeuripreview",
        "nuzzel",
        "discordbot",
        "google page speed",
        "qwantify",
        "pinterestbot",
        "bitrix link preview",
        "xing-contenttabreceiver",
        "chrome-lighthouse",
        "telegrambot",
        "OAI-SearchBot",
        "ChatGPT",
        "GPTBot",
        "Perplexity",
        "ClaudeBot",
        "Amazonbot",
        "integration-test", // Integration testing
  ];

  const userAgent = request.headers['user-agent']?.toLowerCase() || '';
  const isBot = bots.some(bot => userAgent.includes(bot));

  if (!isBot) {
    return response.status(404).end();
  }

  console.info('Bot: ', userAgent);

  const targetUrl = `https://service.prerender.io${request.url}`;
  const headers = {
    'X-Prerender-Token': 'Nw2V48rcSh7oubSszKPk',
    'User-Agent': userAgent
  };

  try {
    const fetchResponse = await fetch(targetUrl, { headers });
    const html = await fetchResponse.text();
    response.status(fetchResponse.status).send(html);
  } catch(err) {
    console.log('Prerender error: ', err);
    reponse.status(500).send("Prerender error");
  }
}