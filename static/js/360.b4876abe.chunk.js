"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[360],{8360:function(s,e,a){a.r(e),a.d(e,{default:function(){return j}});var i="Dialogs_content__xL2fw",r="Dialogs_dialogs__dJyV5",n="Dialogs_users__gSFEE",t="Dialogs_messages__88CWx",l="Dialogs_messageItem__KvJFt",c="Dialogs_inputArea__bBOFl",d={userItem:"User_userItem__VrVvC",userImg:"User_userImg__hZcDA",active:"User_active__k1DRf"},u=a(1087),m=a(184),o=function(s){var e="/dialogs/"+s.id;return(0,m.jsx)("div",{className:d.userItem,children:(0,m.jsxs)(u.OL,{to:e,className:function(s){return s.isActive?d.active:void 0},children:[(0,m.jsx)("div",{className:d.userImg,children:(0,m.jsx)("img",{src:s.photo,alt:"Ava"})}),(0,m.jsx)("div",{className:d.userName,children:s.name})]})})},g=(a(2791),function(s){return(0,m.jsx)("div",{className:l,children:s.message})}),_=a(5705),v=function(s){var e=s.dialogs.users.map((function(s){return(0,m.jsx)(o,{id:s.id,name:s.name,photo:s.imgSrc},s.id)})),a=s.dialogs.messages.map((function(s){return(0,m.jsx)(g,{message:s.message},s.id)}));return(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("h2",{children:"Dialogs"}),(0,m.jsxs)("div",{className:r,children:[(0,m.jsx)("div",{className:n,children:e}),(0,m.jsx)("div",{className:t,children:a}),(0,m.jsx)(_.J9,{initialValues:{message:""},onSubmit:function(e,a){var i=a.resetForm;s.addMessage(e.message),i({values:""})},children:function(s){var e=s.values;return(0,m.jsxs)(_.l0,{className:c,children:[(0,m.jsx)(_.gN,{as:"textarea",name:"message",placeholder:"Write a message..."}),(0,m.jsx)("button",{type:"submit",disabled:!e.message,children:"Send"})]})}})]})]})},h=a(2906),x=a(9101),f=a(1548),j=(0,a(7781).qC)((0,x.$j)((function(s){return{dialogs:s.dialogs}}),{addMessage:h.H}),f.D)(v)}}]);
//# sourceMappingURL=360.b4876abe.chunk.js.map