(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0418":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[i("b-navbar-brand",{attrs:{href:"/"}},[i("b-img",{staticStyle:{width:"160px"},attrs:{src:n("40b5"),alt:"Quiz-It"}})],1),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",[i("b-nav-item",{attrs:{href:"/#/top10"}},[t._v("Top 10")]),i("b-nav-item",{attrs:{href:"/#/hakkinda"}},[t._v("Hakkında")])],1),i("b-navbar-nav",{staticClass:"ml-auto"},[t.isLoggedIn?t._e():i("b-nav-item",{attrs:{href:"/#/giris"}},[t._v("Giriş Yap")]),t.isLoggedIn?t._e():i("b-nav-item",{attrs:{href:"/#/uye-ol"}},[t._v("Üye Ol")]),t.isLoggedIn?i("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t.nameSurname?i("em",{key:t.nameSurname},[t._v(t._s(t.nameSurname))]):t._e()]},proxy:!0}],null,!1,1622750097)},[i("b-dropdown-item",{attrs:{href:"#"},on:{click:t.goProfile}},[t._v("Profil")]),i("b-dropdown-item",{attrs:{href:"#"},on:{click:t.logout}},[t._v("Çıkış Yap")])],1):t._e()],1)],1)],1)],1)},s=[],a=n("5530"),r=n("2f62"),o={name:"Header",data:function(){return{}},computed:Object(a["a"])({},Object(r["b"])(["isLoggedIn","nameSurname","getAppName"])),methods:{goProfile:function(){this.$router.push("/profil")},logout:function(){var t=this;this.$store.dispatch("logout").then((function(){return t.$router.push("/")})).catch((function(t){console.log(t)})).catch((function(t){return console.log(t)}))}}},l=o,c=n("2877"),u=Object(c["a"])(l,i,s,!1,null,null,null);e["a"]=u.exports},"057f":function(t,e,n){var i=n("fc6a"),s=n("241c").f,a={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return s(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==a.call(t)?o(t):s(i(t))}},"09af":function(t,e,n){},"10eb":function(t,e,n){"use strict";var i=n("d0e4"),s=n.n(i);s.a},"159b":function(t,e,n){var i=n("da84"),s=n("fdbc"),a=n("17c2"),r=n("9112");for(var o in s){var l=i[o],c=l&&l.prototype;if(c&&c.forEach!==a)try{r(c,"forEach",a)}catch(u){c.forEach=a}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,s=n("a640"),a=n("ae40"),r=s("forEach"),o=a("forEach");t.exports=r&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var i=n("d039"),s=n("b622"),a=n("2d00"),r=s("species");t.exports=function(t){return a>=51||!i((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2837:function(t,e,n){"use strict";var i=n("dbf3"),s=n.n(i);s.a},"3d76":function(t,e,n){},"3ef5":function(t,e,n){"use strict";var i=n("a7c6"),s=n.n(i);s.a},"40b5":function(t,e,n){t.exports=n.p+"img/quiz-it.0218190c.png"},4160:function(t,e,n){"use strict";var i=n("23e7"),s=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},4388:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("div",[n("Multiplayer")],1),n("Footer")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-items-center min-vh-100"},[n("div",{staticClass:"container text-center"},[n("div",{staticClass:"quiz",staticStyle:{}},[n("ul",{staticClass:"\n            nav nav-pills\n            justify-content-center\n            d-flex\n            align-items-center\n            nav-fill\n          "}),n("b-card",{attrs:{"header-bg-variant":t.headerClass,"header-text-variant":"white","header-tag":"header","footer-tag":"footer"}},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("Oyuncular")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("span",{staticClass:"logged-in"},[t._v("●")]),t._v("Erdem ")]),n("div",{staticClass:"col"},[n("span",{staticClass:"logged-in"},[t._v("●")]),t._v("Köşk ")])])])]),n("b-card",{attrs:{"header-bg-variant":t.headerClass,"header-text-variant":"white","header-tag":"header","footer-tag":"footer"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"d-flex justify-content-end"},[n("div",{staticClass:"mr-auto p-2"},[n("h4",{staticClass:"text-left mb-0"},[t._v(" "+t._s(t.question+" ?")+" "),t.speechStatus?t._e():n("b-icon-volume-up",{on:{click:function(e){return t.speechText()}}}),t.speechStatus?n("b-icon-volume-up-fill"):t._e()],1)]),n("div",{staticClass:"p-2"},[n("div",{staticClass:"text-center"},[n("b-button",{attrs:{pill:"",variant:t.questionButtonClass}},[t._v(" Soru "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.totalQuestionCount))]),t._v(" D "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.totalSuccesfullCount))]),t._v(" Y "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.totalWrongCount))])],1)],1)])])]},proxy:!0},{key:"footer",fn:function(){return[n("em"),n("div",{staticClass:"d-flex justify-content-end"},[n("div",{staticClass:"p-2"},[t._v("Zorluk:")]),n("div",{staticClass:"mr-auto"},[n("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)])]},proxy:!0}])},[n("div",{staticClass:"cardHeight"},[n("b-overlay",{attrs:{show:t.WaitingForGettingQuestion,rounded:"sm"}},[t.WaitingForGettingQuestion?t._e():n("div",{staticClass:"btn-group-toggle",attrs:{"data-toggle":"buttons"}},t._l(t.answers,(function(e,i){return n("label",{key:i,class:t.changeClass(i+1)},[n("svg",{staticClass:"bi bi-chevron-right",attrs:{width:"32",height:"32",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z","clip-rule":"evenodd"}})]),n("input",{attrs:{type:"radio",name:"q_answer",autocomplete:"off"},domProps:{value:i+1},on:{click:function(e){return t.selectedAnswerOnChange(e)}}}),t._v(" "+t._s(e)+" ")])})),0)])],1)])],1)])])},r=[],o=n("5530"),l=n("c5fa"),c=n("2f62"),u={components:{},data:function(){return{WaitingForGettingQuestion:!1,isQuestionReported:!1,totalQuestionCount:0,totalSuccesfullCount:0,totalWrongCount:0,rightAnswer:-1,selectedAnswer:-1,answers:["test","test","test","test"],questionWordId:"",question:"",userId:this.$cookie.get("id"),speechStatus:!1,headerClass:"dark",questionButtonClass:"secondary",isSuccesfullAnswer:!1,isReadyForAnswerQuestion:!0,questionType:1,options:[{value:"1",text:"A1"},{value:"2",text:"A2"},{value:"3",text:"B1"},{value:"4",text:"B2"},{value:"5",text:"C1"},{value:"6",text:"C2"}],selected:1}},computed:Object(o["a"])({},Object(c["b"])(["isLoggedIn"])),methods:{questionSelectionChanged:function(t){"nav-fib"!==t.target.id?this.questionType=1:this.questionType=2,this.getQuestion()},changeClassForNavs:function(t){return this.questionType===t?"nav-link active":"nav-link"},getQuestion:function(){var t=this;Object(l["d"])(this.selected,this.questionType).then((function(e){t.WaitingForGettingQuestion=!1,t.isQuestionReported=!1,t.assignValuesFromApı(e)}))},"assignValuesFromApı":function(t){this.answers=t.results.answers,this.question=t.results.question,this.rightAnswer=t.results.correctAnswer+1,this.questionWordId=t.results.questionWordId},selectedAnswerOnChange:function(t){var e=this;this.isReadyForAnswerQuestion&&(this.isReadyForAnswerQuestion=!1,this.selectedAnswer=t.target.value,this.selectedAnswer==this.rightAnswer?(this.isSuccesfullAnswer=!0,this.totalSuccesfullCount++):(this.isSuccesfullAnswer=!1,this.totalWrongCount++),this.totalQuestionCount++,this.makeActionsForUser(this.isSuccesfullAnswer),setTimeout((function(){e.WaitingForGettingQuestion=!0,e.resetActionsForUser(),e.getQuestion(),e.isReadyForAnswerQuestion=!0,e.selectedAnswer=-1}),1e3))},makeActionsForUser:function(t){t?(this.headerClass="success ",this.questionButtonClass="dark"):(this.headerClass="danger",this.questionButtonClass="dark"),this.userId&&Object(l["k"])(this.userId,t,this.selected)},changeClass:function(t){return{"element-animation1 btn btn-lg btn-secondary btn-block":1==t&&1!=this.selectedAnswer,"element-animation2 btn btn-lg btn-secondary btn-block":2==t&&2!=this.selectedAnswer,"element-animation3 btn btn-lg btn-secondary btn-block":3==t&&3!=this.selectedAnswer,"element-animation4 btn btn-lg btn-secondary btn-block":4==t&&4!=this.selectedAnswer,"element-animation1 btn btn-lg btn-primary btn-block":1==t&&1==this.selectedAnswer&&1!=this.rightAnswer,"element-animation2 btn btn-lg btn-primary btn-block":2==t&&2==this.selectedAnswer&&2!=this.rightAnswer,"element-animation3 btn btn-lg btn-primary btn-block":3==t&&3==this.selectedAnswer&&3!=this.rightAnswer,"element-animation4 btn btn-lg btn-primary btn-block":4==t&&4==this.selectedAnswer&&4!=this.rightAnswer,"element-animation1 btn btn-lg btn-success btn-block":1==t&&1==this.selectedAnswer&&1==this.rightAnswer,"element-animation2 btn btn-lg btn-success btn-block":2==t&&2==this.selectedAnswer&&2==this.rightAnswer,"element-animation3 btn btn-lg btn-success btn-block":3==t&&3==this.selectedAnswer&&3==this.rightAnswer,"element-animation4 btn btn-lg btn-success btn-block":4==t&&4==this.selectedAnswer&&4==this.rightAnswer,"element-animation1 btn btn-lg btn-danger btn-block":1==t&&1==this.rightAnswer&&1!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion,"element-animation2 btn btn-lg btn-danger btn-block":2==t&&2==this.rightAnswer&&2!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion,"element-animation3 btn btn-lg btn-danger btn-block":3==t&&3==this.rightAnswer&&3!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion,"element-animation4 btn btn-lg btn-danger btn-block":4==t&&4==this.rightAnswer&&4!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion}},resetActionsForUser:function(){this.headerClass="dark",this.questionButtonClass="secondary"},openReportModel:function(){this.$refs.report.openReportModelFromParent()},speechText:function(){var t=this;this.speechStatus=!0;var e=new SpeechSynthesisUtterance(this.question);e.rate=.7,e.pitch=1,window.speechSynthesis.speak(e),setTimeout((function(){t.speechStatus=!1}),1e3)}},mounted:function(){this.getQuestion()},watch:{selected:function(){this.getQuestion()}}},d=u,h=(n("5af8"),n("2877")),f=Object(h["a"])(d,a,r,!1,null,"3d6bce2e",null),b=f.exports,m=n("0418"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-4 bg-dark text-white-50",attrs:{id:"sticky-footer"}},[n("div",{staticClass:"container text-center"},[n("small",[t._v("Copyright © 2020 by Mustafa Erdem Köşk. All rights reserved.")])])])}],v=(n("6a6b"),{}),w=Object(h["a"])(v,p,g,!1,null,"68253170",null),y=w.exports,C={name:"Main",components:{Multiplayer:b,Header:m["a"],Footer:y},data:function(){return{loading:!0}},methods:{handleClick:function(){this.loading=!1}}},A=C,k=(n("10eb"),Object(h["a"])(A,i,s,!1,null,"5589bedd",null));e["default"]=k.exports},"4de4":function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").filter,a=n("1dde"),r=n("ae40"),o=a("filter"),l=r("filter");i({target:"Array",proto:!0,forced:!o||!l},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5af8":function(t,e,n){"use strict";var i=n("90a5"),s=n.n(i);s.a},"6a6b":function(t,e,n){"use strict";var i=n("09af"),s=n.n(i);s.a},"746f":function(t,e,n){var i=n("428f"),s=n("5135"),a=n("e538"),r=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});s(e,t)||r(e,t,{value:a.f(t)})}},8418:function(t,e,n){"use strict";var i=n("c04e"),s=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var r=i(e);r in t?s.f(t,r,a(0,n)):t[r]=n}},"90a5":function(t,e,n){},a4d3:function(t,e,n){"use strict";var i=n("23e7"),s=n("da84"),a=n("d066"),r=n("c430"),o=n("83ab"),l=n("4930"),c=n("fdbf"),u=n("d039"),d=n("5135"),h=n("e8b5"),f=n("861d"),b=n("825a"),m=n("7b0b"),p=n("fc6a"),g=n("c04e"),v=n("5c6c"),w=n("7c73"),y=n("df75"),C=n("241c"),A=n("057f"),k=n("7418"),_=n("06cf"),S=n("9bf2"),x=n("d1e7"),F=n("9112"),O=n("6eeb"),q=n("5692"),V=n("f772"),j=n("d012"),Q=n("90e3"),T=n("b622"),L=n("e538"),P=n("746f"),E=n("d44e"),R=n("69f3"),M=n("b727").forEach,D=V("hidden"),N="Symbol",I="prototype",z=T("toPrimitive"),B=R.set,W=R.getterFor(N),$=Object[I],G=s.Symbol,H=a("JSON","stringify"),U=_.f,K=S.f,J=A.f,Y=x.f,Z=q("symbols"),X=q("op-symbols"),tt=q("string-to-symbol-registry"),et=q("symbol-to-string-registry"),nt=q("wks"),it=s.QObject,st=!it||!it[I]||!it[I].findChild,at=o&&u((function(){return 7!=w(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=U($,e);i&&delete $[e],K(t,e,n),i&&t!==$&&K($,e,i)}:K,rt=function(t,e){var n=Z[t]=w(G[I]);return B(n,{type:N,tag:t,description:e}),o||(n.description=e),n},ot=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},lt=function(t,e,n){t===$&&lt(X,e,n),b(t);var i=g(e,!0);return b(n),d(Z,i)?(n.enumerable?(d(t,D)&&t[D][i]&&(t[D][i]=!1),n=w(n,{enumerable:v(0,!1)})):(d(t,D)||K(t,D,v(1,{})),t[D][i]=!0),at(t,i,n)):K(t,i,n)},ct=function(t,e){b(t);var n=p(e),i=y(n).concat(bt(n));return M(i,(function(e){o&&!dt.call(n,e)||lt(t,e,n[e])})),t},ut=function(t,e){return void 0===e?w(t):ct(w(t),e)},dt=function(t){var e=g(t,!0),n=Y.call(this,e);return!(this===$&&d(Z,e)&&!d(X,e))&&(!(n||!d(this,e)||!d(Z,e)||d(this,D)&&this[D][e])||n)},ht=function(t,e){var n=p(t),i=g(e,!0);if(n!==$||!d(Z,i)||d(X,i)){var s=U(n,i);return!s||!d(Z,i)||d(n,D)&&n[D][i]||(s.enumerable=!0),s}},ft=function(t){var e=J(p(t)),n=[];return M(e,(function(t){d(Z,t)||d(j,t)||n.push(t)})),n},bt=function(t){var e=t===$,n=J(e?X:p(t)),i=[];return M(n,(function(t){!d(Z,t)||e&&!d($,t)||i.push(Z[t])})),i};if(l||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=Q(t),n=function(t){this===$&&n.call(X,t),d(this,D)&&d(this[D],e)&&(this[D][e]=!1),at(this,e,v(1,t))};return o&&st&&at($,e,{configurable:!0,set:n}),rt(e,t)},O(G[I],"toString",(function(){return W(this).tag})),O(G,"withoutSetter",(function(t){return rt(Q(t),t)})),x.f=dt,S.f=lt,_.f=ht,C.f=A.f=ft,k.f=bt,L.f=function(t){return rt(T(t),t)},o&&(K(G[I],"description",{configurable:!0,get:function(){return W(this).description}}),r||O($,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:G}),M(y(nt),(function(t){P(t)})),i({target:N,stat:!0,forced:!l},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=G(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),i({target:"Object",stat:!0,forced:!l,sham:!o},{create:ut,defineProperty:lt,defineProperties:ct,getOwnPropertyDescriptor:ht}),i({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ft,getOwnPropertySymbols:bt}),i({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(m(t))}}),H){var mt=!l||u((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));i({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,n){var i,s=[t],a=1;while(arguments.length>a)s.push(arguments[a++]);if(i=e,(f(e)||void 0!==t)&&!ot(t))return h(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),s[1]=e,H.apply(null,s)}})}G[I][z]||F(G[I],z,G[I].valueOf),E(G,N),j[D]=!0},a4d6:function(t,e,n){t.exports=n.p+"img/quiz-it-var1.ca37de8e.png"},a655:function(t,e,n){},a7c6:function(t,e,n){},b64b:function(t,e,n){var i=n("23e7"),s=n("7b0b"),a=n("df75"),r=n("d039"),o=r((function(){a(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return a(s(t))}})},b844:function(t,e,n){t.exports=n.p+"img/quiz-it-blue.6de0500f.png"},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("Header"),t.loading?n("div",{staticStyle:{height:"100vh"}},[n("Loading",{on:{LoadingClickEvent:t.handleClick}})],1):t._e(),t.loading?t._e():n("div",[n("Quiz")],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-items-center min-vh-100",attrs:{id:"main"}},[n("div",{staticClass:"container text-center"},[n("div",{staticClass:"quiz",staticStyle:{}},[n("ul",{staticClass:"\n          nav nav-pills\n          justify-content-center\n          d-flex\n          align-items-center\n          nav-fill\n        "},[n("li",{staticClass:"nav-item"},[n("a",{class:t.changeClassForNavs(1),attrs:{id:"nav-words","aria-current":"page",href:"#"},on:{click:t.questionSelectionChanged}},[t._v("Kelimeler")])]),n("li",{staticClass:"nav-item"},[n("a",{class:t.changeClassForNavs(2),attrs:{id:"nav-fib",href:"#"},on:{click:t.questionSelectionChanged}},[t._v("Boşluk Doldurma")])])]),n("b-card",{attrs:{"header-bg-variant":t.headerClass,"header-text-variant":"white","header-tag":"header","footer-tag":"footer"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"d-flex justify-content-end"},[n("div",{staticClass:"mr-auto p-2"},[n("h4",{staticClass:"text-left mb-0"},[t._v(" "+t._s(t.question+" ?")+" "),t.speechStatus?t._e():n("b-icon-volume-up",{on:{click:function(e){return t.speechText()}}}),t.speechStatus?n("b-icon-volume-up-fill"):t._e()],1)]),n("div",{staticClass:"p-2"},[n("div",{staticClass:"text-center"},[n("b-button",{attrs:{pill:"",variant:t.questionButtonClass}},[t._v(" Soru "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.totalQuestionCount))]),t._v(" D "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.totalSuccesfullCount))]),t._v(" Y "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.totalWrongCount))])],1)],1)])])]},proxy:!0},{key:"footer",fn:function(){return[n("em"),n("div",{staticClass:"d-flex justify-content-end"},[n("div",{staticClass:"p-2"},[t._v("Zorluk:")]),n("div",{staticClass:"mr-auto"},[n("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)])]},proxy:!0}])},[n("div",{staticClass:"cardHeight"},[n("b-overlay",{attrs:{show:t.WaitingForGettingQuestion,rounded:"sm"}},[t.WaitingForGettingQuestion?t._e():n("div",{staticClass:"btn-group-toggle",attrs:{"data-toggle":"buttons"}},t._l(t.answers,(function(e,i){return n("label",{key:i,class:t.changeClass(i+1)},[n("svg",{staticClass:"bi bi-chevron-right",attrs:{width:"32",height:"32",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z","clip-rule":"evenodd"}})]),n("input",{attrs:{type:"radio",name:"q_answer",autocomplete:"off"},domProps:{value:i+1},on:{click:function(e){return t.selectedAnswerOnChange(e)}}}),t._v(" "+t._s(e)+" ")])})),0)])],1)])],1)])])},r=[],o=n("5530"),l=n("c5fa"),c=n("2f62"),u={components:{},data:function(){return{WaitingForGettingQuestion:!1,isQuestionReported:!1,totalQuestionCount:0,totalSuccesfullCount:0,totalWrongCount:0,rightAnswer:-1,selectedAnswer:-1,answers:["test","test","test","test"],questionWordId:"",question:"",userId:this.$cookie.get("id"),speechStatus:!1,headerClass:"dark",questionButtonClass:"secondary",isSuccesfullAnswer:!1,isReadyForAnswerQuestion:!0,questionType:1,options:[{value:"1",text:"A1"},{value:"2",text:"A2"},{value:"3",text:"B1"},{value:"4",text:"B2"},{value:"5",text:"C1"},{value:"6",text:"C2"}],selected:1}},computed:Object(o["a"])({},Object(c["b"])(["isLoggedIn"])),methods:{questionSelectionChanged:function(t){"nav-fib"!==t.target.id?this.questionType=1:this.questionType=2,this.getQuestion()},changeClassForNavs:function(t){return this.questionType===t?"nav-link active":"nav-link"},getQuestion:function(){var t=this;Object(l["d"])(this.selected,this.questionType).then((function(e){t.WaitingForGettingQuestion=!1,t.isQuestionReported=!1,t.assignValuesFromApı(e)}))},"assignValuesFromApı":function(t){this.answers=t.results.answers,this.question=t.results.question,this.rightAnswer=t.results.correctAnswer+1,this.questionWordId=t.results.questionWordId},selectedAnswerOnChange:function(t){var e=this;this.isReadyForAnswerQuestion&&(this.isReadyForAnswerQuestion=!1,this.selectedAnswer=t.target.value,this.selectedAnswer==this.rightAnswer?(this.isSuccesfullAnswer=!0,this.totalSuccesfullCount++):(this.isSuccesfullAnswer=!1,this.totalWrongCount++),this.totalQuestionCount++,this.makeActionsForUser(this.isSuccesfullAnswer),setTimeout((function(){e.WaitingForGettingQuestion=!0,e.resetActionsForUser(),e.getQuestion(),e.isReadyForAnswerQuestion=!0,e.selectedAnswer=-1}),1e3))},makeActionsForUser:function(t){t?(this.headerClass="success ",this.questionButtonClass="dark"):(this.headerClass="danger",this.questionButtonClass="dark"),this.userId&&Object(l["k"])(this.userId,t,this.selected)},changeClass:function(t){return{"element-animation1 btn btn-lg btn-secondary btn-block":1==t&&1!=this.selectedAnswer,"element-animation2 btn btn-lg btn-secondary btn-block":2==t&&2!=this.selectedAnswer,"element-animation3 btn btn-lg btn-secondary btn-block":3==t&&3!=this.selectedAnswer,"element-animation4 btn btn-lg btn-secondary btn-block":4==t&&4!=this.selectedAnswer,"element-animation1 btn btn-lg btn-primary btn-block":1==t&&1==this.selectedAnswer&&1!=this.rightAnswer,"element-animation2 btn btn-lg btn-primary btn-block":2==t&&2==this.selectedAnswer&&2!=this.rightAnswer,"element-animation3 btn btn-lg btn-primary btn-block":3==t&&3==this.selectedAnswer&&3!=this.rightAnswer,"element-animation4 btn btn-lg btn-primary btn-block":4==t&&4==this.selectedAnswer&&4!=this.rightAnswer,"element-animation1 btn btn-lg btn-success btn-block":1==t&&1==this.selectedAnswer&&1==this.rightAnswer,"element-animation2 btn btn-lg btn-success btn-block":2==t&&2==this.selectedAnswer&&2==this.rightAnswer,"element-animation3 btn btn-lg btn-success btn-block":3==t&&3==this.selectedAnswer&&3==this.rightAnswer,"element-animation4 btn btn-lg btn-success btn-block":4==t&&4==this.selectedAnswer&&4==this.rightAnswer,"element-animation1 btn btn-lg btn-danger btn-block":1==t&&1==this.rightAnswer&&1!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion,"element-animation2 btn btn-lg btn-danger btn-block":2==t&&2==this.rightAnswer&&2!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion,"element-animation3 btn btn-lg btn-danger btn-block":3==t&&3==this.rightAnswer&&3!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion,"element-animation4 btn btn-lg btn-danger btn-block":4==t&&4==this.rightAnswer&&4!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion}},resetActionsForUser:function(){this.headerClass="dark",this.questionButtonClass="secondary"},openReportModel:function(){this.$refs.report.openReportModelFromParent()},speechText:function(){var t=this;this.speechStatus=!0;var e=new SpeechSynthesisUtterance(this.question);e.rate=.7,e.pitch=1,window.speechSynthesis.speak(e),setTimeout((function(){t.speechStatus=!1}),1e3)}},mounted:function(){this.getQuestion()},watch:{selected:function(){this.getQuestion()}}},d=u,h=(n("bcc6"),n("2877")),f=Object(h["a"])(d,a,r,!1,null,"dad86b32",null),b=f.exports,m=n("0418"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container h-100"},[i("div",{staticClass:"row h-100 justify-content-center align-items-center"},[i("div",{staticClass:"container py-5 "},[i("header",{staticClass:"py-5"},[i("h1",{staticClass:"display-2"},[i("b-img",{staticStyle:{width:"400px"},attrs:{src:n("b844"),alt:"Quiz-It"}})],1),i("br"),i("p",{staticClass:" font mb-1"},[t._v("İngilizce kelime öğrenmenin en kolay yolu 🤙. Boş zamanlarında senin için oluşturulan rastgele ingilizce kelime testlerini cevapla 🙏 Kendini geliştir!")]),i("div",{staticClass:"text-center",staticStyle:{"margin-top":"40px"}},[i("a",{staticClass:"animated-btn text-white",attrs:{href:"#"},on:{click:t.handleClick}},[i("b-icon",{attrs:{icon:"play-fill"}})],1)])])])])])},g=[],v={data:function(){return{}},methods:{handleClick:function(){this.$emit("LoadingClickEvent",this.report)}},computed:Object(o["a"])({},Object(c["b"])(["getAppName"]))},w=v,y=(n("3ef5"),Object(h["a"])(w,p,g,!1,null,"89afbec0",null)),C=y.exports,A={name:"Main",components:{Quiz:b,Header:m["a"],Loading:C},data:function(){return{loading:!0}},methods:{handleClick:function(){this.loading=!1}}},k=A,_=(n("2837"),Object(h["a"])(k,i,s,!1,null,"f520717c",null));e["default"]=_.exports},bcc6:function(t,e,n){"use strict";var i=n("a655"),s=n.n(i);s.a},d0e4:function(t,e,n){},dbb4:function(t,e,n){var i=n("23e7"),s=n("83ab"),a=n("56ef"),r=n("fc6a"),o=n("06cf"),l=n("8418");i({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,n,i=r(t),s=o.f,c=a(i),u={},d=0;while(c.length>d)n=s(i,e=c[d++]),void 0!==n&&l(u,e,n);return u}})},dbf3:function(t,e,n){},e439:function(t,e,n){var i=n("23e7"),s=n("d039"),a=n("fc6a"),r=n("06cf").f,o=n("83ab"),l=s((function(){r(1)})),c=!o||l;i({target:"Object",stat:!0,forced:c,sham:!o},{getOwnPropertyDescriptor:function(t,e){return r(a(t),e)}})},e538:function(t,e,n){var i=n("b622");e.f=i},eb0a:function(t,e,n){"use strict";var i=n("3d76"),s=n.n(i);s.a},ec1b:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,n){var i=n(4)(n(1),n(5),null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),n=e[0],i=e.length>1?this.decimal+e[1]:"",s=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;s.test(n);)n=n.replace(s,"$1"+this.separator+"$2");return this.prefix+n+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=s.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",s.default)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,s="webkit moz ms o".split(" "),a=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=a=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=a=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,l=0;l<s.length&&(!a||!r);l++)o=s[l],e.requestAnimationFrame=a=a||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];a&&r||(e.requestAnimationFrame=a=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-i)),s=window.setTimeout((function(){t(e+n)}),n);return i=e+n,s},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=a,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,n,i){var s,a=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,a=t.default);var o="function"==typeof a?a.options:a;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),i){var l=Object.create(o.computed||null);Object.keys(i).forEach((function(t){var e=i[t];l[t]=function(){return e}})),o.computed=l}return{esModule:s,exports:a,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},f820:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("div",{staticClass:"container-fluid home-main"},[i("header",{staticClass:"py-5"},[i("h1",{staticClass:"display-2"},[i("b-img",{staticStyle:{width:"400px"},attrs:{src:n("a4d6"),alt:"Quiz-It"}})],1),i("br"),i("p",{staticClass:" font mb-1"},[t._v("İngilizce kelime öğrenmenin en kolay yolu 🤙. Boş zamanlarında senin için oluşturulan rastgele ingilizce kelime testlerini cevapla 🙏 Kendini geliştir!")])]),i("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._v("Github")]),i("div",{staticClass:"row",staticStyle:{"margin-top":"80px"}},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"single_counter p-y-2 m-t-1"},[i("i",{staticClass:"fa fa-heart m-b-1"}),i("h2",{staticClass:"statistic-counter"},[i("countTo",{attrs:{startVal:t.startVal,endVal:t.wordCount,duration:3e3}})],1),i("p",[t._v("Farklı Kelime")])])]),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"single_counter p-y-2 m-t-1"},[i("i",{staticClass:"fa fa-heart m-b-1"}),i("h2",{staticClass:"statistic-counter"},[i("countTo",{attrs:{startVal:t.startVal,endVal:t.userCount,duration:3e3}})],1),i("p",[t._v("Kullanıcı")])])])])]),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid home-content1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 content1-left"},[n("h3",[t._v(" Neden "),n("span",{staticClass:"blinker"},[t._v("?")])]),n("p",[t._v("Boş zamanlarında ingilizce kelimeler öğrenmen için harika bir yol. Mobil uyumluluğu sayesinde ister telefondan ister bilgisayarından hemen çalışmaya başla üstelik "),n("b",[t._v("bedava!")])])]),n("div",{staticClass:"col-md-6 content1-right"},[n("p",[t._v("Hem kendinle hem başkalarıyla yarışmak harika değil mi? "),n("b",[t._v("Quiz-It")]),t._v(" ile beraber kelimeleri kağıda yazarak çalışma devri kapandı. Kolayca antreman yap geliş! Biz sana güveniyoruz.")])])])])}],a=n("5530"),r=n("2f62"),o=n("ec1b"),l=n.n(o),c=n("0418"),u=n("c5fa"),d={components:{Header:c["a"],countTo:l.a},methods:{handleClick:function(t){this.clicked=t.target.id},getStatsInfo:function(){var t=this;Object(u["e"])().then((function(e){t.wordCount=e.data.results.words,t.userCount=e.data.results.users}))}},data:function(){return{startVal:0,wordCount:3e3,userCount:100,positiveCommentCount:50,createdUser:1}},mounted:function(){this.getStatsInfo()},computed:Object(a["a"])({},Object(r["b"])(["getAppName"]))},h=d,f=(n("eb0a"),n("2877")),b=Object(f["a"])(h,i,s,!1,null,"be68e816",null);e["default"]=b.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=login.7c00e4f6.js.map