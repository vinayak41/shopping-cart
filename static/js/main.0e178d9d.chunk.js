(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{20:function(e,a,t){e.exports=t(32)},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),m=t.n(c),l=(t(25),t(19)),i=t(14),s=t(6),o=t(1);t(26);var p=function(){return r.a.createElement("div",{className:"home container-fluid d-flex flex-column text-center"},r.a.createElement("h1",null,"E-Shop"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi enim sed optio ad tempore vero accusantium! Porro, quasi asperiores fugiat quam dolorum natus quos at officiis nam enim alias, ad minima. Perferendis, quibusdam laudantium."),r.a.createElement("button",{className:"shop-button"},r.a.createElement(s.b,{to:"/Shop"},"START \xa0 SHOPPING")))};var u=function(e){var a=e.products,t=e.addItemInCart;return r.a.createElement("div",{className:"shop container d-flex flex-wrap"},a.map((function(e){return r.a.createElement("div",{className:"card",key:e.name},r.a.createElement("img",{className:"card-img-top",src:e.imgURL,alt:e.name}),r.a.createElement("div",{className:"card-body d-flex flex-column justify-content-center"},r.a.createElement("h4",{className:"card-title text-center"},e.name),r.a.createElement("p",{className:"card-text text-center"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, eius?"),r.a.createElement("h6",{className:"card-title text-center"}," \u20b9\xa0",e.price),r.a.createElement("button",{className:"btn mx-auto btn-primary",onClick:function(){return t(e)}},r.a.createElement("i",{className:"fas fa-cart-plus"}),"\xa0\xa0Add to Cart")))})))},d=[{name:"Apple iPhone 11",imgURL:"/shopping-cart/images/products/Apple iPhone 11.jpg",price:64e3},{name:"Coolpad Cool 5",imgURL:"/shopping-cart/images/products/Coolpad Cool 5.jpg",price:25e3},{name:"OPPO A5 2020",imgURL:"/shopping-cart/images/products/OPPO A5 2020.jpg",price:14e3},{name:"Redmi 8A Dual",imgURL:"/shopping-cart/images/products/Redmi 8A Dual.jpg",price:11e3},{name:"Redmi Note 9 Pro",imgURL:"/shopping-cart/images/products/Redmi Note 9 Pro.jpg",price:15e3},{name:"Samsung Galaxy M31",imgURL:"/shopping-cart/images/products/2.jpg",price:17e3},{name:"Tecno Spark 6 Air",imgURL:"/shopping-cart/images/products/Tecno Spark 6 Air.jpg",price:9e3},{name:"Vivo Y91i",imgURL:"/shopping-cart/images/products/1.jpg",price:19e3}];var g=function(e){for(var a=e.cartItems,t=0,n=0;n<a.length;n++)t+=a[n].price;return 0===a.length?r.a.createElement("h1",null,"No Items Added"):r.a.createElement("div",{className:"cart container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"bg-primary"},r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",{className:"bg-warning"},a.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price))}))),r.a.createElement("thead",{className:"bg-primary"},r.a.createElement("tr",null,r.a.createElement("th",null,"Total"),r.a.createElement("th",null,t)))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn bg-success"},"CHECKOUT")))};var E=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],c=a[1],m=Object(n.useState)([]),E=Object(i.a)(m,2),h=E[0],f=E[1],N=function(e){f([].concat(Object(l.a)(h),[e])),c(t+1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/Shop"},"Shop")),r.a.createElement("li",{className:"nav-item ml-auto mr-5"},r.a.createElement(s.b,{className:"nav-link",to:"/Cart"},r.a.createElement("i",{className:"fas fa-shopping-cart"}),"\xa0\xa0",t))),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:p,exact:!0}),r.a.createElement(o.a,{path:"/Shop",render:function(e){return r.a.createElement(u,Object.assign({},e,{addItemInCart:N,products:d}))}}),r.a.createElement(o.a,{path:"/Cart",render:function(e){return r.a.createElement(g,Object.assign({},e,{cartItems:h}))}})))};m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(E,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0e178d9d.chunk.js.map