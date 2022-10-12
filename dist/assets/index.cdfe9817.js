const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};V();function N(){}function G(e){return e()}function T(){return Object.create(null)}function E(e){e.forEach(G)}function W(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let C;function U(e,t){return C||(C=document.createElement("a")),C.href=t,e===C.href}function Y(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function Z(e,t,n){e.insertBefore(t,n||null)}function J(e){e.parentNode.removeChild(e)}function x(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function j(){return k(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let B;function $(e){B=e}const A=[],R=[],L=[],D=[],te=Promise.resolve();let z=!1;function ne(){z||(z=!0,te.then(Q))}function q(e){L.push(e)}const M=new Set;let I=0;function Q(){const e=B;do{for(;I<A.length;){const t=A[I];I++,$(t),oe(t.$$)}for($(null),A.length=0,I=0;R.length;)R.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];M.has(n)||(M.add(n),n())}L.length=0}while(A.length);for(;D.length;)D.pop()();z=!1,M.clear(),$(e)}function oe(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const ae=new Set;function re(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function le(e,t,n,r){const{fragment:o,on_mount:l,on_destroy:a,after_update:h}=e.$$;o&&o.m(t,n),r||q(()=>{const c=l.map(G).filter(W);a?a.push(...c):E(c),e.$$.on_mount=[]}),h.forEach(q)}function ie(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(A.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(e,t,n,r,o,l,a,h=[-1]){const c=B;$(e);const i=e.$$={fragment:null,ctx:null,props:l,update:N,not_equal:o,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:T(),dirty:h,skip_bound:!1,root:t.target||c.$$.root};a&&a(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},(u,p,...s)=>{const v=s.length?s[0]:p;return i.ctx&&o(i.ctx[u],i.ctx[u]=v)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](v),d&&se(e,u)),p}):[],i.update(),d=!0,E(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const u=ee(t.target);i.fragment&&i.fragment.l(u),u.forEach(J)}else i.fragment&&i.fragment.c();t.intro&&re(e.$$.fragment),le(e,t.target,t.anchor,t.customElement),Q()}$(c)}class ue{$destroy(){ie(this,1),this.$destroy=N}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe=24,me=1;var y={capybara:fe,otter:me};function he(e){let t,n,r,o,l,a,h=e[0].animal+"",c,i,d=e[0].animalAmount+"",u,p,s,v,_,O,g,P,S,F;return{c(){t=x("main"),n=x("div"),r=x("h2"),r.textContent="\u041F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u0438\u043A\u043E\u0441\u043D\u0438\u0441\u044C \u043A\u043E \u043C\u043D\u0435..",o=j(),l=x("h3"),a=k("\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 "),c=k(h),i=k(" - "),u=k(d),p=j(),s=x("button"),s.textContent="\u0415\u0441\u043B\u0438 \u0445\u043E\u0447\u0435\u0448\u044C, \u0447\u0442\u043E-\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0435..",v=j(),_=x("div"),O=x("div"),g=x("img"),m(r,"class","svelte-1omahxa"),m(l,"class","svelte-1omahxa"),m(s,"class","svelte-1omahxa"),m(g,"id","dog-img"),U(g.src,P=e[1])||m(g,"src",P),m(g,"alt","\u0417\u0434\u0435\u0441\u044C \u0436\u0438\u0432\u0435\u0442 \u043A\u0430\u043F\u0438\u0431\u0430\u0440\u0430"),m(g,"class","svelte-1omahxa"),m(O,"class","svelte-1omahxa"),m(_,"id","img-div"),m(_,"class","svelte-1omahxa"),m(n,"id","main-div"),m(n,"class","svelte-1omahxa"),m(t,"class","svelte-1omahxa")},m(b,w){Z(b,t,w),f(t,n),f(n,r),f(n,o),f(n,l),f(l,a),f(l,c),f(l,i),f(l,u),f(n,p),f(n,s),f(n,v),f(n,_),f(_,O),f(O,g),S||(F=[H(s,"click",e[3]),H(g,"click",e[2])],S=!0)},p(b,[w]){w&1&&h!==(h=b[0].animal+"")&&K(c,h),w&1&&d!==(d=b[0].animalAmount+"")&&K(u,d),w&2&&!U(g.src,P=b[1])&&m(g,"src",P)},i:N,o:N,d(b){b&&J(t),S=!1,E(F)}}}function de(e){let t=e.length,n;for(;t!==0;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e}function ge(e,t,n){let r=new Array(y.capybara),o=0;class l{constructor(s,v,_){this.animal=s,this.animalPath=v,this.animalAmount=_}}const a=new l("\u043A\u0430\u043F\u0438\u0431\u0430\u0440","capybara",y.capybara);let h=d(),c="/"+a.animalPath+"/"+h+".webp";function i(){h=d(),n(1,c="/"+a.animalPath+"/"+h+".webp")}function d(){if(o===r.length||o===0){for(let s=0;s<a.animalAmount;s++)r[s]=s;r=de(r),o=0}const p=r[o];return o++,p+1}function u(){a.animalPath==="capybara"?(n(0,a.animal="\u0432\u044B\u0434\u0440",a),n(0,a.animalPath="otter",a),n(0,a.animalAmount=y.otter,a),r=new Array(y.otter),o=0,i()):(n(0,a.animal="\u043A\u0430\u043F\u0438\u0431\u0430\u0440",a),n(0,a.animalPath="capybara",a),n(0,a.animalAmount=y.capybara,a),r=new Array(y.capybara),o=0,i())}return[a,c,i,u]}class pe extends ue{constructor(t){super(),ce(this,t,ge,he,X,{})}}new pe({target:document.getElementById("app")});
