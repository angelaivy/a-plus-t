// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-location-js": () => import("./../../../src/pages/location.js" /* webpackChunkName: "component---src-pages-location-js" */),
  "component---src-pages-rsvp-js": () => import("./../../../src/pages/rsvp.js" /* webpackChunkName: "component---src-pages-rsvp-js" */),
  "component---src-pages-thank-you-js": () => import("./../../../src/pages/thank-you.js" /* webpackChunkName: "component---src-pages-thank-you-js" */)
}

