"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[556],{539:function(e,n,t){t.d(n,{L:function(){return s}});var r=t(861),c=t(757),a=t.n(c),i=t(243),o="228d8284295592923c769d834cdf0ca4";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(a().mark((function e(){var n,t,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"movie/76341",t=c.length>1&&void 0!==c[1]?c[1]:"",e.next=4,i.Z.get("https://api.themoviedb.org/3/".concat(n,"?api_key=").concat(o).concat(t),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhkODI4NDI5NTU5MjkyM2M3NjlkODM0Y2RmMGNhNCIsInN1YiI6IjY0NWNkMDkyMTU2Y2M3MDE1ZTc5MGM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0OWXQGTi84goa4jFlG05fCrd_XVJjVqvLGWlyS6LTWg"}});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}},556:function(e,n,t){t.r(n);var r=t(433),c=t(861),a=t(439),i=t(757),o=t.n(i),s=t(791),u=t(689),h=t(539),l=t(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],i=n[1],p=(0,u.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.L)("/movie/".concat(p,"/reviews"));case 3:n=e.sent,t=(0,r.Z)(n.data.results),i(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:t.length>0?t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:t}),(0,l.jsx)("p",{children:r})]},n)})):(0,l.jsx)("p",{children:"We don`t have any reviews"})})})}}}]);
//# sourceMappingURL=556.41afc984.chunk.js.map