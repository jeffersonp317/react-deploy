(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{23:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var s=t(2),c=t.n(s),n=t(14),o=t.n(n),l=(t(23),t(15)),i=t(16),d=t(18),r=t(17),m=t(3),u=t.n(m),j=t(4),b=t(0);var h=function(e){var a=Object(s.useState)(""),t=Object(j.a)(a,2),c=t[0],n=t[1],o=Object(s.useState)(""),l=Object(j.a)(o,2),i=l[0],d=l[1],r=Object(s.useState)(""),m=Object(j.a)(r,2),h=m[0],p=m[1],v=[{id:0,card_number:"1111111111111111",cvv:789,expiry_date:"01/18"},{id:1,card_number:"4111111111111234",cvv:123,expiry_date:"01/20"}];return Object(b.jsx)("div",{style:{display:e.display},className:"modal",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("div",{className:"modal-title",children:Object(b.jsxs)("h4",{children:["Pagamento para ",Object(b.jsx)("h4",{className:"modal-user",children:e.name})]})}),Object(b.jsx)("div",{className:"close-modal",onClick:e.displayNone,children:"X"})]}),Object(b.jsxs)("form",{children:[Object(b.jsx)("div",{className:"modal-caixa-valor",children:Object(b.jsx)("input",{onChange:function(e){return n(e.target.value)},className:"modal-valor",type:"text",placeholder:"R$"})}),Object(b.jsx)("div",{className:"modal-caixa-cartao",children:Object(b.jsxs)("select",{onChange:function(e){return d(e.target.value)},id:"select_card",className:"select-cartao",children:[Object(b.jsx)("option",{value:"selecione",id:"selecione",children:"selecione o cart\xe3o"}),v.map((function(e){return Object(b.jsxs)("option",{value:e.card_number,id:"op\xe7\xe3o_cartao",children:["Cart\xe3o com o final ",e.card_number.substr(-4)]},e.id)}))]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",onClick:function(a){a.preventDefault(),e.displayNone(),console.log("card number",i),console.log("cartao 1",i),v.forEach((function(e){i==e.card_number&&p(e)}));var t=JSON.stringify({card_number:i,cvv:h.cvv,expiry_date:h.expiry_date,destination_user_id:e.id,value:c});"1111111111111111"==i?u.a.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",{body:t}).then((function(a){console.log(a),console.log(a.data),e.status_pagamento(!0)})):u.a.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",{body:t}).then((function(a){console.log(a),console.log(a.data),e.status_pagamento(!1)}))},className:"modal-pagar",children:"Pagar"})})]})]})})},p=function(e){Object(d.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={display:"none",show:!1,persons:[],selectedName:"",selectedID:"",selectedUsername:"",modalConfirmacao:"none",transacao_pagamento:!1,CloseModal2:{display:"none"},isActive:!1},e.status_pagamento=function(a){e.setState({transacao_pagamento:a,modalConfirmacao:"block"}),console.log("status",a)},e.Modal=function(a,t,s){console.log(t),e.setState({selectedID:t,selectedName:a,selectedUsername:s,display:"block"})},e.CloseModal2=function(){e.setState({modalConfirmacao:"none"})},e.CloseModal=function(){e.setState({display:"none"})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce").then((function(a){var t=a.data;e.setState({persons:t})}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"list",children:[this.state.persons.map((function(a,t){return Object(b.jsxs)("div",{className:"listClients",children:[Object(b.jsx)("div",{className:"imgClients",children:Object(b.jsx)("img",{src:a.img,className:"Clients",alt:"imagem do usuario"})}),Object(b.jsxs)("div",{className:"idClients",children:[Object(b.jsx)("p",{children:a.name}),Object(b.jsxs)("p",{children:["Id: ",a.id," - Username: ",a.username]})]}),Object(b.jsx)("div",{className:"box_btn",children:Object(b.jsx)("button",{type:"button",className:"btn",onClick:function(){return e.Modal(a.name,a.id,a.username)},children:"Pagar"})})]},"lista-usuarios"+t)})),Object(b.jsx)(h,{displayNone:this.CloseModal,show:this.state.show,display:this.state.display,name:this.state.selectedName,id:this.state.selectedID,userName:this.state.selectedUsername,status_pagamento:this.status_pagamento}),Object(b.jsxs)("div",{style:{display:this.state.modalConfirmacao},className:"modal-2",children:[Object(b.jsxs)("div",{className:"header-modal2",children:[Object(b.jsx)("h4",{className:"recibo",children:"Recibo de pagamento"}),Object(b.jsx)("div",{className:"close-modal2",onClick:this.CloseModal2,children:"X"})]}),Object(b.jsxs)("div",{className:"texto-status",children:["O pagamento ",this.state.transacao_pagamento?"":"n\xe3o"," foi aprovado  com sucesso!"]})]})]})}}]),t}(c.a.Component);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ffa4e862.chunk.js.map