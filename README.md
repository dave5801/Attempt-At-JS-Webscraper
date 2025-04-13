# Attempt-At-JS-Webscraper

# OSINT Scraper Dashboard
A web-based OSINT tool that scrapes public data from Twitter using Puppeteer and displays it in a Next.js dashboard.

---

## 🌐 Tech Stack
- **Next.js** (frontend + backend API routes)
- **Puppeteer** (for web scraping)
- **TailwindCSS** (for UI styling)

---

## 📁 Project Structure
```
osint-scraper/
├── pages/
│   ├── index.tsx         // Frontend UI
│   └── api/
│       └── scrape.ts     // API endpoint that runs scraper
├── lib/
│   └── puppeteer.ts      // Puppeteer scraping logic
├── styles/
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 📦 Install & Run
```bash
git clone https://github.com/your-username/osint-scraper.git
cd osint-scraper
npm install
npm run dev
```

---

## 🧠 How it works
- User clicks "Scrape Tweets" button on the frontend
- Next.js API route `/api/scrape` triggers Puppeteer
- Puppeteer scrapes tweets from Twitter search
- Results are returned and displayed in the UI

---

## 🔒 Disclaimer
Scraping should only be done in compliance with website terms of service. This project is for educational purposes only.

---