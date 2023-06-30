(function(){"use strict";var n={960:function(n,t,e){var o=e(963),i=e(252);function r(n,t){const e=(0,i.up)("router-link"),o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(e,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Home")])),_:1}),(0,i.Uk)(" | ")]),(0,i.Wm)(o)],64)}var a=e(744);const s={},u=(0,a.Z)(s,[["render",r]]);var c=u,l=e(201);const p={class:"home"};function m(n,t,e,o,r,a){const s=(0,i.up)("home");return(0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(s)])}const h=n=>((0,i.dD)("data-v-32b4554e"),n=n(),(0,i.Cn)(),n),d=h((()=>(0,i._)("h1",null,"Buscador",-1))),f=h((()=>(0,i._)("label",{for:""},"Ingrese Id Pokemon (1-1010)",-1)));function v(n,t,e,r,a,s){return(0,i.wg)(),(0,i.iD)("form",null,[d,f,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>n.pokemon_id=t)},null,512),[[o.nr,n.pokemon_id]]),(0,i._)("button",{onClick:t[1]||(t[1]=(0,o.iM)(((...n)=>s.search&&s.search(...n)),["prevent"]))},"Buscar")])}var k={name:"Home-Component",data:function(){return{pokemon_id:""}},methods:{search(){""!==this.pokemon_id&&this.$router.push(`/pokemon/${this.pokemon_id}`)}}};const b=(0,a.Z)(k,[["render",v],["__scopeId","data-v-32b4554e"]]);var g=b,_={name:"HomeView",components:{Home:g}};const y=(0,a.Z)(_,[["render",m]]);var w=y,D=e(577);const O=n=>((0,i.dD)("data-v-13178c03"),n=n(),(0,i.Cn)(),n),P={class:"marco"},j=["src"],H=["src"],C=O((()=>(0,i._)("h3",null,"Habilidades:",-1)));function Z(n,t,e,o,r,a){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",P,[(0,i._)("h2",null,"Pokemon: "+(0,D.zw)(n.name),1),(0,i._)("img",{src:n.image,alt:"",class:"imgDetallePokemon"},null,8,j),(0,i._)("img",{src:n.shiny,alt:"",class:"imgDetallePokemon"},null,8,H),(0,i._)("h3",null,"Tipo: "+(0,D.zw)(n.type),1),C,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.abilities,(n=>((0,i.wg)(),(0,i.iD)("h4",null,(0,D.zw)(n),1)))),256))]),(0,i.Wm)(s,{to:"/",class:"btnVolver"},{default:(0,i.w5)((()=>[(0,i.Uk)("Volver")])),_:1})])}var x=e(154),F={props:["id"],data:function(){return{name:"",image:"",shiny:"",type:"",ability:"",abilities:[]}},methods:{fetchPokemon(){x.Z.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((n=>{console.log(n),this.setData(n.data)})).catch((n=>{console.log(n)}))},setData(n){this.name=n.name,this.image=n.sprites.front_default,this.shiny=n.sprites.front_shiny,this.type=n.types[0].type.name;for(var t=0;t<n.abilities.length;t++)this.ability=n.abilities[t].ability.name,this.abilities.push(this.ability)}},created(){this.fetchPokemon()}};const I=(0,a.Z)(F,[["render",Z],["__scopeId","data-v-13178c03"]]);var U=I;const V={id:"notFound"},W=(0,i._)("h1",null,"Not Found",-1),z=[W];function T(n,t,e,o,r,a){return(0,i.wg)(),(0,i.iD)("div",V,z)}var $={name:"NotFound",data:function(){return{}},methods:{}};const A=(0,a.Z)($,[["render",T]]);var B=A;const N=[{path:"/",name:"home",component:w},{path:"/pokemon/:id",name:"Pokemon",component:U,props:!0},{path:"/:catchAll(.*)",name:"notfound",component:B}],Y=(0,l.p7)({history:(0,l.PO)("/PokemonApiProd/"),routes:N});var E=Y;(0,o.ri)(c).use(E).mount("#app")}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return n[o](r,r.exports,e),r.exports}e.m=n,function(){var n=[];e.O=function(t,o,i,r){if(!o){var a=1/0;for(l=0;l<n.length;l++){o=n[l][0],i=n[l][1],r=n[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&r||a>=r)&&Object.keys(e.O).every((function(n){return e.O[n](o[u])}))?o.splice(u--,1):(s=!1,r<a&&(a=r));if(s){n.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=n.length;l>0&&n[l-1][2]>r;l--)n[l]=n[l-1];n[l]=[o,i,r]}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],u=o[2],c=0;if(a.some((function(t){return 0!==n[t]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(u)var l=u(e)}for(t&&t(o);c<a.length;c++)r=a[c],e.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return e.O(l)},o=self["webpackChunkpokemon_vuejs"]=self["webpackChunkpokemon_vuejs"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(960)}));o=e.O(o)})();
//# sourceMappingURL=app.5d9b24b5.js.map