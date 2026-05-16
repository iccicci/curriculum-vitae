import { copyFileSync, writeFileSync } from "fs";

export const closeBundle = () => {
  const lastmod = new Date().toISOString().split("T")[0];

  copyFileSync("google2b74f36928440823.html", "dist/google2b74f36928440823.html");

  writeFileSync(
    "dist/.htaccess",
    `\
RewriteEngine On

RewriteRule ^favicon\\.ico$ /DanieleRicci.jpg [L]

RewriteRule ^index\\.html$ - [L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^ /index.html [L]
`
  );

  writeFileSync(
    "dist/sitemap.xml",
    `\
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.trinityteam.it/DanieleRicci</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>1.0</priority>
  </url>
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
