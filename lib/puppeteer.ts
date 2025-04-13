// osint-scraper/lib/puppeteer.ts

import puppeteer from "puppeteer";

export default async function scrapeTweets(keyword: string): Promise<string[]> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`https://twitter.com/search?q=${encodeURIComponent(keyword)}&src=typed_query`, { timeout: 60000 });
  await page.waitForTimeout(5000);

  const tweets = await page.evaluate(() => {
    const tweetNodes = document.querySelectorAll("article div[lang]");
    return Array.from(tweetNodes).map((node) => node.textContent || "");
  });

  await browser.close();
  return tweets;
}