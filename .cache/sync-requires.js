const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/index.js"))),
  "component---src-pages-location-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/location.js"))),
  "component---src-pages-not-attending-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/not-attending.js"))),
  "component---src-pages-rsvp-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/rsvp.js"))),
  "component---src-pages-thank-you-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/thank-you.js")))
}

