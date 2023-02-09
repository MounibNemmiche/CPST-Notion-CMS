module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '61b797ca7b2a4a83951f7264e76b9abd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Prepa DZ',
  domain: 'prepadz',
  author: 'Prepa DZ',

  // open graph metadata (optional)
  description: 'Télécharger gratuitement vos Cours, TD, Sujets des examens : Classe Prépa 2eme année  CP2 sur Prepa dz, cahier dz prepa, 2ème année prépa, prepa enp, examen analyse s1 cpst, programme classe preparatoire algerie, enp, concours ecole polytechnique alger 2023, epst alger, meilleur ecole d ingenieur en algerie, enp alger enp oran enp constantine,esgee, enpo, essa alger essa tlemcen, esti, cpst algérie, classe preparatoire dz',
  socialImageTitle: 'Prepa DZ',
  socialImageSubtitle: 'CPST',

  // social usernames (optional)
  //twitter: '',
  //github: '',
  //linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
pageUrlOverrides: null,
}
