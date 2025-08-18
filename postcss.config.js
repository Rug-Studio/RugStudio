// postcss.config.js
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [tailwindcss, autoprefixer],
}
// This configuration file sets up PostCSS with Tailwind CSS and Autoprefixer.
// It uses ES module syntax for importing the plugins, which is compatible with modern JavaScript environments.
// The Tailwind CSS plugin processes the styles defined in the Tailwind configuration file, while Autoprefixer adds vendor prefixes to CSS rules where necessary for better browser compatibility.
// Ensure that you have both
