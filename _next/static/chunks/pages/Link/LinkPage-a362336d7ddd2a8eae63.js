_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{EmQU:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Link/LinkPage",function(){return t("P+BP")}])},KeDb:function(e,n,t){"use strict";var r=t("x3oR"),a=t("pONU");n.__esModule=!0,n.default=void 0;var i,o=a(t("ERkP")),l=t("L9lV"),s=t("7xIC"),c=new Map,u=window.IntersectionObserver,p={};var f=function(e,n){var t=i||(u?i=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var n=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),c.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),c.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}c.delete(e)}):function(){}};function g(e,n,t,r){(0,l.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),p[n+"%"+t]=!0)}var d=function(e){var n=!1!==e.prefetch,t=o.default.useState(),a=r(t,2),i=a[0],c=a[1],d=(0,s.useRouter)(),m=d&&d.pathname||"/",h=o.default.useMemo((function(){var n=(0,l.resolveHref)(m,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,l.resolveHref)(m,e.as):i||a}}),[m,e.href,e.as]),v=h.href,y=h.as;o.default.useEffect((function(){if(n&&u&&i&&i.tagName&&(0,l.isLocalURL)(v)&&!p[v+"%"+y])return f(i,(function(){g(d,v,y)}))}),[n,i,v,y,d]);var b=e.children,k=e.replace,E=e.shallow,M=e.scroll;"string"===typeof b&&(b=o.default.createElement("a",null,b));var w=o.Children.only(b),P={ref:function(e){e&&c(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,v,y,k,E,M)}};return n&&(P.onMouseEnter=function(e){(0,l.isLocalURL)(v)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),g(d,v,y,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(P.href=(0,l.addBasePath)(y)),o.default.cloneElement(w,P)};n.default=d},"P+BP":function(e,n,t){"use strict";t.r(n);var r=t("lebv"),a=t("Fhg5"),i=t("ERkP"),o=t.n(i),l=t("GsAr"),s=t("cxan"),c=t("lIm4"),u=t("nFRM"),p=o.a.createElement,f=[{name:"external",types:"boolean",description:p(o.a.Fragment,null,"Shows an external icon when the ",p(c.a,{primary:!0},"external"),' flag is set and target="_blank".')},{name:"ellipsis",types:"boolean",description:"Controls whether the text will concat and display ellipse... on overflow."}],g=function(e){return p(u.a,Object(s.a)({title:"Link",propList:f},e))},d=t("akZe"),m=o.a.createElement;n.default=function(){return m(o.a.Fragment,null,m(r.a,null,"Link"),m(r.m,null,"A simple wrapper for anchor elements. Use instead of ","<a>",". Supports all native anchor element attributes."," ",m(a.a,{href:"https://design.bigcommerce.com/components/links",target:"_blank"},"Links Design Guidelines"),"."),m(l.a,null,'<Link href="#">Link Example</Link>'),m(r.m,null,"You can also include and external icon."),m(l.a,null,'<Link href="#" target="_blank" external>\n  Learn More\n</Link>'),m(r.b,null,"API"),m(g,null),m(r.c,null,"Inherited Props"),m(d.a,{collapsible:!0}))}},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("Fhg5"),a=t("jvFD"),i=t.n(a),o=t("ERkP"),l=t.n(o).a.createElement;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n="/big-design";return n+e}}var c=function(e){var n=e.as,t=e.children,a=e.href;return l(i.a,{href:a,as:s(n),passHref:!0},"string"===typeof t?l(r.a,null,t):t)}},akZe:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("cxan"),a=t("ERkP"),i=t.n(a),o=t("R5dR"),l=t("nFRM"),s=i.a.createElement,c=[{name:"margin",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],u=function(e){return s(l.a,Object(r.a)({title:"Margin",propList:c},e))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t("lebv"),a=t("XPf/"),i=t("BtTX"),o=t("ERkP"),l=t.n(o),s=t("ZUh6"),c=t("j/s1"),u=Object(c.e)(s.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),p=l.a.createElement,f=function(e){var n=e.children,t=e.title,l=Object(o.useState)(!0),s=l[0],c=l[1],f=function(){return c(!s)};return p("div",null,p(u,{marginBottom:"xLarge",alignItems:"center",onClick:f,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||f()},tabIndex:0},s?p(a.a,{title:"Expand"}):p(i.a,{title:"Collapse"}),p(r.m,null,t)),!s&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),a=t.n(r),i=t("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),l=a.a.createElement,s=function(e){return l(o,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("yGqs"),a=t("lebv"),i=t("Fhg5"),o=t("ERkP"),l=t.n(o),s=t("lIm4"),c=t("c2K2"),u=l.a.createElement,p=function(e){var n=e.collapsible,t=e.id,i=e.propList,o=e.title,p=function(){return u(r.b,{marginBottom:"xLarge"},u(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return u(l.a.Fragment,null,u(s.a,{primary:!0},n),t?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return u(f,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return u(s.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return u(a.m,null,n)}}],items:i}),u(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?u(c.a,{title:"".concat(o," Props")},p()):u(l.a.Fragment,null,u(a.c,{id:t},o),p())},f=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return u(l.a.Fragment,{key:e},e.type===i.a?u(s.a,{highlight:!1},e):u(s.a,null,e),t<n.length-1?" | ":null)})):n.type===i.a?u(s.a,{highlight:!1},n):u(s.a,null,n)}}},[["EmQU",0,1,4,7,10,8,3,2,6,5,9,11]]]);