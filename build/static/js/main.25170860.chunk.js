(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{119:function(e,t,c){},120:function(e,t,c){},231:function(e,t,c){},232:function(e,t,c){},234:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(7),s=c.n(r),o=c(25),i=c.n(o),l=c(44),u=c(12),d=c(269),j=c(270),h=c(271),f=c(261),b=c(265),v=(c(119),c(266)),p=(c(120),c(3));var O=function(e){var t=e.title,c=e.cases,n=e.total;return Object(p.jsx)(f.a,{children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(v.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(p.jsx)("h2",{className:"infoBox__cases",children:c}),Object(p.jsx)(v.a,{className:"infoBox__total",color:"textSecondary",children:n})]})})},x=c(107),m=c(32),g=c.n(m),y={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return g()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return g()(e).format("0a")}}}]}},w=function(e){var t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var a in e.cases){if(t){var r={x:a,y:e[c][a]-t};n.push(r)}t=e[c][a]}return n};var _=function(e){var t=e.casesType,c=Object(n.useState)({}),a=Object(u.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=w(e,"cases");s(t),console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(p.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(p.jsx)(x.a,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:y})})},N=c(268),C=c(273),k=(c(231),c(10)),S=c(272),I=c(267),D={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:200},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:320},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:400}},z=function(e){return Object(k.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(p.jsx)(S.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:D[t].hex,fillColor:D[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*D[t].multiplier,children:Object(p.jsx)(I.a,{children:Object(p.jsxs)("div",{className:"info-container",children:[Object(p.jsx)("div",{className:"info-flag",style:{background:"url(".concat(e.countryInfo.flag,")"),width:"3rem",height:"2rem",backgroundPosition:"center",backgroundSize:"cover"}}),Object(p.jsx)("div",{className:"info-name",children:e.country}),Object(p.jsxs)("div",{className:"info-confirmed",children:["Cases: ",g()(e.cases).format("0,0")]}),Object(p.jsxs)("div",{className:"info-recovered",children:["Recovered: ",g()(e.recovered).format("0,0")]}),Object(p.jsxs)("div",{className:"info-deaths",children:["Deaths: ",g()(e.deaths).format("0,0")]})]})})})}))};var E=function(e){var t=e.countries,c=e.casesType,a=e.center,r=e.zoom;console.log("this is a map = ".concat(a));var s=Object(n.useState)(a),o=Object(u.a)(s,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){l(a)})),Object(p.jsx)("div",{className:"map",children:Object(p.jsxs)(N.a,{center:i,zoom:r,children:[Object(p.jsx)(C.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),B(t,c)]})})};c(232);var F=function(e){var t=e.countries;return Object(p.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t}),Object(p.jsx)("td",{children:c})]})}))})};c(233);function M(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("worldwide"),s=Object(u.a)(r,2),o=s[0],v=s[1],x=Object(n.useState)({}),m=Object(u.a)(x,2),g=m[0],y=m[1],w=Object(n.useState)([]),N=Object(u.a)(w,2),C=N[0],k=N[1],S=Object(n.useState)({lat:34.80746,lng:-40.4796}),I=Object(u.a)(S,2),D=I[0],B=I[1],M=Object(n.useState)([]),T=Object(u.a)(M,2),L=T[0],R=T[1],A=Object(n.useState)(3),P=Object(u.a)(A,2),J=P[0],W=P[1],Y=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"==c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){v(c),y(e),W(2);e.countryInfo.lat,e.countryInfo.long;B([e.countryInfo.lat,e.countryInfo.long]),W(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(g),Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=z(e);k(c),a(t),R(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)("div",{className:"app__left",children:[Object(p.jsxs)("div",{className:"app__header",children:[Object(p.jsx)("h1",{children:"Covid-19-tracker"}),Object(p.jsx)(d.a,{className:"app_dropdown",children:Object(p.jsxs)(j.a,{variant:"outlined",value:o,onChange:Y,children:[Object(p.jsx)(h.a,{value:"worldwide",children:"World Wide"}),c.map((function(e){return Object(p.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(p.jsxs)("div",{className:"app__stats",children:[Object(p.jsx)(O,{title:"Coronavirus Cases",cases:g.todayCases,total:g.cases}),Object(p.jsx)(O,{title:"Recovered",cases:g.todayRecovered,total:g.recovered}),Object(p.jsx)(O,{title:"Deaths",cases:g.todayDeaths,total:g.deaths})]}),Object(p.jsx)(E,{countries:L,casesType:"cases",center:D,zoom:J})]}),Object(p.jsx)("div",{className:"app__right",children:Object(p.jsx)(f.a,{children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)("h3",{children:"Live cases by country"}),Object(p.jsx)(F,{countries:C}),Object(p.jsx)("h3",{children:"worldwide new cases"}),Object(p.jsx)(_,{})]})})})]})}var T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,275)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),T()}},[[234,1,2]]]);
//# sourceMappingURL=main.25170860.chunk.js.map