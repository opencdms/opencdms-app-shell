"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[6440,1489],{4259:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var n=a(3396);function r(e,t,a,r,l,p){const d=(0,n.up)("feature",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(d)])}function l(e,t,a,r,l,p){const d=(0,n.up)("v-card-title"),i=(0,n.up)("base-map"),o=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(o,{style:{height:"600px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)("View feature")])),_:1}),(0,n.Wm)(i,{onMapLoaded:e.onMapLoaded,style:{height:"100%"},zoom:"4"},null,8,["onMapLoaded"])])),_:1})}var p=a(1489),d=a(6572),i=a(1888),o=a(1209),s=a(2257),u=a(3153),c=a.n(u),v=a(3968),m=a(5868),f=a(9129),y=a.n(f),g=(0,n.aZ)({name:"feature",props:{geom:{type:Object,required:!1}},data(){return{map:null}},components:{VCard:p._,VCardTitle:d.E,VCardText:i.Z,VCardItem:o._,BaseMap:s.Z},methods:{},setup(e,t){(0,n.wF)((()=>{})),(0,n.bv)((()=>{})),(0,n.Xn)((()=>{})),(0,n.ic)((()=>{})),(0,n.Jd)((()=>{})),(0,n.Ah)((()=>{}));const a=async e=>{const t=await(0,v.lL)(m.Z).where("id",1).first();t.properties=JSON.parse(t.properties),console.log(t.properties);var a=new(y().Wkt);a.read(t.geometry);var n=a.toJson(),r={type:"Feature",geometry:n,properties:{name:t.name,feature_type:"watershed",...t.properties}};console.log(r.properties),c().geoJSON(r,{onEachFeature:function(e,t){t.bindPopup("<h3>"+e.properties.name+"</h3><p>Feature type: "+e.properties.feature_type+"</p><p>Watershed level: "+e.properties.watershed_level+"</p><p>Area: "+.01*e.properties.area+' km2</p><p>Attribution: <a href = "https://geohub.lio.gov.on.ca/maps/53a1c537b320404087c54ef09700a7db/explore?location=46.707978%2C-82.815433%2C2.80">Ontario Watershed Boundaries (OWB) collection, Ontario Ministry of Natural Resources and Forestry</a></p>')}}).addTo(e)};return(0,n.d1)((()=>{})),{onMapLoaded:a}}}),b=a(89);const h=(0,b.Z)(g,[["render",l]]);var W=h,k={name:"MyView",components:{Feature:W}};const C=(0,b.Z)(k,[["render",r]]);var I=C},1489:function(e,t,a){a.d(t,{_:function(){return _}});var n=a(3396),r=a(1334),l=a(1209),p=a(1888),d=a(836),i=a(8694),o=a(3824),s=a(5221),u=a(1617),c=a(6791),v=a(2718),m=a(9694),f=a(4544),y=a(2465),g=a(5180),b=a(489),h=a(4231),W=a(6183),k=a(1138),C=a(7041),I=a(320),A=a(9888);const _=(0,I.ev)()({name:"VCard",directives:{Ripple:o.H},props:{appendAvatar:String,appendIcon:u.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,C.x$)(),...(0,v.m)(),...(0,m.f)(),...(0,f.x)(),...(0,y.c)(),...(0,c.fF)(),...(0,g.y)(),...(0,b.F)(),...(0,h.I)(),...(0,W.GN)(),...(0,k.Q)(),...(0,s.bk)({variant:"elevated"})},setup(e,t){let{attrs:a,slots:o}=t;const{themeClasses:u}=(0,C.ER)(e),{borderClasses:k}=(0,v.P)(e),{colorClasses:I,colorStyles:_,variantClasses:V}=(0,s.c1)(e),{densityClasses:w}=(0,m.t)(e),{dimensionStyles:x}=(0,f.$)(e),{elevationClasses:S}=(0,y.Y)(e),{loaderClasses:F}=(0,c.U2)(e),{locationStyles:B}=(0,g.T)(e),{positionClasses:E}=(0,b.K)(e),{roundedClasses:L}=(0,h.b)(e),Z=(0,W.nB)(e,a),J=(0,n.Fl)((()=>!1!==e.link&&Z.isLink.value)),M=(0,n.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||Z.isClickable.value)));return(0,A.L)((()=>{const t=J.value?"a":e.tag,a=!(!o.title&&!e.title),v=!(!o.subtitle&&!e.subtitle),m=a||v,f=!!(o.append||e.appendAvatar||e.appendIcon),y=!!(o.prepend||e.prependAvatar||e.prependIcon),g=!(!o.image&&!e.image),b=m||y||f,h=!(!o.text&&!e.text);return(0,n.wy)((0,n.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":M.value},u.value,k.value,I.value,w.value,S.value,F.value,E.value,L.value,V.value],style:[_.value,x.value,B.value],href:Z.href.value,onClick:M.value&&Z.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[g&&(0,n.Wm)(d.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,n.Wm)("div",{class:"v-card__image"},[o.image?.()??(0,n.Wm)(i.f,null,null)])]}),(0,n.Wm)(c.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:o.loader}),b&&(0,n.Wm)(l._,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:o.item,prepend:o.prepend,title:o.title,subtitle:o.subtitle,append:o.append}),h&&(0,n.Wm)(p.Z,{key:"text"},{default:()=>[o.text?.()??e.text]}),o.default?.(),o.actions&&(0,n.Wm)(r.h,null,{default:o.actions}),(0,s.Ux)(M.value,"v-card")]}),[[(0,n.Q2)("ripple"),M.value&&e.ripple]])})),{}}})},1334:function(e,t,a){a.d(t,{h:function(){return d}});var n=a(3396),r=a(8434),l=a(320),p=a(9888);const d=(0,l.aZ)({name:"VCardActions",setup(e,t){let{slots:a}=t;return(0,r.AF)({VBtn:{variant:"text"}}),(0,p.L)((()=>(0,n.Wm)("div",{class:"v-card-actions"},[a.default?.()]))),{}}})},1209:function(e,t,a){a.d(t,{_:function(){return c}});var n=a(3396),r=a(652),l=a(1332),p=a(6572),d=a(836),i=a(1617),o=a(9694),s=a(320),u=a(9888);const c=(0,s.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:i.lE,prependAvatar:String,prependIcon:i.lE,subtitle:String,title:String,...(0,o.f)()},setup(e,t){let{slots:a}=t;return(0,u.L)((()=>{const t=!!(e.prependAvatar||e.prependIcon||a.prepend),i=!!(e.appendAvatar||e.appendIcon||a.append),o=!(!e.title&&!a.title),s=!(!e.subtitle&&!a.subtitle);return(0,n.Wm)("div",{class:"v-card-item"},[t&&(0,n.Wm)(d.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,n.Wm)("div",{class:"v-card-item__prepend"},[a.prepend?.()??(0,n.Wm)(r.V,null,null)])]}),(0,n.Wm)("div",{class:"v-card-item__content"},[o&&(0,n.Wm)(p.E,{key:"title"},{default:()=>[a.title?.()??e.title]}),s&&(0,n.Wm)(l.Q,{key:"subtitle"},{default:()=>[a.subtitle?.()??e.subtitle]}),a.default?.()]),i&&(0,n.Wm)(d.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,n.Wm)("div",{class:"v-card-item__append"},[a.append?.()??(0,n.Wm)(r.V,null,null)])]})])})),{}}})},1332:function(e,t,a){a.d(t,{Q:function(){return r}});var n=a(1114);const r=(0,n.J)("v-card-subtitle")},1888:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(1114);const r=(0,n.J)("v-card-text")},6572:function(e,t,a){a.d(t,{E:function(){return r}});var n=a(1114);const r=(0,n.J)("v-card-title")}}]);
//# sourceMappingURL=6440.fdf0a943.js.map