!function(){"use strict";var e,n,t,r,o,i={},d={};function c(e){var n=d[e];if(void 0!==n)return n.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return i[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=i,e=[],c.O=function(n,t,r,o){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],o=e[u][2];for(var d=!0,a=0;a<t.length;a++)(!1&o||i>=o)&&Object.keys(c.O).every((function(e){return c.O[e](t[a])}))?t.splice(a--,1):(d=!1,o<i&&(i=o));if(d){e.splice(u--,1);var s=r();void 0!==s&&(n=s)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,r,o]},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,{a:n}),n},c.d=function(e,n){for(var t in n)c.o(n,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(n,t){return c.f[t](e,n),n}),[]))},c.u=function(e){return({35:"component---src-pages-index-md",74:"component---src-pages-guides-submission-timelines-outcomes-md",96:"component---src-pages-guides-commerce-md",125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",141:"component---src-pages-guides-submission-overview-md",171:"component---src-pages-guides-submission-what-review-md",185:"component---src-pages-support-index-md",206:"2dee68d8",255:"component---src-pages-guides-getting-started-md",305:"5e65052d",351:"commons",356:"e97051c3",441:"component---src-pages-guides-submission-how-submit-md",450:"component---src-pages-guides-index-md",461:"e82996df",490:"b6f3ea4c",530:"f5cc1685",532:"styles",607:"component---src-pages-guides-submission-rejection-reasons-md",695:"component---src-pages-guides-faq-md",714:"8b61fb39",716:"component---src-pages-guides-branding-guidelines-md",839:"component---src-pages-guides-plugin-id-md",923:"component---src-pages-guides-best-practices-md",973:"component---src-pages-guides-glossary-md"}[e]||e)+"-"+{8:"9434e5c3de08e38a8714",35:"ff5ee78d72f20fe89291",56:"64b21e51eb5dcc2b04e0",74:"6370f9333f243e8c75d5",96:"6e84c591a9fb38480308",125:"7e09523e3e5b9dee640b",141:"8d7051a2b73d11881975",171:"a5bb3a107782a1c3fe43",185:"5a0e3941759fcaab795d",199:"e99d00d3e600069e1b6a",206:"04f38cee3e785e8a3740",255:"be167da79d18ee79bec0",305:"c049d285f7bf040238a6",351:"593f110b2805d8852f91",356:"3fe84abf2aad336ec3b5",441:"db10523b625ef0ca78a2",450:"74da13d092c672a922e0",461:"9ec86e127ea643d05afe",490:"677f7af4be3513cb3abd",530:"8f3eec77450aff38329a",532:"1bde8df8c49282c4dc2a",574:"abdc85dc360fe8c38555",607:"84867c5cc55751ae8696",695:"ce9cafc7d9c6705b126d",714:"90e94895285491c3d552",716:"c7073d5ce299b49a72d1",839:"0cea6a5988271518a305",923:"e6e579288368f2fb127b",973:"651a90136b9dab82510c"}[e]+".js"},c.miniCssF=function(e){return"styles.053a940d5e3cf1487236.css"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},t="adobe-dev-distribution:",c.l=function(e,r,o,i){if(n[e])n[e].push(r);else{var d,a;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==t+o){d=f;break}}d||(a=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.setAttribute("data-webpack",t+o),d.src=e),n[e]=[r];var b=function(t,r){d.onerror=d.onload=null,clearTimeout(l);var o=n[e];if(delete n[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((function(e){return e(r)})),t)return t(r)},l=setTimeout(b.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=b.bind(null,d.onerror),d.onload=b.bind(null,d.onload),a&&document.head.appendChild(d)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},c.p="/developer-distribute/",r=function(e){return new Promise((function(n,t){var r=c.miniCssF(e),o=c.p+r;if(function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(d=t[r]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===n))return d}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var d;if((o=(d=i[r]).getAttribute("data-href"))===e||o===n)return d}}(r,o))return n();!function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var d=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||n,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=d,a.request=c,o.parentNode.removeChild(o),r(a)}},o.href=n,document.head.appendChild(o)}(e,o,n,t)}))},o={658:0},c.f.miniCss=function(e,n){o[e]?n.push(o[e]):0!==o[e]&&{532:1}[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))},function(){var e={658:0,532:0};c.f.j=function(n,t){var r=c.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(532|658)$/.test(n))e[n]=0;else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var i=c.p+c.u(n),d=new Error;c.l(i,(function(t){if(c.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,r[1](d)}}),"chunk-"+n,n)}},c.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,i=t[0],d=t[1],a=t[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in d)c.o(d,r)&&(c.m[r]=d[r]);if(a)var u=a(c)}for(n&&n(t);s<i.length;s++)o=i[s],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(u)},t=self.webpackChunkadobe_dev_distribution=self.webpackChunkadobe_dev_distribution||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),c.nc=void 0}();
//# sourceMappingURL=webpack-runtime-d691fcb5232fafae3928.js.map