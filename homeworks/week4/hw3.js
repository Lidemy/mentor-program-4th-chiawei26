const request = require('request');

const arg = process.argv;
const api_url = 'https://restcountries.eu/rest/v2';

request.get(`${api_url}/name/${arg[2]}`, (error, response, body) => {
  if (error) {
    console.log('找不到喔，錯誤代碼為', error);
    return;
  }
  let datas;
  try {
    datas = JSON.parse(body);
  } catch (error) {
    console.log('不是JSON格式', error);
    return;
  }
  if (response.statusCode >= 200 && response.statusCode < 300) {
    for (let i = 0; i < datas.length; i += 1) {
      console.log('============');
      console.log(`國家 : ${datas[i].name}`);
      console.log(`首都 : ${datas[i].capital}`);
      console.log(`貨幣 : ${datas[i].currencies[0].code}`);
      console.log(`國碼 : ${datas[i].callingCodes}`);
    }
  } else {
    console.log('找不到喔', response.statusCode);
  }
});
