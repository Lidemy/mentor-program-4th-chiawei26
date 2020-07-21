const request = require('request');

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'n4j8mxzm9lbbfjorieaf9zhr7t9zzt',
  },
};

function getTopGamevierwers(error, response, body) {
  if (error) {
    console.log('失敗，錯誤代碼為：', error);
    return;
  }
  const json= JSON.parse(body);
  for (let i = 0; i < json.top.length; i += 1) {
    console.log(`${json.top[i].viewers} ${json.top[i].game.name}`);
  }
}

request(options, getTopGamevierwers);