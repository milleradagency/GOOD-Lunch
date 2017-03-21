# thelunch.info
## Goodwill Industries of Dallas, Inc.’s largest annual fundraising event, THE LUNCH, targets Dallas’ top chief executives and influential community leaders.

###### TODO
###### <sub><sup>* Optional</sup></sub>
- ~~Add analytics code to thelunch.info~~
- Add List of Sponsors section in accordion-style
- Browserstack test*
- ~~Configure /docs deployment scheme~~
- ~~Configure async Google Analytics~~
- ~~Configure SSL with [Cloudflare](https://www.cloudflare.com/a/overview/thelunch.info) thanks to [this blog post](https://hackernoon.com/set-up-ssl-on-github-pages-with-custom-domains-for-free-a576bdf51bc#.jll758tvu)~~
- Convert raw HTML content to Hugo markdown files*
- Display nav on top/bottom depending on iOS/Android*
- Generate [favicons](http://realfavicongenerator.net/) & primary app color
- Incorporate Forestry.io for flat-file CMS editing*
- Incorporate official logo
- Remove materialize.min.js
- ~~Swap analytics code to goodwilldallas.org~~

###### StickySlider
- Keep colored span on previous section before transition to next*

###### Hero
- Add max-width: 40vw; to .et-hero-tabs h3 @ 768px

###### Event Information
- Add smooth tab transition to Chew on This*
- Replace filler text

###### Special Guests
- Replace filler images & text

###### Sponsorship Opportunities
- New layout for mobile devices*
- Remove hover state on mobile devices

###### Footer
- Add 2015 & 2016 links
- Add height: 700px; bottom: 0; to #footer:before @ 1440px
- Add other skyline levels for parallax effect*

###### Optimization
- Combine/minify JavaScript:
  - ResponsiveAccordion.js
  - SocialShare.js
  - StickyNav.js
  - jquery.cardslider.js
  - lunch2017.js
- Combine/minify external CDN scripts
  - modernizr.min.js
  - jquery.min.js
  - tether.min.js
  - bootstrap.min.js
- Combine/minify external CSS
  - Google fonts
  - Material Icons
  -  https://use.fontawesome.com/d559e6066b.css
  - font-awesome-css.min.css
- Leverage browser caching
  -  https://bbox.blackbaudhosting.com/webforms/bbox-min.js
  - https://bbox.blackbaudhosting.com/webforms/custom/mongo/scripts/MongoServer.js
  - https://bbox.blackbaudhosting.com/webforms/custom/mongo/scripts/easyXDM-min.js
  - https://bbox.blackbaudhosting.com/webforms/custom/mongo/scripts/json2-min.js
  - https://bbox.blackbaudhosting.com/webforms/images/ajax_loader_border2.gif
  - https://bbox.blackbaudhosting.com/webforms/images/bboxhelp.png
  - https://bbox.blackbaudhosting.com/webforms/images/cards/amex_normal.png
  - https://bbox.blackbaudhosting.com/webforms/images/cards/discover_normal.png
  - https://bbox.blackbaudhosting.com/webforms/images/cards/maestro_normal.png
  - https://bbox.blackbaudhosting.com/webforms/images/cards/mastercard_normal.png
  - https://bbox.blackbaudhosting.com/webforms/images/cards/visa_normal.png
  - http://thelunch.info/css/main.css
  - http://thelunch.info/images/Goodwill-worn-out-hands-from-working-hard.jpg
  - http://thelunch.info/images/facebook-default-no-profile-pic.jpg
  - http://thelunch.info/images/goodlogo-invert.svg
  - http://thelunch.info/images/skyline.svg
  - http://thelunch.info/images/sponOpp-champion.jpg
  - http://thelunch.info/images/sponOpp-legacy.jpg
  - http://thelunch.info/images/sponOpp-premier.jpg
  - http://thelunch.info/images/sponOpp-presenting.jpg
  - http://thelunch.info/images/sponOpp-supporting.jpg
  - http://thelunch.info/images/sponOpp-sustaining.jpg
  - http://thelunch.info/javascript/ResponsiveAccordion.js
  - http://thelunch.info/javascript/SocialShare.js
  - http://thelunch.info/javascript/StickyNav.js
  - http://thelunch.info/javascript/jquery.cardslider.js
  - http://thelunch.info/javascript/lunch2017.js
  - https://fonts.googleapis.com/css?family=Open+Sa ...
  - https://fonts.googleapis.com/icon?family=Material+Icons
- Serve the following static resources from a domain that doesn't set cookies:
  - https://bbox.blackbaudhosting.com/webforms/bbox-min.js
  - https://bbox.blackbaudhosting.com/webforms/custom/mongo/scripts/easyXDM-min.js
  - https://bbox.blackbaudhosting.com/webforms/custom/mongo/scripts/json2-min.js
  - https://bbox.blackbaudhosting.com/webforms/images/ajax_loader_border2.gif
  - https://bbox.blackbaudhosting.com/webforms/images/bboxhelp.png
  - https://bbox.blackbaudhosting.com/webforms/images/cards/amex_normal.png
  - https://bbox.blackbaudhosting.com/webforms/images/cards/discover_normal.png
  - https://bbox.blackbaudhosting.com/webforms/images/cards/maestro_normal.png
  - https://bbox.blackbaudhosting.com/webforms/images/cards/mastercard_normal.png
  - https://thelunch.info/css/main.css
  - https://thelunch.info/images/Goodwill-worn-out-hands-from-working-hard.jpg
  - https://thelunch.info/images/facebook-default-no-profile-pic.jpg
  - https://thelunch.info/images/goodlogo-invert.svg
  - https://thelunch.info/images/skyline.svg
  - https://thelunch.info/images/sponOpp-champion.jpg
  - https://thelunch.info/images/sponOpp-legacy.jpg
  - https://thelunch.info/images/sponOpp-premier.jpg
  - https://thelunch.info/images/sponOpp-presenting.jpg
  - https://thelunch.info/images/sponOpp-supporting.jpg
  - https://thelunch.info/images/sponOpp-sustaining.jpg
  - https://thelunch.info/javascript/ResponsiveAccordion.js
  - https://thelunch.info/javascript/SocialShare.js
  - https://thelunch.info/javascript/StickyNav.js
  - https://thelunch.info/javascript/jquery.cardslider.js
  - https://thelunch.info/javascript/lunch2017.js

---

### Known Bugs
###### <sub><sup>* Optional</sup></sub>
###### StickySlider.js
- Android: Nav jumps when scrolled on mobile*
- Colored span disappears in between sections*
- Colored span slider jumps to first position before executing*

---

### Gulp Dependencies
- "autoprefixer": "^6.7.1",
- "gulp": "^3.9.1",
- "gulp-autoprefixer": "^3.1.1",
- "gulp-cssnano": "^2.1.2",
- "gulp-postcss": "^6.3.0",
- "gulp-sass": "^3.1.0",
- "gulp-sourcemaps": "^2.4.1"

---

### Forks & Sources
- [Animate.css](https://github.com/daneden/animate.css)
- [Blackbaud](https://www.blackbaud.com/)
- [Bootstrap v4a6](https://v4-alpha.getbootstrap.com/)
- [FontAwesome](fontawesome.io)
- [Google Web Fonts](https://fonts.google.com/)
- [Hugo](gohugo.io)
- [jQuery](jquery.com)
- [Material Box Shadows](https://codepen.io/sdthornton/pen/wBZdXq)
- [Materialize.css](materializecss.com)
- [Modernizr](https://modernizr.com/)
- [Prevent automatic browser scroll on refresh](http://stackoverflow.com/questions/7035331/prevent-automatic-browser-scroll-on-refresh/18633915#18633915)
- [Prevent href=“#” link from changing the URL hash](http://stackoverflow.com/questions/20215248/prevent-href-link-from-changing-the-url-hash)
- [Responsive CSS Tabs](http://codepen.io/oknoblich/pen/tfjFl)
- [Responsive overlay menu navigation](http://codepen.io/riogrande/pen/gbXxdx)
- [Sticky Slider Navigation (Responsive)](http://codepen.io/ettrics/pen/WRbGRN)
- [Tinted Hero](http://codepen.io/luishj/pen/Exfyh)
