(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+71L":function(e,t,a){e.exports=a.p+"static/t-a_7-3df9aa25cf8f9d08e2d0307b8d0f560a.jpg"},"/mP2":function(e,t,a){e.exports=a.p+"static/t-a_13-245569f8214f96558807345dd9fac85d.jpg"},"2YI1":function(e,t,a){e.exports=a.p+"static/t-a_11-bfdbe8d0956049d0f8b5ed1ecf9d7c6a.jpg"},"9+0I":function(e,t,a){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;(n=a("17x9"))&&n.__esModule;var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(a,i,s):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a("q1tI"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}var s=function(){return"undefined"==typeof window?null:window.innerWidth},l=function(e){var t,a,r,n,o,l=e.columnsCountBreakPoints,d=e.children,c=e.className,u=e.style,f=(t=(0,i.useState)(s()),a=t[0],r=t[1],n="undefined"!=typeof window,o=(0,i.useCallback)((function(){r(s())}),[]),(0,i.useEffect)((function(){if(n)return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[n,o]),a),p=(0,i.useMemo)((function(){var e=Object.keys(l).sort((function(e,t){return e-t})),t=e.length>0?l[e[0]]:1;return e.forEach((function(e){e<f&&(t=l[e])})),t}),[f,l]);return i.default.createElement("div",{className:c,style:u,__self:void 0,__source:{fileName:"/Users/cedric/Code/react-responsive-masonry/src/ResponsiveMasonry/index.js",lineNumber:56,columnNumber:5}},i.default.Children.map(d,(function(e,t){return i.default.cloneElement(e,{key:t,columnsCount:p})})))};l.propTypes={},l.defaultProps={columnsCountBreakPoints:{350:1,750:2,900:3},className:null,style:null};var d=l;t.default=d},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=p(t);return h[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function _(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(O,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),s):s})),O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:n},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,j=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:I?1:0,transition:C?"opacity "+b+"ms":"none"},s),R="boolean"==typeof y?"lightgray":y,W={transitionDelay:b+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&W,s,f),T={title:t,alt:this.state.isVisible?"":a,style:P,className:p,itemProp:w};if(h){var H=h,z=m(h);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),R&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&W)}),z.base64&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:T,imageVariants:H,generateSources:_}),z.tracedSVG&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:T,imageVariants:H,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(H),d.default.createElement(O,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:S},z,{imageVariants:H}))}}))}if(g){var V=g,M=m(g),q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete q.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},R&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:R,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},C&&W)}),M.base64&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:T,imageVariants:V,generateSources:_}),M.tracedSVG&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:T,imageVariants:V,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(V),d.default.createElement(O,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:S},M,{imageVariants:V}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function W(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}C.propTypes={resolutions:L,sizes:R,fixed:W(c.default.oneOfType([L,c.default.arrayOf(L)])),fluid:W(c.default.oneOfType([R,c.default.arrayOf(R)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=C;t.default=P},BVaj:function(e,t,a){e.exports=a.p+"static/t-a_16-1aab4a90a22eda639eb9729b5981613f.jpg"},ERJ8:function(e,t,a){e.exports=a.p+"static/t-a_6-42e1de60e2825ff3356dcdd03f097224.jpg"},HR1i:function(e,t,a){e.exports=a.p+"static/t-a_8-a3fcc22e3da9580a1bbad692bd84a8f7.jpg"},HYDH:function(e,t,a){e.exports=a.p+"static/t-a_9-6fce9765e29411d178310ff539ea33ac.jpg"},"Jb5/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ResponsiveMasonry",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var r=i(a("UMWT")),n=i(a("9+0I"));function i(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o},NxVx:function(e,t,a){e.exports=a.p+"static/t-a_12-d03b1481ef734f7bcd90d5bcad062cd2.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("qhky"),o=a("Wbzz"),s=a("Bl7J"),l=a("vrFN"),d=a("9eSz"),c=a.n(d),u=function(){var e=Object(o.useStaticQuery)("1967597472");return n.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},f=a("c+Yh"),p=a.n(f),m=a("Jb5/"),h=a.n(m),g=a("tf3o"),y=a.n(g),b=a("dfgQ"),v=a.n(b),w=a("mL8G"),E=a.n(w),S=a("ws7S"),x=a.n(S),_=a("Z6H7"),j=a.n(_),I=a("ERJ8"),k=a.n(I),N=a("HR1i"),O=a.n(N),C=a("HYDH"),L=a.n(C),R=a("eX/Z"),W=a.n(R),P=a("2YI1"),T=a.n(P),H=a("NxVx"),z=a.n(H),V=a("/mP2"),M=a.n(V),q=a("WxWn"),J=a.n(q),A=a("iGHn"),G=a.n(A),D=a("BVaj"),B=a.n(D),Y=[y.a,v.a,E.a,x.a,j.a,k.a,O.a,L.a,W.a,T.a,z.a,M.a,J.a,B.a,G.a],U=function(){return n.a.createElement("div",{className:"content"},n.a.createElement("h3",null,"#WilsonUponAStar"),n.a.createElement(m.ResponsiveMasonry,{columnsCountBreakPoints:{350:2,900:3}},n.a.createElement(h.a,{gutter:"10px"},Y.map((function(e,t){return n.a.createElement("img",{key:t,src:e,style:{width:"100%",display:"block"},alt:""})})))))},F=a("Yn0Z"),Z=a.n(F),Q=a("+71L"),X=a.n(Q);t.default=function(e){return n.a.createElement(s.a,null,n.a.createElement(i.b,null,n.a.createElement("script",{src:Object(o.withPrefix)("scripts.js"),type:"text/javascript"})),n.a.createElement(l.a,{title:"Home"}),n.a.createElement("section",{className:"hero"},n.a.createElement("p",null,"Together with their parents"),n.a.createElement("h1",null,n.a.createElement("span",null,"Terry Jay Wilson ",n.a.createElement("sub",null,"&")),n.a.createElement("span",null,"Angela Jean Ivy")),n.a.createElement("div",{className:"intro"},n.a.createElement("div",{className:"image"},n.a.createElement(u,null)),n.a.createElement("div",{className:"details"},n.a.createElement("h2",null,"Request the pleasure of your company to celebrate their marriage",n.a.createElement("br",null),"June 12, 2021"),n.a.createElement("p",null,"Ceremony 4:00 pm"),n.a.createElement("p",null,"Dusty Spur Ranch",n.a.createElement("br",null),"21731 N Wenas Rd. Selah, WA 98942"),n.a.createElement("span",{className:"infin"},"∞"),n.a.createElement("h3",null,"#WilsonUponAStar")))),n.a.createElement("div",{className:"lace"},n.a.createElement("img",{src:p.a,alt:""})),n.a.createElement("section",{className:"mainContent"},n.a.createElement("h3",null,"A Note for Guests"),n.a.createElement("p",null,"Hi Everyone! Thank you so much for visiting our wedding website! We are very excited to celebrate our day with our closest family & friends."),n.a.createElement("p",null,"If you are planning on coming to the ceremony, please arrive with enough time to be transported to the lookout. Last wagon/pickup leaves at 3:45pm. There will be drinks provided at the dropoff/lookout spot, as well as an outhouse. Ceremony is scheduled to start at 4:00pm. You can refer to the ",n.a.createElement(o.Link,{to:"/location"},"map")," to get an idea of the layout."),n.a.createElement("p",null,"We are monitoring the COVID-19 situation, and we will keep this page updated if plans change. At this time we are still planning on moving forward with the wedding. Along with being held outdoors, we will have more space at dinner tables, hand sanitizer stationed at yard game areas and dinner tables, as well as individual props for the photo booth. We have backup plans for weather (tents, heaters) so we hope guests can be comfortable in the unknown spring weather. It's going to be a fun time! ",n.a.createElement("span",{role:"img","aria-label":"heart"},"❤️")),n.a.createElement("p",null,"Don't forget to fill out the ",n.a.createElement(o.Link,{to:"/rsvp"},"RSVP form")," so we know what to plan for! Please note, the invitation sent in the mail does have the wrong zip code, sadly. ",n.a.createElement("span",{role:"img","aria-label":"Face with Hand Over Mouth"},"🤭")," Correction in address above! "),n.a.createElement("h3",{className:"mT50"},"Our Story ",n.a.createElement("small",null,"(as told by Angie)")),n.a.createElement("div",{className:"storyGrid"},n.a.createElement("p",null,"We met at a mutual friends house several years ago, around 2012, right as I was about to move to Seattle. We hit it off right away but we both had big things going on in our lives and the timing just wasn't right. We kept in touch over the years, including dating long distance a couple of times, but the universe had other plans and lessons for us at that time. Terry was focused on his son, and I was building my career in the city."),n.a.createElement("p",null,"Terry & I have come to realize our lives are full of synchronicity and parallels. It's fate. Over the years, our paths kept crossing and in February 2019 we decided to give it one more go at a relationship. By this time, I had a solid career, and the ability to work remotely occasionally. Although we were long distance, this time it just felt like we could finally make it work. It wasn't always easy, but it all was so worth it. In March of 2020, I made the move temporarily to Yakima, to be with Terry and his son, Justin."),n.a.createElement("img",{src:X.a,alt:"Angela, Terry, & Justin at the beach in Seattle."}),n.a.createElement("p",null,"Terry proposed to me on Mother's Day - May 10, 2020 at one of my favorite and most important places, my family cabin over on Hood Canal. He was very sneaky! He had talked to my parents the week or so before, and even had the ring delivered to the house with me there and working. Due to the pandemic, this took planning! I didn't expect a thing. It was perfect."),n.a.createElement("img",{src:Z.a,alt:"Angela showing off her ring"}),n.a.createElement("p",null,"After our wedding, we plan on moving back over to the west side of Washington. We hope to buy a house this year, and get Justin started in middle school! We are so grateful for our family and the love and support they have always unconditionally shown us. The love and gratitude we have for them is endless."),n.a.createElement("div",{className:"mandala m1"}," "),n.a.createElement("div",{className:"mandala m2"}," "))),n.a.createElement("div",{className:"lace"},n.a.createElement("img",{src:p.a,alt:""})),n.a.createElement("section",{className:"imageGrid"},n.a.createElement(U,null)))}},UMWT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a("17x9"));var r=i(a("q1tI")),n="/Users/cedric/Code/react-responsive-masonry/src/Masonry/index.js";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s=function(e){var t,a;function i(){return e.apply(this,arguments)||this}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=i.prototype;return s.getColumns=function(){var e=this.props,t=e.children,a=e.columnsCount,n=Array.from({length:a},(function(){return[]}));return r.default.Children.forEach(t,(function(e,t){n[t%a].push(e)})),n},s.renderColumn=function(e){var t=this,a=this.props.gutter;return e.map((function(e,i){return r.default.createElement("div",{key:i,style:{marginTop:i>0?a:void 0},__self:t,__source:{fileName:n,lineNumber:19,columnNumber:7}},e)}))},s.renderColumns=function(){var e=this,t=this.props.gutter;return this.getColumns().map((function(a,i){return r.default.createElement("div",{key:i,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,marginLeft:i>0?t:void 0},__self:e,__source:{fileName:n,lineNumber:28,columnNumber:7}},e.renderColumn(a))}))},s.render=function(){var e=this.props,t=e.className,a=e.style;return r.default.createElement("div",{style:o({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%"},a),className:t,__self:this,__source:{fileName:n,lineNumber:48,columnNumber:7}},this.renderColumns())},i}(r.default.Component);s.propTypes={},s.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var l=s;t.default=l},WxWn:function(e,t,a){e.exports=a.p+"static/t-a_14-46e1995e5612a06ca58787de125c9d4c.jpg"},Yn0Z:function(e,t,a){e.exports=a.p+"static/t-a_3-fe54873173a20690670c1bcfcb2fe912.jpg"},Z6H7:function(e,t,a){e.exports=a.p+"static/t-a_5-903a975e4b88f1a4f9e01928d36347e4.jpg"},"c+Yh":function(e,t,a){e.exports=a.p+"static/hr-ornament-68f98965e006bbf23d0e0182f2823351.svg"},dfgQ:function(e,t,a){e.exports=a.p+"static/t-a_1-42baa095cb63050283a264b8c2aaaac4.jpg"},"eX/Z":function(e,t,a){e.exports=a.p+"static/t-a_10-5df42e3578a1b077437ee10ad274d175.jpg"},iGHn:function(e,t,a){e.exports=a.p+"static/t-a_15-2458515f0e40e41821a6b8d2928441dc.jpg"},mL8G:function(e,t,a){e.exports=a.p+"static/t-a_2-31cf12f6c1aad28033a638e8a1fa2090.jpg"},tf3o:function(e,t,a){e.exports=a.p+"static/t-a_0-e1c01c0330f008122c63f567be352872.jpg"},ws7S:function(e,t,a){e.exports=a.p+"static/t-a_4-61959ff09992537cc80316f7cee6222a.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-3b1a592f4e0f990fb67d.js.map