(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(t,e,n){"use strict";n.r(e);n(33);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(157),c=n.n(l),u=n(151),s=n(158),p=n.n(s),m=(n(229),n(231),n(233)),d=n.n(m),f=n(149),h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(f.a)(2.5)}},o.a.createElement("img",{src:d.a,alt:"Sai Krishna",style:{marginRight:Object(f.a)(.5),marginBottom:0,width:Object(f.a)(2),height:Object(f.a)(2)}}),o.a.createElement("p",null,"Snappy bio goes here"))},e}(o.a.Component),y=n(154);n.d(e,"query",function(){return b});var g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=p()(this.props,"data.site.siteMetadata.title"),n=t.excerpt,a=this.props.pageContext,r=a.previous,i=a.next;return o.a.createElement(y.a,{location:this.props.location,title:e},o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t.frontmatter.title+" | "+e}),o.a.createElement(u.Link,{to:"/blog"},"← Blog"),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("br",null),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},t.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),o.a.createElement(h,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(u.Link,{to:r.frontmatter.path,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(u.Link,{to:i.frontmatter.path,rel:"next"},i.frontmatter.title," →"))))},e}(o.a.Component),b=(e.default=g,"2596216601")},149:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u});var a=n(155),r=n.n(a),i=n(156),o=n.n(i),l=new r.a(o.a);var c=l.rhythm,u=l.scale},150:function(t,e,n){var a;t.exports=(a=n(153))&&a.default||a},151:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(148),c=n.n(l);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var u=n(150),s=n.n(u);n.d(e,"PageRenderer",function(){return s.a});var p=n(34);n.d(e,"parsePath",function(){return p.a});var m=r.a.createContext({}),d=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(t,e,n){"use strict";e.a={twitter:null,github:"https://github.com/jenniferOlsen",linkedin:"https://www.linkedin.com/in/jennyaolsen/",email:null}},153:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(48),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},154:function(t,e,n){"use strict";n(33);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(149),c=function(){return o.a.createElement("div",{style:{textAlign:"center"}})},u=n(151),s=n(152),p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},o.a.createElement("div",{style:{width:Object(l.a)(24),maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(u.Link,{to:"/"},"Home"),o.a.createElement(u.Link,{to:"/portfolio"},"Portfolio"),o.a.createElement(u.Link,{to:"/journey"},"Journey"),o.a.createElement("a",{href:s.a.github,target:"_new"},"Github"),o.a.createElement(u.Link,{to:"/contact"},"Contact"),o.a.createElement(u.Link,{to:"/blog"},"Blog")))},e}(i.Component),m={rootContainer:{display:"flex",flexDirection:"row",justifyContent:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:15}},d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:m.rootContainer},"Built with ",o.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank"},"GatsbyJS"))},e}(i.Component),f=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children,e=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},a=Object.assign({},n,e);return o.a.createElement("div",{style:a},o.a.createElement(c,null),o.a.createElement(p,null),o.a.createElement("br",null),t,o.a.createElement(d,null))},e}(o.a.Component);e.a=f},229:function(t,e,n){},231:function(t,e,n){},233:function(t,e,n){t.exports=n.p+"static/avatar-ea8ae9df2b54790a4e5d6ca30fc54b96.png"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-00b98de9a791c7d485eb.js.map