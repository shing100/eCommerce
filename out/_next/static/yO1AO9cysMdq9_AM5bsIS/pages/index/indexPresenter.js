(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{370:function(e,t,a){__NEXT_REGISTER_PAGE("/index/indexPresenter",function(){return e.exports=a(71),{page:e.exports.default}})},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),i=a.n(r),o=a(14),m=a(10),c=a(391),p=a(16),u=a(18),d=c.a.Content;t.default=function(e){var t=e.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("title",null,"Home | Lim Store")),l.a.createElement(o.a,{centerColumn:l.a.createElement("h4",null,"Lim Store"),rightColumn:l.a.createElement(u.a,null),leftColumn:l.a.createElement(m.a,{href:"/search",text:"Search"})}),l.a.createElement(d,{style:{padding:"0 50px"}},l.a.createElement("div",{style:{display:"grid",gridGap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))",width:"100%"}},t&&t.categories&&t.categories.map(function(e){return l.a.createElement(m.a,{key:e.id,href:"/category?name=".concat(e.name.toLowerCase()),hrefAs:"/category/".concat(e.name.toLowerCase()),text:e.name})})),l.a.createElement("div",{style:{marginTop:"50px"}},t&&t.onSale&&0!==t.onSale.length&&l.a.createElement("h2",null,"On Sale"),l.a.createElement("div",{style:{display:"grid",gridGap:"10px",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",width:"100%"}},t&&t.onSale&&t.onSale.map(function(e){return l.a.createElement(p.a,{key:e.id,id:e.id,name:e.name,subtitle:e.subtitle,price:e.price,photoUrl:e.photo.url})}))),l.a.createElement("div",{style:{marginTop:"50px"}},t&&t.onSale&&0!==t.onSale.length&&l.a.createElement("h2",null,"All Products"),l.a.createElement("div",{style:{display:"grid",gridGap:"10px",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",width:"100%"}},t&&t.allProducts&&t.allProducts.map(function(e){return l.a.createElement(p.a,{key:e.id,id:e.id,name:e.name,subtitle:e.subtitle,price:e.price,photoUrl:e.photo.url})})))))}}},[[370,1,0]]]);