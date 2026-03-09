# Responsive Website (Tailwind CDN)

This repository contains a simple, accessible, **responsive website** with a full-height sticky vertical navigation on desktop and an accessible mobile drawer on small screens.

## Pages
- `index.html` — **Home**
- `risk-score.html` — **Risk Score**
- `risk-factors.html` — **Risk Factors**
- `recommendation.html` — **Recommendation** (page heading: "Recommendations")

## Key Features
- **Layout**: Full-height **sticky vertical nav** on desktop; mobile drawer on small screens.
- **Accessibility**: Semantic landmarks, skip link, high-contrast colours, larger base text, visible focus states, keyboard-trappable mobile drawer (`Esc` closes).
- **Design**: Minimal white UI with **blue accents**; **Roboto** via Google Fonts.
- **Stack**: Tailwind via **CDN** (no build step) + small `script.js` for drawer.
- **No footer** per spec.

## Run Locally
Simply open any HTML file in your browser (double-click). For best results with relative links, use a local server (e.g., VS Code Live Server) or serve via Python:

```bash
# Python 3
python -m http.server 8080
# then visit http://localhost:8080
```

## Deploy to **GitHub Pages**
1. Create a new GitHub repository and add these files.
2. Commit & push to the `main` (or `master`) branch.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set **Branch** to `main` (root `/`). Save.
6. Wait 1–2 minutes; your site will be live at `https://<your-username>.github.io/<repo-name>/`.

_Optional_: If you want a custom domain, add it under **Settings → Pages** and create a CNAME record with your DNS provider.

## Customisation
- To change colours, tweak Tailwind utility classes in the HTML (e.g., `text-blue-700`, `bg-blue-50`).
- To change the font, update the Google Fonts link in the `<head>` and the Tailwind `fontFamily` in the inline `tailwind.config` script.

## Accessibility Notes
- **Skip link** appears when focused to jump to `#main`.
- **Mobile drawer** is keyboard-trapped when open; `Esc` closes it. Backdrop click also closes.
- Navigation uses `aria-current="page"` on the active link.

## License
MIT
