# Pebbles & Threads

A responsive product website for the Pebbles & Threads Prime Series notebook, built with vanilla HTML, CSS and JavaScript.

Live website: [pebblesandthreads.com](https://pebblesandthreads.com/)

## Run locally

```bash
python3 -m http.server 8080 --directory dist
```

Open `http://localhost:8080`.

## Files

- `index.html` — semantic page structure and product copy
- `styles.css` — responsive visual system and animation
- `script.js` — navigation, reveal, medium demo, edition preview and accordion interactions
- `assets/images/` — supplied Pebbles & Threads product photography
- `research-and-requirements.md` — competitive research and implementation requirements
- `dist/` — production-ready static build used for deployment

The two purchase buttons link directly to their matching Amazon India product listings. GitHub Pages serves the production files from the repository root, with the custom domain retained through `CNAME`.
