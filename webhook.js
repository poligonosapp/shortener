// consume @slack/webhook

const { IncomingWebhook } = require('@slack/webhook');

// Read a url from the environment variables
const url = process.env.SLACK_WEBHOOK_URL;

const { nanoid } = require('nanoid');

model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

const Heroku = require('heroku-client');

const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })

// GET requests
heroku.get('/apps').then(apps => {
    // do something with apps

// Initialize
const webhook = new IncomingWebhook(url);

  });

