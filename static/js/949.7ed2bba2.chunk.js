"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[949],{3965:function(e,t,a){a.d(t,{A:function(){return s}});var r=a(4569),s=a.n(r)().create({baseURL:"https://api.themoviedb.org/3/"})},6949:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(5861),s=a(8152),n=a(7757),c=a.n(n),o=a(2791),u=a(3965),l=a(3504),i=function(e,t){try{var a=JSON.stringify(t);localStorage.setItem(e,a)}catch(r){console.error("Set state error: ",r.message)}},h=a(6061),f="MoviesPage_MoviesPage_btn__vpZs1",p="MoviesPage_MoviesPage_search__eME0O",v="MoviesPage_MoviesPage_list__Z5qsz",m=a(184),d=function(){var e=(0,o.useState)(""),t=(0,s.Z)(e,2),a=t[0],n=t[1],d=(0,o.useState)([]),g=(0,s.Z)(d,2),_=g[0],x=g[1],S=(0,o.useState)(!1),b=(0,s.Z)(S,2),j=b[0],k=b[1],N=(0,o.useState)(null),y=(0,s.Z)(N,2),M=(y[0],y[1]),Z=function(){var e=(0,r.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(!0),e.prev=2,e.next=5,u.A.get("search/movie?api_key=b44664f7e0740398ed834dca0818b840&language=en-US&query=".concat(a,"&page=1&include_adult=false"));case 5:r=e.sent,x(r.data.results),i("searchResults",r.data.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),M(e.t0);case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){var e=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(a){console.error("Get state error: ",a.message)}}("searchResults");e&&x(e)}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("header",{className:"",children:(0,m.jsxs)("form",{className:"",onSubmit:Z,children:[(0,m.jsx)("button",{type:"submit",className:f,children:(0,m.jsx)("span",{className:"",children:"Search"})}),(0,m.jsx)("input",{value:a,onChange:function(e){e.preventDefault(),n(e.target.value)},className:p,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})}),_.length>0&&(0,m.jsx)("ul",{children:_.map((function(e){return(0,m.jsx)("li",{className:v,children:(0,m.jsx)(l.rU,{to:"/movies/".concat(e.id),className:v,children:e.original_title})},e.id)}))}),j&&(0,m.jsx)(h.a,{color:"#3f51b5"})]})}}}]);
//# sourceMappingURL=949.7ed2bba2.chunk.js.map