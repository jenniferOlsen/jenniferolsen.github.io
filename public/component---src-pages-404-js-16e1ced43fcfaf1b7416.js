(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),u=n(154),c=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement(u.a,{location:this.props.location},o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist...."),o.a.createElement("div",{style:{width:"100%",height:0,paddingBottom:"70%",position:"relative"}},o.a.createElement("iframe",{src:"https://giphy.com/embed/OK27wINdQS5YQ",width:"100%",height:"100%",style:{position:"absolute"},frameBorder:0,className:"giphy-embed",allowFullScreen:!0})),o.a.createElement("p",null,o.a.createElement("a",{href:"https://giphy.com/gifs/mind-seinfeild-OK27wINdQS5YQ"},"via GIPHY")))},t}(o.a.Component);t.default=c},149:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var r=n(155),a=n.n(r),i=n(156),o=n.n(i),u=new a.a(o.a);var c=u.rhythm,l=u.scale},150:function(e,t,n){var r;e.exports=(r=n(153))&&r.default||r},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),u=n(148),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(150),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),f=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){"use strict";t.a={twitter:null,github:"https://github.com/jenniferOlsen",linkedin:"https://www.linkedin.com/in/jennyaolsen/",email:null}},153:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),u=n(48),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,n){"use strict";n(33);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),u=n(149),c=function(){return o.a.createElement("div",{style:{textAlign:"center"}})},l=n(151),s=n(152),d=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},o.a.createElement("div",{style:{width:Object(u.a)(24),maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(l.Link,{to:"/"},"Home"),o.a.createElement(l.Link,{to:"/portfolio"},"Portfolio"),o.a.createElement(l.Link,{to:"/journey"},"Journey"),o.a.createElement("a",{href:s.a.github,target:"_new"},"Github"),o.a.createElement(l.Link,{to:"/contact"},"Contact"),o.a.createElement(l.Link,{to:"/blog"},"Blog")))},t}(i.Component),p={rootContainer:{display:"flex",flexDirection:"row",justifyContent:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:15}},f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:p.rootContainer},"Built with ",o.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank"},"GatsbyJS"))},t}(i.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(32),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)},r=Object.assign({},n,t);return o.a.createElement("div",{style:r},o.a.createElement(c,null),o.a.createElement(d,null),o.a.createElement("br",null),e,o.a.createElement(f,null))},t}(o.a.Component);t.a=h}}]);
//# sourceMappingURL=component---src-pages-404-js-16e1ced43fcfaf1b7416.js.map