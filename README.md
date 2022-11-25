# Notion-CMS-CPST Website

## About 

It uses Notion as a CMS, fetching content from Notion and then uses [Next.js](https://nextjs.org/).

The site is deployed to [Netlify](http://netlify.com).

TO CHECK The Website click [HERE](https://cpst.neltify.app)
## Features

- Setup only takes a few minutes ([single config file](./site.config.js)) 💪
- Robust support for Notion content via [react-notion-x](https://github.com/NotionX/react-notion-x)
- Next.js / TS / React / Notion
- Excellent page speeds
- Sexy LQIP image previews
- Embedded GitHub comments
- Automatic open graph images
- Automatic pretty URLs
- Automatic table of contents
- Full support for dark mode
- Quick search via CMD+P just like in Notion
- Responsive for desktop / tablet / mobile
- Optimized for Next.js and Vercel

## Setup

**All config is defined in [site.config.js](./site.config.js).**

1. Fork / clone this repo
2. Change a few values in [site.config.js](./site.config.js)
3. `npm install`
4. `npm run dev` to test locally
5. `npm run deploy` to deploy to netlify 

I tried to make configuration as easy as possible.

All you really need to do to get started is edit `rootNotionPageId`. It defaults to rendering my site's public notion page [78fc5a4b88d74b0e824e29407e9f1ec1](https://notion.so/78fc5a4b88d74b0e824e29407e9f1ec1).

You'll want to make your root Notion page **public** and then copy the link to your clipboard. Then extract the last part of the URL that looks like `d1b5dcf8b9ff425b8aef5ce6f0730202`, which is your page's Notion iD.

In order to find your Notion workspace ID (optional), just load any of your site's pages into your browser and open up the developer console. There will be a global variable that you can access called `block` which is the Notion data for the current page, and you just have to type `block.space_id` which will print out your page's workspace ID.

I recommend setting up a collection on your home page (optional; I use an inline gallery [here](https://notion.so/78fc5a4b88d74b0e824e29407e9f1ec1)) that contains all of your articles / projects / content. There are no structural constraints on your Notion workspace, however, so feel free to add content as you would normally in Notion. There are a few parts of the code with logic to only show comments on blog post pages (collection item detail pages).

## URL Paths

The app defaults to slightly different pathnames in dev and prod (though pasting any dev pathname into prod will work and vice-versa).

In development, it will use `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202` which is a slugified version of the page's title suffixed with its Notion ID. I've found that it's really useful to always have the Notion Page ID front and center during local development.

In production, it will use `/nextjs-notion-blog` which is a bit nicer as it gets rid of the extra ID clutter.

The mapping of Notion ID to slugified page titles is done automatically for you as part of the build process. Just keep in mind that if you plan on changing page titles over time, you probably want to make sure old links will still work, and we don't currently provide a solution for detecting old links aside from Next.js built-in [support for redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects).

See [mapPageUrl](./lib/map-page-url.ts) and [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts) from for more details.

NOTE: if you have multiple pages in your workspace with the same slugified name, the app will throw an error letting you know that there are duplicate URL pathnames.

## Theming

All CSS styles that customize Notion content are located in [styles/notion.css](./styles/notion.css).

They mainly target global CSS classes exported by react-notion-x [styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css).

It should be pretty easy to customize most styling-related things, especially with local development and hot reload.


## License

Original Repositorie -> [Travis Fischer](https://github.com/transitive-bullshit/nextjs-notion-starter-kit)

Support my open source work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
