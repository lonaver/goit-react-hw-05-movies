"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[556],{539:function(e,t,n){n.d(t,{L:function(){return u},_:function(){return s}});var r=n(861),c=n(757),i=n.n(c),a=n(243),o="228d8284295592923c769d834cdf0ca4",s="https://image.tmdb.org/t/p/w500";function u(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(i().mark((function e(){var t,n,r,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"movie/76341",n=c.length>1&&void 0!==c[1]?c[1]:"",e.next=4,a.Z.get("https://api.themoviedb.org/3/".concat(t,"?api_key=").concat(o).concat(n),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhkODI4NDI5NTU5MjkyM2M3NjlkODM0Y2RmMGNhNCIsInN1YiI6IjY0NWNkMDkyMTU2Y2M3MDE1ZTc5MGM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0OWXQGTi84goa4jFlG05fCrd_XVJjVqvLGWlyS6LTWg"}});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},556:function(e,t,n){n.r(t);var r=n(433),c=n(861),i=n(439),a=n(757),o=n.n(a),s=n(791),u=n(689),h=n(539),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1],l=(0,u.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.L)("/movie/".concat(l,"/reviews"));case 3:t=e.sent,n=(0,r.Z)(t.data.results),a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:n.length>0?n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:n}),(0,p.jsx)("p",{children:r})]},t)})):(0,p.jsx)("p",{children:"We don`t have any reviews"})})})}}}]);
//# sourceMappingURL=556.4fb76e48.chunk.js.map