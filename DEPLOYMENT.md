# Deployment to Vercel

Quick steps to deploy this Next.js site to Vercel:

- Connect the GitHub repo to Vercel (use the Vercel dashboard).
- Ensure the project framework is detected as Next.js (Vercel will use `@vercel/next`).
- Add any environment variables in the Vercel Project Settings (none detected in repo by scan).
- Build & Output: default Next.js behavior is used — Vercel will run `npm run build`.

Local verification commands:

```bash
npm install
npm run build
npm start   # serves the built app at http://localhost:3000
```

Tips:
- If you have private keys or API tokens, add them in Vercel dashboard as Environment Variables and reference them as `process.env.MY_VAR` in server-side code only.
- Use `vercel env add` or the dashboard to set `Production`/`Preview`/`Development` values.
- If you need custom headers, redirects, or rewrites, update `vercel.json` accordingly.
- To minimize cache uploads, `.vercelignore` already excludes large or sensitive files.

If you'd like, I can add common security headers to `vercel.json` or add redirects now.
