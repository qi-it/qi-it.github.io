(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0418":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[i("b-navbar-brand",{attrs:{href:"/"}},[i("b-img",{staticStyle:{width:"160px"},attrs:{src:n("40b5"),alt:"Quiz-It"}})],1),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",[i("b-nav-item",{attrs:{href:"/#/top10"}},[t._v("Top 10")]),i("b-nav-item",{attrs:{href:"/#/hakkinda"}},[t._v("Hakkında")])],1),i("b-navbar-nav",{staticClass:"ml-auto"},[t.isLoggedIn?t._e():i("b-nav-item",{attrs:{href:"/#/giris"}},[t._v("Giriş Yap")]),t.isLoggedIn?t._e():i("b-nav-item",{attrs:{href:"/#/uye-ol"}},[t._v("Üye Ol")]),t.isLoggedIn?i("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t.nameSurname?i("em",{key:t.nameSurname},[t._v(t._s(t.nameSurname))]):t._e()]},proxy:!0}],null,!1,1622750097)},[i("b-dropdown-item",{attrs:{href:"#"},on:{click:t.goProfile}},[t._v("Profil")]),i("b-dropdown-item",{attrs:{href:"#"},on:{click:t.logout}},[t._v("Çıkış Yap")])],1):t._e()],1)],1)],1)],1)},a=[],s=n("5530"),r=n("2f62"),o={name:"Header",data:function(){return{}},computed:Object(s["a"])({},Object(r["b"])(["isLoggedIn","nameSurname","getAppName"])),methods:{goProfile:function(){this.$router.push("/profil")},logout:function(){var t=this;this.$store.dispatch("logout").then((function(){return t.$router.push("/")})).catch((function(t){console.log(t)})).catch((function(t){return console.log(t)}))}}},c=o,l=n("2877"),u=Object(l["a"])(c,i,a,!1,null,null,null);e["a"]=u.exports},"057f":function(t,e,n){var i=n("fc6a"),a=n("241c").f,s={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return a(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==s.call(t)?o(t):a(i(t))}},"09af":function(t,e,n){},"159b":function(t,e,n){var i=n("da84"),a=n("fdbc"),s=n("17c2"),r=n("9112");for(var o in a){var c=i[o],l=c&&c.prototype;if(l&&l.forEach!==s)try{r(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,a=n("a640"),s=n("ae40"),r=a("forEach"),o=s("forEach");t.exports=r&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var i=n("d039"),a=n("b622"),s=n("2d00"),r=a("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d76":function(t,e,n){},"3ef5":function(t,e,n){"use strict";var i=n("a7c6"),a=n.n(i);a.a},"40b5":function(t,e,n){t.exports=n.p+"img/quiz-it.0218190c.png"},4160:function(t,e,n){"use strict";var i=n("23e7"),a=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"45a7":function(t,e,n){"use strict";var i=n("d5f6"),a=n.n(i);a.a},"4de4":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").filter,s=n("1dde"),r=n("ae40"),o=s("filter"),c=r("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},6756:function(t,e,n){"use strict";var i=n("80d2"),a=n.n(i);a.a},"6a6b":function(t,e,n){"use strict";var i=n("09af"),a=n.n(i);a.a},"746f":function(t,e,n){var i=n("428f"),a=n("5135"),s=n("e538"),r=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});a(e,t)||r(e,t,{value:s.f(t)})}},"80d2":function(t,e,n){},8418:function(t,e,n){"use strict";var i=n("c04e"),a=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var r=i(e);r in t?a.f(t,r,s(0,n)):t[r]=n}},a4d3:function(t,e,n){"use strict";var i=n("23e7"),a=n("da84"),s=n("d066"),r=n("c430"),o=n("83ab"),c=n("4930"),l=n("fdbf"),u=n("d039"),d=n("5135"),f=n("e8b5"),h=n("861d"),b=n("825a"),m=n("7b0b"),p=n("fc6a"),g=n("c04e"),v=n("5c6c"),y=n("7c73"),w=n("df75"),C=n("241c"),A=n("057f"),k=n("7418"),S=n("06cf"),_=n("9bf2"),O=n("d1e7"),F=n("9112"),x=n("6eeb"),V=n("5692"),j=n("f772"),q=n("d012"),T=n("90e3"),L=n("b622"),P=n("e538"),E=n("746f"),Q=n("d44e"),D=n("69f3"),N=n("b727").forEach,M=j("hidden"),z="Symbol",R="prototype",I=L("toPrimitive"),$=D.set,B=D.getterFor(z),G=Object[R],H=a.Symbol,W=s("JSON","stringify"),K=S.f,U=_.f,J=A.f,Y=O.f,Z=V("symbols"),X=V("op-symbols"),tt=V("string-to-symbol-registry"),et=V("symbol-to-string-registry"),nt=V("wks"),it=a.QObject,at=!it||!it[R]||!it[R].findChild,st=o&&u((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=K(G,e);i&&delete G[e],U(t,e,n),i&&t!==G&&U(G,e,i)}:U,rt=function(t,e){var n=Z[t]=y(H[R]);return $(n,{type:z,tag:t,description:e}),o||(n.description=e),n},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,n){t===G&&ct(X,e,n),b(t);var i=g(e,!0);return b(n),d(Z,i)?(n.enumerable?(d(t,M)&&t[M][i]&&(t[M][i]=!1),n=y(n,{enumerable:v(0,!1)})):(d(t,M)||U(t,M,v(1,{})),t[M][i]=!0),st(t,i,n)):U(t,i,n)},lt=function(t,e){b(t);var n=p(e),i=w(n).concat(bt(n));return N(i,(function(e){o&&!dt.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=g(t,!0),n=Y.call(this,e);return!(this===G&&d(Z,e)&&!d(X,e))&&(!(n||!d(this,e)||!d(Z,e)||d(this,M)&&this[M][e])||n)},ft=function(t,e){var n=p(t),i=g(e,!0);if(n!==G||!d(Z,i)||d(X,i)){var a=K(n,i);return!a||!d(Z,i)||d(n,M)&&n[M][i]||(a.enumerable=!0),a}},ht=function(t){var e=J(p(t)),n=[];return N(e,(function(t){d(Z,t)||d(q,t)||n.push(t)})),n},bt=function(t){var e=t===G,n=J(e?X:p(t)),i=[];return N(n,(function(t){!d(Z,t)||e&&!d(G,t)||i.push(Z[t])})),i};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===G&&n.call(X,t),d(this,M)&&d(this[M],e)&&(this[M][e]=!1),st(this,e,v(1,t))};return o&&at&&st(G,e,{configurable:!0,set:n}),rt(e,t)},x(H[R],"toString",(function(){return B(this).tag})),x(H,"withoutSetter",(function(t){return rt(T(t),t)})),O.f=dt,_.f=ct,S.f=ft,C.f=A.f=ht,k.f=bt,P.f=function(t){return rt(L(t),t)},o&&(U(H[R],"description",{configurable:!0,get:function(){return B(this).description}}),r||x(G,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),N(w(nt),(function(t){E(t)})),i({target:z,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=H(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:bt}),i({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(m(t))}}),W){var mt=!c||u((function(){var t=H();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));i({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,n){var i,a=[t],s=1;while(arguments.length>s)a.push(arguments[s++]);if(i=e,(h(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),a[1]=e,W.apply(null,a)}})}H[R][I]||F(H[R],I,H[R].valueOf),Q(H,z),q[M]=!0},a4d6:function(t,e,n){t.exports=n.p+"img/quiz-it-var1.ca37de8e.png"},a7c6:function(t,e,n){},b64b:function(t,e,n){var i=n("23e7"),a=n("7b0b"),s=n("df75"),r=n("d039"),o=r((function(){s(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return s(a(t))}})},b844:function(t,e,n){t.exports=n.p+"img/quiz-it-blue.6de0500f.png"},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t.loading?n("div",{staticStyle:{height:"100vh"}},[n("Loading",{on:{LoadingClickEvent:t.handleClick}})],1):t._e(),t.loading?t._e():n("div",[n("Quiz")],1),n("Footer")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-items-center min-vh-100"},[n("div",{staticClass:"container text-center"},[n("div",{staticClass:"quiz",staticStyle:{}},[n("ul",{staticClass:"\n          nav nav-pills\n          justify-content-center\n          d-flex\n          align-items-center\n          nav-fill\n        "},[n("li",{staticClass:"nav-item"},[n("a",{class:t.changeClassForNavs(1),attrs:{id:"nav-words","aria-current":"page",href:"#"},on:{click:t.questionSelectionChanged}},[t._v("Kelimeler")])]),n("li",{staticClass:"nav-item"},[n("a",{class:t.changeClassForNavs(2),attrs:{id:"nav-fib",href:"#"},on:{click:t.questionSelectionChanged}},[t._v("Boşluk Doldurma")])])]),n("b-card",{attrs:{"header-bg-variant":t.headerClass,"header-text-variant":"white","header-tag":"header","footer-tag":"footer"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"d-flex justify-content-end"},[n("div",{staticClass:"mr-auto p-2"},[n("h4",{staticClass:"text-left mb-0"},[t._v(" "+t._s(t.question+" ?")+" "),t.speechStatus?t._e():n("b-icon-volume-up",{on:{click:function(e){return t.speechText()}}}),t.speechStatus?n("b-icon-volume-up-fill"):t._e()],1)]),n("div",{staticClass:"p-2"},[n("div",{staticClass:"text-center"},[n("b-button",{attrs:{pill:"",variant:t.questionButtonClass}},[t._v(" Soru "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.totalQuestionCount))]),t._v(" D "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.totalSuccesfullCount))]),t._v(" Y "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.totalWrongCount))])],1)],1)])])]},proxy:!0},{key:"footer",fn:function(){return[n("em"),n("div",{staticClass:"d-flex justify-content-end"},[n("div",{staticClass:"p-2"},[t._v("Zorluk:")]),n("div",{staticClass:"mr-auto"},[n("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)])]},proxy:!0}])},[n("div",{staticClass:"cardHeight"},[n("b-overlay",{attrs:{show:t.WaitingForGettingQuestion,rounded:"sm"}},[t.WaitingForGettingQuestion?t._e():n("div",{staticClass:"btn-group-toggle",attrs:{"data-toggle":"buttons"}},t._l(t.answers,(function(e,i){return n("label",{key:i,class:t.changeClass(i+1)},[n("svg",{staticClass:"bi bi-chevron-right",attrs:{width:"32",height:"32",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z","clip-rule":"evenodd"}})]),n("input",{attrs:{type:"radio",name:"q_answer",autocomplete:"off"},domProps:{value:i+1},on:{click:function(e){return t.selectedAnswerOnChange(e)}}}),t._v(" "+t._s(e)+" ")])})),0)])],1)])],1)])])},r=[],o=n("5530"),c=n("c5fa"),l=n("2f62"),u={components:{},data:function(){return{WaitingForGettingQuestion:!1,isQuestionReported:!1,totalQuestionCount:0,totalSuccesfullCount:0,totalWrongCount:0,rightAnswer:-1,selectedAnswer:-1,answers:["test","test","test","test"],questionWordId:"",question:"",userId:this.$cookie.get("id"),speechStatus:!1,headerClass:"dark",questionButtonClass:"secondary",isSuccesfullAnswer:!1,isReadyForAnswerQuestion:!0,questionType:1,options:[{value:"1",text:"A1"},{value:"2",text:"A2"},{value:"3",text:"B1"},{value:"4",text:"B2"},{value:"5",text:"C1"},{value:"6",text:"C2"}],selected:1}},computed:Object(o["a"])({},Object(l["b"])(["isLoggedIn"])),methods:{questionSelectionChanged:function(t){"nav-fib"!==t.target.id?this.questionType=1:this.questionType=2,this.getQuestion()},changeClassForNavs:function(t){return this.questionType===t?"nav-link active":"nav-link"},getQuestion:function(){var t=this;Object(c["d"])(this.selected,this.questionType).then((function(e){t.WaitingForGettingQuestion=!1,t.isQuestionReported=!1,t.assignValuesFromApı(e)}))},"assignValuesFromApı":function(t){this.answers=t.results.answers,this.question=t.results.question,this.rightAnswer=t.results.correctAnswer+1,this.questionWordId=t.results.questionWordId},selectedAnswerOnChange:function(t){var e=this;this.isReadyForAnswerQuestion&&(this.isReadyForAnswerQuestion=!1,this.selectedAnswer=t.target.value,this.selectedAnswer==this.rightAnswer?(this.isSuccesfullAnswer=!0,this.totalSuccesfullCount++):(this.isSuccesfullAnswer=!1,this.totalWrongCount++),this.totalQuestionCount++,this.makeActionsForUser(this.isSuccesfullAnswer),setTimeout((function(){e.WaitingForGettingQuestion=!0,e.resetActionsForUser(),e.getQuestion(),e.isReadyForAnswerQuestion=!0,e.selectedAnswer=-1}),1e3))},makeActionsForUser:function(t){t?(this.headerClass="success ",this.questionButtonClass="dark"):(this.headerClass="danger",this.questionButtonClass="dark"),this.userId&&Object(c["k"])(this.userId,t,this.selected)},changeClass:function(t){return{"element-animation1 btn btn-lg btn-secondary btn-block":1==t&&1!=this.selectedAnswer,"element-animation2 btn btn-lg btn-secondary btn-block":2==t&&2!=this.selectedAnswer,"element-animation3 btn btn-lg btn-secondary btn-block":3==t&&3!=this.selectedAnswer,"element-animation4 btn btn-lg btn-secondary btn-block":4==t&&4!=this.selectedAnswer,"element-animation1 btn btn-lg btn-primary btn-block":1==t&&1==this.selectedAnswer&&1!=this.rightAnswer,"element-animation2 btn btn-lg btn-primary btn-block":2==t&&2==this.selectedAnswer&&2!=this.rightAnswer,"element-animation3 btn btn-lg btn-primary btn-block":3==t&&3==this.selectedAnswer&&3!=this.rightAnswer,"element-animation4 btn btn-lg btn-primary btn-block":4==t&&4==this.selectedAnswer&&4!=this.rightAnswer,"element-animation1 btn btn-lg btn-success btn-block":1==t&&1==this.selectedAnswer&&1==this.rightAnswer,"element-animation2 btn btn-lg btn-success btn-block":2==t&&2==this.selectedAnswer&&2==this.rightAnswer,"element-animation3 btn btn-lg btn-success btn-block":3==t&&3==this.selectedAnswer&&3==this.rightAnswer,"element-animation4 btn btn-lg btn-success btn-block":4==t&&4==this.selectedAnswer&&4==this.rightAnswer,"element-animation1 btn btn-lg btn-danger btn-block":1==t&&1==this.rightAnswer&&1!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion,"element-animation2 btn btn-lg btn-danger btn-block":2==t&&2==this.rightAnswer&&2!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion,"element-animation3 btn btn-lg btn-danger btn-block":3==t&&3==this.rightAnswer&&3!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion,"element-animation4 btn btn-lg btn-danger btn-block":4==t&&4==this.rightAnswer&&4!=this.selectedAnswer&&0==this.isReadyForAnswerQuestion}},resetActionsForUser:function(){this.headerClass="dark",this.questionButtonClass="secondary"},openReportModel:function(){this.$refs.report.openReportModelFromParent()},speechText:function(){var t=this;this.speechStatus=!0;var e=new SpeechSynthesisUtterance(this.question);e.rate=.7,e.pitch=1,window.speechSynthesis.speak(e),setTimeout((function(){t.speechStatus=!1}),1e3)}},mounted:function(){this.getQuestion()},watch:{selected:function(){this.getQuestion()}}},d=u,f=(n("6756"),n("2877")),h=Object(f["a"])(d,s,r,!1,null,"d972c6a4",null),b=h.exports,m=n("0418"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-4 bg-dark text-white-50",attrs:{id:"sticky-footer"}},[n("div",{staticClass:"container text-center"},[n("small",[t._v("Copyright © 2020 by Mustafa Erdem Köşk. All rights reserved.")])])])}],v=(n("6a6b"),{}),y=Object(f["a"])(v,p,g,!1,null,"68253170",null),w=y.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container h-100"},[i("div",{staticClass:"row h-100 justify-content-center align-items-center"},[i("div",{staticClass:"container py-5 "},[i("header",{staticClass:"py-5"},[i("h1",{staticClass:"display-2"},[i("b-img",{staticStyle:{width:"400px"},attrs:{src:n("b844"),alt:"Quiz-It"}})],1),i("br"),i("p",{staticClass:" font mb-1"},[t._v("İngilizce kelime öğrenmenin en kolay yolu 🤙. Boş zamanlarında senin için oluşturulan rastgele ingilizce kelime testlerini cevapla 🙏 Kendini geliştir!")]),i("div",{staticClass:"text-center",staticStyle:{"margin-top":"40px"}},[i("a",{staticClass:"animated-btn text-white",attrs:{href:"#"},on:{click:t.handleClick}},[i("b-icon",{attrs:{icon:"play-fill"}})],1)])])])])])},A=[],k={data:function(){return{}},methods:{handleClick:function(){this.$emit("LoadingClickEvent",this.report)}},computed:Object(o["a"])({},Object(l["b"])(["getAppName"]))},S=k,_=(n("3ef5"),Object(f["a"])(S,C,A,!1,null,"89afbec0",null)),O=_.exports,F={name:"Main",components:{Quiz:b,Header:m["a"],Footer:w,Loading:O},data:function(){return{loading:!0}},methods:{handleClick:function(){this.loading=!1}}},x=F,V=(n("45a7"),Object(f["a"])(x,i,a,!1,null,"649bdd81",null));e["default"]=V.exports},d5f6:function(t,e,n){},dbb4:function(t,e,n){var i=n("23e7"),a=n("83ab"),s=n("56ef"),r=n("fc6a"),o=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,i=r(t),a=o.f,l=s(i),u={},d=0;while(l.length>d)n=a(i,e=l[d++]),void 0!==n&&c(u,e,n);return u}})},e439:function(t,e,n){var i=n("23e7"),a=n("d039"),s=n("fc6a"),r=n("06cf").f,o=n("83ab"),c=a((function(){r(1)})),l=!o||c;i({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return r(s(t),e)}})},e538:function(t,e,n){var i=n("b622");e.f=i},eb0a:function(t,e,n){"use strict";var i=n("3d76"),a=n.n(i);a.a},ec1b:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,n){var i=n(4)(n(1),n(5),null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),n=e[0],i=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(n);)n=n.replace(a,"$1"+this.separator+"$2");return this.prefix+n+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,a="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,c=0;c<a.length&&(!s||!r);c++)o=a[c],e.requestAnimationFrame=s=s||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-i)),a=window.setTimeout((function(){t(e+n)}),n);return i=e+n,a},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,n,i){var a,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(a=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),i){var c=Object.create(o.computed||null);Object.keys(i).forEach((function(t){var e=i[t];c[t]=function(){return e}})),o.computed=c}return{esModule:a,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},f820:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("div",{staticClass:"container-fluid home-main"},[i("header",{staticClass:"py-5"},[i("h1",{staticClass:"display-2"},[i("b-img",{staticStyle:{width:"400px"},attrs:{src:n("a4d6"),alt:"Quiz-It"}})],1),i("br"),i("p",{staticClass:" font mb-1"},[t._v("İngilizce kelime öğrenmenin en kolay yolu 🤙. Boş zamanlarında senin için oluşturulan rastgele ingilizce kelime testlerini cevapla 🙏 Kendini geliştir!")])]),i("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._v("Github")]),i("div",{staticClass:"row",staticStyle:{"margin-top":"80px"}},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"single_counter p-y-2 m-t-1"},[i("i",{staticClass:"fa fa-heart m-b-1"}),i("h2",{staticClass:"statistic-counter"},[i("countTo",{attrs:{startVal:t.startVal,endVal:t.wordCount,duration:3e3}})],1),i("p",[t._v("Farklı Kelime")])])]),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"single_counter p-y-2 m-t-1"},[i("i",{staticClass:"fa fa-heart m-b-1"}),i("h2",{staticClass:"statistic-counter"},[i("countTo",{attrs:{startVal:t.startVal,endVal:t.userCount,duration:3e3}})],1),i("p",[t._v("Kullanıcı")])])])])]),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid home-content1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 content1-left"},[n("h3",[t._v(" Neden "),n("span",{staticClass:"blinker"},[t._v("?")])]),n("p",[t._v("Boş zamanlarında ingilizce kelimeler öğrenmen için harika bir yol. Mobil uyumluluğu sayesinde ister telefondan ister bilgisayarından hemen çalışmaya başla üstelik "),n("b",[t._v("bedava!")])])]),n("div",{staticClass:"col-md-6 content1-right"},[n("p",[t._v("Hem kendinle hem başkalarıyla yarışmak harika değil mi? "),n("b",[t._v("Quiz-It")]),t._v(" ile beraber kelimeleri kağıda yazarak çalışma devri kapandı. Kolayca antreman yap geliş! Biz sana güveniyoruz.")])])])])}],s=n("5530"),r=n("2f62"),o=n("ec1b"),c=n.n(o),l=n("0418"),u=n("c5fa"),d={components:{Header:l["a"],countTo:c.a},methods:{handleClick:function(t){this.clicked=t.target.id},getStatsInfo:function(){var t=this;Object(u["e"])().then((function(e){t.wordCount=e.data.results.words,t.userCount=e.data.results.users}))}},data:function(){return{startVal:0,wordCount:3e3,userCount:100,positiveCommentCount:50,createdUser:1}},mounted:function(){this.getStatsInfo()},computed:Object(s["a"])({},Object(r["b"])(["getAppName"]))},f=d,h=(n("eb0a"),n("2877")),b=Object(h["a"])(f,i,a,!1,null,"be68e816",null);e["default"]=b.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=login.49a058d6.js.map