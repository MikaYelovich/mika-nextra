# Nextra Theme Docs

A documentation site theme for [Nextra](https://github.com/shuding/nextra).

## 🌐 Live Example

You can view a live example of this theme in action here: [https://nextra.site](https://nextra.site)

## 📦 Installation

To use this theme with your Nextra-based project, follow these steps:

```bash
npx create-next-app@latest my-docs-app -e https://github.com/shuding/nextra
cd my-docs-app
npm install
npm run dev
```

## 🛠 Features

- Clean and minimal documentation UI
- Built-in support for Markdown and MDX
- File-based routing system
- Built-in search, sidebar, and table of contents (ToC)
- Fully responsive and customizable design
- Dark mode support
- SEO friendly

## 📁 Project Structure

A typical project using `nextra-theme-docs` might look like this:

```
my-docs-app/
├── pages/
│   ├── index.mdx
│   └── guide.mdx
├── public/
├── theme.config.js
├── next.config.js
└── package.json
```

## ⚙️ Configuration

You can configure the theme in `theme.config.js`:

```js
export default {
  logo: <span>My Docs</span>,
  project: {
    link: "https://github.com/your-org/your-repo",
  },
  docsRepositoryBase: "https://github.com/your-org/your-repo/blob/main",
  footer: {
    text: "MIT © Your Organization",
  },
};
```

## 📄 Writing Documentation

Write your docs using `.mdx` or `.md` files inside the `pages/` directory. You can include components and customize the layout using MDX syntax.

## 🌍 Deployment

You can deploy your site easily with Vercel:

```bash
vercel
```

Or to any other static hosting solution after exporting with:

```bash
next export
```

## 🤝 Contributing

We welcome contributions! Please open an issue or submit a pull request on [GitHub](https://github.com/shuding/nextra).

## 📜 License

This project is licensed under the MIT License.
