This repository powers the CPST Website, using Notion as a CMS and Next.js to build the site. It is deployed on Netlify. The website allows for simple writing of posts by creating pages in Notion.
## Demo
https://cpst.netlify.app/

## Features

- Notion Integration: The website uses Notion API to fetch content and display it on the website. Learn more about Notion Integration HERE
- Easy Configuration: All config is defined in site.config.ts.
- Deployment: The website can be deployed to Vercel with a single command npm run deploy.

## Setup

   - Fork or clone this repository.
   - Update values in site.config.ts
   - Install dependencies by running `npm install`.
   - Test the website locally by running `npm run dev`.
   - Deploy the website to Vercel by running `npm run deploy`.

## Configuration

The primary configuration needed is the rootNotionPageId. To get started, duplicate the default page and use it as a starting point. Make sure the root Notion page is public, copy the link and extract the last part of the URL (which looks like 7875426197cf461698809def95960ebf) and use it as your page's Notion ID.

In order to find your Notion workspace ID (optional), load any of your site's pages into your browser and open up the developer console. There will be a global variable that you can access called block which is the Notion data for the current page. If you enter block.space_id, it will print out your page's workspace ID.

We recommend setting up a collection on the home page that contains all of your articles, projects, and content. However, you can add content in any way you prefer in Notion.
## URL Paths

The app defaults to different URL paths in development and production. In development, it will use /nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202 which is a slugified version of the page's title suffixed with its Notion ID. In production, it will use /nextjs-notion-blog which is cleaner and gets rid of the extra ID clutter.

The mapping of Notion ID to slugified page titles is done automatically as part of the build process. Keep in mind that if you plan on changing page titles over time, you probably want to make sure old links will still work. We don't currently provide a solution for detecting old links aside from Next.js's built-in support for redirects.

You can override the default slug generation on a per-page basis by adding a Slug text property to your database. Any page which has a Slug property will use that as its slug.

NOTE: If you have multiple pages in your workspace with the same slugified name, the app will throw an error letting you know that there are duplicate URL pathnames.
## Deployment

The website is deployed on (Netlify)[netlify.app]
