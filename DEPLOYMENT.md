# Vercel Deployment Guide

## Prerequisites
- Git repository with the project code
- Vercel account (free tier is sufficient)

## Step 1: Push Code to GitHub

```bash
git add .
git commit -m "chore: prepare for Vercel deployment"
git push origin main
```

## Step 2: Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and log in
2. Click "Add New" → "Project"
3. Import your Git repository
4. Vercel will auto-detect Vite configuration

## Step 3: Configure Build Settings

Vercel will auto-detect the following settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

No manual changes needed.

## Step 4: Add Environment Variables

In Vercel Dashboard, go to:
`Project Settings > Environment Variables > Add`

Add these variables (all optional, form works without them):

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_TELEGRAM_BOT_TOKEN` | Telegram bot token for form submissions | No |
| `VITE_TELEGRAM_CHAT_ID` | Telegram chat ID for form submissions | No |
| `VITE_AMOCRM_CLIENT_ID` | AMOCRM integration client ID | No |
| `VITE_AMOCRM_CLIENT_SECRET` | AMOCRM integration client secret | No |
| `VITE_AMOCRM_REDIRECT_URI` | AMOCRM OAuth redirect URI | No |
| `VITE_AMOCRM_SUBDOMAIN` | AMOCRM subdomain | No |
| `VITE_AMOCRM_EMAIL` | Email fallback for AMOCRM | No |

**Important**: Add these to ALL environments (Production, Preview, Development) if you want form submissions to work.

## Step 5: Deploy

Click "Deploy" in Vercel. The deployment will take ~1-2 minutes.

## Step 6: Get Your URL

After deployment:
- **Preview URL**: `otis-partner-landing.vercel.app` (or similar)
- **Custom Domain**: Configure in `Project Settings > Domains` (optional)

## Post-Deployment Checklist

### 1. Test the Form
- Fill out all form fields
- Submit the form
- Check if you receive the submission (if env vars are configured)
- If no env vars: form should show success but log console warnings

### 2. Test Navigation
- Scroll to each section
- Click all navigation links
- Check mobile menu (hamburger menu)

### 3. Test Responsiveness
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
- Test on different viewport sizes:
  - Mobile: 375px, 414px
  - Tablet: 768px, 1024px
  - Desktop: 1440px+

### 4. Check Console
- Open browser DevTools (F12)
- Go to Console tab
- Reload the page
- Ensure no critical errors (warnings are OK)

### 5. Test Animations
- Scroll through the page
- Check section transitions
- Verify hero animations
- Test hover effects on buttons

### 6. SEO Verification
- Check page title in browser tab
- Verify meta description (optional, add meta tags if needed)
- Check `robots.txt` is accessible: `your-domain.com/robots.txt`
- Check `sitemap.xml` is accessible: `your-domain.com/sitemap.xml`

### 7. Performance Check
- Run Lighthouse (Chrome DevTools > Lighthouse)
- Target: Performance Score 95+
- If score is low, check the bundle size report

## Troubleshooting

### Build Fails
- Check Vercel logs for error details
- Ensure `npm run build` runs locally
- Check Node.js version (use 18+)

### Form Submissions Not Working
- Verify environment variables are set in Vercel
- Check browser console for API errors
- Ensure API credentials are correct

### Images Not Loading
- Check file paths in `public/` directory
- Verify build output includes all images

### CSS Issues
- Clear browser cache
- Check Vercel CDN propagation
- Verify build includes CSS bundles

## Next Steps After First Deployment

1. **Set up custom domain** (optional):
   - Buy domain from registrar
   - Add in Vercel Project Settings > Domains
   - Update DNS records as instructed by Vercel

2. **Configure form submissions** (optional):
   - Create Telegram bot and get token
   - Create AMOCRM integration
   - Add credentials to Vercel environment variables

3. **Set up analytics** (optional):
   - Add Google Analytics
   - Add Vercel Analytics (built-in)

4. **SEO optimization** (optional):
   - Add meta tags to index.html
   - Submit sitemap to Google Search Console
   - Add Open Graph tags for social sharing

## Bundle Size Report

After build, Vercel will show bundle sizes:
- **Total JS**: ~350 KB (uncompressed)
- **Total JS gzipped**: ~127 KB
- **Total CSS**: ~25 KB (uncompressed)
- **Total CSS gzipped**: ~7.5 KB

This is excellent for a landing page!

## Support

For Vercel-specific issues:
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Community](https://vercel.com/community)

For project-specific issues:
- Check the README.md in project root
- Review git commit history for changes
