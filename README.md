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
##### v1.1.2
- `<div class="et-hero-tabs-container">`
  - Closed :bug: [#6](https://github.com/milleradagency/GOOD-Lunch/issues/6) - Android: Nav jumps when scrolled on mobile
  - Closed [#47](https://github.com/milleradagency/GOOD-Lunch/issues/47) - Scroll event position jump
- `<section class="et-slide" id="mainEventInformation">`
  - Updated the Event Information copy (again)
  - Changed the colors of the numerical "Chew on This" elements to theme's accent color per client
  - Changed "Email" to "email" per client
- `<section class="et-slide" id="mainSponsorOpp">`
  - Replaced all photography per client
- General
  - Created `inch.json` per the [Inch CI](https://inch-ci.org/help/config_file_yaml) initiative
  - Retrofit v1.0.0 into the changelog

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

##### v1.0.0
- Milestone: [Deployment](https://github.com/milleradagency/GOOD-Lunch/milestone/4)
  - Closed https://github.com/milleradagency/GOOD-Lunch/issues/46 ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg) Finalize metas
  - Closed [#41](https://github.com/milleradagency/GOOD-Lunch/issues/41) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg) Remove `-nofollow` from `header` & `header404`
  - Closed [#40](https://github.com/milleradagency/GOOD-Lunch/issues/40) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg) Social Share
  - Closed [#27](https://github.com/milleradagency/GOOD-Lunch/issues/27) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#29](https://github.com/milleradagency/GOOD-Lunch/issues/29) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#42](https://github.com/milleradagency/GOOD-Lunch/issues/42) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#43](https://github.com/milleradagency/GOOD-Lunch/issues/43) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg) ![TODO](http://milleradagency.com/uploads/svg/gh-bug.svg) IE11 - `h1 > span` out of position
  - Closed [#38](https://github.com/milleradagency/GOOD-Lunch/issues/38) ![TODO](http://milleradagency.com/uploads/svg/gh-bug.svg) iOS - Hero buttons broken
  - Closed [#39](https://github.com/milleradagency/GOOD-Lunch/issues/39) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#24](https://github.com/milleradagency/GOOD-Lunch/issues/24) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#25](https://github.com/milleradagency/GOOD-Lunch/issues/25) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#23](https://github.com/milleradagency/GOOD-Lunch/issues/23) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#28](https://github.com/milleradagency/GOOD-Lunch/issues/28) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#15](https://github.com/milleradagency/GOOD-Lunch/issues/15) ![TODO](http://milleradagency.com/uploads/svg/gh-bug.svg)
  - Closed [#14](https://github.com/milleradagency/GOOD-Lunch/issues/14) ![TODO](http://milleradagency.com/uploads/svg/gh-bug.svg)
  - Closed [#13](https://github.com/milleradagency/GOOD-Lunch/issues/13) ![TODO](http://milleradagency.com/uploads/svg/gh-bug.svg)
  - Closed [#11](https://github.com/milleradagency/GOOD-Lunch/issues/11) ![TODO](http://milleradagency.com/uploads/svg/gh-bug.svg)
  - Closed [#10](https://github.com/milleradagency/GOOD-Lunch/issues/10) ![TODO](http://milleradagency.com/uploads/svg/gh-bug.svg)
  - Closed [#32](https://github.com/milleradagency/GOOD-Lunch/issues/32) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#31](https://github.com/milleradagency/GOOD-Lunch/issues/31) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
  - Closed [#30](https://github.com/milleradagency/GOOD-Lunch/issues/30) ![TODO](http://milleradagency.com/uploads/svg/gh-todo.svg)
