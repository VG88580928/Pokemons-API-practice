(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(7),o=n.n(i),r=(n(13),n(8)),s=n(2),a=n(3),h=n(5),l=n(4),u=n(0),d=function(e){var t=e.id,n=e.name,c=e.height,i=e.weight,o=e.exp,r=e.type;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw5 shadow-5 ",children:[Object(u.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),alt:"pokemon",width:"150px",height:"150px"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"NO.".concat(t)}),Object(u.jsx)("h2",{children:n}),Object(u.jsx)("p",{children:"\u8eab\u9ad8: ".concat(c,"    \u9ad4\u91cd: ").concat(i)}),Object(u.jsx)("p",{children:"\u7d93\u9a57\u503c: ".concat(o)}),Object(u.jsx)("p",{children:"\u5c6c\u6027: ".concat(r)})]})]})},p=function(e){var t=e.pokemons;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)(d,{id:e.id,name:e.name,height:e.height,weight:e.weight,exp:e.base_experience,type:e.types[0].type.name},e.id)}))})},j=function(e){var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"\u5361\u7247\u67e5\u8a62","\u03bfnf\u03bfcus":"this.placeholder=''","\u03bfnblur":"this.placeholder='\u5361\u7247\u67e5\u8a62'",onChange:t})})},b=function(e){return Object(u.jsx)("div",{style:{overflowY:"auto",border:"5px solid black",height:"510px"},children:e.children})},f=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Ooops.That's not good"}):this.props.children}}]),n}(c.Component)),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={pokemons:[],pokemonDetails:[],searchfield:""},e}return Object(a.a)(n,[{key:"getPokemonDetails",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/?limit=100").then((function(e){return e.json()})).then((function(t){e.setState({pokemons:t.results},(function(){e.state.pokemons.map((function(t){return fetch(t.url).then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{pokemonDetails:[].concat(Object(r.a)(e.pokemonDetails),[t])}}))}))}))}))}))}},{key:"componentDidMount",value:function(){this.getPokemonDetails()}},{key:"getFilteredSortedList",value:function(){var e=this;return this.state.pokemonDetails.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())})).sort((function(e,t){return e.id-t.id}))}},{key:"render",value:function(){return this.state.pokemonDetails.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"Pokemons"}),Object(u.jsx)(j,{searchChange:this.onSearchChange}),Object(u.jsx)(b,{children:Object(u.jsx)(f,{children:Object(u.jsx)(p,{pokemons:this.getFilteredSortedList()})})})]}):Object(u.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(c.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};n(16);o.a.render(Object(u.jsx)(m,{}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.885edab2.chunk.js.map