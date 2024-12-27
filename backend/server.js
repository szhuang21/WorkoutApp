const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
const puppeteer = require("puppeteer");

app.use(express.json());
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from the Node.js backend!" });
});

// scrapes an instagram link for the description
app.post("/api/scrape", async (req, res) => {
  console.log("hit /api/scrape");
  const { link } = req.body;

  if (!link || !link.startsWith("https://www.instagram.com/")) {
    return res.status(400).json({ error: "Invalid Instagram link" });
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link, { waitUntil: "networkidle2" });

    const description = await page.evaluate(() => {
      const metaDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      return metaDescription
        ? metaDescription.content
        : "No description available";
    });

    await browser.close();
    res.json({ description });
  } catch (error) {
    console.error("Error scraping data:", error);
    res.status(500).json({ error: "Failed to scrape Instagram link" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
