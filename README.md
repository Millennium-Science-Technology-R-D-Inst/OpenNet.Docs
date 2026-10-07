# OpenNet Docs

Bilingual documentation for [OpenNet](https://github.com/hoshiizumiya/OpenNet), a Windows download and network management application.

## Run locally

Requirements: Node.js 20 or newer.

    npm install
    npm run docs:dev

Open the local URL shown by VitePress. Build the static site with:

    npm run docs:build

The build output is written to `dist/`. The documentation is written in Simplified Chinese at the site root and in English under `/en-US/`.

## Content

- Getting started, downloads, usage and FAQs
- Windows development and build guide
- Local full-text search and language switcher

Product preview images are loaded from the OpenNet repository's `docs/assets` folder.
