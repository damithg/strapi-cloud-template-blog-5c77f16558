# 📁 Strapi Schema & Content Setup

This folder contains custom Strapi content types and components for the **BSL Tours** project.

## 🏗️ Overview
- The content is modeled to support destinations, tours, and related blocks like features, images, and essential info.
- All content types are defined via code in `src/api/` and `src/components/`.
- Data can be pulled dynamically from Strapi Cloud or local dev.

---

## 📁 Folder Structure

```
strapi/
├── src/
│   ├── api/
│   │   └── destination/
│   │       └── content-types/
│   │           └── destination/schema.json
│   └── components/
│       ├── content/
│       │   ├── overview-section.json
│       │   ├── feature-section.json
│       │   ├── faq.json
│       │   ├── quote-block.json
│       │   ├── video-block.json
│       │   ├── related-tour.json
│       │   ├── nearby-attraction.json
│       │   └── essential-info.json
│       └── shared/
│           └── gallery-image.json
```

---

## ⚙️ Environment Setup

Use a `.env` file or `appsettings.json` in your .NET project to toggle between **local** and **cloud** Strapi:

### `.NET` → `appsettings.json`
```json
"Strapi": {
  "BaseUrl": "https://your-strapi-project.strapiapp.com/api",
  "ApiToken": "YOUR_API_TOKEN"
}
```

### Local Dev:
```json
"BaseUrl": "http://localhost:1337/api"
```

> ✅ Use DI to inject `HttpClient` with `Authorization: Bearer` header

---

## 🔄 Content Sync
- All changes in this folder are **source of truth**.
- You can delete `.cache`, `.tmp` and run:

```bash
npm run build && npm run develop
```

To force Strapi to reload all content types.

---

## 🧪 Optional Enhancements
- Add `seed.js` for test data
- Auto-import sample entries (like Sigiriya) on boot

---

Let me know if you'd like this auto-synced or versioned into a `strapi-dev` submodule! 🚀
