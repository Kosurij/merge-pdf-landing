# Combine PDF Landing

Landing page for online PDF merging tool.

## 🚀 Features

- **Modern design** with light and dark theme support
- **Fully responsive** interface for all devices
- **Fast loading** thanks to optimization
- **SEO optimized** for better ranking

## 🎨 Design

### Color Schemes

#### Light Theme
- Main background: `#ffffff`
- Text: `#0f172a`
- Accent: `#3b82f6`
- Borders: `#e2e8f0`

#### Dark Theme
- Main background: `#0f172a`
- Text: `#f8fafc`
- Accent: `#60a5fa`
- Borders: `#334155`

### Typography
- Main font: `system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- Sizes: from 12px to 36px
- Weights: 400, 500, 600, 700, 800

## 🛠 Technologies

- **Vue 3** with Composition API
- **TypeScript** for typing
- **Vite** for building
- **Vue Router** for routing
- **CSS Variables** for theming
- **Responsive Design** with CSS Grid and Flexbox

## 📱 Responsiveness

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: up to 767px
- **Small Mobile**: up to 479px

## 🚀 Project Setup

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)
The project is optimized for Vercel deployment:

1. **Connect your repository** to Vercel
2. **Automatic deployments** on every push to main branch
3. **Preview deployments** for pull requests
4. **Global CDN** for fast loading worldwide

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy dist/ folder to your hosting service
```

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── AccordionGroup.vue
│   ├── InstallButton.vue
│   └── NavigationBar.vue
├── pages/              # Application pages
│   ├── IndexPage.vue   # Home page
│   ├── WelcomePage.vue # Welcome/Installation guide
│   └── FaqPage.vue     # FAQ
├── composables/        # Composables
│   ├── useConfetti.ts
│   └── useSystemTheme.ts
├── styles/             # Global styles
│   └── global.css
└── assets/             # Static resources
```

## 🎯 Main Pages

### Home Page (`/`)
- Hero section with call to action
- Feature descriptions
- Step-by-step instructions
- Call to action

### Welcome Page (`/welcome`)
- Extension installation guide
- How to pin the extension
- Getting started instructions

### FAQ (`/faq`)
- Frequently asked questions
- Answers to popular questions
- Contact information

## 🌙 Theming

The project supports automatic switching between light and dark themes:

- **Automatic detection** of system theme
- **Manual switching** via button in navigation
- **Saving choice** in localStorage
- **Smooth transitions** between themes

## 📱 Components

### NavigationBar
- Logo and name
- Navigation menu
- Theme toggle
- Mobile menu

### InstallButton
- Call to action button
- Support for different variants (primary/outline)
- Responsive design
- Hover/focus/active states

### AccordionGroup
- Accordion for FAQ
- Open/close animations
- Responsive design
- Support for multiple open items

## 🎨 CSS Variables

The project uses CSS variables for consistent styling:

```css
:root {
  --color-background: #ffffff;
  --color-text-primary: #0f172a;
  --color-accent: #3b82f6;
  --border-radius-lg: 12px;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

## 📊 Performance

- **Lazy loading** for images
- **Optimized SVG** icons
- **Minimal JavaScript** bundle
- **CSS optimizations** for fast rendering

## 🔧 Configuration

### Changing colors
Edit CSS variables in `src/styles/global.css`

### Adding new pages
1. Create component in `src/pages/`
2. Add route in `src/router/index.ts`
3. Update navigation in `NavigationBar.vue`

### Changing content
Main content is located in page components in `src/pages/`

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a branch for new feature
3. Make changes
4. Create Pull Request

## 📞 Support

For questions and suggestions:
- Email: support@mergepdf.com
