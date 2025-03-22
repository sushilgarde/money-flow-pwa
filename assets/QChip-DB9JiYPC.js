import{g as O,r as W,az as Z,ax as J,s as ke,a5 as we,w as B,t as Te,o as Q,au as Ee,A as D,aQ as ee,av as pe,G as He,c as se,u as Be,B as Me,aR as We,f as re,j as Pe,a as y,k as ce,a8 as Le,m as Ae,aS as Re,n as ze,aT as _e,aU as $e,aV as te,aW as Fe,ay as je,aX as De,C as Ke,aY as Oe,aZ as Qe,h as T,b as Ve,aq as Ie,ao as Ne,a7 as de,a_ as Xe,a$ as Ye,x as Ue,a4 as Ge,Q as F,b0 as Ze}from"./index-6QLLroh9.js";import{e as Je}from"./QItem-CJe-sbZ8.js";let et=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const l=document.createElement("div");Object.assign(l.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(l),e.scrollLeft=-1e3,et=e.scrollLeft>=0,e.remove()}const tt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},lt={...tt,contextMenu:Boolean};function nt({showing:e,avoidEmit:l,configureAnchorEl:n}){const{props:t,proxy:i,emit:d}=O(),a=W(null);let h=null;function m(o){return a.value===null?!1:o===void 0||o.touches===void 0||o.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(o){i.hide(o)},toggle(o){i.toggle(o),o.qAnchorHandled=!0},toggleKey(o){we(o,13)===!0&&s.toggle(o)},contextClick(o){i.hide(o),Z(o),ke(()=>{i.show(o),o.qAnchorHandled=!0})},prevent:Z,mobileTouch(o){if(s.mobileCleanup(o),m(o)!==!0)return;i.hide(o),a.value.classList.add("non-selectable");const r=o.target;J(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),h=setTimeout(()=>{h=null,i.show(o),o.qAnchorHandled=!0},300)},mobileCleanup(o){a.value.classList.remove("non-selectable"),h!==null&&(clearTimeout(h),h=null),e.value===!0&&o!==void 0&&Je()}}),n=function(o=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let r;o===!0?i.$q.platform.is.mobile===!0?r=[[a.value,"touchstart","mobileTouch","passive"]]:r=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:r=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],J(s,"anchor",r)});function f(){Ee(s,"anchor")}function g(o){for(a.value=o;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function b(){if(t.target===!1||t.target===""||i.$el.parentNode===null)a.value=null;else if(t.target===!0)g(i.$el.parentNode);else{let o=t.target;if(typeof t.target=="string")try{o=document.querySelector(t.target)}catch{o=void 0}o!=null?(a.value=o.$el||o,n()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return B(()=>t.contextMenu,o=>{a.value!==null&&(f(),n(o))}),B(()=>t.target,()=>{a.value!==null&&f(),b()}),B(()=>t.noParentEvent,o=>{a.value!==null&&(o===!0?f():n())}),Te(()=>{b(),l!==!0&&t.modelValue===!0&&a.value===null&&d("update:modelValue",!1)}),Q(()=>{h!==null&&clearTimeout(h),f()}),{anchorEl:a,canShow:m,anchorEvents:s}}function ot(e,l){const n=W(null);let t;function i(h,m){const s=`${m!==void 0?"add":"remove"}EventListener`,f=m!==void 0?m:t;h!==window&&h[s]("scroll",f,D.passive),window[s]("scroll",f,D.passive),t=m}function d(){n.value!==null&&(i(n.value),n.value=null)}const a=B(()=>e.noParentEvent,()=>{n.value!==null&&(d(),l())});return Q(a),{localScrollTarget:n,unconfigureScrollTarget:d,changeScrollEvent:i}}const{notPassiveCapture:P}=D,E=[];function L(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=ee.length-1;for(;n>=0;){const t=ee[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=E.length-1;t>=0;t--){const i=E[t];if((i.anchorEl.value===null||i.anchorEl.value.contains(l)===!1)&&(l===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(l)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function it(e){E.push(e),E.length===1&&(document.addEventListener("mousedown",L,P),document.addEventListener("touchstart",L,P))}function le(e){const l=E.findIndex(n=>n===e);l!==-1&&(E.splice(l,1),E.length===0&&(document.removeEventListener("mousedown",L,P),document.removeEventListener("touchstart",L,P)))}let ne,oe;function ie(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function at(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const K={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{K[`${e}#ltr`]=e,K[`${e}#rtl`]=e});function ae(e,l){const n=e.split(" ");return{vertical:n[0],horizontal:K[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function ut(e,l){let{top:n,left:t,right:i,bottom:d,width:a,height:h}=e.getBoundingClientRect();return l!==void 0&&(n-=l[1],t-=l[0],d+=l[1],i+=l[0],a+=l[0],h+=l[1]),{top:n,bottom:d,height:h,left:t,right:i,width:a,middle:t+(i-t)/2,center:n+(d-n)/2}}function st(e,l,n){let{top:t,left:i}=e.getBoundingClientRect();return t+=l.top,i+=l.left,n!==void 0&&(t+=n[1],i+=n[0]),{top:t,bottom:t+1,height:1,left:i,right:i+1,width:1,middle:i,center:t}}function rt(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function ue(e,l,n,t){return{top:e[n.vertical]-l[t.vertical],left:e[n.horizontal]-l[t.horizontal]}}function fe(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{fe(e,l+1)},10);return}const{targetEl:n,offset:t,anchorEl:i,anchorOrigin:d,selfOrigin:a,absoluteOffset:h,fit:m,cover:s,maxHeight:f,maxWidth:g}=e;if(pe.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:S,offsetTop:q}=window.visualViewport;S!==ne&&(H.setProperty("--q-pe-left",S+"px"),ne=S),q!==oe&&(H.setProperty("--q-pe-top",q+"px"),oe=q)}const{scrollLeft:b,scrollTop:o}=n,r=h===void 0?ut(i,s===!0?[0,0]:t):st(i,h,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:f,visibility:"visible"});const{offsetWidth:p,offsetHeight:c}=n,{elWidth:C,elHeight:A}=m===!0||s===!0?{elWidth:Math.max(r.width,p),elHeight:s===!0?Math.max(r.height,c):c}:{elWidth:p,elHeight:c};let x={maxWidth:g,maxHeight:f};(m===!0||s===!0)&&(x.minWidth=r.width+"px",s===!0&&(x.minHeight=r.height+"px")),Object.assign(n.style,x);const k=rt(C,A);let v=ue(r,k,d,a);if(h===void 0||t===void 0)j(v,r,k,d,a);else{const{top:H,left:S}=v;j(v,r,k,d,a);let q=!1;if(v.top!==H){q=!0;const w=2*t[1];r.center=r.top-=w,r.bottom-=w+2}if(v.left!==S){q=!0;const w=2*t[0];r.middle=r.left-=w,r.right-=w+2}q===!0&&(v=ue(r,k,d,a),j(v,r,k,d,a))}x={top:v.top+"px",left:v.left+"px"},v.maxHeight!==void 0&&(x.maxHeight=v.maxHeight+"px",r.height>v.maxHeight&&(x.minHeight=x.maxHeight)),v.maxWidth!==void 0&&(x.maxWidth=v.maxWidth+"px",r.width>v.maxWidth&&(x.minWidth=x.maxWidth)),Object.assign(n.style,x),n.scrollTop!==o&&(n.scrollTop=o),n.scrollLeft!==b&&(n.scrollLeft=b)}function j(e,l,n,t,i){const d=n.bottom,a=n.right,h=He(),m=window.innerHeight-h,s=document.body.clientWidth;if(e.top<0||e.top+d>m)if(i.vertical==="center")e.top=l[t.vertical]>m/2?Math.max(0,m-d):0,e.maxHeight=Math.min(d,m);else if(l[t.vertical]>m/2){const f=Math.min(m,t.vertical==="center"?l.center:t.vertical===i.vertical?l.bottom:l.top);e.maxHeight=Math.min(d,f),e.top=Math.max(0,f-d)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===i.vertical?l.top:l.bottom),e.maxHeight=Math.min(d,m-e.top);if(e.left<0||e.left+a>s)if(e.maxWidth=Math.min(a,s),i.horizontal==="middle")e.left=l[t.horizontal]>s/2?Math.max(0,s-a):0;else if(l[t.horizontal]>s/2){const f=Math.min(s,t.horizontal==="middle"?l.middle:t.horizontal===i.horizontal?l.right:l.left);e.maxWidth=Math.min(a,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===i.horizontal?l.left:l.right),e.maxWidth=Math.min(a,s-e.left)}const ht=se({name:"QMenu",inheritAttrs:!1,props:{...lt,...Pe,...re,...We,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ie},self:{type:String,validator:ie},offset:{type:Array,validator:at},scrollTarget:Me,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Be,"click","escapeKey"],setup(e,{slots:l,emit:n,attrs:t}){let i=null,d,a,h;const m=O(),{proxy:s}=m,{$q:f}=s,g=W(null),b=W(!1),o=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=ce(e,f),{registerTick:p,removeTick:c}=Le(),{registerTimeout:C}=Ae(),{transitionProps:A,transitionStyle:x}=Re(e),{localScrollTarget:k,changeScrollEvent:v,unconfigureScrollTarget:H}=ot(e,U),{anchorEl:S,canShow:q}=nt({showing:b}),{hide:w}=ze({showing:b,canShow:q,handleShow:be,handleHide:xe,hideOnRouteChange:o,processOnMount:!0}),{showPortal:V,hidePortal:I,renderPortal:he}=_e(m,g,Se,"menu"),R={anchorEl:S,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&b.value===!0)return w(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&de(u),!0}},N=y(()=>ae(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),me=y(()=>e.cover===!0?N.value:ae(e.self||"top start",f.lang.rtl)),ve=y(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),ge=y(()=>e.autoClose===!0?{onClick:ye}:{}),X=y(()=>b.value===!0&&e.persistent!==!0);B(X,u=>{u===!0?($e(_),it(R)):(te(_),le(R))});function z(){Ne(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function be(u){if(i=e.noRefocus===!1?document.activeElement:null,Fe(G),V(),U(),d=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const $=je(u);if($.left!==void 0){const{top:qe,left:Ce}=S.value.getBoundingClientRect();d={left:$.left-Ce,top:$.top-qe}}}a===void 0&&(a=B(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,M)),e.noFocus!==!0&&document.activeElement.blur(),p(()=>{M(),e.noFocus!==!0&&z()}),C(()=>{f.platform.is.ios===!0&&(h=e.autoClose,g.value.click()),M(),V(!0),n("show",u)},e.transitionDuration)}function xe(u){c(),I(),Y(!0),i!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),C(()=>{I(!0),n("hide",u)},e.transitionDuration)}function Y(u){d=void 0,a!==void 0&&(a(),a=void 0),(u===!0||b.value===!0)&&(De(G),H(),le(R),te(_)),u!==!0&&(i=null)}function U(){(S.value!==null||e.scrollTarget!==void 0)&&(k.value=Ke(S.value,e.scrollTarget),v(k.value,M))}function ye(u){h!==!0?(Oe(s,u),n("click",u)):h=!1}function G(u){X.value===!0&&e.noFocus!==!0&&Qe(g.value,u.target)!==!0&&z()}function _(u){n("escapeKey"),w(u)}function M(){fe({targetEl:g.value,offset:e.offset,anchorEl:S.value,anchorOrigin:N.value,selfOrigin:me.value,absoluteOffset:d,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Se(){return T(Ie,A.value,()=>b.value===!0?T("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+ve.value,t.class],style:[t.style,x.value],...ge.value},Ve(l.default)):null)}return Q(Y),Object.assign(s,{focus:z,updatePosition:M}),he}}),ct={xs:8,sm:10,md:14,lg:20,xl:24},mt=se({name:"QChip",props:{...re,...Xe,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=O(),i=ce(e,t),d=Ye(e,ct),a=y(()=>e.selected===!0||e.icon!==void 0),h=y(()=>e.selected===!0?e.iconSelected||t.iconSet.chip.selected:e.icon),m=y(()=>e.iconRemove||t.iconSet.chip.remove),s=y(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),f=y(()=>{const c=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(c?` text-${c} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(s.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),g=y(()=>{const c=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},C={...c,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||t.lang.label.remove};return{chip:c,remove:C}});function b(c){c.keyCode===13&&o(c)}function o(c){e.disable||(n("update:selected",!e.selected),n("click",c))}function r(c){(c.keyCode===void 0||c.keyCode===13)&&(de(c),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function p(){const c=[];s.value===!0&&c.push(T("div",{class:"q-focus-helper"})),a.value===!0&&c.push(T(F,{class:"q-chip__icon q-chip__icon--left",name:h.value}));const C=e.label!==void 0?[T("div",{class:"ellipsis"},[e.label])]:void 0;return c.push(T("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ze(l.default,C))),e.iconRight&&c.push(T(F,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&c.push(T(F,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:m.value,...g.value.remove,onClick:r,onKeyup:r})),c}return()=>{if(e.modelValue===!1)return;const c={class:f.value,style:d.value};return s.value===!0&&Object.assign(c,g.value.chip,{onClick:o,onKeyup:b}),Ue("div",c,p(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ge,e.ripple]])}}});export{ht as Q,mt as a,et as r};
