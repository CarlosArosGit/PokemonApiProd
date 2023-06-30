(function(){"use strict";var n={803:function(n,e,t){var o=t(963),r=t(252);function i(n,e){const t=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(t,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | ")]),(0,r.Wm)(o)],64)}var a=t(744);const s={},u=(0,a.Z)(s,[["render",i]]);var c=u,l=t(201);const m={class:"home"};function p(n,e,t,o,i,a){const s=(0,r.up)("home");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(s)])}const h=n=>((0,r.dD)("data-v-32b4554e"),n=n(),(0,r.Cn)(),n),d=h((()=>(0,r._)("h1",null,"Buscador",-1))),f=h((()=>(0,r._)("label",{for:""},"Ingrese Id Pokemon (1-1010)",-1)));function v(n,e,t,i,a,s){return(0,r.wg)(),(0,r.iD)("form",null,[d,f,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>n.pokemon_id=e)},null,512),[[o.nr,n.pokemon_id]]),(0,r._)("button",{onClick:e[1]||(e[1]=(0,o.iM)(((...n)=>s.search&&s.search(...n)),["prevent"]))},"Buscar")])}var k={name:"Home-Component",data:function(){return{pokemon_id:""}},methods:{search(){""!==this.pokemon_id&&this.$router.push(`/pokemon/${this.pokemon_id}`)}}};const g=(0,a.Z)(k,[["render",v],["__scopeId","data-v-32b4554e"]]);var y=g,b={name:"HomeView",components:{Home:y}};const w=(0,a.Z)(b,[["render",p]]);var _=w,D=t(577);const P=n=>((0,r.dD)("data-v-13178c03"),n=n(),(0,r.Cn)(),n),O={class:"marco"},j=["src"],H=["src"],Z=P((()=>(0,r._)("h3",null,"Habilidades:",-1)));function A(n,e,t,o,i,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",O,[(0,r._)("h2",null,"Pokemon: "+(0,D.zw)(n.name),1),(0,r._)("img",{src:n.image,alt:"",class:"imgDetallePokemon"},null,8,j),(0,r._)("img",{src:n.shiny,alt:"",class:"imgDetallePokemon"},null,8,H),(0,r._)("h3",null,"Tipo: "+(0,D.zw)(n.type),1),Z,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.abilities,(n=>((0,r.wg)(),(0,r.iD)("h4",null,(0,D.zw)(n),1)))),256))]),(0,r.Wm)(s,{to:"/",class:"btnVolver"},{default:(0,r.w5)((()=>[(0,r.Uk)("Volver")])),_:1})])}var C=t(154),x={props:["id"],data:function(){return{name:"",image:"",shiny:"",type:"",ability:"",abilities:[]}},methods:{fetchPokemon(){C.Z.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((n=>{console.log(n),this.setData(n.data)})).catch((n=>{console.log(n)}))},setData(n){this.name=n.name,this.image=n.sprites.front_default,this.shiny=n.sprites.front_shiny,this.type=n.types[0].type.name;for(var e=0;e<n.abilities.length;e++)this.ability=n.abilities[e].ability.name,this.abilities.push(this.ability)}},created(){this.fetchPokemon()}};const W=(0,a.Z)(x,[["render",A],["__scopeId","data-v-13178c03"]]);var z=W;const I={class:"not"};function U(n,e,t,o,i,a){const s=(0,r.up)("NotFound");return(0,r.wg)(),(0,r.iD)("div",I,[(0,r.Wm)(s)])}const V=(0,r._)("h2",null,"Lista de Pokemon",-1);function F(n,e,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",null,[V,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.pokemonArray,(n=>((0,r.wg)(),(0,r.iD)("p",null,(0,D.zw)(n.name),1)))),256))])}var N={name:"List",data:function(){return{name:"",image:"",pokemonArray:{type:Array}}},methods:{fetchPokemon(){C.Z.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then((n=>{pokemonArray=n.data})).catch((n=>{console.log(n)}))}},created(){this.fetchPokemon()}};const T=(0,a.Z)(N,[["render",F]]);var Y=T,$={name:"Notf",components:{NotFound:Y}};const B=(0,a.Z)($,[["render",U]]);var K=B;const L=[{path:"/",name:"home",component:_},{path:"/pokemon/:id",name:"Pokemon",component:z,props:!0},{path:"/:catchAll(.*)",name:"notfound",component:K}],E=(0,l.p7)({history:(0,l.PO)("/PokemonApiProd/"),routes:L});var M=E;(0,o.ri)(c).use(M).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,i){if(!o){var a=1/0;for(l=0;l<n.length;l++){o=n[l][0],r=n[l][1],i=n[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){n.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[o,r,i]}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,a=o[0],s=o[1],u=o[2],c=0;if(a.some((function(e){return 0!==n[e]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(u)var l=u(t)}for(e&&e(o);c<a.length;c++)i=a[c],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(l)},o=self["webpackChunkpokemon_vuejs"]=self["webpackChunkpokemon_vuejs"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(803)}));o=t.O(o)})();
//# sourceMappingURL=app.894925c6.js.map