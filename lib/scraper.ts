import axios from "axios";
import * as cheerio from 'cheerio';
import { error } from "console";

export async function scrapeAmazonProduct(url:string) {
  if (!url) {
    return;
  }
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);

  //curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_e2fb9faa-zone-web_unlocker1:i3k4rrdekkfe -k "http://geo.brdtest.com/mygeo.json"
  const port = 22225;
  const sesson_id = 1000000*Math.random() | 0;
  const option = {
    auth:{
      username: `${username}sesson${sesson_id}`,
      password: password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthrized: false,

  }

  try {
    const response = await axios.get(url,option);
    console.log(response.data);
  }
  catch(error:any){
    throw new error('Failed to scrape the product: ${error.message}');
  }

}
