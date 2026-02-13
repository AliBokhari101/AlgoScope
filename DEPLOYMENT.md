# 🚀 AlgoScope Deployment Guide

This guide covers deploying AlgoScope to various hosting platforms.

---

## 📋 Pre-Deployment Checklist

- ✅ All features implemented and tested
- ✅ Development server runs without errors
- ✅ Dependencies installed correctly
- ✅ Build process verified

---

## 🏗️ Build for Production

Before deploying, create a production build:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⚡

**Why Vercel?**
- Zero configuration for Vite projects
- Automatic HTTPS
- Global CDN
- Free tier available

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd "d:\project\p1\DSA VIS"
   vercel
   ```

3. **Follow prompts:**
   - Set up and deploy? `Y`
   - Which scope? (Select your account)
   - Link to existing project? `N`
   - Project name? `algoscope` (or your choice)
   - Directory? `./`
   - Override settings? `N`

4. **Production deployment:**
   ```bash
   vercel --prod
   ```

Your app will be live at: `https://algoscope.vercel.app` (or similar)

---

### Option 2: Netlify 🎯

**Why Netlify?**
- Simple drag-and-drop deployment
- Continuous deployment from Git
- Free tier with generous limits

**Method 1: Drag and Drop**

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag the `dist` folder to the upload area

4. Done! Your site is live

**Method 2: Netlify CLI**

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Publish directory:** `dist`

---

### Option 3: GitHub Pages 📄

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Update `package.json`**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.js`**
   Add base URL:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/algoscope/', // Replace with your repo name
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Save

Your app will be at: `https://yourusername.github.io/algoscope/`

---

### Option 4: Render 🔧

**Steps:**

1. Push code to GitHub

2. Go to [Render Dashboard](https://dashboard.render.com/)

3. Click **New** → **Static Site**

4. Connect your GitHub repository

5. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

6. Click **Create Static Site**

---

### Option 5: Firebase Hosting 🔥

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```

3. **Initialize**
   ```bash
   firebase init hosting
   ```

4. **Configuration:**
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub deploys: `No` (or Yes if you want)

5. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🔧 Environment Variables

If you add any environment variables in the future:

1. Create `.env` file:
   ```
   VITE_API_URL=your_api_url
   ```

2. Access in code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. Add to hosting platform:
   - **Vercel:** Project Settings → Environment Variables
   - **Netlify:** Site Settings → Environment Variables
   - **Render:** Environment tab

---

## 📊 Performance Optimization

Already implemented:
- ✅ Vite for fast builds
- ✅ Code splitting with React Router
- ✅ Optimized Tailwind CSS
- ✅ Lazy loading with Framer Motion

Additional optimizations:
- Use `npm run build` for production
- Enable compression on hosting platform
- Use CDN for static assets

---

## 🔒 Custom Domain (Optional)

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

### GitHub Pages
1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS with your provider

---

## 📱 Testing Deployment

After deployment, verify:
- ✅ All pages load correctly
- ✅ Routing works (no 404s)
- ✅ Animations are smooth
- ✅ Algorithms execute properly
- ✅ Responsive design on mobile
- ✅ No console errors

---

## 🐛 Troubleshooting

### Issue: 404 on page refresh
**Solution:** Configure hosting for SPA routing

**Vercel:** Auto-configured ✅

**Netlify:** Create `public/_redirects`:
```
/*    /index.html   200
```

**GitHub Pages:** Already configured in build ✅

### Issue: Blank page after deployment
**Solution:** Check base URL in `vite.config.js`

### Issue: Assets not loading
**Solution:** Ensure all paths are relative, not absolute

---

## 🎉 Recommended: Vercel

For the best experience with AlgoScope:
1. Fast deployment
2. Zero configuration
3. Automatic HTTPS
4. Great performance

```bash
npm install -g vercel
vercel
```

---

## 📝 Post-Deployment

After deployment:
1. Update README with live URL
2. Share with the community
3. Gather feedback
4. Iterate and improve

---

## 🌟 Your AlgoScope is Ready!

The application is fully built and ready to deploy. Choose your preferred platform and follow the steps above.

**Quick Deploy:**
```bash
# Vercel (Recommended)
npm install -g vercel
vercel --prod

# Or Netlify
npm install -g netlify-cli
netlify deploy --prod
```

Enjoy your deployed DSA visualizer! 🚀
