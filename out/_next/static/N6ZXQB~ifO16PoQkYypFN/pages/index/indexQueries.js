(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{371:function(n,e,r){__NEXT_REGISTER_PAGE("/index/indexQueries",function(){return n.exports=r(74),{page:n.exports.default}})},74:function(n,e,r){"use strict";r.r(e),r.d(e,"INDEX_QUERY",function(){return o});var t=r(9),u=r(12);function c(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n    {\n        categories {\n            id\n            name\n        }\n        onSale: products(where: {\n            sale: true\n        }) {\n            ...ProductItems\n        }\n        allProducts: products(where: {\n        OR: [{\n            sale: false\n        }, {\n            sale: true\n        }]}) {\n            ...ProductItems\n        }\n    }\n    ","\n"]);return c=function(){return n},n}var o=Object(t.b)(c(),u.a)}},[[371,1,0]]]);