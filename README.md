# Waytime - Luxury Travel Website

A modern, responsive website for Guangzhou Tushiguang Tickets Co., Ltd (Waytime), showcasing premium luxury travel services including private custom tours, luxury hotel bookings, business/first class flights, and private jet charters.

## 🌟 Features

- **Bilingual Support**: Automatic language detection with Chinese and English support
- **Responsive Design**: Optimized for all devices and screen sizes
- **Luxury Aesthetics**: Premium design with elegant animations and transitions
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Modern Stack**: Built with SvelteKit, TypeScript, and Tailwind CSS

## 🚀 Technology Stack

- **Framework**: SvelteKit 2.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **Build Tool**: Vite 5.x
- **Package Manager**: PNPM 8.x
- **Node.js**: 18.x or later

## 📋 Prerequisites

- Node.js 18.x or later
- PNPM 8.x or later

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd waytime.vip
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
waytime.vip/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable components
│   │   ├── i18n/          # Internationalization
│   │   ├── stores/        # Svelte stores
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   ├── routes/            # SvelteKit routes
│   │   ├── +layout.svelte # Main layout
│   │   ├── +page.svelte   # Homepage
│   │   ├── about/         # About page
│   │   ├── services/      # Services page
│   │   └── contact/       # Contact page
│   ├── app.html           # HTML template
│   └── app.css            # Global styles
├── static/                # Static assets
├── package.json           # Dependencies and scripts
├── svelte.config.js       # SvelteKit configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Design System

### Colors

- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Gold**: Luxury accent (#f59e0b to #d97706)
- **Luxury**: Neutral grays (#f8fafc to #0f172a)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components

- Custom button styles with hover effects
- Card components with shadows and animations
- Responsive grid layouts
- Gradient backgrounds and text effects

## 🌐 Internationalization

The website supports automatic language detection:

- **Chinese (zh)**: For users in Chinese-speaking regions
- **English (en)**: Default for all other regions

Language switching is available in the header navigation.

## 📱 Pages

### Homepage (`/`)

- Hero section with compelling value proposition
- Services overview with interactive cards
- About preview section
- Call-to-action sections

### Services (`/services`)

- Detailed service descriptions
- Feature highlights for each service
- Interactive elements and animations

### About (`/about`)

- Company story and mission
- Core values and principles
- Company information and statistics
- Trust-building content

### Contact (`/contact`)

- Contact information with clickable actions
- Interactive contact form
- FAQ section
- Business hours and location details

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Static Site Deployment

The project is configured for static site deployment with the `@sveltejs/adapter-static` adapter.

## 🔧 Development Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Type check the project
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Images**: Optimized and responsive

## 🔒 Security

- Content Security Policy (CSP) headers
- XSS protection
- Secure form handling
- HTTPS enforcement

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is proprietary software for Guangzhou Tushiguang Tickets Co., Ltd.

## 📞 Contact

- **Company**: Guangzhou Tushiguang Tickets Co., Ltd
- **Phone**: +86 132 8444 4493
- **Email**: yolo20230214@gmail.com
- **Website**: waytime.vip
- **Address**: Room 402, Unit A275, Building 6, No. 3 Xintang Street, Tianhe District, Guangzhou City

---

Built with ❤️ using modern web technologies for an exceptional luxury travel experience.

## ☁️ Vercel 部署指南 | Deploy to Vercel

### 中文说明

1. **注册/登录 Vercel**
   - 访问 [vercel.com](https://vercel.com/) 注册或登录账号。

2. **导入项目**
   - 点击 "New Project"，选择你的 GitHub/GitLab/Bitbucket 账号，导入本仓库。

3. **配置项目**
   - Framework Preset 选择 `SvelteKit`。
   - Build Command 保持默认（`pnpm build`）。
   - Output Directory 保持默认（`.svelte-kit/output`，Vercel 会自动识别静态导出）。
   - Root Directory 选择项目根目录（即包含 `package.json` 的目录）。
   - 如有自定义环境变量，可在 "Environment Variables" 添加。

4. **部署**
   - 点击 "Deploy"，等待构建和部署完成。
   - 部署成功后可通过 Vercel 提供的预览域名访问。

5. **自定义域名（可选）**
   - 在 Vercel 项目设置中添加自定义域名（如 `waytime.vip`），并按提示配置 DNS。

6. **静态站点说明**
   - 本项目已配置 `@sveltejs/adapter-static`，适合 Vercel 静态托管。

### English Instructions

1. **Sign up / Log in to Vercel**
   - Go to [vercel.com](https://vercel.com/) and sign up or log in.

2. **Import Project**
   - Click "New Project", select your GitHub/GitLab/Bitbucket account, and import this repository.

3. **Configure Project**
   - Set Framework Preset to `SvelteKit`.
   - Keep Build Command as default (`pnpm build`).
   - Output Directory: leave as default (`.svelte-kit/output`, Vercel will auto-detect static export).
   - Root Directory: select the project root (where `package.json` is located).
   - If you have custom environment variables, add them in "Environment Variables".

4. **Deploy**
   - Click "Deploy" and wait for the build and deployment to finish.
   - After deployment, you can access your site via the Vercel preview domain.

5. **Custom Domain (Optional)**
   - Add your custom domain (e.g., `waytime.vip`) in Vercel project settings and follow the DNS instructions.

6. **Static Site Note**
   - This project uses `@sveltejs/adapter-static` and is suitable for Vercel static hosting.
