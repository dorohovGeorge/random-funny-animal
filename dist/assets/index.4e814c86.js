const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}};V();function N(){}function D(e){return e()}function F(){return Object.create(null)}function E(e){e.forEach(D)}function W(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let I;function U(e,t){return I||(I=document.createElement("a")),I.href=t,e===I.href}function Y(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function Z(e,t,n){e.insertBefore(t,n||null)}function G(e){e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function j(){return k(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let B;function $(e){B=e}const A=[],K=[],L=[],R=[],te=Promise.resolve();let z=!1;function ne(){z||(z=!0,te.then(Q))}function q(e){L.push(e)}const M=new Set;let C=0;function Q(){const e=B;do{for(;C<A.length;){const t=A[C];C++,$(t),ae(t.$$)}for($(null),A.length=0,C=0;K.length;)K.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];M.has(n)||(M.add(n),n())}L.length=0}while(A.length);for(;R.length;)R.pop()();z=!1,M.clear(),$(e)}function ae(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const oe=new Set;function re(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function le(e,t,n,r){const{fragment:a,on_mount:l,on_destroy:o,after_update:h}=e.$$;a&&a.m(t,n),r||q(()=>{const c=l.map(D).filter(W);o?o.push(...c):E(c),e.$$.on_mount=[]}),h.forEach(q)}function ie(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(A.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(e,t,n,r,a,l,o,h=[-1]){const c=B;$(e);const i=e.$$={fragment:null,ctx:null,props:l,update:N,not_equal:a,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:F(),dirty:h,skip_bound:!1,root:t.target||c.$$.root};o&&o(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},(u,p,...s)=>{const x=s.length?s[0]:p;return i.ctx&&a(i.ctx[u],i.ctx[u]=x)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](x),d&&se(e,u)),p}):[],i.update(),d=!0,E(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const u=ee(t.target);i.fragment&&i.fragment.l(u),u.forEach(G)}else i.fragment&&i.fragment.c();t.intro&&re(e.$$.fragment),le(e,t.target,t.anchor,t.customElement),Q()}$(c)}class ue{$destroy(){ie(this,1),this.$destroy=N}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe=24,me=1;var y={capybara:fe,otter:me};function he(e){let t,n,r,a,l,o,h=e[0].animal+"",c,i,d=e[0].animalAmount+"",u,p,s,x,_,O,g,P,S,T;return{c(){t=v("main"),n=v("div"),r=v("h2"),r.textContent="Just click me..",a=j(),l=v("h3"),o=k("Available "),c=k(h),i=k(" - "),u=k(d),p=j(),s=v("button"),s.textContent="If you want something different..",x=j(),_=v("div"),O=v("div"),g=v("img"),m(r,"class","svelte-1omahxa"),m(l,"class","svelte-1omahxa"),m(s,"class","svelte-1omahxa"),m(g,"id","dog-img"),U(g.src,P=e[1])||m(g,"src",P),m(g,"alt","There is an animal living here"),m(g,"class","svelte-1omahxa"),m(O,"class","svelte-1omahxa"),m(_,"id","img-div"),m(_,"class","svelte-1omahxa"),m(n,"id","main-div"),m(n,"class","svelte-1omahxa"),m(t,"class","svelte-1omahxa")},m(b,w){Z(b,t,w),f(t,n),f(n,r),f(n,a),f(n,l),f(l,o),f(l,c),f(l,i),f(l,u),f(n,p),f(n,s),f(n,x),f(n,_),f(_,O),f(O,g),S||(T=[H(s,"click",e[3]),H(g,"click",e[2])],S=!0)},p(b,[w]){w&1&&h!==(h=b[0].animal+"")&&J(c,h),w&1&&d!==(d=b[0].animalAmount+"")&&J(u,d),w&2&&!U(g.src,P=b[1])&&m(g,"src",P)},i:N,o:N,d(b){b&&G(t),S=!1,E(T)}}}function de(e){let t=e.length,n;for(;t!==0;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e}function ge(e,t,n){let r=new Array(y.capybara),a=0;class l{constructor(s,x,_){this.animal=s,this.animalPath=x,this.animalAmount=_}}const o=new l("capybaras","capybara",y.capybara);let h=d(),c="/"+o.animalPath+"/"+h+".webp";function i(){h=d(),n(1,c="/"+o.animalPath+"/"+h+".webp")}function d(){if(a===r.length||a===0){for(let s=0;s<o.animalAmount;s++)r[s]=s;r=de(r),a=0}const p=r[a];return a++,p+1}function u(){o.animalPath==="capybara"?(n(0,o.animal="otters",o),n(0,o.animalPath="otter",o),n(0,o.animalAmount=y.otter,o),r=new Array(y.otter),a=0,i()):(n(0,o.animal="capybaras",o),n(0,o.animalPath="capybara",o),n(0,o.animalAmount=y.capybara,o),r=new Array(y.capybara),a=0,i())}return[o,c,i,u]}class pe extends ue{constructor(t){super(),ce(this,t,ge,he,X,{})}}new pe({target:document.getElementById("app")});
