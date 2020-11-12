_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{Ggzw:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n("cxan"),a=n("ERkP"),i=n.n(a),l=n("R5dR"),o=n("lIm4"),s=n("nFRM"),u=i.a.createElement,c=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:u(l.a,{href:"#message-item-prop-table"},"MessageItem"),description:u(i.a.Fragment,null,"See ",u(l.a,{href:"#message-item-prop-table"},"below")," for usage."),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],p=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:u(l.a,{href:"#message-link-item-prop-table"},"MessageLinkItem"),description:u(i.a.Fragment,null,"See ",u(l.a,{href:"#message-link-item-prop-table"},"below")," for usage.")}],m=[{name:"external",types:"boolean",description:u(i.a.Fragment,null,"Shows an external icons when the ",u(o.a,{primary:!0},"external"),' flag is set and target="_blank".')},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],d=function(e){return u(s.a,Object(r.a)({title:"",propList:p},e,{id:"message-item-prop-table"}))},g=function(e){return u(s.a,Object(r.a)({title:"",propList:m},e,{id:"message-link-item-prop-table"}))}},TPTi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Alert/AlertPage",function(){return n("l3ku")}])},c2K2:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("lebv"),a=n("XPf/"),i=n("BtTX"),l=n("ERkP"),o=n.n(l),s=n("ZUh6"),u=n("j/s1"),c=Object(u.e)(s.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),p=o.a.createElement,m=function(e){var t=e.children,n=e.title,o=Object(l.useState)(!0),s=o[0],u=o[1],m=function(){return u(!s)};return p("div",null,p(c,{marginBottom:"xLarge",alignItems:"center",onClick:m,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||m()},tabIndex:0},s?p(a.a,{title:"Expand"}):p(i.a,{title:"Collapse"}),p(r.m,null,n)),!s&&t)}},fGyu:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},l3ku:function(e,t,n){"use strict";n.r(t);var r=n("lebv"),a=n("Jb5e"),i=n("ERkP"),l=n.n(i),o=n("GsAr"),s=n("lIm4"),u=n("lS4U"),c=n("plWM"),p=n("HbGN"),m=n("U6/q"),d=n("j/s1").e.span.withConfig({displayName:"styled__StyledMethodBadge",componentId:"sc-1kqf53h-0"})(["",";background-color:",";border-radius:",";color:",";display:inline-block;font-size:",";font-weight:",";line-height:",";text-transform:uppercase;padding:0 ",";"],Object(m.b)(),(function(e){return e.theme.colors.secondary70}),(function(e){return e.theme.borderRadius.normal}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.typography.fontSize.small}),(function(e){return e.theme.typography.fontWeight.semiBold}),(function(e){return e.theme.lineHeight.medium}),(function(e){return e.theme.spacing.xSmall})),g=l.a.createElement,h=function(e){e.className,e.style;var t=e.label,n=Object(p.a)(e,["className","style","label"]);return g(d,n,t)},f=l.a.createElement,y=function(e){var t=e.name,n=e.intro,a=e.usage,i=e.parameterList,o=e.returnDescription;return f(l.a.Fragment,null,f(r.d,null,f(s.a,{primary:!0},t)),f(r.m,null,n),f(u.a,{language:"javascript",showControls:!1},a),i&&i.length>0&&f(l.a.Fragment,null,f(h,{label:"Parameters"}),f(c.a,{bulleted:!1},i.map((function(e,t){var n=e.param,a=e.description,i=e.required;return f(c.a.Item,{key:t},f(r.m,null,f(s.a,null,n),!i&&f(r.m,{as:"span",bold:!0},"(optional)"),": ",a))})))),f(h,{label:"Return Value",marginBottom:"medium"}),f(r.m,null,o))},b=l.a.createElement,w=function(){return b(y,{name:"add",intro:"Adds an alert to the manager with an optional callback on dismiss.",usage:"alertsManager.add({ messages: [{ text: 'error' }] }, () => null)",parameterList:[{param:"alert",description:"An object with the same key/values as the alert props.",required:!0}],returnDescription:"The value of the alert key. If no key is provided, then an auto-generated one will be provided."})},v=function(){return b(y,{name:"remove",intro:"Removes an alert by key and displays the next alert, if available.",usage:"alertsManager.remove(key)",parameterList:[{param:"key",description:"Key of the alert to remove.",required:!0}],returnDescription:"Contains the alert removed."})},k=function(){return b(y,{name:"clear",intro:"Removes all alerts.",usage:"alertsManager.clear()",parameterList:[],returnDescription:"Contains the alerts removed."})},A=function(){return b(y,{name:"subscribe",intro:"Subscribe the the alerts manager.",usage:"alertsManager.subscribe((alert) => {})",parameterList:[{param:"callback",description:"Callback function to run when the alerts list changes. Will pass the alert to display, or null.",required:!0}],returnDescription:"An unsubscribe method for the subscibed method."})},M=n("cxan"),x=n("fGyu"),E=n("nFRM"),j=n("Ggzw"),S=l.a.createElement,C=[].concat(Object(x.a)(j.d),[{name:"key",types:"string",description:"Key used to identify alert."},{name:"autoDismiss",types:"boolean",defaultValue:"false",description:S(l.a.Fragment,null,S(r.m,null,"Auto dismiss after 5 seconds."),S(r.g,null,"Note: Only valid when used with AlertManager."))}]),P=function(e){return S(E.a,Object(M.a)({title:"Alert",propList:C},e))},I=n("cha2"),T=l.a.createElement;t.default=function(){return T(l.a.Fragment,null,T(r.a,null,"Alerts"),T(r.m,null,"An alert appears at the top right of the interface notifying the user after an action."),T(o.a,{scope:{alertsManager:I.alertsManager}},"function Example() {\n  const alert = {\n    header: 'Optional Headline',\n    messages: [\n      {\n        text: 'Required description copy.',\n        link: {\n          text: 'Optional Link',\n          href: '#',\n        },\n      },\n    ],\n    type: 'success',\n    onClose: () => null,\n  } as AlertProps;\n\n  return <Button onClick={() => alertsManager.add(alert)}>Trigger Alert</Button>;\n}"),T(a.a,{type:"warning",messages:[{text:"Note: You should not use the Alert component directly. Instead, inject the AlertsManager component into your app and use the instance created by the createAlertsManager utility function to control which Alerts are displayed."}],marginBottom:"large"}),T(r.b,null,"API"),T(P,null),T(j.a,{title:"Alert[MessageItem]"}),T(j.b,{title:"Alert[MessageLinkItem]"}),T(r.b,null,"Alerts Manager"),T(r.c,null,"AlertsManager Component"),T(r.m,null,"Big Design comes with an ",T(s.a,{primary:!0},"AlertsManager")," component that will manage and display which alerts to display and in which order by type. The order of priority from highest to lowest is ",T(s.a,null,"error"),","," ",T(s.a,null,"warning"),", ",T(s.a,null,"success"),", ",T(s.a,null,"info"),"."),T(r.m,null,"To use this component, put it in your root component (e.g. place it after ",T(s.a,null,"GlobalStyles")," component):"),T(u.a,null,"\n        export const alertsManager = createAlertsManager(); // import this in child components to use alerts\n        \n        function App() {\n          return (\n            <>\n              {/* ... */}\n              <GlobalStyles />\n              <AlertsManager manager={alertsManager} />\n              {/* ... */}\n            </>\n          );\n        }\n      "),T(r.m,null,"This works in conjunction with an instance created by ",T(s.a,null,"createAlertsManager")," function below. You need to export ",T(s.a,null,"alertsManager")," instance and then you can import it in child components in order to trigger alert:"),T(u.a,null,"\n        import { alertsManager } from '../App';\n\n        // ...\n\n        const alert = {...}; // alert props\n        alertsManager.add(alert);\n      "),T(r.c,null,"createAlertsManager"),T(r.m,null,"The ",T(s.a,null,"createAlertsManager")," function returns an instance for managing which alert to display."),T(u.a,{showControls:!1},"const alertsManager = createAlertsManager();"),T(w,null),T(v,null),T(k,null),T(A,null))}},lIm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ERkP"),a=n.n(r),i=n("j/s1"),l=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var t=e.highlight,n=e.primary,r=e.theme;return t&&!n&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var t=e.primary,n=e.theme;return t&&Object(i.d)(["color:",";"],n.colors.primary70)})),o=a.a.createElement,s=function(e){return o(l,e)};s.defaultProps={highlight:!0}},lS4U:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("mVVF"),a=n("/U4Q"),i=n.n(a),l=n("ERkP"),o=n.n(l),s=n("/QLj"),u=n("+Jfu"),c=n("Bhrl"),p=o.a.createElement;var m=function(e){var t=e.children,n=e.language,a=e.showControls,o=Object(l.useContext)(c.a).theme,m=function(e){if("string"!==typeof e)throw new Error("<CodeSnippet> children must be of type string");return function(e){var t=e.split("\n");""===t[0].trim()&&t.splice(0,1),""===t[t.length-1].trim()&&t.pop();var n=t[0].search(/\S|$/);return t.map((function(e){return e.substr(n)})).join("\n")}(e)}(t);return p(r.a,{border:"box",marginBottom:"xxLarge"},a&&p(u.a,{copyToClipboard:function(){return i()(m)},helperText:"Code example"}),p(s.a,{code:m,theme:o,language:n,disabled:!0}))};m.defaultProps={language:"jsx",showControls:!0}},nFRM:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("yGqs"),a=n("lebv"),i=n("Fhg5"),l=n("ERkP"),o=n.n(l),s=n("lIm4"),u=n("c2K2"),c=o.a.createElement,p=function(e){var t=e.collapsible,n=e.id,i=e.propList,l=e.title,p=function(){return c(r.b,{marginBottom:"xLarge"},c(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var t=e.name,n=e.required;return c(o.a.Fragment,null,c(s.a,{primary:!0},t),n?c("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var t=e.types;return c(m,{types:t})}},{header:"Default",hash:"default",render:function(e){var t=e.defaultValue;return c(s.a,{highlight:!1},t)}},{header:"Description",hash:"description",width:"50%",render:function(e){var t=e.description;return c(a.m,null,t)}}],items:i}),c(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return t?c(u.a,{title:"".concat(l," Props")},p()):c(o.a.Fragment,null,c(a.c,{id:n},l),p())},m=function(e){var t=e.types;return Array.isArray(t)?t.map((function(e,n){return c(o.a.Fragment,{key:e},e.type===i.a?c(s.a,{highlight:!1},e):c(s.a,null,e),n<t.length-1?" | ":null)})):t.type===i.a?c(s.a,{highlight:!1},t):c(s.a,null,t)}}},[["TPTi",0,1,4,7,10,8,3,2,6,5,9,11,12]]]);