(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OU7M:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("Bl7J");n("+ZDr");function i(){var e=l.a.useState({}),t=e[0],n=e[1],a=function(e){var a;n(Object.assign({},t,((a={})[e.target.name]=e.target.value,a)))};return l.a.createElement("form",{id:"wedding-rsvp",name:"wedding-rsvp",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:function(e){e.preventDefault();var n,a=e.target,l=document.getElementById("confirm");fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(n=Object.assign({"form-name":a.getAttribute("name")},t),Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&"))}).then((function(){return a.setAttribute("hidden","")})).then((function(){return l.removeAttribute("hidden")})).catch((function(e){return alert(e)}))}},l.a.createElement("input",{type:"hidden",name:"form-name",value:"wedding-rsvp"}),l.a.createElement("p",{hidden:!0},l.a.createElement("label",null,"Don’t fill this out:",l.a.createElement("input",{name:"bot-field",onChange:a}))),l.a.createElement("p",null,l.a.createElement("label",null,"Name",l.a.createElement("input",{required:!0,type:"text",id:"fullName",name:"fullName",onChange:a}))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Will you be able to attend?"),l.a.createElement("p",null,l.a.createElement("label",null,"Accepts with pleasure",l.a.createElement("input",{required:!0,type:"radio",id:"attending",name:"attending"}))),l.a.createElement("p",null,l.a.createElement("label",null,"Declines with regret",l.a.createElement("input",{required:!0,type:"radio",id:"not-attending",name:"attending"})))),l.a.createElement("p",null,l.a.createElement("label",null,"Number in party",l.a.createElement("input",{required:!0,type:"number",id:"how-many",name:"how-many",min:"1",max:"10",onChange:a}))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Will you need accomodations?"),l.a.createElement("p",null,l.a.createElement("label",null,"Hotel",l.a.createElement("input",{required:!0,type:"radio",id:"hotel",name:"accomodations",value:"hotel",onChange:a}))),l.a.createElement("p",null,l.a.createElement("label",null,"On site RVing",l.a.createElement("input",{required:!0,type:"radio",id:"rv",name:"accomodations",value:"rv",onChange:a}))),l.a.createElement("p",null,l.a.createElement("label",null,"On site camping",l.a.createElement("input",{required:!0,type:"radio",id:"camping",name:"accomodations",value:"camp",onChange:a}))),l.a.createElement("p",null,l.a.createElement("label",null,"No accomodations needed",l.a.createElement("input",{required:!0,type:"radio",id:"no-accom",name:"accomodations",value:"none",onChange:a})))),l.a.createElement("p",null,l.a.createElement("label",null,"What song would bring you out on the dance floor?",l.a.createElement("input",{id:"song",type:"text",name:"song",onChange:a}))),l.a.createElement("p",null,l.a.createElement("button",{type:"submit"},"Submit")))}var o=n("vrFN");t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(o.a,{title:"RSVP & Registry"}),l.a.createElement("h1",null,"RSVP & Registery"),l.a.createElement("h2",null,"RSVP"),l.a.createElement(i,null),l.a.createElement("div",{hidden:!0,id:"confirm"},l.a.createElement("p",null,"Thank you! Your response has been confirmed.")),l.a.createElement("h2",null,"Registry"),l.a.createElement("p",null,"We are honored you will share in our special day. Your presence is our gift!"),l.a.createElement("p",null,"If you were thinking of giving a gift to help us on our way, a gift of cash toward our house would really make our day. However, if you prefer a gift, feel free to surprise us in your own special way. Visit our registry for options at ",l.a.createElement("a",{href:"https://www.honeyfund.com/wedding/ivy-wilson"},"Ivy-Wilson Registry"),"."))}}}]);
//# sourceMappingURL=component---src-pages-rsvp-js-8bbfb8eede0227c992e9.js.map