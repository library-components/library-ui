module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/lib/",r(r.s=3)}([function(e,t,r){"use strict";function n(e,t,r,n,s,o,a,l){var i,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=i):s&&(i=l?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),i)if(c.functional){c._injectStyles=i;var u=c.render;c.render=function(e,t){return i.call(t),u(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,i):[i]}return{exports:e,options:c}}r.d(t,"a",(function(){return n}))},,,function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"drop-menu",class:[e.absolute?"menus-absolute":""]},[r("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.show?r("ul",{staticClass:"menus"},[r("li",[e._t("default")],2)]):e._e()])],1)};n._withStripped=!0;var s={name:"ASDrop",props:{absolute:{type:Boolean,default:!0}},data:()=>({show:!1}),methods:{showOrHidden(e){this.show=e},addClass(e,t){if(!e)return;let r=e.className,n=(t||"").split(" ");for(let t=0,s=n.length;t<s;t++){let s=n[t];s&&(e.classList?e.classList.add(s):hasClass(e,s)||(r+=" "+s))}e.classList||(e.className=r)},removeClass(e,t){if(!e||!t)return;let r=t.split(" "),n=" "+e.className+" ";for(let t=0,s=r.length;t<s;t++){let s=r[t];s&&(e.classList?e.classList.remove(s):hasClass(e,s)&&(n=n.replace(" "+s+" "," ")))}e.classList||(e.className=trim(n))},beforeEnter(e){this.addClass(e,"collapse-transition"),e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height="",e.style.overflow="hidden"},afterEnter(e){this.removeClass(e,"collapse-transition"),e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(this.addClass(e,"collapse-transition"),e.style.height=0)},afterLeave(e){this.removeClass(e,"collapse-transition"),e.style.height=""}}},o=r(0),a=Object(o.a)(s,n,[],!1,null,"20e8d64e",null);a.options.__file="packages/as-drop/src/component.vue";var l=a.exports;l.install=function(e){e.component(l.name,l)};t.default=l}]);