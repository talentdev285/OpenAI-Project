

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "get twitter status details https://twitter.com/pwang_szn/status/1626\n\nThis tweet was posted by @pwang_szn on December 9, 2020. It reads: \"don’t be so hard on yourself. you’ve been through a lot and you’re still here :white_heart:\" The tweet has been liked over 6,000 times and has been retweeted 1,100 times.",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

