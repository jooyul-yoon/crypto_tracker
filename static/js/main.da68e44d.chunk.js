(this.webpackJsonpreact_typescript=this.webpackJsonpreact_typescript||[]).push([[0],{74:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),i=t(27),o=t.n(i),a=t(50),l=t(5),s=t(17),d=t(9),h=t(12),p=t(4),j="https://api.coinpaprika.com/v1";function b(){return fetch("".concat(j,"/coins")).then((function(e){return e.json()}))}function u(e){return fetch("".concat(j,"/tickers/").concat(e)).then((function(e){return e.json()}))}function x(e){var n=Math.floor(Date.now()/1e3),t=n-2592e3;return fetch("".concat(j,"/coins/").concat(e,"/ohlcv/historical?start=").concat(t,"&end=").concat(n)).then((function(e){return e.json()}))}var f,g,m=t(42),O=t.n(m),v=t(0),y=Object(p.d)(f||(f=Object(l.a)(["\n0% {\n  transform: rotate(0deg);\n}\n100% {\n  transform: rotate(360deg);\n}\n"]))),w=p.c.div(g||(g=Object(l.a)(['\n  display: flex;\n  width: 100%;\n  height: 50vh;\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n\n  &:after {\n    content: " ";\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border-radius: 50%;\n    border: 6px solid #fff;\n    border-color: #fff transparent #fff transparent;\n    animation: '," 1.2s linear infinite;\n  }\n"])),y);var C=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(w,{})})};var k,S,z,L,_,F,D,q,I=function(e){var n=e.coinId,t=Object(h.useQuery)("ohlcv",(function(){return x(n)}),{refetchInterval:5e3}),r=t.isLoading,c=t.data;return Object(v.jsx)("div",{children:r?Object(v.jsx)(C,{}):Object(v.jsx)(O.a,{type:"candlestick",series:[{name:"Hello",data:null===c||void 0===c?void 0:c.map((function(e){return[Date.parse(e.time_close),e.open.toFixed(0),e.high.toFixed(0),e.low.toFixed(0),e.close.toFixed(0)]}))}],options:{theme:{mode:"dark"},chart:{width:480,height:200,toolbar:{show:!1},background:"rgba(0, 0, 0, 0.6)"},title:{text:"Price over 30 days",align:"center"},yaxis:{labels:{show:!0}},xaxis:{type:"datetime",axisBorder:{show:!1},labels:{show:!1},axisTicks:{show:!1},categories:null===c||void 0===c?void 0:c.map((function(e){return e.time_close}))},grid:{show:!1},fill:{colors:["whitesmoke"]},tooltip:{enabled:!0,y:{formatter:function(e){return e.toLocaleString()}}},plotOptions:{candlestick:{colors:{upward:"#686de0",downward:"#ff7979"},wick:{useFillColor:!0}}}}})})},E=p.c.div(k||(k=Object(l.a)(["\n  padding: 0;\n  max-width: inherit;\n  margin: 10px 0;\n  color: ",";\n"])),(function(e){return e.theme.textColor})),M=p.c.div(S||(S=Object(l.a)(["\n  display: flex;\n  background-color: ",";\n  margin: 10px 0;\n  border-radius: 15px;\n  padding: 15px 10px 10px 10px;\n"])),(function(e){return e.theme.cardColor})),P=p.c.div(z||(z=Object(l.a)(["\n  font-size: 20px;\n  margin-right: 10px;\n  color: ",";\n"])),(function(e){return e.isPos?e.theme.greenColor:e.theme.redColor})),U=p.c.div(L||(L=Object(l.a)(["\n  margin-right: 10px;\n  font-size: 20px;\n"]))),B=p.c.div(_||(_=Object(l.a)(["\n  margin-right: 70px;\n  padding-top: 3px;\n  font-size: 15px;\n  color: ",";\n"])),(function(e){return e.isPos?e.theme.greenColor:e.theme.redColor})),A=p.c.div(F||(F=Object(l.a)(["\n  padding-top: 7px;\n  font-size: 10px;\n"]))),H=p.c.div(D||(D=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: space-between;\n  background-color: ",";\n  padding-top: 20px;\n  padding-bottom: 15px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 15px;\n  font-size: 13px;\n"])),(function(e){return e.theme.cardColor})),Q=p.c.div(q||(q=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0 10px;\n  margin-bottom: 10px;\n  padding-bottom: 0.1rem;\n  border-bottom: 0.05rem solid ",";\n"])),(function(e){return e.theme.textColor}));var T,Y,$,R,J,V,X,G,K,N=function(e){var n=e.coinId,t=Object(h.useQuery)("price",(function(){return u(n)}),{refetchInterval:5e3}),r=t.isLoading,c=t.data,i=Object(h.useQuery)("ohlcv",(function(){return x(n)}),{refetchInterval:5e3}),o=i.isLoading,a=i.data,l=!!(null===c||void 0===c?void 0:c.quotes.USD.percent_change_24h)&&c.quotes.USD.percent_change_24h>0;return r||o?Object(v.jsx)(C,{}):Object(v.jsxs)(E,{children:[Object(v.jsxs)(M,{children:[Object(v.jsx)(P,{isPos:l,children:l?"\u2191":"\u2193"}),Object(v.jsxs)(U,{children:["$",parseFloat(c.quotes.USD.price.toFixed(0)).toLocaleString()]}),Object(v.jsxs)(B,{isPos:l,children:[l?"+":null,parseFloat((c.quotes.USD.percent_change_24h*c.quotes.USD.price/100).toFixed(0)).toLocaleString()," ","(",l?"+":null,c.quotes.USD.percent_change_24h.toFixed(1),"% )"]}),Object(v.jsxs)(A,{children:["updated at ",null===c||void 0===c?void 0:c.last_updated.slice(11,19)]})]}),Object(v.jsxs)(H,{children:[Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"Prev. Close"}),Object(v.jsxs)("div",{children:["$",parseFloat(a.find((function(e,n){return 29===n})).close.toFixed(2)).toLocaleString()]})]}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"Open"}),Object(v.jsxs)("div",{children:["$",parseFloat(a.find((function(e,n){return 30===n})).open.toFixed(2)).toLocaleString()]})]}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"Volume"}),Object(v.jsx)("div",{children:parseFloat(c.quotes.USD.volume_24h.toFixed(0)).toLocaleString()})]}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"1-Day Vol. Change"}),Object(v.jsx)("div",{children:c.quotes.USD.volume_24h_change_24h})]}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"Highest Price"}),Object(v.jsx)("div",{children:parseFloat(c.quotes.USD.ath_price.toFixed(0)).toLocaleString()})]}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"Highest Date"}),Object(v.jsx)("div",{children:null===c||void 0===c?void 0:c.quotes.USD.ath_date.slice(0,10)})]}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"24-hour change"}),Object(v.jsxs)("div",{children:[null===c||void 0===c?void 0:c.quotes.USD.percent_change_24h,"%"]})]}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"7-day change"}),Object(v.jsxs)("div",{children:[null===c||void 0===c?void 0:c.quotes.USD.percent_change_7d,"%"]})]}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"30-day change"}),Object(v.jsxs)("div",{children:[null===c||void 0===c?void 0:c.quotes.USD.percent_change_30d,"%"]})]}),Object(v.jsxs)(Q,{children:[Object(v.jsx)("div",{children:"1-year change"}),Object(v.jsxs)("div",{children:[null===c||void 0===c?void 0:c.quotes.USD.percent_change_1y,"%"]})]})]})]})},W=t(28),Z=p.c.div(T||(T=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),ee=p.c.header(Y||(Y=Object(l.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),ne=p.c.div($||($=Object(l.a)(["\n  img {\n    height: 40px;\n  }\n"]))),te=p.c.h1(R||(R=Object(l.a)(["\n  color: ",";\n  font-size: 30px;\n  font-weight: bold;\n"])),(function(e){return e.theme.textColor})),re=p.c.div(J||(J=Object(l.a)(["\n  width: 30px;\n  height: 30px;\n  margin-left: 10px;\n\n  img {\n    width: 30px;\n    height: 30px;\n  }\n"]))),ce=p.c.div(V||(V=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  color: ",";\n  background-color: ",";\n  margin: 10px 0;\n  border-radius: 15px;\n  padding: 20px 20px;\n  box-shadow: rgb(0 0 0 / 15%) 0px 1px 1px;\n"])),(function(e){return e.theme.textColor}),(function(e){return e.theme.cardColor})),ie=p.c.div(X||(X=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n\n  span:first-child {\n    font-size: 9px;\n    padding-bottom: 5px;\n    text-transform: uppercase;\n  }\n  span:last-child {\n    font-size: 15px;\n  }\n"]))),oe=p.c.div(G||(G=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 10px 0;\n  color: ",";\n"])),(function(e){return e.theme.bgColor})),ae=p.c.div(K||(K=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  transition: color 0.3s ease-in;\n  transition: background-color 0.3s ease-in;\n  border-radius: 10px;\n  display: block;\n  box-shadow: rgb(0 0 0 / 15%) 0px 1px 1px;\n  flex: 1 1 0%;\n  font-size: 90%;\n  font-weight: bold;\n  margin: 0 5px;\n  text-align: center;\n  text-transform: uppercase;\n  a {\n    display: block;\n    padding: 10px 0;\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(e){return e.isActive?e.theme.tabBgColor:e.theme.cardColor}),(function(e){return e.isActive?e.theme.cardColor:e.theme.textColor}));var le,se,de,he,pe,je,be,ue=function(){var e=Object(d.g)().cId,n=Object(d.f)().state,t=Object(d.h)("/:cId/price"),r=Object(d.h)("/:cId/chart"),c=Object(h.useQuery)(["info",e],(function(){return function(e){return fetch("".concat(j,"/coins/").concat(e)).then((function(e){return e.json()}))}(e)}),{refetchInterval:5e3}),i=c.isLoading,o=c.data,a=Object(h.useQuery)(["tickers",e],(function(){return u(e)}),{refetchInterval:5e3}),l=a.isLoading,p=a.data,b=i||l;return Object(v.jsxs)(Z,{children:[Object(v.jsx)(W.a,{children:Object(v.jsx)("title",{children:(null===n||void 0===n?void 0:n.name)?n.name:b?null:"".concat(null===o||void 0===o?void 0:o.name)})}),b?Object(v.jsx)(C,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(ee,{children:[Object(v.jsx)(ne,{children:Object(v.jsx)(s.b,{to:"/",children:Object(v.jsx)("img",{src:"https://cdn.iconscout.com/icon/premium/png-256-thumb/cryptocurrency-2627304-2174937.png",alt:"home-logo"})})}),Object(v.jsx)(te,{children:(null===n||void 0===n?void 0:n.name)?n.name:b?null:"".concat(null===o||void 0===o?void 0:o.name)}),Object(v.jsx)(re,{children:Object(v.jsx)("img",{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(null===o||void 0===o?void 0:o.symbol.toLowerCase()),alt:"coin-icon"})})]}),Object(v.jsxs)(ce,{children:[Object(v.jsxs)(ie,{children:[Object(v.jsx)("span",{children:"rank:"}),Object(v.jsx)("span",{children:"".concat(null===o||void 0===o?void 0:o.rank)})]}),Object(v.jsxs)(ie,{children:[Object(v.jsx)("span",{children:"symbol:"}),Object(v.jsxs)("span",{children:["$","".concat(null===o||void 0===o?void 0:o.symbol.toUpperCase())]})]}),Object(v.jsxs)(ie,{children:[Object(v.jsx)("span",{children:"price:"}),Object(v.jsx)("span",{children:"$".concat(parseFloat(p.quotes.USD.price.toFixed(2)).toLocaleString())})]})]}),Object(v.jsxs)(ce,{children:[Object(v.jsxs)(ie,{children:[Object(v.jsx)("span",{children:"TOTAL SUPPLY:"}),Object(v.jsx)("span",{children:"".concat(null===p||void 0===p?void 0:p.total_supply.toLocaleString())})]}),Object(v.jsxs)(ie,{children:[Object(v.jsx)("span",{children:"MAX SUPPLY:"}),Object(v.jsx)("span",{children:"".concat(null===p||void 0===p?void 0:p.max_supply.toLocaleString())})]})]}),Object(v.jsxs)(oe,{children:[Object(v.jsx)(ae,{isActive:null!=t,children:Object(v.jsx)(s.b,{to:"/".concat(null===o||void 0===o?void 0:o.id,"/price"),children:"Price"})}),Object(v.jsx)(ae,{isActive:null!=r,children:Object(v.jsx)(s.b,{to:{pathname:"/".concat(null===o||void 0===o?void 0:o.id,"/chart"),state:{data:p}},children:"Chart"})})]}),Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/:cId/price",children:Object(v.jsx)(N,{coinId:e})}),Object(v.jsx)(d.a,{path:"/:cId/chart",children:Object(v.jsx)(I,{coinId:e})})]})]})]})},xe=p.c.div(le||(le=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),fe=p.c.header(se||(se=Object(l.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ge=p.c.div(de||(de=Object(l.a)(["\n  margin-right: 10px;\n  img {\n    height: 40px;\n  }\n"]))),me=p.c.h1(he||(he=Object(l.a)(["\n  color: ",";\n  font-size: 30px;\n  font-weight: bold;\n  margin: 20px 0;\n"])),(function(e){return e.theme.titleColor})),Oe=p.c.ul(pe||(pe=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: space-between;\n  margin: 10px 0;\n"]))),ve=p.c.li(je||(je=Object(l.a)(["\n  color: ",";\n  background-color: ",";\n  margin: 0px 5px 10px 5px;\n  border-radius: 15px;\n  a {\n    display: flex;\n    align-items: center;\n    transition: color 0.2s ease-in;\n    padding: 10px;\n\n    span {\n      margin-left: 7px;\n      color: ",";\n      font-size: 9px;\n    }\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.textColor}),(function(e){return e.theme.cardColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.accentColor})),ye=p.c.img(be||(be=Object(l.a)(["\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n"])));var we=function(){var e=Object(h.useQuery)("allCoins",b),n=e.isLoading,t=e.data;return Object(v.jsxs)(xe,{children:[Object(v.jsx)(W.a,{children:Object(v.jsx)("title",{children:"Crypto Tracker"})}),Object(v.jsxs)(fe,{children:[Object(v.jsx)(ge,{children:Object(v.jsx)(s.b,{to:"/",children:Object(v.jsx)("img",{src:"https://cdn.iconscout.com/icon/premium/png-256-thumb/cryptocurrency-2627304-2174937.png"})})}),Object(v.jsx)(me,{children:"Crypto"})]}),n?Object(v.jsx)(C,{}):Object(v.jsx)(Oe,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(e){return Object(v.jsx)(ve,{children:Object(v.jsxs)(s.b,{to:{pathname:"/".concat(e.id,"/price"),state:{name:e.name}},children:[Object(v.jsx)(ye,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(e.symbol.toLowerCase())}),e.name,Object(v.jsx)("span",{children:e.symbol})]})},e.id)}))})]})};var Ce=function(){return Object(v.jsx)(s.a,{children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/:cId",children:Object(v.jsx)(ue,{})}),Object(v.jsx)(d.a,{path:"/",children:Object(v.jsx)(we,{})})]})})},ke=t(49),Se={bgColor:"#4079ac",titleColor:"whitesmoke",textColor:"whitesmoke",accentColor:"#ff7979a9",tabBgColor:"rgb(170, 180, 210, 1)",cardColor:"rgb(0,0,0,0.6)",greenColor:"#00ff00",redColor:"#ff4444",blackColor:"#111111",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},ze={bgColor:"#F4F4F4",titleColor:"#4B53BC",textColor:"#4B53BC",accentColor:"#ff7979a9",tabBgColor:"#4B53BC",cardColor:"white",greenColor:"rgb(59, 137, 255)",redColor:"#ff0000",blackColor:"#111111",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"};function Le(){return(Le=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function _e(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var Fe=r.createElement("path",{d:"M43 28c.05-.66.09-1.33.09-2a27.763 27.763 0 0 0-.44-5.03 25.552 25.552 0 0 0-2.5-7.51A22.381 22.381 0 0 0 29 3a32.934 32.934 0 0 1 24.98 13.11 27.4 27.4 0 0 1 3.75 6.91A24.754 24.754 0 0 1 59 28z",fill:"#d9176c"}),De=r.createElement("circle",{cx:29,cy:6,fill:"#9b1e5a",r:3}),qe=r.createElement("path",{d:"M58 32a29 29 0 0 1-29 29A28.275 28.275 0 0 1 3 44a23.765 23.765 0 0 0 17 7 25.076 25.076 0 0 0 4.75-.46 18.565 18.565 0 0 0 1.99-.46A23.934 23.934 0 0 0 32 48l-3-6h9.98A25.326 25.326 0 0 0 44 32z",fill:"#f9bb4b"}),Ie=r.createElement("path",{d:"M49 45a5.006 5.006 0 0 1-5-5h2a3 3 0 0 0 6 0h2a5.006 5.006 0 0 1-5 5zM37 54.11a15.652 15.652 0 0 1-4.9.89c-5.42 0-7.14-3.93-7.35-4.46a18.565 18.565 0 0 0 1.99-.46c.46.97 2.66 4.46 9.63 2.13z",fill:"#394d5c"}),Ee=r.createElement("path",{d:"M57.73 23.02a3.951 3.951 0 0 1-2.43.84 3.985 3.985 0 0 1-1.32-7.75 27.4 27.4 0 0 1 3.75 6.91zM45.84 17.06a4 4 0 0 1-3.19 3.91 25.552 25.552 0 0 0-2.5-7.51 3.824 3.824 0 0 1 1.69-.4 4.005 4.005 0 0 1 4 4z",fill:"#eb8cb3"}),Me=r.createElement("g",{fill:"#7fcac9"},r.createElement("path",{d:"M20 42h-5a1 1 0 0 1-.707-1.707L17.586 37H15a1 1 0 0 1 0-2h5a1 1 0 0 1 .707 1.707L17.414 40H20a1 1 0 0 1 0 2zM33 32h-6a1 1 0 0 1-.707-1.707L30.586 26H27a1 1 0 0 1 0-2h6a1 1 0 0 1 .707 1.707L29.414 30H33a1 1 0 0 1 0 2zM22 22h-8a1 1 0 0 1-.707-1.707L19.586 14H14a1 1 0 0 1 0-2h8a1 1 0 0 1 .707 1.707L16.414 20H22a1 1 0 0 1 0 2z"})),Pe=r.createElement("path",{d:"M41 28h20v4H41z",fill:"#6f1d48"});function Ue(e,n){var t=e.title,c=e.titleId,i=_e(e,["title","titleId"]);return r.createElement("svg",Le({height:512,viewBox:"0 0 64 64",width:512,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},i),t?r.createElement("title",{id:c},t):null,Fe,De,qe,Ie,Ee,Me,Pe)}var Be=r.forwardRef(Ue);t.p;function Ae(){return(Ae=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function He(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var Qe=r.createElement("path",{d:"M477.45 256c0-21.75 39.41-48.387 34.05-68.45-5.55-20.757-53.156-24.1-63.672-42.277-10.668-18.433 10.125-61.304-4.836-76.265-14.96-14.961-57.832 5.828-76.27-4.836C348.552 53.656 345.208 6.05 324.45.5 304.387-4.86 277.75 34.55 256 34.55S207.613-4.86 187.55.5c-20.757 5.55-24.1 53.156-42.277 63.672C126.84 74.84 83.97 54.047 69.008 69.008c-14.961 14.96 5.828 57.832-4.836 76.27C53.656 163.448 6.05 166.792.5 187.55-4.86 207.613 34.55 234.25 34.55 256S-4.86 304.387.5 324.45c5.55 20.757 53.156 24.1 63.672 42.277 10.668 18.433-10.125 61.304 4.836 76.265 14.96 14.961 57.832-5.828 76.27 4.836 18.171 10.516 21.515 58.121 42.273 63.672 20.062 5.36 46.699-34.05 68.449-34.05s48.387 39.41 68.45 34.05c20.757-5.55 24.1-53.156 42.277-63.672 18.433-10.668 61.304 10.125 76.265-4.836 14.961-14.96-5.828-57.832 4.836-76.27 10.516-18.171 58.121-21.515 63.672-42.273 5.36-20.062-34.05-46.699-34.05-68.449zm0 0",fill:"#ffee8c"}),Te=r.createElement("path",{d:"M426.957 256c0 86.348-64.02 157.746-147.191 169.313a170.874 170.874 0 0 1-23.762 1.64c-94.418 0-170.969-76.539-170.969-170.953 0-94.418 76.55-170.957 170.969-170.957 8.066 0 15.996.555 23.762 1.64C362.937 98.25 426.957 169.649 426.957 256zm0 0",fill:"#f28f44"}),Ye=r.createElement("path",{d:"M426.957 256c0 86.348-64.02 157.746-147.191 169.313C196.59 413.745 132.57 342.347 132.57 256c0-86.352 64.02-157.75 147.196-169.316C362.937 98.25 426.957 169.648 426.957 256zm0 0",fill:"#ffd073"}),$e=r.createElement("g",{fill:"#cc9236"},r.createElement("path",{d:"M155.875 229.488a7.802 7.802 0 0 1-5.54-2.297 7.832 7.832 0 0 1 0-11.082c17.532-17.53 46.056-17.53 63.583 0a7.832 7.832 0 0 1 0 11.082 7.84 7.84 0 0 1-11.082 0c-11.418-11.421-29.996-11.421-41.418 0a7.811 7.811 0 0 1-5.543 2.297zm0 0M356.125 229.488a7.811 7.811 0 0 1-5.543-2.297c-11.418-11.421-30-11.418-41.418 0a7.84 7.84 0 0 1-11.082 0 7.832 7.832 0 0 1 0-11.082c17.527-17.53 46.055-17.53 63.586 0a7.84 7.84 0 0 1-5.543 13.38zm0 0M256 310.582c-17.016 0-33.016-6.629-45.047-18.66a7.84 7.84 0 0 1 0-11.082 7.832 7.832 0 0 1 11.082 0c9.074 9.07 21.133 14.066 33.965 14.066s24.89-4.996 33.965-14.066a7.832 7.832 0 0 1 11.082 0 7.84 7.84 0 0 1 0 11.082c-12.031 12.031-28.031 18.66-45.047 18.66zm0 0"}));function Re(e,n){var t=e.title,c=e.titleId,i=He(e,["title","titleId"]);return r.createElement("svg",Ae({height:682.666,viewBox:"0 0 512 512",width:682.666,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},i),t?r.createElement("title",{id:c},t):null,Qe,Te,Ye,$e)}var Je,Ve,Xe,Ge=r.forwardRef(Re),Ke=(t.p,p.c.div(Je||(Je=Object(l.a)(["\n  position: absolute;\n  right: 0;\n  margin: 5px;\n"])))),Ne=p.c.button(Ve||(Ve=Object(l.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0.3rem;\n  position: relative;\n  width: 4rem;\n  height: 2rem;\n\n  svg {\n    height: auto;\n    width: 1.3rem;\n    transition: all 0.3s linear;\n\n    // sun icon\n    &:first-child {\n      transform: ",";\n      }\n    \n\n    // moon icon\n    &:last-child {\n      transform: ",";\n      }\n      }\n    }\n  }\n"])),(function(e){return e.theme.gradient}),(function(e){return e.theme.toggleBorder}),(function(e){return e.isDark?"translateY(100px)":"translateY(0px)"}),(function(e){return e.isDark?"translateY(0px)":"translateY(100px)"}));var We=Object(p.b)(Xe||(Xe=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:","\n}\na {\n  text-decoration:none;\n  color: inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor})),Ze=function(){var e=Object(r.useState)(!1),n=Object(a.a)(e,2),t=n[0],c=n[1];return Object(v.jsx)(p.a,{theme:t?Se:ze,children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Ke,{children:Object(v.jsxs)(Ne,{isDark:t,onClick:function(){c(!t)},children:[Object(v.jsx)(Ge,{}),Object(v.jsx)(Be,{})]})}),Object(v.jsx)(We,{}),Object(v.jsx)(Ce,{}),Object(v.jsx)(ke.ReactQueryDevtools,{initialIsOpen:!1})]})})},en=new h.QueryClient;o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(h.QueryClientProvider,{client:en,children:Object(v.jsx)(Ze,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.da68e44d.chunk.js.map