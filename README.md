# thelunch.info
## Goodwill Industries of Dallas, Inc.’s largest annual fundraising event, THE LUNCH, targets Dallas’ top chief executives and influential community leaders.

---

### Gulp DevDependencies
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
- ~~[Responsive CSS Tabs](http://codepen.io/oknoblich/pen/tfjFl)~~
- ~~[Responsive overlay menu navigation](http://codepen.io/riogrande/pen/gbXxdx)~~
- [Sticky Slider Navigation (Responsive)](http://codepen.io/ettrics/pen/WRbGRN)
- [Tinted Hero](http://codepen.io/luishj/pen/Exfyh)

---

### Changelog
##### v1.1.1
- `<section class="et-slide" id="mainEventInformation">`
  - Updated the Event Information copy

##### v1.1.0
- `.et-hero-tabs`
  - Removed `<h3>`
  - Increased the size of `h6` from 1rem to 1.5rem
  - Changed "Omni Dallas" to "Omni Downtown Dallas"
  - Changed primary button text from "GET YOUR SEAT" to "RESERVE YOUR TABLE"
  - Removed the secondary "LEARN MORE" button per client request
- `.et-hero-tabs-container`
  - Changed "Sponsors & Opportunities" to "Sponsorship Opportunities"
  - Changed "Get Your Tickets" to "Make Your Donation"
- `<section class="et-slide" id="mainEventInformation">`
  - Removed the `<h2>` per client request
  - Removed introduction paragraph, per client direction, and replaced the committee names from `<section class="et-slide" id="mainSponsorOpp">`
    - Changed `#lunchCommittee .sponsorNames.committee` to a flex layout
    - Added `&:after { content: "\00a0\00a0\·\00a0\00a0" }` to `li.committee`
    - Changed `<div class="col">` to `<div class="col-md-8" id="lunchTopNames">`
  - Removed the responsive tab styling of the "Chew on This" sub-section and aligned items accordingly
    - Removed Mission Statement, replaced with Event Information
    - Added missing stat: "1,433 — # people who earned a job with Goodwill’s help"
- `<section class="et-slide" id="mainFeaturedGuest">`
  - Changed "Stanly" to "Stanley"
- `<section class="et-slide" id="mainSponsorOpp">`
  - Renamed `<h2>` from "Sponsors & Sponsorship Opportunities" to "Sponsorship Opportunities"
  - Renamed all instances of `.card-link` from "DONATE" to "SPONSOR"
  - Changed all active photography elements per client
- `<footer id="footer">`
  - Added link to Goodwill logo pointing to goodwilldallas.org
