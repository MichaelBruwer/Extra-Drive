(this.webpackJsonpgoogledrive=this.webpackJsonpgoogledrive||[]).push([[0],{53:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){},57:function(e,t,i){},58:function(e,t,i){},67:function(e,t,i){},68:function(e,t,i){},70:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),a=i(13),s=i.n(a),l=(i(53),i(14)),r=(i(54),i(55),i(3)),o=function(e){var t=e.userPhoto;return Object(r.jsxs)("div",{className:"header",style:{backgroundColor:"#c1bac2"},children:[Object(r.jsx)("div",{className:"header__logo",children:Object(r.jsx)("span",{children:"Extra Drive"})}),Object(r.jsx)("div",{className:"header__icons",children:Object(r.jsx)("img",{src:t,alt:"User Pic"})})]})},d=(i(57),i(58),i(46)),j=i.n(d),u=i(19),b=u.a.initializeApp({apiKey:"AIzaSyDJlAjvIxzYUy-sr86ua9uGQ1LiRFYPjwg",authDomain:"drive-clonelive.firebaseapp.com",projectId:"drive-clonelive",storageBucket:"drive-clonelive.appspot.com",messagingSenderId:"566249519521",appId:"1:566249519521:web:743d77a27418b7a814b3e0"}),p=u.a.auth(),f=new u.a.auth.GoogleAuthProvider,h=u.a.storage(),m=b.firestore(),O=i(86),x=i(90);function v(){return{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}var g=Object(O.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),N=function(){var e=g(),t=Object(n.useState)(v),i=Object(l.a)(t,1)[0],c=Object(n.useState)(!1),a=Object(l.a)(c,2),s=a[0],o=a[1],d=Object(n.useState)(null),b=Object(l.a)(d,2),p=b[0],f=b[1],O=Object(n.useState)(!1),N=Object(l.a)(O,2),w=N[0],_=N[1];return Object(r.jsxs)("div",{className:"newFile",children:[Object(r.jsxs)("div",{className:"newFile__container",onClick:function(){o(!0)},children:[Object(r.jsx)(j.a,{fontSize:"large"}),Object(r.jsx)("p",{children:"New"})]}),Object(r.jsx)(x.a,{open:s,onClose:function(){o(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(r.jsxs)("div",{style:i,className:e.paper,children:[Object(r.jsx)("p",{children:"Select files you wnat to upload!"}),w?Object(r.jsx)("p",{children:" uploading... "}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&f(e.target.files[0])}}),Object(r.jsx)("button",{onClick:function(){_(!0),h.ref("files/".concat(p.name)).put(p).then((function(e){console.log(e),h.ref("files").child(p.name).getDownloadURL().then((function(t){m.collection("myFiles").add({timestamp:u.a.firestore.FieldValue.serverTimestamp(),caption:p.name,fileUrl:t,size:e._delegate.bytesTransferred}),_(!1),o(!1),f(null)})),h.ref("files").child(p.name).getMetadata().then((function(e){console.log(e.size)}))}))},children:"Upload"})]})]})})]})},w=function(){return Object(r.jsx)("div",{className:"sideBar",children:Object(r.jsx)(N,{})})},_=(i(67),i(68),i(28)),y=i.n(_),F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S=function(e){e.id;var t=e.caption,i=e.timestamp,n=e.fileUrl,c=e.size,a="".concat(null===i||void 0===i?void 0:i.toDate().getDate()," ").concat(F[(null===i||void 0===i?void 0:i.toDate().getMonth())+1]," ").concat(null===i||void 0===i?void 0:i.toDate().getFullYear());return Object(r.jsx)("div",{className:"fileItem",children:Object(r.jsxs)("a",{href:n,target:"_blank",download:!0,children:[Object(r.jsxs)("div",{className:"fileItem--left",children:[Object(r.jsx)(y.a,{}),Object(r.jsx)("p",{children:t})]}),Object(r.jsxs)("div",{className:"fileItem--right",children:[Object(r.jsx)("p",{children:a}),Object(r.jsx)("p",{children:function(e){var t=-1;do{e/=1024,t++}while(e>1024);return Math.max(e,.1).toFixed(1)+[" kB"," MB"," GB"," TB","PB","EB","ZB","YB"][t]}(c)})]})]})})},C=function(e){var t=e.name;return Object(r.jsxs)("div",{className:"fileCard",children:[Object(r.jsx)("div",{className:"fileCard--top",children:Object(r.jsx)(y.a,{style:{fontSize:130}})}),Object(r.jsx)("div",{className:"fileCard--bottom",children:Object(r.jsx)("p",{children:t})})]})},B=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){m.collection("myFiles").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,item:e.data()}})))}))}),[]),console.log(i),Object(r.jsxs)("div",{className:"fileView",children:[Object(r.jsx)("div",{className:"fileView__row",children:i.slice(0,5).map((function(e){e.id;var t=e.item;return Object(r.jsx)(C,{name:t.caption})}))}),Object(r.jsxs)("div",{className:"fileView__titles",children:[Object(r.jsx)("div",{className:"fileView__titles--left",children:Object(r.jsx)("p",{children:"Name"})}),Object(r.jsxs)("div",{className:"fileView__titles--right",children:[Object(r.jsx)("p",{children:"Last modified"}),Object(r.jsx)("p",{children:"File size"})]})]}),i.map((function(e){var t=e.id,i=e.item;return Object(r.jsx)(S,{id:t,caption:i.caption,timestamp:i.timestamp,fileUrl:i.fileUrl,size:i.size})}))]})},k=i.p+"static/media/patience.6f668632.jpg";var z=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),i=t[0],c=t[1];return Object(r.jsx)("div",{className:"App",children:i?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{userPhoto:i.photoURL}),Object(r.jsxs)("div",{className:"app__main",children:[Object(r.jsx)(w,{}),Object(r.jsx)(B,{})]})]}):Object(r.jsxs)("div",{className:"app__login",children:[Object(r.jsx)("img",{src:k,alt:"Patience",style:{height:"200px"}}),Object(r.jsx)("button",{onClick:function(){i?i&&p.signOut().then((function(){c(null)})).catch((function(e){return alert(e.message)})):p.signInWithPopup(f).then((function(e){c(e.user),console.log(e.user)})).catch((function(e){alert(e.message)}))},children:"Log into Drive"})]})})},D=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,92)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(z,{})}),document.getElementById("root")),D()}},[[70,1,2]]]);
//# sourceMappingURL=main.a2742439.chunk.js.map