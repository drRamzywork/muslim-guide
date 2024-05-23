const fs = require("fs");
const path = require("path");
const https = require("https");

const apiURL = "https://iiacademy.net/api/languages";
const outputDir = path.join(process.cwd(), "public/locales");
const outputPath = path.join(outputDir, "allLanguages.json");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

https
  .get(apiURL, (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      try {
        const languages = JSON.parse(data);
        const locales = Object.entries(languages.data).map(
          ([code, language]) => code
        );

        fs.writeFileSync(outputPath, JSON.stringify(locales), "utf-8");
        console.log("Locales have been updated.");
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
