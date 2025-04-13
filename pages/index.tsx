// osint-scraper/pages/index.tsx

import { useState } from "react";

export default function Home() {
  const [tweets, setTweets] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleScrape = async () => {
    setLoading(true);
    const res = await fetch("/api/scrape?q=osint");
    const data = await res.json();
    setTweets(data.results);
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">OSINT Twitter Scraper</h1>
      <button
        onClick={handleScrape}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Scraping..." : "Scrape Tweets"}
      </button>
      <ul className="mt-6 space-y-2">
        {tweets.map((tweet, idx) => (
          <li key={idx} className="border p-2 rounded bg-gray-100">{tweet}</li>
        ))}
      </ul>
    </main>
  );
}