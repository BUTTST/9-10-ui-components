/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [require('rehype-highlight'), require('rehype-slug')],
  },
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: false,
  },
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages uses a subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/design-to-code-hub' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/design-to-code-hub/' : '',
}

module.exports = withMDX(nextConfig)