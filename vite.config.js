import { defineConfig } from 'vite';
export default defineConfig(({mode})=>({base: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/',}));
