"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[482],{3482:function(s,t,e){e.r(t),e.d(t,{default:function(){return w}});var i=e(5671),o=e(3144),r=e(136),a=e(7277),n=e(8683),u=e(2791),l=e(9101),p={wrapper:"ProfileInfo_wrapper__Poe60",description:"ProfileInfo_description__lwscs",status:"ProfileInfo_status__vukRz",statusTitle:"ProfileInfo_statusTitle__fM+Zn",statusText:"ProfileInfo_statusText__46uMV",statusInputField:"ProfileInfo_statusInputField__-SYAu"},c=e(885),d=e(184),f=function(s){var t=s.status,e=s.updateProfileStatus,i=(0,u.useState)(!1),o=(0,c.Z)(i,2),r=o[0],a=o[1],n=(0,u.useState)(t),l=(0,c.Z)(n,2),f=l[0],h=l[1];(0,u.useEffect)((function(){h(t)}),[t]);return(0,d.jsx)("div",{children:(0,d.jsxs)("p",{className:p.status,children:[!r&&(0,d.jsx)("span",{onClick:function(){a(!0)},className:p.statusText,children:t||"N/A"}),r&&(0,d.jsx)("input",{className:p.statusInputField,type:"text",value:f,autoFocus:!0,onBlur:function(){e(f),a(!1)},onChange:function(s){h(s.target.value)}})]})})},h=function(s){return(0,d.jsxs)("div",{className:p.wrapper,children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{className:p.ava,src:s.photos.large?s.photos.large:"https://picsum.photos/id/2/200/200",alt:"Ava"})}),(0,d.jsxs)("div",{className:p.description,children:[(0,d.jsx)("h2",{children:s.fullName}),(0,d.jsx)(f,{status:s.status,updateProfileStatus:s.updateProfileStatus}),(0,d.jsxs)("p",{children:["About me: ",s.aboutMe]}),(0,d.jsxs)("p",{children:["Looking for a job: ",s.lookingForAJob?"Yes":"No"]}),(0,d.jsxs)("p",{children:["Looking For A Job Description: ",s.lookingForAJobDescription]})]})]})},x="Post_item__eOMpk",j="Post_postInfo__Y+SGv",_="Post_postText__8rs9k",m="Post_postLikes__pNDzx",v=function(s){return(0,d.jsxs)("div",{className:x,children:[(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)("img",{src:s.photo,alt:"Random"}),(0,d.jsxs)("div",{className:m,children:["Likes: ",s.likesCount]})]}),(0,d.jsx)("div",{className:_,children:s.message})]})},P={postsContent:"Posts_postsContent__l639j"},g=e(5705),k=function(s){var t=s.posts.map((function(s){return(0,d.jsx)(v,{message:s.message,likesCount:s.likesCount,photo:s.imgSrc},s.id)}));return(0,d.jsxs)("div",{className:P.postsContent,children:[(0,d.jsx)(g.J9,{initialValues:{postMessage:""},onSubmit:function(t,e){var i=e.resetForm;s.addPost(t.postMessage),i({values:""})},children:function(s){var t=s.values;return(0,d.jsxs)(g.l0,{children:[(0,d.jsx)("div",{children:(0,d.jsx)(g.gN,{as:"textarea",name:"postMessage"})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{type:"submit",disabled:!t.postMessage,children:"Add post"})})]})}}),(0,d.jsx)("h2",{children:"My posts"}),(0,d.jsx)("div",{className:P.posts,children:t})]})},N=e(6508),S=(0,l.$j)((function(s){return{posts:s.profilePage.posts}}),{addPost:N.q2})(k),I="Profile_natureImg__j6TC9",C="Profile_nature__vQIOH",b=e(5756),Z=function(s){return s.profile?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:I,children:(0,d.jsx)("img",{className:C,src:"https://picsum.photos/id/110/1200/600",alt:"picsum img"})}),(0,d.jsx)(h,(0,n.Z)((0,n.Z)({},s.profile),{},{status:s.status,updateProfileStatus:s.updateProfileStatus})),(0,d.jsx)(S,{})]}):(0,d.jsx)(b.Z,{})},M=e(7689),A=e(1548),T=e(7781);var F=function(s){(0,r.Z)(e,s);var t=(0,a.Z)(e);function e(){return(0,i.Z)(this,e),t.apply(this,arguments)}return(0,o.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.router.params.profileId;s||(s=this.props.userId),this.props.getProfile(s),this.props.getProfileStatus(s)}},{key:"render",value:function(){return(0,d.jsx)(Z,{profile:this.props.profile,status:this.props.status,updateProfileStatus:this.props.updateProfileStatus})}}]),e}(u.Component),w=(0,T.qC)((0,l.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,userId:s.auth.id}}),{getProfile:N.Ai,getProfileStatus:N.TL,updateProfileStatus:N.vq}),(function(s){return function(t){var e=(0,M.TH)(),i=(0,M.s0)(),o=(0,M.UO)();return(0,d.jsx)(s,(0,n.Z)((0,n.Z)({},t),{},{router:{location:e,navigate:i,params:o}}))}}),A.D)(F)}}]);
//# sourceMappingURL=482.d3efe1a9.chunk.js.map