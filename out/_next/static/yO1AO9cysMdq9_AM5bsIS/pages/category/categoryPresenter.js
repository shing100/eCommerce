(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{363:function(e,t,a){__NEXT_REGISTER_PAGE("/category/categoryPresenter",function(){return e.exports=a(69),{page:e.exports.default}})},69:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(13),l=a.n(o),c=a(14),i=a(10),m=a(391),p=a(16),u=a(18),d=m.a.Content;t.default=function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement("title",null,"Home | Lim Store")),n.a.createElement(c.a,{centerColumn:n.a.createElement("h4",null,"Lim Store"),rightColumn:n.a.createElement(u.a,null),leftColumn:n.a.createElement(i.a,{href:"/",text:"Home"})}),n.a.createElement(d,{style:{padding:"0 50px"}},n.a.createElement("div",{style:{display:"grid",gridGap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))",width:"100%"}},t&&t.categories&&t.categories.map(function(e){return n.a.createElement(i.a,{key:e.id,href:"/category?name=".concat(e.name.toLowerCase()),hrefAs:"/category/".concat(e.name.toLowerCase()),text:e.name})})),n.a.createElement("div",{style:{marginTop:"50px"}},t&&t.category[0]&&t.category[0].products&&0!==t.category[0].products.length&&n.a.createElement("h2",null,t.category[0].name),n.a.createElement("div",{style:{display:"grid",gridGap:"10px",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",width:"100%"}},t&&t.category&&t.category[0].products&&t.category[0].products.map(function(e){return n.a.createElement(p.a,{key:e.id,id:e.id,name:e.name,subtitle:e.subtitle,price:e.price,photoUrl:e.photo.url})})))))}}},[[363,1,0]]]);