(this["webpackJsonpfast-read"]=this["webpackJsonpfast-read"]||[]).push([[0],{56:function(t){t.exports=JSON.parse('{"appName":"Fast Read","insertArticle.placeholder":"Paste The Article Here","insertArticle.button":"Start Read","insertArticle.action.tooLongWord":"/*Too Long Word*/"}')},57:function(t){t.exports=JSON.parse('{"appName":"H\u0131zl\u0131 Oku","insertArticle.placeholder":"Yaz\u0131y\u0131 Buraya Yap\u0131\u015ft\u0131r\u0131n\u0131z","insertArticle.button":"Okumaya Ba\u015fla","insertArticle.action.tooLongWord":"/*\xc7ok uzun kelime*/"}')},64:function(t,n,e){t.exports=e(93)},72:function(t,n,e){},93:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(26),c=e.n(o),i=e(20),l=e(19),u=e(95),d=e(56),f=e(57),s=e(15),p=[],h=e(27);function m(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?m(e,!0).forEach((function(n){Object(h.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var v={markedWordList:[],readWordList:[]},b=Object(l.b)({articleList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INSERT_ARTICLE":return Object.assign([],t,[].concat(Object(s.a)(t),[{id:n.article.id,numberOfPage:n.article.numberOfPage,wordList:n.article.wordList}]));default:return t}},wordLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"MARK_WORD":return g({},t,{markedWordList:[].concat(Object(s.a)(t.markedWordList),[n.word])});case"READ_WORD":return g({},t,{readWordList:[].concat(Object(s.a)(t.readWordList),[n.word])});default:return t}}}),w=(e(72),e(94)),O=e(23),x=e(16),E=e(3),j=e(4),y="#E1D5E7",L="#9673A6",W="#4D4D4D",k="#1A1A1A",A="#82B366",S="#FBFBFB",_="#FFFFFF",D="767px",R="479px";function I(){var t=Object(E.a)(["\n    display: flex;\n    flex-grow : 1;\n    flex-flow: column;\n    padding: 20px;\n"]);return I=function(){return t},t}function C(){var t=Object(E.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n    height:50px;\n    font-weight: bold;\n    border-style: solid;\n    border-width: 1px;\n    border-color: ",";\n"]);return C=function(){return t},t}function P(){var t=Object(E.a)(["\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    height: inherit;\n"]);return P=function(){return t},t}var N=j.a.div(P()),z=j.a.div(C(),y,L),F=j.a.div(I()),T=e(34),B=e(32),M=e(28);function H(){var t=Object(E.a)(["\n    border-color: ",";\n    border-width: 2px;\n    border-radius: 20px;\n    border-style: solid;\n    background-color: ",";\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    \n    ",";\n    ",";\n    @media (max-width: ",") {\n        ",";\n    }\n    \n    @media (max-width: ",") {\n        ",";\n    }\n\n    :hover {\n        background-color: ",";\n    }\n"]);return H=function(){return t},t}var V=j.a.div(H(),L,_,(function(t){var n=t.height;return n&&"height: ".concat(n,"px")}),(function(t){var n=t.width;return n&&"width: ".concat(n,"px")}),D,(function(t){var n=t.tWidth;return n&&"width: ".concat(n,"px")}),R,(function(t){var n=t.mWidth;return n&&"width: ".concat(n,"px")}),S);function J(){var t=Object(E.a)(["\n    display: flex;\n    flex-flow: column;\n    flex-grow: 1;\n    width: 100%;\n    justify-content: center;\n    ","\n    ","\n    align-items: center;\n"]);return J=function(){return t},t}function X(){var t=Object(E.a)(["\n    color: ",";\n    ","\n    ","\n"]);return X=function(){return t},t}function K(){var t=Object(E.a)(["\n    ","\n    ","\n    ","\n    ","\n    ","\n"]);return K=function(){return t},t}function U(){var t=Object(E.a)(["\n    ","\n    ","\n    ","\n    ","\n    ","\n"]);return U=function(){return t},t}var Y=j.a.div(U(),(function(t){var n=t.margin;return n&&"margin: ".concat(n,"px")}),(function(t){var n=t.top;return n&&"margin-top: ".concat(n,"px")}),(function(t){var n=t.bottom;return n&&"margin-bottom: ".concat(n,"px")}),(function(t){var n=t.right;return n&&"margin-right: ".concat(n,"px")}),(function(t){var n=t.left;return n&&"margin-left: ".concat(n,"px")})),$=(j.a.div(K(),(function(t){var n=t.padding;return n&&"padding: ".concat(n,"px")}),(function(t){var n=t.top;return n&&"padding-top: ".concat(n,"px;")}),(function(t){var n=t.bottom;return n&&"padding-bottom: ".concat(n,"px;")}),(function(t){var n=t.right;return n&&"padding-right: ".concat(n,"px;")}),(function(t){var n=t.left;return n&&"padding-left: ".concat(n,"px;")})),j.a.div(X(),k,(function(t){var n=t.fontSize;return n&&"font-size: ".concat(n,"px;")}),(function(t){var n=t.fontColor;return n&&"color: ".concat(n,";")}))),q=j.a.div(J(),(function(t){return t.flexStart&&"justify-content: flex-start;"}),(function(t){return t.flexEnd&&"justify-content: flex-end;"})),G=function(t){var n=t.children,e=t.leftIcon,r=t.rightIcon,o=Object(M.a)(t,["children","leftIcon","rightIcon"]);return a.a.createElement(V,o,a.a.createElement(Y,{left:"4"},e),a.a.createElement($,{fontSize:"20"},n),a.a.createElement(Y,{right:"4"},r))},Q=function(t){var n=t.fill,e=void 0===n?"#121313":n,r=t.width,o=void 0===r?35:r,c=t.height,i=void 0===c?32:c,l=(t.right,t.left?180:0);return a.a.createElement("svg",{width:o,height:i,fill:e,style:{transform:"rotate(".concat(l,"deg)")}},a.a.createElement("path",{clipRule:"evenodd",d:"M31.705,15.284L31.705,15.284L31.705,15.284 l-9.97-9.991c-0.634-0.66-1.748-0.162-1.723,0.734v4.976C20.008,11.002,20.004,11,20,11H1c-0.55,0-1,0.45-1,1v8c0,0.55,0.45,1,1,1 h19c0.004,0,0.008-0.002,0.012-0.002v4.972c-0.024,0.892,1.082,1.376,1.715,0.742l9.977-9.999 C32.098,16.318,32.098,15.678,31.705,15.284z M22.017,23.564V19H22h-1h-0.988v0.002C20.008,19.002,20.004,19,20,19h-1H2v-6h17h1 c0.004,0,0.008-0.002,0.012-0.002V13H21h1h0.017V8.432l7.55,7.566L22.017,23.564z"}),a.a.createElement("g",null),a.a.createElement("g",null),a.a.createElement("g",null),a.a.createElement("g",null),a.a.createElement("g",null),a.a.createElement("g",null))};function Z(){var t=Object(E.a)(["\n    border-color: ",";\n    border-width: 1px;\n    border-radius: 20px;\n    height: 340px;\n    font-size: 16px;\n    padding: 10px;\n    text-align: ",";\n    line-height: ",";\n    font-color: ","\n\n    &: focus {\n        text-align: left;\n        line-height: 18px;\n    }\n\n    width: 720px;\n\n    @media (max-width: ",") {\n        width: 450px;\n    }\n    @media (max-width: ",") {\n        width: 290px;\n    }\n"]);return Z=function(){return t},t}var tt=j.a.textarea(Z(),L,(function(t){return t.article?"left":"center"}),(function(t){return t.article?"18px":"340px"}),(function(t){return t.article?k:W}),D,R),nt=e(60),et=e.n(nt),rt=Object(i.b)(null,(function(t){return{insertArticle:function(n,e){return t(function(t,n){var e=t.split(" ").map((function(t){return t.length<30?t:n})),r=Math.ceil(e.length/200);return{type:"INSERT_ARTICLE",article:{id:et()(15),numberOfPage:r,wordList:e}}}(n,e))}}}))(Object(B.c)((function(t){var n=t.intl,e=t.insertArticle,o=Object(r.useState)(""),c=Object(T.a)(o,2),i=c[0],l=c[1],u=n.formatMessage({id:"insertArticle.placeholder"}),d=n.formatMessage({id:"insertArticle.action.tooLongWord"});return a.a.createElement(q,null,a.a.createElement(tt,{onChange:function(t){var n=t.target.value;l(n)},article:i,placeholder:u}),a.a.createElement(Y,{top:"16"},a.a.createElement(O.b,{to:"/read"},a.a.createElement(G,{height:"50",width:"740",tWidth:"470",mWidth:"310",onClick:function(){return e(i,d)},rightIcon:a.a.createElement(Q,{fill:A})},a.a.createElement(w.a,{id:"insertArticle.button"})))))}))),at=e(45),ot=e(12);function ct(){var t=Object(E.a)(["\n    ",";\n    border-radius: 4px;\n    padding: 4px;\n    cursor: pointer;\n\n    :hover {\n        opacity: 0.9;\n    }\n    :active {\n        opacity: 1;\n    }\n"]);return ct=function(){return t},t}var it=j.a.div(ct(),(function(t){var n=t.color;return"background-color: ".concat(n)})),lt=function(t){var n=t.color,e=Object(M.a)(t,["color"]);return a.a.createElement(it,Object.assign({},e,{color:n}))};function ut(){var t=Object(E.a)(["\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    width: 80%\n    justify-content: space-around;\n    padding: 10px;\n"]);return ut=function(){return t},t}function dt(){var t=Object(E.a)(["\n    display: flex;\n    flex-flow: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n"]);return dt=function(){return t},t}var ft=j.a.div(dt()),st=j.a.div(ut()),pt=Object(i.b)((function(t){var n=t.articleList,e=t.wordLists;return{articleList:n,markedWordList:e.markedWordList,readWordList:e.readWordList}}),(function(t){return{markWord:function(n){return t(function(t){return{type:"MARK_WORD",word:t}}(n))},readWord:function(n){return t(function(t){return{type:"READ_WORD",word:t}}(n))}}}))((function(t){var n=t.articleList,e=t.markWord,o=t.readWord,c=t.markedWordList,i=t.readWordList,l=Object(r.useState)(0),u=Object(T.a)(l,2),d=u[0],f=u[1],s=Object(x.f)().articleId,p=Object(ot.find)(n,(function(t){return t.id===s})),h=p?Object(ot.head)(p):Object(ot.last)(n);h||(window.location.href="/");var m=h.numberOfPage,g=h.wordList,v=Object(ot.chunk)(g,200)[d],b=function(t){var n=Object(ot.lowerCase)(t);return-1!==c.indexOf(n)},w=function(t){var n=Object(ot.lowerCase)(t);return-1!==i.indexOf(n)};return a.a.createElement(q,{flexStart:!0},a.a.createElement(at.StepList,{stepNumber:d},Object(ot.fill)(Array(m)).map((function(t,n){return a.a.createElement(at.Step,{key:n})}))),a.a.createElement(st,null,0!==d&&a.a.createElement(Y,{right:"10"},a.a.createElement(G,{height:"50",width:"50",onClick:function(){f(d-1)},leftIcon:a.a.createElement(Q,{fill:A,left:!0})})),a.a.createElement(ft,null,v.map((function(t,n){return a.a.createElement(Y,{key:n,margin:"2"},a.a.createElement(lt,{color:b(t)&&A||w(t)&&"transparent"||y,onClick:function(){return function(t){var n=Object(ot.lowerCase)(t);-1===c.indexOf(n)&&e(n)}(t)}},t))}))),d+1<m&&a.a.createElement(Y,{left:"10"},a.a.createElement(G,{height:"50",width:"50",onClick:function(){return v.forEach((function(t){var n=Object(ot.lowerCase)(t);!b(n)&&o(n)})),void f(d+1)},rightIcon:a.a.createElement(Q,{fill:A})}))))}));var ht=function(){return a.a.createElement(N,null,a.a.createElement(z,null,a.a.createElement(w.a,{id:"appName"})),a.a.createElement(F,null,a.a.createElement(O.a,null,a.a.createElement(x.c,null,a.a.createElement(x.a,{path:"/read/:articleId?",component:pt}),a.a.createElement(x.a,{path:"/",component:rt})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var mt=Object(l.c)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),gt={tr:f,en:d},vt=navigator.language.split(/[-_]/)[0];c.a.render(a.a.createElement(i.a,{store:mt},a.a.createElement(u.a,{locale:navigator.language,messages:gt[vt]},a.a.createElement(ht,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.73827efb.chunk.js.map