(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{516:function(t,e,n){"use strict";n.r(e);n(226);var r=n(21),o=n(35),c=n(40),l=n(37),d=n(26),h=n(12),v=n(105),f=n(517);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),n}(v.Vue);y([Object(v.Prop)()],_.prototype,"item",void 0);var k=_=y([Object(v.Component)({components:{ShareButtons:f.default}})],_),w=n(87),j=n(106),O=n.n(j),R=n(236),x=n(211),C=n(493),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("v-menu",{attrs:{top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{depressed:"",icon:""}},r),[n("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),n("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:R.a,VIcon:x.a,VMenu:C.a})},517:function(t,e,n){"use strict";n.r(e);n(226);var r=n(21),o=n(35),c=n(40),l=n(37),d=n(26),h=n(12),v=n(105);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=f(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://nakamura196.github.io/depcha",t}return Object(o.a)(n,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(n){n.clipboardData.setData("text/plain",t),n.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),n}(v.Vue);m([Object(v.Prop)({required:!0})],y.prototype,"url",void 0),m([Object(v.Prop)({required:!0})],y.prototype,"title",void 0);var _=y=m([v.Component],y),k=n(87),w=n(106),j=n.n(w),O=n(236),R=n(214),x=n(211),C=n(521),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:""},on:{click:function(e){return t.copyLink()}}},r),[n("v-icon",[t._v("mdi-link")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Copy this link."))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},r),[n("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Twitter"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},r),[n("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Facebook"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},r),[n("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),n("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VBtn:O.a,VCard:R.a,VIcon:x.a,VTooltip:C.a})},544:function(t,e,n){"use strict";(function(t){n(230),n(231),n(38),n(72),n(52),n(17),n(226),n(69),n(32),n(44),n(63),n(185),n(51),n(56);var r=n(14),o=n(21),c=n(35),l=n(40),d=n(37),h=n(26),v=n(12),f=n(105),m=n(83),y=n.n(m),_=n(516);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var w=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=n(563).Network;function O(e){return t.env.settings[e].image}var R=function(t){Object(l.a)(d,t);var e,n=k(d);function d(){var t;return Object(o.a)(this,d),(t=n.apply(this,arguments)).dialog=!1,t.settings={"https://w3id.org/hi/api/term/property#agential":"agential","http://schema.org/spatial":"spatial","http://schema.org/temporal":"temporal","http://schema.org/about":"about"},t.loading=!1,t.nodes=[],t.nodesMap={},t.exEdges=[],t.edges=[],t.options={nodes:{color:{background:"lightgray",highlight:{background:"lightgray",border:"#FF6E00"}},borderWidthSelected:8,borderWidth:4,shapeProperties:{useBorderWithImage:!0}},edges:{color:"lightgray"},physics:{enabled:!0},layout:{randomSeed:2}},t.otherId="",t}return Object(c.a)(d,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){var u=this.u;this.search(u)}},{key:"targetNode",get:function(){return this.nodesMap[this.u]}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(u){var e,n,r,o,c,l,d,i,h,v,f,s,m,_,label,k,p,w,j,R,x,C,I,V,P,M,S,E,B,L;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e="\n        PREFIX schema: <http://schema.org/>\n        PREFIX hi: <https://w3id.org/hi/api/term/property#>\n        PREFIX jps: <https://jpsearch.go.jp/term/property#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        SELECT DISTINCT ?p ?s  ?image ?label ?description ?keyword ?label_k ?description_k count(DISTINCT ?cho) as ?count ?image_k WHERE { \n          BIND(<".concat(u,"> as ?s)\n          ?cho ?p2 ?s . \n          ?s rdfs:label ?label . \n          optional { ?s schema:image ?image . }\n          optional { ?s schema:description ?description . }\n          ?cho ?p ?keyword . \n          filter (?p != rdf:type && ?p != jps:agential \n          && ?p != schema:license && ?p != jps:relationType && ?p != jps:spatial)\n          filter(?s != ?keyword)\n          ?keyword rdfs:label ?label_k . \n          optional { ?keyword schema:image ?image_k . }\n          optional { ?keyword schema:description ?description_k . }\n        } order by desc(?count) limit 20\n      "),t.next=4,y.a.get("https://dydra.com/naoki_cocaze/depcha-analysis/sparql?query="+encodeURIComponent(e)+"&output=json");case 4:for(n=t.sent,r=n.data.results.bindings,o=this.nodes,c=this.edges,l=this.nodesMap,d=this.exEdges,i=0;i<o.length;i++)h=o[i],l[h.uri]=h;v=0;case 12:if(!(v<r.length)){t.next=40;break}if(f=r[v],s=f.s.value,l[s]||(m=this.entity,(_={label:f.label.value,id:s,uri:s,p:"agential"===m?"https://w3id.org/hi/api/term/property#agential":"http://schema.org/"+m,entity:m,color:"lightgreen",url:"https://nakamura196.github.io/depcha"+this.localePath({name:"entity-slug-id",params:{slug:m,id:f.label.value}})}).shape="image",_.image=f.imag?f.image.value:O(_.entity),_.borderWidth=4,_.color={border:this.u===s?"white":"lightgreen"},f.description&&(_.description=f.description.value),l[s]=_),label=f.label.value,label=f.name?f.name.value:label,"不明"!==(k=f.label_k.value)){t.next=21;break}return t.abrupt("continue",37);case 21:for(p=f.p.value,w=["creator","publisher","contributor","provider"],j=0;j<w.length;j++)p=p.replace("http://schema.org/"+w[j],"http://schema.org/agential");R=this.settings[p],x=f.keyword.value,l[x]||((C={label:k,id:x,uri:x,p:p,color:"lightgreen",entity:R,url:"https://nakamura196.github.io/depcha"+this.localePath({name:"entity-slug-id",params:{slug:R,id:k}})}).shape="image",C.image=f.image_k?f.image_k.value:O(C.entity),C.borderWidth=4,C.color={border:"lightgreen"},f.description_k&&(C.description=f.description_k.value),l[x]=C),I=f.p.value.split("/"),(V=I[I.length-1]).split("#").length>1&&(V=V.split("#")[1]),V=this.$t(V),P={from:l[s].id,to:l[x].id,value:f.count.value,title:Number(f.count.value).toLocaleString(),color:"lightgrey"},(M=[P.to,P.from]).sort(),(S=M.join(", ")).includes(this.u)&&(P.color="orange"),d.includes(S)||(c.push(P),d.push(S));case 37:v++,t.next=12;break;case 40:for(B in E=[],l)L=l[B],E.push(L),L.index=Object.keys(L).length;this.nodes=E,this.edges=c,this.loading=!1,this.exEdges=d;case 46:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"doubleClick",value:function(t){var e=this.onNodeSelected(t);e&&this.search(e)}},{key:"onNodeSelected",value:function(t){var e=t.nodes,n=this.nodesMap;if(e.length>0){var r=n[e[0]],o="entity/chname";"http://schema.org/spatial"===r.p?o="entity/place":"http://schema.org/about"===r.p?o="term/keyword":"http://schema.org/temporal"===r.p&&(o="entity/temporal");var dd=r.uri.split("/"),c=dd[dd.length-1],l="https://w3id.org/hi/api/"+o+"/"+c;return"entity/temporal"===o&&(l="https://jpsearch.go.jp/entity/time/"+c),this.select(l),l}return""}},{key:"focus",value:function(t){this.$refs.network.focus(t)}},{key:"select",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.nodesMap;if(n[t]){this.u!==t&&(this.otherId=t);var r=this.$refs.network;r.selectNodes([t]),e&&this.search(t)}else console.log({uri:t})}},{key:"stabilized",value:function(){this.options.physics.enabled=!1}}]),d}(f.Vue);w([Object(f.Prop)()],R.prototype,"u",void 0),w([Object(f.Prop)()],R.prototype,"entity",void 0),w([Object(f.Watch)("u")],R.prototype,"watchU",null),R=w([Object(f.Component)({components:{network:j,ResultOption:_.default}})],R),e.a=R}).call(this,n(123))},582:function(t,e,n){"use strict";n.r(e);var r=n(544).a,o=n(87),c=n(106),l=n.n(c),d=n(236),h=n(214),v=n(122),f=n(527),m=n(503),y=n(505),_=n(522),k=n(211),w=n(180),j=n(215),O=n(136),R=n(217),x=n(100),C=n(212),I=n(528),V=n(59),P=n(508),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nodes.length>0?n("v-container",[n("h2",{staticClass:"my-5 text-center"},[t._v(t._s(t.$t("network")))]),t._v(" "),n("p",{staticClass:"text-center"},[t._v("\n    "+t._s(t.$t("ノードをダブルクリックすることで、当該事物のページに遷移します。"))+"\n  ")]),t._v(" "),n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",sm:3}},[n("v-card",{staticClass:"mb-5",attrs:{flat:"",outlined:""}},[t.nodesMap[t.u]&&t.nodesMap[t.u].image?n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:t.nodesMap[t.u].image,contain:"",width:"100%"}}):t._e(),t._v(" "),n("div",{staticClass:"pa-4",style:"max-height: 200px; overflow-y: auto;"},[n("nuxt-link",{attrs:{to:t.localePath({name:"entity-slug-id",params:{slug:t.nodesMap[t.u].entity,id:t.nodesMap[t.u].label}})}},[n("h4",{domProps:{innerHTML:t._s(t.nodesMap[t.u].label)}})]),t._v(" "),t.nodesMap[t.u]&&t.nodesMap[t.u].description?[n("div",{staticClass:"mt-2"},[t._v("\n              "+t._s(t.nodesMap[t.u].description)+"\n            ")])]:t._e()],2),t._v(" "),[n("v-divider"),t._v(" "),n("v-card-actions",[t._e(),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.focus(t.u)}}},[t._v(t._s(t.$t("フォーカス")))]),t._v(" "),n("v-spacer"),t._v(" "),n("ResultOption",{attrs:{item:{label:t.targetNode.label,url:t.targetNode.url}}})],1)]],2),t._v(" "),t.otherId?n("v-card",{staticClass:"mb-5",attrs:{flat:"",outlined:""}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:t.nodesMap[t.otherId]&&t.nodesMap[t.otherId].image?t.nodesMap[t.otherId].image:"https://raw.githubusercontent.com/hi-ut/static_images/main/no_image.svg",contain:"",width:"100%"}}),t._v(" "),n("div",{staticClass:"pa-4",style:"max-height: 200px; overflow-y: auto;"},[n("nuxt-link",{attrs:{to:t.localePath({name:"entity-slug-id",params:{slug:t.entity,id:t.nodesMap[t.otherId].label}})}},[n("h4",[t._v(t._s(t.nodesMap[t.otherId].label))])]),t._v(" "),t.nodesMap[t.otherId]&&t.nodesMap[t.otherId].description?[n("div",{staticClass:"mt-2"},[t._v("\n              "+t._s(t.nodesMap[t.otherId].description)+"\n            ")])]:t._e()],2),t._v(" "),[n("v-divider"),t._v(" "),n("v-card-actions",[t._e(),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.focus(t.otherId)}}},[t._v(t._s(t.$t("フォーカス")))]),t._v(" "),n("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:function(e){return t.select(t.otherId,!0)}}},[t._v(t._s(t.$t("search")))]),t._v(" "),n("v-spacer"),t._v(" "),n("ResultOption",{attrs:{item:{label:t.nodesMap[t.otherId].label,url:t.nodesMap[t.otherId].url}}})],2)]],2):t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:9}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:9}},[n("network",{ref:"network",staticStyle:{height:"650px","background-color":"#f0f4c3"},attrs:{nodes:t.nodes,edges:t.edges,options:t.options},on:{click:t.onNodeSelected,"double-click":t.doubleClick}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:3}},[n("v-sheet",{staticClass:"grey lighten-3 pa-2"},[n("h3",[n("v-icon",[t._v("mdi-view-list")]),t._v(" "+t._s(t.$t("entity"))+"\n            ")],1)]),t._v(" "),n("v-list",{staticStyle:{"max-height":"600px","overflow-y":"auto"},attrs:{dense:""}},t._l(t.nodes,(function(e,r){return n("v-list-item",{key:r,on:{click:function(n){return t.select(e.id)}}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:e.image}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.label)}})],1)],1)})),1)],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",{staticClass:"py-5"},[n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;l()(component,{Network:n(582).default}),l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCol:f.a,VContainer:m.a,VDialog:y.a,VDivider:_.a,VIcon:k.a,VImg:w.a,VList:j.a,VListItem:O.a,VListItemAvatar:R.a,VListItemContent:x.a,VListItemTitle:x.b,VProgressLinear:C.a,VRow:I.a,VSheet:V.a,VSpacer:P.a})}}]);