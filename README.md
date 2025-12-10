This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This project is configured for automatic deployment to Vercel when you push to Git.

### Automatic Deployment Setup

To enable automatic deployment from GitHub to Vercel:

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
   - Sign in or create a Vercel account

2. **Import Your GitHub Repository**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your GitHub repository: `Likith244668/gofittywebsite`
   - Authorize Vercel to access your GitHub account if prompted

3. **Configure Project Settings**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your project

### Automatic Deployments

Once connected, Vercel will automatically:
- ✅ Deploy on every push to the `main` or `master` branch
- ✅ Create preview deployments for pull requests
- ✅ Rebuild on every commit

### Manual Deployment (Alternative)

If you prefer using the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link your project (first time only)
vercel link

# Deploy
vercel --prod
```

### Project Configuration

The project includes a `vercel.json` file with the following settings:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
