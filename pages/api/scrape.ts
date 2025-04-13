// osint-scraper/pages/api/scrape.ts

import type { NextApiRequest, NextApiResponse } from "next";
import scrapeTweets from "../../lib/puppeteer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.q?.toString() || "osint";
  const results = await scrapeTweets(query);
  res.status(200).json({ results });
}