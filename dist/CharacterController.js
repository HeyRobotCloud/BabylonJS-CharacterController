!function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i(require("babylonjs"));else if("function"==typeof define&&define.amd)define(["babylonjs"],i);else{var s="object"==typeof exports?i(require("babylonjs")):i(t.BABYLON);for(var h in s)("object"==typeof exports?exports:t)[h]=s[h]}}(window,(function(t){return function(t){var i={};function s(h){if(i[h])return i[h].exports;var n=i[h]={i:h,l:!1,exports:{}};return t[h].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=i,s.d=function(t,i,h){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:h})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"h",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.h)return t;var h=Object.create(null);if(s.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)s.d(h,n,function(i){return t[i]}.bind(null,n));return h},s.n=function(t){var i=t&&t.h?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=1)}([function(i,s){i.exports=t},function(t,i,s){"use strict";s.r(i),s.d(i,"CharacterController",(function(){return n}));var h=s(0),n=function(){function t(t,i,s,n,r){var f=this;void 0===r&&(r=!1),this.u=3,this.v=2*this.u,this.k=this.u/2,this.M=2*this.u,this.j=this.u/2,this.O=this.u/2,this.g=Math.PI,this.q=9.8,this.S=30,this.B=45,this.C=Math.PI*this.S/180,this.J=Math.PI*this.B/180,this.L=.25,this.R=0,this._=h.Vector3.Zero(),this.A=new e("walk"),this.D=new e("walkBack"),this.F=new e("idle"),this.G=new e("idleJump"),this.H=new e("run"),this.I=new e("runJump"),this.K=new e("fall"),this.N=new e("turnLeft"),this.P=new e("turnRight"),this.T=new e("strafeLeft"),this.U=new e("strafeRight"),this.V=new e("slideBack"),this.W=[this.A,this.D,this.F,this.G,this.H,this.I,this.K,this.N,this.P,this.T,this.U,this.V],this.X="w",this.Y="s",this.Z="a",this.$="d",this.tt="q",this.it="e",this.st=" ",this.ht=!0,this.nt=h.Vector3.Zero(),this.et=!1,this.mode=0,this.ut=0,this.rt=!1,this.ft=-1,this.ot=!1,this.ct=!1,this.at=null,this.lt=h.Vector3.Zero(),this.vt=!1,this.bt=0,this.wt=50,this.kt=0,this.dt=!1,this.pt=!1,this.yt=!1,this.Mt=0,this.jt=0,this.Ot=0,this.gt=1,this.xt=!1,this.qt=0,this.St=0,this.Bt=10,this.Ct=!0,this.Jt=!1,this.Lt=new h.Ray(h.Vector3.Zero(),h.Vector3.One(),1),this.Rt=h.Vector3.Zero(),this._t=.5,this.zt=0,this.At=!1,this.Dt=!1,this.Et=!1,this.Ft=t,this.Gt(t),this.setFaceForward(r),this.Ht=s,null!=n&&(this.Dt=!0,this.setAnimationGroups(n)),(this.Dt||null!==this.It)&&(this.Et=!0),this.Dt||(this.It=t.skeleton),this.Dt||null==this.It||this.checkAnims(this.It),this.Kt=i,this.Ct=this.Kt.checkCollisions,this.Nt=new u,this.Pt=function(){f.Qt()},this.Tt=function(t){f.Ut(t)},this.Vt=function(t){f.Wt(t)}}return t.prototype.setAvatar=function(t){this.Ft=t},t.prototype.setAvatarSkeleton=function(t){this.It=t,this.checkAnims(t)},t.prototype.setSlopeLimit=function(t,i){this.S=t,this.B=i,this.C=Math.PI*t/180,this.J=Math.PI*this.B/180},t.prototype.setStepOffset=function(t){this.L=t},t.prototype.setWalkSpeed=function(t){this.u=t},t.prototype.setRunSpeed=function(t){this.v=t},t.prototype.setBackSpeed=function(t){this.k=t},t.prototype.setJumpSpeed=function(t){this.M=t},t.prototype.setLeftSpeed=function(t){this.j=t},t.prototype.setRightSpeed=function(t){this.O=t},t.prototype.setTurnSpeed=function(t){this.g=t*Math.PI/180},t.prototype.setGravity=function(t){this.q=t},t.prototype.setAnimationGroups=function(t){this.Dt=!0;for(var i=0,s=this.W;i<s.length;i++){var h=s[i];null!=t[h.Xt]&&(h.Yt=t[h.Xt],h.Zt=!0)}},t.prototype.setAnimationRanges=function(t){var i;this.Dt=!1;for(var s=0,h=this.W;s<h.length;s++){var n=h[s];null!=(i=t[n.Xt])&&(i instanceof Object?(i.name&&(n.Xt=i.name),i.loop&&(n.$t=i.loop),i.rate&&(n.$t=i.rate)):n.Xt=i,n.Zt=!0)}},t.prototype.setAnim=function(t,i,s,h){(this.Dt||null!=this.It)&&(null!=h&&(t.$t=h),this.Dt?(null!=i&&(t.Yt=i,t.Zt=!0),null!=s&&t.Zt&&(t.ti=s,t.Yt.speedRatio=s)):(null!=i&&(t.Xt=i),null!=s&&(t.ti=s),null!=this.It.getAnimationRange(t.Xt)?t.Zt=!0:t.Zt=!1))},t.prototype.enableBlending=function(t){if(this.Dt)for(var i=0,s=this.W;i<s.length;i++){var h=s[i];if(h.Zt)for(var n=0,e=h.Yt.targetedAnimations;n<e.length;n++){var u=e[n];u.animation.enableBlending=!0,u.animation.blendingSpeed=t}}else this.It.enableBlending(t)},t.prototype.disableBlending=function(){if(this.Dt)for(var t=0,i=this.W;t<i.length;t++){var s=i[t];if(s.Zt)for(var h=0,n=s.Yt.targetedAnimations;h<n.length;h++){n[h].animation.enableBlending=!1}}},t.prototype.setWalkAnim=function(t,i,s){this.setAnim(this.A,t,i,s)},t.prototype.setRunAnim=function(t,i,s){this.setAnim(this.H,t,i,s)},t.prototype.setWalkBackAnim=function(t,i,s){this.setAnim(this.D,t,i,s)},t.prototype.setSlideBackAnim=function(t,i,s){this.setAnim(this.V,t,i,s)},t.prototype.setIdleAnim=function(t,i,s){this.setAnim(this.F,t,i,s)},t.prototype.setTurnRightAnim=function(t,i,s){this.setAnim(this.P,t,i,s)},t.prototype.setTurnLeftAnim=function(t,i,s){this.setAnim(this.N,t,i,s)},t.prototype.setStrafeRightAnim=function(t,i,s){this.setAnim(this.U,t,i,s)},t.prototype.setStrafeLeftAnim=function(t,i,s){this.setAnim(this.T,t,i,s)},t.prototype.setIdleJumpAnim=function(t,i,s){this.setAnim(this.G,t,i,s)},t.prototype.setRunJumpAnim=function(t,i,s){this.setAnim(this.I,t,i,s)},t.prototype.setFallAnim=function(t,i,s){this.setAnim(this.K,t,i,s)},t.prototype.setWalkKey=function(t){this.X=t.toLowerCase()},t.prototype.setWalkBackKey=function(t){this.Y=t.toLowerCase()},t.prototype.setTurnLeftKey=function(t){this.Z=t.toLowerCase()},t.prototype.setTurnRightKey=function(t){this.$=t.toLowerCase()},t.prototype.setStrafeLeftKey=function(t){this.tt=t.toLowerCase()},t.prototype.setStrafeRightKey=function(t){this.it=t.toLowerCase()},t.prototype.setJumpKey=function(t){this.st=t.toLowerCase()},t.prototype.setCameraElasticity=function(t){this.ht=t},t.prototype.setCameraTarget=function(t){this.nt.copyFrom(t)},t.prototype.cameraCollisionChanged=function(){this.Ct=this.Kt.checkCollisions},t.prototype.setNoFirstPerson=function(t){this.et=t},t.prototype.checkAnims=function(t){for(var i=0,s=this.W;i<s.length;i++){var h=s[i];null!=t?null!=t.getAnimationRange(h.Xt)&&(h.Zt=!0):h.Zt=!1}},t.prototype.setMode=function(t){this.mode=t,this.ut=t},t.prototype.Gt=function(t){var i=t.getWorldMatrix(),s=h.Vector3.FromFloatArray(i.m,0),n=h.Vector3.FromFloatArray(i.m,4),e=h.Vector3.FromFloatArray(i.m,8),u=h.Vector3.Cross(s,n);h.Vector3.Dot(u,e)<0?(this.rt=!0,this.ft=1):(this.rt=!1,this.ft=-1)},t.prototype.setFaceForward=function(t){this.rt?(this.ii=t?Math.PI/2:3*Math.PI/2,this.si=t?1:-1):(this.ii=t?3*Math.PI/2:Math.PI/2,this.si=t?-1:1)},t.prototype.checkAGs=function(t){for(var i=0,s=this.W;i<s.length;i++){var h=s[i];null!=t[h.Xt]&&(h.Yt=t[h.Xt],h.Zt=!0)}},t.prototype.start=function(){this.ot||(this.ot=!0,this.Nt.reset(),this.Ot=0,this.qt=.001,this.vt=!1,this.hi(),this.enableKeyBoard(!0),this.Ht.registerBeforeRender(this.Pt))},t.prototype.stop=function(){this.ot&&(this.ot=!1,this.Ht.unregisterBeforeRender(this.Pt),this.enableKeyBoard(!1),this.at=null)},t.prototype.pauseAnim=function(){this.ct=!0},t.prototype.resumeAnim=function(){this.ct=!1},t.prototype.ni=function(){return h.Vector3.Dot(this.Ft.forward,this.Ft.position.subtract(this.Kt.position))<0?1:-1},t.prototype.Qt=function(){this.lt.copyFrom(this.Ft.position);var t=null,i=this.Ht.getEngine().getDeltaTime()/1e3;this.Nt.ei&&!this.dt?(this.vt=!1,this.qt=0,t=this.ui(i)):this.anyMovement()||this.dt?(this.vt=!1,this.qt=0,t=this.ri(i)):this.dt||(t=this.fi(i)),!this.ct&&this.Et&&null!=t&&this.at!==t&&(t.Zt&&(this.Dt?(null!=this.at&&this.at.Zt&&this.at.Yt.stop(),t.Yt.play(t.$t)):this.It.beginAnimation(t.Xt,t.$t,t.ti)),this.at=t),this.hi()},t.prototype.ui=function(t){var i=null;i=this.I,0===this.jt&&(this.Mt=this.Ft.position.y);var s=(this.M-this.q*this.jt)*t-.5*this.q*t*t;this.jt=this.jt+t;var n,e=0;if(1!=this.mode&&(this.Ft.rotation.y=this.ii-this.Kt.alpha),this.yt||this.pt?(this.yt?e=this.v*t:this.pt&&(e=this.u*t),(n=this.oi.clone()).y=0,(n=n.normalize()).scaleToRef(e,n),n.y=s):(n=new h.Vector3(0,s,0),i=this.G),this.Ft.moveWithCollisions(n),s<0)if(this.Ft.position.y>this.lt.y||this.Ft.position.y===this.lt.y&&n.length()>.001)this.ci();else if(this.Ft.position.y<this.Mt){var u=this.Ft.position.subtract(this.lt);this.ai(u,n,.001)?i=this.K:this.li(u)<=this.C&&this.ci()}return i},t.prototype.ci=function(){this.Nt.ei=!1,this.jt=0,this.pt=!1,this.yt=!1},t.prototype.ai=function(t,i,s){return Math.abs(t.x-i.x)<s&&Math.abs(t.y-i.y)<s&&Math.abs(t.z-i.z)<s},t.prototype.li=function(t){return Math.atan(Math.abs(t.y/Math.sqrt(t.x*t.x+t.z*t.z)))},t.prototype.ri=function(t){var i=this.Ot*this.q;this.bt=i*t+this.q*t*t/2,this.Ot=this.Ot+t;var s=!1,h=null;if(this.dt)this.oi.y=-this.bt,s=!0;else{this.pt=!1,this.yt=!1,1!=this.mode&&(this.Ft.rotation.y=this.ii-this.Kt.alpha);var n=void 0;switch(!0){case this.Nt.A:var e=0;this.Nt.vi?(this.yt=!0,e=this.v*t,h=this.H):(this.pt=!0,e=this.u*t,h=this.A),this.oi=this.Ft.calcMovePOV(0,-this.bt,this.si*e),s=!0;break;case this.Nt.bi:this.oi=this.Ft.calcMovePOV(0,-this.bt,-this.si*(this.k*t)),h=this.D,s=!0;break;case this.Nt.wi:n=this.ft*this.ni(),this.oi=this.Ft.calcMovePOV(n*(this.j*t),-this.bt,0),h=-this.si*n>0?this.T:this.U,s=!0;break;case this.Nt.ki:n=-this.ft*this.ni(),this.oi=this.Ft.calcMovePOV(n*(this.O*t),-this.bt,0),h=-this.si*n>0?this.T:this.U,s=!0}}if(!this.Nt.wi&&!this.Nt.ki&&(this.Nt.N||this.Nt.P))if(1==this.mode){this.xt||(this.gt=-this.si*this.ni(),this.rt&&(this.gt=-this.gt),this.xt=!0);var u=this.gt;this.Nt.N?this.Nt.A||(this.Nt.bi?u=-this.gt:h=this.gt>0?this.P:this.N):this.Nt.A?u=-this.gt:this.Nt.bi||(u=-this.gt,h=this.gt>0?this.N:this.P),this.Ft.rotation.y=this.Ft.rotation.y+this.g*t*u}else{u=1;this.Nt.N?(this.Nt.bi&&(u=-1),s||(h=this.N)):(this.Nt.A&&(u=-1),s||(u=-1,h=this.P)),this.Kt.alpha=this.Kt.alpha+u*this.g*t,this.Ft.rotation.y=this.ii-this.Kt.alpha}if(s&&this.oi.length()>.001)if(this.Ft.moveWithCollisions(this.oi),this.Ft.position.y>this.lt.y){var r=this.Ft.position.subtract(this.lt),f=this.li(r);f>=this.J?this.L>0?(0==this.R&&this._.copyFrom(this.lt),this.R=this.R+(this.Ft.position.y-this.lt.y),this.R>this.L&&(this.R=0,this.Ft.position.copyFrom(this._),this.di())):(this.Ft.position.copyFrom(this.lt),this.di()):(this.R=0,f>this.C?(this.kt=0,this.dt=!1):this.di())}else if(this.Ft.position.y<this.lt.y){r=this.Ft.position.subtract(this.lt);this.ai(r,this.oi,.001)?(this.dt=!0,this.kt++,this.kt>this.wt&&(h=this.K)):this.li(r)<=this.C?this.di():(this.kt=0,this.dt=!1)}else this.di();return h},t.prototype.di=function(){this.Ot=0,this.kt=0,this.dt=!1},t.prototype.fi=function(t){if(this.vt)return this.F;this.pt=!1,this.yt=!1,this.Ot=0;var i=this.F;if(this.kt=0,0===t)this.bt=5;else{var s=this.qt*this.q;this.bt=s*t+this.q*t*t/2,this.qt=this.qt+t}if(this.bt<.01)return i;var n=new h.Vector3(0,-this.bt,0);if(1!=this.mode&&(this.Ft.rotation.y=this.ii-this.Kt.alpha),this.Ft.moveWithCollisions(n),this.Ft.position.y>this.lt.y||this.Ft.position.y===this.lt.y)this.pi();else if(this.Ft.position.y<this.lt.y){var e=this.Ft.position.subtract(this.lt);this.ai(e,n,.001)||(this.li(e)<=this.C?(this.pi(),this.Ft.position.copyFrom(this.lt)):(this.yi(),i=this.V))}return i},t.prototype.pi=function(){this.St++,this.St>this.Bt&&(this.vt=!0,this.qt=0)},t.prototype.yi=function(){this.vt=!1,this.St=0},t.prototype.hi=function(){0==this.R&&this.Ft.position.addToRef(this.nt,this.Kt.target),this.Kt.radius>this.Kt.lowerRadiusLimit&&this.ht&&this.Mi(),this.Kt.radius<=this.Kt.lowerRadiusLimit?this.et||this.Jt||(this.Ft.visibility=0,this.Kt.checkCollisions=!1,this.ut=this.mode,this.mode=0,this.Jt=!0):(this.Jt=!1,this.mode=this.ut,this.Ft.visibility=1,this.Kt.checkCollisions=this.Ct)},t.prototype.Mi=function(){var t=this;this.Kt.position.subtractToRef(this.Kt.target,this.Rt),this.Lt.origin=this.Kt.target,this.Lt.length=this.Rt.length(),this.Lt.direction=this.Rt.normalize();var i=this.Ht.pickWithRay(this.Lt,(function(i){return!(i==t.Ft||!i.checkCollisions)}),!0);if(i.hit)if(this.Kt.checkCollisions){var s=this.Kt.target.subtract(i.pickedPoint).normalize().scale(this._t);i.pickedPoint.addToRef(s,this.Kt.position)}else{var h=i.pickedPoint.subtract(this.Kt.target).length();this.Kt.radius=h-this._t}},t.prototype.anyMovement=function(){return this.Nt.A||this.Nt.bi||this.Nt.N||this.Nt.P||this.Nt.wi||this.Nt.ki},t.prototype.Wt=function(t){if(t.key&&!t.repeat){switch(t.key.toLowerCase()){case this.st:this.Nt.ei=!0;break;case"capslock":this.Nt.vi=!this.Nt.vi;break;case"shift":this.Nt.vi=!0;break;case"arrowup":case this.X:this.Nt.A=!0;break;case"arrowleft":case this.Z:this.Nt.N=!0;break;case"arrowright":case this.$:this.Nt.P=!0;break;case"arrowdown":case this.Y:this.Nt.bi=!0;break;case this.tt:this.Nt.wi=!0;break;case this.it:this.Nt.ki=!0}this.At=this.anyMovement()}},t.prototype.Ut=function(t){if(t.key){switch(t.key.toLowerCase()){case"shift":this.Nt.vi=!1;break;case"arrowup":case this.X:this.Nt.A=!1;break;case"arrowleft":case this.Z:this.Nt.N=!1,this.xt=!1;break;case"arrowright":case this.$:this.Nt.P=!1,this.xt=!1;break;case"arrowdown":case this.Y:this.Nt.bi=!1;break;case this.tt:this.Nt.wi=!1;break;case this.it:this.Nt.ki=!1}this.At=this.anyMovement()}},t.prototype.enableKeyBoard=function(t){var i=this.Ht.getEngine().getRenderingCanvas();t?(i.addEventListener("keyup",this.Tt,!1),i.addEventListener("keydown",this.Vt,!1)):(i.removeEventListener("keyup",this.Tt,!1),i.removeEventListener("keydown",this.Vt,!1))},t.prototype.walk=function(t){this.Nt.A=t},t.prototype.walkBack=function(t){this.Nt.bi=t},t.prototype.run=function(t){this.Nt.A=t,this.Nt.vi=t},t.prototype.turnLeft=function(t){this.Nt.N=t,this.xt=t},t.prototype.turnRight=function(t){this.Nt.P=t,this.xt=t},t.prototype.strafeLeft=function(t){this.Nt.wi=t},t.prototype.strafeRight=function(t){this.Nt.ki=t},t.prototype.jump=function(){this.Nt.ei=!0},t.prototype.idle=function(){this.Nt.reset()},t}(),e=function(t){this.$t=!0,this.ti=1,this.Zt=!1,this.Xt=t},u=function(){function t(){this.A=!1,this.bi=!1,this.vi=!1,this.P=!1,this.N=!1,this.ki=!1,this.wi=!1,this.ei=!1,this.reset()}return t.prototype.reset=function(){this.A=!1,this.bi=!1,this.P=!1,this.N=!1,this.ki=!1,this.wi=!1,this.ei=!1,this.vi=!1},t}()}])}));
//# sourceMappingURL=CharacterController.js.map