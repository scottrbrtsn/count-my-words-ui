(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{27:function(e,t,a){},31:function(e,t,a){e.exports=a(65)},36:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),c=(a(36),a(17)),l=a.n(c),s=a(29),h=a(5),u=a(6),d=a(8),p=a(7),v=a(2),b=a(9),m=a(30),f=a.n(m),g=(a(27),a(54),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={active:e.locked&&e.active||!1,value:e.value||"",error:e.error||"",label:e.label||"Label"},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"changeValue",value:function(e){var t=e.target.value;this.setState({value:t,error:""})}},{key:"handleKeyPress",value:function(e){13===e.which&&this.setState({value:this.props.predicted})}},{key:"render",value:function(){var e=this,t=this.state,a=t.active,n=t.value,i=t.error,o=t.label,c=this.props,l=c.predicted,s=c.locked,h="field ".concat((s?a:a||n)&&"active"," ").concat(s&&!a&&"locked");return r.a.createElement("div",{className:h},a&&n&&l&&l.includes(n)&&r.a.createElement("p",{className:"predicted"},l),r.a.createElement("input",{id:1,type:"text",value:n,placeholder:o,onChange:this.changeValue.bind(this),onKeyPress:this.handleKeyPress.bind(this),onFocus:function(){return!s&&e.setState({active:!0})},onBlur:function(){return!s&&e.setState({active:!1})}}),r.a.createElement("label",{htmlFor:1,className:i&&"error"},i||o))}}]),t}(r.a.Component));Object(i.render)(r.a.createElement(g,{id:1,label:"Field label",predicted:"California",locked:!1,active:!1}),document.getElementById("root"));var y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).countMyWords=a.countMyWords.bind(Object(v.a)(a)),a.state={id:0,phrase:"enter a phrase to count words",total:0},a.handleIdChange=a.handleIdChange.bind(Object(v.a)(a)),a.handlePhraseChange=a.handlePhraseChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleIdChange",value:function(e){console.log(e),this.setState({id:e.target.value})}},{key:"handlePhraseChange",value:function(e){this.setState({phrase:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.countMyWords()}},{key:"countMyWords",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:this.state.id,phrase:this.state.phrase},console.log("phrase, ",t),e.next=4,f.a.post("https://count-my-words.herokuapp.com//phrases//count",t,{headers:{"Content-Type":"application/json"}});case 4:a=e.sent,this.setState({total:a.data}),console.log(this.state.total),this.render();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(g,{id:"id",label:"ID",predicted:"California",locked:!1,active:!1,value:this.state.id,onChange:this.handleIdChange}),r.a.createElement(g,{id:"phrase",label:"Phrase",predicted:"California",locked:!1,active:!1,value:this.state.phrase,onChange:this.handlePhraseChange}),r.a.createElement("input",{type:"submit",value:"Count"})),"Your Total: ",this.state.total)}}]),t}(r.a.Component);o.a.render(r.a.createElement(y,null),document.getElementById("root"));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.38a2b51a.chunk.js.map