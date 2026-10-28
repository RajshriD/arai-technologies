# AR AI Technologies website

Responsive static website for AR AI Technologies, featuring software development, AI solutions, automation, cloud & DevOps, technology consulting and product innovation.

## Files
- `index.html` — page content and structure
- `styles.css` — responsive design, layout, colors, typography and mobile styles
- `script.js` — mobile navigation, copyright year and demo contact form behavior
- `favicon.svg` — AR-inspired browser icon

## Preview locally
Keep all four files in the same folder, then open `index.html` in a modern browser. For a local development server, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Deploy
Upload all files to the same web root (for example `public_html` on cPanel), or deploy the folder to a static hosting provider. Do not upload only `index.html`; the CSS, JavaScript and favicon files must remain alongside it so their relative paths resolve.

## Before launch
1. Replace `YOUR_EMAIL@example.com` in `script.js` with the business enquiry email. The current form is a mailto/demo flow, not a backend form processor.
2. Replace the placeholder contact email text in `index.html`.
3. Connect the domain's DNS to the selected hosting provider and enable HTTPS.
