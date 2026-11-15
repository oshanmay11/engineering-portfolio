# Oshan Mayadunne — Engineering Portfolio

A futuristic, responsive React website for my work in robotics, autonomous systems, and industrial automation.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To verify the production build: `npm run build`.

## Customize before publishing

1. Replace `oshanmay11` in `src/main.jsx` with your GitHub username.
2. Check the LinkedIn URL and email in `CONFIG` at the top of `src/main.jsx`.
3. Put a public-safe PDF resume at `public/resume.pdf` (the current file is a placeholder; replace it before publishing).
4. Add your own screenshots, videos, diagrams, and repository links once they are ready. Industrial examples should not reveal proprietary code or data.
5. Update project descriptions as ongoing work progresses.

## Publish with GitHub Pages

1. Create a public GitHub repository called `engineering-portfolio` (or another name).
2. Push all files to the repository's `main` branch.
3. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. The workflow `.github/workflows/deploy.yml` builds and deploys the site on every push to `main`.
5. Your site URL will be `https://oshanmay11.github.io/engineering-portfolio/` (substitute the actual repository name).

The Vite base path is computed from `GITHUB_REPOSITORY` in the GitHub Actions workflow, so assets work in project repositories.

## License / privacy

Only publish your own content and assets. Do not commit confidential industrial code, internal photographs, customer data, or sensitive documents.
