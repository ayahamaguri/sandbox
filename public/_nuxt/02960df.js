(window.webpackJsonp=window.webpackJsonp||[]).push([[46,11],{451:function(e,t,n){"use strict";n(8),n(10),n(14),n(15);var r=n(3),c=(n(29),n(11),n(36),n(60),n(260),n(24),n(41),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(45),n(53),n(9),n(62),n(274),n(0)),o=n(79),l=n(1);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],O=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),j=v.reduce((function(e,t){return e["offset"+Object(l.H)(t)]={type:[String,Number],default:null},e}),{}),y=v.reduce((function(e,t){return e["order"+Object(l.H)(t)]={type:[String,Number],default:null},e}),{}),h={col:Object.keys(O),offset:Object.keys(j),order:Object.keys(y)};function m(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var c=t.replace(e,"");r+="-".concat(c)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;t.a=c.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,c=t.children,l=(t.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var e,t;for(t in d=[],h)h[t].forEach((function(e){var r=n[e],c=m(t,e,r);c&&d.push(c)}));var c=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!c||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),w.set(l,d)}(),e(n.tag,Object(o.a)(data,{class:d}),c)}})},491:function(e,t,n){"use strict";n.r(t);var r=n(4),c=Object(r.d)({name:"Datas",props:{children:{type:String,default:"I am children"}},setup:function(){return{chidren:Object(r.k)("setup")}}}),o=n(89),l=n(116),f=n.n(l),d=n(201),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",[e._t("default",[e._v("slot-children")])],2),e._v(" "),n("v-btn",[e._t("sctwo",[e._v("koko ni oya no template sasikomu")])],2),e._v(" "),n("p",[e._v(e._s(e.children))])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:d.a})},669:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(491),o=Object(r.d)({components:{Children:c.default},setup:function(){return{Datas:Object(r.k)([{chidren:"I am parent"}])}}}),l=n(89),f=n(116),d=n.n(f),v=n(451),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",e._l(e.Datas,(function(t,r){return n("v-col",{key:r},[n("children",{attrs:{children:t.chidren},scopedSlots:e._u([{key:"sctwo",fn:function(){return[e._v("slot chidren two in parent")]},proxy:!0}],null,!0)})],1)})),1)])}),[],!1,null,null,null);t.default=component.exports;d()(component,{Children:n(491).default}),d()(component,{VCol:v.a})}}]);