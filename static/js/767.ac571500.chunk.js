"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[767],{767:function(n,e,r){r.r(e),r.d(e,{default:function(){return p}});var i,s=r(885),t=r(791),l=r(731),o=r(689),a=r(168),c=r(934).Z.div(i||(i=(0,a.Z)(["\n//   display: flex;\n  align-items: center;\n//   border-radius: 4px;\n//   text-decoration: none;\n//   color: rgb(114, 208, 252);\n//   &.active {\n//     background-color: rgb(243, 247, 156);\n//     color: (114, 208, 252);\n//   }\n//   :hover:not(.active),\n//   :focus-visible:not(.active) {\n//     color: rgb(243, 247, 156);\n//   }\nbutton{\n  margin: 0px auto 10px 10px;\n  background-color: rgb(114, 208, 252);\n  border-color: rgb(114, 208, 252);\n  color: rgb(38, 38, 36);\n}\n.card{\n  display: flex;\n    margin: 0px 10px 10px 10px;\n}\nimg{\n  margin-right: 10px;\n}\n.right{\ndisplay: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  h2{\n    color: rgb(114, 208, 252);\n  }\n  p{\n    // color: rgb(243, 247, 156);\n  }\n  b{\n    color: rgb(114, 208, 252);\n  }\n  .genres{\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n  }\n  .text{\n    margin: 0px 5px 0px 5px;\n  }\n  .information{\n    text-align: center;\n    color: rgb(114, 208, 252);\n  }\n  ul{\n    // display: flex;\n    // flex-wrap: wrap;\n    padding: 0px;\n}\n  li{\n    list-style: none; \n    margin: 5px auto 0px 10px;\n      // box-shadow: 1px 1px 1px rgb(114, 208, 252), \n      //     4px 4px 4px rgb(114, 208, 252), \n      //     1px 4px 6px rgb(114, 208, 252);\n}\n\n\n"]))),x=r(643),d=r(184);function p(){var n,e,r=(0,t.useState)(null),i=(0,s.Z)(r,2),a=i[0],p=i[1],h=(0,o.UO)().movieId,g=(0,o.TH)(),u=(0,o.s0)();if((0,t.useEffect)((function(){(0,x.wh)(h).then(p)}),[h]),!a)return null;var b=a.genres,m=a.overview,v=a.title,f=a.vote_average,j=a.release_date,w=a.poster_path,_=null!==(n=null===g||void 0===g||null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,d.jsxs)(c,{children:[(0,d.jsx)("button",{className:"button",onClick:function(){return u(_)},children:"Go back"}),(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("img",{width:200,src:"https://image.tmdb.org/t/p/w500".concat(w),alt:""}),(0,d.jsxs)("div",{className:"right",children:[(0,d.jsx)("h2",{children:v}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"User score:"})," ",10*f,"%"]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Overview:"})," ",m]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Release date:"})," ",j]}),b&&(0,d.jsxs)("div",{className:"genres",children:[(0,d.jsx)("b",{children:"Genres:"})," ",b.map((function(n){var e=n.id,r=n.name;return(0,d.jsx)("p",{className:"text",children:r},e)}))," "]})]})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{className:"information",children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"cast",state:{from:_},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"reviews",state:{from:_},children:"Reviews"})})]})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=767.ac571500.chunk.js.map