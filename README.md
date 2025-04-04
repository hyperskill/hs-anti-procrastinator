# Anti-TikTok Chrome Extension

A Chrome extension that helps fight procrastination by redirecting users from entertainment sites to the Hyperskill learning platform.

## Features

- Blocks entertainment sites (TikTok, YouTube Shorts, Instagram Reels, etc.)
- Customizable list of blocked sites
- Enable/disable blocking functionality
- Redirects to Hyperskill for learning

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/anti-tiktok-hs-chrome-plugin.git
```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode"

4. Click "Load unpacked"

5. Select the project folder

## Usage

1. Click the extension icon in Chrome's toolbar
2. Use the toggle switch to enable/disable blocking
3. Add or remove sites from the blocklist
4. When visiting a blocked site, an overlay will appear suggesting to go to Hyperskill

## Development

### Project Structure

```
anti-tiktok-hs-chrome-plugin/
│
├── manifest.json
├── background.js
├── content.js
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── blocklist.json
└── README.md
```

### Technologies

- JavaScript (ES2024+)
- Chrome Extension Manifest V3
- Chrome Storage API
- Chrome Tabs API

## License

MIT
