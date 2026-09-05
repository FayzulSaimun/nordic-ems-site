# NORDIC-EMS

A responsive public project site for the Nordic Mobility, Exchange & Networking initiative for intelligent energy management and the Nordic Green Transition.

## Local development

Requires Node.js 22 or later.

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run build
npm run test:sites
```

The production website is emitted to `dist/client`. The extra `dist/server` and `dist/.openai` artifacts preserve the existing local prototype handoff contract.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` deploys every push to `main` and can also be started from the Actions tab. It automatically sets the Vite base path to the repository name, keeping assets correct at `https://OWNER.github.io/REPOSITORY/`.

After pushing the repository to GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. The first successful workflow run provides the live URL in its deployment summary.

For a custom domain or root user/organization Pages site, set `VITE_BASE_PATH=/` in the deployment environment and add the appropriate `CNAME` file.
