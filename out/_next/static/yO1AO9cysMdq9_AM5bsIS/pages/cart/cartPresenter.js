(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{358:function(e,t,a){__NEXT_REGISTER_PAGE("/cart/cartPresenter",function(){return e.exports=a(67),{page:e.exports.default}})},67:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(13),c=a.n(l),i=a(14),u=a(10),p=a(20),o=a(16);var m=function(e,t){return e+t.price};t.default=function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement("title",null,"Cart | Lim Store")),n.a.createElement(i.a,{centerColumn:n.a.createElement("h4",null,"Cart"),rightColumn:n.a.createElement(u.a,{href:"/",text:"Home"}),leftColumn:n.a.createElement(u.a,{href:"/search",text:"Search"})}),n.a.createElement("div",{style:{marginBottom:"50px",display:"grid",gridGap:"10px",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",width:"100%",padding:"0 50px"}},t&&t.cart&&t.cart.map(function(e){return n.a.createElement(o.a,(t={key:e.id,id:e.id,name:e.name,subtitle:e.subtitle,price:e.price,photoUrl:e.photo.url},a="price",r=e.price,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t));var t,a,r})),n.a.createElement("div",{style:{padding:"0px 50px"}},n.a.createElement("h3",null,"Total price: ",t&&t.cart&&t.cart.reduce(m,0)),n.a.createElement(p.a,null,"Check out")))}}},[[358,1,0]]]);