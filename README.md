# 🔍 SERP Snippet Preview Tool

A simple and responsive web tool to preview how your page's **meta title** and **meta description** will appear in Google search results — for both **desktop** and **mobile** views. Great for SEO professionals, content marketers, and developers optimizing content for search visibility.

![SERP Snippet Preview Tool Screenshot](https://github.com/ali-shakeel-dev/serp-snippet-preview-tool/assets/your-screenshot.png)

---

## 🚀 Features

- ✍️ **Real-time preview** for title and meta description
- 💻 **Desktop & Mobile** previews side by side
- 📏 **Character and pixel count** display
- ✂️ **Smart truncation** of meta title/description based on pixel width
- 📱 **Mobile snippet logic** with two-line ellipsis support
- ❤️ **Emoji feedback rating** with localStorage memory
- ⚡ **Responsive design** using TailwindCSS

---

## 🛠️ Built With

- HTML
- CSS (TailwindCSS CDN)
- JavaScript (Vanilla)
- Canvas API for measuring pixel width

---

## 🧠 How It Works

1. Users can **type in meta title and description**.
2. Title/description preview updates **live** for desktop and mobile layouts.
3. The **pixel width** is calculated for each text using `CanvasRenderingContext2D.measureText()`.
4. If the title/description exceeds optimal lengths, it shows how it will appear truncated in real-world SERPs.
5. Users can **rate the tool using emoji feedback** — the rating is stored in `localStorage` and shown on revisit.

---

## 📦 Usage

Clone this repo:

```bash
git clone https://github.com/ali-shakeel-dev/serp-snippet-preview-tool.git
cd serp-snippet-preview-tool
```

Open `index.html` in your browser to start using the tool — no build setup needed!

---

## 🧩 Upcoming Features

* 🔄 **Live URL Fetching**: Preview your actual webpage's title/description by entering a URL (requires backend).
* 🎨 **Dark mode toggle**
* 📤 **Export as image/snippet** for sharing previews
* 📝 **Auto SEO Suggestions** for improving your title and description

---

## 🤝 Contributing

Feel free to fork the repo and submit pull requests. Suggestions and feature requests are welcome via [Issues](https://github.com/ali-shakeel-dev/serp-snippet-preview-tool/issues).

---

## 👨‍💻 Author

**Muhammad Ali Shakeel**
[🔗 LinkedIn](https://www.linkedin.com/in/muhammad-ali-shakeel/)
[💻 GitHub](https://github.com/ali-shakeel-dev)