(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{133:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=(r(74),r(60)),o=r.n(a),s=r(5),i=r(25),l=r.n(i),j=r(9),u=r(38),b="true"===localStorage.getItem("dark")||!1,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"darken":return!0;case"lighten":return!1;default:return e}},p=r(1),h=Object(n.createContext)(),O=Object(n.createContext)(),x=function(e){var t=Object(n.useReducer)(d,b),r=Object(s.a)(t,2),c=r[0],a=r[1];return Object(p.jsx)(O.Provider,{value:a,children:Object(p.jsx)(h.Provider,{value:c,children:e.children})})},m={primary:"#1e262c",secondary:"#182025"},f={primary:"#ffffff",secondary:"#f7f7f7"},v=function(e){var t=e.mobile,r=Object(j.useContext)(h);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.SocialIcon,{bgColor:r?f.secondary:null,style:{width:t?"80px":"40px",height:t?"80px":"40px"},url:"https://www.github.com/SinaBYR",target:"_blank",rel:"noopener noreferrer",to:"/"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.SocialIcon,{bgColor:r?f.secondary:null,style:{width:t?"80px":"40px",height:t?"80px":"40px"},url:"https://www.linkedin.com/in/sina-beyraghdar-7bb920162/",target:"_blank",rel:"noopener noreferrer",to:"/"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.SocialIcon,{bgColor:r?f.secondary:null,style:{width:t?"80px":"40px",height:t?"80px":"40px"},url:"https://www.twitter.com/sinabyr",target:"_blank",rel:"noopener noreferrer",to:"/"})})]})},_=r(24),g=r(3),y=r(61),k=r.n(y),C=function(e){return Object(p.jsx)("button",Object(g.a)(Object(g.a)({className:k.a.PrimaryButton},e),{},{children:e.children}))},w=(r(62),r(63)),N=r.n(w),S=function(e){return Object(p.jsx)("button",Object(g.a)(Object(g.a)({className:N.a.WarningButton},e),{},{children:e.children}))},P=r(64),D=r.n(P),F=function(e){return Object(p.jsx)("button",Object(g.a)(Object(g.a)({className:D.a.ConfirmButton},e),{},{children:e.children}))},B=r(65),M=r.n(B),L=r(20),W=function(e){return Object(p.jsx)(L.b,Object(g.a)(Object(g.a)({className:M.a.PrimaryLink},e),{},{children:e.children}))},E=r(67),T=r.n(E),I=function(e){return Object(p.jsx)(L.b,Object(g.a)(Object(g.a)({className:T.a.SecondaryLink},e),{},{children:e.children}))},R=(r(68),r(44)),A=r.n(R),U=function(e){e.styles;var t=e.open,r=e.click,n=Object(j.useContext)(h),c=[A.a.Burger,t?A.a.Open:null].join(" ");return Object(p.jsxs)("div",{className:c,onClick:r,children:[Object(p.jsx)("div",{style:{backgroundColor:n?f.primary:m.secondary}}),Object(p.jsx)("div",{style:{backgroundColor:n?f.primary:m.secondary}}),Object(p.jsx)("div",{style:{backgroundColor:n?f.primary:m.secondary}})]})},J=r(69),q=r.n(J),H=function(e){return Object(p.jsx)("p",Object(g.a)(Object(g.a)({className:q.a.ErrorMessage},e),{},{children:e.children}))},V=r(31),z=r.n(V),Q=r(26),Y=r.n(Q),Z=function(){var e=Object(n.useContext)(h),t=Object(n.useContext)(O);return Object(p.jsxs)("label",{className:Y.a.Switch,children:[Object(p.jsx)("input",{type:"checkbox",checked:e,onChange:function(r){if(!e)return t({type:"darken"}),void localStorage.setItem("dark",!0);t({type:"lighten"}),localStorage.setItem("dark",!1)}}),Object(p.jsx)("span",{className:[Y.a.Slider,Y.a.Round].join(" "),children:e?Object(p.jsx)("span",{className:Y.a.Moon,children:Object(p.jsx)(_.b,{})}):Object(p.jsx)("span",{className:Y.a.Sun,children:Object(p.jsx)(_.c,{})})})]})},X=function(e){var t=e.open,r=Object(j.useContext)(h),n=[z.a.Menu,t?z.a.Open:null].join(" ");return Object(p.jsxs)("div",{className:n,style:{backgroundColor:r?m.secondary:f.secondary},children:[Object(p.jsx)("ul",{className:z.a.Links,children:Object(p.jsx)(v,{mobile:!0})}),Object(p.jsxs)("div",{className:z.a.DarkMode,children:[Object(p.jsx)("span",{children:"Theme Mode"}),Object(p.jsx)(Z,{})]})]})},G=function(){var e=Object(j.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useContext)(h);return Object(p.jsx)("header",{className:l.a.Navbar,style:{backgroundColor:a?m.secondary:f.primary},children:Object(p.jsxs)("nav",{className:l.a.NavbarWrapper,children:[Object(p.jsx)(U,{open:r,click:function(){return c(!r)}}),Object(p.jsx)(X,{open:r}),Object(p.jsx)("h1",{className:l.a.Logo,children:"Sina Beyraghdar"}),Object(p.jsx)("div",{className:l.a.DarkMode,children:Object(p.jsx)(Z,{})}),Object(p.jsx)("ul",{className:l.a.Links,children:Object(p.jsx)(v,{})}),a?Object(p.jsxs)(I,{to:"/",target:"_blank",rel:"noopener noreferrer",children:["Resume ",Object(p.jsx)(_.a,{})]}):Object(p.jsxs)(W,{to:"/",target:"_blank",rel:"noopener noreferrer",children:["Resume ",Object(p.jsx)(_.a,{})]})]})})},K=r(10),$=r.n(K),ee=r(16),te=r(39),re=r.n(te),ne=r(22),ce=r.n(ne),ae=r(32),oe=function(e){var t=e.title,r=e.code,n=e.demo,c=e.description,a=e.tech,o=e.preview,s=Object(j.useContext)(h),i=[ce.a.Project,s?ce.a.Dark:null].join(" ");return Object(p.jsxs)("section",{className:i,style:{backgroundColor:s?m.primary:f.secondary},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("div",{className:ce.a.MobilePreview,children:Object(p.jsx)("img",{src:o,alt:"project-preview-screenshot"})}),Object(p.jsx)("div",{className:ce.a.Links,children:s?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(I,{to:n,target:"_blank",rel:"noopener noreferrer",children:["Demo ",Object(p.jsx)(ae.a,{})]}),Object(p.jsxs)(I,{to:r,target:"_blank",rel:"noopener noreferrer",children:["Code ",Object(p.jsx)(ae.a,{})]})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(W,{to:n,target:"_blank",rel:"noopener noreferrer",children:["Demo ",Object(p.jsx)(ae.a,{})]}),Object(p.jsxs)(W,{to:r,target:"_blank",rel:"noopener noreferrer",children:["Code ",Object(p.jsx)(ae.a,{})]})]})}),Object(p.jsx)("p",{className:ce.a.Description,children:c}),Object(p.jsxs)("div",{className:ce.a.Technologies,children:[Object(p.jsx)("h3",{children:"Technologies"}),Object(p.jsx)("ul",{children:a.map((function(e){return Object(p.jsx)("li",{children:e},e)}))})]})]}),Object(p.jsx)("div",{className:ce.a.DesktopPreview,children:Object(p.jsx)("img",{src:o,alt:"project-preview-screenshot"})})]})},se=r(45),ie=r.n(se),le=ie.a.CancelToken.source(),je=ie.a.create({baseURL:"https://sina-beyraghdar-portfolio-api.herokuapp.com",cancelToken:le.token}),ue=r(21),be=function(){var e=Object(n.useContext)(h),t=Object(n.useState)([]),r=Object(s.a)(t,2),c=r[0],a=r[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),l=i[0],j=i[1],u=Object(n.useState)(!1),b=Object(s.a)(u,2),d=b[0],O=b[1],x=function(){var e=Object(ee.a)($.a.mark((function e(){var t,r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(null),O(!0),e.prev=2,e.next=5,je.get("/projects");case 5:return t=e.sent,e.next=8,t.data;case 8:r=e.sent,a(r),O(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),j(e.t0),O(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x()}),[]);var v=c.map((function(e){var t=e._id,r=e.title,n=e.code,c=e.demo,a=e.description,o=e.tech,s=e.preview;return Object(p.jsx)(oe,{title:r,code:n,demo:c,description:a,tech:o,preview:s},t)}));return Object(p.jsx)("main",{className:re.a.Work,style:{backgroundColor:e?m.secondary:f.primary},children:Object(p.jsxs)("div",{className:re.a.WorkWrapper,children:[Object(p.jsx)("h2",{children:"My Work"}),Object(p.jsx)("div",{className:re.a.Projects,children:l?Object(p.jsx)(H,{children:l.message}):d?Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsx)(ue.ScaleLoader,{color:e?f.primary:m.secondary})}):v})]})})},de=r(46),pe=r.n(de),he=function(){var e=Object(j.useContext)(h);return Object(p.jsx)("section",{className:pe.a.Showcase,style:{backgroundColor:e?m.primary:f.secondary},children:Object(p.jsxs)("div",{className:pe.a.ShowcaseWrapper,children:[Object(p.jsx)("h2",{children:"Hello, and welcome to my portfolio."}),Object(p.jsx)("p",{children:"My name is Sina. I'm a front-end web developer and I make web applications."}),Object(p.jsx)("p",{children:"Check out my work in the next section."}),Object(p.jsx)("p",{children:"Send me an email using the form in the last section or message me in LinkedIn."})]})})},Oe=r(27),xe=r.n(Oe),me=r(15),fe=function(e,t){var r=t.target.name,n=function(e){var t=e.email,r=e.message,n={};return t.touched&&!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.value)&&(n.email="Email address is invalid."),t.touched&&!t.value.length&&(n.email="This field is required."),r.touched&&!r.value.length&&(n.message="This field is required.",console.log(n)),n}(e);return Object(g.a)(Object(g.a)({},e),{},Object(me.a)({},r,Object(g.a)(Object(g.a)({},e[r]),{},{error:n[r]})))},ve=r(42),_e=r.n(ve),ge=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)({email:{value:"",error:null,touched:!1},message:{value:"",error:null,touched:!1}}),o=Object(s.a)(a,2),i=o[0],l=o[1],j=function(e){l(function(e,t){var r=t.target.name;return Object(g.a)(Object(g.a)({},e),{},Object(me.a)({},r,Object(g.a)(Object(g.a)({},e[r]),{},{value:t.target.value})))}(i,e))},u=function(e){l(function(e,t){var r=t.target.name;return Object(g.a)(Object(g.a)({},e),{},Object(me.a)({},r,Object(g.a)(Object(g.a)({},e[r]),{},{touched:!0})))}(i,e))},b=function(e){l(fe(i,e))};return Object(p.jsx)("section",{className:xe.a.Contact,children:Object(p.jsxs)("div",{className:xe.a.ContactWrapper,children:[Object(p.jsx)("h2",{children:"Contact Me"}),Object(p.jsxs)("form",{className:xe.a.Form,onSubmit:function(e){if(e.preventDefault(),t=i,!Object.keys(t).every((function(e){return t[e].touched&&!t[e].error})))return!1;var t;c(!0),setTimeout((function(){console.log(i),c(!1)}),2e3)},children:[Object(p.jsx)("label",{children:"Email"}),Object(p.jsx)("p",{className:xe.a.ErrorMessage,children:i.email.error}),Object(p.jsx)("input",{type:"email",name:"email",id:"email",style:{borderColor:i.email.error&&"red"},autoComplete:"off",onChange:j,onFocus:u,onBlur:b}),Object(p.jsx)("label",{children:"Message"}),Object(p.jsx)("p",{className:xe.a.ErrorMessage,children:i.message.error}),Object(p.jsx)("textarea",{name:"message",id:"message",style:{borderColor:i.message.error&&"red"},onChange:j,onFocus:u,onBlur:b}),Object(p.jsx)(C,{type:"submit",disabled:r,children:r?Object(p.jsx)(_e.a,{color:"#eeeeee",height:"10px",radius:"2px"}):"Send"})]})]})})},ye=r(47),ke=r.n(ye),Ce=function(){var e=Object(j.useContext)(h);return Object(p.jsxs)("footer",{className:ke.a.Footer,style:{backgroundColor:e?m.primary:f.primary},children:[Object(p.jsx)("p",{children:"Developed by Sina Beyraghdar \xa9 2021"}),Object(p.jsxs)("p",{className:ke.a.Photographer,children:["Pian delle Betulle, Italy. Photo by ",Object(p.jsx)("a",{href:"https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",style:{color:e?f.primary:m.secondary},children:"Alessio Soggetti"})," on ",Object(p.jsx)("a",{href:"https://unsplash.com/@asoggetti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",style:{color:e?f.primary:m.secondary},children:"Unsplash."})]})]})},we=r(4),Ne=r(48),Se=r.n(Ne),Pe=r(70),De=r.n(Pe),Fe=function(){return Object(p.jsxs)("header",{className:De.a.Header,children:[Object(p.jsx)(L.b,{to:"/",children:"Dashboard"}),Object(p.jsx)(I,{to:"/create",children:"Create a new project"})]})},Be=r(71),Me=r.n(Be),Le=r(49),We=r.n(Le),Ee=function(e){var t=e.title,r=e.projectID;return Object(p.jsxs)("div",{className:We.a.Project,children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("div",{className:We.a.Controllers,children:Object(p.jsx)(I,{to:"/"+r,children:"Edit"})})]})},Te=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(!1),o=Object(s.a)(a,2),i=o[0],l=o[1],j=Object(n.useState)(!1),u=Object(s.a)(j,2),b=u[0],d=u[1],h=function(){var e=Object(ee.a)($.a.mark((function e(){var t,r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),d(!0),e.prev=2,e.next=5,je.get("/projects?titleOnly=true");case 5:return t=e.sent,e.next=8,t.data;case 8:r=e.sent,c(r),d(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),l(e.t0),d(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){h()}),[]);var O=r.map((function(e){return Object(p.jsx)(Ee,{title:e.title,projectID:e._id},e+Math.random())}));return Object(p.jsxs)("div",{className:Me.a.Projects,children:[i&&Object(p.jsx)(H,{children:i.message}),b?Object(p.jsx)(ue.ScaleLoader,{color:"#f7f7f7"}):O]})},Ie=r(17),Re=r(28),Ae=r.n(Re),Ue=r(72),Je=r.n(Ue),qe=function(e){var t,r=e.type,n=e.label,c=e.name,a=e.id,o=e.value,s=e.accept,i=e.onChange,l=e.onFocus,j=e.onBlur;switch(r){case"text":t=Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:a,children:n}),Object(p.jsx)("input",{name:c,id:a,type:"text",value:o,onChange:i,onFocus:l,onBlur:j})]});break;case"file":t=Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:a,children:n}),Object(p.jsx)("input",{name:c,id:a,type:"file",accept:s,onChange:i,onFocus:l,onBlur:j})]});break;case"textarea":t=Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:a,children:n}),Object(p.jsx)("textarea",{name:c,id:a,type:"file",accept:s,value:o,onChange:i,onFocus:l,onBlur:j})]});break;default:return null}return Object(p.jsx)("div",{className:Je.a.Input,children:t})},He=function(e){var t=Object.keys(e).every((function(t){return"preview"===t?e[t]:"tech"===t?e.tech.every((function(e){return e.length})):e[t].length}));return t},Ve=function(e){var t=e.submit,r=e.loading,c=e.error,a=Object(n.useState)({title:"",preview:null,demo:"",code:"",description:"",tech:[""]}),o=Object(s.a)(a,2),i=o[0],l=o[1],j=function(e){l(function(e,t){var r=t.target.name;if("tech"===r){var n=Object(Ie.a)(e.tech);return n[t.target.id]=t.target.value,Object(g.a)(Object(g.a)({},e),{},{tech:n})}if("preview"===r){var c=Object(s.a)(t.target.files,1)[0];return c?Object(g.a)(Object(g.a)({},e),{},{preview:c}):Object(g.a)(Object(g.a)({},e),{},{preview:null})}return Object(g.a)(Object(g.a)({},e),{},Object(me.a)({},r,t.target.value))}(i,e))},u=function(e){e.preventDefault();var r=new FormData;Object.keys(i).forEach((function(e){if("tech"===e)return i[e].forEach((function(e){r.append("tech[]",e)}));r.append(e,i[e])})),He(i)&&t(r)},b=i.tech.map((function(e,t){return Object(p.jsx)(qe,{type:"text",label:"Tech "+(t+1),name:"tech",id:t,value:i.tech[t],onChange:j},t)}));return Object(p.jsx)("div",{className:Ae.a.CreateForm,children:Object(p.jsxs)("form",{className:Ae.a.Form,onSubmit:u,children:[c&&Object(p.jsx)(H,{children:c.message}),Object(p.jsx)(qe,{type:"text",label:"Title",name:"title",id:"title",value:i.title,onChange:j},"title"),Object(p.jsx)(qe,{type:"text",label:"Demo Link",id:"demo",name:"demo",value:i.demo,onChange:j},"demo"),Object(p.jsx)(qe,{type:"text",label:"Code Link",id:"code",name:"code",value:i.code,onChange:j},"code"),Object(p.jsx)(qe,{type:"textarea",label:"Description",name:"description",id:"description",value:i.description,onChange:j},"description"),Object(p.jsx)(qe,{type:"file",label:"Preview",name:"preview",id:"preview",accept:"image/png, image/jpeg",onChange:j},"preview"),i.preview?Object(p.jsx)("img",{className:Ae.a.Preview,src:URL.createObjectURL(i.preview),alt:"upload-preview"}):null,Object(p.jsx)("div",{className:Ae.a.Technologies,children:b}),Object(p.jsxs)("div",{className:Ae.a.ButtonsWrapper,children:[Object(p.jsx)(C,{type:"button",onClick:function(){var e=Object(Ie.a)(i.tech);e.push(""),l(Object(g.a)(Object(g.a)({},i),{},{tech:e}))},children:"Add Tech"}),Object(p.jsx)(C,{type:"button",onClick:function(){if(!(i.tech.length<2)){var e=Object(Ie.a)(i.tech);e.pop(),l(Object(g.a)(Object(g.a)({},i),{},{tech:e}))}},children:"Delete Tech"}),Object(p.jsx)(F,{type:"submit",onClick:u,disabled:r||!He(i),children:r?Object(p.jsx)(ue.ScaleLoader,{color:"#eeeeee",height:"10px",radius:"2px"}):"Create"})]})]})})},ze=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(null),o=Object(s.a)(a,2),i=o[0],l=o[1],j=Object(we.g)(),u=function(){var e=Object(ee.a)($.a.mark((function e(t){var r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),l(null),e.prev=2,e.next=5,je.post("/projects",t);case 5:r=e.sent,c(!1),201===r.status&&j.replace("/"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),l(e.t0),c(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsx)(Ve,{submit:u,loading:r,error:i})})},Qe=r(18),Ye=r.n(Qe),Ze=function(e){var t=Object.keys(e).every((function(t){return"preview"===t||("tech"===t?e.tech.every((function(e){return e.length})):e[t].length)}));return t},Xe=function(e){var t=e.submit,r=e.deleteProject,c=e.preData,a=e.loading,o=e.error,i=Object(n.useState)({title:"",preview:null,demo:"",code:"",description:"",tech:[""]}),l=Object(s.a)(i,2),j=l[0],u=l[1],b=Object(n.useState)(!1),d=Object(s.a)(b,2),h=d[0],O=d[1],x=function(e){u(function(e,t){var r=t.target.name;if("tech"===r){var n=Object(Ie.a)(e.tech);return n[t.target.id]=t.target.value,Object(g.a)(Object(g.a)({},e),{},{tech:n})}if("preview"===r){var c=Object(s.a)(t.target.files,1)[0];return c?Object(g.a)(Object(g.a)({},e),{},{preview:c}):Object(g.a)(Object(g.a)({},e),{},{preview:null})}return Object(g.a)(Object(g.a)({},e),{},Object(me.a)({},r,t.target.value))}(j,e))},m=function(e){e.preventDefault();var r=new FormData;Object.keys(j).forEach((function(e){if("preview"!==e||j.preview)return"tech"===e?j[e].forEach((function(e){r.append("tech[]",e)})):void r.append(e,j[e])})),Ze(j)&&t(r)};Object(n.useEffect)((function(){if(Object.keys(c).length){var e=Object(g.a)({},j);Object.keys(c).forEach((function(t){"_id"!==t&&"preview"!==t&&(e[t]=c[t])})),u(e)}}),[c]);var f=j.tech.map((function(e,t){return Object(p.jsx)(qe,{type:"text",label:"Tech "+(t+1),name:"tech",id:t,value:j.tech[t],onChange:x},t)}));return Object(p.jsx)("div",{className:Ye.a.EditForm,children:Object(p.jsxs)("form",{className:Ye.a.Form,onSubmit:m,children:[o&&Object(p.jsx)(H,{children:o.message}),Object(p.jsx)(qe,{type:"text",label:"Title",name:"title",id:"title",value:j.title,onChange:x},"title"),Object(p.jsx)(qe,{type:"text",label:"Demo Link",id:"demo",name:"demo",value:j.demo,onChange:x},"demo"),Object(p.jsx)(qe,{type:"text",label:"Code Link",id:"code",name:"code",value:j.code,onChange:x},"code"),Object(p.jsx)(qe,{type:"textarea",label:"Description",name:"description",id:"description",value:j.description,onChange:x},"description"),Object(p.jsx)(qe,{type:"file",label:"Preview",name:"preview",id:"preview",accept:"image/png, image/jpeg",onChange:x},"preview"),Object(p.jsx)("div",{className:Ye.a.Previews,children:j.preview?Object(p.jsx)("img",{className:Ye.a.Preview,src:URL.createObjectURL(j.preview),alt:"upload-preview"}):Object(p.jsx)("img",{className:Ye.a.Preview,src:c.preview,alt:"upload-preview"})}),Object(p.jsx)("div",{className:Ye.a.Technologies,children:f}),Object(p.jsxs)("div",{className:Ye.a.ButtonsWrapper,children:[Object(p.jsx)(C,{type:"button",onClick:function(){var e=Object(Ie.a)(j.tech);e.push(""),u(Object(g.a)(Object(g.a)({},j),{},{tech:e}))},children:"Add Tech"}),Object(p.jsx)(C,{type:"button",onClick:function(){if(!(j.tech.length<2)){var e=Object(Ie.a)(j.tech);e.pop(),u(Object(g.a)(Object(g.a)({},j),{},{tech:e}))}},children:"Delete Tech"}),Object(p.jsx)(F,{type:"submit",onClick:m,disabled:a||!Ze(j),children:a?Object(p.jsx)(ue.ScaleLoader,{color:"#eeeeee",height:"10px",radius:"2px"}):"Update"}),h?Object(p.jsxs)("div",{className:Ye.a.ConfirmDeleteButtons,children:[Object(p.jsx)(C,{type:"button",onClick:function(){r()},children:"Yes"}),Object(p.jsx)(C,{type:"button",onClick:function(){O(!1)},children:"No"})]}):Object(p.jsx)(S,{type:"button",onClick:function(){O(!0)},children:"Delete"})]})]})})},Ge=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(!1),o=Object(s.a)(a,2),i=o[0],l=o[1],j=Object(n.useState)(null),u=Object(s.a)(j,2),b=u[0],d=u[1],h=Object(n.useState)(null),O=Object(s.a)(h,2),x=O[0],m=O[1],f=Object(we.h)().projectID,v=Object(we.g)(),_=function(){var e=Object(ee.a)($.a.mark((function e(t){var r,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),d(null),e.prev=2,e.next=5,je.patch("/projects/"+f,t);case 5:return r=e.sent,e.next=8,r.data;case 8:n=e.sent,c(n),l(!1),200===r.status&&v.replace("/"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),d(e.t0),l(!1);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(ee.a)($.a.mark((function e(){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),d(null),e.prev=2,e.next=5,je.delete("/projects/"+f);case 5:t=e.sent,l(!1),200===t.status&&v.replace("/"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),d(e.t0),l(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=function(){var e=Object(ee.a)($.a.mark((function e(){var t,r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(null),e.prev=1,e.next=4,je.get("/projects/"+f);case 4:return t=e.sent,e.next=7,t.data;case 7:r=e.sent,c(r),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),m(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),Object(p.jsx)("div",{children:x?Object(p.jsx)(H,{children:x.message}):Object(p.jsx)(Xe,{submit:_,deleteProject:g,preData:r,loading:i,error:b})})},Ke=function(){return Object(p.jsx)("div",{className:Se.a.Dashboard,children:Object(p.jsxs)("div",{className:Se.a.DashboardWrapper,children:[Object(p.jsx)(Fe,{}),Object(p.jsxs)(we.d,{children:[Object(p.jsx)(we.b,{path:"/create",component:ze}),Object(p.jsx)(we.b,{path:"/:projectID",component:Ge}),Object(p.jsx)(we.b,{path:"/",component:Te})]})]})})},$e=function(){var e=Object(j.useContext)(h),t=window.location.host.split(".");return Object(p.jsx)("div",{style:{color:e?"#f7f7f7":"#1e262c"},children:Object(p.jsxs)(we.d,{children:["dashboard"===t[0].toLowerCase()&&Object(p.jsx)(we.b,{component:Ke}),Object(p.jsxs)(we.b,{exact:!0,path:"/",children:[Object(p.jsx)(G,{}),Object(p.jsx)(he,{}),Object(p.jsx)(be,{}),Object(p.jsx)(ge,{}),Object(p.jsx)(Ce,{})]}),Object(p.jsx)(we.a,{to:"/"})]})})},et=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,134)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L.a,{children:Object(p.jsx)(x,{children:Object(p.jsx)($e,{})})})}),document.getElementById("root")),et()},18:function(e,t,r){e.exports={Form:"EditForm_Form__15vkg",Preview:"EditForm_Preview__3JZdC",Technologies:"EditForm_Technologies__1tYzM",Remove:"EditForm_Remove__1darO",ButtonsWrapper:"EditForm_ButtonsWrapper__xXMeQ",ConfirmDeleteButtons:"EditForm_ConfirmDeleteButtons__2jIgE"}},22:function(e,t,r){e.exports={Project:"Project_Project__2WE4I",Dark:"Project_Dark__2Vcho",DesktopPreview:"Project_DesktopPreview__1q_On",MobilePreview:"Project_MobilePreview__3SSbJ",Links:"Project_Links__2QpmQ",Description:"Project_Description__3ZY-s",Technologies:"Project_Technologies__1DNM7"}},25:function(e,t,r){e.exports={Navbar:"Navbar_Navbar__3dr_P",NavbarWrapper:"Navbar_NavbarWrapper__2zz6o",Logo:"Navbar_Logo__1Vgmf",DarkMode:"Navbar_DarkMode__2jknK",Links:"Navbar_Links__1u3JC"}},26:function(e,t,r){e.exports={Switch:"DarkModeCheckbox_Switch__1-O76",Slider:"DarkModeCheckbox_Slider__3_j6V",Round:"DarkModeCheckbox_Round__yWkTi",Sun:"DarkModeCheckbox_Sun__19DNV",Moon:"DarkModeCheckbox_Moon__HQTuP"}},27:function(e,t,r){e.exports={Contact:"Contact_Contact__Fohui",ContactWrapper:"Contact_ContactWrapper__2fNXe",Form:"Contact_Form__1sn9L"}},28:function(e,t,r){e.exports={Form:"CreateForm_Form__VBil9",Preview:"CreateForm_Preview__3akRU",Technologies:"CreateForm_Technologies__2yJ3E",Remove:"CreateForm_Remove__VT4xD",ButtonsWrapper:"CreateForm_ButtonsWrapper__2Pwnk"}},31:function(e,t,r){e.exports={Menu:"Menu_Menu__q5g9r",Open:"Menu_Open__cG3Vl",Links:"Menu_Links__3HEzb",DarkMode:"Menu_DarkMode__Mif6x"}},39:function(e,t,r){e.exports={Work:"Work_Work__1a35m",WorkWrapper:"Work_WorkWrapper__bNI9I",Projects:"Work_Projects__2IGbX"}},44:function(e,t,r){e.exports={Burger:"Burger_Burger__3S9GE",Open:"Burger_Open__vEqqH"}},46:function(e,t,r){e.exports={Showcase:"Showcase_Showcase__38BgC",ShowcaseWrapper:"Showcase_ShowcaseWrapper__377An"}},47:function(e,t,r){e.exports={Footer:"Footer_Footer__3tlV2",Photographer:"Footer_Photographer__2jIgn"}},48:function(e,t,r){e.exports={Dashboard:"Dashboard_Dashboard__3QAOJ",DashboardWrapper:"Dashboard_DashboardWrapper__3Q3MP"}},49:function(e,t,r){e.exports={Project:"Project_Project__22YUg",Controllers:"Project_Controllers__1xUZg"}},61:function(e,t,r){e.exports={PrimaryButton:"PrimaryButton_PrimaryButton__2lZEn"}},62:function(e,t,r){e.exports={SecondaryButton:"SecondaryButton_SecondaryButton__AkPYb"}},63:function(e,t,r){e.exports={WarningButton:"WarningButton_WarningButton__3RBfl"}},64:function(e,t,r){e.exports={ConfirmButton:"ConfirmButton_ConfirmButton__7QFYJ"}},65:function(e,t,r){e.exports={PrimaryLink:"PrimaryLink_PrimaryLink__i6gAb"}},67:function(e,t,r){e.exports={SecondaryLink:"SecondaryLink_SecondaryLink__1saX7"}},68:function(e,t,r){},69:function(e,t,r){e.exports={ErrorMessage:"ErrorMessage_ErrorMessage__2BPsq"}},70:function(e,t,r){e.exports={Header:"Header_Header__3zD9e"}},71:function(e,t,r){e.exports={Projects:"Projects_Projects__uJbqo"}},72:function(e,t,r){e.exports={Input:"Input_Input__ihPOw"}},74:function(e,t,r){}},[[133,1,2]]]);
//# sourceMappingURL=main.7bc4bf8c.chunk.js.map