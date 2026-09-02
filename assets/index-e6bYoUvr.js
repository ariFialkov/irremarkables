(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="166",xh=0,Xa=1,vh=2,wc=1,Ec=2,En=3,Yn=0,Fe=1,je=2,Wn=0,Vi=1,fr=2,Ya=3,qa=4,yh=5,oi=100,Mh=101,Sh=102,bh=103,wh=104,Eh=200,Th=201,Ah=202,Rh=203,To=204,Ao=205,Ch=206,Ph=207,Lh=208,Ih=209,Uh=210,Dh=211,Nh=212,Oh=213,Fh=214,zh=0,kh=1,Bh=2,pr=3,Vh=4,Hh=5,Gh=6,Wh=7,da=0,Xh=1,Yh=2,Xn=0,qh=1,Kh=2,$h=3,Tc=4,jh=5,Zh=6,Jh=7,Ka="attached",Qh="detached",Ac=300,Wi=301,Xi=302,Ro=303,Co=304,Ar=306,mr=1e3,li=1001,Po=1002,ze=1003,tu=1004,ws=1005,Ze=1006,zr=1007,ci=1008,Cn=1009,Rc=1010,Cc=1011,ps=1012,fa=1013,hi=1014,an=1015,gs=1016,pa=1017,ma=1018,Yi=1020,Pc=35902,Lc=1021,Ic=1022,Qe=1023,Uc=1024,Dc=1025,Hi=1026,qi=1027,ga=1028,_a=1029,Nc=1030,xa=1031,va=1033,ar=33776,lr=33777,cr=33778,hr=33779,Lo=35840,Io=35841,Uo=35842,Do=35843,No=36196,Oo=37492,Fo=37496,zo=37808,ko=37809,Bo=37810,Vo=37811,Ho=37812,Go=37813,Wo=37814,Xo=37815,Yo=37816,qo=37817,Ko=37818,$o=37819,jo=37820,Zo=37821,ur=36492,Jo=36494,Qo=36495,Oc=36283,ta=36284,ea=36285,na=36286,Fc=2200,ia=2201,eu=2202,gr=2300,sa=2301,kr=2302,Fi=2400,zi=2401,_r=2402,ya=2500,nu=2501,iu=3200,su=3201,Ma=0,ru=1,Hn="",Ie="srgb",qn="srgb-linear",Sa="display-p3",Rr="display-p3-linear",xr="linear",le="srgb",vr="rec709",yr="p3",pi=7680,$a=519,ou=512,au=513,lu=514,zc=515,cu=516,hu=517,uu=518,du=519,ra=35044,ja="300 es",Rn=2e3,Mr=2001;class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,oa=180/Math.PI;function mn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[r&255]+Pe[r>>8&255]+Pe[r>>16&255]+Pe[r>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Ce(r,t,e){return Math.max(t,Math.min(e,r))}function fu(r,t){return(r%t+t)%t}function Vr(r,t,e){return(1-e)*r+e*t}function pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function se(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],x=i[1],v=i[4],y=i[7],C=i[2],T=i[5],R=i[8];return s[0]=o*_+a*x+l*C,s[3]=o*p+a*v+l*T,s[6]=o*g+a*y+l*R,s[1]=c*_+h*x+u*C,s[4]=c*p+h*v+u*T,s[7]=c*g+h*y+u*R,s[2]=f*_+d*x+m*C,s[5]=f*p+d*v+m*T,s[8]=f*g+d*y+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new Vt;function kc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pu(){const r=Sr("canvas");return r.style.display="block",r}const Za={};function ba(r){r in Za||(Za[r]=!0,console.warn(r))}function mu(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ja=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qa=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Es={[qn]:{transfer:xr,primaries:vr,toReference:r=>r,fromReference:r=>r},[Ie]:{transfer:le,primaries:vr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Rr]:{transfer:xr,primaries:yr,toReference:r=>r.applyMatrix3(Qa),fromReference:r=>r.applyMatrix3(Ja)},[Sa]:{transfer:le,primaries:yr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Qa),fromReference:r=>r.applyMatrix3(Ja).convertLinearToSRGB()}},gu=new Set([qn,Rr]),ie={enabled:!0,_workingColorSpace:qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!gu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Es[t].toReference,i=Es[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Es[r].primaries},getTransfer:function(r){return r===Hn?xr:Es[r].transfer}};function Gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let mi;class _u{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=Sr("canvas")),mi.width=t.width,mi.height=t.height;const n=mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xu=0;class Bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wr(i[o].image)):s.push(Wr(i[o]))}else s=Wr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Wr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_u.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vu=0;class Ue extends di{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=li,i=li,s=Ze,o=ci,a=Qe,l=Cn,c=Ue.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=mn(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Ac;Ue.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(d+1)/2,C=(g+1)/2,T=(h+f)/4,R=(u+_)/4,I=(m+p)/4;return v>y&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=R/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=I/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=R/s,i=I/s),this.set(n,i,s,e),this}let x=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yu extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vc extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mu extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Me{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let p=1-a;const g=l*f+c*d+h*m+u*_,x=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,g*x);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const y=a*x;if(l=l*p+f*y,c=c*p+d*y,h=h*p+m*y,u=u*p+_*y,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new E,tl=new Me;class Kn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),As.subVectors(this.max,Ji),gi.subVectors(t.a,Ji),_i.subVectors(t.b,Ji),xi.subVectors(t.c,Ji),Dn.subVectors(_i,gi),Nn.subVectors(xi,_i),Zn.subVectors(gi,xi);let e=[0,-Dn.z,Dn.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,Dn.z,0,-Dn.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-Dn.y,Dn.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!Yr(e,gi,_i,xi,As)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,gi,_i,xi,As))?!1:(Rs.crossVectors(Dn,Nn),e=[Rs.x,Rs.y,Rs.z],Yr(e,gi,_i,xi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new E,new E,new E,new E,new E,new E,new E,new E],en=new E,Ts=new Kn,gi=new E,_i=new E,xi=new E,Dn=new E,Nn=new E,Zn=new E,Ji=new E,As=new E,Rs=new E,Jn=new E;function Yr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Jn.fromArray(r,s);const a=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Su=new Kn,Qi=new E,qr=new E;class In{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Su.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(qr)),this.expandByPoint(Qi.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new E,Kr=new E,Cs=new E,On=new E,$r=new E,Ps=new E,jr=new E;class wa{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Kr.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Kr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Cs),a=On.dot(this.direction),l=-On.dot(Cs),c=On.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=s*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Kr).addScaledVector(Cs,f),d}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,i,s){$r.subVectors(e,t),Ps.subVectors(n,t),jr.crossVectors($r,Ps);let o=this.direction.dot(jr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(Ps.crossVectors(On,Ps));if(l<0)return null;const c=a*this.direction.dot($r.cross(On));if(c<0||l+c>o)return null;const h=-a*On.dot(jr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,m,_,p){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,m,_,p)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/vi.setFromMatrixColumn(t,0).length(),s=1/vi.setFromMatrixColumn(t,1).length(),o=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bu,t,wu)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Fn.crossVectors(n,Ve),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Fn.crossVectors(n,Ve)),Fn.normalize(),Ls.crossVectors(Ve,Fn),i[0]=Fn.x,i[4]=Ls.x,i[8]=Ve.x,i[1]=Fn.y,i[5]=Ls.y,i[9]=Ve.y,i[2]=Fn.z,i[6]=Ls.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],x=n[3],v=n[7],y=n[11],C=n[15],T=i[0],R=i[4],I=i[8],w=i[12],S=i[1],L=i[5],B=i[9],V=i[13],Y=i[2],K=i[6],X=i[10],Q=i[14],W=i[3],gt=i[7],xt=i[11],bt=i[15];return s[0]=o*T+a*S+l*Y+c*W,s[4]=o*R+a*L+l*K+c*gt,s[8]=o*I+a*B+l*X+c*xt,s[12]=o*w+a*V+l*Q+c*bt,s[1]=h*T+u*S+f*Y+d*W,s[5]=h*R+u*L+f*K+d*gt,s[9]=h*I+u*B+f*X+d*xt,s[13]=h*w+u*V+f*Q+d*bt,s[2]=m*T+_*S+p*Y+g*W,s[6]=m*R+_*L+p*K+g*gt,s[10]=m*I+_*B+p*X+g*xt,s[14]=m*w+_*V+p*Q+g*bt,s[3]=x*T+v*S+y*Y+C*W,s[7]=x*R+v*L+y*K+C*gt,s[11]=x*I+v*B+y*X+C*xt,s[15]=x*w+v*V+y*Q+C*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],p=t[11],g=t[15];return m*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+p*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+g*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],p=t[14],g=t[15],x=u*p*c-_*f*c+_*l*d-a*p*d-u*l*g+a*f*g,v=m*f*c-h*p*c-m*l*d+o*p*d+h*l*g-o*f*g,y=h*_*c-m*u*c+m*a*d-o*_*d-h*a*g+o*u*g,C=m*u*l-h*_*l-m*a*f+o*_*f+h*a*p-o*u*p,T=e*x+n*v+i*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=x*R,t[1]=(_*f*s-u*p*s-_*i*d+n*p*d+u*i*g-n*f*g)*R,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*g+n*l*g)*R,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*R,t[4]=v*R,t[5]=(h*p*s-m*f*s+m*i*d-e*p*d-h*i*g+e*f*g)*R,t[6]=(m*l*s-o*p*s-m*i*c+e*p*c+o*i*g-e*l*g)*R,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*R,t[8]=y*R,t[9]=(m*u*s-h*_*s-m*n*d+e*_*d+h*n*g-e*u*g)*R,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*g+e*a*g)*R,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*R,t[12]=C*R,t[13]=(h*_*i-m*u*i+m*n*f-e*_*f-h*n*p+e*u*p)*R,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*p-e*a*p)*R,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,m=s*u,_=o*h,p=o*u,g=a*u,x=l*c,v=l*h,y=l*u,C=n.x,T=n.y,R=n.z;return i[0]=(1-(_+g))*C,i[1]=(d+y)*C,i[2]=(m-v)*C,i[3]=0,i[4]=(d-y)*T,i[5]=(1-(f+g))*T,i[6]=(p+x)*T,i[7]=0,i[8]=(m+v)*R,i[9]=(p-x)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=vi.set(i[0],i[1],i[2]).length();const o=vi.set(i[4],i[5],i[6]).length(),a=vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/s,h=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Rn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(a===Rn)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Mr)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Rn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h;let m,_;if(a===Rn)m=(o+s)*u,_=-2*u;else if(a===Mr)m=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new E,nn=new Wt,bu=new E(0,0,0),wu=new E(1,1,1),Fn=new E,Ls=new E,Ve=new E,el=new Wt,nl=new Me;class Se{constructor(t=0,e=0,n=0,i=Se.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Se.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eu=0;const il=new E,yi=new Me,Mn=new Wt,Is=new E,ts=new E,Tu=new E,Au=new Me,sl=new E(1,0,0),rl=new E(0,1,0),ol=new E(0,0,1),al={type:"added"},Ru={type:"removed"},Mi={type:"childadded",child:null},Zr={type:"childremoved",child:null};class ye extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new E,e=new Se,n=new Me,i=new E(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Vt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(ol,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ts,Is,this.up):Mn.lookAt(Is,ts,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(Mn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(al),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ru),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(al),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Au,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new E(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new E,Sn=new E,Jr=new E,bn=new E,Si=new E,bi=new E,ll=new E,Qr=new E,to=new E,eo=new E;class on{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){sn.subVectors(i,e),Sn.subVectors(n,e),Jr.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(Sn),l=sn.dot(Jr),c=Sn.dot(Sn),h=Sn.dot(Jr),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Si.subVectors(i,n),bi.subVectors(s,n),Qr.subVectors(t,n);const l=Si.dot(Qr),c=bi.dot(Qr);if(l<=0&&c<=0)return e.copy(n);to.subVectors(t,i);const h=Si.dot(to),u=bi.dot(to);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Si,o);eo.subVectors(t,s);const d=Si.dot(eo),m=bi.dot(eo);if(m>=0&&d<=m)return e.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(bi,a);const p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return ll.subVectors(s,i),a=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(ll,a);const g=1/(p+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(Si,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function no(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=fu(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=no(o,s,t+1/3),this.g=no(o,s,t),this.b=no(o,s,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=Gc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ie.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ce(Le.r*255,0,255))*65536+Math.round(Ce(Le.g*255,0,255))*256+Math.round(Ce(Le.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,s=Le.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ie){ie.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Us);const n=Vr(zn.h,Us.h,e),i=Vr(zn.s,Us.s,e),s=Vr(zn.l,Us.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new ft;ft.NAMES=Gc;let Cu=0;class $n extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Vi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Ao,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==To&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class cn extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Se,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new E,Ds=new dt;class ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ba("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ra&&(t.usage=this.usage),t}}class Ea extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wc extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pu=0;const qe=new Wt,io=new ye,wi=new E,He=new Kn,es=new Kn,Te=new E;class Ee extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kc(t)?Wc:Ea)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];es.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(He.min,es.min),He.expandByPoint(Te),Te.addVectors(He.max,es.max),He.expandByPoint(Te)):(He.expandByPoint(es.min),He.expandByPoint(es.max))}He.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Te.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(wi.fromBufferAttribute(t,c),Te.add(wi)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new E,l[I]=new E;const c=new E,h=new E,u=new E,f=new dt,d=new dt,m=new dt,_=new E,p=new E;function g(I,w,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[I].add(_),a[w].add(_),a[S].add(_),l[I].add(p),l[w].add(p),l[S].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,w=x.length;I<w;++I){const S=x[I],L=S.start,B=S.count;for(let V=L,Y=L+B;V<Y;V+=3)g(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const v=new E,y=new E,C=new E,T=new E;function R(I){C.fromBufferAttribute(i,I),T.copy(C);const w=a[I];v.copy(w),v.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(T,w);const L=y.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,L)}for(let I=0,w=x.length;I<w;++I){const S=x[I],L=S.start,B=S.count;for(let V=L,Y=L+B;V<Y;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new E,s=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new Wt,Qn=new wa,Ns=new In,hl=new E,Ei=new E,Ti=new E,Ai=new E,so=new E,Os=new E,Fs=new dt,zs=new dt,ks=new dt,ul=new E,dl=new E,fl=new E,Bs=new E,Vs=new E;class jt extends ye{constructor(t=new Ee,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(so.fromBufferAttribute(u,t),o?Os.addScaledVector(so,h):Os.addScaledVector(so.sub(e),h))}e.add(Os)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),Qn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Ns,hl)===null||Qn.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(cl.copy(s).invert(),Qn.copy(t.ray).applyMatrix4(cl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,C=v;y<C;y+=3){const T=a.getX(y),R=a.getX(y+1),I=a.getX(y+2);i=Hs(this,g,t,n,c,h,u,T,R,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const x=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);i=Hs(this,o,t,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,C=v;y<C;y+=3){const T=y,R=y+1,I=y+2;i=Hs(this,g,t,n,c,h,u,T,R,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const x=p,v=p+1,y=p+2;i=Hs(this,o,t,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Lu(r,t,e,n,i,s,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Yn,a),l===null)return null;Vs.copy(a),Vs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Vs);return c<e.near||c>e.far?null:{distance:c,point:Vs.clone(),object:r}}function Hs(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ei),r.getVertexPosition(l,Ti),r.getVertexPosition(c,Ai);const h=Lu(r,t,e,n,Ei,Ti,Ai,Bs);if(h){i&&(Fs.fromBufferAttribute(i,a),zs.fromBufferAttribute(i,l),ks.fromBufferAttribute(i,c),h.uv=on.getInterpolation(Bs,Ei,Ti,Ai,Fs,zs,ks,new dt)),s&&(Fs.fromBufferAttribute(s,a),zs.fromBufferAttribute(s,l),ks.fromBufferAttribute(s,c),h.uv1=on.getInterpolation(Bs,Ei,Ti,Ai,Fs,zs,ks,new dt)),o&&(ul.fromBufferAttribute(o,a),dl.fromBufferAttribute(o,l),fl.fromBufferAttribute(o,c),h.normal=on.getInterpolation(Bs,Ei,Ti,Ai,ul,dl,fl,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new E,materialIndex:0};on.getNormal(Ei,Ti,Ai,u.normal),h.face=u}return h}class hn extends Ee{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function m(_,p,g,x,v,y,C,T,R,I,w){const S=y/R,L=C/I,B=y/2,V=C/2,Y=T/2,K=R+1,X=I+1;let Q=0,W=0;const gt=new E;for(let xt=0;xt<X;xt++){const bt=xt*L-V;for(let Xt=0;Xt<K;Xt++){const Yt=Xt*S-B;gt[_]=Yt*x,gt[p]=bt*v,gt[g]=Y,c.push(gt.x,gt.y,gt.z),gt[_]=0,gt[p]=0,gt[g]=T>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(Xt/R),u.push(1-xt/I),Q+=1}}for(let xt=0;xt<I;xt++)for(let bt=0;bt<R;bt++){const Xt=f+bt+K*xt,Yt=f+bt+K*(xt+1),q=f+(bt+1)+K*(xt+1),nt=f+(bt+1)+K*xt;l.push(Xt,Yt,nt),l.push(Yt,q,nt),W+=6}a.addGroup(d,W,w),d+=W,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(r){const t={};for(let e=0;e<r.length;e++){const n=Ki(r[e]);for(const i in n)t[i]=n[i]}return t}function Iu(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Xc(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Uu={clone:Ki,merge:Oe};var Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=Iu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new E,pl=new dt,ml=new dt;class $e extends Yc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ci=1;class Ou extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(Ri,Ci,t,e);i.layers=this.layers,this.add(i);const s=new $e(Ri,Ci,t,e);s.layers=this.layers,this.add(s);const o=new $e(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const a=new $e(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const l=new $e(Ri,Ci,t,e);l.layers=this.layers,this.add(l);const c=new $e(Ri,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class qc extends Ue{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fu extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hn(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Wn});s.uniforms.tEquirect.value=e;const o=new jt(i,s),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=Ze),new Ou(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const ro=new E,zu=new E,ku=new Vt;class si{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ro.subVectors(n,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ku.getNormalMatrix(t),i=this.coplanarPoint(ro).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new In,Gs=new E;class Ta{constructor(t=new si,e=new si,n=new si,i=new si,s=new si,o=new si){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],_=i[10],p=i[11],g=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,p-d,y-g).normalize(),n[1].setComponents(l+s,f+c,p+d,y+g).normalize(),n[2].setComponents(l+o,f+h,p+m,y+x).normalize(),n[3].setComponents(l-o,f-h,p-m,y-x).normalize(),n[4].setComponents(l-a,f-u,p-_,y-v).normalize(),e===Rn)n[5].setComponents(l+a,f+u,p+_,y+v).normalize();else if(e===Mr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Gs.x=i.normal.x>0?t.max.x:t.min.x,Gs.y=i.normal.y>0?t.max.y:t.min.y,Gs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bu(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,a),u.count===-1&&f.length===0&&r.bufferSubData(c,0,h),f.length!==0){for(let d=0,m=f.length;d<m;d++){const _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class _s extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const x=g*f-o;for(let v=0;v<c;v++){const y=v*u-s;m.push(y,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const v=x+c*g,y=x+c*(g+1),C=x+1+c*(g+1),T=x+1+c*g;d.push(v,y,T),d.push(y,C,T)}this.setIndex(d),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$u=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ud=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,of=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,If=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Of=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Vu,alphahash_pars_fragment:Hu,alphamap_fragment:Gu,alphamap_pars_fragment:Wu,alphatest_fragment:Xu,alphatest_pars_fragment:Yu,aomap_fragment:qu,aomap_pars_fragment:Ku,batching_pars_vertex:$u,batching_vertex:ju,begin_vertex:Zu,beginnormal_vertex:Ju,bsdfs:Qu,iridescence_fragment:td,bumpmap_pars_fragment:ed,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:sd,clipping_planes_vertex:rd,color_fragment:od,color_pars_fragment:ad,color_pars_vertex:ld,color_vertex:cd,common:hd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:dd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:_d,colorspace_pars_fragment:xd,envmap_fragment:vd,envmap_common_pars_fragment:yd,envmap_pars_fragment:Md,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Ud,envmap_vertex:bd,fog_vertex:wd,fog_pars_vertex:Ed,fog_fragment:Td,fog_pars_fragment:Ad,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Id,lights_toon_fragment:Dd,lights_toon_pars_fragment:Nd,lights_phong_fragment:Od,lights_phong_pars_fragment:Fd,lights_physical_fragment:zd,lights_physical_pars_fragment:kd,lights_fragment_begin:Bd,lights_fragment_maps:Vd,lights_fragment_end:Hd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:Yd,map_fragment:qd,map_pars_fragment:Kd,map_particle_fragment:$d,map_particle_pars_fragment:jd,metalnessmap_fragment:Zd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Qd,morphcolor_vertex:tf,morphnormal_vertex:ef,morphtarget_pars_vertex:nf,morphtarget_vertex:sf,normal_fragment_begin:rf,normal_fragment_maps:of,normal_pars_fragment:af,normal_pars_vertex:lf,normal_vertex:cf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:ff,iridescence_pars_fragment:pf,opaque_fragment:mf,packing:gf,premultiplied_alpha_fragment:_f,project_vertex:xf,dithering_fragment:vf,dithering_pars_fragment:yf,roughnessmap_fragment:Mf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:bf,shadowmap_pars_vertex:wf,shadowmap_vertex:Ef,shadowmask_pars_fragment:Tf,skinbase_vertex:Af,skinning_pars_vertex:Rf,skinning_vertex:Cf,skinnormal_vertex:Pf,specularmap_fragment:Lf,specularmap_pars_fragment:If,tonemapping_fragment:Uf,tonemapping_pars_fragment:Df,transmission_fragment:Nf,transmission_pars_fragment:Of,uv_pars_fragment:Ff,uv_pars_vertex:zf,uv_vertex:kf,worldpos_vertex:Bf,background_vert:Vf,background_frag:Hf,backgroundCube_vert:Gf,backgroundCube_frag:Wf,cube_vert:Xf,cube_frag:Yf,depth_vert:qf,depth_frag:Kf,distanceRGBA_vert:$f,distanceRGBA_frag:jf,equirect_vert:Zf,equirect_frag:Jf,linedashed_vert:Qf,linedashed_frag:tp,meshbasic_vert:ep,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:sp,meshmatcap_vert:rp,meshmatcap_frag:op,meshnormal_vert:ap,meshnormal_frag:lp,meshphong_vert:cp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:dp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:_p,shadow_frag:xp,sprite_vert:vp,sprite_frag:yp},ut={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},dn={basic:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ft(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Oe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Oe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ft(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Oe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Oe([ut.points,ut.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Oe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Oe([ut.common,ut.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Oe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Oe([ut.sprite,ut.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Oe([ut.common,ut.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Oe([ut.lights,ut.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};dn.physical={uniforms:Oe([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ws={r:0,b:0,g:0},ei=new Se,Mp=new Wt;function Sp(r,t,e,n,i,s,o){const a=new ft(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const y=m(x);y===null?g(a,l):y&&y.isColor&&(g(y,1),v=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,v){const y=m(v);y&&(y.isCubeTexture||y.mapping===Ar)?(h===void 0&&(h=new jt(new hn(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ki(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ei.copy(v.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mp.makeRotationFromEuler(ei)),h.material.toneMapped=ie.getTransfer(y.colorSpace)!==le,(u!==y||f!==y.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new jt(new _s(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ki(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,v){x.getRGB(Ws,Xc(r)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:_,addToRenderList:p}}function bp(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,L,B,V,Y){let K=!1;const X=u(V,B,L);s!==X&&(s=X,c(s.object)),K=d(S,V,B,Y),K&&m(S,V,B,Y),Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(S,L,B,V),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,L,B){const V=B.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let K=Y[L.id];K===void 0&&(K={},Y[L.id]=K);let X=K[V];return X===void 0&&(X=f(l()),K[V]=X),X}function f(S){const L=[],B=[],V=[];for(let Y=0;Y<e;Y++)L[Y]=0,B[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:V,object:S,attributes:{},index:null}}function d(S,L,B,V){const Y=s.attributes,K=L.attributes;let X=0;const Q=B.getAttributes();for(const W in Q)if(Q[W].location>=0){const xt=Y[W];let bt=K[W];if(bt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor)),xt===void 0||xt.attribute!==bt||bt&&xt.data!==bt.data)return!0;X++}return s.attributesNum!==X||s.index!==V}function m(S,L,B,V){const Y={},K=L.attributes;let X=0;const Q=B.getAttributes();for(const W in Q)if(Q[W].location>=0){let xt=K[W];xt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor));const bt={};bt.attribute=xt,xt&&xt.data&&(bt.data=xt.data),Y[W]=bt,X++}s.attributes=Y,s.attributesNum=X,s.index=V}function _(){const S=s.newAttributes;for(let L=0,B=S.length;L<B;L++)S[L]=0}function p(S){g(S,0)}function g(S,L){const B=s.newAttributes,V=s.enabledAttributes,Y=s.attributeDivisors;B[S]=1,V[S]===0&&(r.enableVertexAttribArray(S),V[S]=1),Y[S]!==L&&(r.vertexAttribDivisor(S,L),Y[S]=L)}function x(){const S=s.newAttributes,L=s.enabledAttributes;for(let B=0,V=L.length;B<V;B++)L[B]!==S[B]&&(r.disableVertexAttribArray(B),L[B]=0)}function v(S,L,B,V,Y,K,X){X===!0?r.vertexAttribIPointer(S,L,B,Y,K):r.vertexAttribPointer(S,L,B,V,Y,K)}function y(S,L,B,V){_();const Y=V.attributes,K=B.getAttributes(),X=L.defaultAttributeValues;for(const Q in K){const W=K[Q];if(W.location>=0){let gt=Y[Q];if(gt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){const xt=gt.normalized,bt=gt.itemSize,Xt=t.get(gt);if(Xt===void 0)continue;const Yt=Xt.buffer,q=Xt.type,nt=Xt.bytesPerElement,vt=q===r.INT||q===r.UNSIGNED_INT||gt.gpuType===fa;if(gt.isInterleavedBufferAttribute){const ht=gt.data,At=ht.stride,Ft=gt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<W.locationSize;Ht++)g(W.location+Ht,ht.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<W.locationSize;Ht++)p(W.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let Ht=0;Ht<W.locationSize;Ht++)v(W.location+Ht,bt/W.locationSize,q,xt,At*nt,(Ft+bt/W.locationSize*Ht)*nt,vt)}else{if(gt.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)g(W.location+ht,gt.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ht=0;ht<W.locationSize;ht++)p(W.location+ht);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let ht=0;ht<W.locationSize;ht++)v(W.location+ht,bt/W.locationSize,q,xt,bt*nt,bt/W.locationSize*ht*nt,vt)}}else if(X!==void 0){const xt=X[Q];if(xt!==void 0)switch(xt.length){case 2:r.vertexAttrib2fv(W.location,xt);break;case 3:r.vertexAttrib3fv(W.location,xt);break;case 4:r.vertexAttrib4fv(W.location,xt);break;default:r.vertexAttrib1fv(W.location,xt)}}}}x()}function C(){I();for(const S in n){const L=n[S];for(const B in L){const V=L[B];for(const Y in V)h(V[Y].object),delete V[Y];delete L[B]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const B in L){const V=L[B];for(const Y in V)h(V[Y].object),delete V[Y];delete L[B]}delete n[S.id]}function R(S){for(const L in n){const B=n[L];if(B[S.id]===void 0)continue;const V=B[S.id];for(const Y in V)h(V[Y].object),delete V[Y];delete B[S.id]}}function I(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function wp(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<f.length;_++)e.update(m,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ep(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Qe&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Cn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==an&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:C}}function Tp(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new si,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{const x=s?0:n,v=x*4;let y=g.clippingState||null;l.value=y,y=h(m,f,v,d);for(let C=0;C!==v;++C)y[C]=e[C];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Ap(r){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=Wi:a===Co&&(o.mapping=Xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Co)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fu(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class $c extends Yc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,gl=[.125,.215,.35,.446,.526,.582],ai=20,oo=new $c,_l=new ft;let ao=null,lo=0,co=0,ho=!1;const ri=(1+Math.sqrt(5))/2,Pi=1/ri,xl=[new E(-ri,Pi,0),new E(ri,Pi,0),new E(-Pi,0,ri),new E(Pi,0,ri),new E(0,ri,-Pi),new E(0,ri,Pi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,lo,co),this._renderer.xr.enabled=ho,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:gs,format:Qe,colorSpace:qn,depthBuffer:!1},i=yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rp(s)),this._blurMaterial=Cp(s,t,e)}return i}_compileMaterial(t){const e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,i){const a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(_l),h.toneMapping=Xn,h.autoClear=!1;const d=new cn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new jt(new hn,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(_l),_=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):x===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;Xs(i,x*v,g>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Wi||t.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xl[(i-s-1)%xl.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new jt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ai-1),_=s/m,p=isFinite(s)?1+Math.floor(h*_):ai;p>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const g=[];let x=0;for(let R=0;R<ai;++R){const I=R/_,w=Math.exp(-I*I/2);g.push(w),R===0?x+=w:R<p&&(x+=2*w)}for(let R=0;R<g.length;R++)g[R]=g[R]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;const y=this._sizeLods[i],C=3*y*(i>v-ki?i-v+ki:0),T=4*(this._cubeSize-y);Xs(e,C,T,3*y,2*y),l.setRenderTarget(e),l.render(u,oo)}}function Rp(r){const t=[],e=[],n=[];let i=r;const s=r-ki+1+gl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ki?l=gl[o-r+ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,p=2,g=1,x=new Float32Array(_*m*d),v=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let T=0;T<d;T++){const R=T%3*2/3-1,I=T>2?0:-1,w=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];x.set(w,_*m*T),v.set(f,p*m*T);const S=[T,T,T,T,T,T];y.set(S,g*m*T)}const C=new Ee;C.setAttribute("position",new ge(x,_)),C.setAttribute("uv",new ge(v,p)),C.setAttribute("faceIndex",new ge(y,g)),t.push(C),i>ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yl(r,t,e){const n=new ui(r,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Cp(r,t,e){const n=new Float32Array(ai),i=new E(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ml(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Sl(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pp(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ro||l===Co,h=l===Wi||l===Xi;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new vl(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new vl(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ba("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ip(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const _=d[m];for(let p=0,g=_.length;p<g;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const C=x[v+0],T=x[v+1],R=x[v+2];f.push(C,T,T,R,R,C)}}else if(m!==void 0){const x=m.array;_=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const C=v+0,T=v+1,R=v+2;f.push(C,T,T,R,R,C)}}else return;const p=new(kc(f)?Wc:Ea)(f,1);p.version=_;const g=s.get(u);g&&t.remove(g),s.set(u,p)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Up(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function u(f,d,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,m);let g=0;for(let x=0;x<m;x++)g+=d[x];for(let x=0;x<_.length;x++)e.update(g,n,_[x])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Dp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Np(r,t,e){const n=new WeakMap,i=new me;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let C=a.attributes.position.count*y,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*T*4*u),I=new Vc(R,C,T,u);I.type=an,I.needsUpdate=!0;const w=y*4;for(let L=0;L<u;L++){const B=g[L],V=x[L],Y=v[L],K=C*T*4*L;for(let X=0;X<B.count;X++){const Q=X*w;m===!0&&(i.fromBufferAttribute(B,X),R[K+Q+0]=i.x,R[K+Q+1]=i.y,R[K+Q+2]=i.z,R[K+Q+3]=0),_===!0&&(i.fromBufferAttribute(V,X),R[K+Q+4]=i.x,R[K+Q+5]=i.y,R[K+Q+6]=i.z,R[K+Q+7]=0),p===!0&&(i.fromBufferAttribute(Y,X),R[K+Q+8]=i.x,R[K+Q+9]=i.y,R[K+Q+10]=i.z,R[K+Q+11]=Y.itemSize===4?i.w:1)}}f={count:u,texture:I,size:new dt(C,T)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Op(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class jc extends Ue{constructor(t,e,n,i,s,o,a,l,c,h=Hi){if(h!==Hi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=hi),n===void 0&&h===qi&&(n=Yi),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zc=new Ue,bl=new jc(1,1),Jc=new Vc,Qc=new Mu,th=new qc,wl=[],El=[],Tl=new Float32Array(16),Al=new Float32Array(9),Rl=new Float32Array(4);function $i(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=wl[i];if(s===void 0&&(s=new Float32Array(i),wl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function be(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function we(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Cr(r,t){let e=El[t];e===void 0&&(e=new Int32Array(t),El[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Fp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function zp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2fv(this.addr,t),we(e,t)}}function kp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;r.uniform3fv(this.addr,t),we(e,t)}}function Bp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4fv(this.addr,t),we(e,t)}}function Vp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Rl.set(n),r.uniformMatrix2fv(this.addr,!1,Rl),we(e,n)}}function Hp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Al.set(n),r.uniformMatrix3fv(this.addr,!1,Al),we(e,n)}}function Gp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Tl.set(n),r.uniformMatrix4fv(this.addr,!1,Tl),we(e,n)}}function Wp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Xp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2iv(this.addr,t),we(e,t)}}function Yp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3iv(this.addr,t),we(e,t)}}function qp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4iv(this.addr,t),we(e,t)}}function Kp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function $p(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2uiv(this.addr,t),we(e,t)}}function jp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3uiv(this.addr,t),we(e,t)}}function Zp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4uiv(this.addr,t),we(e,t)}}function Jp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(bl.compareFunction=zc,s=bl):s=Zc,e.setTexture2D(t||s,i)}function Qp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qc,i)}function tm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||th,i)}function em(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jc,i)}function nm(r){switch(r){case 5126:return Fp;case 35664:return zp;case 35665:return kp;case 35666:return Bp;case 35674:return Vp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return Yp;case 35669:case 35673:return qp;case 5125:return Kp;case 36294:return $p;case 36295:return jp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(r,t){r.uniform1fv(this.addr,t)}function sm(r,t){const e=$i(t,this.size,2);r.uniform2fv(this.addr,e)}function rm(r,t){const e=$i(t,this.size,3);r.uniform3fv(this.addr,e)}function om(r,t){const e=$i(t,this.size,4);r.uniform4fv(this.addr,e)}function am(r,t){const e=$i(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function lm(r,t){const e=$i(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cm(r,t){const e=$i(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function hm(r,t){r.uniform1iv(this.addr,t)}function um(r,t){r.uniform2iv(this.addr,t)}function dm(r,t){r.uniform3iv(this.addr,t)}function fm(r,t){r.uniform4iv(this.addr,t)}function pm(r,t){r.uniform1uiv(this.addr,t)}function mm(r,t){r.uniform2uiv(this.addr,t)}function gm(r,t){r.uniform3uiv(this.addr,t)}function _m(r,t){r.uniform4uiv(this.addr,t)}function xm(r,t,e){const n=this.cache,i=t.length,s=Cr(e,i);be(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Zc,s[o])}function vm(r,t,e){const n=this.cache,i=t.length,s=Cr(e,i);be(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qc,s[o])}function ym(r,t,e){const n=this.cache,i=t.length,s=Cr(e,i);be(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||th,s[o])}function Mm(r,t,e){const n=this.cache,i=t.length,s=Cr(e,i);be(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jc,s[o])}function Sm(r){switch(r){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}class bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}}class Em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Cl(r,t){r.seq.push(t),r.map[t.id]=t}function Tm(r,t,e){const n=r.name,i=n.length;for(uo.lastIndex=0;;){const s=uo.exec(n),o=uo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Cl(e,c===void 0?new bm(a,r,t):new wm(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Em(a),Cl(e,u)),e=u}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Tm(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Pl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Am=37297;let Rm=0;function Cm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Pm(r){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(r);let n;switch(t===e?n="":t===yr&&e===vr?n="LinearDisplayP3ToLinearSRGB":t===vr&&e===yr&&(n="LinearSRGBToLinearDisplayP3"),r){case qn:case Rr:return[n,"LinearTransferOETF"];case Ie:case Sa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ll(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Cm(r.getShaderSource(t),o)}else return i}function Lm(r,t){const e=Pm(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Im(r,t){let e;switch(t){case qh:e="Linear";break;case Kh:e="Reinhard";break;case $h:e="OptimizedCineon";break;case Tc:e="ACESFilmic";break;case Zh:e="AgX";break;case Jh:e="Neutral";break;case jh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Um(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Dm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function cs(r){return r!==""}function Il(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(r){return r.replace(Om,zm)}const Fm=new Map;function zm(r,t){let e=Bt[t];if(e===void 0){const n=Fm.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return aa(e)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(r){return r.replace(km,Bm)}function Bm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Hm(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case Ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Wm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case da:t="ENVMAP_BLENDING_MULTIPLY";break;case Xh:t="ENVMAP_BLENDING_MIX";break;case Yh:t="ENVMAP_BLENDING_ADD";break}return t}function Xm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ym(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vm(e),c=Hm(e),h=Gm(e),u=Wm(e),f=Xm(e),d=Um(e),m=Dm(s),_=i.createProgram();let p,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(cs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(cs).join(`
`),g.length>0&&(g+=`
`)):(p=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),g=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Im("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Lm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),o=aa(o),o=Il(o,e),o=Ul(o,e),a=aa(a),a=Il(a,e),a=Ul(a,e),o=Dl(o),a=Dl(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=x+p+o,y=x+g+a,C=Pl(i,i.VERTEX_SHADER,v),T=Pl(i,i.FRAGMENT_SHADER,y);i.attachShader(_,C),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(L){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(C).trim(),Y=i.getShaderInfoLog(T).trim();let K=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,T);else{const Q=Ll(i,C,"vertex"),W=Ll(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+Q+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||Y==="")&&(X=!1);X&&(L.diagnostics={runnable:K,programLog:B,vertexShader:{log:V,prefix:p},fragmentShader:{log:Y,prefix:g}})}i.deleteShader(C),i.deleteShader(T),I=new dr(i,_),w=Nm(i,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Am)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let qm=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $m(t),e.set(t,n)),n}}class $m{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}}function jm(r,t,e,n,i,s,o){const a=new Hc,l=new Km,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,S,L,B,V){const Y=B.fog,K=V.geometry,X=w.isMeshStandardMaterial?B.environment:null,Q=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),W=Q&&Q.mapping===Ar?Q.image.height:null,gt=m[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,bt=xt!==void 0?xt.length:0;let Xt=0;K.morphAttributes.position!==void 0&&(Xt=1),K.morphAttributes.normal!==void 0&&(Xt=2),K.morphAttributes.color!==void 0&&(Xt=3);let Yt,q,nt,vt;if(gt){const Jt=dn[gt];Yt=Jt.vertexShader,q=Jt.fragmentShader}else Yt=w.vertexShader,q=w.fragmentShader,l.update(w),nt=l.getVertexShaderID(w),vt=l.getFragmentShaderID(w);const ht=r.getRenderTarget(),At=V.isInstancedMesh===!0,Ft=V.isBatchedMesh===!0,Ht=!!w.map,ae=!!w.matcap,P=!!Q,ce=!!w.aoMap,$t=!!w.lightMap,Zt=!!w.bumpMap,wt=!!w.normalMap,ue=!!w.displacementMap,k=!!w.emissiveMap,it=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,O=w.clearcoat>0,j=w.dispersion>0,et=w.iridescence>0,Z=w.sheen>0,Tt=w.transmission>0,lt=M&&!!w.anisotropyMap,pt=O&&!!w.clearcoatMap,Dt=O&&!!w.clearcoatNormalMap,z=O&&!!w.clearcoatRoughnessMap,tt=et&&!!w.iridescenceMap,zt=et&&!!w.iridescenceThicknessMap,Pt=Z&&!!w.sheenColorMap,yt=Z&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,Gt=!!w.specularColorMap,de=!!w.specularIntensityMap,U=Tt&&!!w.transmissionMap,st=Tt&&!!w.thicknessMap,$=!!w.gradientMap,J=!!w.alphaMap,ot=w.alphaTest>0,Lt=!!w.alphaHash,Kt=!!w.extensions;let _e=Xn;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(_e=r.toneMapping);const Ae={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:Yt,fragmentShader:q,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:vt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Ft,batchingColor:Ft&&V._colorsTexture!==null,instancing:At,instancingColor:At&&V.instanceColor!==null,instancingMorph:At&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:qn,alphaToCoverage:!!w.alphaToCoverage,map:Ht,matcap:ae,envMap:P,envMapMode:P&&Q.mapping,envMapCubeUVHeight:W,aoMap:ce,lightMap:$t,bumpMap:Zt,normalMap:wt,displacementMap:f&&ue,emissiveMap:k,normalMapObjectSpace:wt&&w.normalMapType===ru,normalMapTangentSpace:wt&&w.normalMapType===Ma,metalnessMap:it,roughnessMap:A,anisotropy:M,anisotropyMap:lt,clearcoat:O,clearcoatMap:pt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:z,dispersion:j,iridescence:et,iridescenceMap:tt,iridescenceThicknessMap:zt,sheen:Z,sheenColorMap:Pt,sheenRoughnessMap:yt,specularMap:Ot,specularColorMap:Gt,specularIntensityMap:de,transmission:Tt,transmissionMap:U,thicknessMap:st,gradientMap:$,opaque:w.transparent===!1&&w.blending===Vi&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:ot,alphaHash:Lt,combine:w.combine,mapUv:Ht&&_(w.map.channel),aoMapUv:ce&&_(w.aoMap.channel),lightMapUv:$t&&_(w.lightMap.channel),bumpMapUv:Zt&&_(w.bumpMap.channel),normalMapUv:wt&&_(w.normalMap.channel),displacementMapUv:ue&&_(w.displacementMap.channel),emissiveMapUv:k&&_(w.emissiveMap.channel),metalnessMapUv:it&&_(w.metalnessMap.channel),roughnessMapUv:A&&_(w.roughnessMap.channel),anisotropyMapUv:lt&&_(w.anisotropyMap.channel),clearcoatMapUv:pt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ot&&_(w.specularMap.channel),specularColorMapUv:Gt&&_(w.specularColorMap.channel),specularIntensityMapUv:de&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:st&&_(w.thicknessMap.channel),alphaMapUv:J&&_(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(wt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(Ht||J),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ht&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===je,flipSided:w.side===Fe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Kt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&w.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(x(S,w),v(S,w),S.push(r.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function y(w){const S=m[w.type];let L;if(S){const B=dn[S];L=Uu.clone(B.uniforms)}else L=w.uniforms;return L}function C(w,S){let L;for(let B=0,V=h.length;B<V;B++){const Y=h[B];if(Y.cacheKey===S){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new Ym(r,S,w,s),h.push(L)),L}function T(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:I}}function Zm(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Jm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ol(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Fl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,m,_,p){let g=r[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},r[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=_,g.group=p),t++,g}function a(u,f,d,m,_,p){const g=o(u,f,d,m,_,p);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):e.push(g)}function l(u,f,d,m,_,p){const g=o(u,f,d,m,_,p);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||Jm),n.length>1&&n.sort(f||Ol),i.length>1&&i.sort(f||Ol)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Qm(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Fl,r.set(n,[o])):i>=s.length?(o=new Fl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function t0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new ft};break;case"SpotLight":e={position:new E,direction:new E,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new E,halfWidth:new E,halfHeight:new E};break}return r[t.id]=e,e}}}function e0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let n0=0;function i0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function s0(r){const t=new t0,e=e0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,s=new Wt,o=new Wt;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,x=0,v=0,y=0,C=0,T=0,R=0;c.sort(i0);for(let w=0,S=c.length;w<S;w++){const L=c[w],B=L.color,V=L.intensity,Y=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*V,u+=B.g*V,f+=B.b*V;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],V);R++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,W=e.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=L.shadow.matrix,x++}n.directional[d]=X,d++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(V),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[_]=X;const Q=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,Q.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){const W=e.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=K,y++}_++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=X,p++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Q=L.shadow,W=e.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=L.shadow.matrix,v++}n.point[m]=X,m++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V),X.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[g]=X,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==g||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==C||I.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=d,I.pointLength=m,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=g,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=C,I.numLightProbes=R,n.version=n0++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const v=c[g];if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function zl(r){const t=new s0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function r0(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new zl(r),t.set(i,[a])):s>=o.length?(a=new zl(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class o0 extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class a0 extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h0(r,t,e){let n=new Ta;const i=new dt,s=new dt,o=new me,a=new o0({depthPacking:su}),l=new a0,c={},h=e.maxTextureSize,u={[Yn]:Fe,[Fe]:Yn,[je]:je},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ee;m.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let g=this.type;this.render=function(T,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const w=r.getRenderTarget(),S=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Wn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=g!==En&&this.type===En,Y=g===En&&this.type!==En;for(let K=0,X=T.length;K<X;K++){const Q=T[K],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const gt=W.getFrameExtents();if(i.multiply(gt),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/gt.x),i.x=s.x*gt.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/gt.y),i.y=s.y*gt.y,W.mapSize.y=s.y)),W.map===null||V===!0||Y===!0){const bt=this.type!==En?{minFilter:ze,magFilter:ze}:{};W.map!==null&&W.map.dispose(),W.map=new ui(i.x,i.y,bt),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const xt=W.getViewportCount();for(let bt=0;bt<xt;bt++){const Xt=W.getViewport(bt);o.set(s.x*Xt.x,s.y*Xt.y,s.x*Xt.z,s.y*Xt.w),B.viewport(o),W.updateMatrices(Q,bt),n=W.getFrustum(),y(R,I,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===En&&x(W,I),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(w,S,L)};function x(T,R){const I=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ui(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,I,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,I,d,_,null)}function v(T,R,I,w){let S=null;const L=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=I.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=S.uuid,V=R.uuid;let Y=c[B];Y===void 0&&(Y={},c[B]=Y);let K=Y[V];K===void 0&&(K=S.clone(),Y[V]=K,R.addEventListener("dispose",C)),S=K}if(S.visible=R.visible,S.wireframe=R.wireframe,w===En?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=r.properties.get(S);B.light=I}return S}function y(T,R,I,w,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===En)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const V=t.update(T),Y=T.material;if(Array.isArray(Y)){const K=V.groups;for(let X=0,Q=K.length;X<Q;X++){const W=K[X],gt=Y[W.materialIndex];if(gt&&gt.visible){const xt=v(T,gt,w,S);T.onBeforeShadow(r,T,R,I,V,xt,W),r.renderBufferDirect(I,null,V,xt,T,W),T.onAfterShadow(r,T,R,I,V,xt,W)}}}else if(Y.visible){const K=v(T,Y,w,S);T.onBeforeShadow(r,T,R,I,V,K,null),r.renderBufferDirect(I,null,V,K,T,null),T.onAfterShadow(r,T,R,I,V,K,null)}}const B=T.children;for(let V=0,Y=B.length;V<Y;V++)y(B[V],R,I,w,S)}function C(T){T.target.removeEventListener("dispose",C);for(const I in c){const w=c[I],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function u0(r){function t(){let U=!1;const st=new me;let $=null;const J=new me(0,0,0,0);return{setMask:function(ot){$!==ot&&!U&&(r.colorMask(ot,ot,ot,ot),$=ot)},setLocked:function(ot){U=ot},setClear:function(ot,Lt,Kt,_e,Ae){Ae===!0&&(ot*=_e,Lt*=_e,Kt*=_e),st.set(ot,Lt,Kt,_e),J.equals(st)===!1&&(r.clearColor(ot,Lt,Kt,_e),J.copy(st))},reset:function(){U=!1,$=null,J.set(-1,0,0,0)}}}function e(){let U=!1,st=null,$=null,J=null;return{setTest:function(ot){ot?vt(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(ot){st!==ot&&!U&&(r.depthMask(ot),st=ot)},setFunc:function(ot){if($!==ot){switch(ot){case zh:r.depthFunc(r.NEVER);break;case kh:r.depthFunc(r.ALWAYS);break;case Bh:r.depthFunc(r.LESS);break;case pr:r.depthFunc(r.LEQUAL);break;case Vh:r.depthFunc(r.EQUAL);break;case Hh:r.depthFunc(r.GEQUAL);break;case Gh:r.depthFunc(r.GREATER);break;case Wh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=ot}},setLocked:function(ot){U=ot},setClear:function(ot){J!==ot&&(r.clearDepth(ot),J=ot)},reset:function(){U=!1,st=null,$=null,J=null}}}function n(){let U=!1,st=null,$=null,J=null,ot=null,Lt=null,Kt=null,_e=null,Ae=null;return{setTest:function(Jt){U||(Jt?vt(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(Jt){st!==Jt&&!U&&(r.stencilMask(Jt),st=Jt)},setFunc:function(Jt,xn,un){($!==Jt||J!==xn||ot!==un)&&(r.stencilFunc(Jt,xn,un),$=Jt,J=xn,ot=un)},setOp:function(Jt,xn,un){(Lt!==Jt||Kt!==xn||_e!==un)&&(r.stencilOp(Jt,xn,un),Lt=Jt,Kt=xn,_e=un)},setLocked:function(Jt){U=Jt},setClear:function(Jt){Ae!==Jt&&(r.clearStencil(Jt),Ae=Jt)},reset:function(){U=!1,st=null,$=null,J=null,ot=null,Lt=null,Kt=null,_e=null,Ae=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,m=!1,_=null,p=null,g=null,x=null,v=null,y=null,C=null,T=new ft(0,0,0),R=0,I=!1,w=null,S=null,L=null,B=null,V=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=X>=2);let W=null,gt={};const xt=r.getParameter(r.SCISSOR_BOX),bt=r.getParameter(r.VIEWPORT),Xt=new me().fromArray(xt),Yt=new me().fromArray(bt);function q(U,st,$,J){const ot=new Uint8Array(4),Lt=r.createTexture();r.bindTexture(U,Lt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<$;Kt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(st,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,ot):r.texImage2D(st+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ot);return Lt}const nt={};nt[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),vt(r.DEPTH_TEST),s.setFunc(pr),Zt(!1),wt(Xa),vt(r.CULL_FACE),ce(Wn);function vt(U){c[U]!==!0&&(r.enable(U),c[U]=!0)}function ht(U){c[U]!==!1&&(r.disable(U),c[U]=!1)}function At(U,st){return h[U]!==st?(r.bindFramebuffer(U,st),h[U]=st,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=st),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=st),!0):!1}function Ft(U,st){let $=f,J=!1;if(U){$=u.get(st),$===void 0&&($=[],u.set(st,$));const ot=U.textures;if($.length!==ot.length||$[0]!==r.COLOR_ATTACHMENT0){for(let Lt=0,Kt=ot.length;Lt<Kt;Lt++)$[Lt]=r.COLOR_ATTACHMENT0+Lt;$.length=ot.length,J=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,J=!0);J&&r.drawBuffers($)}function Ht(U){return d!==U?(r.useProgram(U),d=U,!0):!1}const ae={[oi]:r.FUNC_ADD,[Mh]:r.FUNC_SUBTRACT,[Sh]:r.FUNC_REVERSE_SUBTRACT};ae[bh]=r.MIN,ae[wh]=r.MAX;const P={[Eh]:r.ZERO,[Th]:r.ONE,[Ah]:r.SRC_COLOR,[To]:r.SRC_ALPHA,[Uh]:r.SRC_ALPHA_SATURATE,[Lh]:r.DST_COLOR,[Ch]:r.DST_ALPHA,[Rh]:r.ONE_MINUS_SRC_COLOR,[Ao]:r.ONE_MINUS_SRC_ALPHA,[Ih]:r.ONE_MINUS_DST_COLOR,[Ph]:r.ONE_MINUS_DST_ALPHA,[Dh]:r.CONSTANT_COLOR,[Nh]:r.ONE_MINUS_CONSTANT_COLOR,[Oh]:r.CONSTANT_ALPHA,[Fh]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(U,st,$,J,ot,Lt,Kt,_e,Ae,Jt){if(U===Wn){m===!0&&(ht(r.BLEND),m=!1);return}if(m===!1&&(vt(r.BLEND),m=!0),U!==yh){if(U!==_||Jt!==I){if((p!==oi||v!==oi)&&(r.blendEquation(r.FUNC_ADD),p=oi,v=oi),Jt)switch(U){case Vi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fr:r.blendFunc(r.ONE,r.ONE);break;case Ya:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qa:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ya:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qa:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,x=null,y=null,C=null,T.set(0,0,0),R=0,_=U,I=Jt}return}ot=ot||st,Lt=Lt||$,Kt=Kt||J,(st!==p||ot!==v)&&(r.blendEquationSeparate(ae[st],ae[ot]),p=st,v=ot),($!==g||J!==x||Lt!==y||Kt!==C)&&(r.blendFuncSeparate(P[$],P[J],P[Lt],P[Kt]),g=$,x=J,y=Lt,C=Kt),(_e.equals(T)===!1||Ae!==R)&&(r.blendColor(_e.r,_e.g,_e.b,Ae),T.copy(_e),R=Ae),_=U,I=!1}function $t(U,st){U.side===je?ht(r.CULL_FACE):vt(r.CULL_FACE);let $=U.side===Fe;st&&($=!$),Zt($),U.blending===Vi&&U.transparent===!1?ce(Wn):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),k(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(U){w!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),w=U)}function wt(U){U!==xh?(vt(r.CULL_FACE),U!==S&&(U===Xa?r.cullFace(r.BACK):U===vh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),S=U}function ue(U){U!==L&&(K&&r.lineWidth(U),L=U)}function k(U,st,$){U?(vt(r.POLYGON_OFFSET_FILL),(B!==st||V!==$)&&(r.polygonOffset(st,$),B=st,V=$)):ht(r.POLYGON_OFFSET_FILL)}function it(U){U?vt(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function A(U){U===void 0&&(U=r.TEXTURE0+Y-1),W!==U&&(r.activeTexture(U),W=U)}function M(U,st,$){$===void 0&&(W===null?$=r.TEXTURE0+Y-1:$=W);let J=gt[$];J===void 0&&(J={type:void 0,texture:void 0},gt[$]=J),(J.type!==U||J.texture!==st)&&(W!==$&&(r.activeTexture($),W=$),r.bindTexture(U,st||nt[U]),J.type=U,J.texture=st)}function O(){const U=gt[W];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(U){Xt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Xt.copy(U))}function yt(U){Yt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Yt.copy(U))}function Ot(U,st){let $=l.get(st);$===void 0&&($=new WeakMap,l.set(st,$));let J=$.get(U);J===void 0&&(J=r.getUniformBlockIndex(st,U.name),$.set(U,J))}function Gt(U,st){const J=l.get(st).get(U);a.get(st)!==J&&(r.uniformBlockBinding(st,J,U.__bindingPointIndex),a.set(st,J))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,gt={},h={},u=new WeakMap,f=[],d=null,m=!1,_=null,p=null,g=null,x=null,v=null,y=null,C=null,T=new ft(0,0,0),R=0,I=!1,w=null,S=null,L=null,B=null,V=null,Xt.set(0,0,r.canvas.width,r.canvas.height),Yt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:vt,disable:ht,bindFramebuffer:At,drawBuffers:Ft,useProgram:Ht,setBlending:ce,setMaterial:$t,setFlipSided:Zt,setCullFace:wt,setLineWidth:ue,setPolygonOffset:k,setScissorTest:it,activeTexture:A,bindTexture:M,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:tt,texImage3D:zt,updateUBOMapping:Ot,uniformBlockBinding:Gt,texStorage2D:Dt,texStorage3D:z,texSubImage2D:Z,texSubImage3D:Tt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Pt,viewport:yt,reset:de}}function kl(r,t,e,n){const i=d0(n);switch(e){case Lc:return r*t;case Uc:return r*t;case Dc:return r*t*2;case ga:return r*t/i.components*i.byteLength;case _a:return r*t/i.components*i.byteLength;case Nc:return r*t*2/i.components*i.byteLength;case xa:return r*t*2/i.components*i.byteLength;case Ic:return r*t*3/i.components*i.byteLength;case Qe:return r*t*4/i.components*i.byteLength;case va:return r*t*4/i.components*i.byteLength;case ar:case lr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cr:case hr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Io:case Do:return Math.max(r,16)*Math.max(t,8)/4;case Lo:case Uo:return Math.max(r,8)*Math.max(t,8)/2;case No:case Oo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case $o:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ur:case Jo:case Qo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Oc:case ta:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d0(r){switch(r){case Cn:case Rc:return{byteLength:1,components:1};case ps:case Cc:case gs:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case hi:case fa:case an:return{byteLength:4,components:1};case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function f0(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return d?new OffscreenCanvas(A,M):Sr("canvas")}function _(A,M,O){let j=1;const et=it(A);if((et.width>O||et.height>O)&&(j=O/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(j*et.width),Tt=Math.floor(j*et.height);u===void 0&&(u=m(Z,Tt));const lt=M?m(Z,Tt):u;return lt.width=Z,lt.height=Tt,lt.getContext("2d").drawImage(A,0,0,Z,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Tt+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==ze&&A.minFilter!==Ze}function g(A){r.generateMipmap(A)}function x(A,M,O,j,et=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=M;if(M===r.RED&&(O===r.FLOAT&&(Z=r.R32F),O===r.HALF_FLOAT&&(Z=r.R16F),O===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.R8UI),O===r.UNSIGNED_SHORT&&(Z=r.R16UI),O===r.UNSIGNED_INT&&(Z=r.R32UI),O===r.BYTE&&(Z=r.R8I),O===r.SHORT&&(Z=r.R16I),O===r.INT&&(Z=r.R32I)),M===r.RG&&(O===r.FLOAT&&(Z=r.RG32F),O===r.HALF_FLOAT&&(Z=r.RG16F),O===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.RG8UI),O===r.UNSIGNED_SHORT&&(Z=r.RG16UI),O===r.UNSIGNED_INT&&(Z=r.RG32UI),O===r.BYTE&&(Z=r.RG8I),O===r.SHORT&&(Z=r.RG16I),O===r.INT&&(Z=r.RG32I)),M===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),M===r.RGBA){const Tt=et?xr:ie.getTransfer(j);O===r.FLOAT&&(Z=r.RGBA32F),O===r.HALF_FLOAT&&(Z=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Z=Tt===le?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(A,M){let O;return A?M===null||M===hi||M===Yi?O=r.DEPTH24_STENCIL8:M===an?O=r.DEPTH32F_STENCIL8:M===ps&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hi||M===Yi?O=r.DEPTH_COMPONENT24:M===an?O=r.DEPTH_COMPONENT32F:M===ps&&(O=r.DEPTH_COMPONENT16),O}function y(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ze&&A.minFilter!==Ze?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&h.delete(M)}function T(A){const M=A.target;M.removeEventListener("dispose",T),w(M)}function R(A){const M=n.get(A);if(M.__webglInit===void 0)return;const O=A.source,j=f.get(O);if(j){const et=j[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(A),Object.keys(j).length===0&&f.delete(O)}n.remove(A)}function I(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const O=A.source,j=f.get(O);delete j[M.__cacheKey],o.memory.textures--}function w(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let et=0;et<M.__webglFramebuffer[j].length;et++)r.deleteFramebuffer(M.__webglFramebuffer[j][et]);else r.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)r.deleteFramebuffer(M.__webglFramebuffer[j]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=A.textures;for(let j=0,et=O.length;j<et;j++){const Z=n.get(O[j]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(O[j])}n.remove(A)}let S=0;function L(){S=0}function B(){const A=S;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),S+=1,A}function V(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Y(A,M){const O=n.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(O,A,M);return}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+M)}function K(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Yt(O,A,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+M)}function X(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Yt(O,A,M);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+M)}function Q(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){q(O,A,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+M)}const W={[mr]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[Po]:r.MIRRORED_REPEAT},gt={[ze]:r.NEAREST,[tu]:r.NEAREST_MIPMAP_NEAREST,[ws]:r.NEAREST_MIPMAP_LINEAR,[Ze]:r.LINEAR,[zr]:r.LINEAR_MIPMAP_NEAREST,[ci]:r.LINEAR_MIPMAP_LINEAR},xt={[ou]:r.NEVER,[du]:r.ALWAYS,[au]:r.LESS,[zc]:r.LEQUAL,[lu]:r.EQUAL,[uu]:r.GEQUAL,[cu]:r.GREATER,[hu]:r.NOTEQUAL};function bt(A,M){if(M.type===an&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ze||M.magFilter===zr||M.magFilter===ws||M.magFilter===ci||M.minFilter===Ze||M.minFilter===zr||M.minFilter===ws||M.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,W[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,W[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,W[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,gt[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,gt[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,xt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ze||M.minFilter!==ws&&M.minFilter!==ci||M.type===an&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xt(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const j=M.source;let et=f.get(j);et===void 0&&(et={},f.set(j,et));const Z=V(M);if(Z!==A.__cacheKey){et[Z]===void 0&&(et[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),et[Z].usedTimes++;const Tt=et[A.__cacheKey];Tt!==void 0&&(et[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&I(M)),A.__cacheKey=Z,A.__webglTexture=et[Z].texture}return O}function Yt(A,M,O){let j=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=r.TEXTURE_3D);const et=Xt(A,M),Z=M.source;e.bindTexture(j,A.__webglTexture,r.TEXTURE0+O);const Tt=n.get(Z);if(Z.version!==Tt.__version||et===!0){e.activeTexture(r.TEXTURE0+O);const lt=ie.getPrimaries(ie.workingColorSpace),pt=M.colorSpace===Hn?null:ie.getPrimaries(M.colorSpace),Dt=M.colorSpace===Hn||lt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let z=_(M.image,!1,i.maxTextureSize);z=k(M,z);const tt=s.convert(M.format,M.colorSpace),zt=s.convert(M.type);let Pt=x(M.internalFormat,tt,zt,M.colorSpace,M.isVideoTexture);bt(j,M);let yt;const Ot=M.mipmaps,Gt=M.isVideoTexture!==!0,de=Tt.__version===void 0||et===!0,U=Z.dataReady,st=y(M,z);if(M.isDepthTexture)Pt=v(M.format===qi,M.type),de&&(Gt?e.texStorage2D(r.TEXTURE_2D,1,Pt,z.width,z.height):e.texImage2D(r.TEXTURE_2D,0,Pt,z.width,z.height,0,tt,zt,null));else if(M.isDataTexture)if(Ot.length>0){Gt&&de&&e.texStorage2D(r.TEXTURE_2D,st,Pt,Ot[0].width,Ot[0].height);for(let $=0,J=Ot.length;$<J;$++)yt=Ot[$],Gt?U&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,yt.width,yt.height,tt,zt,yt.data):e.texImage2D(r.TEXTURE_2D,$,Pt,yt.width,yt.height,0,tt,zt,yt.data);M.generateMipmaps=!1}else Gt?(de&&e.texStorage2D(r.TEXTURE_2D,st,Pt,z.width,z.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,z.width,z.height,tt,zt,z.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,z.width,z.height,0,tt,zt,z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&de&&e.texStorage3D(r.TEXTURE_2D_ARRAY,st,Pt,Ot[0].width,Ot[0].height,z.depth);for(let $=0,J=Ot.length;$<J;$++)if(yt=Ot[$],M.format!==Qe)if(tt!==null)if(Gt){if(U)if(M.layerUpdates.size>0){const ot=kl(yt.width,yt.height,M.format,M.type);for(const Lt of M.layerUpdates){const Kt=yt.data.subarray(Lt*ot/yt.data.BYTES_PER_ELEMENT,(Lt+1)*ot/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Lt,yt.width,yt.height,1,tt,Kt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,z.depth,tt,yt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Pt,yt.width,yt.height,z.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,z.depth,tt,zt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Pt,yt.width,yt.height,z.depth,0,tt,zt,yt.data)}else{Gt&&de&&e.texStorage2D(r.TEXTURE_2D,st,Pt,Ot[0].width,Ot[0].height);for(let $=0,J=Ot.length;$<J;$++)yt=Ot[$],M.format!==Qe?tt!==null?Gt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,yt.width,yt.height,tt,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Pt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,yt.width,yt.height,tt,zt,yt.data):e.texImage2D(r.TEXTURE_2D,$,Pt,yt.width,yt.height,0,tt,zt,yt.data)}else if(M.isDataArrayTexture)if(Gt){if(de&&e.texStorage3D(r.TEXTURE_2D_ARRAY,st,Pt,z.width,z.height,z.depth),U)if(M.layerUpdates.size>0){const $=kl(z.width,z.height,M.format,M.type);for(const J of M.layerUpdates){const ot=z.data.subarray(J*$/z.data.BYTES_PER_ELEMENT,(J+1)*$/z.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,z.width,z.height,1,tt,zt,ot)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,tt,zt,z.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,z.width,z.height,z.depth,0,tt,zt,z.data);else if(M.isData3DTexture)Gt?(de&&e.texStorage3D(r.TEXTURE_3D,st,Pt,z.width,z.height,z.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,tt,zt,z.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,z.width,z.height,z.depth,0,tt,zt,z.data);else if(M.isFramebufferTexture){if(de)if(Gt)e.texStorage2D(r.TEXTURE_2D,st,Pt,z.width,z.height);else{let $=z.width,J=z.height;for(let ot=0;ot<st;ot++)e.texImage2D(r.TEXTURE_2D,ot,Pt,$,J,0,tt,zt,null),$>>=1,J>>=1}}else if(Ot.length>0){if(Gt&&de){const $=it(Ot[0]);e.texStorage2D(r.TEXTURE_2D,st,Pt,$.width,$.height)}for(let $=0,J=Ot.length;$<J;$++)yt=Ot[$],Gt?U&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,tt,zt,yt):e.texImage2D(r.TEXTURE_2D,$,Pt,tt,zt,yt);M.generateMipmaps=!1}else if(Gt){if(de){const $=it(z);e.texStorage2D(r.TEXTURE_2D,st,Pt,$.width,$.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt,zt,z)}else e.texImage2D(r.TEXTURE_2D,0,Pt,tt,zt,z);p(M)&&g(j),Tt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function q(A,M,O){if(M.image.length!==6)return;const j=Xt(A,M),et=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+O);const Z=n.get(et);if(et.version!==Z.__version||j===!0){e.activeTexture(r.TEXTURE0+O);const Tt=ie.getPrimaries(ie.workingColorSpace),lt=M.colorSpace===Hn?null:ie.getPrimaries(M.colorSpace),pt=M.colorSpace===Hn||Tt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Dt=M.isCompressedTexture||M.image[0].isCompressedTexture,z=M.image[0]&&M.image[0].isDataTexture,tt=[];for(let J=0;J<6;J++)!Dt&&!z?tt[J]=_(M.image[J],!0,i.maxCubemapSize):tt[J]=z?M.image[J].image:M.image[J],tt[J]=k(M,tt[J]);const zt=tt[0],Pt=s.convert(M.format,M.colorSpace),yt=s.convert(M.type),Ot=x(M.internalFormat,Pt,yt,M.colorSpace),Gt=M.isVideoTexture!==!0,de=Z.__version===void 0||j===!0,U=et.dataReady;let st=y(M,zt);bt(r.TEXTURE_CUBE_MAP,M);let $;if(Dt){Gt&&de&&e.texStorage2D(r.TEXTURE_CUBE_MAP,st,Ot,zt.width,zt.height);for(let J=0;J<6;J++){$=tt[J].mipmaps;for(let ot=0;ot<$.length;ot++){const Lt=$[ot];M.format!==Qe?Pt!==null?Gt?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,0,0,Lt.width,Lt.height,Pt,Lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,Ot,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,0,0,Lt.width,Lt.height,Pt,yt,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,Ot,Lt.width,Lt.height,0,Pt,yt,Lt.data)}}}else{if($=M.mipmaps,Gt&&de){$.length>0&&st++;const J=it(tt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,st,Ot,J.width,J.height)}for(let J=0;J<6;J++)if(z){Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,tt[J].width,tt[J].height,Pt,yt,tt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ot,tt[J].width,tt[J].height,0,Pt,yt,tt[J].data);for(let ot=0;ot<$.length;ot++){const Kt=$[ot].image[J].image;Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,0,0,Kt.width,Kt.height,Pt,yt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,Ot,Kt.width,Kt.height,0,Pt,yt,Kt.data)}}else{Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,yt,tt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ot,Pt,yt,tt[J]);for(let ot=0;ot<$.length;ot++){const Lt=$[ot];Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,0,0,Pt,yt,Lt.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,Ot,Pt,yt,Lt.image[J])}}}p(M)&&g(r.TEXTURE_CUBE_MAP),Z.__version=et.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function nt(A,M,O,j,et,Z){const Tt=s.convert(O.format,O.colorSpace),lt=s.convert(O.type),pt=x(O.internalFormat,Tt,lt,O.colorSpace);if(!n.get(M).__hasExternalTextures){const z=Math.max(1,M.width>>Z),tt=Math.max(1,M.height>>Z);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,pt,z,tt,M.depth,0,Tt,lt,null):e.texImage2D(et,Z,pt,z,tt,0,Tt,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),wt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,et,n.get(O).__webglTexture,0,Zt(M)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,et,n.get(O).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(A,M,O){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){const j=M.depthTexture,et=j&&j.isDepthTexture?j.type:null,Z=v(M.stencilBuffer,et),Tt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=Zt(M);wt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,Z,M.width,M.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,Z,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,A)}else{const j=M.textures;for(let et=0;et<j.length;et++){const Z=j[et],Tt=s.convert(Z.format,Z.colorSpace),lt=s.convert(Z.type),pt=x(Z.internalFormat,Tt,lt,Z.colorSpace),Dt=Zt(M);O&&wt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,pt,M.width,M.height):wt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,pt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,pt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const j=n.get(M.depthTexture).__webglTexture,et=Zt(M);if(M.depthTexture.format===Hi)wt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(M.depthTexture.format===qi)wt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function At(A){const M=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ht(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=r.createRenderbuffer(),vt(M.__webglDepthbuffer[j],A,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),vt(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(A,M,O){const j=n.get(A);M!==void 0&&nt(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&At(A)}function Ht(A){const M=A.texture,O=n.get(A),j=n.get(M);A.addEventListener("dispose",T);const et=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Tt=et.length>1;if(Tt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let pt=0;pt<M.mipmaps.length;pt++)O.__webglFramebuffer[lt][pt]=r.createFramebuffer()}else O.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)O.__webglFramebuffer[lt]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let lt=0,pt=et.length;lt<pt;lt++){const Dt=n.get(et[lt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&wt(A)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const pt=et[lt];O.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const Dt=s.convert(pt.format,pt.colorSpace),z=s.convert(pt.type),tt=x(pt.internalFormat,Dt,z,pt.colorSpace,A.isXRRenderTarget===!0),zt=Zt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,tt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),vt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),bt(r.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)nt(O.__webglFramebuffer[lt][pt],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else nt(O.__webglFramebuffer[lt],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(M)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let lt=0,pt=et.length;lt<pt;lt++){const Dt=et[lt],z=n.get(Dt);e.bindTexture(r.TEXTURE_2D,z.__webglTexture),bt(r.TEXTURE_2D,Dt),nt(O.__webglFramebuffer,A,Dt,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),p(Dt)&&g(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),bt(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)nt(O.__webglFramebuffer[pt],A,M,r.COLOR_ATTACHMENT0,lt,pt);else nt(O.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,lt,0);p(M)&&g(lt),e.unbindTexture()}A.depthBuffer&&At(A)}function ae(A){const M=A.textures;for(let O=0,j=M.length;O<j;O++){const et=M[O];if(p(et)){const Z=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Tt=n.get(et).__webglTexture;e.bindTexture(Z,Tt),g(Z),e.unbindTexture()}}}const P=[],ce=[];function $t(A){if(A.samples>0){if(wt(A)===!1){const M=A.textures,O=A.width,j=A.height;let et=r.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(A),lt=M.length>1;if(lt)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const Dt=n.get(M[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Dt,0)}r.blitFramebuffer(0,0,O,j,0,0,O,j,et,r.NEAREST),l===!0&&(P.length=0,ce.length=0,P.push(r.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(P.push(Z),ce.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ce)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const Dt=n.get(M[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Zt(A){return Math.min(i.maxSamples,A.samples)}function wt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function k(A,M){const O=A.colorSpace,j=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==qn&&O!==Hn&&(ie.getTransfer(O)===le?(j!==Qe||et!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function it(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=Ft,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=wt}function p0(r,t){function e(n,i=Hn){let s;const o=ie.getTransfer(i);if(n===Cn)return r.UNSIGNED_BYTE;if(n===pa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return r.BYTE;if(n===Cc)return r.SHORT;if(n===ps)return r.UNSIGNED_SHORT;if(n===fa)return r.INT;if(n===hi)return r.UNSIGNED_INT;if(n===an)return r.FLOAT;if(n===gs)return r.HALF_FLOAT;if(n===Lc)return r.ALPHA;if(n===Ic)return r.RGB;if(n===Qe)return r.RGBA;if(n===Uc)return r.LUMINANCE;if(n===Dc)return r.LUMINANCE_ALPHA;if(n===Hi)return r.DEPTH_COMPONENT;if(n===qi)return r.DEPTH_STENCIL;if(n===ga)return r.RED;if(n===_a)return r.RED_INTEGER;if(n===Nc)return r.RG;if(n===xa)return r.RG_INTEGER;if(n===va)return r.RGBA_INTEGER;if(n===ar||n===lr||n===cr||n===hr)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ar)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ar)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Io||n===Uo||n===Do)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Oo||n===Fo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===No||n===Oo)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zo||n===ko||n===Bo||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===Yo||n===qo||n===Ko||n===$o||n===jo||n===Zo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ur||n===Jo||n===Qo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ur)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===ta||n===ea||n===na)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ur)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class m0 extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ln extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g0={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class v0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ue,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:_0,fragmentShader:x0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new _s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y0 extends di{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const _=new v0,p=e.getContextAttributes();let g=null,x=null;const v=[],y=[],C=new dt;let T=null;const R=new $e;R.layers.enable(1),R.viewport=new me;const I=new $e;I.layers.enable(2),I.viewport=new me;const w=[R,I],S=new m0;S.layers.enable(1),S.layers.enable(2);let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=v[q];return nt===void 0&&(nt=new fo,v[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=v[q];return nt===void 0&&(nt=new fo,v[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=v[q];return nt===void 0&&(nt=new fo,v[q]=nt),nt.getHandSpace()};function V(q){const nt=y.indexOf(q.inputSource);if(nt===-1)return;const vt=v[nt];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||o),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",K);for(let q=0;q<v.length;q++){const nt=y[q];nt!==null&&(y[q]=null,v[q].disconnect(nt))}L=null,B=null,_.reset(),t.setRenderTarget(g),d=null,f=null,u=null,i=null,x=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ui(d.framebufferWidth,d.framebufferHeight,{format:Qe,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,vt=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?qi:Hi,vt=p.stencil?Yi:hi);const At={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(At),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new ui(f.textureWidth,f.textureHeight,{format:Qe,type:Cn,depthTexture:new jc(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let nt=0;nt<q.removed.length;nt++){const vt=q.removed[nt],ht=y.indexOf(vt);ht>=0&&(y[ht]=null,v[ht].disconnect(vt))}for(let nt=0;nt<q.added.length;nt++){const vt=q.added[nt];let ht=y.indexOf(vt);if(ht===-1){for(let Ft=0;Ft<v.length;Ft++)if(Ft>=y.length){y.push(vt),ht=Ft;break}else if(y[Ft]===null){y[Ft]=vt,ht=Ft;break}if(ht===-1)break}const At=v[ht];At&&At.connect(vt)}}const X=new E,Q=new E;function W(q,nt,vt){X.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const ht=X.distanceTo(Q),At=nt.projectionMatrix.elements,Ft=vt.projectionMatrix.elements,Ht=At[14]/(At[10]-1),ae=At[14]/(At[10]+1),P=(At[9]+1)/At[5],ce=(At[9]-1)/At[5],$t=(At[8]-1)/At[0],Zt=(Ft[8]+1)/Ft[0],wt=Ht*$t,ue=Ht*Zt,k=ht/(-$t+Zt),it=k*-$t;nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(it),q.translateZ(k),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Ht+k,M=ae+k,O=wt-it,j=ue+(ht-it),et=P*ae/M*A,Z=ce*ae/M*A;q.projectionMatrix.makePerspective(O,j,et,Z,A,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function gt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),S.near=I.near=R.near=q.near,S.far=I.far=R.far=q.far,(L!==S.near||B!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,B=S.far,R.near=L,R.far=B,I.near=L,I.far=B,R.updateProjectionMatrix(),I.updateProjectionMatrix(),q.updateProjectionMatrix());const nt=q.parent,vt=S.cameras;gt(S,nt);for(let ht=0;ht<vt.length;ht++)gt(vt[ht],nt);vt.length===2?W(S,R,I):S.projectionMatrix.copy(R.projectionMatrix),xt(q,S,nt)};function xt(q,nt,vt){vt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let bt=null;function Xt(q,nt){if(h=nt.getViewerPose(c||o),m=nt,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ht=!1;vt.length!==S.cameras.length&&(S.cameras.length=0,ht=!0);for(let Ft=0;Ft<vt.length;Ft++){const Ht=vt[Ft];let ae=null;if(d!==null)ae=d.getViewport(Ht);else{const ce=u.getViewSubImage(f,Ht);ae=ce.viewport,Ft===0&&(t.setRenderTargetTextures(x,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(x))}let P=w[Ft];P===void 0&&(P=new $e,P.layers.enable(Ft),P.viewport=new me,w[Ft]=P),P.matrix.fromArray(Ht.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Ht.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(ae.x,ae.y,ae.width,ae.height),Ft===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ht===!0&&S.cameras.push(P)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Ft=u.getDepthInformation(vt[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,i.renderState)}}for(let vt=0;vt<v.length;vt++){const ht=y[vt],At=v[vt];ht!==null&&At!==void 0&&At.update(ht,nt,c||o)}bt&&bt(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}const Yt=new Kc;Yt.setAnimationLoop(Xt),this.setAnimationLoop=function(q){bt=q},this.dispose=function(){}}}const ni=new Se,M0=new Wt;function S0(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Xc(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,x,v,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,x,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Fe&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Fe&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=t.get(g),v=x.envMap,y=x.envMapRotation;v&&(p.envMap.value=v,ni.copy(y),ni.x*=-1,ni.y*=-1,ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),p.envMapRotation.value.setFromMatrix4(M0.makeRotationFromEuler(ni)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fe&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b0(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(m(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(x,C);const T=t.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function h(x){const v=u();x.__bindingPointIndex=v;const y=r.createBuffer(),C=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],y=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,R=y.length;T<R;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,S=I.length;w<S;w++){const L=I[w];if(d(L,T,w,C)===!0){const B=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let K=0;K<V.length;K++){const X=V[K],Q=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,B+Y,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,y,C){const T=x.value,R=v+"_"+y;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const I=C[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(x){const v=x.uniforms;let y=0;const C=16;for(let R=0,I=v.length;R<I;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,L=w.length;S<L;S++){const B=w[S],V=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,K=V.length;Y<K;Y++){const X=V[Y],Q=_(X),W=y%C;W!==0&&C-W<Q.boundary&&(y+=C-W),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Q.storage}}}const T=y%C;return T>0&&(y+=C-T),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}class w0{constructor(t={}){const{canvas:e=pu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Xn,this.toneMappingExposure=1;const v=this;let y=!1,C=0,T=0,R=null,I=-1,w=null;const S=new me,L=new me;let B=null;const V=new ft(0);let Y=0,K=e.width,X=e.height,Q=1,W=null,gt=null;const xt=new me(0,0,K,X),bt=new me(0,0,K,X);let Xt=!1;const Yt=new Ta;let q=!1,nt=!1;const vt=new Wt,ht=new E,At=new me,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ae(){return R===null?Q:1}let P=n;function ce(b,D){return e.getContext(b,D)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ua}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",ot,!1),P===null){const D="webgl2";if(P=ce(D,b),P===null)throw ce(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let $t,Zt,wt,ue,k,it,A,M,O,j,et,Z,Tt,lt,pt,Dt,z,tt,zt,Pt,yt,Ot,Gt,de;function U(){$t=new Lp(P),$t.init(),Ot=new p0(P,$t),Zt=new Ep(P,$t,t,Ot),wt=new u0(P),ue=new Dp(P),k=new Zm,it=new f0(P,$t,wt,k,Zt,Ot,ue),A=new Ap(v),M=new Pp(v),O=new Bu(P),Gt=new bp(P,O),j=new Ip(P,O,ue,Gt),et=new Op(P,j,O,ue),zt=new Np(P,Zt,it),Dt=new Tp(k),Z=new jm(v,A,M,$t,Zt,Gt,Dt),Tt=new S0(v,k),lt=new Qm,pt=new r0($t),tt=new Sp(v,A,M,wt,et,f,l),z=new h0(v,et,Zt),de=new b0(P,ue,Zt,wt),Pt=new wp(P,$t,ue),yt=new Up(P,$t,ue),ue.programs=Z.programs,v.capabilities=Zt,v.extensions=$t,v.properties=k,v.renderLists=lt,v.shadowMap=z,v.state=wt,v.info=ue}U();const st=new y0(v,P);this.xr=st,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=$t.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=$t.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(K,X,!1))},this.getSize=function(b){return b.set(K,X)},this.setSize=function(b,D,H=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,X=D,e.width=Math.floor(b*Q),e.height=Math.floor(D*Q),H===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(K*Q,X*Q).floor()},this.setDrawingBufferSize=function(b,D,H){K=b,X=D,Q=H,e.width=Math.floor(b*H),e.height=Math.floor(D*H),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(xt)},this.setViewport=function(b,D,H,G){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,D,H,G),wt.viewport(S.copy(xt).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(bt)},this.setScissor=function(b,D,H,G){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,D,H,G),wt.scissor(L.copy(bt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(b){wt.setScissorTest(Xt=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){gt=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(b=!0,D=!0,H=!0){let G=0;if(b){let F=!1;if(R!==null){const rt=R.texture.format;F=rt===va||rt===xa||rt===_a}if(F){const rt=R.texture.type,mt=rt===Cn||rt===hi||rt===ps||rt===Yi||rt===pa||rt===ma,Mt=tt.getClearColor(),St=tt.getClearAlpha(),It=Mt.r,Ut=Mt.g,Ct=Mt.b;mt?(d[0]=It,d[1]=Ut,d[2]=Ct,d[3]=St,P.clearBufferuiv(P.COLOR,0,d)):(m[0]=It,m[1]=Ut,m[2]=Ct,m[3]=St,P.clearBufferiv(P.COLOR,0,m))}else G|=P.COLOR_BUFFER_BIT}D&&(G|=P.DEPTH_BUFFER_BIT),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),lt.dispose(),pt.dispose(),k.dispose(),A.dispose(),M.dispose(),et.dispose(),Gt.dispose(),de.dispose(),Z.dispose(),st.dispose(),st.removeEventListener("sessionstart",un),st.removeEventListener("sessionend",za),jn.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=ue.autoReset,D=z.enabled,H=z.autoUpdate,G=z.needsUpdate,F=z.type;U(),ue.autoReset=b,z.enabled=D,z.autoUpdate=H,z.needsUpdate=G,z.type=F}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Lt(b){const D=b.target;D.removeEventListener("dispose",Lt),Kt(D)}function Kt(b){_e(b),k.remove(b)}function _e(b){const D=k.get(b).programs;D!==void 0&&(D.forEach(function(H){Z.releaseProgram(H)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,H,G,F,rt){D===null&&(D=Ft);const mt=F.isMesh&&F.matrixWorld.determinant()<0,Mt=ph(b,D,H,G,F);wt.setMaterial(G,mt);let St=H.index,It=1;if(G.wireframe===!0){if(St=j.getWireframeAttribute(H),St===void 0)return;It=2}const Ut=H.drawRange,Ct=H.attributes.position;let Qt=Ut.start*It,fe=(Ut.start+Ut.count)*It;rt!==null&&(Qt=Math.max(Qt,rt.start*It),fe=Math.min(fe,(rt.start+rt.count)*It)),St!==null?(Qt=Math.max(Qt,0),fe=Math.min(fe,St.count)):Ct!=null&&(Qt=Math.max(Qt,0),fe=Math.min(fe,Ct.count));const pe=fe-Qt;if(pe<0||pe===1/0)return;Gt.setup(F,G,Mt,H,St);let ke,te=Pt;if(St!==null&&(ke=O.get(St),te=yt,te.setIndex(ke)),F.isMesh)G.wireframe===!0?(wt.setLineWidth(G.wireframeLinewidth*ae()),te.setMode(P.LINES)):te.setMode(P.TRIANGLES);else if(F.isLine){let Et=G.linewidth;Et===void 0&&(Et=1),wt.setLineWidth(Et*ae()),F.isLineSegments?te.setMode(P.LINES):F.isLineLoop?te.setMode(P.LINE_LOOP):te.setMode(P.LINE_STRIP)}else F.isPoints?te.setMode(P.POINTS):F.isSprite&&te.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)te.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Et=F._multiDrawStarts,Re=F._multiDrawCounts,ee=F._multiDrawCount,tn=St?O.get(St).bytesPerElement:1,fi=k.get(G).currentProgram.getUniforms();for(let Be=0;Be<ee;Be++)fi.setValue(P,"_gl_DrawID",Be),te.render(Et[Be]/tn,Re[Be])}else if(F.isInstancedMesh)te.renderInstances(Qt,pe,F.count);else if(H.isInstancedBufferGeometry){const Et=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Re=Math.min(H.instanceCount,Et);te.renderInstances(Qt,pe,Re)}else te.render(Qt,pe)};function Ae(b,D,H){b.transparent===!0&&b.side===je&&b.forceSinglePass===!1?(b.side=Fe,b.needsUpdate=!0,bs(b,D,H),b.side=Yn,b.needsUpdate=!0,bs(b,D,H),b.side=je):bs(b,D,H)}this.compile=function(b,D,H=null){H===null&&(H=b),p=pt.get(H),p.init(D),x.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==H&&b.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return b.traverse(function(F){const rt=F.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){const Mt=rt[mt];Ae(Mt,H,F),G.add(Mt)}else Ae(rt,H,F),G.add(rt)}),x.pop(),p=null,G},this.compileAsync=function(b,D,H=null){const G=this.compile(b,D,H);return new Promise(F=>{function rt(){if(G.forEach(function(mt){k.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){F(b);return}setTimeout(rt,10)}$t.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Jt=null;function xn(b){Jt&&Jt(b)}function un(){jn.stop()}function za(){jn.start()}const jn=new Kc;jn.setAnimationLoop(xn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(b){Jt=b,st.setAnimationLoop(b),b===null?jn.stop():jn.start()},st.addEventListener("sessionstart",un),st.addEventListener("sessionend",za),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(D),D=st.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,D,R),p=pt.get(b,x.length),p.init(D),x.push(p),vt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Yt.setFromProjectionMatrix(vt),nt=this.localClippingEnabled,q=Dt.init(this.clippingPlanes,nt),_=lt.get(b,g.length),_.init(),g.push(_),st.enabled===!0&&st.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Dr(rt,D,-1/0,v.sortObjects)}Dr(b,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,gt),Ht=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ht&&tt.addToRenderList(_,b),this.info.render.frame++,q===!0&&Dt.beginShadows();const H=p.state.shadowsArray;z.render(H,b,D),q===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,F=_.transmissive;if(p.setupLights(),D.isArrayCamera){const rt=D.cameras;if(F.length>0)for(let mt=0,Mt=rt.length;mt<Mt;mt++){const St=rt[mt];Ba(G,F,b,St)}Ht&&tt.render(b);for(let mt=0,Mt=rt.length;mt<Mt;mt++){const St=rt[mt];ka(_,b,St,St.viewport)}}else F.length>0&&Ba(G,F,b,D),Ht&&tt.render(b),ka(_,b,D);R!==null&&(it.updateMultisampleRenderTarget(R),it.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,D),Gt.resetDefaultState(),I=-1,w=null,x.pop(),x.length>0?(p=x[x.length-1],q===!0&&Dt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Dr(b,D,H,G){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Yt.intersectsSprite(b)){G&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(vt);const mt=et.update(b),Mt=b.material;Mt.visible&&_.push(b,mt,Mt,H,At.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Yt.intersectsObject(b))){const mt=et.update(b),Mt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),At.copy(mt.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(vt)),Array.isArray(Mt)){const St=mt.groups;for(let It=0,Ut=St.length;It<Ut;It++){const Ct=St[It],Qt=Mt[Ct.materialIndex];Qt&&Qt.visible&&_.push(b,mt,Qt,H,At.z,Ct)}}else Mt.visible&&_.push(b,mt,Mt,H,At.z,null)}}const rt=b.children;for(let mt=0,Mt=rt.length;mt<Mt;mt++)Dr(rt[mt],D,H,G)}function ka(b,D,H,G){const F=b.opaque,rt=b.transmissive,mt=b.transparent;p.setupLightsView(H),q===!0&&Dt.setGlobalState(v.clippingPlanes,H),G&&wt.viewport(S.copy(G)),F.length>0&&Ss(F,D,H),rt.length>0&&Ss(rt,D,H),mt.length>0&&Ss(mt,D,H),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ba(b,D,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ui(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?gs:Cn,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const rt=p.state.transmissionRenderTarget[G.id],mt=G.viewport||S;rt.setSize(mt.z,mt.w);const Mt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(V),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),Ht?tt.render(H):v.clear();const St=v.toneMapping;v.toneMapping=Xn;const It=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),q===!0&&Dt.setGlobalState(v.clippingPlanes,G),Ss(b,H,G),it.updateMultisampleRenderTarget(rt),it.updateRenderTargetMipmap(rt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Ct=0,Qt=D.length;Ct<Qt;Ct++){const fe=D[Ct],pe=fe.object,ke=fe.geometry,te=fe.material,Et=fe.group;if(te.side===je&&pe.layers.test(G.layers)){const Re=te.side;te.side=Fe,te.needsUpdate=!0,Va(pe,H,G,ke,te,Et),te.side=Re,te.needsUpdate=!0,Ut=!0}}Ut===!0&&(it.updateMultisampleRenderTarget(rt),it.updateRenderTargetMipmap(rt))}v.setRenderTarget(Mt),v.setClearColor(V,Y),It!==void 0&&(G.viewport=It),v.toneMapping=St}function Ss(b,D,H){const G=D.isScene===!0?D.overrideMaterial:null;for(let F=0,rt=b.length;F<rt;F++){const mt=b[F],Mt=mt.object,St=mt.geometry,It=G===null?mt.material:G,Ut=mt.group;Mt.layers.test(H.layers)&&Va(Mt,D,H,St,It,Ut)}}function Va(b,D,H,G,F,rt){b.onBeforeRender(v,D,H,G,F,rt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.transparent===!0&&F.side===je&&F.forceSinglePass===!1?(F.side=Fe,F.needsUpdate=!0,v.renderBufferDirect(H,D,G,F,b,rt),F.side=Yn,F.needsUpdate=!0,v.renderBufferDirect(H,D,G,F,b,rt),F.side=je):v.renderBufferDirect(H,D,G,F,b,rt),b.onAfterRender(v,D,H,G,F,rt)}function bs(b,D,H){D.isScene!==!0&&(D=Ft);const G=k.get(b),F=p.state.lights,rt=p.state.shadowsArray,mt=F.state.version,Mt=Z.getParameters(b,F.state,rt,D,H),St=Z.getProgramCacheKey(Mt);let It=G.programs;G.environment=b.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(b.isMeshStandardMaterial?M:A).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,It===void 0&&(b.addEventListener("dispose",Lt),It=new Map,G.programs=It);let Ut=It.get(St);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===mt)return Ga(b,Mt),Ut}else Mt.uniforms=Z.getUniforms(b),b.onBeforeCompile(Mt,v),Ut=Z.acquireProgram(Mt,St),It.set(St,Ut),G.uniforms=Mt.uniforms;const Ct=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=Dt.uniform),Ga(b,Mt),G.needsLights=gh(b),G.lightsStateVersion=mt,G.needsLights&&(Ct.ambientLightColor.value=F.state.ambient,Ct.lightProbe.value=F.state.probe,Ct.directionalLights.value=F.state.directional,Ct.directionalLightShadows.value=F.state.directionalShadow,Ct.spotLights.value=F.state.spot,Ct.spotLightShadows.value=F.state.spotShadow,Ct.rectAreaLights.value=F.state.rectArea,Ct.ltc_1.value=F.state.rectAreaLTC1,Ct.ltc_2.value=F.state.rectAreaLTC2,Ct.pointLights.value=F.state.point,Ct.pointLightShadows.value=F.state.pointShadow,Ct.hemisphereLights.value=F.state.hemi,Ct.directionalShadowMap.value=F.state.directionalShadowMap,Ct.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ct.spotShadowMap.value=F.state.spotShadowMap,Ct.spotLightMatrix.value=F.state.spotLightMatrix,Ct.spotLightMap.value=F.state.spotLightMap,Ct.pointShadowMap.value=F.state.pointShadowMap,Ct.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function Ha(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=dr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Ga(b,D){const H=k.get(b);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function ph(b,D,H,G,F){D.isScene!==!0&&(D=Ft),it.resetTextureUnits();const rt=D.fog,mt=G.isMeshStandardMaterial?D.environment:null,Mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qn,St=(G.isMeshStandardMaterial?M:A).get(G.envMap||mt),It=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!H.morphAttributes.position,Qt=!!H.morphAttributes.normal,fe=!!H.morphAttributes.color;let pe=Xn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pe=v.toneMapping);const ke=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,te=ke!==void 0?ke.length:0,Et=k.get(G),Re=p.state.lights;if(q===!0&&(nt===!0||b!==w)){const Ye=b===w&&G.id===I;Dt.setState(G,b,Ye)}let ee=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Re.state.version||Et.outputColorSpace!==Mt||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==St||G.fog===!0&&Et.fog!==rt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Dt.numPlanes||Et.numIntersection!==Dt.numIntersection)||Et.vertexAlphas!==It||Et.vertexTangents!==Ut||Et.morphTargets!==Ct||Et.morphNormals!==Qt||Et.morphColors!==fe||Et.toneMapping!==pe||Et.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Et.__version=G.version);let tn=Et.currentProgram;ee===!0&&(tn=bs(G,D,F));let fi=!1,Be=!1,Nr=!1;const xe=tn.getUniforms(),Un=Et.uniforms;if(wt.useProgram(tn.program)&&(fi=!0,Be=!0,Nr=!0),G.id!==I&&(I=G.id,Be=!0),fi||w!==b){xe.setValue(P,"projectionMatrix",b.projectionMatrix),xe.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ye=xe.map.cameraPosition;Ye!==void 0&&Ye.setValue(P,ht.setFromMatrixPosition(b.matrixWorld)),Zt.logarithmicDepthBuffer&&xe.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Be=!0,Nr=!0)}if(F.isSkinnedMesh){xe.setOptional(P,F,"bindMatrix"),xe.setOptional(P,F,"bindMatrixInverse");const Ye=F.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),xe.setValue(P,"boneTexture",Ye.boneTexture,it))}F.isBatchedMesh&&(xe.setOptional(P,F,"batchingTexture"),xe.setValue(P,"batchingTexture",F._matricesTexture,it),xe.setOptional(P,F,"batchingIdTexture"),xe.setValue(P,"batchingIdTexture",F._indirectTexture,it),xe.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&xe.setValue(P,"batchingColorTexture",F._colorsTexture,it));const Or=H.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&zt.update(F,H,tn),(Be||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,xe.setValue(P,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Un.envMap.value=St,Un.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(Un.envMapIntensity.value=D.environmentIntensity),Be&&(xe.setValue(P,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&mh(Un,Nr),rt&&G.fog===!0&&Tt.refreshFogUniforms(Un,rt),Tt.refreshMaterialUniforms(Un,G,Q,X,p.state.transmissionRenderTarget[b.id]),dr.upload(P,Ha(Et),Un,it)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(dr.upload(P,Ha(Et),Un,it),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(P,"center",F.center),xe.setValue(P,"modelViewMatrix",F.modelViewMatrix),xe.setValue(P,"normalMatrix",F.normalMatrix),xe.setValue(P,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ye=G.uniformsGroups;for(let Fr=0,_h=Ye.length;Fr<_h;Fr++){const Wa=Ye[Fr];de.update(Wa,tn),de.bind(Wa,tn)}}return tn}function mh(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function gh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,D,H){k.get(b.texture).__webglTexture=D,k.get(b.depthTexture).__webglTexture=H;const G=k.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){const H=k.get(b);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,H=0){R=b,C=D,T=H;let G=!0,F=null,rt=!1,mt=!1;if(b){const St=k.get(b);St.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(P.FRAMEBUFFER,null),G=!1):St.__webglFramebuffer===void 0?it.setupRenderTarget(b):St.__hasExternalTextures&&it.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);const It=b.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(mt=!0);const Ut=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[D])?F=Ut[D][H]:F=Ut[D],rt=!0):b.samples>0&&it.useMultisampledRTT(b)===!1?F=k.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?F=Ut[H]:F=Ut,S.copy(b.viewport),L.copy(b.scissor),B=b.scissorTest}else S.copy(xt).multiplyScalar(Q).floor(),L.copy(bt).multiplyScalar(Q).floor(),B=Xt;if(wt.bindFramebuffer(P.FRAMEBUFFER,F)&&G&&wt.drawBuffers(b,F),wt.viewport(S),wt.scissor(L),wt.setScissorTest(B),rt){const St=k.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,H)}else if(mt){const St=k.get(b.texture),It=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.__webglTexture,H||0,It)}I=-1},this.readRenderTargetPixels=function(b,D,H,G,F,rt,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){wt.bindFramebuffer(P.FRAMEBUFFER,Mt);try{const St=b.texture,It=St.format,Ut=St.type;if(!Zt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-G&&H>=0&&H<=b.height-F&&P.readPixels(D,H,G,F,Ot.convert(It),Ot.convert(Ut),rt)}finally{const St=R!==null?k.get(R).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(b,D,H,G,F,rt,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){wt.bindFramebuffer(P.FRAMEBUFFER,Mt);try{const St=b.texture,It=St.format,Ut=St.type;if(!Zt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-G&&H>=0&&H<=b.height-F){const Ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.bufferData(P.PIXEL_PACK_BUFFER,rt.byteLength,P.STREAM_READ),P.readPixels(D,H,G,F,Ot.convert(It),Ot.convert(Ut),0),P.flush();const Qt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await mu(P,Qt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,rt)}finally{P.deleteBuffer(Ct),P.deleteSync(Qt)}return rt}}finally{const St=R!==null?k.get(R).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,St)}}},this.copyFramebufferToTexture=function(b,D=null,H=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(b.image.width*G),rt=Math.floor(b.image.height*G),mt=D!==null?D.x:0,Mt=D!==null?D.y:0;it.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,mt,Mt,F,rt),wt.unbindTexture()},this.copyTextureToTexture=function(b,D,H=null,G=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],D=arguments[2],F=arguments[3]||0,H=null);let rt,mt,Mt,St,It,Ut;H!==null?(rt=H.max.x-H.min.x,mt=H.max.y-H.min.y,Mt=H.min.x,St=H.min.y):(rt=b.image.width,mt=b.image.height,Mt=0,St=0),G!==null?(It=G.x,Ut=G.y):(It=0,Ut=0);const Ct=Ot.convert(D.format),Qt=Ot.convert(D.type);it.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const fe=P.getParameter(P.UNPACK_ROW_LENGTH),pe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ke=P.getParameter(P.UNPACK_SKIP_PIXELS),te=P.getParameter(P.UNPACK_SKIP_ROWS),Et=P.getParameter(P.UNPACK_SKIP_IMAGES),Re=b.isCompressedTexture?b.mipmaps[F]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Re.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Re.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mt),P.pixelStorei(P.UNPACK_SKIP_ROWS,St),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,It,Ut,rt,mt,Ct,Qt,Re.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,It,Ut,Re.width,Re.height,Ct,Re.data):P.texSubImage2D(P.TEXTURE_2D,F,It,Ut,rt,mt,Ct,Qt,Re),P.pixelStorei(P.UNPACK_ROW_LENGTH,fe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),P.pixelStorei(P.UNPACK_SKIP_ROWS,te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Et),F===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,H=null,G=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],D=arguments[3],F=arguments[4]||0);let rt,mt,Mt,St,It,Ut,Ct,Qt,fe;const pe=b.isCompressedTexture?b.mipmaps[F]:b.image;H!==null?(rt=H.max.x-H.min.x,mt=H.max.y-H.min.y,Mt=H.max.z-H.min.z,St=H.min.x,It=H.min.y,Ut=H.min.z):(rt=pe.width,mt=pe.height,Mt=pe.depth,St=0,It=0,Ut=0),G!==null?(Ct=G.x,Qt=G.y,fe=G.z):(Ct=0,Qt=0,fe=0);const ke=Ot.convert(D.format),te=Ot.convert(D.type);let Et;if(D.isData3DTexture)it.setTexture3D(D,0),Et=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)it.setTexture2DArray(D,0),Et=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const Re=P.getParameter(P.UNPACK_ROW_LENGTH),ee=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),fi=P.getParameter(P.UNPACK_SKIP_ROWS),Be=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,St),P.pixelStorei(P.UNPACK_SKIP_ROWS,It),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ut),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Et,F,Ct,Qt,fe,rt,mt,Mt,ke,te,pe.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Et,F,Ct,Qt,fe,rt,mt,Mt,ke,pe.data):P.texSubImage3D(Et,F,Ct,Qt,fe,rt,mt,Mt,ke,te,pe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Re),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,fi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be),F===0&&D.generateMipmaps&&P.generateMipmap(Et),wt.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&it.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?it.setTextureCube(b,0):b.isData3DTexture?it.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?it.setTexture2DArray(b,0):it.setTexture2D(b,0),wt.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,wt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sa?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Rr?"display-p3":"srgb"}}class Ra{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(t),this.near=e,this.far=n}clone(){return new Ra(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class E0 extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Se,this.environmentIntensity=1,this.environmentRotation=new Se,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class T0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ba("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new E;class br{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new br(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pr extends $n{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const ns=new E,Ii=new E,Ui=new E,Di=new dt,is=new dt,eh=new Wt,Ys=new E,ss=new E,qs=new E,Bl=new dt,po=new dt,Vl=new dt;class Ca extends ye{constructor(t=new Pr){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new T0(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new br(n,3,0,!1)),Li.setAttribute("uv",new br(n,2,3,!1))}this.geometry=Li,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),eh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Ui.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Ks(Ys.set(-.5,-.5,0),Ui,o,Ii,i,s),Ks(ss.set(.5,-.5,0),Ui,o,Ii,i,s),Ks(qs.set(.5,.5,0),Ui,o,Ii,i,s),Bl.set(0,0),po.set(1,0),Vl.set(1,1);let a=t.ray.intersectTriangle(Ys,ss,qs,!1,ns);if(a===null&&(Ks(ss.set(-.5,.5,0),Ui,o,Ii,i,s),po.set(0,1),a=t.ray.intersectTriangle(Ys,qs,ss,!1,ns),a===null))return;const l=t.ray.origin.distanceTo(ns);l<t.near||l>t.far||e.push({distance:l,point:ns.clone(),uv:on.getInterpolation(ns,Ys,ss,qs,Bl,po,Vl,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ks(r,t,e,n,i,s){Di.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(is.x=s*Di.x-i*Di.y,is.y=i*Di.x+s*Di.y):is.copy(Di),r.copy(t),r.x+=is.x,r.y+=is.y,r.applyMatrix4(eh)}const Hl=new E,Gl=new me,Wl=new me,A0=new E,Xl=new Wt,$s=new E,mo=new In,Yl=new Wt,go=new wa;class R0 extends jt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ka,this.bindMatrix=new Wt,this.bindMatrixInverse=new Wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$s),this.boundingBox.expandByPoint($s)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$s),this.boundingSphere.expandByPoint($s)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(i),t.ray.intersectsSphere(mo)!==!1&&(Yl.copy(i).invert(),go.copy(t.ray).applyMatrix4(Yl),!(this.boundingBox!==null&&go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,go)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new me,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ka?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Gl.fromBufferAttribute(i.attributes.skinIndex,t),Wl.fromBufferAttribute(i.attributes.skinWeight,t),Hl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Wl.getComponent(s);if(o!==0){const a=Gl.getComponent(s);Xl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(A0.copy(Hl).applyMatrix4(Xl),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class nh extends ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ih extends Ue{constructor(t=null,e=1,n=1,i,s,o,a,l,c=ze,h=ze,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ql=new Wt,C0=new Wt;class Pa{constructor(t=[],e=[]){this.uuid=mn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Wt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:C0;ql.multiplyMatrices(a,e[s]),ql.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pa(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ih(e,t,t,Qe,an);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new nh),this.bones.push(o),this.boneInverses.push(new Wt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Kl extends ge{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ni=new Wt,$l=new Wt,js=[],jl=new Kn,P0=new Wt,rs=new jt,os=new In;class L0 extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Kl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,P0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),jl.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(jl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),os.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),t.ray.intersectsSphere(os)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ni),$l.multiplyMatrices(n,Ni),rs.matrixWorld=$l,rs.raycast(t,js);for(let o=0,a=js.length;o<a;o++){const l=js[o];l.instanceId=s,l.object=this,e.push(l)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Kl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ih(new Float32Array(i*this.count),i,this.count,ga,an));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class I0 extends $n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zl=new Wt,la=new wa,Zs=new In,Js=new E;class U0 extends ye{constructor(t=new Ee,e=new I0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=s,t.ray.intersectsSphere(Zs)===!1)return;Zl.copy(i).invert(),la.copy(t.ray).applyMatrix4(Zl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const p=c.getX(m);Js.fromBufferAttribute(u,p),Jl(Js,p,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Js.fromBufferAttribute(u,m),Jl(Js,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jl(r,t,e,n,i,s,o){const a=la.distanceSqToPoint(r);if(a<e){const l=new E;la.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class xs extends Ue{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new dt:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new E,i=[],s=[],o=[],a=new E,l=new Wt;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new E)}s[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ce(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ce(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class La extends gn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class D0 extends La{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ia(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Qs=new E,_o=new Ia,xo=new Ia,vo=new Ia;class N0 extends gn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Qs.subVectors(i[0],i[1]).add(i[0]),c=Qs);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Qs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),_o.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,p),xo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,p),vo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(_o.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),xo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),vo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(_o.calc(l),xo.calc(l),vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ql(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function O0(r,t){const e=1-r;return e*e*t}function F0(r,t){return 2*(1-r)*r*t}function z0(r,t){return r*r*t}function us(r,t,e,n){return O0(r,t)+F0(r,e)+z0(r,n)}function k0(r,t){const e=1-r;return e*e*e*t}function B0(r,t){const e=1-r;return 3*e*e*r*t}function V0(r,t){return 3*(1-r)*r*r*t}function H0(r,t){return r*r*r*t}function ds(r,t,e,n,i){return k0(r,t)+B0(r,e)+V0(r,n)+H0(r,i)}class sh extends gn{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ds(t,i.x,s.x,o.x,a.x),ds(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class G0 extends gn{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ds(t,i.x,s.x,o.x,a.x),ds(t,i.y,s.y,o.y,a.y),ds(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rh extends gn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W0 extends gn{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oh extends gn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(us(t,i.x,s.x,o.x),us(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X0 extends gn{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(us(t,i.x,s.x,o.x),us(t,i.y,s.y,o.y),us(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ah extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ql(a,l.x,c.x,h.x,u.x),Ql(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var tc=Object.freeze({__proto__:null,ArcCurve:D0,CatmullRomCurve3:N0,CubicBezierCurve:sh,CubicBezierCurve3:G0,EllipseCurve:La,LineCurve:rh,LineCurve3:W0,QuadraticBezierCurve:oh,QuadraticBezierCurve3:X0,SplineCurve:ah});class Y0 extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new tc[i.type]().fromJSON(i))}return this}}class q0 extends Y0{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new rh(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new oh(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new sh(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ah(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new La(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ua extends Ee{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ce(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,u=new E,f=new dt,d=new E,m=new E,_=new E;let p=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-p,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let x=0;x<=e;x++){const v=n+x*h*i,y=Math.sin(v),C=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*C,o.push(u.x,u.y,u.z),f.x=x/e,f.y=T/(t.length-1),a.push(f.x,f.y);const R=l[3*T+0]*y,I=l[3*T+1],w=l[3*T+0]*C;c.push(R,I,w)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const y=v+x*t.length,C=y,T=y+t.length,R=y+t.length+1,I=y+1;s.push(C,T,I),s.push(R,I,T)}this.setIndex(s),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.points,t.segments,t.phiStart,t.phiLength)}}class wr extends Ua{constructor(t=1,e=1,n=4,i=8){const s=new q0;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new wr(t.radius,t.length,t.capSegments,t.radialSegments)}}class vs extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new E,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ln extends Ee{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let m=0;const _=[],p=n/2;let g=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function x(){const y=new E,C=new E;let T=0;const R=(e-t)/n;for(let I=0;I<=s;I++){const w=[],S=I/s,L=S*(e-t)+t;for(let B=0;B<=i;B++){const V=B/i,Y=V*l+a,K=Math.sin(Y),X=Math.cos(Y);C.x=L*K,C.y=-S*n+p,C.z=L*X,u.push(C.x,C.y,C.z),y.set(K,R,X).normalize(),f.push(y.x,y.y,y.z),d.push(V,1-S),w.push(m++)}_.push(w)}for(let I=0;I<i;I++)for(let w=0;w<s;w++){const S=_[w][I],L=_[w+1][I],B=_[w+1][I+1],V=_[w][I+1];h.push(S,L,V),h.push(L,B,V),T+=6}c.addGroup(g,T,0),g+=T}function v(y){const C=m,T=new dt,R=new E;let I=0;const w=y===!0?t:e,S=y===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),m++;const L=m;for(let B=0;B<=i;B++){const Y=B/i*l+a,K=Math.cos(Y),X=Math.sin(Y);R.x=w*X,R.y=p*S,R.z=w*K,u.push(R.x,R.y,R.z),f.push(0,S,0),T.x=K*.5+.5,T.y=X*.5*S+.5,d.push(T.x,T.y),m++}for(let B=0;B<i;B++){const V=C+B,Y=L+B;y===!0?h.push(Y,Y+1,V):h.push(Y+1,Y,V),I+=3}c.addGroup(g,I,y===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ys extends Ln{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ys(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Da extends Ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new E,y=new E,C=new E;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],y),d(e[T+2],C),l(v,y,C,x)}function l(x,v,y,C){const T=C+1,R=[];for(let I=0;I<=T;I++){R[I]=[];const w=x.clone().lerp(y,I/T),S=v.clone().lerp(y,I/T),L=T-I;for(let B=0;B<=L;B++)B===0&&I===T?R[I][B]=w:R[I][B]=w.clone().lerp(S,B/L)}for(let I=0;I<T;I++)for(let w=0;w<2*(T-I)-1;w++){const S=Math.floor(w/2);w%2===0?(f(R[I][S+1]),f(R[I+1][S]),f(R[I][S])):(f(R[I][S+1]),f(R[I+1][S+1]),f(R[I+1][S]))}}function c(x){const v=new E;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){const x=new E;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=p(x)/2/Math.PI+.5,C=g(x)/Math.PI+.5;o.push(y,1-C)}m(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],C=o[x+4],T=Math.max(v,y,C),R=Math.min(v,y,C);T>.9&&R<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,v){const y=x*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){const x=new E,v=new E,y=new E,C=new E,T=new dt,R=new dt,I=new dt;for(let w=0,S=0;w<s.length;w+=9,S+=6){x.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),T.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),I.set(o[S+4],o[S+5]),C.copy(x).add(v).add(y).divideScalar(3);const L=p(C);_(T,S+0,x,L),_(R,S+2,v,L),_(I,S+4,y,L)}}function _(x,v,y,C){C<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=C/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.vertices,t.indices,t.radius,t.details)}}class Na extends Da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Na(t.radius,t.detail)}}class Lr extends Ee{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,d=new E,m=new dt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const g=s+p/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<i;_++){const p=_*(n+1);for(let g=0;g<n;g++){const x=g+p,v=x,y=x+n+1,C=x+n+2,T=x+1;a.push(v,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ir extends Ee{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,f=new E,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const x=[],v=g/n;let y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(T+y,1-v),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const v=h[g][x+1],y=h[g][x],C=h[g+1][x],T=h[g+1][x+1];(g!==0||o>0)&&d.push(v,y,T),(g!==n-1||l<Math.PI)&&d.push(y,C,T)}this.setIndex(d),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class K0 extends $n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Se,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Je extends $n{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Se,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function tr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function $0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function j0(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function ec(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function lh(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class Ur{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Z0 extends Ur{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fi,endingEnd:Fi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zi:s=t,a=2*e-n;break;case _r:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zi:o=t,l=2*n-e;break;case _r:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,x=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,v=(-1-d)*p+(1.5+d)*_+.5*m,y=d*p-d*_;for(let C=0;C!==a;++C)s[C]=g*o[h+C]+x*o[c+C]+v*o[l+C]+y*o[u+C];return s}}class ch extends Ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}}class J0 extends Ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class _n{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new J0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Z0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case sa:e=this.InterpolantFactoryMethodLinear;break;case kr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return kr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&$0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kr,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=sa;class ji extends _n{constructor(t,e,n){super(t,e,n)}}ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=gr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class hh extends _n{}hh.prototype.ValueTypeName="color";class Er extends _n{}Er.prototype.ValueTypeName="number";class Q0 extends Ur{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Me.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ms extends _n{InterpolantFactoryMethodLinear(t){return new Q0(this.times,this.values,this.getValueSize(),t)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Zi extends _n{constructor(t,e,n){super(t,e,n)}}Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=gr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends _n{}ms.prototype.ValueTypeName="vector";class ca{constructor(t="",e=-1,n=[],i=ya){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(eg(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(_n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=j0(l);l=ec(l,1,h),c=ec(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Er(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,_){if(d.length!==0){const p=[],g=[];lh(d,p,g,m),p.length!==0&&_.push(new u(f,p,g))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const p=[],g=[];for(let x=0;x!==f[m].morphTargets.length;++x){const v=f[m];p.push(v.time),g.push(v.morphTarget===_?1:0)}i.push(new Er(".morphTargetInfluence["+_+"]",p,g))}l=d.length*o}else{const d=".bones["+e[u].name+"]";n(ms,d+".position",f,"pos",i),n(Ms,d+".quaternion",f,"rot",i),n(ms,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Er;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return hh;case"quaternion":return Ms;case"bool":case"boolean":return ji;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function eg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=tg(r.type);if(r.times===void 0){const e=[],n=[];lh(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}class uh extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ng extends uh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const yo=new Wt,nc=new E,ic=new E;class ig{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(nc),ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ic),e.updateMatrixWorld(),yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sg extends ig{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rg extends uh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class og{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Me.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Me.multiplyQuaternionsFlat(t,o,t,e,t,n),Me.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Oa="\\[\\]\\.:\\/",ag=new RegExp("["+Oa+"]","g"),Fa="[^"+Oa+"]",lg="[^"+Oa.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",Fa),hg=/(WCOD+)?/.source.replace("WCOD",lg),ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fa),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fa),fg=new RegExp("^"+cg+hg+ug+dg+"$"),pg=["material","materials","bones","map"];class mg{constructor(t,e,n){const i=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ne{constructor(t,e,n){this.path=e,this.parsedPath=n||ne.parseTrackName(e),this.node=ne.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ne.Composite(t,e,n):new ne(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ag,"")}static parseTrackName(t){const e=fg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);pg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ne.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ne.Composite=mg;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gg{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),l={endingStart:Fi,endingEnd:Fi};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ia,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case nu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case ya:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===eu;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===Fc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=zi,i.endingEnd=zi):(t?i.endingStart=this.zeroSlopeAtStart?zi:Fi:i.endingStart=_r,e?i.endingEnd=this.zeroSlopeAtEnd?zi:Fi:i.endingEnd=_r)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}const _g=new Float32Array(1);class xg extends di{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const f=i[u],d=f.name;let m=h[d];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;m=new og(ne.create(n,d,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new ch(new Float32Array(2),new Float32Array(2),1,_g),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?ca.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ya),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new gg(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?ca.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);const re={ready:!1,fps:30,unitHeight:29,bones:[],skeleton:{},clips:{},rootXZ:{},impacts:{},duration:{}};function vg(r,t){const e=atob(r),n=new ArrayBuffer(e.length),i=new Uint8Array(n);for(let a=0;a<e.length;a++)i[a]=e.charCodeAt(a);const s=new Int16Array(n,0,t),o=new Float32Array(t);for(let a=0;a<t;a++)o[a]=s[a]/32767;return o}async function yg(r){const t=await fetch(r);if(!t.ok)throw new Error("anims.json failed to load: "+t.status);const e=await t.json();re.fps=e.fps,re.unitHeight=e.unitHeight,re.bones=e.bones,re.skeleton=e.skeleton;const n=e.bones.length;for(const[i,s]of Object.entries(e.clips)){const o=s.frames,a=new Float32Array(o);for(let u=0;u<o;u++)a[u]=u/e.fps;const l=vg(s.quat,o*n*4),c=[];for(let u=0;u<n;u++){const f=new Float32Array(o*4);for(let d=0;d<o;d++){const m=(d*n+u)*4;f[d*4]=l[m],f[d*4+1]=l[m+1],f[d*4+2]=l[m+2],f[d*4+3]=l[m+3]}c.push(new Ms(e.bones[u]+".quaternion",a,f))}const h=new Float32Array(o*3);for(let u=0;u<o;u++)h[u*3]=0,h[u*3+1]=s.rootY[u],h[u*3+2]=0;c.push(new ms("mixamorigHips.position",a,h)),re.clips[i]=new ca(i,s.duration,c),re.rootXZ[i]=Float32Array.from(s.rootXZ),re.impacts[i]=s.impacts||[],re.duration[i]=s.duration}return re.ready=!0,re}const ct={RTP:.96,BETS:[1,5,10,25,50,100],STARTING_WALLET:1e3,MULT_BRACKETS:[[.58,.05,.85],[.26,.9,1.8],[.11,1.8,4],[.042,4,12],[.008,12,40]],TOKEN_VALUE:.006,KILL_VALUE_MIN:.05,KILL_VALUE_MAX:.16,PLAYER_SPEED:9.5,FLIGHT_DECK:6.5,BOT_FLIGHT_DECK:5,FLIGHT_CLEARANCE:1.8,FLIGHT_CLIMB:10,FLIGHT_DESCEND:7,FLIGHT_LOOKAHEAD:9,METEOR_APEX:10,METEOR_UP_TIME:.45,METEOR_HANG_TIME:.9,METEOR_FALL_SPEED:30,LANDING_RADIUS:8.5,PLAYER_HP:100,HP_REGEN:4,SWITCHES_PER_GAME:3,ADRENALINE_COOLDOWN:14,BOT_COUNT:26,BOT_SPEED:6,HIT_Y_RANGE:2.4,STALK_FRACTION:.65,HUNTER_COUNT:2,HUNTER_SPEED:11.5,HUNTER_HP:320,HUNTER_DAMAGE:.9,HUNTER_FIREBALL_AT:8,HUNTER_GIANT_AT:15,HUNTER_BLINK_AT:22,BLOCK:22,ROAD:8,CHUNK_RADIUS:5,RECYCLE_DIST:135,TOKEN_COUNT:150,PILL_COUNT:6,POTION_COUNT:6,TK_RANGE:13,TK_PULL_SPEED:8,TK_THROW_SPEED:27,PILLS:[{id:"absorb",name:"Power Absorption",emblem:"🧬",p:.45,duration:45},{id:"twopower",name:"Two Powers",emblem:"☯",p:.3,duration:30},{id:"extraswitch",name:"Extra Switch",emblem:"🔄",p:.25,duration:0}],POTIONS:[{id:"enlarge",name:"Enlarge",emblem:"🦹",p:1/3,duration:15},{id:"fireball",name:"Fireball",emblem:"☄",p:1/3,duration:0},{id:"landing",name:"Superhero Landing",emblem:"💥",p:1/3,duration:0}]},Xe=[{id:"flight",name:"Flight",color:9358335,rare:!1,desc:"Take to the sky. Toggle to soar above the city and dive back down.",cooldown:1.2,counter:"telekinesis"},{id:"speed",name:"Super Speed",color:16770140,rare:!1,desc:"A blinding burst of speed. Cross whole blocks before anyone reacts.",cooldown:5,counter:"cryo"},{id:"invisibility",name:"Invisibility",color:12568542,rare:!1,desc:"Fade out completely. Enemies lose track of you while you stalk them.",cooldown:10,counter:"xray"},{id:"telekinesis",name:"Telekinesis",color:12614655,rare:!1,desc:"HOLD to seize the nearest enemy or object, reel it in, and hurl it where you aim. Release early to drop it.",cooldown:6,counter:"teleport"},{id:"pyro",name:"Pyrokinesis",color:16742972,rare:!0,desc:"Channel a roaring cone of flame that incinerates everything ahead.",cooldown:6,counter:"cryo"},{id:"cryo",name:"Cryokinesis",color:10351359,rare:!0,desc:"Release a freezing nova. Frozen enemies shatter with a single hit.",cooldown:9,counter:"pyro"},{id:"teleport",name:"Teleportation",color:8257482,rare:!1,desc:"Blink instantly through space in the direction you are moving.",cooldown:3,counter:"speed"},{id:"xray",name:"X-Ray Vision",color:13696860,rare:!1,desc:"See through the city itself. Enemies and loot glow behind every wall.",cooldown:8,counter:"invisibility"},{id:"shapeshift",name:"Shapeshifting",color:16752098,rare:!1,desc:"Become a piece of scenery. Nobody looks twice at a bin — until it moves. Strike from cover for an instant kill.",cooldown:12,counter:"xray"},{id:"duplication",name:"Duplication",color:16757373,rare:!1,desc:"Split into a squad of clones that hunt everything around you.",cooldown:15,counter:"pyro"}],sc=r=>Xe.find(t=>t.id===r);function Mg(r){const t=sc(r);return sc(t?.counter)||Xe[Math.floor(Math.random()*Xe.length)]}function Mo(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Ee;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<r.length;++f){const d=r[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=r[f].attributes.position.count}l.setIndex(u)}for(const h in s){const u=rc(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const m=rc(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function rc(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new ge(o,e,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const _=h.getComponent(f,m);a.setComponent(f+u,m,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const fn={shadows:!1},N=(r=1,t)=>t===void 0?Math.random()*r:r+Math.random()*(t-r),hs=(r,t)=>Math.floor(N(r,t+1)),qt=r=>r[Math.floor(Math.random()*r.length)],fs=(r,t,e)=>Math.max(t,Math.min(e,r));function dh(r,t){let e=0;for(const i of r)e+=t(i);let n=Math.random()*e;for(const i of r)if(n-=t(i),n<=0)return i;return r[r.length-1]}function Bi(r){return r>=1e3?"$"+(r/1e3).toFixed(r>=1e4?0:1)+"k":"$"+r.toFixed(2)}const Sg=["Shadow","Neon","Turbo","Vex","Nova","Grim","Pixel","Crash","Zero","Hyper","Rogue","Static","Blitz","Omen","Drift","Venom","Echo","Frost","Ember","Volt","Ghost","Rex","Jinx","Onyx","Comet"],bg=["Viper","Fang","Wing","Fist","Byte","Strider","Bolt","Hound","Reaper","Kid","Prime","Shade","Storm","Claw","Wraith","Nine","Spark","Blade","Rush","Howl"];function wg(){const r=qt(Sg)+qt(bg);return Math.random()<.35?r+hs(2,99):r}const We=ct.BLOCK+ct.ROAD,So=ct.CHUNK_RADIUS;function oc(r=!1){const t=document.createElement("canvas");t.width=t.height=96;const e=t.getContext("2d");e.fillStyle=r?"#4a4038":"#3c4654",e.fillRect(0,0,96,96);for(let i=0;i<4;i++)for(let s=0;s<4;s++){const o=N(-18,18);e.fillStyle=r?`rgb(${190+o}, ${205+o}, ${220+o})`:`rgb(${150+o}, ${185+o}, ${215+o})`,e.fillRect(s*24+3,i*24+3,18,18),e.fillStyle="rgba(255,255,255,0.25)",e.fillRect(s*24+3,i*24+3,18,5)}const n=new xs(t);return n.wrapS=n.wrapT=mr,n.colorSpace=Ie,n}function Eg(){const r=document.createElement("canvas");r.width=128,r.height=64;const t=r.getContext("2d"),e=[[34,40,22],[60,32,26],[90,40,20],[50,44,18],[76,46,16]];for(const[i,s,o]of e){const a=t.createRadialGradient(i,s,2,i,s,o);a.addColorStop(0,"rgba(255,255,255,0.9)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(0,0,128,64)}const n=new xs(r);return n.colorSpace=Ie,n}function ac(r){const e=document.createElement("canvas");e.width=e.height=512;const n=e.getContext("2d"),i=512/We,s=ct.ROAD/2*i,o=1.6*i;if(r==="downtown"){n.fillStyle="#8d9299",n.fillRect(0,0,512,512),n.strokeStyle="rgba(60,64,70,0.5)",n.lineWidth=2;const d=512/8;for(let m=0;m<=8;m++)n.beginPath(),n.moveTo(m*d,0),n.lineTo(m*d,512),n.stroke(),n.beginPath(),n.moveTo(0,m*d),n.lineTo(512,m*d),n.stroke();for(let m=0;m<900;m++)n.fillStyle=`rgba(255,255,255,${N(.02,.07)})`,n.fillRect(N(0,512),N(0,512),N(1,3),N(1,3))}else{n.fillStyle="#5d8a48",n.fillRect(0,0,512,512);for(let d=0;d<5e3;d++){const m=Math.random();n.fillStyle=m<.5?`rgba(110,165,80,${N(.15,.4)})`:`rgba(70,105,55,${N(.15,.4)})`,n.fillRect(N(0,512),N(0,512),N(1,4),N(1,4))}}n.fillStyle=r==="downtown"?"#b9bcc2":"#c9c4b8",n.fillRect(s,s,512-s*2,o),n.fillRect(s,512-s-o,512-s*2,o),n.fillRect(s,s,o,512-s*2),n.fillRect(512-s-o,s,o,512-s*2),n.strokeStyle="rgba(90,90,95,0.45)",n.lineWidth=2;for(let d=1;d<10;d++){const m=s+(512-2*s)*(d/10);n.beginPath(),n.moveTo(m,s),n.lineTo(m,s+o),n.stroke(),n.beginPath(),n.moveTo(m,512-s-o),n.lineTo(m,512-s),n.stroke(),n.beginPath(),n.moveTo(s,m),n.lineTo(s+o,m),n.stroke(),n.beginPath(),n.moveTo(512-s-o,m),n.lineTo(512-s,m),n.stroke()}n.fillStyle="#33363c",n.fillRect(0,0,512,s),n.fillRect(0,512-s,512,s),n.fillRect(0,0,s,512),n.fillRect(512-s,0,s,512);for(let d=0;d<1400;d++){const m=Math.random()<.5,_=N(0,512),p=N(0,s)+(Math.random()<.5?0:512-s);n.fillStyle=`rgba(255,255,255,${N(.015,.05)})`,m?n.fillRect(p,_,2,2):n.fillRect(_,p,2,2)}n.strokeStyle="rgba(210,210,215,0.6)",n.lineWidth=2,n.strokeRect(s,s,512-s*2,512-s*2),n.fillStyle="rgba(235,210,110,0.8)";const a=2.6*i,l=2.6*i,c=.35*i;for(let d=l;d<512-a;d+=a+l)n.fillRect(d,0,a,c),n.fillRect(d,512-c,a,c),n.fillRect(0,d,c,a),n.fillRect(512-c,d,c,a);n.fillStyle="rgba(230,230,235,0.75)";const h=s*.8,u=.55*i;for(let d=0;d<5;d++){const m=s+o+1.2*i+d*u*2;if(m>s+o+8*i)break;n.fillRect(m,s*.1,u,h),n.fillRect(m,512-s*.9,u,h),n.fillRect(s*.1,m,h,u),n.fillRect(512-s*.9,m,h,u)}const f=new xs(e);return f.colorSpace=Ie,f.anisotropy=4,f}const as=new ft;function Gn(r,t,e=0){r.index&&(r=r.toNonIndexed()),as.set(t),e&&as.multiplyScalar(1+N(-e,e));const n=r.attributes.position.count,i=new Float32Array(n*3);for(let s=0;s<n;s++)i[s*3]=as.r,i[s*3+1]=as.g,i[s*3+2]=as.b;return r.setAttribute("color",new ge(i,3)),r}function _t(r,t,e,n,i,s,o,a,{ry:l=0,shade:c=.06}={}){const h=new hn(t,e,n);l&&h.rotateY(l),h.translate(i,s,o),r.push(Gn(h,a,c))}function bo(r,t,e,n,i,s,o){const a=new ys(t,e,4);a.rotateY(Math.PI/4),a.translate(n,i,s),r.push(Gn(a,o,.05))}function lc(r,t,e){let n=0;for(const i of r)Math.abs(t-i.x)<i.hw&&Math.abs(e-i.z)<i.hd&&(n=Math.max(n,i.top));return n}function Ge(r,t,e,n,i,s,o=1){const a=new Na(t,o);a.translate(e,n,i),r.push(Gn(a,s,.1))}function Ne(r,t,e,n,i,s,o,a,l){const c=new Ln(t,e,n,i);c.translate(s,o,a),r.push(Gn(c,l,.05))}function er(r,t,e){const n=Math.sin(r*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}const cc=r=>r*r*(3-2*r);function hc(r,t,e){const n=Math.floor(r),i=Math.floor(t),s=cc(r-n),o=cc(t-i);return er(n,i,e)*(1-s)*(1-o)+er(n+1,i,e)*s*(1-o)+er(n,i+1,e)*(1-s)*o+er(n+1,i+1,e)*s*o}class Tg{constructor(t){if(this.scene=t,this.chunks=new Map,this.focus={x:0,z:0},this.seed=N(0,1e3),this.drift=0,this.xray=!1,this.orphans=[],t.fog=new Ra(13624824,60,142),this.hemi=new ng(14084607,6126157,.95),t.add(this.hemi),this.sun=new rg(16773845,1.7),this.sun.position.set(60,110,40),t.add(this.sun),t.add(this.sun.target),fn.shadows){this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const e=this.sun.shadow.camera;e.left=-70,e.right=70,e.top=70,e.bottom=-70,e.near=20,e.far=260,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.6}this.buildSky(),this.windowTexCool=oc(!1),this.windowTexWarm=oc(!0),this.groundMats={suburb:new Je({map:ac("suburb")}),downtown:new Je({map:ac("downtown")})},this.groundGeo=new _s(We,We),this.groundGeo.rotateX(-Math.PI/2),this.vcMat=new Je({vertexColors:!0}),this.towerMatCool=new Je({map:this.windowTexCool,vertexColors:!0}),this.towerMatWarm=new Je({map:this.windowTexWarm,vertexColors:!0}),this.buildingMats=[this.vcMat,this.towerMatCool,this.towerMatWarm],this.update(this.focus,0,!0)}buildSky(){const t=new Ir(420,24,14),e=t.attributes.position,n=new Float32Array(e.count*3),i=new ft(5217776),s=new ft(11129845),o=new ft(15266555),a=new ft;for(let c=0;c<e.count;c++){const h=Math.max(0,Math.min(1,e.getY(c)/420));h<.25?a.lerpColors(o,s,h/.25):a.lerpColors(s,i,(h-.25)/.75),n[c*3]=a.r,n[c*3+1]=a.g,n[c*3+2]=a.b}t.setAttribute("color",new ge(n,3)),this.skyDome=new jt(t,new cn({vertexColors:!0,side:Fe,fog:!1,depthWrite:!1})),this.skyDome.renderOrder=-10,this.scene.add(this.skyDome);const l=Eg();this.clouds=[];for(let c=0;c<10;c++){const h=new Ca(new Pr({map:l,transparent:!0,opacity:N(.5,.8),depthWrite:!1,fog:!1})),u=N(34,64);h.scale.set(u,u*.45,1),h.position.set(N(-260,260),N(58,95),N(-260,260)),this.scene.add(h),this.clouds.push({spr:h,speed:N(.9,2.2)})}}themeAt(t,e){const n=t*.14+this.drift,i=e*.14,s=t*.31-this.drift*.6,o=e*.31;return hc(n,i,this.seed)*.72+hc(s,o,this.seed+37)*.28>.5?"downtown":"suburb"}update(t,e=0,n=!1){if(this.focus={x:t.x,z:t.z},this.drift+=e*.004,this.sun.position.set(t.x+60,110,t.z+40),this.sun.target.position.set(t.x,0,t.z),this.skyDome?.position.set(t.x,0,t.z),this.clouds)for(const a of this.clouds)a.spr.position.x+=a.speed*e,a.spr.position.x-t.x>300&&(a.spr.position.x-=600),a.spr.position.x-t.x<-300&&(a.spr.position.x+=600),a.spr.position.z-t.z>300&&(a.spr.position.z-=600),a.spr.position.z-t.z<-300&&(a.spr.position.z+=600);const i=Math.round(t.x/We),s=Math.round(t.z/We);for(const[a,l]of this.chunks)(Math.abs(l.cx-i)>So+1||Math.abs(l.cz-s)>So+1)&&(this.disposeChunk(l),this.chunks.delete(a));let o=n?1/0:4;for(let a=0;a<=So&&o>0;a++)for(let l=i-a;l<=i+a&&o>0;l++)for(let c=s-a;c<=s+a&&o>0;c++){if(Math.max(Math.abs(l-i),Math.abs(c-s))!==a)continue;const h=l+":"+c;this.chunks.has(h)||(this.chunks.set(h,this.buildChunk(l,c)),o--)}for(let a=this.orphans.length-1;a>=0;a--){const l=this.orphans[a];l.ttl-=e,l.ttl<=0&&!l.busy&&(this.destroyLiftableMesh(l),this.orphans.splice(a,1))}}disposeChunk(t){for(const e of t.liftables)e.alive&&(e.busy?(e.ttl=30,this.orphans.push(e),t.group.remove(e.mesh),this.scene.add(e.mesh)):this.destroyLiftableMesh(e));this.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&!e.userData.shared&&e.geometry.dispose()})}destroyLiftableMesh(t){t.alive=!1,t.mesh.parent?.remove(t.mesh),t.mesh.geometry.dispose()}buildChunk(t,e){const n=this.themeAt(t,e),i=t*We,s=e*We,o=new ln,a=[],l=[],c=[],h=[],u=[],f=[],d=new jt(this.groundGeo,this.groundMats[n]);d.position.set(i,0,s),d.userData.shared=!0,d.receiveShadow=fn.shadows,o.add(d);const m=(g,x,v,y,C)=>a.push({x:g,z:x,hw:v,hd:y,h:C}),_=(g,x,v,y,C)=>l.push({x:g,z:x,hw:v,hd:y,top:C});n==="suburb"?this.buildSuburbBlock(i,s,h,c,m,_):this.buildDowntownBlock(i,s,h,u,f,c,m,_);const p=(g,x)=>{if(!g.length)return;const v=new jt(Mo(g,!1),x);v.castShadow=fn.shadows,v.receiveShadow=fn.shadows,o.add(v)};p(h,this.vcMat),p(u,this.towerMatCool),p(f,this.towerMatWarm);for(const g of c)g.mesh.castShadow=fn.shadows,g.baseY=lc(l,g.mesh.position.x,g.mesh.position.z),g.mesh.position.y=g.baseY,o.add(g.mesh);return this.scene.add(o),{cx:t,cz:e,theme:n,group:o,colliders:a,platforms:l,liftables:c}}buildSuburbBlock(t,e,n,i,s,o){const a=ct.BLOCK,l=[15260872,14270888,12834278,14148289,14860214,15787728,12111833,14274792,15391144,13230804],c=[9063227,5989744,7426122,5204818,8478527,4148060];for(let h=0;h<2;h++)for(let u=0;u<2;u++){const f=t+(h-.5)*(a/2),d=e+(u-.5)*(a/2),m=u===0?Math.PI:0;if(Math.random()<.15){this.tree(n,f+N(-2.5,2.5),d+N(-2.5,2.5),N(.9,1.6),s),Math.random()<.7&&this.tree(n,f+N(-3,3),d+N(-3,3),N(.7,1.2),s),this.flowerPatch(n,f+N(-3,3),d+N(-3,3)),Ge(n,N(.5,.8),f+N(-3,3),.5,d+N(-3,3),5214010);continue}const _=qt(l),p=qt(c),g=hs(0,4);this.house(n,f,d,m,_,p,g,s,o),Math.random()<.7&&this.tree(n,f+qt([-1,1])*N(3.4,4.6),d+N(-3.5,3.5),N(.7,1.3),s),Math.random()<.5&&Ge(n,N(.35,.6),f+N(-4,4),.35,d+N(-4,4),qt([5214010,6136389,4160048])),Math.random()<.45&&this.flowerPatch(n,f+N(-4,4),d+N(-4,4)),Math.random()<.3&&this.shed(n,f+qt([-1,1])*3.8,d-Math.sign(Math.cos(m)||1)*3.6,s);const x=d+(u===0?-1:1)*(a/4-.4);if(Math.random()<.4?(_t(n,4.2,.55,.09,f-2.6,.32,x,15263455),_t(n,4.2,.55,.09,f+2.6,.32,x,15263455),_t(n,.12,.75,.12,f-4.6,.4,x,14210508),_t(n,.12,.75,.12,f+4.6,.4,x,14210508)):Math.random()<.4&&_t(n,9,.7,.55,f,.4,x,qt([4160048,5214010]),{shade:.12}),Math.random()<.5){const v=d+(u===0?-1:1)*N(3.2,3.8),y=f+qt([-1,1])*N(1,1.6);_t(n,.09,1,.09,y,.5,v,5916212),_t(n,.34,.24,.5,y,1.1,v,qt([10104880,3827394,3816770]))}}Math.random()<.45&&this.spawnCar(i,t+N(-a/3,a/3),e+qt([-1,1])*(a/2+1.6),0),Math.random()<.3&&this.spawnBin(i,t+qt([-1,1])*(a/2-1),e+N(-a/3,a/3))}house(t,e,n,i,s,o,a,l,c){const h=Math.sin(i),u=Math.cos(i),f=(m,_)=>({x:e+m*u+_*h,z:n-m*h+_*u}),d=new ft(s).multiplyScalar(.8).getHex();if(a===0){const m=N(5.5,6.5),_=N(4.6,5.4),p=N(3,3.6);_t(t,m,p,_,e,p/2,n,s,{ry:i}),_t(t,m+.35,.22,_+.35,e,p+.05,n,d,{ry:i}),bo(t,Math.max(m,_)*.72,N(1.7,2.3),e,p+.15,n,o),l(e,n,Math.max(m,_)/2+.2,Math.max(m,_)/2+.2,p+2);const g=f(m/2+1.5,.4);_t(t,3,2.4,3.4,g.x,1.2,g.z,s,{ry:i}),_t(t,2.4,1.8,.15,g.x+h*1.75,1,g.z+u*1.75,5923694,{ry:i}),_t(t,3.2,.25,3.6,g.x,2.5,g.z,o,{ry:i}),l(g.x,g.z,1.7,1.9,2.6),this.houseFace(t,e,n,m,_,p,i,s),this.driveway(t,g.x,g.z,i)}else if(a===1){const m=N(5,6),_=N(4.6,5.4),p=N(5.4,6.2);_t(t,m,p,_,e,p/2,n,s,{ry:i}),_t(t,m+.3,.18,_+.3,e,p/2+.05,n,d,{ry:i}),bo(t,Math.max(m,_)*.7,N(1.6,2.1),e,p,n,o),l(e,n,Math.max(m,_)/2+.2,Math.max(m,_)/2+.2,p+2),_t(t,.6,1.6,.6,e+m*.28,p+.8,n+_*.2,10119765),this.houseFace(t,e,n,m,_,p,i,s,!0)}else if(a===2){const m=N(6.5,7.5),_=N(3.6,4.2),p=N(3,3.4);_t(t,m,p,_,e,p/2,n,s,{ry:i});const g=N(3.2,3.8),x=f(-m/2+g/2,_/2+1.4);_t(t,g,p,3.4,x.x,p/2,x.z,s,{ry:i}),_t(t,m+.5,.3,_+.5,e,p+.1,n,o,{ry:i}),_t(t,g+.5,.3,3.9,x.x,p+.1,x.z,o,{ry:i}),l(e,n,m/2+.4,_/2+.4,p+1),l(x.x,x.z,g/2+.3,1.9,p+1),this.houseFace(t,e,n,m,_,p,i,s)}else if(a===3){const m=N(5,6),_=N(4.4,5),p=N(3.4,4),g=qt([10134701,8226961,13357784,9075565]);_t(t,m,p,_,e,p/2,n,s,{ry:i});const x=f(m*.42,-_*.1);_t(t,m*.55,p*1.35,_*.7,x.x,p*1.35/2,x.z,g,{ry:i}),_t(t,m+.4,.22,_+.4,e,p+.11,n,3817544,{ry:i}),_t(t,m*.55+.4,.22,_*.7+.4,x.x,p*1.35+.11,x.z,3817544,{ry:i});const v=f(-m*.1,_/2+.08);_t(t,m*.55,1.2,.12,v.x,1.8,v.z,10471135,{ry:i,shade:.03}),l(e,n,m/2+.5,_/2+.4,p*1.4+1),this.driveway(t,f(m/2+1.6,.6).x,f(m/2+1.6,.6).z,i)}else{const m=N(4.8,5.6),_=N(4.2,4.8),p=N(2.8,3.2);_t(t,m,p,_,e,p/2,n,s,{ry:i}),bo(t,Math.max(m,_)*.78,N(2,2.6),e,p,n,o);const g=f(0,_/2+1.1);_t(t,m*.9,.22,2,g.x,.13,g.z,12034436,{ry:i}),c(g.x,g.z,m*.45,1,.24);const x=f(-m*.38,_/2+1.9),v=f(m*.38,_/2+1.9);_t(t,.14,2.2,.14,x.x,1.1,x.z,15263455),_t(t,.14,2.2,.14,v.x,1.1,v.z,15263455),_t(t,m*.95,.18,2.3,g.x,2.3,g.z,o,{ry:i}),l(e,n,Math.max(m,_)/2+.2,Math.max(m,_)/2+.2,p+2),this.houseFace(t,e,n,m,_,p,i,s)}}houseFace(t,e,n,i,s,o,a,l,c=!1){const h=Math.sin(a),u=Math.cos(a),f=s/2+.06,d=(p,g,x,v,y)=>{const C=e+p*u+f*h,T=n-p*h+f*u;_t(t,x,v,.12,C,g,T,y,{ry:a,shade:.03})};d(i*.22,1.05,.95,2.1,qt([8010542,3230318,4086330,7232049])),d(i*.22,.12,1.3,.24,12170408),d(-i*.24,1.45,1.2,1.1,12375016),d(-i*.24,1.45,1.36,1.26,15789800),d(-i*.24,1.45,1.2,1.1,12375016),i>6&&d(0,1.45,1,1,12375016),c&&(d(-i*.24,3.9,1.1,1,12375016),d(i*.24,3.9,1.1,1,12375016));const m=e+i*.22*u+(s/2+2.2)*h,_=n-i*.22*h+(s/2+2.2)*u;_t(t,1.1,.06,4.2,m,.04,_,13223096,{ry:a,shade:.02})}driveway(t,e,n,i){_t(t,3,.05,5.5,e,.035,n,10197137,{ry:i,shade:.02})}shed(t,e,n,i){const s=N(1.8,2.4),o=N(1.8,2.2);_t(t,s,o,s*.85,e,o/2,n,qt([9073493,7174760,8219228])),_t(t,s+.3,.35,s*.85+.3,e,o+.15,n,5984328),i(e,n,s/2+.1,s/2,o+.5)}flowerPatch(t,e,n){_t(t,1.6,.12,1.1,e,.07,n,7164472,{shade:.08});for(let i=0;i<4;i++)Ge(t,.12,e+N(-.6,.6),.22,n+N(-.4,.4),qt([14965882,15913806,14189032,15764043,16777215]),0)}tree(t,e,n,i,s){Ne(t,.16*i,.26*i,2.1*i,6,e,1.05*i,n,7031346);const o=qt([5214010,6136389,4160048,7776319,4888168]);Ge(t,1.15*i,e,2.6*i,n,o),Ge(t,.8*i,e+.7*i,2.1*i,n+.3*i,o),Ge(t,.7*i,e-.6*i,2.3*i,n-.4*i,o),s?.(e,n,.4*i,.4*i,2.5*i)}buildDowntownBlock(t,e,n,i,s,o,a,l){const c=ct.BLOCK,h=Math.random()<.16;if(_t(n,c,.14,c,t,.07,e,10988466,{shade:.03}),l(t,e,c/2,c/2,.14),h){Ne(n,1.6,1.9,.5,12,t,.35,e,9278105),Ne(n,.4,.5,1.3,8,t,1,e,10467529),Ge(n,.42,t,1.75,e,12574962),l(t,e,1.34,1.34,.6);for(let u=0;u<3;u++){const f=N(0,Math.PI*2),d=N(4,8),m=t+Math.cos(f)*d,_=e+Math.sin(f)*d;_t(n,1.8,.5,1.8,m,.35,_,8291210),l(m,_,.9,.9,.6),this.tree(n,m,_,N(.6,.9),a)}this.spawnBench(o,t+N(-5,5),e+N(-5,5),N(0,Math.PI))}else{const u=hs(1,2);for(let f=0;f<u;f++){const d=N(7,11),m=N(7,11),p=Math.random()<.2?N(30,48):N(9,26),g=t+(u===1?0:f===0?-c/4.2:c/4.2)+N(-1,1),x=e+N(-2.5,2.5),v=Math.random()<.35,y=v?s:i,C=Math.random();if(C<.18&&d>8?this.cylinderTower(n,y,g,x,Math.min(d,m)/2,p,v):C<.4?this.slabTower(n,y,g,x,d,m,p,v):this.tieredTower(n,y,g,x,d,m,p,v),a(g,x,d/2,m/2,p),Math.random()<.5){const T=x+m/2+.5;_t(n,d*.7,.12,1.1,g,2.6,T,qt([12728890,3046865,3115610,14263583]),{shade:.04})}}if(Math.random()<.6&&this.lamppost(n,t+c/2-.8,e+c/2-.8),Math.random()<.4&&this.lamppost(n,t-c/2+.8,e-c/2+.8),Math.random()<.4&&this.spawnBench(o,t+qt([-1,1])*(c/2-1.6),e+N(-6,6),Math.PI/2),Math.random()<.35&&this.spawnBin(o,t+N(-c/3,c/3),e+qt([-1,1])*(c/2-1)),Math.random()<.45){const f=t+qt([-1,1])*(c/2-1.6),d=e+N(-6,6);_t(n,1.4,.4,1.4,f,.28,d,8291210),l(f,d,.7,.7,.48),this.tree(n,f,d,N(.5,.75),a)}}Math.random()<.55&&this.spawnCar(o,t+qt([-1,1])*(c/2+1.6),e+N(-c/3,c/3),Math.PI/2)}towerTint(t,e){return new ft().setHSL(t?N(.06,.12):N(.52,.62),t?N(.12,.3):N(.05,.22),N(.45,.62)*e).getHex()}scaleTowerUV(t,e,n,i){const s=t.attributes.uv;for(let o=0;o<s.count;o++)s.setXY(o,s.getX(o)*Math.max(e,n)/2.4,s.getY(o)*i/2.4)}roofClutter(t,e,n,i){Math.random()<.7&&_t(t,N(1,2),N(.8,1.4),N(1,2),e+N(-1,1),i+.6,n+N(-1,1),5593955),Math.random()<.35&&Ne(t,.06,.06,N(2,5),4,e,i+1.8,n,7830917),Math.random()<.22&&Ne(t,.9,.9,1.6,8,e+N(-1.5,1.5),i+1.6,n+N(-1.5,1.5),8019016),Math.random()<.2&&_t(t,N(2.4,3.6),N(1.2,1.8),.15,e,i+1.4,n,qt([14240362,3843690,3827394,14263583]),{shade:.02})}tieredTower(t,e,n,i,s,o,a,l){const c=this.towerTint(l,N(.72,1.15)),h=a>26?hs(2,3):1;let u=s,f=o,d=0;for(let m=0;m<h;m++){const _=m===h-1?a-d:a*N(.35,.5),p=new hn(u,_,f);this.scaleTowerUV(p,u,f,_),p.translate(n,d+_/2,i),e.push(Gn(p,c,.02)),_t(t,u+.3,.3,f+.3,n,d+_+.1,i,3817544),d+=_,u*=N(.68,.82),f*=N(.68,.82)}_t(t,s+.4,1.4,o+.4,n,.7,i,3028028),this.roofClutter(t,n,i,a)}slabTower(t,e,n,i,s,o,a,l){const c=this.towerTint(l,N(.8,1.15)),h=s,u=Math.max(5,o*.6),f=new hn(h,a,u);this.scaleTowerUV(f,h,u,a),f.translate(n,a/2,i),e.push(Gn(f,c,.02));const d=hs(2,4);for(let m=0;m<d;m++){const _=n-h/2+h/(d+1)*(m+1);_t(t,.35,a*N(.85,1.02),u+.5,_,a/2,i,7173504,{shade:.04})}_t(t,h+.5,.4,u+.6,n,a+.2,i,3817544),_t(t,h+.4,1.4,u+.4,n,.7,i,3028028),this.roofClutter(t,n,i,a)}cylinderTower(t,e,n,i,s,o,a){const l=this.towerTint(a,N(.8,1.15)),c=new Ln(s*N(.82,.95),s,o,14),h=c.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*(Math.PI*s)/2.4,h.getY(u)*o/2.4);c.translate(n,o/2,i),e.push(Gn(c,l,.02)),Ne(t,s*.6,s*.75,.8,12,n,o+.3,i,3817544),Ne(t,s+.25,s+.35,1.4,14,n,.7,i,3028028),Math.random()<.5&&Ne(t,.06,.06,N(3,6),4,n,o+2.2,i,7830917)}lamppost(t,e,n){Ne(t,.07,.1,4.6,6,e,2.3,n,3817544),_t(t,1.1,.12,.25,e+.45,4.6,n,3817544),_t(t,.4,.15,.3,e+.9,4.52,n,16773833,{shade:0})}makeLiftable(t,e,n,i,s){const o=new jt(Mo(t,!1),this.vcMat);return o.position.set(e,0,n),{mesh:o,type:i,radius:s,alive:!0,busy:!1,x:e,z:n}}propGeos(t){const e=[];if(t==="car"){const n=qt([12728890,3827394,14211292,3026484,3843690,14263583,8668856,15262938]);this.carGeos(e,n)}else if(t==="bin")Ne(e,.45,.4,1,10,0,.5,0,qt([4157002,5593955,7225151])),Ne(e,.5,.5,.1,10,0,1.02,0,3028028);else if(t==="bench")_t(e,2.2,.12,.55,0,.5,0,9070146),_t(e,2.2,.5,.1,0,.85,-.25,9070146),_t(e,.12,.5,.5,-.95,.25,0,3817544),_t(e,.12,.5,.5,.95,.25,0,3817544);else if(t==="mailbox")_t(e,.09,1,.09,0,.5,0,5916212),_t(e,.34,.24,.5,0,1.1,0,qt([10104880,3827394,3816770]));else if(t==="hydrant")Ne(e,.16,.2,.8,8,0,.4,0,12728890),Ne(e,.12,.12,.14,8,0,.87,0,12728890),_t(e,.5,.12,.14,0,.5,0,12728890);else if(t==="bush"){const n=qt([4160048,5214010,6136389]);Ge(e,.6,0,.55,0,n),Ge(e,.45,.4,.45,.2,n),Ge(e,.4,-.35,.5,-.2,n)}else if(t==="lamppost")Ne(e,.07,.1,4.6,6,0,2.3,0,3817544),_t(e,1.1,.12,.25,.45,4.6,0,3817544),_t(e,.4,.15,.3,.9,4.52,0,16773833,{shade:0});else{Ne(e,.16*.8,.26*.8,2.1*.8,6,0,1.05*.8,0,7031346);const i=qt([5214010,6136389,4160048]);Ge(e,1.15*.8,0,2.6*.8,0,i),Ge(e,.8*.8,.7*.8,2.1*.8,.3*.8,i),Ge(e,.7*.8,-.6*.8,2.3*.8,-.4*.8,i)}return e}makePropMesh(t){const e=new jt(Mo(this.propGeos(t),!1),this.vcMat);return e.castShadow=fn.shadows,e}carGeos(t,e){_t(t,1.9,.5,4.1,0,.62,0,e,{shade:.03}),_t(t,1.8,.16,.9,0,.92,1.5,e,{shade:.03}),_t(t,1.7,.52,2,0,1.1,-.2,12572392,{shade:.03}),_t(t,1.72,.1,2.1,0,1.38,-.2,e,{shade:.03}),_t(t,1.92,.18,.22,0,.42,2.05,10133672),_t(t,1.92,.18,.22,0,.42,-2.05,10133672),_t(t,.34,.12,.08,-.6,.72,2.06,16773833),_t(t,.34,.12,.08,.6,.72,2.06,16773833),_t(t,.34,.12,.08,-.6,.72,-2.06,12728890),_t(t,.34,.12,.08,.6,.72,-2.06,12728890);for(const[n,i]of[[-.85,1.35],[.85,1.35],[-.85,-1.35],[.85,-1.35]]){const s=new Ln(.34,.34,.24,10);s.rotateZ(Math.PI/2),s.translate(n,.34,i),t.push(Gn(s,1842724))}}spawnCar(t,e,n,i){const s=this.makeLiftable(this.propGeos("car"),e,n,"car",2.1);s.mesh.rotation.y=i+(Math.random()<.5?Math.PI:0),t.push(s)}spawnBin(t,e,n){t.push(this.makeLiftable(this.propGeos("bin"),e,n,"bin",.8))}spawnBench(t,e,n,i){const s=this.makeLiftable(this.propGeos("bench"),e,n,"bench",1.4);s.mesh.rotation.y=i,t.push(s)}liftablesNear(t,e){const n=[],i=Math.round(t.x/We),s=Math.round(t.z/We);for(let o=i-1;o<=i+1;o++)for(let a=s-1;a<=s+1;a++){const l=this.chunks.get(o+":"+a);if(l)for(const c of l.liftables){if(!c.alive||c.busy)continue;const h=Math.hypot(c.mesh.position.x-t.x,c.mesh.position.z-t.z);h<e&&n.push({l:c,d:h})}}return n}removeLiftable(t){this.destroyLiftableMesh(t);const e=this.orphans.indexOf(t);e>=0&&this.orphans.splice(e,1)}collidersNear(t,e){const n=[],i=Math.round(t/We),s=Math.round(e/We);for(let o=i-1;o<=i+1;o++)for(let a=s-1;a<=s+1;a++){const l=this.chunks.get(o+":"+a);l&&n.push(...l.colliders)}return n}resolve(t,e,n=0){for(const i of this.collidersNear(t.x,t.z)){if(n>i.h+.5)continue;const s=t.x-i.x,o=t.z-i.z,a=i.hw+e-Math.abs(s),l=i.hd+e-Math.abs(o);a>0&&l>0&&(a<l?t.x+=(s>=0?1:-1)*a:t.z+=(o>=0?1:-1)*l)}}isBlocked(t,e,n=.8){for(const i of this.collidersNear(t,e))if(Math.abs(t-i.x)<i.hw+n&&Math.abs(e-i.z)<i.hd+n)return!0;return!1}groundHeightAt(t,e){let n=0;const i=Math.round(t/We),s=Math.round(e/We);for(let o=i-1;o<=i+1;o++)for(let a=s-1;a<=s+1;a++){const l=this.chunks.get(o+":"+a);l&&(n=Math.max(n,lc(l.platforms,t,e)))}return n}buildingHeightAt(t,e){let n=0;for(const i of this.collidersNear(t,e))Math.abs(t-i.x)<i.hw&&Math.abs(e-i.z)<i.hd&&(n=Math.max(n,i.h));return n}randomOpenPos(t=this.focus,e=6,n=90){for(let i=0;i<50;i++){const s=N(0,Math.PI*2),o=N(e,n),a=t.x+Math.cos(s)*o,l=t.z+Math.sin(s)*o;if(!this.isBlocked(a,l,1.1))return{x:a,z:l}}return{x:t.x+N(-8,8),z:t.z+N(-8,8)}}setXray(t){this.xray=t;for(const e of this.buildingMats)e.transparent=t,e.opacity=t?.22:1,e.depthWrite=!t,e.needsUpdate=!0}}const Ke=4096,Ag=`
attribute float psize;
attribute vec3 pcolor;
attribute float palpha;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = pcolor;
  vAlpha = palpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = psize * (240.0 / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
}`,Rg=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float a = smoothstep(0.5, 0.12, d) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`;class Cg{constructor(t){this.scene=t,this.pos=new Float32Array(Ke*3),this.vel=new Float32Array(Ke*3),this.life=new Float32Array(Ke),this.life0=new Float32Array(Ke),this.grav=new Float32Array(Ke),this.drag=new Float32Array(Ke),this.cursor=0;const e=new Ee;e.setAttribute("position",new ge(this.pos,3)),this.sizeAttr=new ge(new Float32Array(Ke),1),this.colorAttr=new ge(new Float32Array(Ke*3),3),this.alphaAttr=new ge(new Float32Array(Ke),1),e.setAttribute("psize",this.sizeAttr),e.setAttribute("pcolor",this.colorAttr),e.setAttribute("palpha",this.alphaAttr);const n=new Pn({vertexShader:Ag,fragmentShader:Rg,transparent:!0,depthWrite:!1,blending:fr});this.points=new U0(e,n),this.points.frustumCulled=!1,t.add(this.points),this.rings=[];for(let i=0;i<12;i++){const s=new jt(new Lr(.82,1,40),new cn({transparent:!0,depthWrite:!1,side:je,blending:fr}));s.rotation.x=-Math.PI/2,s.visible=!1,t.add(s),this.rings.push({mesh:s,t:0,dur:0,maxR:0})}this.shakeAmt=0,this.shakeOffset=new E,this._c=new ft}emit(t,e,n,{count:i=12,color:s=16777215,speed:o=5,life:a=.7,size:l=1.6,gravity:c=-6,drag:h=1.5,spread:u=1,up:f=0,jitter:d=.2}={}){for(let m=0;m<i;m++){const _=this.cursor;this.cursor=(this.cursor+1)%Ke;const p=_*3;this.pos[p]=t+N(-d,d),this.pos[p+1]=e+N(-d,d),this.pos[p+2]=n+N(-d,d);const g=N(0,Math.PI*2),x=Math.acos(N(-1,1)),v=o*N(.4,1.1);this.vel[p]=Math.sin(x)*Math.cos(g)*v*u,this.vel[p+1]=Math.abs(Math.cos(x))*v*.7+f,this.vel[p+2]=Math.sin(x)*Math.sin(g)*v*u,this.life[_]=this.life0[_]=a*N(.6,1.2),this.grav[_]=c,this.drag[_]=h,this.sizeAttr.array[_]=l*N(.7,1.4),this._c.set(s);const y=N(-.12,.12);this.colorAttr.array[p]=Math.min(1,this._c.r+y),this.colorAttr.array[p+1]=Math.min(1,this._c.g+y),this.colorAttr.array[p+2]=Math.min(1,this._c.b+y),this.alphaAttr.array[_]=1}}emitDir(t,e,n,i,{count:s=10,color:o=16777215,speed:a=10,life:l=.5,size:c=1.6,gravity:h=0,drag:u=1,cone:f=.35}={}){for(let d=0;d<s;d++){const m=this.cursor;this.cursor=(this.cursor+1)%Ke;const _=m*3;this.pos[_]=t,this.pos[_+1]=e,this.pos[_+2]=n;const p=a*N(.6,1.15);this.vel[_]=(i.x+N(-f,f))*p,this.vel[_+1]=(i.y+N(-f,f))*p,this.vel[_+2]=(i.z+N(-f,f))*p,this.life[m]=this.life0[m]=l*N(.7,1.2),this.grav[m]=h,this.drag[m]=u,this.sizeAttr.array[m]=c*N(.7,1.4),this._c.set(o),this.colorAttr.array[_]=this._c.r,this.colorAttr.array[_+1]=this._c.g,this.colorAttr.array[_+2]=this._c.b,this.alphaAttr.array[m]=1}}ring(t,e,{color:n=16777215,maxR:i=8,dur:s=.55,y:o=.15}={}){const a=this.rings.find(l=>!l.mesh.visible)||this.rings[0];a.mesh.visible=!0,a.mesh.position.set(t,o,e),a.mesh.material.color.set(n),a.mesh.material.opacity=.9,a.t=0,a.dur=s,a.maxR=i,a.mesh.scale.setScalar(.01)}addShake(t){this.shakeAmt=Math.min(1.6,this.shakeAmt+t)}update(t){for(let n=0;n<Ke;n++){if(this.life[n]<=0)continue;this.life[n]-=t;const i=n*3;if(this.life[n]<=0){this.alphaAttr.array[n]=0;continue}const s=Math.max(0,1-this.drag[n]*t);this.vel[i]*=s,this.vel[i+1]=this.vel[i+1]*s+this.grav[n]*t,this.vel[i+2]*=s,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t,this.pos[i+1]<.05&&(this.pos[i+1]=.05),this.alphaAttr.array[n]=Math.min(1,this.life[n]/this.life0[n]*1.6)}this.points.geometry.attributes.position.needsUpdate=!0,this.alphaAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0;for(const n of this.rings){if(!n.mesh.visible)continue;n.t+=t;const i=n.t/n.dur;if(i>=1){n.mesh.visible=!1;continue}const s=1-Math.pow(1-i,3);n.mesh.scale.setScalar(Math.max(.01,n.maxR*s)),n.mesh.material.opacity=.9*(1-i)}this.shakeAmt=Math.max(0,this.shakeAmt-t*2.6);const e=this.shakeAmt*this.shakeAmt*.55;this.shakeOffset.set(N(-e,e),N(-e,e),N(-e,e))}}const Pg=1,Lg=14,Ig=.9,Ug=["#ffe45c","#ff6b6b","#7dffca","#8ecbff","#ff9de2","#ffb347","#c9ff5c","#c07bff","#ffffff"],uc=new Map;function Dg(r){let t=uc.get(r);if(t)return t;const e=document.createElement("canvas"),n=e.getContext("2d"),i='96px Bangers, Impact, "Arial Black", sans-serif';n.font=i;const s=Math.ceil(n.measureText(r).width)+48;return e.width=Math.max(64,s),e.height=128,n.font=i,n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=12,n.strokeStyle="#141018",n.strokeText(r,e.width/2,e.height/2+4),n.fillStyle="#ffffff",n.fillText(r,e.width/2,e.height/2+4),t=new xs(e),t.colorSpace=Ie,t.minFilter=Ze,t.generateMipmaps=!1,t.userData.aspect=e.width/e.height,uc.set(r,t),t}class Ng{constructor(t){this.scene=t,this.live=[],this.pool=[]}spawn(t,e,n,i,{size:s=1,color:o=null,camPos:a=null}={}){this.live.length>=Lg&&this.kill(this.live[0]);let l=this.pool.pop();l||(l=new Ca(new Pr({transparent:!0,depthWrite:!1,depthTest:!0})),l.renderOrder=5,this.scene.add(l));const c=Dg(i);l.material.map=c,l.material.opacity=0,l.material.color.set(o||qt(Ug)),l.material.rotation=N(-.28,.28),l.material.needsUpdate=!0;let h=t,u=e,f=n;if(a){const m=t-a.x,_=n-a.z,p=Math.hypot(m,_)||1;h+=m/p*.7,f+=_/p*.7}l.position.set(h,u,f),l.visible=!0;const d=.55*s;return l.userData={t:0,h:d,aspect:c.userData.aspect,vy:N(.9,1.4),drift:N(-.3,.3)},l.scale.set(.01,.01,1),this.live.push(l),l}kill(t){const e=this.live.indexOf(t);e>=0&&this.live.splice(e,1),t.visible=!1,this.pool.push(t)}update(t){for(let e=this.live.length-1;e>=0;e--){const n=this.live[e],i=n.userData;i.t+=t;const s=i.t/Pg;if(s>=1){this.kill(n);continue}let o;if(s<.18){const l=s/.18;o=1.25*Math.sin(l*Math.PI*.5)}else s<.32?o=1.25-.25*((s-.18)/.14):o=1;const a=s<.6?1:1-(s-.6)/.4;n.material.opacity=Ig*Math.min(1,s/.08)*a,n.scale.set(i.h*i.aspect*o,i.h*o,1),n.position.y+=i.vy*t*(s>.3?1:.3),n.position.x+=i.drift*t}}}const Og={absorb:4054167,twopower:12614655,extraswitch:7252223},Fg={enlarge:16747586,fireball:16728128,landing:16765286};function zg(r){const t=new ln,e=new Je({color:r,emissive:r,emissiveIntensity:.5}),n=new Je({color:15922424,emissive:15922424,emissiveIntensity:.25}),i=new jt(new wr(.22,.3,4,10),e),s=new jt(new wr(.225,.02,4,10),n);return s.position.y=-.16,t.add(i,s),t.rotation.z=Math.PI/5,t}function kg(r){const t=new ln,e=new Je({color:r,emissive:r,emissiveIntensity:.55,transparent:!0,opacity:.9}),n=new jt(new Ir(.32,12,10),e);n.scale.y=1.15;const i=new jt(new Ln(.09,.11,.28,8),e);i.position.y=.42;const s=new jt(new Ln(.1,.1,.1,8),new Je({color:9070146}));return s.position.y=.6,t.add(n,i,s),t}class Bg{constructor(t,e){this.scene=t,this.world=e;const n=new Ln(.34,.34,.09,14);n.rotateX(Math.PI/2),this.tokenMat=new Je({color:16765286,emissive:11172382,emissiveIntensity:.6}),this.tokenMesh=new L0(n,this.tokenMat,ct.TOKEN_COUNT),this.tokenMesh.frustumCulled=!1,t.add(this.tokenMesh),this.tokens=[];for(let i=0;i<ct.TOKEN_COUNT;i++)this.tokens.push({x:0,z:0,active:!1,respawn:N(0,2),spin:N(0,Math.PI*2)});this.items=[],this._m=new Wt,this._q=new Me,this._s=new E(1,1,1),this._e=new Se}respawnAll(){for(const t of this.tokens)this.placeToken(t);for(const t of this.items)this.scene.remove(t.mesh);this.items=[];for(let t=0;t<ct.PILL_COUNT;t++)this.spawnItem("pill");for(let t=0;t<ct.POTION_COUNT;t++)this.spawnItem("potion")}placeToken(t){const e=this.world.randomOpenPos(this.world.focus,8,95);t.x=e.x,t.z=e.z,t.active=!0}spawnItem(t){const e=t==="pill"?ct.PILLS:ct.POTIONS,n=dh(e,l=>l.p),i=t==="pill"?Og[n.id]:Fg[n.id],s=t==="pill"?zg(i):kg(i),o=this.world.randomOpenPos(this.world.focus,12,95);s.position.set(o.x,1,o.z);const a=new jt(new vs(.9,20),new cn({color:i,transparent:!0,opacity:.28,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=-.85,s.add(a),this.scene.add(s),this.items.push({kind:t,def:n,mesh:s,x:o.x,z:o.z,active:!0,bobPhase:N(0,Math.PI*2),respawn:0})}update(t,e){const n=this.world.focus;for(let i=0;i<this.tokens.length;i++){const s=this.tokens[i];if(s.active&&Math.hypot(s.x-n.x,s.z-n.z)>ct.RECYCLE_DIST&&this.placeToken(s),!s.active){s.respawn-=t,s.respawn<=0&&this.placeToken(s),this._s.setScalar(.001),this._m.compose(new E(0,-10,0),this._q,this._s),this.tokenMesh.setMatrixAt(i,this._m);continue}s.spin+=t*2.2,this._e.set(0,s.spin,0),this._q.setFromEuler(this._e),this._s.setScalar(1);const o=.75+Math.sin(e*2.4+s.spin)*.12;this._m.compose(new E(s.x,o,s.z),this._q,this._s),this.tokenMesh.setMatrixAt(i,this._m)}this.tokenMesh.instanceMatrix.needsUpdate=!0;for(let i=this.items.length-1;i>=0;i--){const s=this.items[i];if(!s.active){s.respawn-=t,s.respawn<=0&&(this.scene.remove(s.mesh),this.items.splice(i,1),this.spawnItem(s.kind));continue}if(Math.hypot(s.x-n.x,s.z-n.z)>ct.RECYCLE_DIST+10){const o=this.world.randomOpenPos(n,15,95);s.x=o.x,s.z=o.z,s.mesh.position.x=o.x,s.mesh.position.z=o.z}s.mesh.rotation.y=e*1.4+s.bobPhase,s.mesh.position.y=1+Math.sin(e*2+s.bobPhase)*.18}}collectTokens(t,e,n){let i=0;for(const s of this.tokens){if(!s.active)continue;const o=s.x-t,a=s.z-e;o*o+a*a<n*n&&(s.active=!1,s.respawn=N(5,14),i++)}return i}collectItem(t,e,n){for(const i of this.items){if(!i.active)continue;const s=i.x-t,o=i.z-e;if(s*s+o*o<n*n)return i.active=!1,i.respawn=N(18,30),i.mesh.visible=!1,i}return null}setXray(t){for(const e of this.items)e.mesh.traverse(n=>{n.material&&(n.material.depthTest=!t,n.material.needsUpdate=!0)})}}const dc={flight:{idle:"ninja_idle_3",cast:"spell_cast",build:{height:1,shoulder:1,mass:.95,waist:.9,legLen:1.02,definition:.9},age:32,hair:"surfer",hairColor:13214298,facialHair:null,gear:["aviatorGoggles"],cape:"short",palette:{primary:2908121,secondary:1188943,accent:16052710,glow:9358335},hueRange:.12,suit:"flight",combat:{style:"aerial",speed:1.1,damage:46,range:2.6,arc:.4,moves:["flying_kick","jab_cross","side_kick","roundhouse_kick_2"]}},speed:{idle:"ninja_idle_3",cast:"spell_cast",build:{height:.96,shoulder:.88,mass:.75,waist:.82,legLen:1.05,definition:.85},age:22,hair:"spiky",hairColor:2367775,facialHair:null,gear:["speedShades","lightningBoots"],cape:null,palette:{primary:15905306,secondary:11740702,accent:16774084,glow:16770140},hueRange:.1,suit:"speed",combat:{style:"flurry",speed:1.55,damage:30,range:2.3,arc:.45,moves:["jab_cross","uppercut_jab","elbow_uppercut_combo","mma_kick_2"]}},invisibility:{idle:"ninja_idle_3",cast:"spell_cast",build:{height:.99,shoulder:.95,mass:.9,waist:1,legLen:1,definition:.6},age:52,hair:"bald",hairColor:0,facialHair:null,gear:["facelessMask"],cape:null,palette:{primary:7304840,secondary:3817293,accent:12173777,glow:12568542},hueRange:.15,suit:"invisibility",combat:{style:"precise",speed:1.05,damage:52,range:2.6,arc:.4,moves:["hook","standing_melee_kick","mma_kick","jab_cross"]}},telekinesis:{idle:"idle_4",cast:"standing_2h_magic_attack_03",build:{height:1.02,shoulder:1,mass:.95,waist:.92,legLen:1,definition:.8},age:41,hair:"quiff",hairColor:2759700,hairStreak:13224406,facialHair:"goatee",gear:[],cape:"medium",palette:{primary:8073151,secondary:2757698,accent:14992490,glow:12614655},hueRange:.1,suit:"telekinesis",combat:{style:"force",speed:.95,damage:50,range:3.2,arc:.5,moves:["standing_melee_attack_horizontal","mutant_swiping","hook","standing_melee_attack_360_high"]}},pyro:{idle:"ninja_idle_3",cast:"standing_1h_magic_attack_01",build:{height:.99,shoulder:.98,mass:.92,waist:.88,legLen:1,definition:.95},age:28,hair:"flame",hairColor:16742938,facialHair:null,gear:["robinMask"],cape:null,palette:{primary:14235678,secondary:2823184,accent:16754470,glow:16742972},hueRange:.06,suit:"pyro",combat:{style:"blazing",speed:1.15,damage:44,range:2.7,arc:.45,moves:["roundhouse_kick","hook","mma_kick_3","kicking"]}},cryo:{idle:"idle_4",cast:"standing_1h_magic_attack_01",build:{height:1.06,shoulder:1.18,mass:1.35,waist:1.15,legLen:.98,definition:.85},age:38,hair:"mohawk",hairColor:14216437,facialHair:"fullBeard",gear:["baneMask"],cape:"long",palette:{primary:3108776,secondary:1451578,accent:15004671,glow:10351359},hueRange:.08,suit:"cryo",combat:{style:"heavy",speed:.7,damage:92,range:2.8,arc:.45,moves:["standing_melee_attack_downward","stomp","standing_melee_attack_horizontal","standing_melee_attack_360_high"]}},teleport:{idle:"ninja_idle_3",cast:"spell_cast",build:{height:.9,shoulder:1.08,mass:1.15,waist:1.1,legLen:.92,definition:.85},age:27,hair:"buzz",hairColor:2893344,facialHair:null,gear:["bandana"],cape:null,palette:{primary:2073992,secondary:933176,accent:14090229,glow:8257482},hueRange:.12,suit:"teleport",combat:{style:"infighter",speed:1.25,damage:56,range:2,arc:.55,moves:["uppercut_jab","elbow_uppercut_combo","hook","jab_cross"]}},xray:{idle:"ninja_idle_3",cast:"spell_cast",build:{height:1.1,shoulder:.92,mass:.8,waist:.85,legLen:1.1,definition:.7},age:33,hair:"bald",hairColor:0,facialHair:"stubbleGoatee",gear:["xrayGoggles"],cape:"short",palette:{primary:1317399,secondary:658699,accent:10354524,glow:13696860},hueRange:.05,suit:"xray",combat:{style:"reach",speed:.9,damage:40,range:3.6,arc:.35,moves:["standing_melee_kick","side_kick","kicking","sword_and_shield_slash"]}},shapeshift:{idle:"idle_4",cast:"spell_cast",build:{height:.99,shoulder:.96,mass:.9,waist:.98,legLen:1,definition:.65},age:42,hair:"sidepart",hairColor:4863270,facialHair:null,gear:[],cape:null,palette:{primary:13778063,secondary:3871280,accent:16766959,glow:16752098},hueRange:.15,suit:"shapeshift",combat:{style:"morph",speed:1,damage:50,range:3,arc:.5,moves:["mutant_swiping","standing_melee_attack_horizontal","roundhouse_kick_2","hook"]}},duplication:{idle:"idle_4",cast:"spell_cast",build:{height:1.08,shoulder:1.22,mass:1.4,waist:1.05,legLen:1.02,definition:1},age:29,hair:"crew",hairColor:3811868,facialHair:null,gear:["sunglasses"],cape:null,palette:{primary:13923882,secondary:2891284,accent:3881792,glow:16757373},hueRange:.08,suit:"duplication",combat:{style:"bruiser",speed:.75,damage:86,range:2.9,arc:.45,moves:["drop_kick","standing_melee_attack_downward","stomp","standing_melee_attack_360_high"]}}},fc=r=>dc[r]||dc.flight;function Vg(r,t=Math.random()){const e=(t-.5)*2*r.hueRange,n=(t*7.31%1-.5)*.12,i=(s,o=0)=>{const a=new ft(s),l={};return a.getHSL(l),a.setHSL((l.h+e+1)%1,l.s,Math.max(.05,Math.min(.92,l.l+o))),a};return{primary:i(r.palette.primary,n),secondary:i(r.palette.secondary,n*.5),accent:i(r.palette.accent,0),glow:new ft(r.palette.glow),skin:Hg(t),hair:new ft(r.hairColor),hairStreak:r.hairStreak?new ft(r.hairStreak):null}}const pc=[15978408,14988428,13209443,11103558,8211505,5912098];function Hg(r){return new ft(pc[Math.floor(r*13.7%1*pc.length)])}const Gg=new ft,rn=(r,t=.9)=>Math.abs(Math.atan2(Math.sin(r-Math.PI/2),Math.cos(r-Math.PI/2)))<t,nr=(r,t,e)=>Gg.copy(r).lerp(t,Math.max(0,Math.min(1,e))).clone(),mc={flight(r,t){const{region:e,t:n,theta:i}=r;return e==="torso"?rn(i,.75)&&Math.abs(n-(.66-Math.abs(Math.sin(i-Math.PI/2))*.18))<.06?t.accent:!rn(i,1.3)||n<.12?t.secondary:t.primary:e==="foreArm"?n>.35?t.accent:t.primary:e==="hand"?t.accent:e==="shin"?n>.55?t.accent:t.secondary:e==="foot"?t.accent:e==="thigh"?t.secondary:t.primary},speed(r,t){const{region:e,t:n,theta:i}=r;if(e==="torso"){const s=Math.sin(i-Math.PI/2),o=.55+.25*s+(s>0?.1:-.1)*Math.sign(Math.sin(n*30));return rn(i,1.1)&&Math.abs(n-o)<.05?t.accent:rn(i,1.3)?t.primary:t.secondary}return e==="upperArm"?n<.25?t.secondary:t.primary:e==="foreArm"?t.secondary:e==="hand"?t.accent:e==="thigh"?t.primary:e==="shin"?n>.4?t.accent:t.secondary:e==="foot"?t.accent:t.primary},invisibility(r,t){const{region:e,t:n,theta:i}=r;if(e==="head"||e==="neck")return t.primary;const o=(Math.floor(n*8)+Math.floor(i/(Math.PI/5)))%2===0?t.primary:nr(t.primary,t.secondary,.35);return e==="torso"&&n<.1||e==="hand"||e==="foot"?t.secondary:o},telekinesis(r,t){const{region:e,t:n,theta:i}=r;return e==="torso"?n>.9?t.accent:rn(i,.55)?t.secondary:rn(i,.7)||n<.12?t.accent:t.primary:e==="foreArm"?n>.6?t.accent:t.primary:e==="hand"||e==="thigh"||e==="shin"?t.secondary:e==="foot"?t.accent:t.primary},pyro(r,t){const{region:e,t:n,theta:i}=r,s=o=>.28+.14*Math.sin(i*3+o*7)+.08*Math.sin(i*7);return e==="torso"?n<s(n)?t.accent:n<s(n)+.1?t.primary:t.secondary:e==="foreArm"?n>.4+.1*Math.sin(i*4)?t.accent:t.primary:e==="hand"?t.accent:e==="thigh"?n<.2?t.accent:t.secondary:e==="shin"?n>.6?t.primary:t.secondary:t.primary},cryo(r,t){const{region:e,t:n,theta:i}=r;return e==="torso"?n>.86?t.accent:n<.14?t.secondary:(Math.floor(n*6)+Math.floor(i/(Math.PI/4)))%2===0?t.primary:nr(t.primary,t.secondary,.25):e==="upperArm"?n<.3?t.accent:t.primary:e==="foreArm"?n>.7?t.accent:t.primary:e==="hand"||e==="thigh"?t.secondary:e==="shin"?n>.45?t.accent:t.secondary:e==="foot"?t.secondary:t.primary},teleport(r,t){const{region:e,t:n,theta:i}=r;return e==="torso"?Math.abs(n*5%1-.5)<.05||Math.abs(i/(Math.PI/3)%1-.5)<.05?t.accent:rn(i,.35)&&n>.55&&n<.8?t.glow:n<.12?t.secondary:t.primary:e==="upperArm"||e==="thigh"?t.secondary:e==="foreArm"||e==="shin"?n>.5?t.primary:t.secondary:e==="hand"||e==="foot"?t.accent:t.primary},xray(r,t){const{region:e,t:n,theta:i}=r;return Math.abs((n*9+Math.sin(i*2)*.5)%1-.5)<.04&&Math.sin(i*5)>.3&&e!=="head"||e==="torso"&&n<.1?t.accent:e==="hand"||e==="foot"?t.secondary:e==="torso"?t.primary:t.secondary},shapeshift(r,t){const{region:e,t:n,theta:i}=r,s=Math.floor(n*7)%2===0;return e==="torso"?rn(i,.5)&&n>.5?t.accent:rn(i,.12)&&n>.35&&n<.9?t.secondary:s?t.primary:nr(t.primary,t.secondary,.4):e==="hand"||e==="foot"?t.secondary:s?t.primary:nr(t.primary,t.secondary,.4)},duplication(r,t){const{region:e,t:n,theta:i}=r;return e==="torso"?n>.35&&n<.88&&(rn(i,.95)||!rn(i,2.2))||n<.14?t.accent:n<.22&&Math.floor(i/(Math.PI/4))%2===0?t.secondary:t.primary:e==="upperArm"?n<.35?t.accent:t.primary:e==="foreArm"?n>.5?t.secondary:t.primary:e==="hand"?t.secondary:e==="thigh"?t.primary:e==="shin"?n>.5?t.secondary:t.primary:e==="foot"?t.secondary:t.primary}},Tr=Math.PI*2,An=r=>Math.max(0,Math.min(1,r)),Nt=(r,t)=>Math.exp(-(r*r)/(2*t*t)),Bn=(r,t)=>Math.atan2(Math.sin(r-t),Math.cos(r-t)),fh=r=>(r=An(r),r*r*(3-2*r)),at={hips:"mixamorigHips",spine:"mixamorigSpine",spine1:"mixamorigSpine1",spine2:"mixamorigSpine2",neck:"mixamorigNeck",head:"mixamorigHead",headTop:"mixamorigHeadTop_End",L:{shoulder:"mixamorigLeftShoulder",arm:"mixamorigLeftArm",foreArm:"mixamorigLeftForeArm",hand:"mixamorigLeftHand",upLeg:"mixamorigLeftUpLeg",leg:"mixamorigLeftLeg",foot:"mixamorigLeftFoot",toe:"mixamorigLeftToeBase",toeEnd:"mixamorigLeftToe_End"},R:{shoulder:"mixamorigRightShoulder",arm:"mixamorigRightArm",foreArm:"mixamorigRightForeArm",hand:"mixamorigRightHand",upLeg:"mixamorigRightUpLeg",leg:"mixamorigRightLeg",foot:"mixamorigRightFoot",toe:"mixamorigRightToeBase",toeEnd:"mixamorigRightToe_End"}};class Wg{constructor(t){this.BI=t,this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[],this.n=0}vertex(t,e,n){this.pos.push(t.x,t.y,t.z),this.col.push(e.r,e.g,e.b);const i=n.slice(0,4);for(;i.length<4;)i.push([0,0]);let s=0;for(const[,o]of i)s+=o;for(const[o,a]of i)this.si.push(this.BI[o]??0),this.sw.push(s>0?a/s:0);return this.n++}tri(t,e,n){this.idx.push(t,e,n)}quad(t,e,n,i){this.idx.push(t,e,n,t,n,i)}tube({from:t,to:e,rings:n,segs:i,radius:s,bump:o,color:a,weights:l,frame:c,closeStart:h=!1,closeEnd:u=!1}){const f=e.clone().sub(t),d=this.n,m=[];for(let _=0;_<n;_++){const p=_/(n-1),g=t.clone().addScaledVector(f,p);m.push(g);const{rx:x,rz:v}=s(p);for(let y=0;y<i;y++){const C=y/i*Tr,R=1+(o?o(p,C):0)/((x+v)*.5),I=g.clone().addScaledVector(c.u,x*Math.cos(C)*R).addScaledVector(c.v,v*Math.sin(C)*R);this.vertex(I,a(p,C),l(p))}}for(let _=0;_<n-1;_++)for(let p=0;p<i;p++){const g=d+_*i+p,x=d+_*i+(p+1)%i,v=d+(_+1)*i+(p+1)%i,y=d+(_+1)*i+p;this.quad(g,x,v,y)}if(h){const _=this.vertex(m[0],a(0,0),l(0));for(let p=0;p<i;p++)this.tri(_,d+(p+1)%i,d+p)}if(u){const _=d+(n-1)*i,p=this.vertex(m[n-1],a(1,0),l(1));for(let g=0;g<i;g++)this.tri(p,_+g,_+(g+1)%i)}}sphere({center:t,radii:e,wSeg:n=14,hSeg:i=10,color:s,weights:o,displace:a,filter:l}){const c=this.n,h=[];for(let u=0;u<=i;u++){const d=u/i*Math.PI,m=[];for(let _=0;_<=n;_++){const g=_/n*Tr,x=new E(-Math.cos(g)*Math.sin(d),Math.cos(d),Math.sin(g)*Math.sin(d));let v=1;a&&(v+=a(x));const y=new E(x.x*e.x*v,x.y*e.y*v,x.z*e.z*v).add(t),C=!l||l(x);m.push(C?this.vertex(y,typeof s=="function"?s(x):s,o):-1)}h.push(m)}for(let u=0;u<i;u++)for(let f=0;f<n;f++){const d=h[u][f],m=h[u][f+1],_=h[u+1][f+1],p=h[u+1][f];d<0||m<0||_<0||p<0||(u!==0&&this.tri(d,m,p),u!==i-1&&this.tri(m,_,p))}return c}box({center:t,size:e,color:n,weights:i,rot:s=null}){const o=new hn(e.x,e.y,e.z).toNonIndexed();s&&o.applyQuaternion(s),o.translate(t.x,t.y,t.z);const a=o.attributes.position,l=this.n;for(let c=0;c<a.count;c++)this.vertex(new E(a.getX(c),a.getY(c),a.getZ(c)),n,i);for(let c=0;c<a.count;c+=3)this.tri(l+c,l+c+1,l+c+2)}cone({center:t,radius:e,height:n,color:i,weights:s,rot:o=null,segs:a=7}){const l=new ys(e,n,a).toNonIndexed();o&&l.applyQuaternion(o),l.translate(t.x,t.y,t.z);const c=l.attributes.position,h=this.n;for(let u=0;u<c.count;u++)this.vertex(new E(c.getX(u),c.getY(u),c.getZ(u)),i,s);for(let u=0;u<c.count;u+=3)this.tri(h+u,h+u+1,h+u+2)}build(){const t=new Ee;return t.setAttribute("position",new oe(this.pos,3)),t.setAttribute("color",new oe(this.col,3)),t.setAttribute("skinIndex",new Ea(this.si,4)),t.setAttribute("skinWeight",new oe(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}}function gc(r){return t=>{if(t<=r[0][0])return r[0][1];for(let e=0;e<r.length-1;e++){const[n,i]=r[e],[s,o]=r[e+1];if(t<=s)return i+(o-i)*fh((t-n)/(s-n))}return r[r.length-1][1]}}function ii(r){const t=r.clone().normalize();let e=new E(0,0,1).addScaledVector(t,-t.z);return e.lengthSq()<1e-4&&(e=new E(0,1,0).addScaledVector(t,-t.y)),e.normalize(),{u:t.clone().cross(e).normalize(),v:e}}function Xg(r,t,{faceless:e=!1}={}){const n=r.build,i=n.mass,s=n.definition,o=re.unitHeight,a=re.bones.concat([at.headTop,at.L.toeEnd,at.R.toeEnd]),l={};for(const k of a){const it=re.skeleton[k],A=new nh;A.name=k,A.position.fromArray(it.pos),A.quaternion.fromArray(it.quat),A.userData.restQuat=A.quaternion.clone(),A.userData.restPos=A.position.clone(),l[k]=A}for(const k of a){const it=re.skeleton[k].parent;it&&l[it]&&l[it].add(l[k])}for(const k of["L","R"])l[at[k].leg].position.multiplyScalar(n.legLen),l[at[k].foot].position.multiplyScalar(n.legLen),l[at[k].arm].position.multiplyScalar(n.shoulder);const c=re.skeleton[at.L.leg].pos,h=re.skeleton[at.L.foot].pos,f=(Math.hypot(...c)+Math.hypot(...h))*(n.legLen-1);l[at.hips].updateMatrixWorld(!0);const d=k=>{const it=new E;return l[k].getWorldPosition(it),it},m=Object.fromEntries(a.map((k,it)=>[k,it])),_=new Wg(m),p=mc[r.suit]||mc.flight,g=(k,it,A,M,O)=>p({region:k,t:it,theta:A,y:M/o,side:O},t),x=t.skin,v=d(at.hips),y=d(at.neck),C=d(at.head),T=d(at.headTop),R=d(at.spine),I=d(at.spine1),w=d(at.spine2),S=d(at.L.arm),L=d(at.R.arm),B=Math.abs(S.x-L.x)/2,V=(S.y+L.y)/2,Y=v.clone().add(new E(0,-.07*o,0)),K=y.clone(),X=K.clone().sub(Y),Q=ii(X),W=gc([[0,.088*o*(.9+.1*n.waist)],[.2,.076*o*n.waist],[.5,.098*o*(.55+.45*n.shoulder)],[.72,.112*o*n.shoulder],[.86,.128*o*n.shoulder],[1,.05*o]]),gt=gc([[0,.062*o*(.8+.2*n.waist)],[.2,.052*o*n.waist],[.5,.066*o*(.7+.3*i)],[.72,.074*o*(.7+.3*i)],[.86,.068*o],[1,.05*o]]),xt=[[at.hips,Y.y],[at.spine,R.y],[at.spine1,I.y],[at.spine2,w.y],[at.neck,y.y]],bt=k=>{const it=Y.y+X.y*k;for(let A=0;A<xt.length-1;A++){const[M,O]=xt[A],[j,et]=xt[A+1];if(it<=et){const Z=fh((it-O)/Math.max(1e-6,et-O));return[[M,1-Z],[j,Z]]}}return[[at.neck,1]]},Xt=(k,it)=>{const A=Bn(it,Math.PI/2),M=Bn(it,3*Math.PI/2);let O=0;O+=.013*o*s*i*(Nt(A-.4,.3)+Nt(A+.4,.3))*Nt(k-.7,.085);for(const j of[.31,.42,.53])O+=.0062*o*s*(Nt(A-.17,.13)+Nt(A+.17,.13))*Nt(k-j,.04);return O+=.004*o*s*(Nt(A-.85,.2)+Nt(A+.85,.2))*Nt(k-.45,.12),O+=.009*o*i*(Nt(M-.55,.32)+Nt(M+.55,.32))*Nt(k-.66,.14),O+=.006*o*i*Nt(M,.5)*Nt(k-.9,.08),O-=.0045*o*Nt(M,.12)*Nt(k-.55,.3),O-=.002*o*Nt(A,.06)*Nt(k-.7,.1),O};_.tube({from:Y,to:K,rings:18,segs:22,frame:Q,radius:k=>({rx:W(k),rz:gt(k)}),bump:Xt,color:(k,it)=>g("torso",k,it,Y.y+X.y*k,0),weights:bt,closeStart:!0});const Yt=C.clone().lerp(T,.5).add(new E(0,0,.006*o));_.tube({from:y.clone().add(new E(0,-.012*o,0)),to:new E(Yt.x,Yt.y-.055*o,Yt.z),rings:4,segs:12,frame:Q,radius:k=>({rx:.031*o*Math.sqrt(i)*(1+.15*k),rz:.03*o*Math.sqrt(i)}),color:(k,it)=>e?g("neck",k,it,y.y,0):x,weights:k=>k<.4?[[at.neck,1]]:[[at.neck,1-(k-.4)/.6*.6],[at.head,(k-.4)/.6*.6]]});const q=new E(.066*o,.078*o,.071*o),nt=[[at.head,1]],vt=k=>{let it=0;const A=An((-k.y-.15)/.85);return it-=.16*A*(Math.abs(k.x)*.9+.15)*(k.z<0?.6:1),it+=.05*Nt(k.y+.78,.15)*An(k.z),it+=.05*Nt(k.y-.32,.1)*An(k.z-.35)*(1-.5*Nt(k.x,.12)),it-=.06*(Nt(k.x-.4,.18)+Nt(k.x+.4,.18))*Nt(k.y-.16,.13)*An(k.z-.3),it+=.035*(Nt(k.x-.62,.2)+Nt(k.x+.62,.2))*Nt(k.y+.08,.14)*An(k.z),it-=.03*(Nt(k.x-.8,.2)+Nt(k.x+.8,.2))*Nt(k.y-.3,.2),it+=.04*An(-k.z-.3)*An(k.y+.2),it};_.sphere({center:Yt,radii:q,wSeg:20,hSeg:14,color:e?g("head",.5,0,Yt.y,0):x,weights:nt,displace:vt});const ht=Yt,At=q;if(!e){_.box({center:ht.clone().add(new E(0,-.004*o,At.z*.96)),size:new E(.017*o,.04*o,.026*o),color:x,weights:nt,rot:new Me().setFromEuler(new Se(.35,0,0))}),_.box({center:ht.clone().add(new E(0,-.022*o,At.z*1.02)),size:new E(.024*o,.014*o,.02*o),color:x,weights:nt});for(const A of[-1,1])_.sphere({center:ht.clone().add(new E(A*At.x*.98,-.004*o,-.008*o)),radii:new E(.007*o,.02*o,.014*o),wSeg:8,hSeg:6,color:x,weights:nt});const k=t.hair.clone().multiplyScalar(.55),it=new ft(1316896);for(const A of[-1,1])_.box({center:ht.clone().add(new E(A*.03*o,.027*o,At.z*.9)),size:new E(.036*o,.006*o,.012*o),color:k,weights:nt,rot:new Me().setFromEuler(new Se(0,0,A*-.12))}),_.sphere({center:ht.clone().add(new E(A*.028*o,.012*o,At.z*.86)),radii:new E(.012*o,.008*o,.008*o),wSeg:8,hSeg:5,color:it,weights:nt});_.box({center:ht.clone().add(new E(0,-.046*o,At.z*.92)),size:new E(.028*o,.004*o,.008*o),color:x.clone().multiplyScalar(.7),weights:nt})}Yg(_,r.hair,t,ht,At,o,nt),r.facialHair&&qg(_,r.facialHair,t,ht,At,o,nt);for(const k of["L","R"]){const it=k==="L"?1:-1,A=d(at[k].arm),M=d(at[k].foreArm),O=d(at[k].hand),j=O.clone().sub(M).normalize(),et=O.clone().addScaledVector(j,.085*o),Z=A.distanceTo(M),Tt=M.distanceTo(O),lt=ii(M.clone().sub(A)),pt=ii(O.clone().sub(M)),Dt=ii(j);_.sphere({center:A.clone().add(new E(0,-.006*o,0)),radii:new E(.034*o*i,.036*o*i,.034*o*i),wSeg:12,hSeg:8,color:z=>g("upperArm",.02,Math.atan2(z.z,z.x),A.y,it),weights:[[at[k].arm,.75],[at[k].shoulder,.25]]}),_.tube({from:A,to:M,rings:9,segs:12,frame:lt,radius:z=>{const tt=.036*o*i*(1.1-.25*z);return{rx:tt,rz:tt*1.05}},bump:(z,tt)=>{const zt=Bn(tt,Math.PI/2),Pt=Bn(tt,3*Math.PI/2);return .008*o*s*i*Nt(zt,.55)*Nt(z-.5,.18)+.006*o*s*i*Nt(Pt,.6)*Nt(z-.55,.2)},color:(z,tt)=>g("upperArm",z,tt,A.y-Z*z,it),weights:z=>z<.16?[[at[k].arm,1-(.16-z)/.16*.35],[at[k].shoulder,(.16-z)/.16*.35]]:z>.82?[[at[k].arm,1-(z-.82)/.18*.5],[at[k].foreArm,(z-.82)/.18*.5]]:[[at[k].arm,1]]}),_.sphere({center:M,radii:new E(.028*o*i,.03*o*i,.03*o*i),wSeg:10,hSeg:7,color:z=>g("foreArm",.02,Math.atan2(z.z,z.x),M.y,it),weights:[[at[k].arm,.5],[at[k].foreArm,.5]]}),_.tube({from:M,to:O,rings:8,segs:12,frame:pt,radius:z=>{const tt=.03*o*Math.sqrt(i)*(1+.15*Nt(z-.25,.2)-.35*z);return{rx:tt*1.05,rz:tt}},color:(z,tt)=>g("foreArm",z,tt,M.y-Tt*z,it),weights:z=>z<.18?[[at[k].foreArm,1-(.18-z)/.18*.5],[at[k].arm,(.18-z)/.18*.5]]:z>.86?[[at[k].foreArm,1-(z-.86)/.14*.5],[at[k].hand,(z-.86)/.14*.5]]:[[at[k].foreArm,1]]}),_.tube({from:O,to:et,rings:4,segs:10,frame:Dt,radius:z=>({rx:.013*o*(1+.2*Math.sin(z*Math.PI)),rz:.024*o*(1+.3*Math.sin(z*Math.PI))}),color:(z,tt)=>g("hand",z,tt,O.y,it),weights:z=>z<.3?[[at[k].hand,.7],[at[k].foreArm,.3]]:[[at[k].hand,1]],closeEnd:!0})}for(const k of["L","R"]){const it=k==="L"?1:-1,A=d(at[k].upLeg),M=d(at[k].leg),O=d(at[k].foot),j=d(at[k].toeEnd),et=A.distanceTo(M),Z=M.distanceTo(O),Tt=ii(M.clone().sub(A)),lt=ii(O.clone().sub(M));_.tube({from:A.clone().add(new E(0,.03*o,0)),to:M,rings:10,segs:14,frame:Tt,radius:z=>{const tt=.058*o*Math.sqrt(i)*(.5+.5*n.waist)*(1.05-.38*z);return{rx:tt,rz:tt*1.08}},bump:(z,tt)=>{const zt=Bn(tt,Math.PI/2),Pt=Bn(tt,3*Math.PI/2);return .009*o*s*i*(Nt(zt-.3,.35)+Nt(zt+.3,.35))*Nt(z-.55,.22)+.007*o*s*i*Nt(Pt,.6)*Nt(z-.4,.22)},color:(z,tt)=>g("thigh",z,tt,A.y-et*z,it),weights:z=>z<.15?[[at[k].upLeg,1-(.15-z)/.15*.4],[at.hips,(.15-z)/.15*.4]]:z>.84?[[at[k].upLeg,1-(z-.84)/.16*.5],[at[k].leg,(z-.84)/.16*.5]]:[[at[k].upLeg,1]]}),_.sphere({center:M,radii:new E(.036*o*Math.sqrt(i),.04*o,.038*o),wSeg:10,hSeg:7,color:z=>g("shin",.02,Math.atan2(z.z,z.x),M.y,it),weights:[[at[k].upLeg,.5],[at[k].leg,.5]]}),_.tube({from:M,to:O,rings:9,segs:12,frame:lt,radius:z=>{const tt=.037*o*Math.sqrt(i)*(1.05-.4*z);return{rx:tt,rz:tt*1.05}},bump:(z,tt)=>{const zt=Bn(tt,3*Math.PI/2);return .011*o*s*i*Nt(zt,.55)*Nt(z-.3,.16)+.003*o*s*Nt(Bn(tt,Math.PI/2),.25)*Nt(z-.5,.3)},color:(z,tt)=>g("shin",z,tt,M.y-Z*z,it),weights:z=>z<.16?[[at[k].leg,1-(.16-z)/.16*.5],[at[k].upLeg,(.16-z)/.16*.5]]:z>.86?[[at[k].leg,1-(z-.86)/.14*.45],[at[k].foot,(z-.86)/.14*.45]]:[[at[k].leg,1]]});const pt=new E(O.x,j.y+.012*o,O.z-.035*o),Dt=new E(j.x,j.y+.01*o,j.z+.01*o);_.tube({from:pt,to:Dt,rings:5,segs:10,frame:ii(Dt.clone().sub(pt)),radius:z=>({rx:.032*o*(1+.25*Math.sin(z*Math.PI)),rz:.02*o*(1.3-.6*z)}),color:(z,tt)=>g("foot",z,tt,O.y,it),weights:z=>z<.55?[[at[k].foot,1]]:[[at[k].foot,.5],[at[k].toe,.5]],closeStart:!0,closeEnd:!0})}$g(_,r,t,w.y+.02*o,gt(.72),o,at.spine2);for(const k of r.gear)Kg(_,k,t,ht,At,o,nt);const Ft=_.build();Ft.boundingSphere=new In(new E(0,o*.5,0),o*1.4);const Ht=new K0({vertexColors:!0,roughness:.62,metalness:.04}),ae=new R0(Ft,Ht);ae.add(l[at.hips]),l[at.hips].updateMatrixWorld(!0),ae.bind(new Pa(a.map(k=>l[k])));const P=[],ce=l[at.head],$t=ce.worldToLocal(ht.clone());if(r.hair==="flame"&&P.push(jg(ce,$t,At,o)),r.gear.includes("xrayGoggles")&&P.push(Zg(ce,$t,At,o,t.glow)),r.gear.includes("lightningBoots"))for(const k of["L","R"])P.push(Jg(l[at[k].leg],d(at[k].leg).distanceTo(d(at[k].foot)),o,t.glow));const Zt=l[at.spine2],wt=[],ue=7;for(let k=0;k<ue;k++){const it=k/(ue-1)-.5,A=new E(it*B*1.35,V+.012*o,-gt(.86)*.85);wt.push(Zt.worldToLocal(A))}return{mesh:ae,bones:l,extras:P,pins:wt,H:o,hipsYOffset:f,torsoRadius:W(.72)*1.05,capeWidth:B*1.35*2}}function Yg(r,t,e,n,i,s,o){const a=e.hair,l=(c,h,u={})=>r.sphere({center:n,radii:i.clone().multiplyScalar(1+h),wSeg:20,hSeg:12,color:a,weights:o,filter:f=>f.y>c&&!(f.z>.42&&f.y<(u.fringe??.5))&&!(u.flatTop&&f.y>.985),displace:u.displace});switch(t){case"surfer":l(-.25,.09,{fringe:.35,displace:c=>.05*Math.sin(c.x*14+c.y*9)*Math.sin(c.z*11)});for(const[c,h]of[[-.85,.1],[.85,.1],[-.6,-.65],[.6,-.65],[0,-.95],[-.95,-.35],[.95,-.35]])r.sphere({center:new E(n.x+c*i.x*1.05,n.y-.035*s,n.z+h*i.z*1.05),radii:new E(.012*s,.05*s,.016*s),wSeg:7,hSeg:6,color:a,weights:o});break;case"spiky":l(.02,.05);for(let c=0;c<9;c++){const h=c/9*Tr,u=new E(Math.cos(h)*.33,1,Math.sin(h)*.28-.15).normalize(),f=n.clone().add(new E(u.x*i.x,u.y*i.y,u.z*i.z)),d=new Me().setFromUnitVectors(new E(0,1,0),u);r.cone({center:f.clone().addScaledVector(u,.028*s),radius:.016*s,height:.065*s,color:a,weights:o,rot:d,segs:6})}break;case"quiff":{l(-.05,.06,{fringe:.45});const c=new Me().setFromEuler(new Se(-.5,.35,.25));r.sphere({center:n.clone().add(new E(.012*s,i.y*.98,i.z*.25)),radii:new E(.055*s,.026*s,.048*s),wSeg:12,hSeg:8,color:a,weights:o,displace:h=>.08*Math.sin(h.x*9)*Math.sin(h.z*7)}),e.hairStreak&&r.box({center:n.clone().add(new E(.03*s,i.y*1.03,i.z*.3)),size:new E(.016*s,.03*s,.06*s),color:e.hairStreak,weights:o,rot:c});break}case"flame":l(.1,.05);break;case"mohawk":{for(let h=0;h<9;h++){const u=h/8,f=(.75-1.5*u)*i.z,d=Math.sqrt(Math.max(0,1-(f/i.z)**2))*i.y,m=(.075+.03*Math.sin(u*Math.PI))*s;r.box({center:n.clone().add(new E(0,d+m/2-.006*s,f)),size:new E(.018*s,m,i.z*1.5/9*1.15),color:a,weights:o,rot:new Me().setFromEuler(new Se((u-.5)*.8,0,0))})}break}case"buzz":l(.05,.02);break;case"sidepart":l(-.02,.05,{fringe:.4,displace:c=>c.x>.15?.05:0}),r.box({center:n.clone().add(new E(.02*s,i.y*1.04,0)),size:new E(.004*s,.004*s,i.z*1.1),color:a.clone().multiplyScalar(.55),weights:o});break;case"crew":l(.15,.035,{flatTop:!0});break}}function qg(r,t,e,n,i,s,o){const a=e.hair.clone().multiplyScalar(.9);if(t==="goatee"||t==="stubbleGoatee"){const l=t==="goatee"?a:e.skin.clone().lerp(new ft(2761760),.55);r.box({center:n.clone().add(new E(0,-.062*s,i.z*.82)),size:new E(.028*s,.03*s,.016*s),color:l,weights:o}),r.box({center:n.clone().add(new E(0,-.033*s,i.z*.95)),size:new E(.034*s,.006*s,.008*s),color:l,weights:o})}else t==="fullBeard"&&r.sphere({center:n.clone().add(new E(0,-.012*s,.004*s)),radii:new E(i.x*1.06,i.y*1.02,i.z*1.08),wSeg:18,hSeg:12,color:a,weights:o,filter:l=>l.y<-.28&&l.z>-.1&&!(l.z>.75&&l.y>-.5),displace:l=>.06*Math.sin(l.x*15)*Math.sin(l.y*12)+.1*An(-l.y-.6)})}function Kg(r,t,e,n,i,s,o){const a=new ft(1316380),l=n.y+.012*s,c=(u,f,d)=>r.tube({from:new E(n.x,u-f/2,n.z),to:new E(n.x,u+f/2,n.z),rings:2,segs:18,frame:{u:new E(1,0,0),v:new E(0,0,1)},radius:()=>({rx:i.x*1.06,rz:i.z*1.06}),color:()=>d,weights:()=>o}),h=(u,f,d)=>new E(n.x+u,n.y+f,n.z+d);switch(t){case"aviatorGoggles":{c(l,.02*s,new ft(5916208));for(const u of[-1,1]){const f=h(u*.03*s,.012*s,i.z*.98);r.sphere({center:f,radii:new E(.026*s,.02*s,.012*s),wSeg:12,hSeg:6,color:new ft(9075285),weights:o}),r.sphere({center:f.clone().add(new E(0,0,.006*s)),radii:new E(.02*s,.015*s,.01*s),wSeg:12,hSeg:6,color:new ft(2902638),weights:o})}break}case"speedShades":r.box({center:h(0,.012*s,i.z*.95),size:new E(.11*s,.02*s,.014*s),color:new ft(3804434),weights:o});for(const u of[-1,1])r.box({center:h(u*i.x*.95,.012*s,i.z*.3),size:new E(.006*s,.008*s,i.z*1.3),color:a,weights:o});break;case"facelessMask":c(n.y-.06*s,.006*s,e.secondary);break;case"robinMask":{r.box({center:h(0,.012*s,i.z*.93),size:new E(.1*s,.03*s,.012*s),color:a,weights:o});for(const u of[-1,1])r.box({center:h(u*.058*s,.026*s,i.z*.72),size:new E(.026*s,.014*s,.012*s),color:a,weights:o,rot:new Me().setFromEuler(new Se(0,u*.6,u*.5))}),r.sphere({center:h(u*.028*s,.012*s,i.z*.99),radii:new E(.011*s,.006*s,.004*s),wSeg:8,hSeg:4,color:new ft(15921906),weights:o});break}case"baneMask":{const u=new ft(3817290);r.sphere({center:h(0,-.01*s,.006*s),radii:new E(i.x*1.1,i.y*1.05,i.z*1.12),wSeg:18,hSeg:12,color:u,weights:o,filter:f=>f.y<-.12&&f.z>.05&&!(f.y<-.9)});for(const f of[-1,1]){for(let d=0;d<3;d++)r.box({center:h(f*(.02+d*.018)*s,-.045*s,i.z*.95-d*.008*s),size:new E(.01*s,.03*s,.012*s),color:new ft(9081763),weights:o});r.box({center:h(f*i.x*.9,-.03*s,i.z*.45),size:new E(.012*s,.012*s,.06*s),color:u.clone().multiplyScalar(.7),weights:o})}break}case"bandana":{c(l,.032*s,e.accent),r.sphere({center:h(0,.012*s,-i.z*1.02),radii:new E(.016*s,.014*s,.014*s),wSeg:8,hSeg:6,color:e.accent,weights:o});for(const u of[-1,1])r.box({center:h(u*.018*s,-.033*s,-i.z*1.05),size:new E(.018*s,.08*s,.004*s),color:e.accent,weights:o,rot:new Me().setFromEuler(new Se(.25,0,u*.25))});for(const u of[-1,1])r.box({center:h(u*.028*s,.012*s,i.z*1.08),size:new E(.026*s,.006*s,.004*s),color:a,weights:o});break}case"xrayGoggles":c(l,.016*s,a);for(const u of[-1,1])r.sphere({center:h(u*.03*s,.012*s,i.z*.97),radii:new E(.024*s,.024*s,.014*s),wSeg:12,hSeg:6,color:new ft(2764586),weights:o});break;case"sunglasses":r.box({center:h(0,.012*s,i.z*.96),size:new E(.096*s,.022*s,.012*s),color:a,weights:o});for(const u of[-1,1])r.box({center:h(u*i.x*.96,.016*s,i.z*.3),size:new E(.005*s,.006*s,i.z*1.3),color:a,weights:o});break}}function $g(r,t,e,n,i,s,o){const a=[[o,1]],l=i+.016*s,c=n+.05*s,h=e.accent,u=(f,d,m,_,p=0,g=h)=>r.box({center:new E(f,c+d,l),size:new E(m,_,.008*s),color:g,weights:a,rot:new Me().setFromEuler(new Se(0,0,p))});switch(t.suit){case"flight":u(-.03*s,0,.05*s,.012*s,.35),u(.03*s,0,.05*s,.012*s,-.35);break;case"speed":u(-.008*s,.012*s,.014*s,.03*s,.5),u(.008*s,-.012*s,.014*s,.03*s,.5);break;case"telekinesis":r.sphere({center:new E(0,c,l),radii:new E(.026*s,.018*s,.005*s),wSeg:12,hSeg:6,color:h,weights:a}),r.sphere({center:new E(0,c,l+.004*s),radii:new E(.009*s,.009*s,.004*s),wSeg:8,hSeg:5,color:e.glow,weights:a});break;case"pyro":r.cone({center:new E(0,c+.006*s,l),radius:.02*s,height:.045*s,color:h,weights:a,segs:6});break;case"cryo":for(let f=0;f<3;f++)u(0,0,.05*s,.007*s,f*Math.PI/3);break;case"teleport":r.sphere({center:new E(0,c,l),radii:new E(.024*s,.024*s,.005*s),wSeg:12,hSeg:6,color:h,weights:a});break;case"xray":r.sphere({center:new E(0,c,l),radii:new E(.028*s,.014*s,.005*s),wSeg:12,hSeg:6,color:h,weights:a});break;case"shapeshift":u(0,0,.028*s,.028*s,Math.PI/4);break;case"duplication":u(-.014*s,0,.012*s,.04*s),u(.014*s,0,.012*s,.04*s);break}}function jg(r,t,e,n){const i=new ln,s=new cn({color:16742938,transparent:!0,opacity:.95}),o=new cn({color:16765500,transparent:!0,opacity:.9}),a=[];for(let l=0;l<10;l++){const c=l/10*Tr,h=Math.cos(c)*e.x*.55,u=Math.sin(c)*e.z*.5-e.z*.15,f=Math.sqrt(Math.max(0,1-(h/e.x)**2-(u/e.z)**2))*e.y,d=(.07+.04*Math.random())*n,m=new jt(new ys(.018*n,d,5),l%3===0?o:s);m.position.set(t.x+h,t.y+f+d/2-.01*n,t.z+u),m.rotation.set((Math.random()-.5)*.5,0,(Math.random()-.5)*.5),m.userData.base={rx:m.rotation.x,rz:m.rotation.z},i.add(m),a.push(m)}return r.add(i),i.userData.animate=l=>{for(let c=0;c<a.length;c++){const h=a[c],u=h.userData.base;h.scale.y=.85+.35*Math.sin(l*9+c*1.7),h.rotation.x=u.rx+Math.sin(l*7+c)*.15,h.rotation.z=u.rz+Math.cos(l*6+c*2)*.15}},i}function Zg(r,t,e,n,i){const s=new ln,o=new cn({color:i});for(const a of[-1,1]){const l=new jt(new vs(.017*n,12),o);l.position.set(t.x+a*.03*n,t.y+.012*n,t.z+e.z*.97+.015*n),s.add(l)}return r.add(s),s.userData.animate=a=>{s.scale.setScalar(1+.05*Math.sin(a*8))},s}function Jg(r,t,e,n){const i=new cn({color:n}),s=new ln;for(let o=0;o<3;o++){const a=new jt(new hn(.014*e,.006*e,.012*e),i);a.position.set((o-1)*.008*e,t*(.55+o*.1),.036*e),a.rotation.z=.5,s.add(a)}return r.add(s),s}const ir=(r,t,e)=>Math.max(t,Math.min(e,r)),wo=.16,Qg=11.5;class t_{constructor(t,e,{hipsYOffset:n=0}={}){this.mesh=t,this.arch=e,this.mixer=new xg(t),this.hips=t.skeleton.bones.find(i=>i.name===at.hips),this.hipsYOffset=n,this.actions={},this.base=null,this.baseName=null,this.over=null,this.moveIndex=0,this.dead=!1,this.rootDelta={x:0,z:0},this.flyK=0,this.floatK=0,this.mixedHipsY=void 0,this.bones=t.skeleton.bones}action(t){let e=this.actions[t];if(!e){const n=re.clips[t];if(!n)return null;e=this.mixer.clipAction(n),this.actions[t]=e}return e}setBase(t,e=1){const n=this.action(t);if(n){if(this.base!==n){if(n.reset().setLoop(ia,1/0),n.clampWhenFinished=!1,n.enabled=!0,n.play(),this.over)n.setEffectiveWeight(1),n.enabled=!1,this.base&&(this.base.enabled=!1);else if(this.base){n.setEffectiveWeight(1);const i=(t==="flying"||t==="flying_idle")&&(this.baseName==="flying"||this.baseName==="flying_idle")?.55:wo*1.6;n.crossFadeFrom(this.base,i,!1)}else n.setEffectiveWeight(1);this.base=n,this.baseName=t}n.setEffectiveTimeScale(e)}}startOverride(t,{mode:e,timeScale:n=1,end:i=1,loop:s=!1,fade:o=wo}={}){const a=this.action(t);if(!a)return null;this.over&&this.over.action!==a?this.over.action.fadeOut(o):this.over&&this.over.action,a.reset(),a.setLoop(s?ia:Fc,s?1/0:1),a.clampWhenFinished=!0,a.enabled=!0,a.setEffectiveTimeScale(n),a.setEffectiveWeight(1),a.fadeIn(o),a.play(),this.base&&this.base.fadeOut(o);const l=re.duration[t],c=re.rootXZ[t];return this.over={action:a,name:t,mode:e,end:i*l,rootPrev:[c[0],c[1]],loop:s},{duration:i*l/n,rawDuration:l,timeScale:n}}endOverride(t=wo){this.over&&(this.over.action.fadeOut(t),this.over=null,this.base&&(this.base.enabled=!0,this.base.paused=!1,this.base.setEffectiveWeight(1),this.base.play(),this.base.fadeIn(t)))}startHeld(){if(this.dead||this.over&&this.over.mode==="held")return;const t=re.clips.reaction_2?"reaction_2":"reaction";this.startOverride(t,{mode:"held",loop:!0,timeScale:.7})}endHeld(){this.over&&this.over.mode==="held"&&this.endOverride()}get attacking(){return!!this.over&&this.over.mode==="attack"}get busy(){return!!this.over&&(this.over.mode==="attack"||this.over.mode==="death"||this.over.mode==="landing")}nextMove(){const t=this.arch.combat.moves,e=t[this.moveIndex%t.length];return this.moveIndex++,e}startAttack(t,e=1){const n=1.25*e,i=re.impacts[t]||[],s=re.duration[t],o=i.length?i[i.length-1]:s*.5,a=ir((o+.38)/s,.55,.95),l=this.startOverride(t,{mode:"attack",timeScale:n,end:a});if(!l)return null;const c=(i.length?i:[s*.5]).map(h=>h/n);return{duration:l.duration,hits:c,hitScale:c.length>1?.6:1}}hitReaction(){if(this.dead||this.over&&(this.over.mode==="attack"||this.over.mode==="death"))return;const t=["reaction","reaction_2","reaction_3"].filter(e=>re.clips[e]);t.length&&this.startOverride(t[Math.floor(Math.random()*t.length)],{mode:"hit",timeScale:1.4,end:.55})}startCast(t,e=!1){this.dead||(e?this.startOverride(t,{mode:"cast",loop:!0,timeScale:1}):this.startOverride(t,{mode:"cast",timeScale:1.3,end:.9}))}stopCast(){this.over&&this.over.mode==="cast"&&this.endOverride()}landing(){this.startOverride("superhero_landing",{mode:"landing",timeScale:1.2,end:.98})}emote(){this.busy||this.startOverride("fist_pump",{mode:"emote",timeScale:1,end:.6})}die(t="back"){const e=t==="forward"?"falling_forward_death":t==="fly"?"flying_back_death_3":"falling_back_death";this.dead=!0,this.startOverride(e,{mode:"death",timeScale:1,end:1,fade:.08})}update(t,e){if(!this.dead){let n,i=1;e.flying?(n=(e.speed<1.6||e.backward)&&re.clips.flying_idle?"flying_idle":"flying",i=1):e.speed>3.2?(n=e.backward?"running_backward_2":"fast_run_4",i=ir(.6+e.speed/11,.7,2.4)):e.speed>.5?(n=e.backward?"walking_backwards":"walking_2",i=ir(.5+e.speed/3.2,.6,1.6)):(n=this.arch.idle||"idle_4",i=1),re.clips[n]||(n="idle_4"),this.setBase(n,i)}if(this.rootDelta.x=0,this.rootDelta.z=0,this.over){const n=this.over,i=n.action.time,s=re.rootXZ[n.name];if(s){const o=re.fps,a=s.length/2,l=ir(i*o,0,a-1),c=Math.floor(l),h=Math.min(a-1,c+1),u=l-c,f=s[c*2]+(s[h*2]-s[c*2])*u,d=s[c*2+1]+(s[h*2+1]-s[c*2+1])*u;n.mode!=="cast"&&n.mode!=="hit"&&(this.rootDelta.x=f-n.rootPrev[0],this.rootDelta.z=d-n.rootPrev[1]),n.rootPrev[0]=f,n.rootPrev[1]=d}!n.loop&&i>=n.end&&n.mode!=="death"&&this.endOverride()}if(this.hips&&this.mixedHipsY!==void 0&&(this.hips.position.y=this.mixedHipsY),this.mixer.update(t),this.flyK+=((e.flying?1:0)-this.flyK)*Math.min(1,t*7),this.hips&&(this.mixedHipsY=this.hips.position.y),this.floatK+=((e.float&&!this.over?1:0)-this.floatK)*Math.min(1,t*7),this.floatK>.002){for(const n of this.bones){const i=n.userData.restQuat;i&&n.quaternion.slerp(i,this.floatK)}if(this.hips){const n=this.hips.userData.restPos?.y??this.hips.position.y;this.hips.position.y+=(n-this.hips.position.y)*this.floatK}}return this.hips&&(this.hips.position.y+=this.hipsYOffset-Qg*this.flyK*(1-this.floatK)),{root:this.rootDelta}}dispose(){this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.mesh)}}const sr=1/60,e_=-9.8;class n_{constructor(t,{rows:e,cols:n,width:i,length:s,color:o}){this.scene=t,this.rows=e,this.cols=n,this.baseWidth=i,this.baseLength=s,this.n=e*n,this.pos=new Float32Array(this.n*3),this.prev=new Float32Array(this.n*3),this.scale=1,this.acc=0,this.initialized=!1;const a=new Ee;a.setAttribute("position",new ge(this.pos,3));const l=[];for(let f=0;f<e-1;f++)for(let d=0;d<n-1;d++){const m=f*n+d,_=m+1,p=m+n,g=p+1;l.push(m,p,_,_,p,g)}a.setIndex(l);const c=new Float32Array(this.n*3),h=new ft(o),u=h.clone().multiplyScalar(.72);for(let f=0;f<e;f++){const d=f/(e-1);for(let m=0;m<n;m++){const _=(f*n+m)*3;c[_]=h.r+(u.r-h.r)*d,c[_+1]=h.g+(u.g-h.g)*d,c[_+2]=h.b+(u.b-h.b)*d}}a.setAttribute("color",new ge(c,3)),this.mesh=new jt(a,new Je({vertexColors:!0,side:je})),this.mesh.frustumCulled=!1,this.mesh.castShadow=fn.shadows,t.add(this.mesh),this.buildConstraints(),this._v=new E,this._w=new E}buildConstraints(){const{rows:t,cols:e}=this,n=this.scale,i=this.baseLength/(t-1)*n,s=o=>this.baseWidth/(e-1)*(1+.45*(o/(t-1)))*n;this.cons=[];for(let o=0;o<t;o++)for(let a=0;a<e;a++){const l=o*e+a;if(a<e-1&&this.cons.push([l,l+1,s(o),1]),o<t-1&&this.cons.push([l,l+e,i,1]),o<t-1&&a<e-1){const c=Math.hypot(s(o),i);this.cons.push([l,l+e+1,c,.6]),this.cons.push([l+1,l+e,c,.6])}o<t-2&&this.cons.push([l,l+e*2,i*2,.25])}}update(t,e,n,i,s){Math.abs(s-this.scale)>.01&&(this.scale=s,this.buildConstraints());const{rows:o,cols:a,pos:l,prev:c}=this;if(this.initialized&&Math.hypot(e[0].x-l[0],e[0].y-l[1],e[0].z-l[2])>1.5*s&&(this.initialized=!1),!this.initialized){for(let f=0;f<o;f++)for(let d=0;d<a;d++){const m=(f*a+d)*3,_=e[d];l[m]=_.x,l[m+1]=_.y-f*(this.baseLength/(o-1))*s,l[m+2]=_.z-f*.02,c[m]=l[m],c[m+1]=l[m+1],c[m+2]=l[m+2]}this.initialized=!0}this.acc+=Math.min(t,.1);let h=0;for(;this.acc>=sr&&h<3;)this.step(e,n,i,s),this.acc-=sr,h++;h===3&&(this.acc=0);const u=this.mesh.geometry.attributes.position;u.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}step(t,e,n,i){const{rows:s,cols:o,pos:a,prev:l}=this,c=sr*sr,h=-n.x*.9+(Math.random()-.5)*2.5,u=-n.z*.9+(Math.random()-.5)*2.5,f=(Math.random()-.5)*1.5-Math.hypot(n.x,n.z)*.15;for(let d=0;d<o;d++){const m=d*3,_=t[d];a[m]=_.x,a[m+1]=_.y,a[m+2]=_.z,l[m]=_.x,l[m+1]=_.y,l[m+2]=_.z}for(let d=o;d<this.n;d++){const m=d*3,_=a[m],p=a[m+1],g=a[m+2];let x=(_-l[m])*.97,v=(p-l[m+1])*.97,y=(g-l[m+2])*.97;const C=Math.sqrt(x*x+v*v+y*y),T=.35*i;if(C>T){const R=T/C;x*=R,v*=R,y*=R}l[m]=_,l[m+1]=p,l[m+2]=g,a[m]=_+x+h*c,a[m+1]=p+v+(e_*i+f)*c,a[m+2]=g+y+u*c}for(let d=0;d<3;d++){for(const[m,_,p,g]of this.cons){const x=m*3,v=_*3;let y=a[v]-a[x],C=a[v+1]-a[x+1],T=a[v+2]-a[x+2];const R=Math.sqrt(y*y+C*C+T*T)||1e-6,I=(R-p)/R*.5*g;y*=I,C*=I,T*=I;const w=m<o,S=_<o;w||(a[x]+=y*(S?2:1),a[x+1]+=C*(S?2:1),a[x+2]+=T*(S?2:1)),S||(a[v]-=y*(w?2:1),a[v+1]-=C*(w?2:1),a[v+2]-=T*(w?2:1))}this.collide(e,i)}}collide(t,e){const{pos:n,cols:i}=this,s=t.a,o=t.b,a=t.r,l=o.x-s.x,c=o.y-s.y,h=o.z-s.z,u=l*l+c*c+h*h||1e-6,f=t.back,d=Math.min(s.y,o.y)-.15*e,m=Math.max(s.y,o.y)+.12*e;for(let _=i;_<this.n;_++){const p=_*3,g=n[p],x=n[p+1],v=n[p+2];let y=((g-s.x)*l+(x-s.y)*c+(v-s.z)*h)/u;y=Math.max(0,Math.min(1,y));const C=s.x+l*y,T=s.y+c*y,R=s.z+h*y;let I=g-C,w=x-T,S=v-R;const L=Math.sqrt(I*I+w*w+S*S)||1e-6;if(L<a){const B=(a-L)/L;n[p]+=I*B,n[p+1]+=w*B,n[p+2]+=S*B}if(x>d&&x<m){const B=(n[p]-t.mid.x)*f.x+(n[p+1]-t.mid.y)*f.y+(n[p+2]-t.mid.z)*f.z,V=.05*e;B<V&&(n[p]+=f.x*(V-B),n[p+1]+=f.y*(V-B),n[p+2]+=f.z*(V-B))}n[p+1]<.03&&(n[p+1]=.03)}}setOpacity(t){const e=this.mesh.material;e.transparent=t<1,e.opacity=t,e.needsUpdate=!0}set visible(t){this.mesh.visible=t}get visible(){return this.mesh.visible}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const i_={short:{rows:6,len:.42},medium:{rows:9,len:.7},long:{rows:12,len:1}},s_=.93,_c=()=>({primary:new ft(1706512),secondary:new ft(853255),accent:new ft(16719928),glow:new ft(16719928),skin:new ft(3809320),hair:new ft(1181192),hairStreak:new ft(16719928)});function xc(r,t="#cfe0ff"){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.font="700 30px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.shadowColor="rgba(0,0,0,0.85)",n.shadowBlur=8,n.fillStyle=t,n.fillText(r,128,32);const i=new xs(e);i.colorSpace=Ie;const s=new Pr({map:i,transparent:!0,depthWrite:!1}),o=new Ca(s);return o.scale.set(3.4,.85,1),o}let ha=null;function r_(r){ha=r}class Eo{constructor(t,{name:e="",isPlayer:n=!1,power:i=null,paletteSeed:s=null}={}){this.scene=t,this.isPlayer=n,this.name=e,this.paletteSeed=s??(n?.5:Math.random()),this.pos=new E,this.vel=new E,this.yaw=0,this.altitude=0,this.groundY=0,this.hoverBob=0,this.prevYaw=0,this.turnRate=0,this.roll=0,this.pitch=0,this.dive=!1,this.hp=ct.PLAYER_HP,this.maxHp=ct.PLAYER_HP,this.alive=!0,this.power=null,this.score=0,this.frozenUntil=0,this.scaleTarget=1,this.curScale=1,this.flying=!1,this.backward=!1,this.bank=0,this.nemesis=!1,this.phase=Math.random()*Math.PI*2,this.disguise=null,this.propMesh=null,this.opacity=1,this.rootMoved=!1,this.group=new ln,t.add(this.group),this.aura=new jt(new Lr(.55,.85,28),new cn({color:16777215,transparent:!0,opacity:.55,depthWrite:!1,side:je})),this.aura.rotation.x=-Math.PI/2,this.aura.position.y=.07,this.group.add(this.aura),this.blobShadow=new jt(new vs(.62,20),new cn({color:0,transparent:!0,opacity:.3,depthWrite:!1})),this.blobShadow.rotation.x=-Math.PI/2,this.blobShadow.position.y=.04,this.group.add(this.blobShadow),this.iceShell=new jt(new hn(1.15,2.45,.95),new Je({color:10351359,transparent:!0,opacity:.55})),this.iceShell.position.y=1.22,this.iceShell.visible=!1,this.group.add(this.iceShell),this.name&&(this.label=xc(this.name,this.isPlayer?"#ffd166":"#cfe0ff"),this.group.add(this.label)),this.body=null,this.setPower(i||{id:"flight",color:9358335})}buildLook(t,e=null){this.destroyBody();const n=fc(t);this.arch=n;const i=e||Vg(n,this.paletteSeed);this.palette=i;const s=Xg(n,i,{faceless:n.gear.includes("facelessMask")});if(this.rig=s,this.body=s.mesh,this.unitScale=1.85*n.build.height/(re.unitHeight*s_),this.body.scale.setScalar(this.unitScale),this.body.castShadow=fn.shadows,this.group.add(this.body),this.anim=new t_(this.body,n,{hipsYOffset:s.hipsYOffset}),this.extras=s.extras,this.heightM=1.85*n.build.height,this.label&&(this.label.position.y=this.heightM+.35),this.iceShell.scale.setScalar(this.heightM/1.85),this.iceShell.position.y=1.22*this.heightM/1.85,n.cape){const o=i_[n.cape],a=i.primary.clone().lerp(i.secondary,.4);this.cape=new n_(this.scene,{rows:o.rows,cols:7,width:s.capeWidth*this.unitScale,length:o.len*this.heightM,color:a}),this.capePins=s.pins.map(()=>new E)}this.applyOpacity()}destroyBody(){this.body&&(this.anim?.dispose(),this.group.remove(this.body),this.body.skeleton?.dispose?.(),this.body.geometry.dispose(),this.body.material.dispose(),this.body.traverse(t=>{t!==this.body&&t.geometry&&(t.geometry.dispose(),t.material?.dispose?.())}),this.body=null),this.cape&&(this.cape.dispose(),this.cape=null)}setPower(t){this.power=t,t&&this.aura.material.color.set(t.color);const e=this.disguise||t?.id;(!this.arch||this.arch!==fc(e))&&this.buildLook(e,this.nemesis?_c():null)}disguiseAs(t,e=Math.random()){this.disguise=t;const n=this.paletteSeed;this.paletteSeed=e,this.buildLook(t),this.paletteSeed=n}disguiseAsProp(t){this.undisguise(),this.propMesh=t,t.rotation.y=-this.yaw,this.group.add(t),this.body.visible=!1,this.cape&&(this.cape.visible=!1),this.aura.visible=!1,this.label&&(this.label.visible=!1)}undisguise(){this.propMesh&&(this.group.remove(this.propMesh),this.propMesh.geometry.dispose(),this.propMesh=null,this.body&&(this.body.visible=!0),this.cape&&(this.cape.visible=!0),this.aura.visible=!0,this.label&&(this.label.visible=!0)),this.disguise&&(this.disguise=null,this.buildLook(this.power.id))}setNemesisLook(){this.nemesis=!0,this.aura.material.color.set(16719928),this.aura.material.opacity=.95,this.aura.scale.setScalar(1.5),this.buildLook(this.power.id,_c()),this.label&&this.group.remove(this.label),this.label=xc(this.name,"#ff5470"),this.label.position.y=this.heightM+.35,this.group.add(this.label)}setOpacity(t){t!==this.opacity&&(this.opacity=t,this.applyOpacity())}applyOpacity(){const t=this.opacity,e=n=>{n.transparent=t<1,n.opacity=t,n.needsUpdate=!0};this.body&&(e(this.body.material),this.body.traverse(n=>{n!==this.body&&n.material&&e(n.material)})),this.cape?.setOpacity(t),this.aura.material.opacity=.55*t,this.label&&(this.label.material.opacity=t<1?t*.4:1)}get feetY(){return this.altitude+this.groundY}get frozen(){return performance.now()/1e3<this.frozenUntil}freeze(t){this.frozenUntil=performance.now()/1e3+t,this.iceShell.visible=!0}get combat(){return this.arch.combat}get attacking(){return this.anim.attacking}startAttack(){const t=this.arch.combat,e=this.anim.nextMove(),n=this.anim.startAttack(e,t.speed);return n?{move:e,duration:n.duration,hits:n.hits,damage:t.damage*n.hitScale,range:t.range,arc:t.arc}:{move:e,duration:.5,hits:[.25],damage:t.damage,range:t.range,arc:t.arc}}cast(t,e=!1){this.anim.startCast(this.arch.cast||"spell_cast",e)}stopCast(){this.anim.stopCast()}hitReaction(){this.anim.hitReaction()}setHeld(t){t?this.anim.startHeld():this.anim.endHeld()}landing(){this.anim.landing()}emote(){this.anim.emote()}die(t){this.anim.die(t),this.aura.visible=!1}update(t,e){if(!this.frozen&&this.iceShell.visible&&(this.iceShell.visible=!1),Number.isFinite(this.altitude)||(this.altitude=0),Number.isFinite(this.pos.x+this.pos.z)||this.pos.set(0,0,0),ha){const _=ha.groundHeightAt(this.pos.x,this.pos.z),p=Math.abs(_-this.groundY);this.groundY=p>1.5?_:this.groundY+(_-this.groundY)*Math.min(1,t*16)}this.curScale+=(this.scaleTarget-this.curScale)*Math.min(1,t*5),this.group.scale.setScalar(this.curScale);const n=Math.hypot(this.vel.x,this.vel.z),i=this.flying,s=i&&this.altitude<2.6;if(this.rootMoved=!1,!this.frozen){const{root:_}=this.anim.update(t,{speed:n,backward:this.backward,flying:i,float:s,time:e});if(_.x||_.z){const p=this.unitScale*this.curScale,g=Math.sin(this.yaw),x=Math.cos(this.yaw);this.pos.x+=(_.x*x+_.z*g)*p,this.pos.z+=(-_.x*g+_.z*x)*p,this.rootMoved=!0}}const o=this.flying&&this.altitude>1&&n<1.6?Math.sin(e*2.1+this.phase)*.22:0;this.hoverBob+=(o-this.hoverBob)*Math.min(1,t*4),this.group.position.set(this.pos.x,this.altitude+this.groundY+this.hoverBob,this.pos.z),this.group.rotation.y=this.yaw;let a=this.yaw-this.prevYaw;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;this.prevYaw=this.yaw;const l=t>0?a/t:0;this.turnRate+=(Math.max(-6,Math.min(6,l))-this.turnRate)*Math.min(1,t*6);const c=i&&this.altitude>.8,h=c?-Math.max(-.6,Math.min(.6,this.turnRate*.16)):0,u=this.dive?-1.15:c&&!this.backward&&n>1.6?-.1*Math.min(1,n/12):0;this.roll+=(h-this.roll)*Math.min(1,t*5),this.pitch+=(u-this.pitch)*Math.min(1,t*(this.dive?9:4)),this.body&&this.body.rotation.set(this.pitch,0,this.roll);const f=this.altitude;this.blobShadow.position.y=-f/Math.max(.001,this.curScale)+.04;const d=1/(1+f*.25);this.blobShadow.material.opacity=.3*d*this.opacity,this.blobShadow.scale.setScalar(Math.max(.4,d)),this.aura.rotation.z=e*1.5;const m=.9+Math.sin(e*5+this.pos.x)*.12;this.aura.scale.setScalar(m*(this.nemesis?1.5:1));for(const _ of this.extras)_.userData.animate?.(e);if(this.cape){this.group.updateMatrixWorld(!0);const _=this.rig.bones[at.spine2],p=this.rig.bones[at.hips];for(let T=0;T<this.capePins.length;T++)this.capePins[T].copy(this.rig.pins[T]),_.localToWorld(this.capePins[T]);const g=new E;_.getWorldPosition(g);const x=new E;p.getWorldPosition(x);const v=new Me;_.getWorldQuaternion(v);const y=new E(0,0,-1).applyQuaternion(v).normalize(),C=g.clone().add(x).multiplyScalar(.5);this.cape.update(t,this.capePins,{a:g,b:x,r:this.rig.torsoRadius*this.unitScale*this.curScale*1.12,back:y,mid:C},this.vel,this.curScale)}}dispose(){this.undisguise(),this.destroyBody(),this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>{e.map&&e.map.dispose(),e.dispose()})})}}function o_(){let r=0;for(const[t,e,n]of ct.MULT_BRACKETS)r+=t*(e+n)/2;return r}const a_=ct.RTP/o_();function l_(){let r=Math.random(),t=ct.MULT_BRACKETS[ct.MULT_BRACKETS.length-1];for(const i of ct.MULT_BRACKETS){if(r<i[0]){t=i;break}r-=i[0]}const[,e,n]=t;return N(e,n)*a_}class c_{constructor(){this.bet=0,this.targetMult=1,this.total=0,this.phase="idle",this.strikeDelay=0}startRound(t){this.bet=t,this.targetMult=l_(),this.total=0,this.phase="playing",this.strikeDelay=N(1,2.5)}get target(){return this.bet*this.targetMult}get mult(){return this.bet>0?this.total/this.bet:0}get live(){return this.phase==="playing"||this.phase==="stalk"||this.phase==="strike"}addWinnings(t){if(!this.live)return 0;const e=Math.max(0,this.target-this.total),n=Math.min(t,e);return this.total+=n,n}get targetReached(){return this.total>=this.target-1e-9}get stalkReached(){return this.total>=this.target*ct.STALK_FRACTION}update(t){return this.phase==="playing"&&this.stalkReached?(this.phase="stalk","stalk"):(this.phase==="stalk"||this.phase==="playing")&&this.targetReached&&(this.strikeDelay-=t,this.strikeDelay<=0)?(this.phase="strike","strike"):null}endRound(){return this.phase="done",this.total}}const ls=55;class h_{constructor(t){this.canvas=t,this.enabled=!1,this.isTouch=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.moveX=0,this.moveZ=0,this.lookDelta=0,this.pitchDelta=0,this.onAttack=null,this.onPowerDown=null,this.onPowerUp=null,this.onSwitch=null,this.keys=new Set,this.joyPointer=null,this.lookPointer=null,this.joyOrigin={x:0,y:0},this.joyEl=document.getElementById("joystick"),this.knobEl=document.getElementById("joy-knob"),this.bind()}bind(){window.addEventListener("keydown",a=>{this.enabled&&(a.code==="Tab"&&a.preventDefault(),!a.repeat&&(this.keys.add(a.code),a.code==="KeyM"&&this.onAttack?.(),a.code==="Space"&&(a.preventDefault(),this.onPowerDown?.()),a.code==="Tab"&&this.onSwitch?.()))}),window.addEventListener("keyup",a=>{this.keys.delete(a.code),a.code==="Space"&&this.enabled&&this.onPowerUp?.()}),window.addEventListener("blur",()=>{this.keys.clear(),this.onPowerUp?.()});const t=a=>{this.enabled&&a.target===this.canvas&&(this.canvas.setPointerCapture?.(a.pointerId),this.isTouch?this.joyPointer===null?(this.joyPointer=a.pointerId,this.joyOrigin={x:a.clientX,y:a.clientY},this.showJoystick(a.clientX,a.clientY,0,0)):this.lookPointer===null&&(this.lookPointer=a.pointerId,this.lastLook={x:a.clientX,y:a.clientY}):(this.lookPointer=a.pointerId,this.lastLook={x:a.clientX,y:a.clientY}))},e=a=>{if(this.enabled)if(a.pointerId===this.joyPointer){let l=a.clientX-this.joyOrigin.x,c=a.clientY-this.joyOrigin.y;const h=Math.hypot(l,c);h>ls&&(l=l/h*ls,c=c/h*ls),this.moveX=fs(l/ls,-1,1),this.moveZ=fs(-c/ls,-1,1),this.showJoystick(this.joyOrigin.x,this.joyOrigin.y,l,c)}else a.pointerId===this.lookPointer&&(this.lookDelta+=(a.clientX-this.lastLook.x)*.0045,this.pitchDelta+=(a.clientY-this.lastLook.y)*.003,this.lastLook={x:a.clientX,y:a.clientY})},n=a=>{a.pointerId===this.joyPointer&&(this.joyPointer=null,this.moveX=0,this.moveZ=0,this.joyEl.classList.add("hidden")),a.pointerId===this.lookPointer&&(this.lookPointer=null)};window.addEventListener("pointerdown",t),window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),document.getElementById("attack-btn").addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),this.enabled&&this.onAttack?.()});const s=document.getElementById("poweruse-btn");s.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),this.enabled&&this.onPowerDown?.()});const o=a=>{a.preventDefault(),this.enabled&&this.onPowerUp?.()};s.addEventListener("pointerup",o),s.addEventListener("pointercancel",o),s.addEventListener("pointerleave",o)}showJoystick(t,e,n,i){this.joyEl.classList.remove("hidden"),this.joyEl.style.left="0px",this.joyEl.style.top="0px";const s=this.joyEl.querySelector(".joy-base");s.style.left=t+"px",s.style.top=e+"px",this.knobEl.style.left=t+n+"px",this.knobEl.style.top=e+i+"px"}poll(){let t=0;if(!this.isTouch||this.joyPointer===null){let i=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(i+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(i-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),this.isTouch?i&&(this.moveZ=i):(this.moveX=0,this.moveZ=i)}const e=this.lookDelta,n=this.pitchDelta;return this.lookDelta=0,this.pitchDelta=0,{moveX:this.moveX,moveZ:this.moveZ,turn:t,look:e,pitch:n}}setEnabled(t){this.enabled=t,t||(this.keys.clear(),this.moveX=0,this.moveZ=0,this.joyPointer=null,this.lookPointer=null,this.joyEl.classList.add("hidden"))}}const Tn="#141018",u_=r=>"#"+r.toString(16).padStart(6,"0"),d_={flight:(r,t)=>`
    <path d="M6 40 C18 22 27 21 32 8 C37 21 46 22 58 40 C47 33 38 34 32 46 C26 34 17 33 6 40 Z" fill="${r}"/>
    <path d="M32 14 C34 22 38 26 44 30 C38 30 34 33 32 40 C30 33 26 30 20 30 C26 26 30 22 32 14 Z" fill="${t}"/>`,speed:(r,t)=>`
    <path d="M6 22 H18 M4 32 H14 M8 42 H16" stroke="${r}" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M38 4 L18 36 H31 L27 60 L50 26 H36 Z" fill="${r}"/>
    <path d="M36 10 L26 30 H33 L31 42 L42 26 H35 Z" fill="${t}"/>`,invisibility:(r,t)=>`
    <path d="M6 32 C16 16 48 16 58 32 C48 48 16 48 6 32 Z" fill="${r}"/>
    <circle cx="32" cy="32" r="9" fill="${Tn}"/>
    <circle cx="35" cy="29" r="3" fill="#fff" stroke="none"/>
    <path d="M12 54 L52 10" stroke="${t}" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M12 54 L52 10" stroke="${Tn}" stroke-width="3" stroke-linecap="round" fill="none"/>`,telekinesis:(r,t)=>`
    <path d="M17 34 V30 M25 30 V22 M33 29 V20 M41 31 V24" stroke="${r}" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M14 34 C14 46 20 56 32 58 C42 58 48 50 48 40 L48 32 C48 28 42 28 42 32 L41 34 L33 30 L25 32 L17 34 Z" fill="${r}"/>
    <path d="M22 10 L32 4 L42 10 L32 16 Z" fill="${t}"/>
    <path d="M22 10 V15 L32 21 L42 15 V10" fill="${r}"/>
    <path d="M32 16 V21" stroke="${Tn}" stroke-width="3" fill="none"/>`,pyro:(r,t)=>`
    <path d="M32 4 C24 16 12 24 13 40 C14 52 22 60 32 60 C42 60 51 52 51 40 C51 30 44 26 40 16 C38 24 35 27 33 32 C28 26 30 14 32 4 Z" fill="${r}"/>
    <path d="M32 30 C28 36 22 40 23 47 C24 53 28 56 32 56 C36 56 41 53 41 47 C41 42 37 40 36 34 C34 38 33 36 32 30 Z" fill="${t}"/>`,cryo:(r,t)=>`
    <g stroke="${Tn}" stroke-width="10" stroke-linecap="round" fill="none">
      <path d="M32 6 V58 M9.5 19 L54.5 45 M9.5 45 L54.5 19"/>
    </g>
    <g stroke="${r}" stroke-width="5" stroke-linecap="round" fill="none">
      <path d="M32 6 V58 M9.5 19 L54.5 45 M9.5 45 L54.5 19"/>
      <path d="M26 12 L32 18 L38 12 M26 52 L32 46 L38 52 M12 28 L18 26 L16 20 M52 36 L46 38 L48 44 M12 36 L18 38 L16 44 M52 28 L46 26 L48 20"/>
    </g>
    <circle cx="32" cy="32" r="5" fill="${t}"/>`,teleport:(r,t)=>`
    <ellipse cx="32" cy="34" rx="24" ry="10" fill="${r}"/>
    <ellipse cx="32" cy="34" rx="14" ry="5" fill="${Tn}" stroke="none"/>
    <path d="M22 26 L32 12 L42 26" fill="${t}"/>
    <path d="M27 36 L32 28 L37 36" fill="${t}"/>`,xray:(r,t)=>`
    <path d="M8 12 L14 18 M56 12 L50 18 M8 52 L14 46 M56 52 L50 46" stroke="${r}" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M6 32 C16 16 48 16 58 32 C48 48 16 48 6 32 Z" fill="${r}"/>
    <circle cx="32" cy="32" r="11" fill="${Tn}"/>
    <circle cx="32" cy="32" r="5" fill="${t}" stroke="none"/>
    <path d="M32 21 V25 M32 39 V43 M21 32 H25 M39 32 H43" stroke="${t}" stroke-width="3" stroke-linecap="round" fill="none"/>`,shapeshift:(r,t)=>`
    <path d="M12 10 C22 6 42 6 52 10 C54 28 50 50 32 58 C14 50 10 28 12 10 Z" fill="${r}"/>
    <path d="M32 7.5 C42 7 48 8 52 10 C54 28 50 50 32 58 Z" fill="${t}"/>
    <path d="M18 24 C22 20 28 20 30 24 Z M34 24 C36 20 42 20 46 24 Z" fill="${Tn}"/>
    <path d="M22 38 C27 46 37 46 42 38 C36 40 28 40 22 38 Z" fill="${Tn}"/>`,duplication:(r,t)=>`
    <circle cx="40" cy="20" r="9" fill="${t}"/>
    <path d="M24 56 C24 40 32 36 40 36 C48 36 56 40 56 56 Z" fill="${t}"/>
    <circle cx="24" cy="24" r="9" fill="${r}"/>
    <path d="M8 60 C8 44 16 40 24 40 C32 40 40 44 40 60 Z" fill="${r}"/>`};function f_(r,t=.45){const e=r>>16&255,n=r>>8&255,i=r&255,s=o=>Math.round(o+(255-o)*t);return`rgb(${s(e)},${s(n)},${s(i)})`}const vc={};function Oi(r,t="1em"){const e=Xe.find(s=>s.id===r),n=d_[r];if(!e||!n)return"";const i=vc[r]||(vc[r]=n(u_(e.color),f_(e.color)));return`<svg class="picon" viewBox="0 0 64 64" width="${t}" height="${t}" aria-label="${e.name}" role="img"><g stroke="${Tn}" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke">${i}</g></svg>`}const p_='<svg class="picon lock" viewBox="0 0 64 64" width="1em" height="1em" role="img" aria-label="locked"><path d="M20 30 V22 C20 14 26 9 32 9 C38 9 44 14 44 22 V30" fill="none" stroke="#e9e6ef" stroke-width="7" stroke-linecap="round"/><rect x="13" y="28" width="38" height="30" rx="6" fill="#e9e6ef" stroke="#141018" stroke-width="3.5"/><circle cx="32" cy="42" r="4.5" fill="#141018"/><path d="M32 44 V51" stroke="#141018" stroke-width="4" stroke-linecap="round"/></svg>';class m_{constructor(){this.ctx=null,this.master=null,this.enabled=localStorage.getItem("irr_sound")!=="0",this.noiseBuf=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*1.5;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noiseBuf.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}catch{}}setEnabled(t){this.enabled=t,localStorage.setItem("irr_sound",t?"1":"0")}get t(){return this.ctx.currentTime}env(t,e,n,i,s){const o=t.gain;o.setValueAtTime(1e-4,e),o.exponentialRampToValueAtTime(Math.max(i,1e-4),e+n),o.exponentialRampToValueAtTime(1e-4,e+n+s)}tone({type:t="sine",from:e=440,to:n=e,dur:i=.2,vol:s=.3,attack:o=.005,delay:a=0}){if(!this.ctx||!this.enabled)return;const l=this.t+a,c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=t,c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(Math.max(n,1),l+i),this.env(h,l,o,s,i),c.connect(h).connect(this.master),c.start(l),c.stop(l+i+o+.05)}noise({dur:t=.3,vol:e=.3,from:n=800,to:i=300,q:s=1,attack:o=.005,delay:a=0,type:l="bandpass"}){if(!this.ctx||!this.enabled)return;const c=this.t+a,h=this.ctx.createBufferSource();h.buffer=this.noiseBuf,h.loop=!0;const u=this.ctx.createBiquadFilter();u.type=l,u.Q.value=s,u.frequency.setValueAtTime(n,c),u.frequency.exponentialRampToValueAtTime(Math.max(i,20),c+t);const f=this.ctx.createGain();this.env(f,c,o,e,t),h.connect(u).connect(f).connect(this.master),h.start(c),h.stop(c+t+o+.05)}click(){this.tone({type:"triangle",from:900,to:700,dur:.06,vol:.15})}coin(){this.tone({type:"sine",from:1150,to:1600,dur:.09,vol:.14}),this.tone({type:"sine",from:1720,to:2100,dur:.1,vol:.1,delay:.05})}punch(){this.noise({dur:.12,vol:.4,from:500,to:120,q:.8}),this.tone({type:"square",from:150,to:60,dur:.1,vol:.2})}kill(){this.noise({dur:.25,vol:.5,from:900,to:90,q:.7}),this.tone({type:"sawtooth",from:320,to:50,dur:.3,vol:.28})}hurt(){this.tone({type:"sawtooth",from:220,to:90,dur:.15,vol:.3})}whoosh(){this.noise({dur:.35,vol:.35,from:400,to:2400,q:2})}teleport(){this.tone({type:"sine",from:300,to:1800,dur:.18,vol:.25}),this.noise({dur:.2,vol:.2,from:2e3,to:4e3,q:3})}flame(){this.noise({dur:1.6,vol:.35,from:300,to:700,q:.5,attack:.15})}freeze(){this.noise({dur:.8,vol:.3,from:4e3,to:900,q:4}),this.tone({type:"sine",from:1400,to:500,dur:.7,vol:.15})}shatter(){this.noise({dur:.3,vol:.45,from:5e3,to:2e3,q:1.5})}tk(){this.tone({type:"sine",from:90,to:240,dur:1.4,vol:.2}),this.tone({type:"sine",from:93,to:246,dur:1.4,vol:.15})}slam(){this.noise({dur:.4,vol:.55,from:400,to:60,q:.6}),this.tone({type:"square",from:100,to:35,dur:.4,vol:.3})}invis(){this.tone({type:"sine",from:900,to:200,dur:.5,vol:.18})}xray(){this.tone({type:"triangle",from:500,to:1400,dur:.4,vol:.16})}morph(){this.tone({type:"sawtooth",from:200,to:700,dur:.35,vol:.16}),this.tone({type:"sawtooth",from:700,to:250,dur:.3,vol:.14,delay:.3})}dupe(){this.tone({type:"square",from:400,to:800,dur:.15,vol:.14}),this.tone({type:"square",from:400,to:800,dur:.15,vol:.14,delay:.12})}pickup(){this.tone({type:"triangle",from:600,to:1200,dur:.2,vol:.22}),this.tone({type:"triangle",from:900,to:1800,dur:.25,vol:.18,delay:.1})}potion(){this.tone({type:"sine",from:300,to:900,dur:.4,vol:.22}),this.noise({dur:.3,vol:.12,from:1500,to:3500,q:2,delay:.1})}fireball(){this.noise({dur:.9,vol:.5,from:200,to:900,q:.6})}explosion(){this.noise({dur:.9,vol:.65,from:700,to:45,q:.5}),this.tone({type:"square",from:90,to:28,dur:.8,vol:.35})}landing(){this.noise({dur:.6,vol:.6,from:500,to:50,q:.5}),this.tone({type:"square",from:120,to:30,dur:.55,vol:.32})}grow(){this.tone({type:"sawtooth",from:120,to:420,dur:.8,vol:.22})}nemesis(){this.tone({type:"sawtooth",from:55,to:52,dur:1.6,vol:.4}),this.tone({type:"sawtooth",from:110,to:104,dur:1.6,vol:.25}),this.noise({dur:1.4,vol:.15,from:150,to:60,q:1})}death(){this.tone({type:"sawtooth",from:400,to:40,dur:1.4,vol:.4}),this.noise({dur:1.2,vol:.35,from:1200,to:80,q:.8})}worldshift(){this.tone({type:"sine",from:200,to:1e3,dur:1.2,vol:.25}),this.noise({dur:1.4,vol:.18,from:500,to:4e3,q:2,attack:.3})}cashout(){[523,659,784,1047].forEach((e,n)=>this.tone({type:"triangle",from:e,to:e,dur:.25,vol:.2,delay:n*.11}))}}const Rt=new m_,kt=r=>document.getElementById(r);class g_{constructor(){this.menu=kt("menu"),this.hud=kt("hud"),this.results=kt("results"),this.switchOverlay=kt("switch-overlay"),this.onPlay=null,this.onSwitchPick=null,this.onResultsDone=null,this.powerIndex=0,this.bet=ct.BETS[1],this.rareUnlocked=new Set,this.announceTimer=null,this.buildMenu(),this.buildSwitchOverlay(),kt("results-btn").addEventListener("click",()=>{Rt.click(),this.onResultsDone?.()}),kt("sound-btn").addEventListener("click",()=>{Rt.setEnabled(!Rt.enabled),kt("sound-btn").classList.toggle("off",!Rt.enabled),Rt.click()}),kt("sound-btn").classList.toggle("off",!Rt.enabled)}buildMenu(){const t=kt("bet-options");t.innerHTML="";for(const e of ct.BETS){const n=document.createElement("button");n.className="bet-chip"+(e===this.bet?" on":""),n.textContent="$"+e,n.addEventListener("click",()=>{Rt.click(),this.bet=e,t.querySelectorAll(".bet-chip").forEach(i=>i.classList.toggle("on",i===n))}),t.appendChild(n)}kt("play-btn").addEventListener("click",()=>{Rt.unlock();const e=Xe[this.powerIndex];e.rare&&!this.rareUnlocked.has(e.id)||(Rt.click(),this.onPlay?.(e,this.bet))}),this.renderPowerGrid()}rollRarePowers(){this.rareUnlocked.clear();for(const t of Xe)t.rare&&Math.random()<.5&&this.rareUnlocked.add(t.id)}renderPowerGrid(){let t=Xe[this.powerIndex];t.rare&&!this.rareUnlocked.has(t.id)&&(this.powerIndex=Xe.findIndex(n=>!n.rare||this.rareUnlocked.has(n.id)),t=Xe[this.powerIndex]);const e=kt("power-grid");e.innerHTML="",Xe.forEach((n,i)=>{const s=n.rare&&!this.rareUnlocked.has(n.id),o=document.createElement("div");o.className="pg-cell"+(i===this.powerIndex?" on":"")+(n.rare?" rare":"")+(s?" locked":""),o.style.setProperty("--pcolor","#"+n.color.toString(16).padStart(6,"0")),o.innerHTML=`<div class="em">${Oi(n.id)}${s?p_:""}</div><div class="nm">${n.name}</div>`,o.addEventListener("click",()=>{if(Rt.click(),s){kt("power-desc").innerHTML=`<b>${n.name}</b> — RARE power, not in this lobby rotation. Check back after your next round.`;return}this.powerIndex=i,this.renderPowerGrid()}),e.appendChild(o)}),kt("power-desc").innerHTML=`<b>${t.name}</b> — ${t.desc}`,kt("play-btn").disabled=!1}showMenu(t){this.rollRarePowers(),this.renderPowerGrid(),kt("wallet-value").textContent=Bi(t);const e=kt("bet-options").children;for(let n=0;n<e.length;n++){const i=ct.BETS[n]<=t;e[n].style.opacity=i?1:.3,e[n].style.pointerEvents=i?"auto":"none",!i&&ct.BETS[n]===this.bet&&(this.bet=ct.BETS[0],e[0]?.classList.add("on"),e[n].classList.remove("on"))}this.menu.classList.remove("hidden"),this.hud.classList.add("hidden"),this.results.classList.add("hidden")}showHUD(t){this.menu.classList.add("hidden"),this.hud.classList.remove("hidden"),this.results.classList.add("hidden"),kt("keys-hint").style.display=t?"none":"",kt("attack-btn").style.display=t?"":"none",kt("killfeed").innerHTML=""}setTotal(t,e,n=!1){const i=kt("total-value");i.textContent=Bi(t),kt("total-mult").textContent=e.toFixed(2)+"×",n&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"))}setHP(t){const e=kt("hp-fill");e.style.width=Math.max(0,t*100)+"%",e.classList.toggle("low",t<.35)}setPowerButton(t,e){kt("poweruse-icon").innerHTML=Oi(t?t.id:"speed","100%");const n=kt("cd-circle");n.style.stroke=t?"#"+t.color.toString(16).padStart(6,"0"):"#6ea8ff",n.style.strokeDashoffset=String(289*e),kt("poweruse-btn").classList.toggle("oncd",e>.02)}setSwitches(t){kt("switch-count").textContent=t}setBuffs(t){kt("buff-row").innerHTML=t.map(e=>`<span class="buff-chip">${e.icon?Oi(e.icon):e.emblem} ${e.label}</span>`).join("")}leaderboard(t){kt("leaderboard").innerHTML=t.map(e=>`<div class="lb-row${e.me?" me":""}"><span class="lb-name">${e.rank}. ${e.name}</span><span>${Bi(e.score)}</span></div>`).join("")}killfeed(t,e=!1){const n=kt("killfeed"),i=document.createElement("div");for(i.className="kf-row"+(e?" me":""),i.innerHTML=t,n.prepend(i);n.children.length>5;)n.lastChild.remove();setTimeout(()=>i.remove(),6e3)}popup(t,e,n,i=!1){const s=document.createElement("div");s.className="pop"+(i?" big":""),s.textContent=n,s.style.left=t+"px",s.style.top=e+"px",this.hud.appendChild(s),setTimeout(()=>s.remove(),1e3)}announce(t,{danger:e=!1,dur:n=2200,icon:i=null}={}){const s=kt("announce");s.textContent=t,i&&(s.innerHTML=Oi(i)+"<span>"+s.innerHTML+"</span>"),s.classList.remove("hidden"),s.classList.toggle("danger",e),clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>s.classList.add("hidden"),n)}flash(){const t=kt("flash");t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}buildSwitchOverlay(){kt("switch-btn").addEventListener("click",()=>this.onSwitchOpen?.()),kt("switch-cancel").addEventListener("click",()=>{Rt.click(),this.closeSwitch()})}openSwitch(t,e,n=!1){Rt.click(),kt("switch-left-label").innerHTML=n?"<span>FREE</span>":`<span>${e} LEFT</span>`;const i=kt("switch-grid");i.innerHTML="";for(const s of Xe){const o=document.createElement("div"),a=s.id===t||!n&&e<=0;o.className="switch-cell"+(s.id===t?" current":"")+(a?" disabled":""),o.innerHTML=`<div class="em">${Oi(s.id)}</div><div class="nm">${s.name}</div>`,o.addEventListener("click",()=>{a||(Rt.click(),this.closeSwitch(),this.onSwitchPick?.(s))}),i.appendChild(o)}this.switchOverlay.classList.remove("hidden")}closeSwitch(){this.switchOverlay.classList.add("hidden")}get switchOpen(){return!this.switchOverlay.classList.contains("hidden")}showResults({payout:t,mult:e,kills:n,tokens:i,place:s,killerName:o,killerPower:a,win:l}){kt("results-title").textContent=l?"CASHED OUT":"ELIMINATED",kt("results-title").classList.toggle("win",l),kt("results-killer").textContent=o?`taken down by ${o} (${a})`:"",kt("results-payout").textContent=Bi(t),kt("results-mult").textContent=e.toFixed(2)+"× your bet",kt("results-stats").innerHTML=`<div><b>${n}</b>KILLS</div><div><b>${i}</b>TOKENS</div><div><b>#${s}</b>PLACE</div>`,this.results.classList.remove("hidden")}}const he=()=>performance.now()/1e3,wn=12614655,yc=r=>Number.isFinite(r.x)&&Number.isFinite(r.y)&&Number.isFinite(r.z),Vn=(r,t)=>Math.abs(r.feetY-t.feetY)<=ct.HIT_Y_RANGE,rr=(r,t)=>Math.hypot(r.pos.x-t.x,r.feetY+1.1-t.y,r.pos.z-t.z);function or(r,t,e){if(yc(t)){if(!yc(r)){r.copy(t);return}r.lerp(t,e)}}const Mc={hit:["POW!","WHAM!","SMACK!","BIFF!","THWACK!","BONK!","WHACK!","BAM!"],kill:["KAPOW!","CRUNCH!","BLAM!","KRAK!","WHAMMO!","KA-BLAM!"],fire:["FWOOSH!","KABOOM!","BLAZE!"],shatter:["CRACK!","SHATTER!","KRISH!"],slam:["SLAM!","CRASH!","WHUMP!"],hurt:["OOF!","OUCH!","UGH!","ARGH!"],boom:["BOOM!","KABOOM!","KRAKOOM!"],squish:["SQUISH!","SPLAT!","CRUNCH!"]},Sc={hit:{size:1},kill:{size:1.35},fire:{size:1.45},shatter:{size:1.25},slam:{size:1.35},hurt:{size:.9},boom:{size:1.7},squish:{size:1.25}};class __{constructor(t){this.canvas=t,this.renderer=new w0({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ie,this.renderer.toneMapping=Tc,this.renderer.toneMappingExposure=1.06,fn.shadows=window.matchMedia("(pointer: fine)").matches&&!("ontouchstart"in window),fn.shadows&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ec),this.scene=new E0,this.camera=new $e(68,1,.1,600),this.baseFov=68,this.world=new Tg(this.scene),r_(this.world),this.fx=new Cg(this.scene),this.bams=new Ng(this.scene),this.collectibles=new Bg(this.scene,this.world),this.ui=new g_,this.controls=new h_(t),this.director=new c_,this.state="menu",this.timescale=1,this.slowmoUntil=0,this.time=0,this.wallet=parseFloat(localStorage.getItem("irr_wallet")??"")||ct.STARTING_WALLET,this.bots=[],this.clones=[],this.thrown=[],this.pendingHits=[],this.corpses=[],this.pendingRespawns=[],this.player=null,this.hunters=[],this.strikeT=0,this.hunterRefill=0,this.hunterFireCd=0,this.camYaw=0,this.camPitch=.42,this.camPos=new E(0,30,40),this.camTarget=new E,this.attractBot=null,this.attractTimer=0,this.deathT=0,this.lbTimer=0,this._v1=new E,this._v2=new E,this.collectibles.respawnAll();for(let e=0;e<ct.BOT_COUNT;e++)this.spawnBot({initial:!0});this.ui.onPlay=(e,n)=>this.startRound(e,n),this.ui.onResultsDone=()=>this.backToMenu(),this.ui.onSwitchOpen=()=>this.openSwitch(),this.ui.onSwitchPick=e=>this.doSwitch(e),this.controls.onAttack=()=>this.playerAttack(),this.controls.onPowerDown=()=>this.powerDown(),this.controls.onPowerUp=()=>this.powerUp(),this.controls.onSwitch=()=>this.openSwitch(),this.ui.showMenu(this.wallet),window.addEventListener("pointerdown",()=>Rt.unlock(),{once:!0})}saveWallet(){localStorage.setItem("irr_wallet",String(this.wallet))}resize(t,e){this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}get focusPos(){return this.player&&(this.state==="playing"||this.state==="dying")?this.player.ch.pos:this.attractBot?.ch.alive?this.attractBot.ch.pos:this.world.focus}bam(t,e,n,i,s=1){const o=Math.hypot(t-this.camPos.x,n-this.camPos.z);if(o>55)return;const a=Sc[i]||Sc.hit,l=fs(.8+o/30,.8,1.9);this.bams.spawn(t+N(-.25,.25),e+N(-.1,.25),n+N(-.25,.25),qt(Mc[i]||Mc.hit),{size:a.size*s*l,camPos:this.camPos})}spawnBot({initial:t=!1,pos:e=null}={}){const n=dh(Xe,a=>a.rare?.35:1),i=new Eo(this.scene,{name:wg(),power:n});let s=e;!s&&!t&&this.player&&this.state==="playing"&&Math.random()<.65&&(s=this.world.randomOpenPos(this.player.ch.pos,25,65)),s=s||this.world.randomOpenPos(this.focusPos,15,90),i.pos.set(s.x,0,s.z),i.yaw=N(0,Math.PI*2);const o={ch:i,power:n,state:"roam",target:null,wander:this.world.randomOpenPos(s,8,40),repath:N(.5,3),attackCd:0,quirkCd:N(2,8),aggressive:Math.random()<.35,score:t?N(.2,8)*10:N(.5,3),hunter:!1,stalkCd:0,farT:0,hp:100,held:!1};return this.bots.push(o),o}updateBot(t,e){const n=t.ch;if(!n.alive)return;if(t.held){n.update(e,this.time);return}if(n.update(e,this.time),n.rootMoved&&this.world.resolve(n.pos,.55,n.altitude),n.frozen){n.vel.set(0,0,0);return}const i=this.focusPos;if(!t.hunter&&Math.hypot(n.pos.x-i.x,n.pos.z-i.z)>ct.RECYCLE_DIST+20){const y=this.world.randomOpenPos(i,55,100);n.pos.set(y.x,0,y.z),t.target=null,t.wander=this.world.randomOpenPos(i,15,60)}t.repath-=e,t.attackCd-=e,t.quirkCd-=e,t.stalkCd-=e;const s=this.director.phase,o=t.hunter&&s==="strike"&&this.player?.ch.alive&&this.state==="playing",a=t.hunter&&s==="stalk"&&this.player?.ch.alive&&this.state==="playing",l=this.player&&this.player.ch.alive&&this.state==="playing"&&!this.playerHidden()&&this.player.ch.curScale<1.5;if(t.repath<=0&&!o){t.repath=N(1.2,3),t.target=null;let y=null,C=24;for(const T of this.bots){if(T===t||!T.ch.alive||T.ch.frozen||T.held||Math.abs(T.ch.feetY-n.feetY)>4)continue;const R=n.pos.distanceTo(T.ch.pos);R<C&&(y=T,C=R)}if(l&&t.aggressive&&!a&&Math.abs(this.player.ch.feetY-n.feetY)<4){const T=n.pos.distanceTo(this.player.ch.pos);T<15&&T<C&&(t.target="player")}!t.target&&y&&Math.random()<(a?.25:.55)&&(t.target=y),!t.target&&!a&&Math.random()<.6&&(t.wander=this.world.randomOpenPos(n.pos,10,45))}if(a&&t.stalkCd<=0){t.stalkCd=N(1.5,3.5);const y=this.player.ch.pos,C=N(0,Math.PI*2),T=N(6,13),R=y.x+Math.sin(C)*T,I=y.z+Math.cos(C)*T;t.wander=this.world.isBlocked(R,I,.9)?this.world.randomOpenPos(y,5,13):{x:R,z:I},t.target&&n.pos.distanceTo(y)>18&&(t.target=null)}o&&(t.target="player");let c=t.wander,h=!1;t.target==="player"?!this.player||!this.player.ch.alive||!o&&!l?t.target=null:(c=this.player.ch.pos,h=!0):t.target&&(!t.target.ch.alive||t.target.ch.frozen||t.target.held?t.target=null:(c=t.target.ch.pos,h=!0));const u=c.x-n.pos.x,f=c.z-n.pos.z,d=Math.hypot(u,f);let m=o?ct.HUNTER_SPEED:ct.BOT_SPEED;if(t.quirkCd<=0){t.quirkCd=N(4,10);const y=t.power.id;if(y==="speed")t.speedBurst=he()+1.2;else if(y==="flight")t.flyUntil=he()+N(3,6);else if(y==="teleport"&&d>8){const C=Math.min(9,d*.6)/d,T=n.pos.x+u*C,R=n.pos.z+f*C;this.world.isBlocked(T,R)||(this.fx.emit(n.pos.x,1.2,n.pos.z,{count:14,color:8257482,speed:5,life:.4}),n.pos.set(T,0,R),this.fx.emit(T,1.2,R,{count:14,color:8257482,speed:5,life:.4}))}else y==="invisibility"?t.fadeUntil=he()+2.5:y==="telekinesis"&&this.fx.emit(n.pos.x,1.6,n.pos.z,{count:10,color:wn,speed:2.5,life:.7,gravity:1})}t.speedBurst&&he()<t.speedBurst&&(m*=2.1,this.fx.emitDir(n.pos.x,1,n.pos.z,this._v1.set(-u/(d||1),0,-f/(d||1)),{count:1,color:16770140,speed:3,life:.3,size:1.2,cone:.2})),n.setOpacity(t.fadeUntil&&he()<t.fadeUntil?.25:1);const _=o&&this.player.ch.altitude>2,p=t.flyUntil&&he()<t.flyUntil||_;let g=0;if(p){const y=_?Math.max(0,this.player.ch.altitude):ct.BOT_FLIGHT_DECK+Math.sin(this.time*.7+n.phase)*1.2;g=Math.max(y,this.flightCeiling(n,n.vel.x,n.vel.z))}if(Number.isFinite(n.altitude)||(n.altitude=0),n.altitude+=(g-n.altitude)*Math.min(1,e*(g>n.altitude?3.2:2.2)),n.altitude>.05||(n.altitude=0),n.flying=p||n.flying&&n.altitude>.4,o){const y=n.pos.distanceTo(this.player.ch.pos);if(y>34?t.farT+=e:t.farT=0,(t.farT>2.5||this.strikeT>ct.HUNTER_BLINK_AT&&y>9)&&(this.relocateHunter(t,this.strikeT>ct.HUNTER_BLINK_AT),t.farT=0),n.curScale>1.5&&y<1.9*n.curScale&&Vn(this.player.ch,n)){this.bam(this.player.ch.pos.x,1.2+this.player.ch.altitude,this.player.ch.pos.z,"squish",1.3),this.playerDeath(t);return}}const x=h?Math.max(1.6,n.combat.range*.72):1.2;if(n.attacking&&h)n.vel.set(0,0,0);else if(d>x){const y=u/d*m,C=f/d*m;n.vel.set(y,0,C),n.pos.x+=y*e,n.pos.z+=C*e;let R=Math.atan2(y,C)-n.yaw;for(;R>Math.PI;)R-=Math.PI*2;for(;R<-Math.PI;)R+=Math.PI*2;n.yaw+=R*Math.min(1,e*8),this.world.resolve(n.pos,.55,n.altitude)}else n.vel.set(0,0,0),!h&&t.repath>1&&(t.wander=this.world.randomOpenPos(n.pos,10,45));const v=t.target==="player"?this.player?.ch:t.target?.ch;if(h&&d<n.combat.range&&t.attackCd<=0&&v&&Vn(n,v)&&!n.attacking){const y=n.startAttack();t.attackCd=y.duration+N(.25,.7),n.yaw=Math.atan2(u,f);for(const C of y.hits)this.pendingHits.push({at:this.time+C,owner:"bot",bot:t,target:t.target,damage:y.damage,range:y.range})}}processHits(){for(let t=this.pendingHits.length-1;t>=0;t--){const e=this.pendingHits[t];if(e.at>this.time)continue;if(this.pendingHits.splice(t,1),e.owner==="player"){this.resolvePlayerHit(e);continue}const n=e.owner==="bot"?e.bot:e.clone;if(!n||!n.ch.alive)continue;if(e.owner==="bot"&&e.target==="player"){if(!this.player?.ch.alive)continue;const o=n.ch.pos.distanceTo(this.player.ch.pos),a=n.hunter&&this.director.phase==="strike";o<e.range+.6&&Vn(n.ch,this.player.ch)&&this.damagePlayer(e.damage*(a?ct.HUNTER_DAMAGE:.3),n);continue}const i=e.target;!i||!i.ch?.alive||i.held||n.ch.pos.distanceTo(i.ch.pos)>e.range+.6||!Vn(n.ch,i.ch)||(i.hp-=e.damage,i.ch.hitReaction(),this.fx.emit(i.ch.pos.x,1.4+i.ch.altitude,i.ch.pos.z,{count:6,color:16777215,speed:3.5,life:.3,size:1.1}),i.hp<=0?this.killBot(i,e.owner==="clone"?{byPlayer:!0}:{byBot:n}):(e.owner==="clone"||Math.random()<.5)&&this.bam(i.ch.pos.x,1.5+i.ch.altitude,i.ch.pos.z,"hit",.75))}}killBot(t,{byPlayer:e=!1,byBot:n=null,cause:i="attack",silent:s=!1}={}){if(!t.ch.alive)return;t.ch.alive=!1;const o=t.ch.pos.x,a=t.ch.altitude+1.2,l=t.ch.pos.z;if(!s){const h=t.power.color;i==="shatter"?(this.fx.emit(o,a,l,{count:44,color:10351359,speed:11,life:.85,size:2,gravity:4}),this.fx.emit(o,a,l,{count:26,color:16777215,speed:5,life:.6,size:2.6,gravity:-1}),this.fx.emit(o,a-.6,l,{count:18,color:6273535,speed:7,life:.7,size:1.4,gravity:6}),this.fx.ring(o,l,{color:10351359,maxR:4.5,dur:.5}),this.fx.addShake(.25),Rt.shatter()):i==="fire"?this.fx.emit(o,a,l,{count:30,color:16742972,speed:7,life:.7,size:2.2,gravity:3}):i==="slam"?(this.fx.emit(o,a,l,{count:30,color:wn,speed:9,life:.8,size:1.9}),Rt.slam()):this.fx.emit(o,a,l,{count:24,color:h,speed:8,life:.7,size:1.8}),this.fx.ring(o,l,{color:h,maxR:3,dur:.4}),Rt.kill();const u=i==="fire"?"fire":i==="shatter"?"shatter":i==="slam"?"slam":i==="squish"?"squish":"kill";this.bam(o,a+.4,l,u,e?1:.8)}if(e&&this.player){const h=this.director.bet*N(ct.KILL_VALUE_MIN,ct.KILL_VALUE_MAX)*(1+Math.min(2,t.score/200)),u=this.director.addWinnings(h);if(this.player.kills++,u>0){const f=this.project(this._v1.set(o,a,l));f&&this.ui.popup(f.x,f.y,"+"+Bi(u),!0),this.ui.setTotal(this.director.total,this.director.mult,!0)}Rt.coin(),this.ui.killfeed(`<b>You</b> ⚡ eliminated <b>${t.ch.name}</b>`,!0),this.player.absorbUntil>he()&&t.power.id!==this.playerMainPower().id&&(this.setPlayerPower(t.power),this.ui.announce(`ABSORBED ${t.power.name.toUpperCase()}`,{dur:1800}),Rt.pickup())}else n&&(n.score+=2+t.score*.25,(Math.random()<.5||t.ch.pos.distanceTo(this.camPos)<70)&&this.ui.killfeed(`<b>${n.ch.name}</b> ⚔ <b>${t.ch.name}</b>`));if(t.hunter){const h=this.hunters.indexOf(t);h>=0&&this.hunters.splice(h,1),this.director.phase==="strike"&&(this.hunterRefill=Math.min(this.hunterRefill||9,N(1,2)))}const c=this.bots.indexOf(t);if(c>=0&&this.bots.splice(c,1),s||i==="shatter")t.ch.dispose();else{const h=e?this.player?.ch:n?.ch;t.ch.die(this.deathKindFor(t.ch,h,i)),t.ch.vel.set(0,0,0),this.corpses.push({ch:t.ch,ttl:2.8})}this.pendingRespawns.push(N(1.5,4))}deathKindFor(t,e,n){if(n==="slam"||n==="fire"||n==="shatter")return"fly";if(!e)return"back";const i=e.pos.x-t.pos.x,s=e.pos.z-t.pos.z;return i*Math.sin(t.yaw)+s*Math.cos(t.yaw)>=0?"back":"forward"}updateCorpses(t){for(let e=this.corpses.length-1;e>=0;e--){const n=this.corpses[e];n.ttl-=t,n.ch.update(t,this.time),n.ttl<.6&&n.ch.setOpacity(Math.max(0,n.ttl/.6)),n.ttl<=0&&(n.ch.dispose(),this.corpses.splice(e,1))}}startRound(t,e){if(e>this.wallet)return;this.wallet-=e,this.saveWallet(),this.director.startRound(e),this.player&&this.player.ch.dispose();const n=new Eo(this.scene,{name:"YOU",isPlayer:!0,power:t}),i=this.world.randomOpenPos(this.focusPos,5,40);n.pos.set(i.x,0,i.z),this.player={ch:n,powerMain:t,secondPower:null,switchesLeft:ct.SWITCHES_PER_GAME,cds:{},flying:!1,speedUntil:0,invisUntil:0,disguiseUntil:0,xrayUntil:0,absorbUntil:0,twoUntil:0,enlargeUntil:0,meteor:null,ambushUntil:0,fireballArmed:!1,flameUntil:0,invulnUntil:he()+2,adrenalineReady:he(),kills:0,tokens:0,prevAlt:0,tk:null},n.hp=ct.PLAYER_HP,this.state="playing",this.clearHunters(),this.camYaw=n.yaw+Math.PI,this.camPitch=.42,this.camTarget.set(i.x,1.6,i.z),this.camPos.set(i.x-Math.sin(this.camYaw)*8.5,6.6,i.z-Math.cos(this.camYaw)*8.5),this.ui.showHUD(this.controls.isTouch),this.ui.setSwitches(this.player.switchesLeft),this.ui.setTotal(0,0),this.ui.setHP(1),this.controls.setEnabled(!0),this.ui.announce(t.name.toUpperCase(),{dur:1800,icon:t.id}),this.fx.ring(i.x,i.z,{color:t.color,maxR:6,dur:.7}),this.fx.emit(i.x,1,i.z,{count:30,color:t.color,speed:7,life:.8}),Rt.whoosh()}playerMainPower(){return this.player.powerMain}playerHidden(){return this.player?this.player.invisUntil>he()||!!this.player.ch.propMesh:!1}setPlayerPower(t){this.player.powerMain=t,this.player.ch.setPower(t),t.id!=="flight"&&(this.player.flying=!1),t.id!=="telekinesis"&&this.cancelTelekinesis(!0)}openSwitch(){if(this.state==="playing"){if(this.ui.switchOpen){this.ui.closeSwitch();return}this.ui.openSwitch(this.player.powerMain.id,this.player.switchesLeft)}}doSwitch(t){if(this.state!=="playing"||!t||this.player.switchesLeft<=0)return;this.player.switchesLeft--,this.ui.setSwitches(this.player.switchesLeft),this.setPlayerPower(t);const e=this.player.ch.pos;this.fx.ring(e.x,e.z,{color:t.color,maxR:5,dur:.5}),this.fx.emit(e.x,1.4,e.z,{count:26,color:t.color,speed:6,life:.7}),this.ui.announce(t.name.toUpperCase(),{dur:1500,icon:t.id}),Rt.morph()}playerAttack(){if(this.state!=="playing"||!this.player?.ch.alive)return;const t=this.player,e=t.ch;if(t.fireballArmed){this.launchFireball();return}if(e.attacking)return;e.propMesh&&this.revealDisguise(!0),e.yaw=this.camYaw;const n=e.startAttack();Rt.whoosh();for(const i of n.hits)this.pendingHits.push({at:this.time+i,owner:"player",damage:n.damage,range:n.range*e.curScale,arc:n.arc})}resolvePlayerHit(t){const e=this.player;if(!e?.ch.alive)return;const n=e.ch,i=n.curScale,s=Math.sin(n.yaw),o=Math.cos(n.yaw);let a=!1;for(const l of[...this.bots]){if(!l.ch.alive||l.held)continue;const c=l.ch.pos.x-n.pos.x,h=l.ch.pos.z-n.pos.z,u=Math.hypot(c,h);if(u>t.range+.6||!Vn(l.ch,n))continue;const f=(c*s+h*o)/(u||1);if(u>1.2&&f<t.arc)continue;a=!0;const d=e.ambushUntil>he(),m=i>1.5;if(l.ch.frozen){this.killBot(l,{byPlayer:!0,cause:"shatter"});continue}if(d||m){this.killBot(l,{byPlayer:!0});continue}if(l.hp-=t.damage,l.ch.hitReaction(),this.fx.emit(l.ch.pos.x,1.4+l.ch.altitude,l.ch.pos.z,{count:8,color:16777215,speed:4,life:.3,size:1.2}),this.fx.addShake(.1+t.damage*.002),Rt.punch(),l.hp<=0)this.killBot(l,{byPlayer:!0});else{this.bam(l.ch.pos.x,1.5+l.ch.altitude,l.ch.pos.z,"hit");const _=(.6+t.damage*.012)/(u||1);l.ch.pos.x+=c*_,l.ch.pos.z+=h*_,Math.random()<.5&&(l.target="player",l.aggressive=!0)}}a&&this.fx.addShake(.12),e.ambushUntil&&(e.ambushUntil=0)}launchFireball(){const t=this.player,e=t.ch;t.fireballArmed=!1,Rt.fireball();const n=this._v1.set(Math.sin(e.yaw),0,Math.cos(e.yaw)).clone(),i=e.pos.clone().setY(1.4+e.feetY);this.projectiles=this.projectiles||[],this.projectiles.push({pos:i,dir:n,speed:26,life:2.2,r:0}),this.fx.addShake(.3)}updateProjectiles(t){if(this.projectiles)for(let e=this.projectiles.length-1;e>=0;e--){const n=this.projectiles[e];n.life-=t,n.pos.addScaledVector(n.dir,n.speed*t),this.fx.emit(n.pos.x,n.pos.y,n.pos.z,{count:6,color:16742972,speed:2.5,life:.45,size:2.6,gravity:2,jitter:.35}),this.fx.emit(n.pos.x,n.pos.y,n.pos.z,{count:2,color:16765286,speed:2,life:.3,size:2});const i=n.owner==="bot";if(i&&n.homing&&this.player?.ch.alive){const l=this.player.ch,c=this._v1.set(l.pos.x,l.feetY+1.1,l.pos.z).sub(n.pos).normalize();n.dir.lerp(c,Math.min(1,n.homing*t)).normalize()}const s=this.world.isBlocked(n.pos.x,n.pos.z,.5)&&this.world.buildingHeightAt(n.pos.x,n.pos.z)>n.pos.y;let o=!1;if(!i){for(const l of this.bots)if(l.ch.alive&&!l.held&&rr(l.ch,n.pos)<1.6){o=!0;break}}const a=i&&this.player?.ch.alive&&rr(this.player.ch,n.pos)<1.8;if(n.life<=0||s||o||a){Rt.explosion(),this.fx.addShake(.8),this.fx.emit(n.pos.x,n.pos.y,n.pos.z,{count:60,color:16742972,speed:14,life:.9,size:3,gravity:-2}),this.fx.emit(n.pos.x,n.pos.y,n.pos.z,{count:30,color:16765286,speed:10,life:.7,size:2.2}),this.fx.ring(n.pos.x,n.pos.z,{color:16742972,maxR:8,dur:.6}),this.bam(n.pos.x,n.pos.y+.5,n.pos.z,"boom",1.2);for(const l of[...this.bots])l.ch.alive&&l!==n.bot&&rr(l.ch,n.pos)<7.5&&this.killBot(l,i?{byBot:n.bot,cause:"fire"}:{byPlayer:!0,cause:"fire"});if(i&&this.player?.ch.alive){const l=rr(this.player.ch,n.pos);l<6&&this.damagePlayer(l<2.5?999:60,n.bot)}this.projectiles.splice(e,1)}}}powerDown(){if(this.state!=="playing"||!this.player?.ch.alive)return;const t=this.player,e=[t.powerMain];t.twoUntil>he()&&t.secondPower&&e.push(t.secondPower);for(const n of e)n.id==="telekinesis"?this.startTelekinesis(n):this.activatePower(n)}powerUp(){this.player&&this.player.tk&&this.player.tk.phase!=="thrown"&&this.releaseTelekinesis()}activatePower(t){const e=this.player,n=e.ch,i=he();if((e.cds[t.id]||0)>i)return;n.propMesh&&t.id!=="shapeshift"&&this.revealDisguise();const s=n.pos.x,o=n.pos.z,a=1.2+n.altitude;let l=!0;switch(n.cast(t.id),t.id){case"flight":{e.flying=!e.flying,e.flying&&(Rt.whoosh(),this.fx.ring(s,o,{color:9358335,maxR:4,dur:.5}),this.fx.emitDir(s,.5,o,this._v1.set(0,-1,0),{count:22,color:9358335,speed:6,life:.6,cone:.6}));break}case"speed":{e.speedUntil=i+3,Rt.whoosh(),this.fx.ring(s,o,{color:16770140,maxR:5,dur:.45});break}case"invisibility":{e.invisUntil=i+5,Rt.invis(),this.fx.emit(s,a,o,{count:24,color:12568542,speed:4,life:.6,size:1.6});for(const c of this.bots)c.target==="player"&&!(c.hunter&&this.director.phase==="strike")&&(c.target=null);break}case"pyro":{e.flameUntil=i+1.6,Rt.flame();break}case"cryo":{Rt.freeze(),this.fx.ring(s,o,{color:10351359,maxR:10,dur:.8}),this.fx.emit(s,.6,o,{count:70,color:10351359,speed:11,life:.9,size:1.8,gravity:-1,spread:1.2}),this.fx.addShake(.3);for(const c of this.bots)c.ch.alive&&!c.held&&c.ch.pos.distanceTo(n.pos)<10&&Math.abs(c.ch.altitude-n.altitude)<4&&(c.ch.freeze(4.5),c.ch.vel.set(0,0,0));break}case"teleport":{const c=n.yaw;let h=Math.sin(c),u=Math.cos(c),f=14,d=s,m=o;for(;f>=4;f-=2){const _=s+h*f,p=o+u*f;if(!this.world.isBlocked(_,p,.9)){d=_,m=p;break}}if(d===s&&m===o){l=!1;break}Rt.teleport(),this.fx.emit(s,a,o,{count:26,color:8257482,speed:6,life:.5,size:1.8}),n.pos.set(d,0,m),this.fx.emit(d,a,m,{count:26,color:8257482,speed:6,life:.5,size:1.8}),this.fx.ring(d,m,{color:8257482,maxR:4,dur:.45});break}case"xray":{e.xrayUntil=i+6,this.world.setXray(!0),this.collectibles.setXray(!0),Rt.xray(),this.ui.flash();break}case"shapeshift":{if(n.propMesh||e.flying||e.tk){l=!1;break}e.disguiseUntil=i+90,Rt.morph(),this.fx.emit(s,a,o,{count:30,color:16752098,speed:5,life:.7,size:1.8}),n.setOpacity(1);const c=ct.BLOCK+ct.ROAD,h=qt(this.world.themeAt(Math.round(s/c),Math.round(o/c))==="suburb"?["bin","mailbox","bush","hydrant","tree","bench"]:["bin","bench","hydrant","lamppost","car"]);n.disguiseAsProp(this.world.makePropMesh(h)),n.vel.set(0,0,0);for(const u of this.bots)u.target==="player"&&(u.target=null);break}case"duplication":{Rt.dupe();for(let c=0;c<2;c++){const h=new Eo(this.scene,{name:"YOU",power:e.powerMain,paletteSeed:n.paletteSeed});h.pos.set(s+N(-2,2),0,o+N(-2,2)),this.fx.emit(h.pos.x,1.2,h.pos.z,{count:20,color:16757373,speed:5,life:.6}),this.clones.push({ch:h,until:i+10,attackCd:0,target:null,repath:0})}this.fx.ring(s,o,{color:16757373,maxR:5,dur:.5});break}}l&&(e.cds[t.id]=i+t.cooldown)}startTelekinesis(t){const e=this.player,n=he();if(e.tk||(e.cds[t.id]||0)>n)return;const i=e.ch;i.propMesh&&this.revealDisguise();let s=null,o=null,a=null,l=ct.TK_RANGE;for(const h of this.bots){if(!h.ch.alive||h.held||h.ch.frozen)continue;const u=h.ch.pos.distanceTo(i.pos);u<l&&(o=h,l=u,s="bot")}for(const{l:h,d:u}of this.world.liftablesNear(i.pos,ct.TK_RANGE))u<l&&(a=h,o=null,l=u,s="prop");if(!s){this.fx.emit(i.pos.x,1.6,i.pos.z,{count:8,color:wn,speed:2,life:.4});return}e.tk={kind:s,bot:o,prop:a,phase:"lift",y:0,auraT:0},i.cast("telekinesis",!0),o&&(o.held=!0,o.ch.vel.set(0,0,0),o.ch.setHeld(!0)),a&&(a.busy=!0,a.baseRot=a.mesh.rotation.y),Rt.tk();const c=s==="bot"?o.ch.pos:a.mesh.position;this.fx.ring(c.x,c.z,{color:wn,maxR:3.5,dur:.5})}tkTargetPos(t){if(t.kind==="bot"){const n=t.bot.ch;return{x:n.pos.x,y:n.altitude,z:n.pos.z}}const e=t.prop.mesh.position;return{x:e.x,y:e.y,z:e.z}}tkSetPos(t,e,n,i){t.kind==="bot"?(t.bot.ch.pos.x=e,t.bot.ch.pos.z=i,t.bot.ch.altitude=n):t.prop.mesh.position.set(e,n,i)}updateTelekinesis(t){const e=this.player,n=e?.tk;if(!n)return;if(n.kind==="bot"&&!n.bot.ch.alive||n.kind==="prop"&&!n.prop.alive){e.tk=null,e.cds.telekinesis=he()+1.5;return}const i=e.ch,s=this.tkTargetPos(n);n.auraT+=t,this.fx.emit(s.x,s.y+1.2,s.z,{count:2,color:wn,speed:1.6,life:.45,size:1.5,gravity:2,jitter:.7}),n.auraT>.3&&(n.auraT=0,this.fx.ring(s.x,s.z,{color:wn,maxR:2.2,dur:.4})),n.kind==="bot"?n.bot.ch.yaw+=t*5:n.prop.mesh.rotation.y=n.prop.baseRot+(n.prop.mesh.rotation.y-n.prop.baseRot)+t*3;const o=3;if(n.phase==="lift"){const a=Math.min(o,s.y+t*6);this.tkSetPos(n,s.x,a,s.z),a>=o-.01&&(n.phase="pull")}else if(n.phase==="pull"){const a=i.pos.x-s.x,l=i.pos.z-s.z,c=Math.hypot(a,l),h=o+Math.sin(this.time*5)*.25;if(c>3.6){const u=ct.TK_PULL_SPEED*t;this.tkSetPos(n,s.x+a/c*u,h,s.z+l/c*u)}else{const u=this.camYaw;i.yaw=u;const f=new E(Math.sin(u)*ct.TK_THROW_SPEED,1.5,Math.cos(u)*ct.TK_THROW_SPEED);this.thrown.push({kind:n.kind,bot:n.bot,prop:n.prop,vel:f,mode:"throw",spin:N(3,7)}),e.cds.telekinesis=he()+this.playerMainPower().cooldown,e.tk=null,i.stopCast(),i.startAttack(),Rt.whoosh(),this.fx.addShake(.35),this.fx.emit(s.x,h+1,s.z,{count:20,color:wn,speed:6,life:.5,size:1.8})}}}releaseTelekinesis(){const t=this.player,e=t?.tk;e&&(this.thrown.push({kind:e.kind,bot:e.bot,prop:e.prop,vel:new E(0,0,0),mode:"drop",spin:0}),t.cds.telekinesis=he()+1.5,t.tk=null,t.ch.stopCast(),Rt.invis())}cancelTelekinesis(t=!1){const e=this.player;if(e?.tk)if(t){const n=e.tk;n.kind==="bot"&&n.bot.ch.alive&&(n.bot.held=!1,n.bot.ch.altitude=0,n.bot.ch.setHeld(!1)),n.kind==="prop"&&n.prop.alive&&(n.prop.busy=!1,n.prop.mesh.position.y=n.prop.baseY||0),e.tk=null,e.ch.stopCast()}else this.releaseTelekinesis()}updateThrown(t){for(let e=this.thrown.length-1;e>=0;e--){const n=this.thrown[e];if(!(n.kind==="bot"?n.bot.ch.alive:n.prop.alive)){this.thrown.splice(e,1);continue}const s=n.kind==="bot"?{x:n.bot.ch.pos.x,y:n.bot.ch.altitude,z:n.bot.ch.pos.z}:n.prop.mesh.position;n.vel.y-=26*t;const o=s.x+n.vel.x*t,a=s.y+n.vel.y*t,l=s.z+n.vel.z*t;if(n.kind==="bot"?(n.bot.ch.pos.x=o,n.bot.ch.pos.z=l,n.bot.ch.altitude=Math.max(0,a),n.bot.ch.yaw+=n.spin*t):(n.prop.mesh.position.set(o,Math.max(0,a),l),n.prop.mesh.rotation.x+=n.spin*t*.5),n.mode==="throw"){this.fx.emit(o,Math.max(.5,a)+1,l,{count:2,color:wn,speed:1.5,life:.35,size:1.4});for(const u of[...this.bots]){if(!u.ch.alive||u.held||n.kind==="bot"&&u===n.bot)continue;const f=Math.hypot(u.ch.pos.x-o,u.ch.pos.z-l),d=n.kind==="prop"?2.3:1.9;f<d&&Math.abs(u.ch.altitude-a)<3.2&&this.killBot(u,{byPlayer:!0,cause:"slam"})}}const c=this.world.isBlocked(o,l,.4)&&this.world.buildingHeightAt(o,l)>a,h=a<=.15;(c||h)&&(n.mode==="throw"?(this.fx.ring(o,l,{color:wn,maxR:4.5,dur:.5}),this.fx.addShake(.4),n.kind==="bot"?(n.bot.held=!1,this.killBot(n.bot,{byPlayer:!0,cause:"slam"})):(Rt.slam(),this.fx.emit(o,Math.max(.5,a),l,{count:30,color:10133672,speed:8,life:.7,size:1.8}),this.world.removeLiftable(n.prop))):n.kind==="bot"?(n.bot.held=!1,n.bot.ch.altitude=0,n.bot.ch.setHeld(!1),n.bot.repath=1.5,this.fx.emit(o,.6,l,{count:8,color:16777215,speed:3,life:.3,size:1.1})):(n.prop.mesh.position.y=this.world.groundHeightAt(o,l),n.prop.mesh.rotation.x=0,n.prop.busy=!1),this.thrown.splice(e,1))}}revealDisguise(t=!1){const e=this.player,n=e.ch;!n.propMesh&&!n.disguise||(e.disguiseUntil=0,n.undisguise(),this.fx.emit(n.pos.x,1.4,n.pos.z,{count:18,color:16752098,speed:5,life:.5}),Rt.morph(),t&&(e.ambushUntil=he()+1.2))}superheroLanding(){const t=this.player,e=t.ch;e.landing(),Rt.landing(),this.fx.addShake(1.1),this.ui.flash(),this.fx.ring(e.pos.x,e.pos.z,{color:16765286,maxR:9,dur:.7}),this.fx.ring(e.pos.x,e.pos.z,{color:16777215,maxR:5,dur:.5}),this.fx.emit(e.pos.x,.6,e.pos.z,{count:60,color:16765286,speed:12,life:.8,size:2.2}),this.bam(e.pos.x,1.6,e.pos.z,"boom",1.3);for(const n of[...this.bots])n.ch.alive&&n.ch.pos.distanceTo(e.pos)<ct.LANDING_RADIUS&&Vn(n.ch,e)&&this.killBot(n,{byPlayer:!0})}applyItem(t){const e=this.player,n=he();Rt.pickup();const i=`${t.def.emblem} ${t.def.name.toUpperCase()}`;if(this.ui.announce(i,{dur:1800}),t.kind==="pill")if(t.def.id==="absorb")e.absorbUntil=n+t.def.duration;else if(t.def.id==="twopower"){e.twoUntil=n+t.def.duration;const s=Xe.filter(o=>o.id!==e.powerMain.id);e.secondPower=qt(s),this.ui.announce(`TWO POWERS: ${e.secondPower.name.toUpperCase()}`,{dur:2200,icon:e.secondPower.id})}else t.def.id==="extraswitch"&&(e.switchesLeft++,this.ui.setSwitches(e.switchesLeft));else Rt.potion(),t.def.id==="enlarge"?(e.enlargeUntil=n+t.def.duration,e.ch.scaleTarget=2.3,Rt.grow(),this.fx.addShake(.4)):t.def.id==="fireball"?(e.fireballArmed=!0,this.ui.announce("☄ FIREBALL ARMED — ATTACK TO LAUNCH",{dur:2600})):t.def.id==="landing"&&(e.meteor={phase:"up",t:0,ringT:0},this.cancelTelekinesis(!0),this.ui.announce("SUPERHERO LANDING — STEER YOUR DROP",{dur:2200}),Rt.whoosh(),this.fx.ring(e.ch.pos.x,e.ch.pos.z,{color:16765286,maxR:4,dur:.4}),this.fx.emitDir(e.ch.pos.x,.5,e.ch.pos.z,this._v1.set(0,-1,0),{count:26,color:16765286,speed:7,life:.6,cone:.6}))}damagePlayer(t,e){const n=this.player;if(!n||!n.ch.alive||this.state!=="playing")return;const i=he();if(!(i<n.invulnUntil)&&(n.ch.hp-=t,n.ch.hitReaction(),Rt.hurt(),this.fx.addShake(.3),this.fx.emit(n.ch.pos.x,1.4+n.ch.altitude,n.ch.pos.z,{count:8,color:16733296,speed:4,life:.4}),n.ch.propMesh&&this.revealDisguise(),n.ch.hp>0&&this.bam(n.ch.pos.x,1.6+n.ch.altitude,n.ch.pos.z,"hurt"),n.ch.hp<=0)){if(e?.hunter&&this.director.phase==="strike"){this.bam(n.ch.pos.x,1.6+n.ch.altitude,n.ch.pos.z,"kill",1.4),this.playerDeath(e);return}n.ch.hp=1,i>n.adrenalineReady?(n.adrenalineReady=i+ct.ADRENALINE_COOLDOWN,n.invulnUntil=i+1.6,n.speedUntil=Math.max(n.speedUntil,i+1.6),this.slowmoUntil=performance.now()/1e3+.7,this.timescale=.35,this.ui.announce("ADRENALINE RUSH",{dur:1400}),this.ui.flash(),Rt.whoosh(),e&&(e.target=null,e.repath=4)):n.invulnUntil=i+.9}}hiddenSpotNear(t,e,n){for(let i=0;i<8;i++){const s=this.camYaw+Math.PI+N(-1.3,1.3),o=N(e,n),a=t.x-Math.sin(s)*o,l=t.z-Math.cos(s)*o;if(!this.world.isBlocked(a,l,.9))return{x:a,z:l}}return this.world.randomOpenPos(t,e,n)}assignHunters(t){if(!this.player)return;const e=this.player.ch.pos,n=Mg(this.player.powerMain.id),i=this.bots.filter(s=>s.ch.alive&&!s.hunter&&!s.held).map(s=>({b:s,d:s.ch.pos.distanceTo(e)-(s.power.id===n.id?12:0)})).filter(s=>s.d<70).sort((s,o)=>s.d-o.d);for(;this.hunters.length<t;){let s=i.shift()?.b;if(!s){const o=this.hiddenSpotNear(e,22,40);s=this.spawnBot({pos:o}),Math.random()<.6&&(s.power=n,s.ch.setPower(n))}s.hunter=!0,s.aggressive=!0,s.stalkCd=0,s.farT=0,s.target=null,this.hunters.push(s)}}beginStrike(){this.strikeT=0,this.hunterFireCd=1.5,this.assignHunters(ct.HUNTER_COUNT);for(const t of this.hunters)this.armHunter(t)}armHunter(t){t.hp=Math.max(t.hp,ct.HUNTER_HP),t.target="player",t.attackCd=Math.min(t.attackCd,.3),this.strikeT>ct.HUNTER_GIANT_AT&&(t.ch.scaleTarget=2)}relocateHunter(t,e){const n=this.player.ch.pos,i=e?this.world.randomOpenPos(n,3,6):this.hiddenSpotNear(n,14,22);e&&(this.fx.emit(t.ch.pos.x,1.2,t.ch.pos.z,{count:14,color:8257482,speed:5,life:.4}),Rt.teleport()),t.ch.pos.set(i.x,0,i.z),t.ch.altitude=this.player.ch.altitude>2?this.player.ch.altitude:0,e&&this.fx.emit(i.x,1.2,i.z,{count:14,color:8257482,speed:5,life:.4})}updateHunt(t){if(this.director.phase!=="strike"||!this.player?.ch.alive)return;this.strikeT+=t;const e=this.player,n=e.ch.pos;this.hunters=this.hunters.filter(s=>s.ch.alive);const i=ct.HUNTER_COUNT+(this.strikeT>ct.HUNTER_GIANT_AT?2:0);if(this.hunters.length<i&&(this.hunterRefill-=t,this.hunterRefill<=0)){this.hunterRefill=1.5;const s=this.hunters.length;this.assignHunters(Math.min(i,s+1));for(const o of this.hunters.slice(s))this.armHunter(o)}if(this.strikeT>ct.HUNTER_GIANT_AT)for(const s of this.hunters)s.ch.scaleTarget<2&&(s.ch.scaleTarget=2);if(this.strikeT>ct.HUNTER_FIREBALL_AT&&(this.hunterFireCd-=t,this.hunterFireCd<=0)){const s=this.hunters.find(o=>{const a=o.ch.pos.distanceTo(n);return a>4&&a<30&&!o.ch.attacking});s&&(this.hunterFireCd=N(2.2,3.5),this.botFireball(s))}}botFireball(t){const e=this.player,n=t.ch.pos.clone().setY(1.4+t.ch.feetY),s=e.ch.pos.clone().setY(1.2+e.ch.feetY).sub(n).normalize();t.ch.yaw=Math.atan2(s.x,s.z),t.ch.cast("pyro"),Rt.fireball(),this.projectiles=this.projectiles||[],this.projectiles.push({pos:n,dir:s,speed:22,life:2.4,r:0,owner:"bot",bot:t,homing:2.2})}clearHunters(){for(const t of this.bots)t.hunter&&(t.hunter=!1,t.hp=Math.min(t.hp,100),t.ch.scaleTarget=1,t.target=null);this.hunters=[],this.strikeT=0,this.hunterRefill=0}playerDeath(t){const e=this.player;this.cancelTelekinesis(!0),e.ch.alive=!1,e.ch.vel.set(0,0,0),e.ch.flying=!1,e.meteor=null,e.ch.dive=!1,e.ch.die(this.deathKindFor(e.ch,t?.ch,"attack")),this.state="dying",this.deathT=0,this.deathKiller=t,this.controls.setEnabled(!1),this.ui.closeSwitch(),this.timescale=.3,this.slowmoUntil=performance.now()/1e3+2,Rt.death(),this.fx.addShake(1.2),this.ui.flash();const n=e.ch.pos;this.fx.emit(n.x,1.4+e.ch.altitude,n.z,{count:50,color:t?t.power.color:16733296,speed:9,life:1.1,size:2}),this.fx.ring(n.x,n.z,{color:16719928,maxR:7,dur:.8}),this.world.setXray(!1),this.collectibles.setXray(!1)}finishRound(){const t=this.director.endRound();this.wallet+=t,this.saveWallet();const e=t>=this.director.bet,i=this.leaderboardRows().find(s=>s.me)?.rank??this.bots.length+1;e&&Rt.cashout(),this.ui.showResults({payout:t,mult:this.director.mult,kills:this.player.kills,tokens:this.player.tokens,place:i,killerName:this.deathKiller?.ch.name,killerPower:this.deathKiller?.power.name,win:e}),this.state="results"}backToMenu(){this.cancelTelekinesis(!0);for(const t of this.thrown)t.kind==="bot"&&t.bot.ch.alive&&(t.bot.held=!1,t.bot.ch.altitude=0,t.bot.ch.setHeld(!1)),t.kind==="prop"&&t.prop.alive&&(t.prop.busy=!1,t.prop.mesh.position.y=t.prop.baseY||0);this.thrown=[],this.pendingHits=[];for(const t of this.corpses)t.ch.dispose();this.corpses=[],this.player&&(this.player.ch.dispose(),this.player=null),this.clearHunters();for(const t of this.clones)t.ch.dispose();this.clones=[],this.state="menu",this.attractBot=null,this.attractTimer=0,this.ui.showMenu(this.wallet)}flightCeiling(t,e,n){const i=Math.hypot(e,n),s=i>.05?e/i:Math.sin(t.yaw),o=i>.05?n/i:Math.cos(t.yaw),a=-o,l=s;let c=0;const h=i>.05?[0,.25,.5,.75,1]:[0,.2];for(const u of h){const f=t.pos.x+s*u*ct.FLIGHT_LOOKAHEAD,d=t.pos.z+o*u*ct.FLIGHT_LOOKAHEAD;for(const m of[-.9,0,.9])c=Math.max(c,this.world.buildingHeightAt(f+a*m,d+l*m))}return c>0?c+ct.FLIGHT_CLEARANCE:0}updatePlayer(t,e){const n=this.player,i=n.ch;if(!i.alive)return;const s=he(),o=(n.speedUntil>s?2.4:1)*(n.enlargeUntil>s?1.2:1),a=n.meteor?1.6:n.flying?1.35:1,l=ct.PLAYER_SPEED*o*a,c=Math.sin(this.camYaw),h=Math.cos(this.camYaw),u=-e.moveX*h+e.moveZ*c,f=e.moveX*c+e.moveZ*h,d=Math.hypot(u,f)>.05;i.propMesh&&d&&this.revealDisguise(),i.vel.set(u*l,0,f*l),i.pos.x+=i.vel.x*t,i.pos.z+=i.vel.z*t;const m=e.moveZ<-.2&&Math.abs(e.moveX)<.5;if(i.backward=m&&d,d){let v=(m?this.camYaw:Math.atan2(u,f))-i.yaw;for(;v>Math.PI;)v-=Math.PI*2;for(;v<-Math.PI;)v+=Math.PI*2;i.yaw+=v*Math.min(1,t*10)}else if(e.turn){let x=this.camYaw-i.yaw;for(;x>Math.PI;)x-=Math.PI*2;for(;x<-Math.PI;)x+=Math.PI*2;i.yaw+=x*Math.min(1,t*6)}if(n.prevAlt=i.altitude,i.flying=n.flying&&n.powerMain.id==="flight"||i.flying&&i.altitude>.4,i.bank+=(e.turn*.9+e.look*6-i.bank)*Math.min(1,t*4),n.meteor){const x=n.meteor;x.t+=t,i.flying=!0,x.phase==="up"?(i.altitude=Math.min(ct.METEOR_APEX,i.altitude+t*ct.METEOR_APEX/ct.METEOR_UP_TIME),x.t>=ct.METEOR_UP_TIME&&(x.phase="hang",x.t=0)):x.phase==="hang"?(i.altitude=ct.METEOR_APEX+Math.sin(x.t*6)*.15,x.t>=ct.METEOR_HANG_TIME&&(x.phase="down",x.t=0,i.dive=!0,Rt.whoosh())):(i.altitude-=t*ct.METEOR_FALL_SPEED,this.fx.emit(i.pos.x,i.altitude+1,i.pos.z,{count:4,color:16765286,speed:2.5,life:.45,size:2.2,gravity:-1}),this.fx.emit(i.pos.x,i.altitude+1,i.pos.z,{count:2,color:16742972,speed:2,life:.4,size:1.8}),i.altitude<=0&&(i.altitude=0,i.dive=!1,n.meteor=null,this.superheroLanding())),n.meteor&&x.phase!=="up"&&(x.ringT-=t,x.ringT<=0&&(x.ringT=.22,this.fx.ring(i.pos.x,i.pos.z,{color:16765286,maxR:ct.LANDING_RADIUS,dur:.3})))}else if(n.flying&&n.powerMain.id==="flight"){const x=Math.max(ct.FLIGHT_DECK,this.flightCeiling(i,u,f));i.altitude<x?i.altitude=Math.min(x,i.altitude+t*ct.FLIGHT_CLIMB):i.altitude=Math.max(x,i.altitude-t*ct.FLIGHT_DESCEND),Math.random()<.6&&this.fx.emitDir(i.pos.x,i.altitude+.4,i.pos.z,this._v1.set(-u,0,-f),{count:1,color:9358335,speed:4,life:.4,size:1.4,cone:.3})}else i.altitude>0&&(i.altitude=Math.max(0,i.altitude-t*16),i.altitude===0&&n.prevAlt>3.5&&(this.fx.ring(i.pos.x,i.pos.z,{color:16777215,maxR:3,dur:.4}),this.fx.addShake(.3),Rt.punch()));if(this.world.resolve(i.pos,.6*i.curScale,i.altitude),n.speedUntil>s&&d&&this.fx.emitDir(i.pos.x,.9,i.pos.z,this._v1.set(-u,.05,-f),{count:2,color:16770140,speed:6,life:.35,size:1.5,cone:.15}),n.flameUntil>s){const x=this._v1.set(Math.sin(i.yaw),.05,Math.cos(i.yaw));this.fx.emitDir(i.pos.x+x.x,1.3+i.altitude,i.pos.z+x.z,x,{count:10,color:16742972,speed:15,life:.5,size:2.6,cone:.22,gravity:2}),this.fx.emitDir(i.pos.x+x.x,1.3+i.altitude,i.pos.z+x.z,x,{count:3,color:16765286,speed:13,life:.35,size:2,cone:.18});for(const v of[...this.bots]){if(!v.ch.alive||v.held)continue;const y=v.ch.pos.x-i.pos.x,C=v.ch.pos.z-i.pos.z,T=Math.hypot(y,C);T<8.5&&(y*x.x+C*x.z)/(T||1)>.72&&Vn(v.ch,i)&&this.killBot(v,{byPlayer:!0,cause:"fire"})}}i.setOpacity(n.invisUntil>s?.15:1),n.disguiseUntil>0&&n.disguiseUntil<s&&(i.disguise||i.propMesh)&&this.revealDisguise(),n.xrayUntil>0&&n.xrayUntil<s&&(n.xrayUntil=0,this.world.setXray(!1),this.collectibles.setXray(!1)),n.enlargeUntil>0&&n.enlargeUntil<s&&(n.enlargeUntil=0,i.scaleTarget=1),n.twoUntil>0&&n.twoUntil<s&&(n.twoUntil=0,n.secondPower=null),i.hp=Math.min(i.maxHp,i.hp+ct.HP_REGEN*t);const _=1.7*i.curScale,p=this.collectibles.collectTokens(i.pos.x,i.pos.z,_);if(p>0){n.tokens+=p;const x=this.director.addWinnings(p*this.director.bet*ct.TOKEN_VALUE);if(Rt.coin(),x>0){const v=this.project(this._v1.set(i.pos.x,1.5,i.pos.z));v&&this.ui.popup(v.x,v.y,"+"+Bi(x)),this.ui.setTotal(this.director.total,this.director.mult)}}const g=this.collectibles.collectItem(i.pos.x,i.pos.z,_+.4);if(g&&this.applyItem(g),i.curScale>1.5)for(const x of[...this.bots])x.ch.alive&&!x.held&&x.ch.curScale<1.5&&x.ch.pos.distanceTo(i.pos)<1.9*i.curScale&&Vn(x.ch,i)&&(this.killBot(x,{byPlayer:!0,cause:"squish"}),this.fx.addShake(.3));i.update(t,this.time),i.rootMoved&&this.world.resolve(i.pos,.6*i.curScale,i.altitude)}updateClones(t){const e=he();for(let n=this.clones.length-1;n>=0;n--){const i=this.clones[n];if(e>i.until){this.fx.emit(i.ch.pos.x,1.2,i.ch.pos.z,{count:16,color:16757373,speed:5,life:.5}),i.ch.dispose(),this.clones.splice(n,1);continue}if(i.repath-=t,i.attackCd-=t,i.repath<=0||!i.target?.ch.alive){i.repath=1;let s=null,o=26;for(const a of this.bots){if(!a.ch.alive||a.held)continue;const l=i.ch.pos.distanceTo(a.ch.pos);l<o&&(s=a,o=l)}i.target=s}if(i.target){const s=i.target.ch.pos.x-i.ch.pos.x,o=i.target.ch.pos.z-i.ch.pos.z,a=Math.hypot(s,o);if(a>1.8)i.ch.vel.set(s/a*8.5,0,o/a*8.5),i.ch.pos.x+=i.ch.vel.x*t,i.ch.pos.z+=i.ch.vel.z*t,i.ch.yaw=Math.atan2(s,o),this.world.resolve(i.ch.pos,.55,0);else if(i.attackCd<=0&&!i.ch.attacking){const l=i.ch.startAttack();i.attackCd=l.duration+.3;for(const c of l.hits)this.pendingHits.push({at:this.time+c,owner:"clone",clone:i,target:i.target,damage:l.damage*.8,range:l.range})}}else i.ch.vel.set(0,0,0);i.ch.update(t,this.time),i.ch.rootMoved&&this.world.resolve(i.ch.pos,.55,0)}}updateCameraPlay(t,e){const n=this.player,i=n.ch;this.camYaw-=e.look+e.turn*2.6*t,this.camPitch=fs(this.camPitch+e.pitch,.12,1.1),Number.isFinite(this.camYaw)||(this.camYaw=i.yaw+Math.PI),Number.isFinite(this.camPitch)||(this.camPitch=.42);const s=i.curScale,o=fs((i.altitude-.6)/2.5,0,1),a=Math.hypot(i.vel.x,i.vel.z),l=(8.5-2.9*o+Math.min(1.2,a*.06)*o)*(.75+s*.35),c=(3.2+Math.sin(this.camPitch)*6)*(.7+s*.3)*(1-.45*o),h=Math.sin(this.time*.8)*.45*o,u=Math.sin(this.time*1.25+1.3)*.3*o,f=i.pos.x-Math.sin(this.camYaw)*l+Math.cos(this.camYaw)*h,d=i.pos.z-Math.cos(this.camYaw)*l-Math.sin(this.camYaw)*h,m=i.altitude+c+u,_=i.pos.x,p=i.altitude+1.8*s,g=i.pos.z;let x=1;const v=10;for(let T=1;T<=v;T++){const R=T/v,I=_+(f-_)*R,w=p+(m-p)*R,S=g+(d-g)*R;if(this.world.buildingHeightAt(I,S)>w){x=Math.max(.18,(T-1)/v);break}}this._v2.set(_+(f-_)*x,p+(m-p)*x,g+(d-g)*x),or(this.camPos,this._v2,Math.min(1,t*7)),this.camera.position.copy(this.camPos).add(this.fx.shakeOffset),or(this.camTarget,this._v2.set(i.pos.x,i.altitude+(1.6-.5*o)*s,i.pos.z),Math.min(1,t*10)),this.camera.lookAt(this.camTarget),this.camRoll=(this.camRoll||0)+(-i.bank*.16*o-(this.camRoll||0))*Math.min(1,t*5),Number.isFinite(this.camRoll)&&this.camera.rotateZ(this.camRoll);const y=he(),C=this.baseFov+(n.speedUntil>y?14:0)+(o>0?4+Math.min(6,a*.5)*o:0);this.camera.fov+=(C-this.camera.fov)*Math.min(1,t*5),this.camera.updateProjectionMatrix()}updateCameraMenu(t){if(this.attractTimer-=t,this.attractTimer<=0||!this.attractBot?.ch.alive){this.attractTimer=N(7,11);const i=this.bots.filter(s=>s.ch.alive);this.attractBot=i.length?qt(i):null,this.attractAngle=N(0,Math.PI*2)}if(!this.attractBot)return;this.attractAngle+=t*.12;const e=this.attractBot.ch.pos,n=13;this._v2.set(e.x+Math.cos(this.attractAngle)*n,5.5+Math.sin(this.time*.3)*2+this.attractBot.ch.altitude,e.z+Math.sin(this.attractAngle)*n),or(this.camPos,this._v2,Math.min(1,t*1.2)),or(this.camTarget,this._v2.set(e.x,this.attractBot.ch.altitude+1.5,e.z),Math.min(1,t*2.5)),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camTarget),this.camera.fov+=(this.baseFov-this.camera.fov)*Math.min(1,t),this.camera.updateProjectionMatrix()}updateCameraDeath(t){this.deathT+=t;const n=this.player.ch.pos,i=this.camYaw+this.deathT*.7,s=7+this.deathT*2;this.camPos.lerp(this._v2.set(n.x-Math.sin(i)*s,3.5+this.deathT*1.5,n.z-Math.cos(i)*s),Math.min(1,t*4)),this.camera.position.copy(this.camPos).add(this.fx.shakeOffset),this.camera.lookAt(n.x,1,n.z)}leaderboardRows(){const t=this.bots.map(i=>({name:i.ch.name,score:i.score*this.director.bet*.02+i.score,me:!1}));this.player&&this.state!=="menu"&&t.push({name:"You",score:this.director.total,me:!0}),t.sort((i,s)=>s.score-i.score);const e=t.slice(0,6).map((i,s)=>({...i,rank:s+1})),n=t.findIndex(i=>i.me);return n>=6&&e.push({...t[n],rank:n+1}),e.length?e:[]}update(t){const e=Math.min(t,.05)*this.timescale;this.time+=e,this.timescale<1&&performance.now()/1e3>this.slowmoUntil&&this.state!=="dying"&&(this.timescale=Math.min(1,this.timescale+t*2)),this.world.update(this.focusPos,e);for(const i of[...this.bots])this.updateBot(i,e);for(let i=this.pendingRespawns.length-1;i>=0;i--)this.pendingRespawns[i]-=e,this.pendingRespawns[i]<=0&&(this.pendingRespawns.splice(i,1),this.bots.length<ct.BOT_COUNT+(this.director.phase==="strike"?2:0)&&this.spawnBot({}));if(Math.random()<e*2&&this.bots.length){const i=qt(this.bots);i.score+=N(.5,4)}this.collectibles.update(e,this.time),this.updateProjectiles(e),this.updateThrown(e),this.processHits(),this.updateCorpses(e),this.fx.update(e),this.bams.update(e);const n=this.controls.poll();if(this.state==="playing"){this.updatePlayer(e,n),this.updateTelekinesis(e),this.updateClones(e);const i=this.director.update(e);i==="stalk"?this.assignHunters(ct.HUNTER_COUNT):i==="strike"&&this.beginStrike(),this.updateHunt(e),this.updateCameraPlay(e,n);const s=this.player,o=he();this.ui.setHP(s.ch.hp/s.ch.maxHp);const a=s.powerMain,l=Math.max(0,(s.cds[a.id]||0)-o);if(this.ui.setPowerButton(a,l/a.cooldown),this.lbTimer-=e,this.lbTimer<=0){this.lbTimer=.5,this.ui.leaderboard(this.leaderboardRows());const c=[];s.absorbUntil>o&&c.push({emblem:"🧬",label:Math.ceil(s.absorbUntil-o)+"s"}),s.twoUntil>o&&s.secondPower&&c.push({icon:s.secondPower.id,label:Math.ceil(s.twoUntil-o)+"s"}),s.enlargeUntil>o&&c.push({emblem:"🦹",label:Math.ceil(s.enlargeUntil-o)+"s"}),s.fireballArmed&&c.push({emblem:"☄",label:"armed"}),s.invisUntil>o&&c.push({icon:"invisibility",label:Math.ceil(s.invisUntil-o)+"s"}),s.ch.propMesh&&c.push({icon:"shapeshift",label:"hidden"}),s.tk&&c.push({icon:"telekinesis",label:"hold"}),this.ui.setBuffs(c)}}else this.state==="menu"||this.state==="results"?this.updateCameraMenu(e):this.state==="dying"&&(this.updateCameraDeath(t),this.player.ch.update(e,this.time),this.deathT>3&&(this.timescale=1,this.finishRound()));this.renderer.render(this.scene,this.camera)}project(t){return this._v2.copy(t).project(this.camera),this._v2.z>1?null:{x:(this._v2.x*.5+.5)*this.canvas.clientWidth,y:(-this._v2.y*.5+.5)*this.canvas.clientHeight}}}const x_=document.getElementById("gl"),bc=document.getElementById("loading");async function v_(){try{await Promise.all([yg("./anims.json"),document.fonts?.load("96px Bangers").catch(()=>{})])}catch(s){throw bc.textContent="Failed to load animations: "+s.message,s}bc.classList.add("hidden");const r=new __(x_);window.__game=r;function t(){r.resize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",t),window.addEventListener("orientationchange",()=>setTimeout(t,250)),t();let e=performance.now(),n=0;function i(s){const o=(s-e)/1e3;e=s;try{r.update(o)}catch(a){n++<5&&console.error("frame error",a)}requestAnimationFrame(i)}requestAnimationFrame(i)}v_();"serviceWorker"in navigator&&location.protocol==="https:"&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
