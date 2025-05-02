import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '61b797ca7b2a4a83951f7264e76b9abd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Prepa DZ',
  domain: 'cpst.netlify.app',
  author: 'Prepa DZ',

  // open graph metadata (optional)
  description: 'Télécharger gratuitement vos Cours, TD, Sujets des examens : Classe Prépa 2eme année  CP2 sur Prepa dz, cahier dz prepa, 2ème année prépa, prepa enp, examen analyse s1 cpst, programme classe preparatoire algerie, enp, concours ecole polytechnique alger 2023, epst alger, meilleur ecole d ingenieur en algerie, enp alger enp oran enp constantine,esgee, enpo, essa alger essa tlemcen, esti, cpst algérie, classe preparatoire dz',

  // social usernames (optional)
  //twitter: '',
  //github: '',
  //linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  // //  {
  // //     title: 'About',
  // //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  // //   },
  //    {
  //      title: 'Contact',
  //      pageId: 'aece56025bdf421297bbe5d77ebade1a'
  //    }
  //  ]
})
