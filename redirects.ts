import { writeFileSync } from "fs";

const urls = [
  "",
  "Daniele-Ricci",
  "Daniele-Ricci-programmatore-full-stack",
  "Daniele-Ricci-full-stack-software-developer",
  "Daniele-Ricci-TypeScript-Node-Nodejs-PostgreSQL-Docker-Solidity"
];

export const closeBundle = () => {
  const lastmod = new Date().toISOString().split("T")[0];

  writeFileSync("dist/.htaccess", [...urls.map(_ => `Redirect 301 /${_} http://www.trinityteam.it/DanieleRicci`), ""].join("\n"));

  writeFileSync(
    "dist/sitemap.xml",
    `\
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.trinityteam.it/DanieleRicci</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>1.0</priority>
  </url>${urls
    .map(
      _ => `\

  <url>
    <loc>https://www.trinityteam.it/${_}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>1.0</priority>
  </url>`
    )
    .join("")}
</urlset>
`
  );

  writeFileSync(
    "dist/robots.txt",
    `\
User-agent: *
Allow: /
Sitemap: http://www.trinityteam.it/sitemap.xml
`
  );
};
