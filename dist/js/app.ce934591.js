(function(t){function e(e){for(var s,c,l=e[0],o=e[1],r=e[2],p=0,m=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},n=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="crm-sys-repo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"216f":function(t,e,a){"use strict";a("a4d0")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"2e0f":function(t,e,a){"use strict";a("6ee3")},3208:function(t,e,a){"use strict";a("ea07")},4527:function(t,e,a){"use strict";a("f1d4")},"473b":function(t,e,a){"use strict";a("ef16")},"4eca":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("SideBar"),a("MainPage"),a("div",{staticClass:"clear"})],1)},n=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"side-bar"},[t._m(0),a("div",{staticClass:"pages"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[a("font-awesome-icon",{attrs:{icon:"home"}}),a("span",{staticClass:"page-name"},[t._v("home")])],1)],1),a("li",[a("router-link",{attrs:{to:"/tickets"}},[a("font-awesome-icon",{attrs:{icon:"ticket-alt"}}),a("span",{staticClass:"page-name"},[t._v("tickets")])],1)],1),a("li",[a("router-link",{attrs:{to:"/patients"}},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("span",{staticClass:"page-name"},[t._v("patients")])],1)],1),a("li",[a("router-link",{attrs:{to:"/reports"}},[a("font-awesome-icon",{attrs:{icon:"file-invoice"}}),a("span",{staticClass:"page-name"},[t._v("reports")])],1)],1),a("li",[a("router-link",{attrs:{to:"/calendar"}},[a("font-awesome-icon",{attrs:{icon:"calendar-alt"}}),a("span",{staticClass:"page-name"},[t._v("calendar")])],1)],1)])])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),s("span",{staticClass:"logo-title"},[t._v("Vue.js")]),s("div",{staticClass:"clear"})])}],o={name:"SideBar",props:{},components:{}},r=o,d=(a("3208"),a("2877")),p=Object(d["a"])(r,c,l,!1,null,"2cae59d6",null),m=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-page"},[a("div",{staticClass:"header"},[a("font-awesome-icon",{staticClass:"side-toggle",attrs:{icon:"bars"}}),t._m(0),t._m(1),a("div",{staticClass:"clear"})],1),a("router-view"),t._m(2)],1)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-form"},[a("form",{attrs:{action:""}},[a("input",{attrs:{type:"text",placeholder:"Search In Tickets And Customers"}}),a("button",[t._v("search")]),a("div",{staticClass:"clear"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-badge"},[s("img",{attrs:{src:a("d95b"),alt:"user-pic"}}),s("span",[t._v("Mohamed")]),s("div",{staticClass:"clear"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("h4",[t._v("designed by "),a("span",[t._v("<mohamed elsayed/>")])])])}],f=a("1157"),_=a.n(f),C={name:"MainPage",props:{},components:{},mounted:function(){_()(".side-toggle").click((function(){_()(".side-bar").toggleClass("mini"),_()(".main-page").toggleClass("extend")}))}},h=C,k=(a("f304"),Object(d["a"])(h,v,u,!1,null,"58f42e5e",null)),g=k.exports,y={name:"App",props:{},components:{SideBar:m,MainPage:g}},b=y,E=(a("5c0b"),Object(d["a"])(b,i,n,!1,null,null,null)),w=E.exports,T=a("9483");Object(T["a"])("".concat("crm-sys-repo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var $=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"dashboard"},[a("div",{staticClass:"dash-cards"},[a("div",{staticClass:"card active"},[a("font-awesome-icon",{attrs:{icon:"ticket-alt"}}),t._m(0)],1),a("div",{staticClass:"card finished"},[a("font-awesome-icon",{attrs:{icon:"ticket-alt"}}),t._m(1)],1),a("div",{staticClass:"card patients"},[a("font-awesome-icon",{attrs:{icon:"user"}}),t._m(2)],1),a("div",{staticClass:"card doctors"},[a("font-awesome-icon",{attrs:{icon:"user-md"}}),t._m(3)],1)])]),a("hr"),a("div",{staticClass:"tickets-section"},[a("div",{staticClass:"all-tickets"},[a("div",{staticClass:"examines-tickets"},[t._m(4),a("div",{staticClass:"tickets-contain"},[a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}})],1)]),a("div",{staticClass:"consults-tickets"},[t._m(5),a("div",{staticClass:"tickets-contain"},[a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}})],1)]),a("div",{staticClass:"surgeries-tickets"},[t._m(6),a("div",{staticClass:"tickets-contain"},[a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}})],1)]),a("div",{staticClass:"clear"})])]),a("hr"),a("div",{staticClass:"patients-section"},[a("div",{staticClass:"all-patients"},[t._m(7),a("div",{staticClass:"patients-contain"},[t._m(8),a("PatientComp",{attrs:{onclick:"document.getElementById('patient-page').style.display='block'"}}),a("PatientComp",{attrs:{onclick:"document.getElementById('patient-page').style.display='block'"}}),a("PatientComp",{attrs:{onclick:"document.getElementById('patient-page').style.display='block'"}}),a("PatientComp",{attrs:{onclick:"document.getElementById('patient-page').style.display='block'"}}),a("PatientComp",{attrs:{onclick:"document.getElementById('patient-page').style.display='block'"}}),a("PatientComp",{attrs:{onclick:"document.getElementById('patient-page').style.display='block'"}}),a("PatientComp",{attrs:{onclick:"document.getElementById('patient-page').style.display='block'"}}),a("PatientComp",{attrs:{onclick:"document.getElementById('patient-page').style.display='block'"}})],1)])]),a("TicketPage")],1)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-contain"},[a("span",{staticClass:"num-active"},[t._v("400")]),t._v(" Active ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-contain"},[a("span",{staticClass:"num-finished"},[t._v("400")]),t._v(" Finished ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-contain"},[a("span",{staticClass:"num-patients"},[t._v("400")]),t._v(" Patients ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-contain"},[a("span",{staticClass:"num-doctors"},[t._v("400")]),t._v(" Doctors ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h4s"},[a("div",{staticClass:"left"},[a("h4",[t._v("left")])]),a("div",{staticClass:"center"},[a("h4",[t._v("examines")])]),a("div",{staticClass:"right"},[a("h4",[t._v("right")])]),a("div",{staticClass:"clear"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h4s"},[a("div",{staticClass:"left"},[a("h4",[t._v("left")])]),a("div",{staticClass:"center"},[a("h4",[t._v("consults")])]),a("div",{staticClass:"right"},[a("h4",[t._v("right")])]),a("div",{staticClass:"clear"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h4s"},[a("div",{staticClass:"left"},[a("h4",[t._v("left")])]),a("div",{staticClass:"center"},[a("h4",[t._v("surgeries")])]),a("div",{staticClass:"right"},[a("h4",[t._v("right")])]),a("div",{staticClass:"clear"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h4s"},[a("div",{staticClass:"left"},[a("h4",[t._v("left")])]),a("div",{staticClass:"center"},[a("h4",[t._v("new patients")])]),a("div",{staticClass:"right"},[a("h4",[t._v("right")])]),a("div",{staticClass:"clear"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"patient-panel-info"},[a("span",{staticClass:"patient-img"},[t._v("img")]),a("span",{staticClass:"patient"},[t._v("name")]),a("span",{staticClass:"phone"},[t._v("phone")]),a("span",{staticClass:"address"},[t._v("address")]),a("span",{staticClass:"email"},[t._v("email")])])}],I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ticket"},[a("div",{staticClass:"ticket-panel"},[a("span",{staticClass:"id"},[t._v("5419")]),a("span",{staticClass:"patient"},[t._v("yossef ahmed")]),a("span",{staticClass:"phone"},[t._v("01095486187")]),a("span",{staticClass:"type"},[t._v("examine")]),a("span",{staticClass:"status"},[t._v("active")]),a("span",{staticClass:"appoint"},[t._v("29-10-2021")])]),a("div",{staticClass:"ticket-ext"},[a("h4",[t._v("ticket description")]),a("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat, ex, voluptatibus doloremque placeat illum ratione culpa numquam porro eaque eligendi tenetur quidem assumenda provident iusto ullam aut enim molestiae! ")]),a("button",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}},[t._v(" view ticket ")]),a("div",{staticClass:"clear"})])])}],S={name:"TicketComp",props:{},components:{}},O=S,j=(a("9e6f"),Object(d["a"])(O,I,B,!1,null,"35e9243e",null)),M=j.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"patient"},[t._m(0),a("div",{staticClass:"patient-ext"},[a("div",{staticClass:"patient-tickets"},[a("div",{staticClass:"patient-active"},[a("span",{staticClass:"tickets-title"},[t._v("active tickets")]),a("div",{staticClass:"tickets-contain"},[a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}})],1)]),a("div",{staticClass:"patient-finish"},[a("span",{staticClass:"tickets-title"},[t._v("finished tickets")]),a("div",{staticClass:"tickets-contain"},[a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}}),a("TicketComp",{attrs:{onclick:"document.getElementById('ticket-page').style.display='block'"}})],1)]),a("div",{staticClass:"clear"})]),a("button",{staticClass:"patient-page",attrs:{onclick:"document.getElementById('patient-page').style.display='block'"}},[t._v(" view profile ")]),a("button",{staticClass:"new-ticket",attrs:{onclick:"document.getElementById('new-ticket').style.display='block'"}},[t._v(" new ticket ")]),a("button",{staticClass:"new-ticket",attrs:{onclick:"document.getElementById('new-ticket').style.display='block'"}},[t._v(" send email ")]),a("div",{staticClass:"clear"})]),a("TicketPage"),a("NewTicket")],1)},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"patient-panel"},[s("span",{staticClass:"patient-img"},[s("img",{attrs:{src:a("d95b"),alt:""}})]),s("span",{staticClass:"patient"},[t._v("hazem soliman")]),s("span",{staticClass:"phone"},[t._v("01015479215")]),s("span",{staticClass:"address"},[t._v("alexandria")]),s("span",{staticClass:"email"},[t._v("myemail49@yahoo.com")]),s("span",{staticClass:"active"},[t._v("1")]),s("span",{staticClass:"finish"},[t._v("4")]),s("span",{staticClass:"date"},[t._v("28-11-2021")])])}],N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ticket-page"},[a("div",{staticClass:"modal-ticket-page",attrs:{id:"ticket-page"}},[a("form",{staticClass:"modal-content",attrs:{action:"/action_page.php"}},[a("span",{staticClass:"close",attrs:{onclick:"document.getElementById('ticket-page').style.display='none'",title:"Close Modal"}},[t._v("×")]),a("div",{staticClass:"contain"},[a("div",{staticClass:"modal-head"},[a("span",[t._v("ticket page")])]),a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"id"}},[a("b",[t._v("ticket ID")])]),a("span",[t._v("5149")])]),a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"name"}},[a("b",[t._v("name")])]),a("span",[t._v("Youssef Ahmed")]),a("select",{staticClass:"vanish",attrs:{name:"patient-name",id:""}},[a("option",{attrs:{value:""}},[t._v("Select Patient")]),a("option",{attrs:{value:"youssef"}},[t._v("Youssef Ahmed")]),a("option",{attrs:{value:"hazem"}},[t._v("Hazem Soliman")]),a("option",{attrs:{value:"mohamed"}},[t._v("Mohamed Elsayed")])])]),a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"phone"}},[a("b",[t._v("phone")])]),a("span",[t._v("01095486187")])]),a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"reserved"}},[a("b",[t._v("reserved at")])]),a("span",[t._v("23/10/2021")]),a("input",{staticClass:"vanish",attrs:{type:"date",name:"reserved"}})]),a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"appointment"}},[a("b",[t._v("appointment")])]),a("span",[t._v("29/10/2021")]),a("input",{staticClass:"vanish",attrs:{type:"date",name:"appointment"}})]),a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"status"}},[a("b",[t._v("status")])]),a("span",[t._v("active")]),a("select",{staticClass:"vanish",attrs:{name:"status",id:""}},[a("option",{attrs:{value:"active"}},[t._v("Active")]),a("option",{attrs:{value:"finished"}},[t._v("Finished")])])]),a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"type"}},[a("b",[t._v("type")])]),a("span",[t._v("examine")]),a("select",{staticClass:"vanish",attrs:{name:"type",id:""}},[a("option",{attrs:{value:""}},[t._v("Select Type")]),a("option",{attrs:{value:"examine"}},[t._v("Examine")]),a("option",{attrs:{value:"consult"}},[t._v("consult")]),a("option",{attrs:{value:"surgery"}},[t._v("Surgery")])])]),a("div",{staticClass:"ticket-descrip"},[a("h4",[t._v("description")]),a("p",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dolor veritatis voluptatibus harum excepturi exercitationem in nihil! Sint, hic eveniet non quis ut repellendus debitis error illo vel molestias autem. ")]),a("textarea",{staticClass:"vanish",attrs:{cols:"15",rows:"5"}},[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dolor veritatis voluptatibus harum excepturi exercitationem in nihil! Sint, hic eveniet non quis ut repellendus debitis error illo vel molestias autem. ")])]),a("div",{staticClass:"data-files"},[a("div",{staticClass:"files-head"},[a("span",[t._v("ticket files")]),a("input",{attrs:{type:"file",name:"",id:"file-up"}}),a("label",{attrs:{for:"file-up"}},[t._v("upload a file")])])]),a("div",{staticClass:"modal-foot"},[a("button",{staticClass:"vanish",attrs:{type:"button",id:"save-ticket"}},[t._v(" save ticket ")]),a("button",{attrs:{type:"button",id:"edit-ticket"}},[t._v("edit ticket")])])])])])])}],F={name:"TicketPage",props:{},components:{},mounted:function(){_()("#edit-ticket").click((function(){_()("#save-ticket").removeClass("vanish"),_()(".modal-ticket-page .data-row input.vanish").removeClass("vanish"),_()(".modal-ticket-page .data-row select.vanish").removeClass("vanish"),_()(".modal-ticket-page .ticket-descrip textarea.vanish").removeClass("vanish"),_()(this).addClass("vanish")})),_()("#save-ticket").click((function(){_()("#edit-ticket").removeClass("vanish"),_()(".modal-ticket-page .data-row input").addClass("vanish"),_()(".modal-ticket-page .data-row select").addClass("vanish"),_()(".modal-ticket-page .ticket-descrip textarea").addClass("vanish"),_()(this).addClass("vanish")}))}},z=F,G=(a("b51f"),Object(d["a"])(z,N,q,!1,null,"3a8bed1d",null)),H=G.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new-ticket"},[a("div",{staticClass:"modal-new-ticket",attrs:{id:"new-ticket"}},[a("form",{staticClass:"modal-content",attrs:{action:"/action_page.php"}},[a("span",{staticClass:"close",attrs:{onclick:"document.getElementById('new-ticket').style.display='none'",title:"Close Modal"}},[t._v("×")]),a("div",{staticClass:"contain"},[t._m(0),t._m(1),a("div",{staticClass:"data-row"},[t._m(2),a("div",{staticClass:"patient-row"},[t._m(3),a("button",{staticClass:"new-patient-btn",attrs:{type:"button"}},[a("font-awesome-icon",{attrs:{icon:"user-plus"}})],1)])]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12)])])])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-head"},[a("span",[t._v("new ticket")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"id"}},[a("b",[t._v("ticket ID")])]),a("span",[t._v("5149")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"name"}},[a("b",[t._v("name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{staticClass:"patient-name",attrs:{name:"patient-name",id:""}},[a("option",{attrs:{value:""}},[t._v("Select Patient")]),a("option",{attrs:{value:"youssef"}},[t._v("Youssef Ahmed")]),a("option",{attrs:{value:"hazem"}},[t._v("Hazem Soliman")]),a("option",{attrs:{value:"mohamed"}},[t._v("Mohamed Elsayed")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row new-patient"},[a("span",[t._v("new patient")]),a("form",{attrs:{action:""}},[a("label",{attrs:{for:"name"}},[a("b",[t._v("name")])]),a("input",{attrs:{type:"text",name:"name",placeholder:"Patient Name"}}),a("label",{attrs:{for:"birth-date"}},[a("b",[t._v("birth date")])]),a("input",{attrs:{type:"date",name:"birth-date"}}),a("label",{attrs:{for:"email"}},[a("b",[t._v("email")])]),a("input",{attrs:{type:"email",name:"email",placeholder:"Patient Email"}}),a("label",{attrs:{for:"phone"}},[a("b",[t._v("phone")])]),a("input",{attrs:{type:"number",name:"phone",placeholder:"Patient Phone"}}),a("label",{attrs:{for:"address"}},[a("b",[t._v("address")])]),a("input",{staticClass:"patient-address",attrs:{type:"text",name:"address",placeholder:"Patient Address"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"phone"}},[a("b",[t._v("phone")])]),a("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"reserved"}},[a("b",[t._v("reserved at")])]),a("input",{attrs:{type:"date",name:"reserved"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"appointment"}},[a("b",[t._v("appointment")])]),a("input",{attrs:{type:"date",name:"appointment"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"status"}},[a("b",[t._v("status")])]),a("select",{attrs:{name:"status",id:""}},[a("option",{attrs:{value:"active"}},[t._v("Active")]),a("option",{attrs:{value:"finished"}},[t._v("Finished")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"type"}},[a("b",[t._v("type")])]),a("select",{attrs:{name:"type",id:""}},[a("option",{attrs:{value:""}},[t._v("Select Type")]),a("option",{attrs:{value:"examine"}},[t._v("Examine")]),a("option",{attrs:{value:"consult"}},[t._v("Consult")]),a("option",{attrs:{value:"surgery"}},[t._v("Surgery")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ticket-descrip"},[a("h4",[t._v("description")]),a("textarea",{attrs:{cols:"15",rows:"5"}},[t._v(" Descripe Patient Status ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-files"},[a("div",{staticClass:"files-head"},[a("span",[t._v("ticket files")]),a("input",{attrs:{type:"file",name:"",id:"file-up"}}),a("label",{attrs:{for:"file-up"}},[t._v("upload a file")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-foot"},[a("button",{attrs:{id:"save"}},[t._v("save profile")])])}],V={name:"NewTicket",props:{},components:{},mounted:function(){_()(".data-row button.new-patient-btn").click((function(){_()(".data-row.new-patient").slideToggle(),_()(".patient-name").fadeToggle()}))}},W=V,Y=(a("9754"),Object(d["a"])(W,R,L,!1,null,"71ec2b01",null)),J=Y.exports,K={name:"patientComp",props:{},components:{TicketComp:M,TicketPage:H,NewTicket:J}},Q=K,U=(a("dd21"),Object(d["a"])(Q,A,D,!1,null,null,null)),X=U.exports,Z={name:"Home",props:{},components:{TicketComp:M,PatientComp:X,TicketPage:H}},tt=Z,et=(a("21bb"),Object(d["a"])(tt,x,P,!1,null,null,null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tickets"},[a("div",{staticClass:"controls"},[a("div",{staticClass:"filter"}),a("button",{attrs:{onclick:"document.getElementById('new-ticket').style.display='block'"}},[a("font-awesome-icon",{attrs:{icon:"plus"}}),a("span",[t._v("new ticket")])],1),a("div",{staticClass:"clear"})]),a("div",{staticClass:"tickets-list"},[a("div",{staticClass:"tickets-contain"},[t._m(0),a("TicketComp"),a("TicketComp"),a("TicketComp"),a("TicketComp"),a("TicketComp"),a("TicketComp"),a("TicketComp"),a("TicketComp")],1),a("TicketPage"),a("NewTicket")],1)])},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ticket-info"},[a("span",{staticClass:"id"},[t._v("ID")]),a("span",{staticClass:"patient"},[t._v("name")]),a("span",{staticClass:"phone"},[t._v("phone")]),a("span",{staticClass:"type"},[t._v("type")]),a("span",{staticClass:"status"},[t._v("status")]),a("span",{staticClass:"appoint"},[t._v("appointment")])])}],nt={name:"Tickets",props:{},components:{TicketComp:M,TicketPage:H,NewTicket:J},mounted:function(){_()(".ticket-panel").click((function(){_()(this).parent().children(".ticket-ext").slideToggle()}))}},ct=nt,lt=(a("216f"),Object(d["a"])(ct,st,it,!1,null,"4e7c8aa0",null)),ot=lt.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"patients"},[a("div",{staticClass:"controls"},[a("div",{staticClass:"filter"}),a("button",{attrs:{onclick:"document.getElementById('new-patient').style.display='block'"}},[a("font-awesome-icon",{attrs:{icon:"user-plus"}}),a("span",[t._v("new patient")])],1),a("div",{staticClass:"clear"})]),a("div",{staticClass:"patients-list"},[a("div",{staticClass:"patients-contain"},[t._m(0),a("PatientComp"),a("PatientComp"),a("PatientComp"),a("PatientComp"),a("PatientComp"),a("PatientComp"),a("PatientComp"),a("PatientComp")],1),a("PatientPage"),a("NewPatient")],1)])},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"patient-info"},[a("span",{staticClass:"patient-img"},[t._v("image")]),a("span",{staticClass:"patient"},[t._v("name")]),a("span",{staticClass:"phone"},[t._v("phone")]),a("span",{staticClass:"address"},[t._v("address")]),a("span",{staticClass:"active"},[t._v("active")]),a("span",{staticClass:"finish"},[t._v("finished")]),a("span",{staticClass:"date"},[t._v("date")])])}],pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"patient-page"},[s("div",{staticClass:"modal-patient-page",attrs:{id:"patient-page"}},[s("form",{staticClass:"modal-content",attrs:{action:"/action_page.php"}},[s("span",{staticClass:"close",attrs:{onclick:"document.getElementById('patient-page').style.display='none'",title:"Close Modal"}},[t._v("×")]),s("div",{staticClass:"contain"},[t._m(0),s("div",{staticClass:"patient-img"},[s("img",{attrs:{src:a("d95b"),alt:"patient-Img"}}),s("input",{attrs:{type:"file",id:"img-up"}}),s("label",{staticClass:"vanish",attrs:{for:"img-up"}},[s("font-awesome-icon",{attrs:{icon:"image"}})],1)]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])])])])},mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-head"},[a("span",[t._v("patient page")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"id"}},[a("b",[t._v("patient ID")])]),a("span",[t._v("4868")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"name"}},[a("b",[t._v("name")])]),a("span",[t._v("youssef ahmed")]),a("input",{staticClass:"vanish",attrs:{type:"text",name:"name",value:"youssef ahmed"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"address"}},[a("b",[t._v("address")])]),a("span",[t._v("alexandria")]),a("input",{staticClass:"vanish",attrs:{type:"text",name:"address",value:"alexandria"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"phone"}},[a("b",[t._v("phone")])]),a("span",[t._v("01254987646")]),a("input",{staticClass:"vanish",attrs:{type:"number",name:"phone",value:"01254987646"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"email"}},[a("b",[t._v("email")])]),a("span",[t._v("myemail49@yahoo.com")]),a("input",{staticClass:"vanish",attrs:{type:"email",name:"email",value:"myemail49@yahoo.com"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-files"},[a("div",{staticClass:"files-head"},[a("span",[t._v("patient files")]),a("input",{attrs:{type:"file",name:"",id:"file-up"}}),a("label",{attrs:{for:"file-up"}},[t._v("upload a file")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-foot"},[a("button",{staticClass:"vanish",attrs:{type:"button",id:"save-patient"}},[t._v(" save profile ")]),a("button",{attrs:{type:"button",id:"edit-patient"}},[t._v("edit profile")])])}],vt={name:"patientPage",props:{},components:{},mounted:function(){_()("#edit-patient").click((function(){_()("#save-patient").removeClass("vanish"),_()(".modal-patient-page .patient-img input.vanish").removeClass("vanish"),_()(".modal-patient-page .data-row input.vanish").removeClass("vanish"),_()(this).addClass("vanish")})),_()("#save-patient").click((function(){_()("#edit-patient").removeClass("vanish"),_()(".modal-patient-page .patient-img input").addClass("vanish"),_()(".modal-patient-page .data-row input").addClass("vanish"),_()(this).addClass("vanish")}))}},ut=vt,ft=(a("2e0f"),Object(d["a"])(ut,pt,mt,!1,null,"c47b6b62",null)),_t=ft.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"new-patient"},[s("div",{staticClass:"modal-new-patient",attrs:{id:"new-patient"}},[s("form",{staticClass:"modal-content",attrs:{action:"/action_page.php"}},[s("span",{staticClass:"close",attrs:{onclick:"document.getElementById('new-patient').style.display='none'",title:"Close Modal"}},[t._v("×")]),s("div",{staticClass:"contain"},[t._m(0),s("div",{staticClass:"patient-img"},[s("img",{attrs:{src:a("d95b"),alt:"patient-Img"}}),s("input",{attrs:{type:"file",id:"img-up"}}),s("label",{attrs:{for:"img-up"}},[s("font-awesome-icon",{attrs:{icon:"image"}})],1)]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])])])])},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-head"},[a("span",[t._v("new patient")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"id"}},[a("b",[t._v("patient ID")])]),a("span",[t._v("4868")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"name"}},[a("b",[t._v("name")])]),a("input",{attrs:{type:"text",name:"name",placeholder:"patient Name"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"address"}},[a("b",[t._v("address")])]),a("input",{attrs:{type:"text",name:"address",placeholder:"patient Address"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"phone"}},[a("b",[t._v("phone")])]),a("input",{attrs:{type:"number",name:"phone",placeholder:"patient Phone"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-row"},[a("label",{attrs:{for:"email"}},[a("b",[t._v("email")])]),a("input",{attrs:{type:"email",name:"email",placeholder:"patient Email"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-files"},[a("div",{staticClass:"files-head"},[a("span",[t._v("patient files")]),a("input",{attrs:{type:"file",name:"",id:"file-up"}}),a("label",{attrs:{for:"file-up"}},[t._v("upload a file")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-foot"},[a("button",{attrs:{id:"save"}},[t._v("save profile")])])}],kt={name:"NewPatient",props:{},components:{}},gt=kt,yt=(a("d9e3"),Object(d["a"])(gt,Ct,ht,!1,null,"6f41b221",null)),bt=yt.exports,Et={name:"patients",props:{},components:{PatientComp:X,PatientPage:_t,NewPatient:bt},mounted:function(){_()(".patient-panel").click((function(){_()(this).parent().children(".patient-ext").slideToggle()}))}},wt=Et,Tt=(a("4527"),Object(d["a"])(wt,rt,dt,!1,null,"140437dd",null)),$t=Tt.exports,xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reports"},[a("h1",[t._v("This Reports Page")])])}],It={},Bt=It,St=(a("8d1e"),Object(d["a"])(Bt,xt,Pt,!1,null,"184a55c4",null)),Ot=St.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-app"},[a("div",{staticClass:"demo-app-sidebar"},[t._m(0),a("div",{staticClass:"demo-app-sidebar-section"},[a("label",[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.calendarOptions.weekends},on:{change:t.handleWeekendsToggle}}),t._v(" toggle weekends ")])]),a("div",{staticClass:"demo-app-sidebar-section"},[a("h2",[t._v("All Events ("+t._s(t.currentEvents.length)+")")]),a("ul",t._l(t.currentEvents,(function(e){return a("li",{key:e.id},[a("b",[t._v(t._s(e.startStr))]),a("i",[t._v(t._s(e.title))])])})),0)])]),a("div",{staticClass:"demo-app-main"},[a("FullCalendar",{staticClass:"demo-app-calendar",attrs:{options:t.calendarOptions},scopedSlots:t._u([{key:"eventContent",fn:function(e){return[a("b",[t._v(t._s(e.timeText))]),a("i",[t._v(t._s(e.event.title))])]}}])})],1)])},Mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-app-sidebar-section"},[a("h2",[t._v("Instructions")]),a("ul",[a("li",[t._v("Select dates and you will be prompted to create a new event")]),a("li",[t._v("Drag, drop, and resize events")]),a("li",[t._v("Click an event to delete it")])])])}],At=a("f5ff"),Dt=a("3cdd"),Nt=a("3e32"),qt=a("a20c"),Ft=(a("ac1f"),a("5319"),0),zt=(new Date).toISOString().replace(/T.*$/,""),Gt=[{id:Ht(),title:"All-day event",start:zt},{id:Ht(),title:"Timed event",start:zt+"T12:00:00"}];function Ht(){return String(Ft++)}var Rt={components:{FullCalendar:At["a"]},data:function(){return{calendarOptions:{plugins:[Dt["b"],Nt["a"],qt["a"]],headerToolbar:{left:"title",center:"dayGridMonth, timeGridWeek, timeGridDay",right:"prev today next"},initialView:"dayGridMonth",initialEvents:Gt,editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,weekends:!0,select:this.handleDateSelect,eventClick:this.handleEventClick,eventsSet:this.handleEvents},currentEvents:[]}},methods:{handleWeekendsToggle:function(){this.calendarOptions.weekends=!this.calendarOptions.weekends},handleDateSelect:function(t){var e=prompt("Please enter a new title for your event"),a=t.view.calendar;a.unselect(),e&&a.addEvent({id:Ht(),title:e,start:t.startStr,end:t.endStr,allDay:t.allDay})},handleEventClick:function(t){confirm("Are you sure you want to delete the event '".concat(t.event.title,"'"))&&t.event.remove()},handleEvents:function(t){this.currentEvents=t}}},Lt=Rt,Vt=(a("473b"),Object(d["a"])(Lt,jt,Mt,!1,null,null,null)),Wt=Vt.exports;s["default"].use($["a"]);var Yt=[{path:"/",name:"Home",component:at},{path:"/tickets",name:"Tickets",component:ot},{path:"/patients",name:"Patients",component:$t},{path:"/reports",name:"Reports",component:Ot},{path:"/calendar",name:"Calendar",component:Wt}],Jt=new $["a"]({mode:"history",base:"crm-sys-repo/",routes:Yt}),Kt=Jt,Qt=a("2f62");s["default"].use(Qt["a"]);var Ut=new Qt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Xt=a("5887"),Zt=a.n(Xt),te=(a("4eca"),a("7b17"),a("ab8b"),a("f5df1"),a("5ed1"),a("ecee")),ee=a("ad3d"),ae=a("c074");te["c"].add(ae["d"],ae["i"],ae["j"],ae["a"],ae["l"],ae["g"],ae["k"],ae["b"],ae["f"],ae["h"],ae["c"],ae["e"]),s["default"].component("font-awesome-icon",ee["a"]),s["default"].use(Zt.a,{componentPrefix:"vc"}),s["default"].config.productionTip=!1,new s["default"]({router:Kt,store:Ut,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6ee3":function(t,e,a){},"7e77":function(t,e,a){},"8d1e":function(t,e,a){"use strict";a("f583")},9754:function(t,e,a){"use strict";a("ceea")},"9c0c":function(t,e,a){},"9e6f":function(t,e,a){"use strict";a("7e77")},a4d0:function(t,e,a){},a5ee:function(t,e,a){},afc7:function(t,e,a){},b51f:function(t,e,a){"use strict";a("a5ee")},ceea:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},cf3f:function(t,e,a){},d95b:function(t,e,a){t.exports=a.p+"img/My-IMG.bd3a9d7a.jpg"},d9e3:function(t,e,a){"use strict";a("afc7")},dd21:function(t,e,a){"use strict";a("cf3f")},deb9:function(t,e,a){},ea07:function(t,e,a){},ef16:function(t,e,a){},f1d4:function(t,e,a){},f304:function(t,e,a){"use strict";a("deb9")},f583:function(t,e,a){}});
//# sourceMappingURL=app.ce934591.js.map