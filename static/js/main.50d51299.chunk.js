(this.webpackJsonpolemdb=this.webpackJsonpolemdb||[]).push([[0],{108:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},127:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(72),i=c.n(s),n=c(28),r=c(5),o=c(34),m=c.n(o),j=c(46),l=c(20),d=(c(80),c(2));var h=function(e){return Object(d.jsx)("div",{className:"zoom",children:Object(d.jsx)(n.b,{to:"/"+e.id,style:{textDecoration:"none",color:"black"},children:Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"card shadow-sm",style:{width:"15rem"},children:[Object(d.jsx)("img",{width:"150",height:"300",src:e.img,className:"card-img-top",alt:e.title}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("h5",{className:"card-title",children:e.title})})]})})})})};c(87);var b=function(e){return Object(d.jsx)("div",{className:"album py-5 ",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:e.children})})})};var O=function(e){return Object(d.jsx)(b,{children:e.moviez&&e.moviez.map((function(e){return Object(d.jsx)(h,{id:e.imdbID,title:e.Title,img:"N/A"===e.Poster?"https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/abstract/45/c64ba65313143652.jpg":e.Poster},e.imdbID)}))})};c(88);var u=function(e){var t="";return Object(d.jsx)("form",{children:Object(d.jsx)("div",{className:"input-group",children:Object(d.jsx)("input",{type:"text",onChange:function(c){t=c.target.value,e.searchData(t)},className:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"})})})},p=c(48),M=c.n(p),v=(c(60),[{Title:"The Avengers",Year:"2012",imdbID:"tt0848228",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{Title:"Avengers: Endgame",Year:"2019",imdbID:"tt4154796",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"},{Title:"Iron Man Three",Year:"2013",imdbID:"tt1300854",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"},{Title:"Valimai",Year:"2021",imdbID:"tt10806040",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BOTBmZTA3MWMtOTFkMy00MjI4LTk4ZjEtZmQ1YjI4MzJhMzA4XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"},{Title:"Sex Education",Year:"2019\u2013",imdbID:"tt7767422",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg"},{Title:"Money Heist: The Phenomenon",Year:"2020",imdbID:"tt12078990",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BZjA4MWI4MGItMmZmYi00MmYyLTgyYTEtYjVkM2Q5OTIxYzAwXkEyXkFqcGdeQXVyMTE1OTI5NDg5._V1_SX300.jpg"},{Title:"Master",Year:"2021",imdbID:"tt10579952",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg"},{Title:"Kabali",Year:"2016",imdbID:"tt5071886",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BOWU1NTA5OGUtZTJkMC00MjBiLWE3NjAtYjhkZWY4ZWNjMjBlXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg"},{Title:"The Kissing Booth",Year:"2018",imdbID:"tt3799232",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_SX300.jpg"}]);var x=function(){var e=Object(a.useRef)(!0),t=Object(a.useState)(),c=Object(l.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(v),r=Object(l.a)(n,2),o=r[0],h=r[1],b=Object(a.useState)(!0),p=Object(l.a)(b,2),x=p[0],N=p[1],T=function(){var e=Object(j.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=56bb3b76&s="+s);case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.t0=h,e.next=9,c.Search;case 9:e.t1=e.sent,(0,e.t0)(e.t1),N(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){e.current?(e.current=!1,N(!1)):T()}),[s]),console.log(o),Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{searchData:function(e){i(e),N(!0)}}),x?Object(d.jsx)(M.a,{className:"center",type:"Puff",color:"#000",height:100,width:100}):Object(d.jsx)(O,{moviez:o})]})},N=(c(107),c(108),function(e){var t=e.movie,c=t.Poster,a=!1;return t.Ratings&&(a=t.Ratings[0].Value),Object(d.jsx)("div",{id:"root",className:"container",children:Object(d.jsxs)("div",{className:"row mt-5",children:[Object(d.jsxs)("div",{className:"col-4",children:[Object(d.jsx)("img",{width:"N/A"===c?"300":"",height:"N/A"===c?"400":"",src:"N/A"===c?"https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/abstract/45/c64ba65313143652.jpg":c,alt:t.Title}),Object(d.jsxs)("h1",{className:"mt-4",children:[" ",Object(d.jsx)("i",{className:"bi bi-star-fill",children:" "}),a&&a]})]}),Object(d.jsxs)("div",{className:"col-8",children:[Object(d.jsx)("h2",{children:t.Title}),Object(d.jsxs)("h3",{children:["Directed by : ",t.Director]}),Object(d.jsxs)("h4",{className:"mt-4",children:[t.Year," ",Object(d.jsx)("span",{className:"space"})," ",t.Runtime]}),Object(d.jsx)("h4",{children:t.Genre}),Object(d.jsx)("div",{className:"containter",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("p",{className:"mt-4 col-8",children:t.Plot})})})]})]})})}),T=function(e){var t=Object(r.f)().id,c=Object(a.useState)({}),s=Object(l.a)(c,2),i=s[0],n=s[1],o=Object(a.useState)(!0),h=Object(l.a)(o,2),b=h[0],O=h[1];Object(a.useEffect)((function(){u(t)}),[]);var u=function(){var e=Object(j.a)(m.a.mark((function e(t){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=56bb3b76&i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,n(a),O(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:b?Object(d.jsx)(M.a,{className:"center",type:"Puff",color:"#000",height:100,width:100}):Object(d.jsx)(N,{movie:i})})},g=(c(109),c(122),c(126),c(123),function(e){return Object(d.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(d.jsx)(n.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("span",{className:"navbar-brand mb-0 h1",children:Object(d.jsxs)("strong",{children:[Object(d.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-film me-2",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"})}),"OLEMDB"]})})})})})});c(124),c(125);i.a.render(Object(d.jsxs)(n.a,{basename:"/",children:[Object(d.jsx)(g,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",exact:!0,children:Object(d.jsx)(x,{})}),Object(d.jsx)(r.a,{path:"/:id",exact:!0,children:Object(d.jsx)(T,{})})]})]}),document.getElementById("root"))},60:function(e,t,c){},80:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){}},[[127,1,2]]]);
//# sourceMappingURL=main.50d51299.chunk.js.map