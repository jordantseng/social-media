(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{V7sj:function(t,e,n){"use strict";var i=n("fXoL"),o=n("3Pt+"),r=n("ofXK"),s=n("Wp6s"),c=n("bTqV"),a=n("NFeN"),l=n("STbY");const m=["*"];let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-util-buttons"]],inputs:{post:"post"},ngContentSelectors:m,decls:6,vars:1,consts:[["mat-icon-button","",3,"matMenuTriggerFor"],["more_options","matMenu"]],template:function(t,e){if(1&t&&(i.jc(),i.Tb(0,"button",0),i.Tb(1,"mat-icon"),i.xc(2,"more_horiz"),i.Sb(),i.Sb(),i.Tb(3,"mat-menu",null,1),i.ic(5),i.Sb()),2&t){const t=i.oc(4);i.kc("matMenuTriggerFor",t)}},directives:[c.b,l.c,a.a,l.d],styles:["[_nghost-%COMP%]{display:block;margin-left:auto}"]}),t})();var b=n("tyNb"),g=n("iz3X"),p=n("f0Cb"),f=n("kmnG"),d=n("qFsG");function h(t,e){if(1&t){const t=i.Ub();i.Tb(0,"app-util-buttons",8),i.Tb(1,"button",9),i.bc("click",(function(){i.qc(t);const e=i.fc().$implicit;return i.fc().onDeleteComment(e._id)})),i.xc(2," Delete "),i.Sb(),i.Sb()}if(2&t){const t=i.fc(2);i.kc("post",t.post)}}function S(t,e){if(1&t&&(i.Tb(0,"div",4),i.Pb(1,"img",5),i.Tb(2,"div",6),i.Tb(3,"strong"),i.xc(4),i.Sb(),i.Tb(5,"div"),i.xc(6),i.Sb(),i.Sb(),i.Tb(7,"div"),i.wc(8,h,3,1,"app-util-buttons",7),i.Sb(),i.Sb()),2&t){const t=e.$implicit,n=i.fc();i.Cb(1),i.kc("src",t.avatar,i.rc),i.Cb(3),i.yc(t.name),i.Cb(2),i.zc(" ",t.content," "),i.Cb(2),i.kc("ngIf",n.loggedinUser._id===t.user)}}let k=(()=>{class t{constructor(t,e){this.fb=t,this.postsService=e}ngOnInit(){this.form=this.fb.group({comment:[""]})}onDeleteComment(t){this.postsService.deleteComment(this.post._id,t)}onSubmitComment(){this.postsService.createComment(this.form.value,this.post._id,this.loggedinUser),this.form.get("comment").setValue("")}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(o.b),i.Ob(g.a))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-comments-section"]],inputs:{comments:"comments",post:"post",loggedinUser:"loggedinUser"},decls:7,vars:2,consts:[[1,"example-form",3,"formGroup","keydown.enter"],[2,"width","100%","margin-top","1rem"],["matInput","","formControlName","comment"],["style","padding: 1rem 0; display: flex",4,"ngFor","ngForOf"],[2,"padding","1rem 0","display","flex"],["mat-card-avatar","",2,"display","block","margin-right","1rem",3,"src"],[2,"flex","3"],[3,"post",4,"ngIf"],[3,"post"],["mat-menu-item","","color","warn",3,"click"]],template:function(t,e){1&t&&(i.Pb(0,"mat-divider"),i.Tb(1,"form",0),i.bc("keydown.enter",(function(){return e.onSubmitComment()})),i.Tb(2,"mat-form-field",1),i.Tb(3,"mat-label"),i.xc(4,"Leave a comment"),i.Sb(),i.Pb(5,"textarea",2),i.Sb(),i.Sb(),i.wc(6,S,9,4,"div",3)),2&t&&(i.Cb(1),i.kc("formGroup",e.form),i.Cb(5),i.kc("ngForOf",e.comments))},directives:[p.a,o.k,o.g,o.d,f.c,f.g,d.a,o.a,o.f,o.c,r.k,s.c,r.l,u,l.a],styles:[""]}),t})();n.d(e,"a",(function(){return T}));const v=function(t){return["./",t,"edit"]};function C(t,e){if(1&t){const t=i.Ub();i.Tb(0,"app-util-buttons",11),i.Tb(1,"a",12),i.xc(2," Edit "),i.Sb(),i.Tb(3,"button",13),i.bc("click",(function(){i.qc(t);const e=i.fc().$implicit;return i.fc().onDeleteClick(e._id)})),i.xc(4," Delete "),i.Sb(),i.Sb()}if(2&t){const t=i.fc().$implicit;i.kc("post",t),i.Cb(1),i.kc("routerLink",i.mc(2,v,t._id))}}function I(t,e){if(1&t&&(i.Tb(0,"div",14),i.Pb(1,"img",15),i.Sb()),2&t){const t=i.fc().$implicit;i.Cb(1),i.kc("src",t.image,i.rc)("alt",t.title)}}function P(t,e){if(1&t&&i.Pb(0,"app-comments-section",16),2&t){const t=i.fc().$implicit,e=i.fc();i.kc("comments",t.comments)("loggedinUser",e.loggedinUser)("post",t)}}function y(t,e){if(1&t){const t=i.Ub();i.Tb(0,"div",1),i.Tb(1,"mat-card"),i.Tb(2,"mat-card-header"),i.Pb(3,"img",2),i.Tb(4,"mat-card-title"),i.xc(5),i.Sb(),i.Tb(6,"mat-card-subtitle"),i.xc(7),i.gc(8,"date"),i.Sb(),i.wc(9,C,5,4,"app-util-buttons",3),i.Sb(),i.Tb(10,"mat-card-content"),i.Tb(11,"h3"),i.xc(12),i.Sb(),i.Tb(13,"p"),i.xc(14),i.Sb(),i.wc(15,I,2,2,"div",4),i.Sb(),i.Tb(16,"mat-card-actions",5),i.Tb(17,"div",6),i.Tb(18,"button",7),i.xc(19),i.Sb(),i.Sb(),i.Tb(20,"div"),i.Tb(21,"button",8),i.bc("click",(function(){i.qc(t);const n=e.$implicit;return i.fc().onCommentButtonClick(n._id)})),i.xc(22),i.Sb(),i.Tb(23,"button",8),i.bc("click",(function(){i.qc(t);const n=e.$implicit;return i.fc().onLikeClick(n._id)})),i.Tb(24,"mat-icon",9),i.xc(25),i.Sb(),i.xc(26," LIKE "),i.Sb(),i.Sb(),i.Sb(),i.wc(27,P,1,3,"app-comments-section",10),i.Sb(),i.Sb()}if(2&t){const t=e.$implicit,n=i.fc();i.Cb(3),i.kc("src",t.user.avatar,i.rc),i.Cb(2),i.yc(t.user.name),i.Cb(2),i.yc(i.hc(8,11,t.createdAt)),i.Cb(2),i.kc("ngIf",n.loggedinUser._id===t.user._id),i.Cb(3),i.yc(t.title),i.Cb(2),i.zc(" ",t.content," "),i.Cb(1),i.kc("ngIf",t.image),i.Cb(4),i.yc(n.renderLikes(t)),i.Cb(3),i.zc(" ",n.renderCommentButton(t.comments)," "),i.Cb(3),i.yc(n.renderLikeButton(t.likes)),i.Cb(2),i.kc("ngIf",n.commentSection===t._id)}}let T=(()=>{class t{constructor(t){this.fb=t,this.deleteClicked=new i.n,this.commentDeleted=new i.n,this.postLiked=new i.n}ngOnInit(){}renderLikes(t){return t.likes.find(t=>t.user===this.loggedinUser._id)?1===t.likes.length?"You like this post":`You and other ${t.likes.length-1} people like this post`:0===t.likes.length?null:`${t.likes.length} people like this post`}renderLikeButton(t){return t.find(t=>t.user===this.loggedinUser._id)?"favorite":"favorite_border"}renderCommentButton(t){return t.length>0?`${t.length} comments`:t.length<=0?"COMMENT":void 0}onLikeClick(t){this.postLiked.emit({postId:t})}onCommentButtonClick(t){this.commentSection=this.commentSection!==t?t:""}onDeleteClick(t){this.deleteClicked.emit(t)}onDeleteComment(t,e){this.commentDeleted.emit({postId:t,commentId:e})}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(o.b))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-post-list"]],inputs:{posts:"posts",loggedinUser:"loggedinUser"},outputs:{deleteClicked:"deleteClicked",commentDeleted:"commentDeleted",postLiked:"postLiked"},decls:1,vars:1,consts:[["class","container",4,"ngFor","ngForOf"],[1,"container"],["mat-card-avatar","",3,"src"],[3,"post",4,"ngIf"],["class","image-container",4,"ngIf"],["align","end",2,"margin-bottom","0"],[2,"margin-right","auto"],["mat-button",""],["mat-button","",3,"click"],["color","warn"],[3,"comments","loggedinUser","post",4,"ngIf"],[3,"post"],["mat-menu-item","","routerLinkActive","router-link-active",3,"routerLink"],["mat-menu-item","","color","warn",3,"click"],[1,"image-container"],["mat-card-image","",3,"src","alt"],[3,"comments","loggedinUser","post"]],template:function(t,e){1&t&&i.wc(0,y,28,13,"div",0),2&t&&i.kc("ngForOf",e.posts)},directives:[r.k,s.a,s.e,s.c,s.i,s.h,r.l,s.d,s.b,c.b,a.a,u,b.d,l.a,b.c,s.f,k],pipes:[r.e],styles:[".container[_ngcontent-%COMP%]{margin:1rem 0}mat-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:auto}.image-container[_ngcontent-%COMP%]{padding:10px;height:300px}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;height:100%}"]}),t})()},f9fP:function(t,e,n){"use strict";var i=n("fXoL"),o=n("3Pt+"),r=n("LRne"),s=n("HDdC");const c=t=>{if(!t.value||"string"==typeof t.value)return Object(r.a)(null);const e=t.value,n=new FileReader;return new s.a(t=>{n.addEventListener("loadend",e=>{const n=new Uint8Array(e.target.result).subarray(0,4);let i="",o=!1;for(const t of n)i+=t.toString(16);switch(i){case"89504e47":o=!0;break;case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffe3":case"ffd8ffe8":o=!0;break;default:o=!1}t.next(o?null:{invalidMimeType:!0}),t.complete()}),n.readAsArrayBuffer(e)})};var a=n("Wp6s"),l=n("kmnG"),m=n("qFsG"),u=n("ofXK"),b=n("bTqV"),g=n("NFeN");function p(t,e){1&t&&(i.Rb(0),i.xc(1," title is required "),i.Qb())}function f(t,e){if(1&t&&(i.Tb(0,"mat-error"),i.wc(1,p,2,0,"ng-container",4),i.Sb()),2&t){const t=i.fc();i.Cb(1),i.kc("ngIf",t.form.get("title").getError("required"))}}function d(t,e){1&t&&(i.Rb(0),i.xc(1," content is required "),i.Qb())}function h(t,e){if(1&t&&(i.Tb(0,"mat-error"),i.wc(1,d,2,0,"ng-container",4),i.Sb()),2&t){const t=i.fc();i.Cb(1),i.kc("ngIf",t.form.get("content").getError("required"))}}function S(t,e){if(1&t&&(i.Tb(0,"div",13),i.Pb(1,"img",14),i.Sb()),2&t){const t=i.fc();i.Cb(1),i.kc("src",t.imagePreview,i.rc)("alt",t.form.value.title)}}n.d(e,"a",(function(){return k}));let k=(()=>{class t{constructor(t){this.fb=t,this.initialFormValue={title:"",content:"",image:""},this.formSubmitted=new i.n,this.form=this.fb.group({title:[this.initialFormValue.title,[o.j.required]],content:[this.initialFormValue.content,[o.j.required]],image:[null,null,[c]]})}ngOnInit(){}ngOnChanges(t){for(const e in t)if(t.hasOwnProperty(e))switch(e){case"initialFormValue":return this.setFormValue()}}setFormValue(){this.form.patchValue({title:this.initialFormValue.title,content:this.initialFormValue.content,image:this.initialFormValue.image}),this.imagePreview=this.initialFormValue.image}onUploadImage(t){const e=t.target.files[0],n=new FileReader;e&&(this.form.patchValue({image:e}),this.form.get("image").updateValueAndValidity(),n.onload=t=>{this.imagePreview=t.target.result},n.readAsDataURL(e))}onFormSubmit(){this.form.markAllAsTouched(),this.form.invalid||this.formSubmitted.emit(this.form.value)}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(o.b))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-post-form"]],inputs:{loggedInUser:"loggedInUser",initialFormValue:"initialFormValue"},outputs:{formSubmitted:"formSubmitted"},features:[i.Ab],decls:22,vars:7,consts:[["mat-card-avatar","",3,"src"],[3,"formGroup","ngSubmit"],["formDirective","ngForm"],["matInput","","formControlName","title","placeholder","Post Title"],[4,"ngIf"],["matInput","","formControlName","content","placeholder","Post Content"],["class","image-preview",4,"ngIf"],[1,"post-form-actions"],["mat-button","","type","button",3,"click"],["color","warn"],["hidden","","type","file",3,"change"],["fileInput",""],["color","primary","mat-button","","type","submit",3,"disabled"],[1,"image-preview"],[3,"src","alt"]],template:function(t,e){if(1&t){const t=i.Ub();i.Tb(0,"mat-card"),i.Tb(1,"mat-card-header"),i.Pb(2,"img",0),i.Tb(3,"mat-card-title"),i.xc(4),i.Sb(),i.Sb(),i.Tb(5,"form",1,2),i.bc("ngSubmit",(function(){return e.onFormSubmit()})),i.Tb(7,"mat-form-field"),i.Pb(8,"input",3),i.Sb(),i.wc(9,f,2,1,"mat-error",4),i.Tb(10,"mat-form-field"),i.Pb(11,"textarea",5),i.Sb(),i.wc(12,h,2,1,"mat-error",4),i.wc(13,S,2,2,"div",6),i.Tb(14,"div",7),i.Tb(15,"button",8),i.bc("click",(function(){return i.qc(t),i.oc(19).click()})),i.Tb(16,"mat-icon",9),i.xc(17,"insert_photo"),i.Sb(),i.Sb(),i.Tb(18,"input",10,11),i.bc("change",(function(t){return e.onUploadImage(t)})),i.Sb(),i.Tb(20,"button",12),i.xc(21," Post "),i.Sb(),i.Sb(),i.Sb(),i.Sb()}2&t&&(i.Cb(2),i.kc("src",e.loggedInUser.avatar,i.rc),i.Cb(2),i.yc(e.loggedInUser.name),i.Cb(1),i.kc("formGroup",e.form),i.Cb(4),i.kc("ngIf",e.form.get("title").errors&&e.form.get("title").touched),i.Cb(3),i.kc("ngIf",e.form.get("content").errors&&e.form.get("content").touched),i.Cb(1),i.kc("ngIf",e.imagePreview),i.Cb(7),i.kc("disabled",e.form.invalid))},directives:[a.a,a.e,a.c,a.i,o.k,o.g,o.d,l.c,m.a,o.a,o.f,o.c,u.l,b.b,g.a,l.b],styles:["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%}.image-preview[_ngcontent-%COMP%]{height:5rem;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.post-form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),t})()},fZDh:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),o=n("tyNb"),r=n("iz3X"),s=n("oYgl"),c=n("f9fP");let a=(()=>{class t{constructor(t,e,n,i){this.route=t,this.router=e,this.postsService=n,this.authService=i,this.initialFormValue={title:"",content:"",image:""}}ngOnInit(){this.authService.user$.subscribe(t=>{this.loggedInUser=t})}onCreatePost(t){this.postsService.createPost(t).subscribe(()=>{this.router.navigate(["./"],{relativeTo:this.route,queryParams:{ts:Date.now().toString()},queryParamsHandling:"merge",skipLocationChange:!0})})}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(o.a),i.Ob(o.b),i.Ob(r.a),i.Ob(s.a))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-create-post"]],decls:1,vars:2,consts:[[3,"loggedInUser","initialFormValue","formSubmitted"]],template:function(t,e){1&t&&(i.Tb(0,"app-post-form",0),i.bc("formSubmitted",(function(t){return e.onCreatePost(t)})),i.Sb()),2&t&&i.kc("loggedInUser",e.loggedInUser)("initialFormValue",e.initialFormValue)},directives:[c.a],styles:[""]}),t})()},iz3X:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("2Vo4"),o=n("fXoL"),r=n("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.url="/api/posts",this.posts$=new i.a([]),this.page$=new i.a({pageSize:3,currentPage:1,totalData:0,totalPage:0})}getPosts(){return this.posts$.getValue()}fetchMyPosts(){this.http.get(`${this.url}/me`).subscribe(t=>{this.posts$.next(t.data)})}updateMyPost(t,e){let n;return"string"==typeof e.image&&(n=e),"object"==typeof e.image&&(n=new FormData,n.append("title",e.title),n.append("content",e.content),n.append("image",e.image)),this.http.put(`${this.url}/${t}/me`,n)}deleteMyPost(t){const e=this.posts$.getValue();this.posts$.next(this.posts$.getValue().filter(e=>e._id!==t)),this.http.delete(`${this.url}/${t}/me`).subscribe(()=>{},t=>{this.posts$.next(e)})}createPost(t){const e=new FormData;return e.append("title",t.title),e.append("content",t.content),e.append("image",t.image),this.http.post(this.url,e)}fetchPost(t){return this.http.get(`${this.url}/${t}`)}deletePost(t){return this.http.delete(`${this.url}/${t}`)}fetchPosts(t,e){this.http.get(`${this.url}?page=${t}&pageSize=${e}`).subscribe(t=>{this.posts$.next(t.data),this.page$.next(t.page)})}likePost(t,e){const n=[...this.getPosts()],i=n.findIndex(e=>e._id===t),o=[...n[i].likes];n[i].likes.find(t=>t.user===e)?n[i].likes=n[i].likes.filter(t=>t.user!==e):n[i].likes.push({user:e}),this.posts$.next(n),this.http.patch(`${this.url}/${t}/like`,{userId:e}).subscribe(t=>{const o=n[i].likes.findIndex(t=>t.user===e);n[i].likes[o]=t,this.posts$.next(n)},t=>{n[i].likes=o,this.posts$.next(n)})}createComment(t,e,n){const i=[...this.getPosts()],o=i.findIndex(t=>t._id===e),r=[...i[o].comments];i[o].comments=[...i[o].comments,{user:n._id,avatar:n.avatar,name:n.name,content:t.comment}],this.http.post(`${this.url}/${e}/comments`,t).subscribe(t=>{const e=[...i[o].comments];e[e.length-1]=t},t=>{i[o].comments=r})}deleteComment(t,e){const n=[...this.getPosts()],i=n.findIndex(e=>e._id===t),o=[...n[i].comments],r=n[i].comments.filter(t=>t._id!==e);n[i].comments=r,this.posts$.next(n),this.http.delete(`${this.url}/${t}/comments/${e}`).subscribe(()=>{},t=>{n[i].comments=o})}}return t.\u0275fac=function(e){return new(e||t)(o.Xb(r.b))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},o0se:function(t,e,n){"use strict";n.r(e);var i=n("3Pt+"),o=n("ofXK"),r=n("tyNb"),s=n("eIep"),c=n("fXoL"),a=n("iz3X"),l=n("oYgl"),m=n("y9W9"),u=n("Wp6s"),b=n("bTqV");function g(t,e){if(1&t){const t=c.Ub();c.Tb(0,"mat-card"),c.Tb(1,"p"),c.xc(2),c.Sb(),c.Tb(3,"button",1),c.bc("click",(function(){return c.qc(t),c.fc().onCloseError()})),c.xc(4,"Close"),c.Sb(),c.Sb()}if(2&t){const t=c.fc();c.Cb(2),c.zc("Error occurred: ",t.errorMessage,"")}}let p=(()=>{class t{constructor(){}ngOnInit(){}onCloseError(){this.errorMessage=""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-error"]],inputs:{errorMessage:"errorMessage"},decls:1,vars:1,consts:[[4,"ngIf"],["align","end","mat-raised-button","",3,"click"]],template:function(t,e){1&t&&c.wc(0,g,5,1,"mat-card",0),2&t&&c.kc("ngIf",e.errorMessage)},directives:[o.l,u.a,b.b],styles:["mat-card[_ngcontent-%COMP%]{display:flex;margin:0 0 1rem;background-color:#f8d7da;color:#721c24}p[_ngcontent-%COMP%]{margin:auto 0!important}button[_ngcontent-%COMP%]{margin-left:auto;color:#721c24}"]}),t})();var f=n("rQ3y"),d=n("f9fP");function h(t,e){1&t&&c.Pb(0,"app-spinner")}function S(t,e){if(1&t){const t=c.Ub();c.Tb(0,"app-post-form",3),c.bc("formSubmitted",(function(e){return c.qc(t),c.fc().onEditPost(e)})),c.Sb()}if(2&t){const t=c.fc();c.kc("loggedInUser",t.loggedInUser)("initialFormValue",t.initialFormValue)}}let k=(()=>{class t{constructor(t,e,n,i,o){this.route=t,this.router=e,this.postsService=n,this.authService=i,this.errorService=o,this.initialFormValue={title:"",content:"",image:""}}ngOnInit(){this.errorSub=this.errorService.error$.subscribe(t=>{this.errorMessage=t.error.message}),this.authSub=this.authService.user$.subscribe(t=>{this.loggedInUser=t}),this.route.paramMap.pipe(Object(s.a)(t=>(this.postId=t.get("id"),this.loading=!0,this.postsService.fetchPost(this.postId)))).subscribe(t=>{this.initialFormValue=t,this.loading=!1})}onEditPost(t){this.postsService.updateMyPost(this.postId,t).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route})})}ngOnDestroy(){this.errorSub.unsubscribe(),this.authSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(r.a),c.Ob(r.b),c.Ob(a.a),c.Ob(l.a),c.Ob(m.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-edit-post"]],decls:3,vars:3,consts:[[4,"ngIf"],[3,"errorMessage"],[3,"loggedInUser","initialFormValue","formSubmitted",4,"ngIf"],[3,"loggedInUser","initialFormValue","formSubmitted"]],template:function(t,e){1&t&&(c.wc(0,h,1,0,"app-spinner",0),c.Pb(1,"app-error",1),c.wc(2,S,1,2,"app-post-form",2)),2&t&&(c.kc("ngIf",e.loading),c.Cb(1),c.kc("errorMessage",e.errorMessage),c.Cb(1),c.kc("ngIf",!e.loading))},directives:[o.l,p,f.a,d.a],styles:[""]}),t})();var v=n("M9IT"),C=n("fZDh"),I=n("V7sj");function P(t,e){1&t&&c.Pb(0,"app-spinner")}function y(t,e){if(1&t&&c.Pb(0,"app-error",5),2&t){const t=c.fc(2);c.kc("errorMessage",t.errorMessage)}}function T(t,e){if(1&t){const t=c.Ub();c.Rb(0),c.wc(1,y,1,1,"app-error",3),c.Pb(2,"app-create-post"),c.Tb(3,"app-post-list",4),c.bc("deleteClicked",(function(e){return c.qc(t),c.fc().onDeletePost(e)}))("commentSubmitted",(function(e){return c.qc(t),c.fc().onCommentSubmit(e)}))("postLiked",(function(e){return c.qc(t),c.fc().onClickLike(e)})),c.Sb(),c.Qb()}if(2&t){const t=c.fc();c.Cb(1),c.kc("ngIf",t.errorMessage),c.Cb(2),c.kc("posts",t.posts)("loggedinUser",t.loggedinUser)}}function w(t,e){1&t&&(c.Tb(0,"p",6),c.xc(1," No posts added yet.\n"),c.Sb())}const O=function(){return[1,3,5]},x=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o){this.postsService=t,this.route=e,this.router=n,this.authService=i,this.errorService=o,this.posts=[],this.page={pageSize:3,currentPage:1,totalData:0,totalPage:0}}ngOnInit(){this.userSub=this.authService.user$.subscribe(t=>{this.loggedinUser=t}),this.errorSub=this.errorService.error$.subscribe(t=>{this.loading=!1,this.errorMessage=t.error.message}),this.postsService.posts$.subscribe(t=>{this.loading=!1,this.posts=t}),this.postsService.page$.subscribe(t=>{this.loading=!1,this.page=t}),this.route.queryParamMap.subscribe(t=>{const e=+t.get("page")||this.page.currentPage,n=+t.get("pageSize")||this.page.pageSize;this.loading=!0,this.postsService.fetchPosts(e,n)})}onDeletePost(t){this.loading=!0,this.postsService.deleteMyPost(t)}onClickLike({postId:t}){this.postsService.likePost(t,this.loggedinUser._id)}onCommentSubmit({commentValue:t,postId:e}){this.postsService.createComment(t,e,this.loggedinUser)}onChangePage(t){this.router.navigate(["./"],{relativeTo:this.route,queryParams:{page:t.pageIndex+1,pageSize:t.pageSize}})}ngOnDestroy(){this.userSub.unsubscribe(),this.errorSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(a.a),c.Ob(r.a),c.Ob(r.b),c.Ob(l.a),c.Ob(m.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-post-list-home"]],decls:4,vars:7,consts:[[4,"ngIf"],[3,"length","pageSize","pageSizeOptions","page"],["class","mat-body-1 info-text",4,"ngIf"],[3,"errorMessage",4,"ngIf"],[3,"posts","loggedinUser","deleteClicked","commentSubmitted","postLiked"],[3,"errorMessage"],[1,"mat-body-1","info-text"]],template:function(t,e){1&t&&(c.wc(0,P,1,0,"app-spinner",0),c.wc(1,T,4,3,"ng-container",0),c.Tb(2,"mat-paginator",1),c.bc("page",(function(t){return e.onChangePage(t)})),c.Sb(),c.wc(3,w,2,0,"p",2)),2&t&&(c.kc("ngIf",e.loading),c.Cb(1),c.kc("ngIf",e.loggedinUser&&!e.loading),c.Cb(1),c.kc("length",null==e.page?null:e.page.totalData)("pageSize",null==e.page?null:e.page.pageSize)("pageSizeOptions",c.lc(6,O)),c.Cb(1),c.kc("ngIf",e.posts.length<=0&&!e.loading))},directives:[o.l,v.a,f.a,C.a,I.a,p],styles:[""]}),t})()},{path:":id/edit",component:k}];let $=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[r.e.forChild(x)],r.e]}),t})();var M=n("rhD1"),U=n("Dk7Y");n.d(e,"PostsModule",(function(){return F}));let F=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[o.c,$,M.a,i.i,U.a],$]}),t})()}}]);