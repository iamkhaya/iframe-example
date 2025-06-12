# Stitch Iframe Test Server

This is a simple Node.js + Express server that serves an HTML file embedding Stitch's payment URL in an iframe. It includes the required `Permissions-Policy` header to enable payments within the iframe.

## 🧱 Project Structure

├── index.html      # HTML page with embedded Stitch payment iframe

├── server.js       # Express server with correct headers

├── package.json    # Node project config

└── README.md       # This file

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

2. Run the server

```bash
node server.js
```

The server will start on http://localhost:8000.

3. Open in Safari

Visit the URL in Safari to test the Stitch payment iframe.

⸻

🔐 Permissions Policy

The server sets the following header to allow payment capabilities in the iframe:
```bash
Permissions-Policy: payment=(self "https://secure.stitch.money")
```

This is required for Stitch payment functionality to work inside an iframe.



🛠 Notes
	•	This server is for local development only.
	•	The iframe uses the allow="payment" attribute.
