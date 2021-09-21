(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],{12:function(e,t,n){e.exports={container:"styles_container__1ywc_",error:"styles_error__aRWBq",submit:"styles_submit__2tMy6"}},28:function(e,t,n){e.exports={picture:"styles_picture__3YCCP",big:"styles_big__3gLOn"}},46:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n(21),s=n.n(r),i=n(14),l=n(17),o=n(19),j=n(20),u=n.n(j),d=n(26),b=function(e,t){e.status="rejected",e.error=t.payload},h=Object(l.b)("contacts/fetchList",function(){var e=Object(d.a)(u.a.mark((function e(t,n){var c,a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,fetch("https://randomuser.me/api/?results=15");case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("Load list Error!");case 7:return e.next=9,a.json();case 9:return r=e.sent,s=r.results,e.abrupt("return",s);case 14:return e.prev=14,e.t0=e.catch(1),e.abrupt("return",c(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(l.b)("contacts/addItem",function(){var e=Object(d.a)(u.a.mark((function e(t,n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/todos/".concat(t.name),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(e.sent.ok){e.next=7;break}throw new Error("Can't delete task. Server error.");case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",c(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),m=Object(l.c)({name:"contacts",initialState:{status:null,error:null,list:[],searchList:[]},extraReducers:(c={},Object(o.a)(c,h.pending,(function(e){e.status="pending",e.error=null})),Object(o.a)(c,h.fulfilled,(function(e,t){e.status="fulfilled",e.list=t.payload})),Object(o.a)(c,h.rejected,b),Object(o.a)(c,O.rejected,b),c)}),x=(m.actions.filterList,{contacts:m.reducer}),p=Object(l.a)({reducer:x}),f=(n(46),n(18)),v=n(3),g=n(16),y=n(35),_=n(12),C=n.n(_),N=n(1);function k(){var e=Object(i.b)(),t=Object(a.useState)(!1),n=Object(g.a)(t,2),c=n[0],r=n[1];return Object(N.jsx)("div",{className:C.a.container,children:Object(N.jsx)(y.a,{initialValues:{name:"",email:"",location:"",phone:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.name||(t.name="Required"),t},onSubmit:function(t,n){var c=n.setSubmitting;console.log("values",t),e(O(t)),c(!1),r(!0)},children:function(e){var t=e.values,n=e.errors,a=e.touched,r=e.handleChange,s=e.handleBlur,i=e.handleSubmit,l=e.isSubmitting;return Object(N.jsxs)("form",{onSubmit:i,children:[c&&Object(N.jsx)(v.a,{to:"/"}),Object(N.jsxs)("label",{children:[Object(N.jsx)("div",{className:C.a.title,children:"Name"}),Object(N.jsx)("input",{type:"text",name:"name",onChange:r,onBlur:s,value:t.name}),Object(N.jsx)("div",{className:C.a.error,children:n.name&&a.name&&n.name})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("div",{className:C.a.title,children:"Email"}),Object(N.jsx)("input",{type:"email",name:"email",onChange:r,onBlur:s,value:t.email}),Object(N.jsx)("div",{className:C.a.error,children:n.email&&a.email&&n.email})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("div",{className:C.a.title,children:"Location"}),Object(N.jsx)("input",{type:"text",name:"location",onChange:r,onBlur:s,value:t.location})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("div",{className:C.a.title,children:"Phone"}),Object(N.jsx)("input",{type:"text",name:"phone",onChange:r,onBlur:s,value:t.phone})]}),Object(N.jsx)("button",{className:C.a.submit,type:"submit",disabled:l,children:"Submit"})]})}})})}var S=n(34),w=n.n(S),E=n(28),I=n.n(E),L=function(e){var t=e.picture,n=e.name,c={backgroundImage:"url(".concat(t.large,")")};return Object(N.jsxs)("div",{className:I.a.picture,children:[Object(N.jsx)("img",{src:t.thumbnail,alt:n}),Object(N.jsx)("div",{className:I.a.big,style:c})]})},B=function(e){var t=e.item,n=e.deleteItem,c="".concat(t.name.first," ").concat(t.name.last),a="".concat(t.location.state," ").concat(t.location.city),r=t.login.uuid,s=w()(t.registered.date).format("DD.MM.YYYY");return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(L,{picture:t.picture,name:c})}),Object(N.jsx)("td",{children:c}),Object(N.jsx)("td",{children:a}),Object(N.jsx)("td",{children:t.email}),Object(N.jsx)("td",{children:t.phone}),Object(N.jsx)("td",{children:s}),Object(N.jsx)("td",{children:Object(N.jsx)("button",{onClick:function(){return n(r)},children:"del"})})]})},A=function(e){var t=e.handleInput;return Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){return t(e.target.value)}})})};function P(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.contacts})),n=t.list,c=t.status,r=Object(a.useState)([]),s=Object(g.a)(r,2),l=s[0],o=s[1],j=function(e,t){var n=Object(a.useState)(e),c=Object(g.a)(n,2),r=c[0],s=c[1];return console.log("vvv",e),Object(a.useEffect)((function(){var n=setTimeout((function(){s(e)}),t);return function(){clearTimeout(n)}}),[e,t]),r}(l,500);Object(a.useEffect)((function(){e(h())}),[e]),Object(a.useEffect)((function(){o(n)}),[n]);var u=function(e){console.log("id item",e)};return"pending"===c?Object(N.jsx)("h1",{children:"Loading..."}):Object(N.jsx)("div",{children:Object(N.jsxs)("table",{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"Picture"}),Object(N.jsx)("td",{children:Object(N.jsx)(A,{handleInput:function(e){if(j){var t=e.toUpperCase().trim(),c=n.filter((function(e){var n=e.name;if("".concat(n.first," ").concat(n.last).toUpperCase().indexOf(t)>-1||""===t)return!0}));o(c)}else o([])}})}),Object(N.jsx)("td",{children:"Location"}),Object(N.jsx)("td",{children:"Email"}),Object(N.jsx)("td",{children:"Phone"}),Object(N.jsx)("td",{children:"Registration Date"}),Object(N.jsx)("td",{})]})}),Object(N.jsx)("tbody",{children:l.map((function(e,t){return Object(N.jsx)(B,{item:e,deleteItem:u,key:t})}))})]})})}var R=function(){return Object(N.jsxs)(f.a,{children:[Object(N.jsx)("header",{children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("nav",{children:[Object(N.jsx)(f.b,{to:"/contacts-react/",children:"Contacts"}),Object(N.jsx)(f.b,{to:"/contacts-react/add",children:"Add Contacts"})]})})}),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)(v.d,{children:[Object(N.jsx)(v.b,{path:"/contacts-react/",exact:!0,children:Object(N.jsx)(P,{})}),Object(N.jsx)(v.b,{path:"/contacts-react/add",children:Object(N.jsx)(k,{})})]})})]})};s.a.render(Object(N.jsx)(i.a,{store:p,children:Object(N.jsx)(R,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.123d6b60.chunk.js.map