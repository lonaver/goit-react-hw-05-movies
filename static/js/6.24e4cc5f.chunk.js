"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[6],{539:function(n,e,t){t.d(e,{L:function(){return s}});var r=t(861),i=t(757),c=t.n(i),a=t(243),o="228d8284295592923c769d834cdf0ca4";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(c().mark((function n(){var e,t,r,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"movie/76341",t=i.length>1&&void 0!==i[1]?i[1]:"",n.next=4,a.Z.get("https://api.themoviedb.org/3/".concat(e,"?api_key=").concat(o).concat(t),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhkODI4NDI5NTU5MjkyM2M3NjlkODM0Y2RmMGNhNCIsInN1YiI6IjY0NWNkMDkyMTU2Y2M3MDE1ZTc5MGM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0OWXQGTi84goa4jFlG05fCrd_XVJjVqvLGWlyS6LTWg"}});case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}},6:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,c,a=t(433),o=t(861),s=t(439),u=t(757),p=t.n(u),l=t(791),h=t(87),d=t(539),f=t(689),x=t(168),v=t(444),m=v.ZP.div(r||(r=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  gap: 10px;\n"]))),g=v.ZP.input(i||(i=(0,x.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),j=v.ZP.button(c||(c=(0,x.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n  color: black;\n  background-color: beige;\n  &:focus,\n  &:hover {\n    color: white;\n    background-color: orangered;\n  }\n"]))),y=t(184),b=function(){var n=(0,l.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,h.lr)({}),c=(0,s.Z)(i,2),u=c[0],x=c[1],v=(0,f.TH)();(0,l.useEffect)((function(){var n;if(""!==(null!==(n=u.get("query"))&&void 0!==n?n:"").trim()){var e=function(){var n=(0,o.Z)(p().mark((function n(){var e,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.L)("/search/movie","&".concat(u));case 3:e=n.sent,t=(0,a.Z)(e.data.results),r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();e()}}),[u]);return(0,y.jsxs)("div",{children:[(0,y.jsx)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value.trim();x(""!==e?{query:e}:{}),r([])},children:(0,y.jsxs)(m,{children:[(0,y.jsx)(j,{type:"submit",children:(0,y.jsx)("span",{children:"Search"})}),(0,y.jsx)(g,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",id:"search"})]})}),(0,y.jsx)("ul",{children:t.length>0?t.map((function(n){var e=n.id,t=n.title;return(0,y.jsx)("li",{children:(0,y.jsx)(h.rU,{to:"".concat(e),state:{from:v},children:t})},e)})):(0,y.jsx)("p",{children:"Nothing..."})})]})}}}]);
//# sourceMappingURL=6.24e4cc5f.chunk.js.map