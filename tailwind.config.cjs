/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/!(tailwind).{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
  },
}
