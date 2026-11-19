(()=>{var r_=Object.defineProperty;var o_=(s,t,e)=>t in s?r_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Ot=(s,t,e)=>o_(s,typeof t!="symbol"?t+"":t,e);var Ud=0,eu=1,Od=2;var Jo=1,Fd=2,Kr=3,Os=0,Nn=1,Hi=2,or=0,Qr=1,$o=2,nu=3,iu=4,Bd=5;var ar=100,zd=101,kd=102,Vd=103,Gd=104,Hd=200,Wd=201,Xd=202,qd=203,su=204,ru=205,Yd=206,Zd=207,Jd=208,$d=209,Kd=210,Qd=211,jd=212,tp=213,ep=214,dl=0,pl=1,ml=2,Xr=3,gl=4,_l=5,xl=6,vl=7,ou=0,np=1,ip=2,Wi=0,au=1,lu=2,cu=3,hu=4,uu=5,fu=6,du=7;var pu=300,lr=301,jr=302,Yl=303,Zl=304,yl=1e3,zi=1001,Sl=1002,cn=1003,sp=1004;var Ko=1005;var Dn=1006,Jl=1007;var cs=1008;var ri=1009,mu=1010,gu=1011,to=1012,$l=1013,Pi=1014,Ii=1015,Li=1016,Kl=1017,Ql=1018,cr=1020,_u=35902,xu=35899,vu=1021,yu=1022,Di=1023,as=1026,hs=1027,Su=1028,jl=1029,Fs=1030,tc=1031;var ec=1033,Qo=33776,jo=33777,ta=33778,ea=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37488,hc=37489,na=37490,uc=37491,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,_c=37813,xc=37814,vc=37815,yc=37816,Sc=37817,Mc=37818,bc=37819,Tc=37820,wc=37821,Ec=36492,Ac=36494,Cc=36495,Rc=36283,Pc=36284,ia=36285,Ic=36286;var Io=2300,Ml=2301,ul=2302,Zh=2303,Jh=2400,$h=2401,Kh=2402;var rp=3200;var Mu=0,op=1,us="",ei="srgb",Lo="srgb-linear",Do="linear",xe="srgb";var fl=7680;var ap=519,lp=512,cp=513,hp=514,bu=515,up=516,fp=517,Tu=518,wu=519,dp=35044;var Eu="300 es",mi=2e3,No=2001;function a_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function l_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pp(){let s=Uo("canvas");return s.style.display="block",s}var fd={},qr=null;function Au(...s){let t="THREE."+s.shift();qr?qr("log",t,...s):console.log(t,...s)}function mp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function zt(...s){s=mp(s);let t="THREE."+s.shift();if(qr)qr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function kt(...s){s=mp(s);let t="THREE."+s.shift();if(qr)qr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Po(...s){let t=s.join(" ");t in fd||(fd[t]=!0,zt(...s))}function gp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _p={[dl]:dl,[ml]:xl,[gl]:gl,[Xr]:_l,[pl]:pl,[xl]:ml,[vl]:vl,[_l]:Xr},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ah=Math.PI/180,bl=180/Math.PI;function sa(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function c_(s,t){return(s%t+t)%t}function Ch(s,t,e){return(1-e)*s+e*t}function xp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function h_(s,t){if(t.constructor===Float32Array)return s;let e=Cu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function u_(s,t){if(t.constructor===Float32Array)return s;let e=Cu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Du=class Du{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Du.prototype.isVector2=!0;var pe=Du,Vi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);g=Math.sin(g*v)/T,a=Math.sin(a*v)/T,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nu=class Nu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rh.copy(this).projectOnVector(t),this.sub(Rh)}reflect(t){return this.sub(Rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nu.prototype.isVector3=!0;var J=Nu,Rh=new J,dd=new Vi,Uu=class Uu{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],T=i[4],y=i[7],w=i[2],E=i[5],_=i[8];return r[0]=o*x+a*v+l*w,r[3]=o*m+a*T+l*E,r[6]=o*g+a*y+l*_,r[1]=c*x+h*v+d*w,r[4]=c*m+h*T+d*E,r[7]=c*g+h*y+d*_,r[2]=u*x+f*v+p*w,r[5]=u*m+f*T+p*E,r[8]=u*g+f*y+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ph.makeScale(t,e)),this}rotate(t){return Po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ph.makeRotation(-t)),this}translate(t,e){return Po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ph.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Uu.prototype.isMatrix3=!0;var Ht=Uu,Ph=new Ht,pd=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function f_(){let s={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(i.r=Wr(i.r),i.g=Wr(i.g),i.b=Wr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?Do:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Lo]:{primaries:t,whitePoint:n,transfer:Do,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}var ie=f_();function os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ir,Tl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ir===void 0&&(Ir=Uo("canvas")),Ir.width=t.width,Ir.height=t.height;let i=Ir.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ir}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},d_=0,Yr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=sa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ih(i[o].image)):r.push(Ih(i[o]))}else r=Ih(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ih(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Tl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var p_=0,Lh=new J,Wn=class s extends ki{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=zi,i=zi,r=Dn,o=cs,a=Di,l=ri,c=s.DEFAULT_ANISOTROPY,h=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=sa(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yl:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yl:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=pu;Wn.DEFAULT_ANISOTROPY=1;var Ou=class Ou{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(f+1)/2,w=(g+1)/2,E=(h+u)/4,_=(d+x)/4,M=(p+m)/4;return T>y&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=E/n,r=_/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=M/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=_/r,i=M/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ou.prototype.isVector4=!0;var Ne=Ou,wl=class extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Wn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Yr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Oo=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ql=class ql{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ql().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Lr.setFromMatrixColumn(t,0).length(),r=1/Lr.setFromMatrixColumn(t,1).length(),o=1/Lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(m_,t,g_)}lookAt(t,e,n){let i=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Ts.crossVectors(n,jn),Ts.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Ts.crossVectors(n,jn)),Ts.normalize(),Ha.crossVectors(jn,Ts),i[0]=Ts.x,i[4]=Ha.x,i[8]=jn.x,i[1]=Ts.y,i[5]=Ha.y,i[9]=jn.y,i[2]=Ts.z,i[6]=Ha.z,i[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],T=n[7],y=n[11],w=n[15],E=i[0],_=i[4],M=i[8],P=i[12],R=i[1],D=i[5],N=i[9],H=i[13],I=i[2],V=i[6],W=i[10],B=i[14],tt=i[3],O=i[7],A=i[11],$=i[15];return r[0]=o*E+a*R+l*I+c*tt,r[4]=o*_+a*D+l*V+c*O,r[8]=o*M+a*N+l*W+c*A,r[12]=o*P+a*H+l*B+c*$,r[1]=h*E+d*R+u*I+f*tt,r[5]=h*_+d*D+u*V+f*O,r[9]=h*M+d*N+u*W+f*A,r[13]=h*P+d*H+u*B+f*$,r[2]=p*E+x*R+m*I+g*tt,r[6]=p*_+x*D+m*V+g*O,r[10]=p*M+x*N+m*W+g*A,r[14]=p*P+x*H+m*B+g*$,r[3]=v*E+T*R+y*I+w*tt,r[7]=v*_+T*D+y*V+w*O,r[11]=v*M+T*N+y*W+w*A,r[15]=v*P+T*H+y*B+w*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=l*f-c*u,T=a*f-c*d,y=a*u-l*d,w=o*f-c*h,E=o*u-l*h,_=o*d-a*h;return e*(x*v-m*T+g*y)-n*(p*v-m*w+g*E)+i*(p*T-x*w+g*_)-r*(p*y-x*E+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*a-n*o,T=e*l-i*o,y=e*c-r*o,w=n*l-i*a,E=n*c-r*a,_=i*c-r*l,M=h*x-d*p,P=h*m-u*p,R=h*g-f*p,D=d*m-u*x,N=d*g-f*x,H=u*g-f*m,I=v*H-T*N+y*D+w*R-E*P+_*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return t[0]=(a*H-l*N+c*D)*V,t[1]=(i*N-n*H-r*D)*V,t[2]=(x*_-m*E+g*w)*V,t[3]=(u*E-d*_-f*w)*V,t[4]=(l*R-o*H-c*P)*V,t[5]=(e*H-i*R+r*P)*V,t[6]=(m*y-p*_-g*T)*V,t[7]=(h*_-u*y+f*T)*V,t[8]=(o*N-a*R+c*M)*V,t[9]=(n*R-e*N-r*M)*V,t[10]=(p*E-x*y+g*v)*V,t[11]=(d*y-h*E-f*v)*V,t[12]=(a*P-o*D-l*M)*V,t[13]=(e*D-n*P+i*M)*V,t[14]=(x*T-p*w-m*v)*V,t[15]=(h*w-d*T+u*v)*V,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,v=l*c,T=l*h,y=l*d,w=n.x,E=n.y,_=n.z;return i[0]=(1-(x+g))*w,i[1]=(f+y)*w,i[2]=(p-T)*w,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+g))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(p+T)*_,i[9]=(m-v)*_,i[10]=(1-(u+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Lr.set(i[0],i[1],i[2]).length(),a=Lr.set(i[4],i[5],i[6]).length(),l=Lr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),wi.copy(this);let c=1/o,h=1/a,d=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,e.setFromRotationMatrix(wi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=mi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===mi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===No)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=mi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===mi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===No)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ql.prototype.isMatrix4=!0;var De=ql,Lr=new J,wi=new De,m_=new J(0,0,0),g_=new J(1,1,1),Ts=new J,Ha=new J,jn=new J,gd=new De,_d=new Vi,Ps=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _d.setFromEuler(this),this.setFromQuaternion(_d,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ps.DEFAULT_ORDER="XYZ";var Fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},__=0,xd=new J,Dr=new Vi,ts=new De,Wa=new J,Eo=new J,x_=new J,v_=new Vi,vd=new J(1,0,0),yd=new J(0,1,0),Sd=new J(0,0,1),Md={type:"added"},y_={type:"removed"},Nr={type:"childadded",child:null},Dh={type:"childremoved",child:null},ii=class s extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new J,e=new Ps,n=new Vi,i=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Ht}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(vd,t)}rotateY(t){return this.rotateOnAxis(yd,t)}rotateZ(t){return this.rotateOnAxis(Sd,t)}translateOnAxis(t,e){return xd.copy(t).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vd,t)}translateY(t){return this.translateOnAxis(yd,t)}translateZ(t){return this.translateOnAxis(Sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wa.copy(t):Wa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(Eo,Wa,this.up):ts.lookAt(Wa,Eo,this.up),this.quaternion.setFromRotationMatrix(ts),i&&(ts.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix(ts),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Md),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(y_),Dh.child=t,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ts.multiply(t.parent.matrixWorld)),t.applyMatrix4(ts),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Md),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,x_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,v_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ii.DEFAULT_UP=new J(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rs=class extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}},S_={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Nh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=c_(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Nh(o,r,t+1/3),this.g=Nh(o,r,t),this.b=Nh(o,r,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=ei){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ei){let n=vp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return ie.workingToColorSpace(Mn.copy(this),t),Math.round(re(Mn.r*255,0,255))*65536+Math.round(re(Mn.g*255,0,255))*256+Math.round(re(Mn.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Mn.copy(this),e);let n=Mn.r,i=Mn.g,r=Mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=ei){ie.workingToColorSpace(Mn.copy(this),t);let e=Mn.r,n=Mn.g,i=Mn.b;return t!==ei?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ws),this.setHSL(ws.h+t,ws.s+e,ws.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ws),t.getHSL(Xa);let n=Ch(ws.h,Xa.h,e),i=Ch(ws.s,Xa.s,e),r=Ch(ws.l,Xa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Qt;Qt.NAMES=vp;var Bo=class extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ps,this.environmentIntensity=1,this.environmentRotation=new Ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new J,es=new J,Uh=new J,ns=new J,Ur=new J,Or=new J,bd=new J,Oh=new J,Fh=new J,Bh=new J,zh=new Ne,kh=new Ne,Vh=new Ne,Rs=class s{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ei.subVectors(t,e),i.cross(Ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ei.subVectors(i,e),es.subVectors(n,e),Uh.subVectors(t,e);let o=Ei.dot(Ei),a=Ei.dot(es),l=Ei.dot(Uh),c=es.dot(es),h=es.dot(Uh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(o,ns.y),l.addScaledVector(a,ns.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return zh.setScalar(0),kh.setScalar(0),Vh.setScalar(0),zh.fromBufferAttribute(t,e),kh.fromBufferAttribute(t,n),Vh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(zh,r.x),o.addScaledVector(kh,r.y),o.addScaledVector(Vh,r.z),o}static isFrontFacing(t,e,n,i){return Ei.subVectors(n,e),es.subVectors(t,e),Ei.cross(es).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),es.subVectors(this.a,this.b),Ei.cross(es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ur.subVectors(i,n),Or.subVectors(r,n),Oh.subVectors(t,n);let l=Ur.dot(Oh),c=Or.dot(Oh);if(l<=0&&c<=0)return e.copy(n);Fh.subVectors(t,i);let h=Ur.dot(Fh),d=Or.dot(Fh);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Ur,o);Bh.subVectors(t,r);let f=Ur.dot(Bh),p=Or.dot(Bh);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Or,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return bd.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(bd,a);let g=1/(m+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(Ur,o).addScaledVector(Or,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Is=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ai):Ai.fromBufferAttribute(r,o),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(t.matrixWorld),this.union(qa)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),Ya.subVectors(this.max,Ao),Fr.subVectors(t.a,Ao),Br.subVectors(t.b,Ao),zr.subVectors(t.c,Ao),Es.subVectors(Br,Fr),As.subVectors(zr,Br),tr.subVectors(Fr,zr);let e=[0,-Es.z,Es.y,0,-As.z,As.y,0,-tr.z,tr.y,Es.z,0,-Es.x,As.z,0,-As.x,tr.z,0,-tr.x,-Es.y,Es.x,0,-As.y,As.x,0,-tr.y,tr.x,0];return!Gh(e,Fr,Br,zr,Ya)||(e=[1,0,0,0,1,0,0,0,1],!Gh(e,Fr,Br,zr,Ya))?!1:(Za.crossVectors(Es,As),e=[Za.x,Za.y,Za.z],Gh(e,Fr,Br,zr,Ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(is),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},is=[new J,new J,new J,new J,new J,new J,new J,new J],Ai=new J,qa=new Is,Fr=new J,Br=new J,zr=new J,Es=new J,As=new J,tr=new J,Ao=new J,Ya=new J,Za=new J,er=new J;function Gh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){er.fromArray(s,r);let a=i.x*Math.abs(er.x)+i.y*Math.abs(er.y)+i.z*Math.abs(er.z),l=t.dot(er),c=e.dot(er),h=n.dot(er);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $e=new J,Ja=new pe,M_=0,dn=class extends ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dp,this.updateRanges=[],this.gpuType=Ii,this.version=0,this._normalizationScale=t!==void 0?Cu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ja.fromBufferAttribute(this,e),Ja.applyMatrix3(t),this.setXY(e,Ja.x,Ja.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):h_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):u_(t,this.array)}};var zo=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ko=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var gi=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},b_=new Is,Co=new J,Hh=new J,sr=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):b_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);let e=Co.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Co,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(Hh)),this.expandByPoint(Co.copy(t.center).sub(Hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},T_=0,pi=new De,Wh=new ii,kr=new J,ti=new Is,Ro=new Is,ln=new J,Ri=class s extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(a_(t)?ko:zo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return Wh.lookAt(t),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(ti.min,Ro.min),ti.expandByPoint(ln),ln.addVectors(ti.max,Ro.max),ti.expandByPoint(ln)):(ti.expandByPoint(Ro.min),ti.expandByPoint(Ro.max))}ti.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ln.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ln));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ln.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(t,c),ln.add(kr)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new J,l[P]=new J;let h=new J,d=new J,u=new J,f=new pe,p=new pe,x=new pe,m=new J,g=new J;function v(P,R,D){c[P]=c[R]=c[D]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,D),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(N),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(N),a[P].add(m),a[R].add(m),a[D].add(m),l[P].add(g),l[R].add(g),l[D].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,R=T.length;P<R;++P){let D=T[P],N=D.start,H=D.count;for(let I=N,V=N+H;I<V;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new J,w=new J,E=new J,_=new J;function M(P){E.fromBufferAttribute(i,P),_.copy(E);let R=a[P];y.copy(R),y.sub(E.multiplyScalar(E.dot(R))).normalize(),w.crossVectors(_,R);let N=w.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,N)}for(let P=0,R=n.count;P<R;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new J,r=new J,o=new J,a=new J,l=new J,c=new J,h=new J,d=new J;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new dn(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Xh=new J,w_=new J,E_=new Ht,Ci=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Xh.subVectors(n,e).cross(w_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Xh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||E_.getNormalMatrix(t),i=this.coplanarPoint(Xh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},A_=0,Ls=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=Qr,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=ru,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fl,this.stencilZFail=fl,this.stencilZPass=fl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ss=new J,qh=new J,$a=new J,Ka=new J,Vo=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ss)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ss.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ss.copy(this.origin).addScaledVector(this.direction,e),ss.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qh.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),Ka.copy(this.origin).sub(qh);let r=t.distanceTo(e)*.5,o=-this.direction.dot($a),a=Ka.dot(this.direction),l=-Ka.dot($a),c=Ka.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qh).addScaledVector($a,u),f}intersectSphere(t,e){if(t.radius<0)return null;ss.subVectors(t.center,this.origin);let n=ss.dot(this.direction),i=ss.dot(ss)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ss)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,v=n.y-o.y,T=n.z-o.z,y=Math.abs(l),w=Math.abs(c),E=Math.abs(h),_,M,P,R,D,N,H,I,V,W,B,tt;if(y>=w&&y>=E?(P=l,N=d,V=p,tt=g,l>=0?(_=c,M=h,R=u,D=f,H=x,I=m,W=v,B=T):(_=h,M=c,R=f,D=u,H=m,I=x,W=T,B=v)):w>=E?(P=c,N=u,V=x,tt=v,c>=0?(_=h,M=l,R=f,D=d,H=m,I=p,W=T,B=g):(_=l,M=h,R=d,D=f,H=p,I=m,W=g,B=T)):(P=h,N=f,V=m,tt=T,h>=0?(_=l,M=c,R=d,D=u,H=p,I=x,W=g,B=v):(_=c,M=l,R=u,D=d,H=x,I=p,W=v,B=g)),P===0)return null;let O=_/P,A=M/P,$=1/P,ft=R-O*N,Ct=D-A*N,q=H-O*V,rt=I-A*V,_t=W-O*tt,yt=B-A*tt,ct=_t*rt-yt*q,Et=ft*yt-Ct*_t,le=q*Ct-rt*ft;if(i){if(ct<0||Et<0||le<0)return null}else if((ct<0||Et<0||le<0)&&(ct>0||Et>0||le>0))return null;let At=ct+Et+le;if(At===0)return null;let Wt=$*(ct*N+Et*V+le*tt);return(At>0?Wt<0:Wt>0)?null:this.at(Wt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Al=class extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ps,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Td=new De,nr=new Vo,Qa=new sr,wd=new J,ja=new J,tl=new J,el=new J,Yh=new J,nl=new J,Ed=new J,il=new J,Gi=class extends ii{constructor(t=new Ri,e=new Al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){nl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Yh.fromBufferAttribute(d,t),o?nl.addScaledVector(Yh,h):nl.addScaledVector(Yh.sub(e),h))}e.add(nl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),nr.copy(t.ray).recast(t.near),!(Qa.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Qa,wd)===null||nr.origin.distanceToSquared(wd)>(t.far-t.near)**2))&&(Td.copy(r).invert(),nr.copy(t.ray).applyMatrix4(Td),!(n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,nr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,w=T;y<w;y+=3){let E=a.getX(y),_=a.getX(y+1),M=a.getX(y+2);i=sl(this,g,t,n,c,h,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);i=sl(this,o,t,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,w=T;y<w;y+=3){let E=y,_=y+1,M=y+2;i=sl(this,g,t,n,c,h,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=m,T=m+1,y=m+2;i=sl(this,o,t,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function C_(s,t,e,n,i,r,o,a){let l;if(t.side===Nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Os,a),l===null)return null;il.copy(a),il.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(il);return c<e.near||c>e.far?null:{distance:c,point:il.clone(),object:s}}function sl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ja),s.getVertexPosition(l,tl),s.getVertexPosition(c,el);let h=C_(s,t,e,n,ja,tl,el,Ed);if(h){let d=new J;Rs.getBarycoord(Ed,ja,tl,el,d),i&&(h.uv=Rs.getInterpolatedAttribute(i,a,l,c,d,new pe)),r&&(h.uv1=Rs.getInterpolatedAttribute(r,a,l,c,d,new pe)),o&&(h.normal=Rs.getInterpolatedAttribute(o,a,l,c,d,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new J,materialIndex:0};Rs.getNormal(ja,tl,el,u.normal),h.face=u,h.barycoord=d}return h}var Cl=class extends Wn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=cn,h=cn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=new sr,R_=new pe(.5,.5),rl=new J,rr=class{constructor(t=new Ci,e=new Ci,n=new Ci,i=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],T=r[13],y=r[14],w=r[15];if(i[0].setComponents(c-o,f-h,g-p,w-v).normalize(),i[1].setComponents(c+o,f+h,g+p,w+v).normalize(),i[2].setComponents(c+a,f+d,g+x,w+T).normalize(),i[3].setComponents(c-a,f-d,g-x,w-T).normalize(),n)i[4].setComponents(l,u,m,y).normalize(),i[5].setComponents(c-l,f-u,g-m,w-y).normalize();else if(i[4].setComponents(c-l,f-u,g-m,w-y).normalize(),e===mi)i[5].setComponents(c+l,f+u,g+m,w+y).normalize();else if(e===No)i[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(t){ir.center.set(0,0,0);let e=R_.distanceTo(t.center);return ir.radius=.7071067811865476+e,ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(rl.x=i.normal.x>0?t.max.x:t.min.x,rl.y=i.normal.y>0?t.max.y:t.min.y,rl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(rl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ad=new De,Rl=class s{constructor(){this.coordinateSystem=mi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Ad.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new rr),n[i].setFromProjectionMatrix(Ad,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new rr),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Pl=class extends Ls{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cd=new De,Qh=new Vo,ol=new sr,al=new J,Go=class extends ii{constructor(t=new Ri,e=new Pl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(i),ol.radius+=r,t.ray.intersectsSphere(ol)===!1)return;Cd.copy(i).invert(),Qh.copy(t.ray).applyMatrix4(Cd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);al.fromBufferAttribute(d,m),Rd(al,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)al.fromBufferAttribute(d,p),Rd(al,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rd(s,t,e,n,i,r,o){let a=Qh.distanceSqToPoint(s);if(a<e){let l=new J;Qh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ho=class extends Wn{constructor(t=[],e=lr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ls=class extends Wn{constructor(t,e,n=Pi,i,r,o,a=cn,l=cn,c,h=as,d=1){if(h!==as&&h!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wo=class extends ls{constructor(t,e=Pi,n=lr,i,r,o=cn,a=cn,l,c=as){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xo=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Jr=class s extends Ri{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(h,3)),this.setAttribute("uv",new gi(d,2));function p(x,m,g,v,T,y,w,E,_,M,P){let R=y/_,D=w/M,N=y/2,H=w/2,I=E/2,V=_+1,W=M+1,B=0,tt=0,O=new J;for(let A=0;A<W;A++){let $=A*D-H;for(let ft=0;ft<V;ft++){let Ct=ft*R-N;O[x]=Ct*v,O[m]=$*T,O[g]=I,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[g]=E>0?1:-1,h.push(O.x,O.y,O.z),d.push(ft/_),d.push(1-A/M),B+=1}}for(let A=0;A<M;A++)for(let $=0;$<_;$++){let ft=u+$+V*A,Ct=u+$+V*(A+1),q=u+($+1)+V*(A+1),rt=u+($+1)+V*A;l.push(ft,Ct,rt),l.push(Ct,q,rt),tt+=6}a.addGroup(f,tt,P),f+=tt,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qo=class s extends Ri{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*u-o;for(let T=0;T<c;T++){let y=T*d-r;p.push(y,-v,0),x.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let T=v+c*g,y=v+c*(g+1),w=v+1+c*(g+1),E=v+1+c*g;f.push(T,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new gi(p,3)),this.setAttribute("normal",new gi(x,3)),this.setAttribute("uv",new gi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function hr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Pd(i))i.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Pd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function bn(s){let t={};for(let e=0;e<s.length;e++){let n=hr(s[e]);for(let i in n)t[i]=n[i]}return t}function Pd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function P_(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ru(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var yp={clone:hr,merge:bn},I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_i=class extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=L_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=P_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(i.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new J().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new De().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Il=class extends _i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ll=class extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dl=class extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ll(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ds=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nl=class extends Ds{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $h:r=t,a=2*e-n;break;case Kh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $h:o=t,l=2*n-e;break;case Kh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,T=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+v*o[c+w]+T*o[l+w]+y*o[d+w];return r}},Ul=class extends Ds{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ol=class extends Ds{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Fl=class extends Ds{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*u+p*2,v=d[g],T=d[g+1],y=t*u+p*2,w=h[y],E=h[y+1],_=N_(n,e,v,w,i);r[p]=Sp(_,x,T,E,m)}return r}};function Sp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function D_(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function N_(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Sp(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=D_(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var si=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),ll(t.settings)&&(n.settings={inTangents:Vr(t.settings.inTangents,Array),outTangents:Vr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Io:e=this.InterpolantFactoryMethodDiscrete;break;case Ml:e=this.InterpolantFactoryMethodLinear;break;case ul:e=this.InterpolantFactoryMethodSmooth;break;case Zh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return Ml;case this.InterpolantFactoryMethodSmooth:return ul;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;ll(this.settings)&&(Id(this.settings.inTangents,t),Id(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;ll(this.settings)&&(Ld(this.settings.inTangents,t),Ld(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&l_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ul,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,ll(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Id(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Ld(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Ml;var Ns=class extends si{constructor(t,e,n){super(t,e,n)}};Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Io;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends si{constructor(t,e,n,i){super(t,e,n,i)}};Bl.prototype.ValueTypeName="color";var zl=class extends si{constructor(t,e,n,i){super(t,e,n,i)}};zl.prototype.ValueTypeName="number";var kl=class extends Ds{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Vi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Yo=class extends si{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends si{constructor(t,e,n){super(t,e,n)}};Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Io;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends si{constructor(t,e,n,i){super(t,e,n,i)}};Vl.prototype.ValueTypeName="vector";var Gl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mp=new Gl,Hl=class{constructor(t){this.manager=t!==void 0?t:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var cl=new J,hl=new Vi,Bi=new J,Zo=class extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(cl,hl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,hl,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(cl,hl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,hl,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new J,Dd=new pe,Nd=new pe,Ln=class extends Zo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ah*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(Ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z)}getViewSize(t,e){return this.getViewBounds(t,Dd,Nd),e.subVectors(Nd,Dd)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ah*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Wl=class extends Zo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Gr=-90,Hr=1,$r=class extends ii{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ln(Gr,Hr,t,e);i.layers=this.layers,this.add(i);let r=new Ln(Gr,Hr,t,e);r.layers=this.layers,this.add(r);let o=new Ln(Gr,Hr,t,e);o.layers=this.layers,this.add(o);let a=new Ln(Gr,Hr,t,e);a.layers=this.layers,this.add(a);let l=new Ln(Gr,Hr,t,e);l.layers=this.layers,this.add(l);let c=new Ln(Gr,Hr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xl=class extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Pu="\\[\\]\\.:\\/",U_=new RegExp("["+Pu+"]","g"),Iu="[^"+Pu+"]",O_="[^"+Pu.replace("\\.","")+"]",F_=/((?:WC+[\/:])*)/.source.replace("WC",Iu),B_=/(WCOD+)?/.source.replace("WCOD",O_),z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),k_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),V_=new RegExp("^"+F_+B_+z_+k_+"$"),G_=["material","materials","bones","map"],jh=class{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(U_,"")}static parseTrackName(t){let e=V_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);G_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=jh;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $b=new Float32Array(1);var Fu=class Fu{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Fu.prototype.isMatrix2=!0;var tu=Fu;function Lu(s,t,e,n){let i=H_(n);switch(e){case vu:return s*t;case Su:return s*t/i.components*i.byteLength;case jl:return s*t/i.components*i.byteLength;case Fs:return s*t*2/i.components*i.byteLength;case tc:return s*t*2/i.components*i.byteLength;case yu:return s*t*3/i.components*i.byteLength;case Di:return s*t*4/i.components*i.byteLength;case ec:return s*t*4/i.components*i.byteLength;case Qo:case jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(s,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(s,8)*Math.max(t,8)/2;case oc:case ac:case cc:case hc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lc:case na:case uc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case _c:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case bc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ec:case Ac:case Cc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rc:case Pc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ia:case Ic:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function H_(s){switch(s){case ri:case mu:return{byteLength:1,components:1};case to:case gu:case Li:return{byteLength:2,components:1};case Kl:case Ql:return{byteLength:2,components:4};case Pi:case $l:case Ii:return{byteLength:4,components:1};case _u:case xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wp(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function X_(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y_=`#ifdef USE_ALPHAHASH
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
#endif`,Z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q_=`#ifdef USE_AOMAP
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
#endif`,j_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,e0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,g0=`vec3 transformedNormal = objectNormal;
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
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
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
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,F0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,H0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
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
#endif`,lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Px=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jx=`#define DISTANCE
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
}`,tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#define LAMBERT
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
}`,lv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,cv=`#define MATCAP
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
}`,hv=`#define MATCAP
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
}`,uv=`#define NORMAL
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
}`,fv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dv=`#define PHONG
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
}`,pv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,mv=`#define STANDARD
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
}`,gv=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,_v=`#define TOON
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
}`,xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,vv=`uniform float size;
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
}`,yv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,Mv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:q_,alphahash_pars_fragment:Y_,alphamap_fragment:Z_,alphamap_pars_fragment:J_,alphatest_fragment:$_,alphatest_pars_fragment:K_,aomap_fragment:Q_,aomap_pars_fragment:j_,batching_pars_vertex:t0,batching_vertex:e0,begin_vertex:n0,beginnormal_vertex:i0,bsdfs:s0,iridescence_fragment:r0,bumpmap_pars_fragment:o0,clipping_planes_fragment:a0,clipping_planes_pars_fragment:l0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:h0,color_fragment:u0,color_pars_fragment:f0,color_pars_vertex:d0,color_vertex:p0,common:m0,defaultnormal_vertex:g0,displacementmap_pars_vertex:_0,displacementmap_vertex:x0,emissivemap_fragment:v0,emissivemap_pars_fragment:y0,colorspace_fragment:S0,colorspace_pars_fragment:M0,envmap_fragment:b0,envmap_common_pars_fragment:T0,envmap_pars_fragment:w0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:F0,envmap_vertex:A0,fog_vertex:C0,fog_pars_vertex:R0,fog_fragment:P0,fog_pars_fragment:I0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:D0,lights_lambert_fragment:N0,lights_lambert_pars_fragment:U0,lights_pars_begin:O0,lights_toon_fragment:B0,lights_toon_pars_fragment:z0,lights_phong_fragment:k0,lights_phong_pars_fragment:V0,lights_physical_fragment:G0,lights_physical_pars_fragment:H0,lights_fragment_begin:W0,lights_fragment_maps:X0,lights_fragment_end:q0,lightprobes_pars_fragment:Y0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:K0,map_fragment:Q0,map_pars_fragment:j0,map_particle_fragment:tx,map_particle_pars_fragment:ex,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:sx,morphcolor_vertex:rx,morphnormal_vertex:ox,morphtarget_pars_vertex:ax,morphtarget_vertex:lx,normal_fragment_begin:cx,normal_fragment_maps:hx,normal_pars_fragment:ux,normal_pars_vertex:fx,normal_vertex:dx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:xx,opaque_fragment:vx,packing:yx,premultiplied_alpha_fragment:Sx,project_vertex:Mx,dithering_fragment:bx,dithering_pars_fragment:Tx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Ax,shadowmap_pars_vertex:Cx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Px,skinbase_vertex:Ix,skinning_pars_vertex:Lx,skinning_vertex:Dx,skinnormal_vertex:Nx,specularmap_fragment:Ux,specularmap_pars_fragment:Ox,tonemapping_fragment:Fx,tonemapping_pars_fragment:Bx,transmission_fragment:zx,transmission_pars_fragment:kx,uv_pars_fragment:Vx,uv_pars_vertex:Gx,uv_vertex:Hx,worldpos_vertex:Wx,background_vert:Xx,background_frag:qx,backgroundCube_vert:Yx,backgroundCube_frag:Zx,cube_vert:Jx,cube_frag:$x,depth_vert:Kx,depth_frag:Qx,distance_vert:jx,distance_frag:tv,equirect_vert:ev,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:sv,meshbasic_vert:rv,meshbasic_frag:ov,meshlambert_vert:av,meshlambert_frag:lv,meshmatcap_vert:cv,meshmatcap_frag:hv,meshnormal_vert:uv,meshnormal_frag:fv,meshphong_vert:dv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:_v,meshtoon_frag:xv,points_vert:vv,points_frag:yv,shadow_vert:Sv,shadow_frag:Mv,sprite_vert:bv,sprite_frag:Tv},bt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},qi={basic:{uniforms:bn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:bn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:bn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:bn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:bn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:bn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:bn([bt.points,bt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:bn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:bn([bt.common,bt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:bn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:bn([bt.sprite,bt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:bn([bt.common,bt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:bn([bt.lights,bt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};qi.physical={uniforms:bn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Lc={r:0,b:0,g:0},wv=new De,Xp=new Ht;Xp.set(-1,0,0,0,1,0,0,0,1);function Ev(s,t,e,n,i,r){let o=new Qt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=t.get(T,y)}return T}function p(v){let T=!1,y=f(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),T=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,T){let y=f(T);y&&y.isCubeTexture?(c===void 0&&(c=new Gi(new Jr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:hr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wv.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xp),c.material.toneMapped=ie.getTransfer(y.colorSpace)!==xe,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Gi(new qo(2,2),new _i({name:"BackgroundMaterial",uniforms:hr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ie.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(Lc,Ru(s)),e.buffers.color.setClear(Lc.r,Lc.g,Lc.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Av(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(D,N,H,I,V){let W=!1,B=d(D,I,H,N);r!==B&&(r=B,c(r.object)),W=f(D,I,H,V),W&&p(D,I,H,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(D,N,H,I),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,N,H,I){let V=I.wireframe===!0,W=n[N.id];W===void 0&&(W={},n[N.id]=W);let B=D.isInstancedMesh===!0?D.id:0,tt=W[B];tt===void 0&&(tt={},W[B]=tt);let O=tt[H.id];O===void 0&&(O={},tt[H.id]=O);let A=O[V];return A===void 0&&(A=u(l()),O[V]=A),A}function u(D){let N=[],H=[],I=[];for(let V=0;V<e;V++)N[V]=0,H[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,N,H,I){let V=r.attributes,W=N.attributes,B=0,tt=H.getAttributes();for(let O in tt)if(tt[O].location>=0){let $=V[O],ft=W[O];if(ft===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),$===void 0||$.attribute!==ft||ft&&$.data!==ft.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function p(D,N,H,I){let V={},W=N.attributes,B=0,tt=H.getAttributes();for(let O in tt)if(tt[O].location>=0){let $=W[O];$===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let ft={};ft.attribute=$,$&&$.data&&(ft.data=$.data),V[O]=ft,B++}r.attributes=V,r.attributesNum=B,r.index=I}function x(){let D=r.newAttributes;for(let N=0,H=D.length;N<H;N++)D[N]=0}function m(D){g(D,0)}function g(D,N){let H=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;H[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),V[D]!==N&&(s.vertexAttribDivisor(D,N),V[D]=N)}function v(){let D=r.newAttributes,N=r.enabledAttributes;for(let H=0,I=N.length;H<I;H++)N[H]!==D[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function T(D,N,H,I,V,W,B){B===!0?s.vertexAttribIPointer(D,N,H,V,W):s.vertexAttribPointer(D,N,H,I,V,W)}function y(D,N,H,I){x();let V=I.attributes,W=H.getAttributes(),B=N.defaultAttributeValues;for(let tt in W){let O=W[tt];if(O.location>=0){let A=V[tt];if(A===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(A=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(A=D.instanceColor)),A!==void 0){let $=A.normalized,ft=A.itemSize,Ct=t.get(A);if(Ct===void 0)continue;let q=Ct.buffer,rt=Ct.type,_t=Ct.bytesPerElement,yt=rt===s.INT||rt===s.UNSIGNED_INT||A.gpuType===$l;if(A.isInterleavedBufferAttribute){let ct=A.data,Et=ct.isInterleavedBuffer===!0?ct.stride:ct.itemSize,le=A.offset;if(ct.isInstancedInterleavedBuffer||ct.isInstancedBufferAttribute){for(let At=0;At<O.locationSize;At++)g(O.location+At,ct.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let At=0;At<O.locationSize;At++)m(O.location+At);s.bindBuffer(s.ARRAY_BUFFER,q);for(let At=0;At<O.locationSize;At++)T(O.location+At,ft/O.locationSize,rt,$,Et*_t,(le+ft/O.locationSize*At)*_t,yt)}else{if(A.isInstancedBufferAttribute){for(let ct=0;ct<O.locationSize;ct++)g(O.location+ct,A.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let ct=0;ct<O.locationSize;ct++)m(O.location+ct);s.bindBuffer(s.ARRAY_BUFFER,q);for(let ct=0;ct<O.locationSize;ct++)T(O.location+ct,ft/O.locationSize,rt,$,ft*_t,ft/O.locationSize*ct*_t,yt)}}else if(B!==void 0){let $=B[tt];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(O.location,$);break;case 3:s.vertexAttrib3fv(O.location,$);break;case 4:s.vertexAttrib4fv(O.location,$);break;default:s.vertexAttrib1fv(O.location,$)}}}}v()}function w(){P();for(let D in n){let N=n[D];for(let H in N){let I=N[H];for(let V in I){let W=I[V];for(let B in W)h(W[B].object),delete W[B];delete I[V]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let H in N){let I=N[H];for(let V in I){let W=I[V];for(let B in W)h(W[B].object),delete W[B];delete I[V]}}delete n[D.id]}function _(D){for(let N in n){let H=n[N];for(let I in H){let V=H[I];if(V[D.id]===void 0)continue;let W=V[D.id];for(let B in W)h(W[B].object),delete W[B];delete V[D.id]}}}function M(D){for(let N in n){let H=n[N],I=D.isInstancedMesh===!0?D.id:0,V=H[I];if(V!==void 0){for(let W in V){let B=V[W];for(let tt in B)h(B[tt].object),delete B[tt];delete V[W]}delete H[I],Object.keys(H).length===0&&delete n[N]}}}function P(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Cv(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Rv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Di&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==ri&&_!==Ii&&!M&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:E}}function Pv(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ci,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,T=v*4,y=g.clippingState||null;l.value=y,y=h(p,u,T,f);for(let w=0;w!==T;++w)y[w]=e[w];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,y=f;T!==x;++T,y+=4)o.copy(d[T]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var aa=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ho(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jr(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:or});r.uniforms.tEquirect.value=e;let o=new Gi(i,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=Dn),new $r(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},bp=256,Iv=3,Lv=20,qp=256,Yp=16,Dv=3,Nv=new J,Uv=new Qt,Nc=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $r(1,10,null),this._boxMesh=new Gi(new Jr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Nv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Uv));let m=new $r(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(bp,xp(t))}_fromTexture(t,e){t.mapping===lr||t.mapping===jr?this._setSize(t.image.length===0?bp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Tp(t,!1,!1),n=Math.log2(t)-Iv;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Tp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===lr||t.mapping===jr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ov(),this._integrationMaterial=Fv());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Yp);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Dv)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(qp*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Bv());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Tp(s,t,e){return new aa(s,{minFilter:cs,generateMipmaps:t,type:Li,colorSpace:Lo,depthBuffer:e})}function la(s,t,e){return new _i({name:s,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:Nn,blending:or,depthTest:!1,depthWrite:!1})}function Ov(){return la("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fv(){return la("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Bv(){return la("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Lv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function wp(){return la("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ep(){return la("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zv(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Yl||f===Zl)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new aa(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Yl||f===Zl,x=f===lr||f===jr;if(p||x){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Nc(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Nc(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Yl?u.mapping=lr:f===Zl&&(u.mapping=jr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function kv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Po("WebGLRenderer: "+n+" extension not supported."),i}}}function Vv(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,T=m.count>=65535?ko:zo,y=new T(Math.ceil(v/3)*6,1),w=y.array;if(x!==null){let _=x.array;g=x.version;for(let M=0,P=0;M<v;M+=3){let R=_[M+0],D=_[M+1],N=_[M+2];w[P++]=R,w[P++]=D,w[P++]=D,w[P++]=N,w[P++]=N,w[P++]=R}}else{g=m.version;for(let _=0,M=0;_<v;_+=3){let P=_+0,R=_+1,D=_+2;w[M++]=P,w[M++]=R,w[M++]=R,w[M++]=D,w[M++]=D,w[M++]=P}}y.version=g;let E=r.get(p);E&&t.remove(E),r.set(p,y)}function u(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Gv(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Hv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wv(s,t,e){let n=new WeakMap,i=new Ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let y=a.attributes.position.count*T,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*w*4*d),_=new Oo(E,y,w,d);_.type=Ii,_.needsUpdate=!0;let M=T*4;for(let R=0;R<d;R++){let D=m[R],N=g[R],H=v[R],I=y*w*4*R;for(let V=0;V<D.count;V++){let W=V*M;f===!0&&(i.fromBufferAttribute(D,V),E[I+W+0]=i.x,E[I+W+1]=i.y,E[I+W+2]=i.z,E[I+W+3]=0),p===!0&&(i.fromBufferAttribute(N,V),E[I+W+4]=i.x,E[I+W+5]=i.y,E[I+W+6]=i.z,E[I+W+7]=0),x===!0&&(i.fromBufferAttribute(H,V),E[I+W+8]=i.x,E[I+W+9]=i.y,E[I+W+10]=i.z,E[I+W+11]=H.itemSize===4?i.w:1)}}u={count:d,texture:_,size:new pe(y,w)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Xv(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var qv={[au]:"LINEAR_TONE_MAPPING",[lu]:"REINHARD_TONE_MAPPING",[cu]:"CINEON_TONE_MAPPING",[hu]:"ACES_FILMIC_TONE_MAPPING",[fu]:"AGX_TONE_MAPPING",[du]:"NEUTRAL_TONE_MAPPING",[uu]:"CUSTOM_TONE_MAPPING"};function Yv(s,t,e,n,i,r){let o=new ni(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ri;h.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gi([0,2,0,0,2,0],2));let d=new Il({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Gi(h,d),f=new Wl(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,T=[],y=!1;this.setSize=function(w,E){o.setSize(w,E),a!==null&&a.setSize(w,E),l!==null&&l.setSize(w,E);for(let _=0;_<T.length;_++){let M=T[_];M.setSize&&M.setSize(w,E)}},this.setEffects=function(w){T=w,y=T.length>0&&T[0].isRenderPass===!0;let E=o.width,_=o.height;T.length>0&&a===null&&(a=new ni(E,_,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new ni(E,_,{type:Li,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&T.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new ls(E,_),r===!0&&(c.format=hs,c.type=cr)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<T.length;P++){let R=T[P];R.setSize&&R.setSize(E,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,E){if(m||w.toneMapping===Wi&&T.length===0)return!1;if(v=E,E!==null){let _=E.width,M=E.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return y===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=Wi,!0},this.hasRenderPass=function(){return y},this.end=function(w,E){w.toneMapping=g,m=!0;let _=o,M=a;for(let P=0;P<T.length;P++){let R=T[P];R.enabled!==!1&&(R.render(w,M,_,E),R.needsSwap!==!1&&(_=M,M=M===a?l:a))}if(p!==w.outputColorSpace||x!==w.toneMapping){p=w.outputColorSpace,x=w.toneMapping,d.defines={},ie.getTransfer(p)===xe&&(d.defines.SRGB_TRANSFER="");let P=qv[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(v),w.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Zp=new Wn,Jp=new ls(1,1),$p=new Wo(1),Kp=new Oo,Qp=new El,jp=new Ho,Ap=[],Cp=[],Rp=new Float32Array(16),Pp=new Float32Array(9),Ip=new Float32Array(4);function no(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Ap[i];if(r===void 0&&(r=new Float32Array(i),Ap[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function nn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function sn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Oc(s,t){let e=Cp[t];e===void 0&&(e=new Int32Array(t),Cp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Zv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2fv(this.addr,t),sn(e,t)}}function $v(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;s.uniform3fv(this.addr,t),sn(e,t)}}function Kv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4fv(this.addr,t),sn(e,t)}}function Qv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Ip.set(n),s.uniformMatrix2fv(this.addr,!1,Ip),sn(e,n)}}function jv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Pp.set(n),s.uniformMatrix3fv(this.addr,!1,Pp),sn(e,n)}}function ty(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Rp.set(n),s.uniformMatrix4fv(this.addr,!1,Rp),sn(e,n)}}function ey(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2iv(this.addr,t),sn(e,t)}}function iy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;s.uniform3iv(this.addr,t),sn(e,t)}}function sy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4iv(this.addr,t),sn(e,t)}}function ry(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function oy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2uiv(this.addr,t),sn(e,t)}}function ay(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;s.uniform3uiv(this.addr,t),sn(e,t)}}function ly(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4uiv(this.addr,t),sn(e,t)}}function Fc(s){return s.version===0&&(s.compareFunction=wu,s.needsUpdate=!0),s}function cy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Fc(Jp):r=Zp,e.setTexture2D(t||r,i)}function hy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qp,i)}function uy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Fc($p):r=jp,e.setTextureCube(t||r,i)}function fy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Kp,i)}function dy(s){switch(s){case 5126:return Zv;case 35664:return Jv;case 35665:return $v;case 35666:return Kv;case 35674:return Qv;case 35675:return jv;case 35676:return ty;case 5124:case 35670:return ey;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return oy;case 36295:return ay;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return fy}}function py(s,t){s.uniform1fv(this.addr,t)}function my(s,t){let e=no(t,this.size,2);s.uniform2fv(this.addr,e)}function gy(s,t){let e=no(t,this.size,3);s.uniform3fv(this.addr,e)}function _y(s,t){let e=no(t,this.size,4);s.uniform4fv(this.addr,e)}function xy(s,t){let e=no(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function vy(s,t){let e=no(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function yy(s,t){let e=no(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sy(s,t){s.uniform1iv(this.addr,t)}function My(s,t){s.uniform2iv(this.addr,t)}function by(s,t){s.uniform3iv(this.addr,t)}function Ty(s,t){s.uniform4iv(this.addr,t)}function wy(s,t){s.uniform1uiv(this.addr,t)}function Ey(s,t){s.uniform2uiv(this.addr,t)}function Ay(s,t){s.uniform3uiv(this.addr,t)}function Cy(s,t){s.uniform4uiv(this.addr,t)}function Ry(s,t,e){let n=this.cache,i=t.length,r=Oc(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Fc(Jp):o=Zp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Py(s,t,e){let n=this.cache,i=t.length,r=Oc(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qp,r[o])}function Iy(s,t,e){let n=this.cache,i=t.length,r=Oc(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Fc($p):o=jp;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Ly(s,t,e){let n=this.cache,i=t.length,r=Oc(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Kp,r[o])}function Dy(s){switch(s){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return xy;case 35675:return vy;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return My;case 35668:case 35672:return by;case 35669:case 35673:return Ty;case 5125:return wy;case 36294:return Ey;case 36295:return Ay;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ly}}var ku=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dy(e.type)}},Vu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dy(e.type)}},Gu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Bu=/(\w+)(\])?(\[|\.)?/g;function Lp(s,t){s.seq.push(t),s.map[t.id]=t}function Ny(s,t,e){let n=s.name,i=n.length;for(Bu.lastIndex=0;;){let r=Bu.exec(n),o=Bu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lp(e,c===void 0?new ku(a,s,t):new Vu(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Gu(a),Lp(e,d)),e=d}}}var eo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ny(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Dp(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Uy=37297,Oy=0;function Fy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Np=new Ht;function By(s){ie._getMatrix(Np,ie.workingColorSpace,s);let t=`mat3( ${Np.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case Do:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Up(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Fy(s.getShaderSource(t),a)}else return r}function zy(s,t){let e=By(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ky={[au]:"Linear",[lu]:"Reinhard",[cu]:"Cineon",[hu]:"ACESFilmic",[fu]:"AgX",[du]:"Neutral",[uu]:"Custom"};function Vy(s,t){let e=ky[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dc=new J;function Gy(){ie.getLuminanceCoefficients(Dc);let s=Dc.x.toFixed(4),t=Dc.y.toFixed(4),e=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function Wy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xy(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function oa(s){return s!==""}function Op(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Fp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(s){return s.replace(qy,Yy)}function Yy(s,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Hu(e)}var Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(s){return s.replace(Zy,Jy)}function Jy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zp(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var $y={[Jo]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function Ky(s){return $y[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qy={[jr]:"ENVMAP_MODE_REFRACTION"};function jy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Qy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tS={[ou]:"ENVMAP_BLENDING_MULTIPLY",[np]:"ENVMAP_BLENDING_MIX",[ip]:"ENVMAP_BLENDING_ADD"};function eS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":tS[s.combine]||"ENVMAP_BLENDING_NONE"}function nS(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ky(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=jy(e),d=eS(e),u=Hy(e),f=Wy(r),p=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(oa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(oa).join(`
`),m.length>0&&(m+=`
`)):(x=[zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),m=[zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Wi?Vy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,zy("linearToOutputTexel",e.outputColorSpace),Gy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),o=Hu(o),o=Op(o,e),o=Fp(o,e),a=Hu(a),a=Op(a,e),a=Fp(a,e),o=Bp(o),a=Bp(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+o,T=g+m+a,y=Dp(i,i.VERTEX_SHADER,v),w=Dp(i,i.FRAGMENT_SHADER,T);i.attachShader(p,y),i.attachShader(p,w),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(R){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",N=i.getShaderInfoLog(y)||"",H=i.getShaderInfoLog(w)||"",I=D.trim(),V=N.trim(),W=H.trim(),B=!0,tt=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,w);else{let O=Up(i,y,"vertex"),A=Up(i,w,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+O+`
`+A)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(V===""||W==="")&&(tt=!1);tt&&(R.diagnostics={runnable:B,programLog:I,vertexShader:{log:V,prefix:x},fragmentShader:{log:W,prefix:m}})}i.deleteShader(y),i.deleteShader(w),_=new eo(i,p),M=Xy(i,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,Uy)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Oy++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=w,this}var iS=0,Wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xu(t),e.set(t,n)),n}},Xu=class{constructor(t){this.id=iS++,this.code=t,this.usedTimes=0}};function sS(s){return s===Fs||s===na||s===ia}function rS(s,t,e,n,i,r){let o=new Fo,a=new Wu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,P,R,D,N){let H=R.fog,I=D.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=t.get(_.envMap||V,W),tt=u[_.type],O=n.precision;_.precision!==null&&(O=n.getMaxPrecision(_.precision),O!==_.precision&&zt("WebGLProgram.getParameters:",_.precision,"not supported, using",O,"instead."));let A=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,$=A!==void 0?A.length:0,ft=0;I.morphAttributes.position!==void 0&&(ft=1),I.morphAttributes.normal!==void 0&&(ft=2),I.morphAttributes.color!==void 0&&(ft=3);let Ct,q,rt,_t;if(tt){let nt=qi[tt];Ct=nt.vertexShader,q=nt.fragmentShader}else{Ct=_.vertexShader,q=_.fragmentShader;let nt=a.getVertexShaderStage(_),Tt=a.getFragmentShaderStage(_);a.update(_,nt,Tt),rt=nt.id,_t=Tt.id}let yt=s.getRenderTarget(),ct=s.state.buffers.depth.getReversed(),Et=D.isInstancedMesh===!0,le=D.isBatchedMesh===!0,At=!!_.map,Wt=!!_.matcap,Dt=!!B,Ft=Dt&&B.isPMREMTexture===!0,fe=!!_.aoMap,ce=!!_.lightMap,Z=!!_.bumpMap&&_.wireframe===!1,jt=!!_.normalMap,qe=!!_.displacementMap,Me=!!_.emissiveMap,se=!!_.metalnessMap,Be=!!_.roughnessMap,We=_.anisotropy>0,F=_.clearcoat>0,me=_.diffuseRoughness>0,he=_.dispersion>0,Gt=_.retroreflectivity>0,dt=_.iridescence>0,de=_.sheen>0,Nt=_.transmission>0,Bt=We&&!!_.anisotropyMap,C=F&&!!_.clearcoatMap,S=F&&!!_.clearcoatNormalMap,k=F&&!!_.clearcoatRoughnessMap,ot=me&&!!_.diffuseRoughnessMap,it=dt&&!!_.iridescenceMap,ut=dt&&!!_.iridescenceThicknessMap,xt=de&&!!_.sheenColorMap,G=de&&!!_.sheenRoughnessMap,j=!!_.specularMap,ht=!!_.specularColorMap,L=!!_.specularIntensityMap,Q=Nt&&!!_.transmissionMap,K=Nt&&!!_.thicknessMap,pt=!!_.gradientMap,lt=!!_.alphaMap,mt=_.alphaTest>0,at=!!_.alphaHash,gt=!!_.extensions,st=Wi;_.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(st=s.toneMapping);let et=Ft?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,vt={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:Ct,fragmentShader:q,defines:_.defines,customVertexShaderID:rt,customFragmentShaderID:_t,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:O,batching:le,batchingColor:le&&D._colorsTexture!==null,instancing:Et,instancingColor:Et&&D.instanceColor!==null,instancingMorph:Et&&D.morphTexture!==null,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:At,matcap:Wt,envMap:Dt,envMapMode:Dt&&B.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?et.length-1:null,envMapSize:Ft?et[0].width:null,aoMap:fe,lightMap:ce,bumpMap:Z,normalMap:jt,displacementMap:qe,emissiveMap:Me,normalMapObjectSpace:jt&&_.normalMapType===op,normalMapTangentSpace:jt&&_.normalMapType===Mu,packedNormalMap:jt&&_.normalMapType===Mu&&sS(_.normalMap.format),metalnessMap:se,roughnessMap:Be,anisotropy:We,anisotropyMap:Bt,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:k,diffuseRoughness:me,diffuseRoughnessMap:ot,dispersion:he,retroreflection:Gt,iridescence:dt,iridescenceMap:it,iridescenceThicknessMap:ut,sheen:de,sheenColorMap:xt,sheenRoughnessMap:G,specularMap:j,specularColorMap:ht,specularIntensityMap:L,transmission:Nt,transmissionMap:Q,thicknessMap:K,gradientMap:pt,opaque:_.transparent===!1&&_.blending===Qr&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:mt,alphaHash:at,combine:_.combine,mapUv:At&&f(_.map.channel),aoMapUv:fe&&f(_.aoMap.channel),lightMapUv:ce&&f(_.lightMap.channel),bumpMapUv:Z&&f(_.bumpMap.channel),normalMapUv:jt&&f(_.normalMap.channel),displacementMapUv:qe&&f(_.displacementMap.channel),emissiveMapUv:Me&&f(_.emissiveMap.channel),metalnessMapUv:se&&f(_.metalnessMap.channel),roughnessMapUv:Be&&f(_.roughnessMap.channel),anisotropyMapUv:Bt&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:G&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:ht&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:K&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(jt||We),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(At||lt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&jt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ft,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:Me&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hi,flipSided:_.side===Nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:gt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&_.extensions.multiDraw===!0||le)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)M.push(P),M.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(M,_),g(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let M=u[_.type],P;if(M){let R=qi[M];P=yp.clone(R.uniforms)}else P=_.uniforms;return P}function T(_,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new nS(s,M,_,i),c.push(P),h.set(M,P)),P}function y(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:E}}function oS(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function aS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function kp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vp(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=g),t++,v}function l(u,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let T=a(u,f,p,x,m,g);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):e.push(T)}function c(u,f,p,x,m,g){let v=a(u,f,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||aS),n.length>1&&n.sort(f||kp),i.length>1&&i.sort(f||kp)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function lS(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Vp,s.set(n,[o])):i>=r.length?(o=new Vp,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function cS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new Qt};break;case"SpotLight":e={position:new J,direction:new J,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[t.id]=e,e}}}function hS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var uS=0;function fS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function dS(s){let t=new cS,e=hS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);let i=new J,r=new De,o=new De;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,T=0,y=0,w=0,E=0,_=0,M=0,P=0,R=0;c.sort(fS);for(let N=0,H=c.length;N<H;N++){let I=c[N],V=I.color,W=I.intensity,B=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fs?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*W,d+=V.g*W,u+=V.b*W;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],W);R++}else if(I.isSunLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let A=I.shadow,$=e.get(I);$.shadowIntensity=A.intensity,$.shadowBias=A.bias,$.shadowNormalBias=A.normalBias,$.shadowRadius=A.radius,$.shadowMapSize.copy(A.mapSize).multiply(A.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=tt;let ft=A.getViewportCount();for(let Ct=0;Ct<ft;Ct++)n.sunShadowMatrix[x+Ct]=A.getMatrix(Ct),n.sunShadowCascade[x+Ct]=A._cascadeData[Ct];x+=ft,p++}n.sun[f]=O,f++}else if(I.isDirectionalLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let A=I.shadow,$=e.get(I);$.shadowIntensity=A.intensity,$.shadowBias=A.bias,$.shadowNormalBias=A.normalBias,$.shadowRadius=A.radius,$.shadowMapSize=A.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=I.shadow.matrix,w++}n.directional[m]=O,m++}else if(I.isSpotLight){let O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(V).multiplyScalar(W),O.distance=B,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[v]=O;let A=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,A.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=A.matrix,I.castShadow){let $=e.get(I);$.shadowIntensity=A.intensity,$.shadowBias=A.bias,$.shadowNormalBias=A.normalBias,$.shadowRadius=A.radius,$.shadowMapSize=A.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=tt,_++}v++}else if(I.isRectAreaLight){let O=t.get(I);O.color.copy(V).multiplyScalar(W),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=O,T++}else if(I.isPointLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){let A=I.shadow,$=e.get(I);$.shadowIntensity=A.intensity,$.shadowBias=A.bias,$.shadowNormalBias=A.normalBias,$.shadowRadius=A.radius,$.shadowMapSize=A.mapSize,$.shadowCameraNear=A.camera.near,$.shadowCameraFar=A.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=O,g++}else if(I.isHemisphereLight){let O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(W),O.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[y]=O,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=R,n.version=uS++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),u++}else if(y.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Gp(s){let t=new dS(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function pS(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Gp(s),t.set(i,[a])):r>=o.length?(a=new Gp(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var mS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_S=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],xS=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Hp=new De,ra=new J,zu=new J;function vS(s,t,e){let n=new rr,i=new pe,r=new pe,o=new Ne,a=new Ll,l=new Dl,c={},h=e.maxTextureSize,d={[Os]:Nn,[Nn]:Os,[Hi]:Hi},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:mS,fragmentShader:gS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ri;p.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Gi(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let g=this.type;this.render=function(E,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Fd&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jo);let P=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),N=s.state;N.setBlending(or),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=g!==this.type;H&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=E.length;I<V;I++){let W=E[I],B=W.shadow;if(B===void 0){zt("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let tt=B.getFrameExtents();i.multiply(tt),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,B.mapSize.y=r.y));let O=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=O,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Kr){if(W.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ni(i.x,i.y,{format:Fs,type:Li,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new ls(i.x,i.y,Ii),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=as,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=cn,B.map.depthTexture.magFilter=cn}else W.isPointLight?(B.map=new aa(i.x),B.map.depthTexture=new Wo(i.x,Pi)):(B.map=new ni(i.x,i.y),B.map.depthTexture=new ls(i.x,i.y,Pi)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=as,this.type===Jo?(B.map.depthTexture.compareFunction=O?Tu:bu,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=cn,B.map.depthTexture.magFilter=cn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let A=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();W.isPointLight!==!0&&B.updateMatrices(W,M);let $=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:M.layers;for(let ft=0;ft<A;ft++){let Ct=B.getCamera(ft);if(W.isPointLight){let q=B.camera,rt=B.matrix,_t=W.distance||q.far;_t!==q.far&&(q.far=_t,q.updateProjectionMatrix()),ra.setFromMatrixPosition(W.matrixWorld),q.position.copy(ra),zu.copy(q.position),zu.add(_S[ft]),q.up.copy(xS[ft]),q.lookAt(zu),q.updateMatrixWorld(),rt.makeTranslation(-ra.x,-ra.y,-ra.z),Hp.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hp,q.coordinateSystem,q.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,ft),s.clear();else{ft===0&&(s.setRenderTarget(B.map),s.clear());let q=B.getViewport(ft);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),N.viewport(o)}n=B.getFrustum(ft),y(_,M,Ct,W,$,this.type)}B.isPointLightShadow!==!0&&this.type===Kr&&v(B,M),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(P,R,D)};function v(E,_){let M=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ni(i.x,i.y,{format:Fs,type:Li}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,M,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,M,f,x,null)}function T(E,_,M,P){let R=null,D=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=M.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=R.uuid,H=_.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let V=I[H];V===void 0&&(V=R.clone(),I[H]=V,_.addEventListener("dispose",w)),R=V}if(R.visible=_.visible,R.wireframe=_.wireframe,P===Kr?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=M}return R}function y(E,_,M,P,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Kr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let I=t.update(E),V=E.material;if(Array.isArray(V)){let W=I.groups;for(let B=0,tt=W.length;B<tt;B++){let O=W[B],A=V[O.materialIndex];if(A&&A.visible){let $=T(E,A,P,D);E.onBeforeShadow(s,E,_,M,I,$,O),s.renderBufferDirect(M,null,I,$,E,O),E.onAfterShadow(s,E,_,M,I,$,O)}}}else if(V.visible){let W=T(E,V,P,D);E.onBeforeShadow(s,E,_,M,I,W,null),s.renderBufferDirect(M,null,I,W,E,null),E.onAfterShadow(s,E,_,M,I,W,null)}}let H=E.children;for(let I=0,V=H.length;I<V;I++)y(H[I],_,M,P,R,D)}function w(E){E.target.removeEventListener("dispose",w);for(let M in c){let P=c[M],R=E.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function yS(s,t){function e(){let L=!1,Q=new Ne,K=null,pt=new Ne(0,0,0,0);return{setMask:function(lt){K!==lt&&!L&&(s.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){L=lt},setClear:function(lt,mt,at,gt,st){st===!0&&(lt*=gt,mt*=gt,at*=gt),Q.set(lt,mt,at,gt),pt.equals(Q)===!1&&(s.clearColor(lt,mt,at,gt),pt.copy(Q))},reset:function(){L=!1,K=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,K=null,pt=null,lt=null;return{setReversed:function(mt){if(Q!==mt){let at=t.get("EXT_clip_control");mt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Q=mt;let gt=lt;lt=null,this.setClear(gt)}},getReversed:function(){return Q},setTest:function(mt){mt?ct(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(mt){K!==mt&&!L&&(s.depthMask(mt),K=mt)},setFunc:function(mt){if(Q&&(mt=_p[mt]),pt!==mt){switch(mt){case dl:s.depthFunc(s.NEVER);break;case pl:s.depthFunc(s.ALWAYS);break;case ml:s.depthFunc(s.LESS);break;case Xr:s.depthFunc(s.LEQUAL);break;case gl:s.depthFunc(s.EQUAL);break;case _l:s.depthFunc(s.GEQUAL);break;case xl:s.depthFunc(s.GREATER);break;case vl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=mt}},setLocked:function(mt){L=mt},setClear:function(mt){lt!==mt&&(lt=mt,Q&&(mt=1-mt),s.clearDepth(mt))},reset:function(){L=!1,K=null,pt=null,lt=null,Q=!1}}}function i(){let L=!1,Q=null,K=null,pt=null,lt=null,mt=null,at=null,gt=null,st=null;return{setTest:function(et){L||(et?ct(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(et){Q!==et&&!L&&(s.stencilMask(et),Q=et)},setFunc:function(et,vt,nt){(K!==et||pt!==vt||lt!==nt)&&(s.stencilFunc(et,vt,nt),K=et,pt=vt,lt=nt)},setOp:function(et,vt,nt){(mt!==et||at!==vt||gt!==nt)&&(s.stencilOp(et,vt,nt),mt=et,at=vt,gt=nt)},setLocked:function(et){L=et},setClear:function(et){st!==et&&(s.clearStencil(et),st=et)},reset:function(){L=!1,Q=null,K=null,pt=null,lt=null,mt=null,at=null,gt=null,st=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,T=null,y=null,w=null,E=null,_=null,M=new Qt(0,0,0),P=0,R=!1,D=null,N=null,H=null,I=null,V=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,tt=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=tt>=1):O.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=tt>=2);let A=null,$={},ft=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),q=new Ne().fromArray(ft),rt=new Ne().fromArray(Ct);function _t(L,Q,K,pt){let lt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(L,mt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<K;at++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(Q+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return mt}let yt={};yt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),o.setFunc(Xr),Z(!1),jt(eu),ct(s.CULL_FACE),fe(or);function ct(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Et(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function le(L,Q){return u[L]!==Q?(s.bindFramebuffer(L,Q),u[L]=Q,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Q),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function At(L,Q){let K=p,pt=!1;if(L){K=f.get(Q),K===void 0&&(K=[],f.set(Q,K));let lt=L.textures;if(K.length!==lt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,at=lt.length;mt<at;mt++)K[mt]=s.COLOR_ATTACHMENT0+mt;K.length=lt.length,pt=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,pt=!0);pt&&s.drawBuffers(K)}function Wt(L){return x!==L?(s.useProgram(L),x=L,!0):!1}let Dt={[ar]:s.FUNC_ADD,[zd]:s.FUNC_SUBTRACT,[kd]:s.FUNC_REVERSE_SUBTRACT};Dt[Vd]=s.MIN,Dt[Gd]=s.MAX;let Ft={[Hd]:s.ZERO,[Wd]:s.ONE,[Xd]:s.SRC_COLOR,[su]:s.SRC_ALPHA,[Kd]:s.SRC_ALPHA_SATURATE,[Jd]:s.DST_COLOR,[Yd]:s.DST_ALPHA,[qd]:s.ONE_MINUS_SRC_COLOR,[ru]:s.ONE_MINUS_SRC_ALPHA,[$d]:s.ONE_MINUS_DST_COLOR,[Zd]:s.ONE_MINUS_DST_ALPHA,[Qd]:s.CONSTANT_COLOR,[jd]:s.ONE_MINUS_CONSTANT_COLOR,[tp]:s.CONSTANT_ALPHA,[ep]:s.ONE_MINUS_CONSTANT_ALPHA};function fe(L,Q,K,pt,lt,mt,at,gt,st,et){if(L===or){m===!0&&(Et(s.BLEND),m=!1);return}if(m===!1&&(ct(s.BLEND),m=!0),L!==Bd){if(L!==g||et!==R){if((v!==ar||w!==ar)&&(s.blendEquation(s.FUNC_ADD),v=ar,w=ar),et)switch(L){case Qr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.ONE,s.ONE);break;case nu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case iu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",L);break}else switch(L){case Qr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case nu:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",L);break}T=null,y=null,E=null,_=null,M.set(0,0,0),P=0,g=L,R=et}return}lt=lt||Q,mt=mt||K,at=at||pt,(Q!==v||lt!==w)&&(s.blendEquationSeparate(Dt[Q],Dt[lt]),v=Q,w=lt),(K!==T||pt!==y||mt!==E||at!==_)&&(s.blendFuncSeparate(Ft[K],Ft[pt],Ft[mt],Ft[at]),T=K,y=pt,E=mt,_=at),(gt.equals(M)===!1||st!==P)&&(s.blendColor(gt.r,gt.g,gt.b,st),M.copy(gt),P=st),g=L,R=!1}function ce(L,Q){L.side===Hi?Et(s.CULL_FACE):ct(s.CULL_FACE);let K=L.side===Nn;Q&&(K=!K),Z(K),L.blending===Qr&&L.transparent===!1?fe(or):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let pt=L.stencilWrite;a.setTest(pt),pt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Z(L){D!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),D=L)}function jt(L){L!==Ud?(ct(s.CULL_FACE),L!==N&&(L===eu?s.cullFace(s.BACK):L===Od?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),N=L}function qe(L){L!==H&&(B&&s.lineWidth(L),H=L)}function Me(L,Q,K){L?(ct(s.POLYGON_OFFSET_FILL),(I!==Q||V!==K)&&(I=Q,V=K,o.getReversed()&&(Q=-Q,K=-K),s.polygonOffset(Q,K))):Et(s.POLYGON_OFFSET_FILL)}function se(L){L?ct(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Be(L){L===void 0&&(L=s.TEXTURE0+W-1),A!==L&&(s.activeTexture(L),A=L)}function We(L,Q,K){K===void 0&&(A===null?K=s.TEXTURE0+W-1:K=A);let pt=$[K];pt===void 0&&(pt={type:void 0,texture:void 0},$[K]=pt),(pt.type!==L||pt.texture!==Q)&&(A!==K&&(s.activeTexture(K),A=K),s.bindTexture(L,Q||yt[L]),pt.type=L,pt.texture=Q)}function F(){let L=$[A];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function he(){try{s.compressedTexImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Gt(){try{s.texSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function dt(){try{s.texSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function Nt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Bt(){try{s.texStorage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function C(){try{s.texStorage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function S(){try{s.texImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function k(){try{s.texImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function ot(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function it(L,Q){d[L]!==Q&&(s.pixelStorei(L,Q),d[L]=Q)}function ut(L){q.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function xt(L){rt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function G(L,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let pt=K.get(L);pt===void 0&&(pt=s.getUniformBlockIndex(Q,L.name),s.uniformBlockBinding(Q,pt,pt),K.set(L,pt))}function j(L,Q,K){let lt=c.get(Q).get(L);l[lt]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,K),l[lt]=K)}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},A=null,$={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,T=null,y=null,w=null,E=null,_=null,M=new Qt(0,0,0),P=0,R=!1,D=null,N=null,H=null,I=null,V=null,q.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Et,bindFramebuffer:le,drawBuffers:At,useProgram:Wt,setBlending:fe,setMaterial:ce,setFlipSided:Z,setCullFace:jt,setLineWidth:qe,setPolygonOffset:Me,setScissorTest:se,activeTexture:Be,bindTexture:We,unbindTexture:F,compressedTexImage2D:me,compressedTexImage3D:he,texImage2D:S,texImage3D:k,pixelStorei:it,getParameter:ot,updateUBOMapping:G,uniformBlockBinding:j,texStorage2D:Bt,texStorage3D:C,texSubImage2D:Gt,texSubImage3D:dt,compressedTexSubImage2D:de,compressedTexSubImage3D:Nt,scissor:ut,viewport:xt,reset:ht}}function SS(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):Uo("canvas")}function v(C,S,k){let ot=1,it=Bt(C);if((it.width>k||it.height>k)&&(ot=k/Math.max(it.width,it.height)),ot<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ut=Math.floor(ot*it.width),xt=Math.floor(ot*it.height);u===void 0&&(u=g(ut,xt));let G=S?g(ut,xt):u;return G.width=ut,G.height=xt,G.getContext("2d").drawImage(C,0,0,ut,xt),zt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ut+"x"+xt+")."),G}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function T(C){return C.generateMipmaps}function y(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,S,k,ot,it,ut=!1){if(C!==null){if(s[C]!==void 0)return s[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xt;ot&&(xt=t.get("EXT_texture_norm16"),xt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=S;if(S===s.RED&&(k===s.FLOAT&&(G=s.R32F),k===s.HALF_FLOAT&&(G=s.R16F),k===s.UNSIGNED_BYTE&&(G=s.R8),k===s.UNSIGNED_SHORT&&xt&&(G=xt.R16_EXT),k===s.SHORT&&xt&&(G=xt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(G=s.R8UI),k===s.UNSIGNED_SHORT&&(G=s.R16UI),k===s.UNSIGNED_INT&&(G=s.R32UI),k===s.BYTE&&(G=s.R8I),k===s.SHORT&&(G=s.R16I),k===s.INT&&(G=s.R32I)),S===s.RG&&(k===s.FLOAT&&(G=s.RG32F),k===s.HALF_FLOAT&&(G=s.RG16F),k===s.UNSIGNED_BYTE&&(G=s.RG8),k===s.UNSIGNED_SHORT&&xt&&(G=xt.RG16_EXT),k===s.SHORT&&xt&&(G=xt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(G=s.RG8UI),k===s.UNSIGNED_SHORT&&(G=s.RG16UI),k===s.UNSIGNED_INT&&(G=s.RG32UI),k===s.BYTE&&(G=s.RG8I),k===s.SHORT&&(G=s.RG16I),k===s.INT&&(G=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(G=s.RGB8UI),k===s.UNSIGNED_SHORT&&(G=s.RGB16UI),k===s.UNSIGNED_INT&&(G=s.RGB32UI),k===s.BYTE&&(G=s.RGB8I),k===s.SHORT&&(G=s.RGB16I),k===s.INT&&(G=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),k===s.UNSIGNED_INT&&(G=s.RGBA32UI),k===s.BYTE&&(G=s.RGBA8I),k===s.SHORT&&(G=s.RGBA16I),k===s.INT&&(G=s.RGBA32I)),S===s.RGB&&(k===s.UNSIGNED_SHORT&&xt&&(G=xt.RGB16_EXT),k===s.SHORT&&xt&&(G=xt.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),S===s.RGBA){let j=ut?Do:ie.getTransfer(it);k===s.FLOAT&&(G=s.RGBA32F),k===s.HALF_FLOAT&&(G=s.RGBA16F),k===s.UNSIGNED_BYTE&&(G=j===xe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&xt&&(G=xt.RGBA16_EXT),k===s.SHORT&&xt&&(G=xt.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function _(C,S){let k;return C?S===null||S===Pi||S===cr?k=s.DEPTH24_STENCIL8:S===Ii?k=s.DEPTH32F_STENCIL8:S===to&&(k=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===cr?k=s.DEPTH_COMPONENT24:S===Ii?k=s.DEPTH_COMPONENT32F:S===to&&(k=s.DEPTH_COMPONENT16),k}function M(C,S){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){let S=new WeakRef(C);n.get(C).__ref=S,p.add(S),x.register(C,S,S)}function R(C){let S=n.get(C).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function D(C){H(C.target)}function N(C){I(C.target)}function H(C){C.removeEventListener("dispose",D),R(C),W(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",N),R(C),tt(C)}function V(){for(let C of p){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):H(S))}p.clear(),d.clear()}function W(C){let S=n.get(C);if(S.__webglInit===void 0)return;let k=C.source,ot=f.get(k);if(ot){let it=ot[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&B(C),Object.keys(ot).length===0&&f.delete(k)}n.remove(C)}function B(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let k=C.source,ot=f.get(k);delete ot[S.__cacheKey],o.memory.textures--}function tt(C){let S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let k=C.depthTexture;if(k&&k.renderTarget===C&&H(k),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let ut=0;ut<S.__webglFramebuffer[it].length;ut++)s.deleteFramebuffer(S.__webglFramebuffer[it][ut]);else s.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)s.deleteFramebuffer(S.__webglFramebuffer[it]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ot=C.textures;for(let it=0,ut=ot.length;it<ut;it++){let xt=n.get(ot[it]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(ot[it])}n.remove(C)}let O=0;function A(){O=0}function $(){return O}function ft(C){O=C}function Ct(){let C=O;return C>=i.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),O+=1,C}function q(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function rt(C,S){let k=n.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let ot=C.image;if(ot===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(k,C,S);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function _t(C,S){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ce(k,C,S);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function yt(C,S){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ce(k,C,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function ct(C,S){let k=n.get(C);if(C.version>0&&k.__version!==C.version){Z(k,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}let Et={[yl]:s.REPEAT,[zi]:s.CLAMP_TO_EDGE,[Sl]:s.MIRRORED_REPEAT},le={[cn]:s.NEAREST,[sp]:s.NEAREST_MIPMAP_NEAREST,[Ko]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[Jl]:s.LINEAR_MIPMAP_NEAREST,[cs]:s.LINEAR_MIPMAP_LINEAR},At={[lp]:s.NEVER,[wu]:s.ALWAYS,[cp]:s.LESS,[bu]:s.LEQUAL,[hp]:s.EQUAL,[Tu]:s.GEQUAL,[up]:s.GREATER,[fp]:s.NOTEQUAL};function Wt(C,S){if(S.type===Ii&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===Jl||S.magFilter===Ko||S.magFilter===cs||S.minFilter===Dn||S.minFilter===Jl||S.minFilter===Ko||S.minFilter===cs)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Et[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Et[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Et[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,le[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===cn||S.minFilter!==Ko&&S.minFilter!==cs||S.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Dt(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",D),P(S));let ot=S.source,it=f.get(ot);it===void 0&&(it={},f.set(ot,it));let ut=q(S);if(ut!==C.__cacheKey){it[ut]===void 0&&(it[ut]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[ut].usedTimes++;let xt=it[C.__cacheKey];xt!==void 0&&(it[C.__cacheKey].usedTimes--,xt.usedTimes===0&&B(S)),C.__cacheKey=ut,C.__webglTexture=it[ut].texture}return k}function Ft(C,S,k){return Math.floor(Math.floor(C/k)/S)}function fe(C,S,k,ot){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,k,ot,S.data);else{ut.sort((L,Q)=>L.start-Q.start);let xt=0;for(let L=1;L<ut.length;L++){let Q=ut[xt],K=ut[L],pt=Q.start+Q.count,lt=Ft(K.start,S.width,4),mt=Ft(Q.start,S.width,4);K.start<=pt+1&&lt===mt&&Ft(K.start+K.count-1,S.width,4)===lt?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++xt,ut[xt]=K)}ut.length=xt+1;let G=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),ht=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let L=0,Q=ut.length;L<Q;L++){let K=ut[L],pt=Math.floor(K.start/4),lt=Math.ceil(K.count/4),mt=pt%S.width,at=Math.floor(pt/S.width),gt=lt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,at),e.texSubImage2D(s.TEXTURE_2D,0,mt,at,gt,st,k,ot,S.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,G),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,ht)}}function ce(C,S,k){let ot=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=s.TEXTURE_3D);let it=Dt(C,S),ut=S.source;e.bindTexture(ot,C.__webglTexture,s.TEXTURE0+k);let xt=n.get(ut);if(ut.version!==xt.__version||it===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let st=ie.getPrimaries(ie.workingColorSpace),et=S.colorSpace===us?null:ie.getPrimaries(S.colorSpace),vt=S.colorSpace===us||st===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let j=v(S.image,!1,i.maxTextureSize);j=Nt(S,j);let ht=r.convert(S.format,S.colorSpace),L=r.convert(S.type),Q=E(S.internalFormat,ht,L,S.normalized,S.colorSpace,S.isVideoTexture);Wt(ot,S);let K,pt=S.mipmaps,lt=S.isVideoTexture!==!0,mt=xt.__version===void 0||it===!0,at=ut.dataReady,gt=M(S,j);if(S.isDepthTexture)Q=_(S.format===hs,S.type),mt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,ht,L,null));else if(S.isDataTexture)if(pt.length>0){lt&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,Q,pt[0].width,pt[0].height);for(let st=0,et=pt.length;st<et;st++)K=pt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ht,L,K.data):e.texImage2D(s.TEXTURE_2D,st,Q,K.width,K.height,0,ht,L,K.data);S.generateMipmaps=!1}else lt?(mt&&e.texStorage2D(s.TEXTURE_2D,gt,Q,j.width,j.height),at&&fe(S,j,ht,L)):e.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,ht,L,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Q,pt[0].width,pt[0].height,j.depth);for(let st=0,et=pt.length;st<et;st++)if(K=pt[st],S.format!==Di)if(ht!==null)if(lt){if(at)if(S.layerUpdates.size>0){let vt=Lu(K.width,K.height,S.format,S.type);for(let nt of S.layerUpdates){let Tt=K.data.subarray(nt*vt/K.data.BYTES_PER_ELEMENT,(nt+1)*vt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,nt,K.width,K.height,1,ht,Tt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,j.depth,ht,K.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Q,K.width,K.height,j.depth,0,K.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,j.depth,ht,L,K.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,Q,K.width,K.height,j.depth,0,ht,L,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{lt&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,Q,pt[0].width,pt[0].height);for(let st=0,et=pt.length;st<et;st++)K=pt[st],S.format!==Di?ht!==null?lt?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ht,K.data):e.compressedTexImage2D(s.TEXTURE_2D,st,Q,K.width,K.height,0,K.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ht,L,K.data):e.texImage2D(s.TEXTURE_2D,st,Q,K.width,K.height,0,ht,L,K.data)}else if(S.isDataArrayTexture)if(lt){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Q,j.width,j.height,j.depth),at)if(S.layerUpdates.size>0){let st=Lu(j.width,j.height,S.format,S.type);for(let et of S.layerUpdates){let vt=j.data.subarray(et*st/j.data.BYTES_PER_ELEMENT,(et+1)*st/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,j.width,j.height,1,ht,L,vt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ht,L,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ht,L,j.data);else if(S.isData3DTexture)lt?(mt&&e.texStorage3D(s.TEXTURE_3D,gt,Q,j.width,j.height,j.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ht,L,j.data)):e.texImage3D(s.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ht,L,j.data);else if(S.isFramebufferTexture){if(mt)if(lt)e.texStorage2D(s.TEXTURE_2D,gt,Q,j.width,j.height);else{let st=j.width,et=j.height;for(let vt=0;vt<gt;vt++)e.texImage2D(s.TEXTURE_2D,vt,Q,st,et,0,ht,L,null),st>>=1,et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),j.parentNode!==st){st.appendChild(j),d.add(S),st.onpaint=et=>{let vt=et.changedElements;for(let nt of d)vt.includes(nt.image)&&(nt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let vt=s.RGBA,nt=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,vt,nt,Tt,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pt.length>0){if(lt&&mt){let st=Bt(pt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Q,st.width,st.height)}for(let st=0,et=pt.length;st<et;st++)K=pt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ht,L,K):e.texImage2D(s.TEXTURE_2D,st,Q,ht,L,K);S.generateMipmaps=!1}else if(lt){if(mt){let st=Bt(j);e.texStorage2D(s.TEXTURE_2D,gt,Q,st.width,st.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,L,j)}else e.texImage2D(s.TEXTURE_2D,0,Q,ht,L,j);T(S)&&S.mipmapsAutoUpdate===!0&&y(ot),xt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Z(C,S,k){if(S.image.length!==6)return;let ot=Dt(C,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);let ut=n.get(it);if(it.version!==ut.__version||ot===!0){e.activeTexture(s.TEXTURE0+k);let xt=ie.getPrimaries(ie.workingColorSpace),G=S.colorSpace===us?null:ie.getPrimaries(S.colorSpace),j=S.colorSpace===us||xt===G?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ht=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let nt=0;nt<6;nt++)!ht&&!L?Q[nt]=v(S.image[nt],!0,i.maxCubemapSize):Q[nt]=L?S.image[nt].image:S.image[nt],Q[nt]=Nt(S,Q[nt]);let K=Q[0],pt=r.convert(S.format,S.colorSpace),lt=r.convert(S.type),mt=E(S.internalFormat,pt,lt,S.normalized,S.colorSpace),at=S.isVideoTexture!==!0,gt=ut.__version===void 0||ot===!0,st=it.dataReady,et=M(S,K);Wt(s.TEXTURE_CUBE_MAP,S);let vt;if(S.isDepthTexture){if(mt=_(S.format===hs,S.type),gt)if(at)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,mt,K.width,K.height);else for(let nt=0;nt<6;nt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,K.width,K.height,0,pt,lt,null)}else if(ht){at&&gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,mt,K.width,K.height);for(let nt=0;nt<6;nt++){vt=Q[nt].mipmaps;for(let Tt=0;Tt<vt.length;Tt++){let te=vt[Tt];S.format!==Di?pt!==null?at?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,te.width,te.height,pt,te.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,mt,te.width,te.height,0,te.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,te.width,te.height,pt,lt,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,mt,te.width,te.height,0,pt,lt,te.data)}}}else{if(vt=S.mipmaps,at&&gt){vt.length>0&&et++;let nt=Bt(Q[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,mt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(L){at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Q[nt].width,Q[nt].height,pt,lt,Q[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,Q[nt].width,Q[nt].height,0,pt,lt,Q[nt].data);for(let Tt=0;Tt<vt.length;Tt++){let Xt=vt[Tt].image[nt].image;at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Xt.width,Xt.height,pt,lt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,mt,Xt.width,Xt.height,0,pt,lt,Xt.data)}}else{at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,pt,lt,Q[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,pt,lt,Q[nt]);for(let Tt=0;Tt<vt.length;Tt++){let te=vt[Tt];at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,pt,lt,te.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,mt,pt,lt,te.image[nt])}}}T(S)&&S.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ut.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function jt(C,S,k,ot,it,ut){let xt=r.convert(k.format,k.colorSpace),G=r.convert(k.type),j=E(k.internalFormat,xt,G,k.normalized,k.colorSpace),ht=n.get(S),L=n.get(k);if(L.__renderTarget=S,!ht.__hasExternalTextures){let Q=Math.max(1,S.width>>ut),K=Math.max(1,S.height>>ut);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,ut,j,Q,K,S.depth,0,xt,G,null):e.texImage2D(it,ut,j,Q,K,0,xt,G,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),dt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,it,L.__webglTexture,0,Gt(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,it,L.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(C,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let ot=S.depthTexture,it=ot&&ot.isDepthTexture?ot.type:null,ut=_(S.stencilBuffer,it),xt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(S),ut,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(S),ut,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ut,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,C)}else{let ot=S.textures;for(let it=0;it<ot.length;it++){let ut=ot[it],xt=r.convert(ut.format,ut.colorSpace),G=r.convert(ut.type),j=E(ut.internalFormat,xt,G,ut.normalized,ut.colorSpace);dt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(S),j,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(S),j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(C,S,k){let ot=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(S.depthTexture);it.__renderTarget=S;let ut=ot?S.depthTexture.image[0]:S.depthTexture.image;(!it.__webglTexture||ut.width!==S.width||ut.height!==S.height)&&(ut.width=S.width,ut.height=S.height,S.depthTexture.needsUpdate=!0),ot?ct(S.depthTexture,0):rt(S.depthTexture,0);let xt=it.__webglTexture,G=Gt(S),j=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,ht=S.depthTexture.format===hs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===as)dt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,j,xt,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,ht,j,xt,0);else if(S.depthTexture.format===hs)dt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,j,xt,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,ht,j,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){let S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let ot=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",it)};ot.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=ot}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let ot=0;ot<6;ot++)Me(S.__webglFramebuffer[ot],C,ot);else C.texture.mipmaps.length>0?Me(S.__webglFramebuffer[0],C,0):Me(S.__webglFramebuffer,C,0);else if(k){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=s.createRenderbuffer(),qe(S.__webglDepthbuffer[ot],C,!1);else{let it=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ut)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),qe(S.__webglDepthbuffer,C,!1);else{let it=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ut)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(C,S,k){let ot=n.get(C);S!==void 0&&jt(ot.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&se(C)}function We(C){let S=C.texture,k=n.get(C),ot=n.get(S);C.addEventListener("dispose",N),P(C);let it=C.textures,ut=C.isWebGLCubeRenderTarget===!0,xt=it.length>1;if(xt||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=S.version,o.memory.textures++),ut){k.__webglFramebuffer=[];for(let G=0;G<6;G++)if(S.mipmaps.length>0){k.__webglFramebuffer[G]=[];for(let j=0;j<S.mipmaps.length;j++)k.__webglFramebuffer[G][j]=s.createFramebuffer()}else k.__webglFramebuffer[G]=s.createFramebuffer()}else{if(S.mipmaps.length>0){k.__webglFramebuffer=[];for(let G=0;G<S.mipmaps.length;G++)k.__webglFramebuffer[G]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(xt)for(let G=0,j=it.length;G<j;G++){let ht=n.get(it[G]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&dt(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let G=0;G<it.length;G++){let j=it[G];k.__webglColorRenderbuffer[G]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[G]);let ht=r.convert(j.format,j.colorSpace),L=r.convert(j.type),Q=E(j.internalFormat,ht,L,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),K=Gt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,Q,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,k.__webglColorRenderbuffer[G])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,S);for(let G=0;G<6;G++)if(S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)jt(k.__webglFramebuffer[G][j],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,j);else jt(k.__webglFramebuffer[G],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);T(S)?y(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let G=0,j=it.length;G<j;G++){let ht=it[G],L=n.get(ht),Q=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Wt(Q,ht),jt(k.__webglFramebuffer,C,ht,s.COLOR_ATTACHMENT0+G,Q,0),T(ht)&&y(Q)}e.unbindTexture()}else{let G=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(G=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(G,ot.__webglTexture),Wt(G,S),S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)jt(k.__webglFramebuffer[j],C,S,s.COLOR_ATTACHMENT0,G,j);else jt(k.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,G,0);T(S)?y(G):S.mipmaps.length>0&&s.texParameteri(G,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&se(C)}function F(C){let S=C.textures;for(let k=0,ot=S.length;k<ot;k++){let it=S[k];if(T(it)&&it.mipmapsAutoUpdate===!0){let ut=w(C),xt=n.get(it).__webglTexture;e.bindTexture(ut,xt),y(ut),e.unbindTexture()}}}let me=[];function he(C){if(C.samples>0){if(dt(C)===!1){let S=C.textures,k=C.width,ot=C.height,it=s.COLOR_BUFFER_BIT,ut=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(C),G=S.length>1;if(G)for(let ht=0;ht<S.length;ht++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),G){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);let L=n.get(S[ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,k,ot,0,0,k,ot,it,s.NEAREST),l===!0&&(me.length=0,me.push(s.COLOR_ATTACHMENT0+ht),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&me.push(ut),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),G)for(let ht=0;ht<S.length;ht++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);let L=n.get(S[ht]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Gt(C){return Math.min(i.maxSamples,C.samples)}function dt(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Nt(C,S){let k=C.colorSpace,ot=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Lo&&k!==us&&(ie.getTransfer(k)===xe?(ot!==Di||it!==ri)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",k)),S}function Bt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ct,this.resetTextureUnits=A,this.getTextureUnits=$,this.setTextureUnits=ft,this.setTexture2D=rt,this.setTexture2DArray=_t,this.setTexture3D=yt,this.setTextureCube=ct,this.rebindTextures=Be,this.setupRenderTarget=We,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=dt,this.dispose=V}function MS(s,t){function e(n,i=us){let r,o=ie.getTransfer(i);if(n===ri)return s.UNSIGNED_BYTE;if(n===Kl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ql)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===mu)return s.BYTE;if(n===gu)return s.SHORT;if(n===to)return s.UNSIGNED_SHORT;if(n===$l)return s.INT;if(n===Pi)return s.UNSIGNED_INT;if(n===Ii)return s.FLOAT;if(n===Li)return s.HALF_FLOAT;if(n===vu)return s.ALPHA;if(n===yu)return s.RGB;if(n===Di)return s.RGBA;if(n===as)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===Su)return s.RED;if(n===jl)return s.RED_INTEGER;if(n===Fs)return s.RG;if(n===tc)return s.RG_INTEGER;if(n===ec)return s.RGBA_INTEGER;if(n===Qo||n===jo||n===ta||n===ea)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===lc||n===cc||n===hc||n===na||n===uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===ac)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return r.COMPRESSED_R11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Sc||n===Mc||n===bc||n===Tc||n===wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===Ac||n===Cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ec)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===Pc||n===ia||n===Ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var bS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TS=`
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

}`,qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _i({vertexShader:bS,fragmentShader:TS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gi(new qo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yu=class extends ki{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding!="undefined",m=new qu,g={},v=e.getContextAttributes(),T=null,y=null,w=[],E=[],_=new pe,M=null,P=null,R=new Ln;R.viewport=new Ne;let D=new Ln;D.viewport=new Ne;let N=[R,D],H=new Xl,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let rt=w[q];return rt===void 0&&(rt=new Zr,w[q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(q){let rt=w[q];return rt===void 0&&(rt=new Zr,w[q]=rt),rt.getGripSpace()},this.getHand=function(q){let rt=w[q];return rt===void 0&&(rt=new Zr,w[q]=rt),rt.getHandSpace()};function W(q){let rt=E.indexOf(q.inputSource);if(rt===-1)return;let _t=w[rt];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",tt);for(let q=0;q<w.length;q++){let rt=E[q];rt!==null&&(E[q]=null,w[q].disconnect(rt))}I=null,V=null,m.reset();for(let q in g)delete g[q];if(t.setRenderTarget(T),f=null,u=null,d=null,i=null,y=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),P!==null){let q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",B),i.addEventListener("inputsourceschange",tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,yt=null,ct=null;v.depth&&(ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?hs:as,yt=v.stencil?cr:Pi);let Et={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Et),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ni(u.textureWidth,u.textureHeight,{format:Di,type:ri,depthTexture:new ls(u.textureWidth,u.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ni(f.framebufferWidth,f.framebufferHeight,{format:Di,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ct.setContext(i),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(q){for(let rt=0;rt<q.removed.length;rt++){let _t=q.removed[rt],yt=E.indexOf(_t);yt>=0&&(E[yt]=null,w[yt].disconnect(_t))}for(let rt=0;rt<q.added.length;rt++){let _t=q.added[rt],yt=E.indexOf(_t);if(yt===-1){for(let Et=0;Et<w.length;Et++)if(Et>=E.length){E.push(_t),yt=Et;break}else if(E[Et]===null){E[Et]=_t,yt=Et;break}if(yt===-1)break}let ct=w[yt];ct&&ct.connect(_t)}}function O(q,rt){rt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(rt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let rt=q.near,_t=q.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),H.near=D.near=R.near=rt,H.far=D.far=R.far=_t,(I!==H.near||V!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,V=H.far),H.layers.mask=q.layers.mask|6,R.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let yt=q.parent,ct=H.cameras;O(H,yt);for(let Et=0;Et<ct.length;Et++)O(ct[Et],yt);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),A(q,H,yt)};function A(q,rt,_t){_t===null?q.matrix.copy(rt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(rt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(q){return g[q]};let $=null;function ft(q,rt){if(h=rt.getViewerPose(c||o),p=rt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let yt=!1;_t.length!==H.cameras.length&&(H.cameras.length=0,yt=!0);for(let At=0;At<_t.length;At++){let Wt=_t[At],Dt=null;if(f!==null)Dt=f.getViewport(Wt);else{let fe=d.getViewSubImage(u,Wt);Dt=fe.viewport,At===0&&(t.setRenderTargetTextures(y,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(y))}let Ft=N[At];Ft===void 0&&(Ft=new Ln,Ft.layers.enable(At),Ft.viewport=new Ne,N[At]=Ft),Ft.matrix.fromArray(Wt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Wt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),At===0&&(H.matrix.copy(Ft.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),yt===!0&&H.cameras.push(Ft)}let ct=i.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let At=d.getDepthInformation(_t[0]);At&&At.isValid&&At.texture&&m.init(At,i.renderState)}if(ct&&ct.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let At=0;At<_t.length;At++){let Wt=_t[At].camera;if(Wt){let Dt=g[Wt];Dt||(Dt=new Xo,g[Wt]=Dt);let Ft=d.getCameraImage(Wt);Dt.sourceTexture=Ft}}}}for(let _t=0;_t<w.length;_t++){let yt=E[_t],ct=w[_t];yt!==null&&ct!==void 0&&ct.update(yt,rt,c||o)}$&&$(q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),p=null}let Ct=new Wp;Ct.setAnimationLoop(ft),this.setAnimationLoop=function(q){$=q},this.dispose=function(){}}},wS=new De,tm=new Ht;tm.set(-1,0,0,0,1,0,0,0,1);function ES(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Ru(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Nn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Nn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),T=v.envMap,y=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(wS.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=T*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AS(s,t,e,n){let i={},r={};function o(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,T){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let w=T.program;n.updateUBOMapping(v,w);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let T=s.createBuffer(),y=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,y,w),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let E=0,_=y.length;E<_;E++){let M=y[E];if(Array.isArray(M))for(let P=0,R=M.length;P<R;P++)h(M[P],E,P,w);else h(M,E,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,y,w){if(u(v,T,y,w)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let P=0;P<_.length;P++){let R=_[P],D=x(R,!0);d(R,v.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function d(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function u(v,T,y,w){let E=v.value,_=T+"_"+y;if(Array.isArray(E)){w[_]===void 0&&(w[_]=[]);let M=w[_],P=!1;for(let R=0;R<E.length;R++)f(E[R],M,R)===!0&&(P=!0);return P}return f(E,w,_)}function f(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let w=T[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function p(v){let T=v.uniforms,y=0,w=16;for(let _=0,M=T.length;_<M;_++){let P=Array.isArray(T[_])?T[_]:[T[_]];for(let R=0,D=P.length;R<D;R++){let N=P[R],H=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(T[_])||Array.isArray(N.value),V=y;for(let B=0,tt=H.length;B<tt;B++){let O=H[B],A=x(O,I),$=y%w,ft=$%A.boundary,Ct=$+ft;y+=ft,Ct!==0&&w-Ct<A.storage&&(y+=w-Ct),B===0&&(V=y),y+=A.storage}let W=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new W((y-V)/Float32Array.BYTES_PER_ELEMENT),N.__offset=V}}let E=y%w;return E>0&&(y+=w-E),v.__size=y,v.__cache={},this}function x(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let T=v.target;T.removeEventListener("dispose",m),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var CS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function RS(){return Xi===null&&(Xi=new Cl(CS,16,16,Fs,Li),Xi.name="DFG_LUT",Xi.minFilter=Dn,Xi.magFilter=Dn,Xi.wrapS=zi,Xi.wrapT=zi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var Uc=class{constructor(t={}){let{canvas:e=pp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ri}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([ec,tc,jl]),g=new Set([ri,Pi,to,cr,Kl,Ql]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,E=null,_=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,N=null,H=null,I=null,V=null;this._outputColorSpace=ei;let W=0,B=0,tt=null,O=-1,A=null,$=new Ne,ft=new Ne,Ct=null,q=new Qt(0),rt=0,_t=e.width,yt=e.height,ct=1,Et=null,le=null,At=new Ne(0,0,_t,yt),Wt=new Ne(0,0,_t,yt),Dt=!1,Ft=new rr,fe=new Rl,ce=!1,Z=!1,jt=new De,qe=new J,Me=new Ne,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function We(){return tt===null?ct:1}let F=n;function me(b,U){return e.getContext(b,U)}let he,Gt,dt,de,Nt,Bt,C,S,k,ot,it,ut,xt,G,j,ht,L,Q,K,pt,lt,mt,at;try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),F===null){let U="webgl2";if(F=me(U,b),F===null)throw me(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(b){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),kt("WebGLRenderer: "+b.message),b}function gt(){he=new kv(F),he.init(),lt=new MS(F,he),Gt=new Rv(F,he,t,lt),dt=new yS(F,he),Gt.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),H=F.createFramebuffer(),I=F.createFramebuffer(),V=F.createFramebuffer(),de=new Hv(F),Nt=new oS,Bt=new SS(F,he,dt,Nt,Gt,lt,de),C=new zv(R),S=new X_(F),mt=new Av(F,S),k=new Vv(F,S,de,mt),ot=new Xv(F,k,S,mt,de),Q=new Wv(F,Gt,Bt),j=new Pv(Nt),it=new rS(R,C,he,Gt,mt,j),ut=new ES(R,Nt),xt=new lS,G=new pS(he),L=new Ev(R,C,dt,ot,p,l),ht=new vS(R,ot,Gt),at=new AS(F,de,Gt,dt),K=new Cv(F,he,de),pt=new Gv(F,he,de),de.programs=it.programs,R.capabilities=Gt,R.extensions=he,R.properties=Nt,R.renderLists=xt,R.shadowMap=ht,R.state=dt,R.info=de}x!==ri&&(P=new Yv(x,e.width,e.height,a,i,r));let st=new Yu(R,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=he.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=he.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(b){b!==void 0&&(ct=b,this.setSize(_t,yt,!1))},this.getSize=function(b){return b.set(_t,yt)},this.setSize=function(b,U,Y=!0){if(st.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=b,yt=U,e.width=Math.floor(b*ct),e.height=Math.floor(U*ct),Y===!0&&(e.style.width=b+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(_t*ct,yt*ct).floor()},this.setDrawingBufferSize=function(b,U,Y){_t=b,yt=U,ct=Y,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===ri){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy($)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,U,Y,z){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,U,Y,z),dt.viewport($.copy(At).multiplyScalar(We()).round())},this.getScissor=function(b){return b.copy(Wt)},this.setScissor=function(b,U,Y,z){b.isVector4?Wt.set(b.x,b.y,b.z,b.w):Wt.set(b,U,Y,z),dt.scissor(ft.copy(Wt).multiplyScalar(We()).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){dt.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){Et=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,Y=!0){let z=0;if(b){let X=!1;if(tt!==null){let Mt=tt.texture.format;X=m.has(Mt)}if(X){let Mt=tt.texture.type,Pt=g.has(Mt),St=L.getClearColor(),wt=L.getClearAlpha(),Ut=St.r,qt=St.g,ee=St.b;Pt?(v[0]=Ut,v[1]=qt,v[2]=ee,v[3]=wt,F.clearBufferuiv(F.COLOR,0,v)):(T[0]=Ut,T[1]=qt,T[2]=ee,T[3]=wt,F.clearBufferiv(F.COLOR,0,T))}else z|=F.COLOR_BUFFER_BIT}U&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),L.dispose(),xt.dispose(),G.dispose(),Bt.dispose(),Nt.dispose(),C.dispose(),ot.dispose(),k.dispose(),mt.dispose(),at.dispose(),it.dispose(),st.dispose(),st.removeEventListener("sessionstart",be),st.removeEventListener("sessionend",_e),je.stop()};function et(b){b.preventDefault(),Au("WebGLRenderer: Context Lost."),D=!0}function vt(){Au("WebGLRenderer: Context Restored."),D=!1;let b=de.autoReset,U=ht.enabled,Y=ht.autoUpdate,z=ht.needsUpdate,X=ht.type;gt(),de.autoReset=b,ht.enabled=U,ht.autoUpdate=Y,ht.needsUpdate=z,ht.type=X}function nt(b){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Tt(b){let U=b.target;U.removeEventListener("dispose",Tt),te(U)}function te(b){Xt(b),Nt.remove(b)}function Xt(b){let U=Nt.get(b).programs;U!==void 0&&(U.forEach(function(Y){it.releaseProgram(Y)}),b.isShaderMaterial&&it.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,Y,z,X,Mt){U===null&&(U=se);let Pt=X.isMesh&&X.matrixWorld.determinantAffine()<0,St=di(b,U,Y,z,X);dt.setMaterial(z,Pt);let wt=Y.index,Ut=1;if(z.wireframe===!0){if(wt=k.getWireframeAttribute(Y),wt===void 0)return;Ut=2}let qt=Y.drawRange,ee=Y.attributes.position,It=qt.start*Ut,ne=(qt.start+qt.count)*Ut;Mt!==null&&(It=Math.max(It,Mt.start*Ut),ne=Math.min(ne,(Mt.start+Mt.count)*Ut)),wt!==null?(It=Math.max(It,0),ne=Math.min(ne,wt.count)):ee!=null&&(It=Math.max(It,0),ne=Math.min(ne,ee.count));let Je=ne-It;if(Je<0||Je===1/0)return;mt.setup(X,z,St,Y,wt);let Ae,we=K;if(wt!==null&&(Ae=S.get(wt),we=pt,we.setIndex(Ae)),X.isMesh)z.wireframe===!0?(dt.setLineWidth(z.wireframeLinewidth*We()),we.setMode(F.LINES)):we.setMode(F.TRIANGLES);else if(X.isLine){let vn=z.linewidth;vn===void 0&&(vn=1),dt.setLineWidth(vn*We()),X.isLineSegments?we.setMode(F.LINES):X.isLineLoop?we.setMode(F.LINE_LOOP):we.setMode(F.LINE_STRIP)}else X.isPoints?we.setMode(F.POINTS):X.isSprite&&we.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(he.get("WEBGL_multi_draw"))we.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let vn=X._multiDrawStarts,Lt=X._multiDrawCounts,In=X._multiDrawCount,ge=wt?S.get(wt).bytesPerElement:1,Qs=Nt.get(z).currentProgram.getUniforms();for(let yn=0;yn<In;yn++)Qs.setValue(F,"_gl_DrawID",yn),we.render(vn[yn]/ge,Lt[yn])}else if(X.isInstancedMesh)we.renderInstances(It,Je,X.count);else if(Y.isInstancedBufferGeometry){let vn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Lt=Math.min(Y.instanceCount,vn);we.renderInstances(It,Je,Lt)}else we.render(It,Je)};function Re(b,U,Y,z){N!==null&&b.isNodeMaterial&&N.setObject(z,b),ce===!0&&j.setState(b,Y,!1),b.transparent===!0&&b.side===Hi&&b.forceSinglePass===!1?(b.side=Nn,b.needsUpdate=!0,Qn(b,U,z),b.side=Os,b.needsUpdate=!0,Qn(b,U,z),b.side=Hi):Qn(b,U,z)}this.compile=function(b,U,Y=null){Y===null&&(Y=b),N!==null&&N.renderStart(b,U,Y),E=G.get(Y),E.init(U),M.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),b!==Y&&b.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),Z=this.localClippingEnabled,ce=j.init(this.clippingPlanes,Z),ce===!0&&j.setGlobalState(this.clippingPlanes,U),N!==null&&ht.render(E.state.shadowsArray,Y,U);let z=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Mt=X.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){let St=Mt[Pt];Re(St,Y,U,X),z.add(St)}else Re(Mt,Y,U,X),z.add(Mt)}),E=M.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(b,U,Y=null){let z=this.compile(b,U,Y);return new Promise(X=>{function Mt(){if(z.forEach(function(Pt){let wt=Nt.get(Pt).currentProgram;(wt===void 0||wt.isReady())&&z.delete(Pt)}),z.size===0){X(b);return}setTimeout(Mt,10)}he.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ye=null;function Pe(b){Ye&&Ye(b)}function be(){je.stop()}function _e(){je.start()}let je=new Wp;je.setAnimationLoop(Pe),typeof self!="undefined"&&je.setContext(self),this.setAnimationLoop=function(b){Ye=b,st.setAnimationLoop(b),b===null?je.stop():je.start()},st.addEventListener("sessionstart",be),st.addEventListener("sessionend",_e),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(b,U);let Y=st.enabled===!0&&st.isPresenting===!0,z=P!==null&&(tt===null||Y)&&P.begin(R,tt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,U,tt),E=G.get(b,M.length),E.init(U),E.state.textureUnits=Bt.getTextureUnits(),M.push(E),jt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?fe.setFromArrayCamera(U):Ft.setFromProjectionMatrix(jt,mi,U.reversedDepth),Z=this.localClippingEnabled,ce=j.init(this.clippingPlanes,Z),w=xt.get(b,_.length),w.init(),_.push(w),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Pt=R.xr.getDepthSensingMesh();Pt!==null&&Te(Pt,U,-1/0,R.sortObjects)}Te(b,U,0,R.sortObjects),w.finish(),N!==null&&N.updateLights(E.state.lightsArray),R.sortObjects===!0&&w.sort(Et,le),Be=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Be&&L.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),ce===!0&&j.beginShadows();let X=E.state.shadowsArray;if(ht.render(X,b,U),ce===!0&&j.endShadows(),(z&&P.hasRenderPass())===!1){let Pt=w.opaque,St=w.transmissive;if(E.setupLights(),U.isArrayCamera){let wt=U.cameras;if(St.length>0)for(let Ut=0,qt=wt.length;Ut<qt;Ut++){let ee=wt[Ut];Kn(Pt,St,b,ee)}Be&&L.render(b);for(let Ut=0,qt=wt.length;Ut<qt;Ut++){let ee=wt[Ut];xn(w,b,ee,ee.viewport)}}else St.length>0&&Kn(Pt,St,b,U),Be&&L.render(b),xn(w,b,U)}tt!==null&&B===0&&(Bt.updateMultisampleRenderTarget(tt),Bt.updateRenderTargetMipmap(tt)),z&&P.end(R),b.isScene===!0&&b.onAfterRender(R,b,U),mt.resetDefaultState(),O=-1,A=null,M.pop(),M.length>0?(E=M[M.length-1],Bt.setTextureUnits(E.state.textureUnits),ce===!0&&j.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,N!==null&&N.renderEnd()};function Te(b,U,Y,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let Pt=U.isArrayCamera?fe:Ft;if(!b.frustumCulled||b.intersectsFrustum(Pt)){z&&Me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(jt);let St=ot.update(b),wt=b.material;wt.visible&&w.push(b,St,wt,Y,Me.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Pt=U.isArrayCamera?fe:Ft;if(!b.frustumCulled||b.intersectsFrustum(Pt)){let St=ot.update(b),wt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Me.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Me.copy(St.boundingSphere.center)),Me.applyMatrix4(b.matrixWorld).applyMatrix4(jt)),Array.isArray(wt)){let Ut=St.groups;for(let qt=0,ee=Ut.length;qt<ee;qt++){let It=Ut[qt],ne=wt[It.materialIndex];ne&&ne.visible&&w.push(b,St,ne,Y,Me.z,It,U)}}else wt.visible&&w.push(b,St,wt,Y,Me.z,null,U)}}}let Mt=b.children;for(let Pt=0,St=Mt.length;Pt<St;Pt++)Te(Mt[Pt],U,Y,z)}function xn(b,U,Y,z){let{opaque:X,transmissive:Mt,transparent:Pt}=b;E.setupLightsView(Y),ce===!0&&j.setGlobalState(R.clippingPlanes,Y),z&&dt.viewport($.copy(z)),X.length>0&&ze(X,U,Y),Mt.length>0&&ze(Mt,U,Y),Pt.length>0&&ze(Pt,U,Y),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Kn(b,U,Y,z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let It=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new ni(1,1,{generateMipmaps:!0,type:It?Li:ri,minFilter:cs,samples:Math.max(4,Gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let Mt=E.state.transmissionRenderTarget[z.id],Pt=z.viewport||$;Mt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);let St=R.getRenderTarget(),wt=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(q),rt=R.getClearAlpha(),rt<1&&R.setClearColor(16777215,.5),R.clear(),Be&&L.render(Y);let qt=R.toneMapping;R.toneMapping=Wi;let ee=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),ce===!0&&j.setGlobalState(R.clippingPlanes,z),ze(b,Y,z),Bt.updateMultisampleRenderTarget(Mt),Bt.updateRenderTargetMipmap(Mt),he.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ne=0,Je=U.length;ne<Je;ne++){let Ae=U[ne],{object:we,geometry:vn,material:Lt,group:In}=Ae;if(Lt.side===Hi&&we.layers.test(z.layers)){let ge=Lt.side;Lt.side=Nn,Lt.needsUpdate=!0,Ze(we,Y,z,vn,Lt,In),Lt.side=ge,Lt.needsUpdate=!0,It=!0}}It===!0&&(Bt.updateMultisampleRenderTarget(Mt),Bt.updateRenderTargetMipmap(Mt))}R.setRenderTarget(St,wt,Ut),R.setClearColor(q,rt),ee!==void 0&&(z.viewport=ee),R.toneMapping=qt}function ze(b,U,Y){let z=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Mt=b.length;X<Mt;X++){let Pt=b[X],{object:St,geometry:wt,group:Ut}=Pt,qt=Pt.material;qt.allowOverride===!0&&z!==null&&(qt=z),St.layers.test(Y.layers)&&Ze(St,U,Y,wt,qt,Ut)}}function Ze(b,U,Y,z,X,Mt){N!==null&&X.isNodeMaterial&&N.setObject(b,X),b.onBeforeRender(R,U,Y,z,X,Mt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(R,U,Y,z,b,Mt),X.transparent===!0&&X.side===Hi&&X.forceSinglePass===!1?(X.side=Nn,X.needsUpdate=!0,R.renderBufferDirect(Y,U,z,X,b,Mt),X.side=Os,X.needsUpdate=!0,R.renderBufferDirect(Y,U,z,X,b,Mt),X.side=Hi):R.renderBufferDirect(Y,U,z,X,b,Mt),b.onAfterRender(R,U,Y,z,X,Mt)}function tn(b){let U=0;for(let Y of b)Y.texture!==null&&U++;return U}function Qn(b,U,Y){U.isScene!==!0&&(U=se);let z=Nt.get(b),X=E.state.lights,Mt=E.state.shadowsArray,Pt=X.state.version,St=it.getParameters(b,X.state,Mt,U,Y,E.state.lightProbeGridArray),wt=it.getProgramCacheKey(St),Ut=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=C.get(b.envMap||z.environment,qt),z.envMapRotation=z.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Tt),Ut=new Map,z.programs=Ut,z.programVariants=new Map);let ee=Ut.get(wt);if(ee!==void 0){if(z.currentProgram===ee&&z.lightsStateVersion===Pt)return ke(b,St),ee}else St.uniforms=it.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,Y,St),b.onBeforeCompile(St,R),ee=it.acquireProgram(St,wt),Ut.set(wt,ee),z.uniforms=St.uniforms;let It=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=j.uniform),ke(b,St),z.needsLights=Va(b),z.lightsStateVersion=Pt,z.needsLights&&(It.ambientLightColor.value=X.state.ambient,It.lightProbe.value=X.state.probe,It.sunLights.value=X.state.sun,It.sunLightShadows.value=X.state.sunShadow,It.directionalLights.value=X.state.directional,It.directionalLightShadows.value=X.state.directionalShadow,It.spotLights.value=X.state.spot,It.spotLightShadows.value=X.state.spotShadow,It.rectAreaLights.value=X.state.rectArea,It.ltc_1.value=X.state.rectAreaLTC1,It.ltc_2.value=X.state.rectAreaLTC2,It.pointLights.value=X.state.point,It.pointLightShadows.value=X.state.pointShadow,It.hemisphereLights.value=X.state.hemi,It.sunShadowMatrix.value=X.state.sunShadowMatrix,It.sunShadowCascade.value=X.state.sunShadowCascade,It.directionalShadowMatrix.value=X.state.directionalShadowMatrix,It.spotLightMatrix.value=X.state.spotLightMatrix,It.spotLightMap.value=X.state.spotLightMap,It.pointShadowMatrix.value=X.state.pointShadowMatrix),z.numLightProbeGrids=tn(E.state.lightProbeGridArray),z.currentProgram=ee,z.uniformsList=null,ee}function Pr(b,U,Y,z,X){let Mt=Nt.get(b),Pt=Mt.currentProgram.id+","+z+","+X,St=Mt.programVariants.get(Pt);return St===void 0?(St=Qn(b,U,Y),Mt.programVariants.set(Pt,St)):(Mt.currentProgram=St,Mt.uniformsList=null,Mt.outputColorSpace=z,Mt.toneMapping=X),St}function en(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=eo.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ke(b,U){let Y=Nt.get(b);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function di(b,U,Y,z,X){U.isScene!==!0&&(U=se),Bt.resetTextureUnits();let Mt=U.fog,Pt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,St=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ie.workingColorSpace,wt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ut=C.get(z.envMap||Pt,wt),qt=z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ee=!!Y.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),It=!!Y.morphAttributes.position,ne=!!Y.morphAttributes.normal,Je=!!Y.morphAttributes.color,Ae=Wi;z.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ae=R.toneMapping);let we=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vn=we!==void 0?we.length:0,Lt=Nt.get(z),In=E.state.lights;if(ce===!0&&(Z===!0||b!==A)){let Le=b===A&&z.id===O;j.setState(z,b,Le)}let ge=!1,Qs=!1;z.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==In.state.version||X.isBatchedMesh&&Lt.batching===!1||!X.isBatchedMesh&&Lt.batching===!0||X.isBatchedMesh&&Lt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Lt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Lt.instancing===!1||!X.isInstancedMesh&&Lt.instancing===!0||X.isSkinnedMesh&&Lt.skinning===!1||!X.isSkinnedMesh&&Lt.skinning===!0||X.isInstancedMesh&&Lt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Lt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Lt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Lt.instancingMorph===!1&&X.morphTexture!==null||Lt.envMap!==Ut||z.fog===!0&&Lt.fog!==Mt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==j.numPlanes||Lt.numIntersection!==j.numIntersection)||Lt.vertexAlphas!==qt||Lt.vertexTangents!==ee||Lt.morphTargets!==It||Lt.morphNormals!==ne||Lt.morphColors!==Je||Lt.morphTargetsCount!==vn||Lt.numLightProbeGrids!==tn(E.state.lightProbeGridArray)?ge=!0:(Lt.outputColorSpace!==St||Lt.toneMapping!==Ae)&&(Qs=!0):(ge=!0,Lt.__version=z.version);let yn=Lt.currentProgram;(ge===!0||Qs===!0)&&(yn=Qs===!0?Pr(z,U,X,St,Ae):Qn(z,U,X),N&&z.isNodeMaterial&&N.onUpdateProgram(z,yn,Lt));let Ga=!1,bs=!1,js=!1,ue=yn.getUniforms(),fn=Lt.uniforms;if(dt.useProgram(yn.program)&&(Ga=!0,bs=!0,js=!0),z.id!==O&&(O=z.id,bs=!0),Ga||A!==b){dt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ue.setValue(F,"projectionMatrix",b.projectionMatrix),ue.setValue(F,"viewMatrix",b.matrixWorldInverse);let an=ue.map.cameraPosition;an!==void 0&&an.setValue(F,qe.setFromMatrixPosition(b.matrixWorld)),Gt.logarithmicDepthBuffer&&ue.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,bs=!0,js=!0)}if(Lt.needsLights&&(In.state.sunShadowMap.length>0&&ue.setValue(F,"sunShadowMap",In.state.sunShadowMap,Bt),In.state.directionalShadowMap.length>0&&ue.setValue(F,"directionalShadowMap",In.state.directionalShadowMap,Bt),In.state.spotShadowMap.length>0&&ue.setValue(F,"spotShadowMap",In.state.spotShadowMap,Bt),In.state.pointShadowMap.length>0&&ue.setValue(F,"pointShadowMap",In.state.pointShadowMap,Bt)),X.isSkinnedMesh){ue.setOptional(F,X,"bindMatrix"),ue.setOptional(F,X,"bindMatrixInverse");let Le=X.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ue.setValue(F,"boneTexture",Le.boneTexture,Bt))}X.isBatchedMesh&&(ue.setOptional(F,X,"batchingTexture"),ue.setValue(F,"batchingTexture",X._matricesTexture,Bt),ue.setOptional(F,X,"batchingIdTexture"),ue.setValue(F,"batchingIdTexture",X._indirectTexture,Bt),ue.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ue.setValue(F,"batchingColorTexture",X._colorsTexture,Bt));let Ti=Y.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Q.update(X,Y,yn),(bs||Lt.receiveShadow!==X.receiveShadow)&&(Lt.receiveShadow=X.receiveShadow,ue.setValue(F,"receiveShadow",X.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(fn.envMapIntensity.value=U.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=RS()),bs){if(ue.setValue(F,"toneMappingExposure",R.toneMappingExposure),Lt.needsLights&&wo(fn,js),Mt&&z.fog===!0&&ut.refreshFogUniforms(fn,Mt),ut.refreshMaterialUniforms(fn,z,ct,yt,E.state.transmissionRenderTarget[b.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let Le=y,an=0;for(let ji of E.state.lightProbeGridArray)ji.texture!==null&&(Le.textures[an]=ji.texture,Le.min[an]=ji.boundingBox.min,Le.max[an]=ji.boundingBox.max,Le.resolution[an]=ji.resolution,an++);for(let ji in Le)Le[ji].length=an;fn.probesSH.value=Le.textures,fn.probesMin.value=Le.min,fn.probesMax.value=Le.max,fn.probesResolution.value=Le.resolution}eo.upload(F,en(Lt),fn,Bt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(eo.upload(F,en(Lt),fn,Bt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(F,"center",X.center),ue.setValue(F,"modelViewMatrix",X.modelViewMatrix),ue.setValue(F,"normalMatrix",X.normalMatrix),ue.setValue(F,"modelMatrix",X.matrixWorld),z.uniformsGroups!==void 0){let Le=z.uniformsGroups;for(let an=0,ji=Le.length;an<ji;an++){let ud=Le[an];at.update(ud,yn),at.bind(ud,yn)}}return yn}function wo(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Va(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(b,U,Y){let z=Nt.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Nt.get(b.texture).__webglTexture=U,Nt.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Y,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let Y=Nt.get(b);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,Y=0){tt=b,W=U,B=Y;let z=null,X=!1,Mt=!1;if(b){let St=Nt.get(b);if(St.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(F.FRAMEBUFFER,St.__webglFramebuffer),$.copy(b.viewport),ft.copy(b.scissor),Ct=b.scissorTest,dt.viewport($),dt.scissor(ft),dt.setScissorTest(Ct),O=-1;return}else if(St.__webglFramebuffer===void 0)Bt.setupRenderTarget(b);else if(St.__hasExternalTextures)Bt.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let qt=b.depthTexture;if(St.__boundDepthTexture!==qt){if(qt!==null&&Nt.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(b)}}let wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Mt=!0);let Ut=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?z=Ut[U][Y]:z=Ut[U],X=!0):b.samples>0&&Bt.useMultisampledRTT(b)===!1?z=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?z=Ut[Y]:z=Ut,$.copy(b.viewport),ft.copy(b.scissor),Ct=b.scissorTest}else $.copy(At).multiplyScalar(ct).floor(),ft.copy(Wt).multiplyScalar(ct).floor(),Ct=Dt;if(Y!==0&&(z=H),dt.bindFramebuffer(F.FRAMEBUFFER,z)&&dt.drawBuffers(b,z),dt.viewport($),dt.scissor(ft),dt.setScissorTest(Ct),X){let St=Nt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,Y)}else if(Mt){let St=U;for(let wt=0;wt<b.textures.length;wt++){let Ut=Nt.get(b.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,Y,St)}}else if(b!==null&&Y!==0){let St=Nt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,Y)}O=-1};function Ms(b){let U=Nt.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Gt.textureFormatReadable(b.format),U.__typeReadable=Gt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,Y,z,X,Mt,Pt,St=0){if(!(b&&b.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt){dt.bindFramebuffer(F.FRAMEBUFFER,wt);try{let Ut=b.textures[St],qt=Ut.format,ee=Ut.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let It=Ms(Ut);if(It.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&Y>=0&&Y<=b.height-X&&F.readPixels(U,Y,z,X,lt.convert(qt),lt.convert(ee),Mt)}finally{let Ut=tt!==null?Nt.get(tt).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,U,Y,z,X,Mt,Pt,St=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt)if(U>=0&&U<=b.width-z&&Y>=0&&Y<=b.height-X){dt.bindFramebuffer(F.FRAMEBUFFER,wt);let Ut=b.textures[St],qt=Ut.format,ee=Ut.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let It=Ms(Ut);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ne),F.bufferData(F.PIXEL_PACK_BUFFER,Mt.byteLength,F.STREAM_READ),F.readPixels(U,Y,z,X,lt.convert(qt),lt.convert(ee),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Je=tt!==null?Nt.get(tt).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Je);let Ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gp(F,Ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ne),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Mt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ne),F.deleteSync(Ae),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,Y=0){let z=Math.pow(2,-Y),X=Math.floor(b.image.width*z),Mt=Math.floor(b.image.height*z),Pt=U!==null?U.x:0,St=U!==null?U.y:0;Bt.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Pt,St,X,Mt),dt.unbindTexture()},this.copyTextureToTexture=function(b,U,Y=null,z=null,X=0,Mt=0){let Pt,St,wt,Ut,qt,ee,It,ne,Je,Ae=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(Y!==null)Pt=Y.max.x-Y.min.x,St=Y.max.y-Y.min.y,wt=Y.isBox3?Y.max.z-Y.min.z:1,Ut=Y.min.x,qt=Y.min.y,ee=Y.isBox3?Y.min.z:0;else{let ue=Math.pow(2,-X);Pt=Math.floor(Ae.width*ue),St=Math.floor(Ae.height*ue),b.isDataArrayTexture?wt=Ae.depth:b.isData3DTexture?wt=Math.floor(Ae.depth*ue):wt=1,Ut=0,qt=0,ee=0}z!==null?(It=z.x,ne=z.y,Je=z.z):(It=0,ne=0,Je=0);let we=lt.convert(U.format),vn=lt.convert(U.type),Lt;U.isData3DTexture?(Bt.setTexture3D(U,0),Lt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),Lt=F.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),Lt=F.TEXTURE_2D),dt.activeTexture(F.TEXTURE0),dt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),dt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),dt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let In=dt.getParameter(F.UNPACK_ROW_LENGTH),ge=dt.getParameter(F.UNPACK_IMAGE_HEIGHT),Qs=dt.getParameter(F.UNPACK_SKIP_PIXELS),yn=dt.getParameter(F.UNPACK_SKIP_ROWS),Ga=dt.getParameter(F.UNPACK_SKIP_IMAGES);dt.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),dt.pixelStorei(F.UNPACK_SKIP_ROWS,qt),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,ee);let bs=b.isDataArrayTexture||b.isData3DTexture,js=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let ue=Nt.get(b),fn=Nt.get(U),Ti=Nt.get(ue.__renderTarget),Le=Nt.get(fn.__renderTarget);dt.bindFramebuffer(F.READ_FRAMEBUFFER,Ti.__webglFramebuffer),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let an=0;an<wt;an++)bs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(b).__webglTexture,X,ee+an),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,Mt,Je+an)),F.blitFramebuffer(Ut,qt,Ut+Pt,qt+St,It,ne,It+Pt,ne+St,F.DEPTH_BUFFER_BIT,F.NEAREST);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Nt.has(b)){let ue=Nt.get(b),fn=Nt.get(U);dt.bindFramebuffer(F.READ_FRAMEBUFFER,I),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let Ti=0;Ti<wt;Ti++)bs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ue.__webglTexture,X,ee+Ti):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ue.__webglTexture,X),js?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fn.__webglTexture,Mt,Je+Ti):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fn.__webglTexture,Mt),X!==0?F.blitFramebuffer(Ut,qt,Ut+Pt,qt+St,It,ne,It+Pt,ne+St,F.COLOR_BUFFER_BIT,F.NEAREST):js?F.copyTexSubImage3D(Lt,Mt,It,ne,Je+Ti,Ut,qt,Pt,St):F.copyTexSubImage2D(Lt,Mt,It,ne,Ut,qt,Pt,St);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else js?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Lt,Mt,It,ne,Je,Pt,St,wt,we,vn,Ae.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Lt,Mt,It,ne,Je,Pt,St,wt,we,Ae.data):F.texSubImage3D(Lt,Mt,It,ne,Je,Pt,St,wt,we,vn,Ae):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Mt,It,ne,Pt,St,we,vn,Ae.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Mt,It,ne,Ae.width,Ae.height,we,Ae.data):F.texSubImage2D(F.TEXTURE_2D,Mt,It,ne,Pt,St,we,vn,Ae);dt.pixelStorei(F.UNPACK_ROW_LENGTH,In),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,Qs),dt.pixelStorei(F.UNPACK_SKIP_ROWS,yn),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,Ga),Mt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Lt),dt.unbindTexture()},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&Bt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Bt.setTextureCube(b,0):b.isData3DTexture?Bt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Bt.setTexture2DArray(b,0):Bt.setTexture2D(b,0),dt.unbindTexture()},this.resetState=function(){W=0,B=0,tt=null,dt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};function fs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function cm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pa={duration:.5,overwrite:!1,delay:0},hf,pn,Ie,vi=1e8,Se=1/vi,ef=Math.PI*2,PS=ef/4,IS=0,hm=Math.sqrt,LS=Math.cos,DS=Math.sin,rn=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},ps=function(t){return typeof t=="number"},Jc=function(t){return typeof t=="undefined"},Ji=function(t){return typeof t=="object"},Yn=function(t){return t!==!1},uf=function(){return typeof window!="undefined"},Bc=function(t){return Ve(t)||rn(t)},um=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,NS=/random\([^)]+\)/g,US=/,\s*/g,em=/(?:-?\.?\d|\.)+/gi,ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,pr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,df=/[+-]=-?[.\d]+/,OS=/[^,'"\[\]\s]+/gi,FS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,Yi,nf,pf,ai={},Gc={},fm,dm=function(t){return(Gc=so(t,ai))&&En},$c=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ma=function(t,e){return!e&&console.warn(t)},pm=function(t,e){return t&&(ai[t]=e)&&Gc&&(Gc[t]=e)||ai},ga=function(){return 0},BS={suppressEvents:!0,isStart:!0,kill:!1},zc={suppressEvents:!0,kill:!1},zS={suppressEvents:!0},mf={},zs=[],sf={},mm,Xn={},Ju={},nm=30,kc=[],gf="",_f=function(t){var e=t[0],n,i;if(Ji(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=kc.length;i--&&!kc[i].targetTest(e););n=kc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Sf(t[i],n)))||t.splice(i,1);return t},ks=function(t){return t._gsap||_f(yi(t))[0]._gsap},xf=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():Jc(n)&&t.getAttribute&&t.getAttribute(e)||n},Un=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},mr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},kS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Hc=function(){var t=zs.length,e=zs.slice(0),n,i;for(sf={},zs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vf=function(t){return!!(t._initted||t._startAt||t.add)},gm=function(t,e,n,i){zs.length&&!pn&&Hc(),t.render(e,n,i||!!(pn&&e<0&&vf(t))),zs.length&&!pn&&Hc()},_m=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(OS).length<2?e:rn(t)?t.trim():t},xm=function(t){return t},li=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},VS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},so=function(t,e){for(var n in e)t[n]=e[n];return t},im=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ji(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Wc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ua=function(t){var e=t.parent||Oe,n=t.keyframes?VS(wn(t.keyframes)):li;if(Yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},GS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},vm=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Kc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Vs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ur=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},HS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},rf=function(t,e,n,i){return t._startAt&&(pn?t._startAt.revert(zc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},WS=function s(t){return!t||t._ts&&s(t.parent)},sm=function(t){return t._repeat?ro(t._tTime,t=t.duration()+t._rDelay)*t:0},ro=function(t,e){var n=Math.floor(t=Ue(t/e));return t&&n===t?n-1:n},Xc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Qc=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},jc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Qc(t),n._dirty||ur(n,t)),t},ym=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Xc(t.rawTime(),e),(!e._dur||ya(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),ur(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Zi=function(t,e,n,i){return e.parent&&Vs(e),e._start=Ue((ps(n)?n:!n&&qc(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Oe?xi(t,n,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),vm(t,e,"_first","_last",t._sort?"_start":0),qc(e)||(t._recent=e),i||ym(t,e),t._ts<0&&jc(t,t._tTime),t},Sm=function(t,e){return(ai.ScrollTrigger||$c("scrollTrigger",e))&&ai.ScrollTrigger.create(e,t)},Mm=function(t,e,n,i,r){if(Tf(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&mm!==qn.frame)return zs.push(t),t._lazy=[r,i],1},XS=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},qc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qS=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&XS(t)&&!(!t._initted&&qc(t))||(t._ts<0||t._dp._ts<0)&&!qc(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=ya(0,t._tDur,e),h=ro(l,a),t._yoyo&&h&1&&(o=1-o),h!==ro(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||pn||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&Mm(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&rf(t,e,n,!0),t._onUpdate&&!n&&oi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&oi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Vs(t,1),!n&&!pn&&(oi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},YS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},oo=function(t,e,n,i){var r=t._repeat,o=Ue(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ue(o*(r+1)+t._rDelay*r):o,a>0&&!i&&jc(t,t._tTime=t._tDur*a),t.parent&&Qc(t),n||ur(t.parent,t),t},rm=function(t){return t instanceof Tn?ur(t):oo(t,t._dur)},ZS={_start:0,endTime:ga,totalDuration:ga},xi=function s(t,e,n){var i=t.labels,r=t._recent||ZS,o=t.duration()>=vi?r.endTime(!1):t._dur,a,l,c;return rn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},fa=function(t,e,n){var i=ps(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Xe(e[0],o,e[r+1])},Gs=function(t,e){return t||t===0?e(t):e},ya=function(t,e,n){return n<t?t:n>e?e:n},mn=function(t,e){return!rn(t)||!(e=FS.exec(t))?"":e[1]},JS=function(t,e,n){return Gs(n,function(i){return ya(t,e,i)})},of=[].slice,bm=function(t,e){return t&&Ji(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ji(t[0]))&&!t.nodeType&&t!==Yi},$S=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return rn(i)&&!e||bm(i,1)?(r=n).push.apply(r,yi(i)):n.push(i)})||n},yi=function(t,e,n){return Ie&&!e&&Ie.selector?Ie.selector(t):rn(t)&&!n&&(nf||!ao())?of.call((e||pf).querySelectorAll(t),0):wn(t)?$S(t,n):bm(t)?of.call(t,0):t?[t]:[]},af=function(t){return t=yi(t)[0]||ma("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yi(e,n.querySelectorAll?n:n===t?ma("Invalid scope")||pf.createElement("div"):t)}},Tm=function(t){return t.sort(function(){return .5-Math.random()})},wm=function(t){if(Ve(t))return t;var e=Ji(t)?t:{each:t},n=fr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return rn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var x=(p||e).length,m=o[x],g,v,T,y,w,E,_,M,P;if(!m){if(P=e.grid==="auto"?0:(e.grid||[1,vi])[1],!P){for(_=-vi;_<(_=p[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(m=o[x]=[],g=l?Math.min(P,x)*h-.5:i%P,v=P===vi?0:l?x*d/P-.5:i/P|0,_=0,M=vi,E=0;E<x;E++)T=E%P-g,y=v-(E/P|0),m[E]=w=c?Math.abs(c==="y"?y:T):hm(T*T+y*y),w>_&&(_=w),w<M&&(M=w);i==="random"&&Tm(m),m.max=_-M,m.min=M,m.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(P>x?x-1:c?c==="y"?x/P:P:Math.max(P,x/P))||0)*(i==="edges"?-1:1),m.b=x<0?r-x:r,m.u=mn(e.amount||e.each)||0,n=n&&x<0?cM(n):n}return x=(m[u]-m.min)/m.max||0,Ue(m.b+(n?n(x):x)*m.v)+m.u}},lf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ps(n)?0:mn(n))}},Em=function(t,e){var n=wn(t),i,r;return!n&&Ji(t)&&(i=n=t.radius||vi,t.values?(t=yi(t.values),(r=!ps(t[0]))&&(i*=i)):t=lf(t.increment)),Gs(e,n?Ve(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=vi,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||ps(o)?h:h+mn(o)}:lf(t))},Am=function(t,e,n,i){return Gs(wn(t)?!e:n===!0?!!(n=0):!i,function(){return wn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},KS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},QS=function(t,e){return function(n){return t(parseFloat(n))+(e||mn(n))}},jS=function(t,e,n){return Rm(t,e,0,1,n)},Cm=function(t,e,n){return Gs(n,function(i){return t[~~e(i)]})},tM=function s(t,e,n){var i=e-t;return wn(t)?Cm(t,s(0,t.length),e):Gs(n,function(r){return(i+(r-t)%i)%i+t})},eM=function s(t,e,n){var i=e-t,r=i*2;return wn(t)?Cm(t,s(0,t.length-1),e):Gs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},lo=function(t){return t.replace(NS,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(US);return Am(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Rm=function(t,e,n,i,r){var o=e-t,a=i-n;return Gs(r,function(l){return n+((l-t)/o*a||0)})},nM=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=rn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(wn(t)&&!wn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var x=Math.min(u,~~p);return h[x](p-x)},n=e}else i||(t=so(wn(t)?[]:{},t));if(!h){for(l in e)Mf.call(a,t,l,"get",e[l]);r=function(p){return Af(p,a)||(o?t.p:t)}}}return Gs(n,r)},om=function(t,e,n){var i=t.labels,r=vi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},oi=function(t,e,n){var i=t.vars,r=i[e],o=Ie,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&zs.length&&Hc(),a&&(Ie=a),h=l?r.apply(c,l):r.call(c),Ie=o,h},ca=function(t){return Vs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pn),t.progress()<1&&oi(t,"onInterrupt"),t},io,Pm=[],Im=function(t){if(t)if(t=!t.name&&t.default||t,uf()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ga,render:Af,add:Mf,kill:vM,modifier:xM,rawVars:0},o={targetTest:0,get:0,getSetter:th,aliases:{},register:0};if(ao(),t!==i){if(Xn[e])return;li(i,li(Wc(t,r),o)),so(i.prototype,so(r,Wc(t,o))),Xn[i.prop=e]=i,t.targetTest&&(kc.push(i),mf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}pm(e,i),t.register&&t.register(En,i,On)}else Pm.push(t)},Ee=255,ha={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},$u=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},Lm=function(t,e,n){var i=t?ps(t)?[t>>16,t>>8&Ee,t&Ee]:0:ha.black,r,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ha[t])i=ha[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(em),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=$u(l+1/3,r,o),i[1]=$u(l,r,o),i[2]=$u(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(ff),n&&i.length<4&&(i[3]=1),i}else i=t.match(em)||ha.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Dm=function(t){var e=[],n=[],i=-1;return t.split(ds).forEach(function(r){var o=r.match(pr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},am=function(t,e,n){var i="",r=(t+i).match(ds),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=Lm(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Dm(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ds,"1").split(pr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ds),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},ds=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ha)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),iM=/hsl[a]?\(/,yf=function(t){var e=t.join(" "),n;if(ds.lastIndex=0,ds.test(e))return n=iM.test(e),t[1]=am(t[1],n),t[0]=am(t[0],n,Dm(t[1])),!0},_a,qn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,p=function x(m){var g=s()-i,v=m===!0,T,y,w,E;if((g>t||g<0)&&(n+=g-e),i+=g,w=i-n,T=w-o,(T>0||v)&&(E=++d.frame,u=w-d.time*1e3,d.time=w=w/1e3,o+=T+(T>=r?0:r-T),y=1),v||(l=c(x)),y)for(f=0;f<a.length;f++)a[f](w,u,E,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){fm&&(!nf&&uf()&&(Yi=nf=window,pf=Yi.document||{},ai.gsap=En,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(En.version),dm(Gc||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),Pm.forEach(Im)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},_a=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),_a=0,c=ga},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,v){var T=g?function(y,w,E,_){m(y,w,E,_),d.remove(T)}:m;return d.remove(m),a[v?"unshift":"push"](T),ao(),T},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),ao=function(){return!_a&&qn.wake()},oe={},sM=/^[\d.\-M][\d.\-,\s]/,rM=/["']/g,oM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(rM,"").trim():+c,i=l.substr(a+1).trim();return e},aM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},lM=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[oM(e[1])]:aM(t).split(",").map(_m)):oe._CE&&sM.test(t)?oe._CE("",t):n},cM=function(t){return function(e){return 1-t(1-e)}},fr=function(t,e){return t&&(Ve(t)?t:oe[t]||lM(t))||e},gr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Un(t,function(a){oe[a]=ai[a]=r,oe[o=a.toLowerCase()]=n;for(var l in r)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=r[l]}),r},Nm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ku=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/ef*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*DS((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Nm(a);return r=ef/r,l.config=function(c,h){return s(t,c,h)},l},Qu=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Nm(n);return i.config=function(r){return s(t,r)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;gr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;gr("Elastic",Ku("in"),Ku("out"),Ku());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};gr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);gr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});gr("Circ",function(s){return-(hm(1-s*s)-1)});gr("Sine",function(s){return s===1?1:-LS(s*PS)+1});gr("Back",Qu("in"),Qu("out"),Qu());oe.SteppedEase=oe.steps=ai.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Se;return function(a){return((i*ya(0,o,a)|0)+r)*n}}};pa.ease=oe["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return gf+=s+","+s+"Params,"});var Sf=function(t,e){this.id=IS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:xf,this.set=e?e.getSetter:th},xa=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,oo(this,+e.duration,1,1),this.data=e.data,Ie&&(this._ctx=Ie,Ie.data.push(this)),_a||qn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,oo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ao(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(jc(this,n),!r._dp||r.parent||ym(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ro(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Xc(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(ya(-Math.abs(this._delay),a,r),i!==!1),Qc(this),HS(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ao(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Se,o;if(r)for(this._tTime-=Se,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Se){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Zi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zS);var i=pn;return pn=n,vf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,rm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,rm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(xi(this,n),Yn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Se)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ve(n)?n:xm,l=function(){var h=i.then;i.then=null,r&&r(),Ve(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ca(this)},s})();li(xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var Tn=(function(s){cm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Yn(n.sortChildren),Oe&&Zi(n.parent||Oe,fs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Sm(fs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return fa(0,arguments,this),this},e.from=function(i,r,o){return fa(1,arguments,this),this},e.fromTo=function(i,r,o,a){return fa(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,ua(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Xe(i,r,xi(this,o),1),this},e.call=function(i,r,o){return Zi(this,Xe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Xe(i,o,xi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,ua(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,ua(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ue(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,x,m,g,v,T,y,w,E,_;if(this!==Oe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,T=this._ts,g=!T,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(u=Ue(h%m),h===l?(x=this._repeat,u=c):(w=Ue(h/m),x=~~w,x&&x===w&&(u=c,x--),u>c&&(u=c)),w=ro(this._tTime,m),!a&&this._tTime&&w!==x&&this._tTime-w*m-this._dur<=0&&(w=x),E&&x&1&&(u=c-u,_=1),x!==w&&!this._lock){var M=E&&w&1,P=M===(E&&x&1);if(x<w&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(_?0:Ue(x*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,w=x),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=YS(this,Ue(a),Ue(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!w&&(oi(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=-Se);break}}f=p}else{f=this._last;for(var R=i<0?i:u;f;){if(p=f._prev,(f._act||R<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,r,o||pn&&vf(f)),u!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=R?-Se:Se);break}}f=p}}if(v&&!r&&(this.pause(),v.render(u>=a?0:-Se)._zTime=u>=a?1:-1,this._ts))return this._start=y,Qc(this),this.render(i,r,o);this._onUpdate&&!r&&oi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Vs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(oi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ps(r)||(r=xi(this,r,i)),!(i instanceof xa)){if(wn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(rn(i))return this.addLabel(i,r);if(Ve(i))i=Xe.delayedCall(0,i);else return this}return this!==i?Zi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return rn(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&Kc(this,i),i===this._recent&&(this._recent=this._last),ur(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=xi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Xe.delayedCall(0,r||ga,o);return a.data="isPause",this._hasPause=1,Zi(this,a,xi(this,i))},e.removePause=function(i){var r=this._first;for(i=xi(this,i);r;)r._start===i&&r.data==="isPause"&&Vs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Bs!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=yi(i),l=this._first,c=ps(r),h;l;)l instanceof Xe?kS(l._targets,a)&&(c?(!Bs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=xi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=Xe.to(o,li({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&oo(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},r));return u?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,li({startAt:{time:xi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),om(this,xi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),om(this,xi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ue(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return ur(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ur(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=vi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Zi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ue(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;oo(o,o===Oe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Oe._ts&&(gm(Oe,Xc(i,Oe)),mm=qn.frame),qn.frame>=nm){nm+=Zn.autoSleep||120;var r=Oe._first;if((!r||!r._ts)&&Zn.autoSleep&&qn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||qn.sleep()}}},t})(xa);li(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var hM=function(t,e,n,i,r,o,a){var l=new On(this._pt,t,e,0,1,Ef,null,r),c=0,h=0,d,u,f,p,x,m,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=lo(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),u=n.match(Zu)||[];d=Zu.exec(i);)p=d[0],x=i.substring(c,d.index),f?f=(f+1)%5:x.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:m,c:p.charAt(1)==="="?mr(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Zu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(df.test(i)||g)&&(l.e=0),this._pt=l,l},Mf=function(t,e,n,i,r,o,a,l,c,h){Ve(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:Ve(d)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ve(d)?c?mM:Om:wf,p;if(rn(i)&&(~i.indexOf("random(")&&(i=lo(i)),i.charAt(1)==="="&&(p=mr(u,i)+(mn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||cf)return!isNaN(u*i)&&i!==""?(p=new On(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?_M:Fm,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&$c(e,i),hM.call(this,t,e,u,i,f,l||Zn.stringFilter,c))},uM=function(t,e,n,i,r){if(Ve(t)&&(t=da(t,r,e,n,i)),!Ji(t)||t.style&&t.nodeType||wn(t)||um(t))return rn(t)?da(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=da(t[a],r,e,n,i);return o},bf=function(t,e,n,i,r,o){var a,l,c,h;if(Xn[t]&&(a=new Xn[t]).init(r,a.rawVars?e[t]:uM(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new On(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==io))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Bs,cf,Tf=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,x=t._startAt,m=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:m,T=t._overwrite==="auto"&&!hf,y=t.timeline,w=i.easeReverse||d,E,_,M,P,R,D,N,H,I,V,W,B,tt;if(y&&(!u||!r)&&(r="none"),t._ease=fr(r,pa.ease),t._rEase=w&&(fr(w)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(H=m[0]?ks(m[0]).harness:0,B=H&&i[H.prop],E=Wc(i,mf),x&&(x._zTime<0&&x.progress(1),e<0&&h&&a&&!f?x.render(-1,!0):x.revert(h&&p?zc:BS),x._lazy=0),o){if(Vs(t._startAt=Xe.set(m,li({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return oi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn||!a&&!f)&&t._startAt.revert(zc),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!x){if(e&&(a=!1),M=li({overwrite:!1,data:"isFromStart",lazy:a&&!x&&Yn(l),immediateRender:a,stagger:0,parent:g},E),B&&(M[H.prop]=B),Vs(t._startAt=Xe.set(m,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn?t._startAt.revert(zc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Yn(l)||l&&!p,_=0;_<m.length;_++){if(R=m[_],N=R._gsap||_f(m)[_]._gsap,t._ptLookup[_]=V={},sf[N.id]&&zs.length&&Hc(),W=v===m?_:v.indexOf(R),H&&(I=new H).init(R,B||E,t,W,v)!==!1&&(t._pt=P=new On(t._pt,R,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(O){V[O]=P}),I.priority&&(D=1)),!H||B)for(M in E)Xn[M]&&(I=bf(M,E,t,W,R,v))?I.priority&&(D=1):V[M]=P=Mf.call(t,R,M,"get",E[M],W,v,0,i.stringFilter);t._op&&t._op[_]&&t.kill(R,t._op[_]),T&&t._pt&&(Bs=t,Oe.killTweensOf(R,V,t.globalTime(e)),tt=!t.parent,Bs=0),t._pt&&l&&(sf[N.id]=1)}D&&Cf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,u&&e<=0&&y.render(vi,!0,!0)},fM=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return cf=1,t.vars[e]="+=0",Tf(t,a),cf=0,l?ma(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ge(n)+mn(d.e)),d.b&&(d.b=h.s+mn(d.b))},dM=function(t,e){var n=t[0]?ks(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=so({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},pM=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(wn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},da=function(t,e,n,i,r){return Ve(t)?t.call(e,n,i,r):rn(t)&&~t.indexOf("random(")?lo(t):t},Yc=gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Um={};Un(Yc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Um[s]=1});Yc=Yc.split(",");var Xe=(function(s){cm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ua(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,x=l.defaults,m=l.scrollTrigger,g=i.parent||Oe,v=(wn(n)||um(n)?ps(n[0]):"length"in i)?[n]:yi(n),T,y,w,E,_,M,P,R;if(a._targets=v.length?_f(v):ma("GSAP target "+n+" not found. https://gsap.com",!Zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||Bc(c)||Bc(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(T=a.timeline=new Tn({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:v}),T.kill(),T.parent=T._dp=fs(a),T._start=0,u||Bc(c)||Bc(h)){if(E=v.length,P=u&&wm(u),Ji(u))for(_ in u)~Yc.indexOf(_)&&(R||(R={}),R[_]=u[_]);for(y=0;y<E;y++)w=Wc(i,Um),w.stagger=0,D&&(w.easeReverse=D),R&&so(w,R),M=v[y],w.duration=+da(c,fs(a),y,M,v),w.delay=(+da(h,fs(a),y,M,v)||0)-a._delay,!u&&E===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),T.to(M,w,P?P(y,M,v):0),T._ease=oe.none;T.duration()?c=h=0:a.timeline=0}else if(p){ua(li(T.vars.defaults,{ease:"none"})),T._ease=fr(p.ease||i.ease||"none");var N=0,H,I,V;if(wn(p))p.forEach(function(W){return T.to(v,W,">")}),T.duration();else{w={};for(_ in p)_==="ease"||_==="easeEach"||pM(_,p[_],w,p.easeEach);for(_ in w)for(H=w[_].sort(function(W,B){return W.t-B.t}),N=0,y=0;y<H.length;y++)I=H[y],V={ease:I.e,duration:(I.t-(y?H[y-1].t:0))/100*c},V[_]=I.v,T.to(v,V,N),N+=V.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return f===!0&&!hf&&(Bs=fs(a),Oe.killTweensOf(v),Bs=0),Zi(g,fs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ue(g._time)&&Yn(d)&&WS(fs(a))&&g.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),m&&Sm(fs(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Se&&!h?l:i<Se?0:i,u,f,p,x,m,g,v,T;if(!c)qS(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,T=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,r,o);if(u=Ue(d%x),d===l?(p=this._repeat,u=c):(m=Ue(d/x),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=ro(this._tTime,x),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==x&&this._initted&&(this._lock=o=1,this.render(Ue(x*p),!0).invalidate()._lock=0)}if(!this._initted){if(Mm(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var w=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(oi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&rf(this,i,r,o),oi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&oi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&rf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Vs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(oi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){_a||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Tf(this,c),h=this._ease(c/this._dur),fM(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(jc(this,0),this.parent||vm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Bs&&Bs.vars.overwrite!==!0)._first||ca(this),this.parent&&o!==this.timeline.totalDuration()&&oo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yi(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,x,m,g;if((!r||r==="all")&&GS(a,l))return r==="all"&&(this._pt=0),ca(this);for(d=this._op=this._op||[],r!=="all"&&(rn(r)&&(x={},Un(r,function(v){return x[v]=1}),r=x),r=dM(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],r==="all"?(d[g]=r,p=u,f={}):(f=d[g]=d[g]||{},p=r);for(x in p)m=u&&u[x],m&&((!("kill"in m.d)||m.d.kill(x)===!0)&&Kc(this,m,"_pt"),delete u[x]),f!=="all"&&(f[x]=1)}return this._initted&&!this._pt&&h&&ca(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return fa(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return fa(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Oe.killTweensOf(i,r,o)},t})(xa);li(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(s){Xe[s]=function(){var t=new Tn,e=of.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var wf=function(t,e,n){return t[e]=n},Om=function(t,e,n){return t[e](n)},mM=function(t,e,n,i){return t[e](i.fp,n)},gM=function(t,e,n){return t.setAttribute(e,n)},th=function(t,e){return Ve(t[e])?Om:Jc(t[e])&&t.setAttribute?gM:wf},Fm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_M=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ef=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Af=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},xM=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},vM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Kc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},yM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Cf=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},On=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Fm,this.d=l||this,this.set=c||wf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=yM,this.m=n,this.mt=r,this.tween=i},s})();Un(gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return mf[s]=1});ai.TweenMax=ai.TweenLite=Xe;ai.TimelineLite=ai.TimelineMax=Tn;Oe=new Tn({sortChildren:!1,defaults:pa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=yf;var dr=[],Vc={},SM=[],lm=0,MM=0,ju=function(t){return(Vc[t]||SM).map(function(e){return e()})},va=function(){var t=Date.now(),e=[];t-lm>2&&(ju("matchMediaInit"),dr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Yi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),ju("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),lm=t,ju("matchMedia"))},Bm=(function(){function s(e,n){this.selector=n&&af(n),this.data=[],this._r=[],this.isReverted=!1,this.id=MM++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ve(n)&&(r=i,i=n,n=Ve);var o=this,a=function(){var c=Ie,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=af(r)),Ie=o,d=i.apply(o,arguments),Ve(d)&&o._r.push(d),Ie=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ve?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ie;Ie=null,n(this),Ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=dr.length;o--;)dr[o].id===this.id&&dr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(va):a.removeEventListener("change",va)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),bM=(function(){function s(e){this.contexts=[],this.scope=e,Ie&&Ie.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Ji(n)||(n={matches:n});var o=new Bm(0,r||this.scope),a=o.conditions={},l,c,h;Ie&&!o.selector&&(o.selector=Ie.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Yi.matchMedia(n[c]),l&&(dr.indexOf(o)<0&&dr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(va):l.addEventListener("change",va),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Zc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Im(i)})},timeline:function(t){return new Tn(t)},getTweensOf:function(t,e){return Oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=yi(t)[0]);var r=ks(t||{}).get,o=n?xm:_m;return n==="native"&&(n=""),t&&(e?o((Xn[e]&&Xn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Xn[a]&&Xn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=yi(t),t.length>1){var i=t.map(function(h){return En.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Xn[e],a=ks(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;io._pt=0,d.init(t,n?h+n:h,io,0,[t]),d.render(1,d),io._pt&&Af(1,io)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=En.to(t,li((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=fr(t.ease,pa.ease)),im(pa,t||{})},config:function(t){return im(Zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!ai[a]&&ma(e+" effect requires "+a+" plugin.")}),Ju[e]=function(a,l,c){return n(yi(a),li(l||{},r),c)},o&&(Tn.prototype[e]=function(a,l,c){return this.add(Ju[e](a,Ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=fr(e)},parseEase:function(t,e){return arguments.length?fr(t,e):oe},getById:function(t){return Oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Tn(t),i,r;for(n.smoothChildTiming=Yn(t.smoothChildTiming),Oe.remove(n),n._dp=0,n._time=n._tTime=Oe._time,i=Oe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&Zi(n,i,i._start-i._delay),i=r;return Zi(Oe,n,0),n},context:function(t,e){return t?new Bm(t,e):Ie},matchMedia:function(t){return new bM(t)},matchMediaRefresh:function(){return dr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||va()},addEventListener:function(t,e){var n=Vc[t]||(Vc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Vc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:tM,wrapYoyo:eM,distribute:wm,random:Am,snap:Em,normalize:jS,getUnit:mn,clamp:JS,splitColor:Lm,toArray:yi,selector:af,mapRange:Rm,pipe:KS,unitize:QS,interpolate:nM,shuffle:Tm},install:dm,effects:Ju,ticker:qn,updateRoot:Tn.updateRoot,plugins:Xn,globalTimeline:Oe,core:{PropTween:On,globals:pm,Tween:Xe,Timeline:Tn,Animation:xa,getCache:ks,_removeLinkedListItem:Kc,reverting:function(){return pn},context:function(t){return t&&Ie&&(Ie.data.push(t),t._ctx=Ie),Ie},suppressOverwrites:function(t){return hf=t}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Zc[s]=Xe[s]});qn.add(Tn.updateRoot);io=Zc.to({},{duration:0});var TM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},wM=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=TM(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},tf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(rn(r)&&(l={},Un(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}wM(a,r)}}}},En=Zc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},tf("roundProps",lf),tf("modifiers"),tf("snap",Em))||Zc;Xe.version=Tn.version=En.version="3.15.1";fm=1;uf()&&ao();var EM=oe.Power0,AM=oe.Power1,CM=oe.Power2,RM=oe.Power3,PM=oe.Power4,IM=oe.Linear,LM=oe.Quad,DM=oe.Cubic,NM=oe.Quart,UM=oe.Quint,OM=oe.Strong,FM=oe.Elastic,BM=oe.Back,zM=oe.SteppedEase,kM=oe.Bounce,VM=oe.Sine,GM=oe.Expo,HM=oe.Circ;var zm,Hs,ho,Nf,yr,WM,km,Uf,XM=function(){return typeof window!="undefined"},gs={},vr=180/Math.PI,uo=Math.PI/180,co=Math.atan2,Vm=1e8,Of=/([A-Z])/g,qM=/(left|right|width|margin|padding|x)/i,YM=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ZM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},JM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$M=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},KM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Jm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},$m=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},QM=function(t,e,n){return t.style[e]=n},jM=function(t,e,n){return t.style.setProperty(e,n)},tb=function(t,e,n){return t._gsap[e]=n},eb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},nb=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},ib=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Fe="transform",Jn=Fe+"Origin",sb=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in gs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=$i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ms(i,a)}):this.tfm[t]=o.x?o[t]:ms(i,t),t===Jn&&(this.tfm.zOrigin=o.zOrigin);else return $i.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Fe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jn,e,"")),t=Fe}(r||e)&&this.props.push(t,e,r[t])},Km=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},rb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Of,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Uf(),(!r||!r.isStart)&&!n[Fe]&&(Km(n),i.zOrigin&&n[Jn]&&(n[Jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qm=function(t,e){var n={target:t,props:[],revert:rb,save:sb};return t._gsap||En.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},jm,If=function(t,e){var n=Hs.createElementNS?Hs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Hs.createElement(t);return n&&n.style?n:Hs.createElement(t)},ci=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Of,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,fo(e)||e,1)||""},Gm="O,Moz,ms,Ms,Webkit".split(","),fo=function(t,e,n){var i=e||yr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Gm[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Gm[o]:"")+t},Lf=function(){XM()&&window.document&&(zm=window,Hs=zm.document,ho=Hs.documentElement,yr=If("div")||{style:{}},WM=If("div"),Fe=fo(Fe),Jn=Fe+"Origin",yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jm=!!fo("perspective"),Uf=En.core.reverting,Nf=1)},Hm=function(t){var e=t.ownerSVGElement,n=If("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ho.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ho.removeChild(n),r},Wm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},tg=function(t){var e,n;try{e=t.getBBox()}catch{e=Hm(t),n=1}return e&&(e.width||e.height)||n||(e=Hm(t)),e&&!e.width&&!e.x&&!e.y?{x:+Wm(t,["x","cx","x1"])||0,y:+Wm(t,["y","cy","y1"])||0,width:0,height:0}:e},eg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&tg(t))},Xs=function(t,e){if(e){var n=t.style,i;e in gs&&e!==Jn&&(e=Fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Of,"-$1").toLowerCase())):n.removeAttribute(e)}},Ws=function(t,e,n,i,r,o){var a=new On(t._pt,e,n,0,1,o?$m:Jm);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Xm={deg:1,rad:1,turn:1},ob={grid:1,flex:1},qs=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=yr.style,l=qM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,x,m,g;if(i===o||!r||Xm[i]||Xm[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),g=t.getCTM&&eg(t),(f||o==="%")&&(gs[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Ge(f?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(u?o:i),x=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Hs||!x.appendChild)&&(x=Hs.body),m=x._gsap,m&&f&&m.width&&l&&m.time===qn.time&&!m.uncache)return Ge(r/m.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,p=t[h],v?t.style[e]=v:Xs(t,e)}else(f||o==="%")&&!ob[ci(x,"display")]&&(a.position=ci(t,"position")),x===t&&(a.position="static"),x.appendChild(yr),p=yr[h],x.removeChild(yr),a.position="absolute";return l&&f&&(m=ks(x),m.time=qn.time,m.width=x[h]),Ge(u?p*r/d:p&&r?d/p*r:0)},ms=function(t,e,n,i){var r;return Nf||Lf(),e in $i&&e!=="transform"&&(e=$i[e],~e.indexOf(",")&&(e=e.split(",")[0])),gs[e]&&e!=="transform"?(r=ba(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:nh(ci(t,Jn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=eh[e]&&eh[e](t,e,n)||ci(t,e)||xf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qs(t,e,r,n)+n:r},ab=function(t,e,n,i){if(!n||n==="none"){var r=fo(e,t,1),o=r&&ci(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ci(t,"borderTopColor"))}var a=new On(this._pt,t.style,e,0,1,Ef),l=0,c=0,h,d,u,f,p,x,m,g,v,T,y,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ci(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=t.style[e],t.style[e]=i,i=ci(t,e)||i,x?t.style[e]=x:Xs(t,e)),h=[n,i],yf(h),n=h[0],i=h[1],u=n.match(pr)||[],w=i.match(pr)||[],w.length){for(;d=pr.exec(i);)m=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(x=u[c++]||"")&&(f=parseFloat(x)||0,y=x.substr((f+"").length),m.charAt(1)==="="&&(m=mr(f,m)+y),g=parseFloat(m),T=m.substr((g+"").length),l=pr.lastIndex-T.length,T||(T=T||Zn.units[e]||y,l===i.length&&(i+=T,a.e+=T)),y!==T&&(f=qs(t,e,x,T)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:g-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?$m:Jm;return df.test(i)&&(a.e=0),this._pt=a,a},qm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=qm[n]||n,e[1]=qm[i]||i,e.join(" ")},cb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],gs[a]&&(l=1,a=a==="transformOrigin"?Jn:Fe),Xs(n,a);l&&(Xs(n,Fe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ba(n,1),o.uncache=1,Km(i)))}},eh={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new On(t._pt,e,n,0,0,cb);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ma=[1,0,0,1,0,0],ng={},ig=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ym=function(t){var e=ci(t,Fe);return ig(e)?Ma:e.substr(7).match(ff).map(Ge)},Ff=function(t,e){var n=t._gsap||ks(t),i=t.style,r=Ym(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ma:r):(r===Ma&&!t.offsetParent&&t!==ho&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ho.appendChild(t)),r=Ym(t),l?i.display=l:Xs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ho.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Df=function(t,e,n,i,r,o){var a=t._gsap,l=r||Ff(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],x=l[2],m=l[3],g=l[4],v=l[5],T=e.split(" "),y=parseFloat(T[0])||0,w=parseFloat(T[1])||0,E,_,M,P;n?l!==Ma&&(_=f*m-p*x)&&(M=y*(m/_)+w*(-x/_)+(x*v-m*g)/_,P=y*(-p/_)+w*(f/_)-(f*v-p*g)/_,y=M,w=P):(E=tg(t),y=E.x+(~T[0].indexOf("%")?y/100*E.width:y),w=E.y+(~(T[1]||T[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&a.smooth?(g=y-c,v=w-h,a.xOffset=d+(g*f+v*x)-g,a.yOffset=u+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Jn]="0px 0px",o&&(Ws(o,a,"xOrigin",c,y),Ws(o,a,"yOrigin",h,w),Ws(o,a,"xOffset",d,a.xOffset),Ws(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+w)},ba=function(t,e){var n=t._gsap||new Sf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ci(t,Jn)||"0",h,d,u,f,p,x,m,g,v,T,y,w,E,_,M,P,R,D,N,H,I,V,W,B,tt,O,A,$,ft,Ct,q,rt;return h=d=u=x=m=g=v=T=y=0,f=p=1,n.svg=!!(t.getCTM&&eg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Fe]!=="none"?l[Fe]:"")),i.scale=i.rotate=i.translate="none"),_=Ff(t,n.svg),n.svg&&(n.uncache?(tt=t.getBBox(),c=n.xOrigin-tt.x+"px "+(n.yOrigin-tt.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Df(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,_)),w=n.xOrigin||0,E=n.yOrigin||0,_!==Ma&&(D=_[0],N=_[1],H=_[2],I=_[3],h=V=_[4],d=W=_[5],_.length===6?(f=Math.sqrt(D*D+N*N),p=Math.sqrt(I*I+H*H),x=D||N?co(N,D)*vr:0,v=H||I?co(H,I)*vr+x:0,v&&(p*=Math.abs(Math.cos(v*uo))),n.svg&&(h-=w-(w*D+E*H),d-=E-(w*N+E*I))):(rt=_[6],Ct=_[7],A=_[8],$=_[9],ft=_[10],q=_[11],h=_[12],d=_[13],u=_[14],M=co(rt,ft),m=M*vr,M&&(P=Math.cos(-M),R=Math.sin(-M),B=V*P+A*R,tt=W*P+$*R,O=rt*P+ft*R,A=V*-R+A*P,$=W*-R+$*P,ft=rt*-R+ft*P,q=Ct*-R+q*P,V=B,W=tt,rt=O),M=co(-H,ft),g=M*vr,M&&(P=Math.cos(-M),R=Math.sin(-M),B=D*P-A*R,tt=N*P-$*R,O=H*P-ft*R,q=I*R+q*P,D=B,N=tt,H=O),M=co(N,D),x=M*vr,M&&(P=Math.cos(M),R=Math.sin(M),B=D*P+N*R,tt=V*P+W*R,N=N*P-D*R,W=W*P-V*R,D=B,V=tt),m&&Math.abs(m)+Math.abs(x)>359.9&&(m=x=0,g=180-g),f=Ge(Math.sqrt(D*D+N*N+H*H)),p=Ge(Math.sqrt(W*W+rt*rt)),M=co(V,W),v=Math.abs(M)>2e-4?M*vr:0,y=q?1/(q<0?-q:q):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!ig(ci(t,Fe)),B&&t.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ge(f),n.scaleY=Ge(p),n.rotation=Ge(x)+a,n.rotationX=Ge(m)+a,n.rotationY=Ge(g)+a,n.skewX=v+a,n.skewY=T+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Jn]=nh(c)),n.xOffset=n.yOffset=0,n.force3D=Zn.force3D,n.renderTransform=n.svg?ub:jm?sg:hb,n.uncache=0,n},nh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Rf=function(t,e,n){var i=mn(e);return Ge(parseFloat(e)+parseFloat(qs(t,"x",n+"px",i)))+i},hb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,sg(t,e)},_r="0deg",Sa="0px",xr=") ",sg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,x=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,T=n.zOrigin,y="",w=g==="auto"&&t&&t!==1||g===!0;if(T&&(d!==_r||h!==_r)){var E=parseFloat(h)*uo,_=Math.sin(E),M=Math.cos(E),P;E=parseFloat(d)*uo,P=Math.cos(E),o=Rf(v,o,_*P*-T),a=Rf(v,a,-Math.sin(E)*-T),l=Rf(v,l,M*P*-T+T)}m!==Sa&&(y+="perspective("+m+xr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(w||o!==Sa||a!==Sa||l!==Sa)&&(y+=l!==Sa||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xr),c!==_r&&(y+="rotate("+c+xr),h!==_r&&(y+="rotateY("+h+xr),d!==_r&&(y+="rotateX("+d+xr),(u!==_r||f!==_r)&&(y+="skew("+u+", "+f+xr),(p!==1||x!==1)&&(y+="scale("+p+", "+x+xr),v.style[Fe]=y||"translate(0, 0)"},ub=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,x=n.yOrigin,m=n.xOffset,g=n.yOffset,v=n.forceCSS,T=parseFloat(o),y=parseFloat(a),w,E,_,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=uo,c*=uo,w=Math.cos(l)*d,E=Math.sin(l)*d,_=Math.sin(l-c)*-u,M=Math.cos(l-c)*u,c&&(h*=uo,P=Math.tan(c-h),P=Math.sqrt(1+P*P),_*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),w*=P,E*=P)),w=Ge(w),E=Ge(E),_=Ge(_),M=Ge(M)):(w=d,M=u,E=_=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=qs(f,"x",o,"px"),y=qs(f,"y",a,"px")),(p||x||m||g)&&(T=Ge(T+p-(p*w+x*_)+m),y=Ge(y+x-(p*E+x*M)+g)),(i||r)&&(P=f.getBBox(),T=Ge(T+i/100*P.width),y=Ge(y+r/100*P.height)),P="matrix("+w+","+E+","+_+","+M+","+T+","+y+")",f.setAttribute("transform",P),v&&(f.style[Fe]=P)},fb=function(t,e,n,i,r){var o=360,a=rn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?vr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Vm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Vm)%o-~~(c/o)*o)),t._pt=u=new On(t._pt,e,n,i,c,ZM),u.e=h,u.u="deg",t._props.push(n),u},Zm=function(t,e){for(var n in e)t[n]=e[n];return t},db=function(t,e,n){var i=Zm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Fe]=e,a=ba(n,1),Xs(n,Fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Fe],o[Fe]=e,a=ba(n,1),o[Fe]=c);for(l in gs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=mn(c),p=mn(h),d=f!==p?qs(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new On(t._pt,a,l,d,u-d,Pf),t._pt.u=p||0,t._props.push(l));Zm(a,i)};Un("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});eh[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return ms(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,x){return f[p]=u[x]=u[x]||u[(x-1)/2|0]}),a.init(l,f,d)}});var Bf={name:"css",register:Lf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,x,m,g,v,T,y,w,E,_,M,P;Nf||Lf(),this.styles=this.styles||Qm(t),M=this.styles.props,this.tween=n;for(x in e)if(x!=="autoRound"&&(h=e[x],!(Xn[x]&&bf(x,e,n,i,t,r)))){if(f=typeof h,p=eh[x],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=lo(h)),p)p(this,t,x,h,n)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",ds.lastIndex=0,ds.test(c)||(m=mn(c),g=mn(h),g?m!==g&&(c=qs(t,x,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,x),o.push(x),M.push(x,0,a[x]);else if(f!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,t,r):l[x],rn(c)&&~c.indexOf("random(")&&(c=lo(c)),mn(c+"")||c==="auto"||(c+=Zn.units[x]||mn(ms(t,x))||""),(c+"").charAt(1)==="="&&(c=ms(t,x))):c=ms(t,x),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),x in $i&&(x==="autoAlpha"&&(u===1&&ms(t,"visibility")==="hidden"&&d&&(u=0),M.push("visibility",0,a.visibility),Ws(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=$i[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in gs,T){if(this.styles.save(x),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ci(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=ci(t,"perspective"),R?t.style.perspective=R:Xs(t,"perspective")}d=parseFloat(h)}if(y||(w=t._gsap,w.renderTransform&&!e.parseTransform||ba(t,e.parseTransform),E=e.smoothOrigin!==!1&&w.smooth,y=this._pt=new On(this._pt,a,Fe,0,1,w.renderTransform,w,0,-1),y.dep=1),x==="scale")this._pt=new On(this._pt,w,"scaleY",w.scaleY,(v?mr(w.scaleY,v+d):d)-w.scaleY||0,Pf),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){M.push(Jn,0,a[Jn]),h=lb(h),w.svg?Df(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==w.zOrigin&&Ws(this,w,"zOrigin",w.zOrigin,g),Ws(this,a,x,nh(c),nh(h)));continue}else if(x==="svgOrigin"){Df(t,h,1,E,0,this);continue}else if(x in ng){fb(this,w,x,u,v?mr(u,v+h):h);continue}else if(x==="smoothOrigin"){Ws(this,w,"smooth",w.smooth,h);continue}else if(x==="force3D"){w[x]=h;continue}else if(x==="transform"){db(this,h,t);continue}}else x in a||(x=fo(x)||x);if(T||(d||d===0)&&(u||u===0)&&!YM.test(h)&&x in a)m=(c+"").substr((u+"").length),d||(d=0),g=mn(h)||(x in Zn.units?Zn.units[x]:m),m!==g&&(u=qs(t,x,c,g)),this._pt=new On(this._pt,T?w:a,x,u,(v?mr(u,v+d):d)-u,!T&&(g==="px"||x==="zIndex")&&e.autoRound!==!1?KM:Pf),this._pt.u=g||0,T&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=$M):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=JM);else if(x in a)ab.call(this,t,x,c,v?v+h:h);else if(x in t)this.add(t,x,c||t[x],v?v+h:h,i,r);else if(x!=="parseTransform"){$c(x,h);continue}T||(x in a?M.push(x,0,a[x]):typeof t[x]=="function"?M.push(x,2,t[x]()):M.push(x,1,c||t[x])),o.push(x)}}_&&Cf(this)},render:function(t,e){if(e.tween._time||!Uf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ms,aliases:$i,getSetter:function(t,e,n){var i=$i[e];return i&&i.indexOf(",")<0&&(e=i),e in gs&&e!==Jn&&(t._gsap.x||ms(t,"x"))?n&&km===n?e==="scale"?eb:tb:(km=n||{})&&(e==="scale"?nb:ib):t.style&&!Jc(t.style[e])?QM:~e.indexOf("-")?jM:th(t,e)},core:{_removeProperty:Xs,_getMatrix:Ff}};En.utils.checkPrefix=fo;En.core.getStyleSaver=Qm;(function(s,t,e,n){var i=Un(s+","+t+","+e,function(r){gs[r]=1});Un(t,function(r){Zn.units[r]="deg",ng[r]=1}),$i[i[13]]=s+","+t,Un(n,function(r){var o=r.split(":");$i[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Zn.units[s]="px"});En.registerPlugin(Bf);var ae=En.registerPlugin(Bf)||En,qE=ae.core.Tween;function rg(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function pb(s,t,e){return t&&rg(s.prototype,t),e&&rg(s,e),s}var gn,rh,mb,$n,Ys,Zs,mo,ag,Sr,go,lg,_s,Ni,cg,hg=function(){return gn||typeof window!="undefined"&&(gn=window.gsap)&&gn.registerPlugin&&gn},ug=1,po=[],Jt=[],Ui=[],wa=Date.now,zf=function(t,e){return e},gb=function(){var t=go.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Jt),i.push.apply(i,Ui),Jt=n,Ui=i,zf=function(o,a){return e[o](a)}},vs=function(t,e){return~Ui.indexOf(t)&&Ui[Ui.indexOf(t)+1][e]},Ea=function(t){return!!~lg.indexOf(t)},Bn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ih="scrollLeft",sh="scrollTop",kf=function(){return _s&&_s.isPressed||Jt.cache++},oh=function(t,e){var n=function i(r){if(r||r===0){ug&&$n.history.scrollRestoration!=="manual"&&($n.history.scrollRestoration="manual");var o=_s&&_s.isPressed;r=i.v=Math.round(r)||(_s&&_s.iOS?1:0),t(r),i.cacheID=Jt.cache,o&&zf("ss",r)}else(e||Jt.cache!==i.cacheID||zf("ref"))&&(i.cacheID=Jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},An={s:ih,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:oh(function(s){return arguments.length?$n.scrollTo(s,Ke.sc()):$n.pageXOffset||Ys[ih]||Zs[ih]||mo[ih]||0})},Ke={s:sh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:oh(function(s){return arguments.length?$n.scrollTo(An.sc(),s):$n.pageYOffset||Ys[sh]||Zs[sh]||mo[sh]||0})},zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||gn.utils.toArray)(t)[0]||(typeof t=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},_b=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},xs=function(t,e){var n=e.s,i=e.sc;Ea(t)&&(t=Ys.scrollingElement||Zs);var r=Jt.indexOf(t),o=i===Ke.sc?1:2;!~r&&(r=Jt.push(t)-1),Jt[r+o]||Bn(t,"scroll",kf);var a=Jt[r+o],l=a||(Jt[r+o]=oh(vs(t,n),!0)||(Ea(t)?i:oh(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=gn.getProperty(t,"scrollBehavior")==="smooth"),l},ah=function(t,e,n){var i=t,r=t,o=wa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,x){var m=wa();x||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(p){var x=a,m=r,g=wa();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-x)*1e3};return{update:h,reset:d,getVelocity:u}},Ta=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},og=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},fg=function(){go=gn.core.globals().ScrollTrigger,go&&go.core&&gb()},dg=function(t){return gn=t||hg(),!rh&&gn&&typeof document!="undefined"&&document.body&&($n=window,Ys=document,Zs=Ys.documentElement,mo=Ys.body,lg=[$n,Ys,Zs,mo],mb=gn.utils.clamp,cg=gn.core.context||function(){},Sr="onpointerenter"in mo?"pointer":"mouse",ag=He.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ni=He.eventTypes=("ontouchstart"in Zs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ug=0},500),rh=1),go||fg(),rh};An.op=Ke;Jt.cache=0;var He=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){rh||dg(gn)||console.warn("Please gsap.registerPlugin(Observer)"),go||fg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,x=n.event,m=n.onDragStart,g=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,w=n.onRight,E=n.onLeft,_=n.onUp,M=n.onDown,P=n.onChangeX,R=n.onChangeY,D=n.onChange,N=n.onToggleX,H=n.onToggleY,I=n.onHover,V=n.onHoverEnd,W=n.onMove,B=n.ignoreCheck,tt=n.isNormalizer,O=n.onGestureStart,A=n.onGestureEnd,$=n.onWheel,ft=n.onEnable,Ct=n.onDisable,q=n.onClick,rt=n.scrollSpeed,_t=n.capture,yt=n.allowClicks,ct=n.lockAxis,Et=n.onLockAxis;this.target=a=zn(a)||Zs,this.vars=n,f&&(f=gn.utils.toArray(f)),i=i||1e-9,r=r||0,p=p||1,rt=rt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(mo).lineHeight)||22);var le,At,Wt,Dt,Ft,fe,ce,Z=this,jt=0,qe=0,Me=n.passive||!h&&n.passive!==!1,se=xs(a,An),Be=xs(a,Ke),We=se(),F=Be(),me=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ni[0]==="pointerdown",he=Ea(a),Gt=a.ownerDocument||Ys,dt=[0,0,0],de=[0,0,0],Nt=0,Bt=function(){return Nt=wa()},C=function(gt,st){return(Z.event=gt)&&f&&_b(gt.target,f)||st&&me&&gt.pointerType!=="touch"||B&&B(gt,st)},S=function(){Z._vx.reset(),Z._vy.reset(),At.pause(),d&&d(Z)},k=function(){var gt=Z.deltaX=og(dt),st=Z.deltaY=og(de),et=Math.abs(gt)>=i,vt=Math.abs(st)>=i;D&&(et||vt)&&D(Z,gt,st,dt,de),et&&(w&&Z.deltaX>0&&w(Z),E&&Z.deltaX<0&&E(Z),P&&P(Z),N&&Z.deltaX<0!=jt<0&&N(Z),jt=Z.deltaX,dt[0]=dt[1]=dt[2]=0),vt&&(M&&Z.deltaY>0&&M(Z),_&&Z.deltaY<0&&_(Z),R&&R(Z),H&&Z.deltaY<0!=qe<0&&H(Z),qe=Z.deltaY,de[0]=de[1]=de[2]=0),(Dt||Wt)&&(W&&W(Z),Wt&&(m&&Wt===1&&m(Z),v&&v(Z),Wt=0),Dt=!1),fe&&!(fe=!1)&&Et&&Et(Z),Ft&&($(Z),Ft=!1),le=0},ot=function(gt,st,et){dt[et]+=gt,de[et]+=st,Z._vx.update(gt),Z._vy.update(st),c?le||(le=requestAnimationFrame(k)):k()},it=function(gt,st){ct&&!ce&&(Z.axis=ce=Math.abs(gt)>Math.abs(st)?"x":"y",fe=!0),ce!=="y"&&(dt[2]+=gt,Z._vx.update(gt,!0)),ce!=="x"&&(de[2]+=st,Z._vy.update(st,!0)),c?le||(le=requestAnimationFrame(k)):k()},ut=function(gt){if(!C(gt,1)){gt=Ta(gt,h);var st=gt.clientX,et=gt.clientY,vt=st-Z.x,nt=et-Z.y,Tt=Z.isDragging;Z.x=st,Z.y=et,(Tt||(vt||nt)&&(Math.abs(Z.startX-st)>=r||Math.abs(Z.startY-et)>=r))&&(Wt||(Wt=Tt?2:1),Tt||(Z.isDragging=!0),it(vt,nt))}},xt=Z.onPress=function(at){C(at,1)||at&&at.button||(Z.axis=ce=null,At.pause(),Z.isPressed=!0,at=Ta(at),jt=qe=0,Z.startX=Z.x=at.clientX,Z.startY=Z.y=at.clientY,Z._vx.reset(),Z._vy.reset(),Bn(tt?a:Gt,Ni[1],ut,Me,!0),Z.deltaX=Z.deltaY=0,T&&T(Z))},G=Z.onRelease=function(at){if(!C(at,1)){Fn(tt?a:Gt,Ni[1],ut,!0);var gt=!isNaN(Z.y-Z.startY),st=Z.isDragging,et=st&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),vt=Ta(at);!et&&gt&&(Z._vx.reset(),Z._vy.reset(),h&&yt&&gn.delayedCall(.08,function(){if(wa()-Nt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Gt.createEvent){var nt=Gt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,$n,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,d&&st&&!tt&&At.restart(!0),Wt&&k(),g&&st&&g(Z),y&&y(Z,et)}},j=function(gt){return gt.touches&&gt.touches.length>1&&(Z.isGesturing=!0)&&O(gt,Z.isDragging)},ht=function(){return(Z.isGesturing=!1)||A(Z)},L=function(gt){if(!C(gt)){var st=se(),et=Be();ot((st-We)*rt,(et-F)*rt,1),We=st,F=et,d&&At.restart(!0)}},Q=function(gt){if(!C(gt)){gt=Ta(gt,h),$&&(Ft=!0);var st=(gt.deltaMode===1?l:gt.deltaMode===2?$n.innerHeight:1)*p;ot(gt.deltaX*st,gt.deltaY*st,0),d&&!tt&&At.restart(!0)}},K=function(gt){if(!C(gt)){var st=gt.clientX,et=gt.clientY,vt=st-Z.x,nt=et-Z.y;Z.x=st,Z.y=et,Dt=!0,d&&At.restart(!0),(vt||nt)&&it(vt,nt)}},pt=function(gt){Z.event=gt,I(Z)},lt=function(gt){Z.event=gt,V(Z)},mt=function(gt){return C(gt)||Ta(gt,h)&&q(Z)};At=Z._dc=gn.delayedCall(u||.25,S).pause(),Z.deltaX=Z.deltaY=0,Z._vx=ah(0,50,!0),Z._vy=ah(0,50,!0),Z.scrollX=se,Z.scrollY=Be,Z.isDragging=Z.isGesturing=Z.isPressed=!1,cg(this),Z.enable=function(at){return Z.isEnabled||(Bn(he?Gt:a,"scroll",kf),o.indexOf("scroll")>=0&&Bn(he?Gt:a,"scroll",L,Me,_t),o.indexOf("wheel")>=0&&Bn(a,"wheel",Q,Me,_t),(o.indexOf("touch")>=0&&ag||o.indexOf("pointer")>=0)&&(Bn(a,Ni[0],xt,Me,_t),Bn(Gt,Ni[2],G),Bn(Gt,Ni[3],G),yt&&Bn(a,"click",Bt,!0,!0),q&&Bn(a,"click",mt),O&&Bn(Gt,"gesturestart",j),A&&Bn(Gt,"gestureend",ht),I&&Bn(a,Sr+"enter",pt),V&&Bn(a,Sr+"leave",lt),W&&Bn(a,Sr+"move",K)),Z.isEnabled=!0,Z.isDragging=Z.isGesturing=Z.isPressed=Dt=Wt=!1,Z._vx.reset(),Z._vy.reset(),We=se(),F=Be(),at&&at.type&&xt(at),ft&&ft(Z)),Z},Z.disable=function(){Z.isEnabled&&(po.filter(function(at){return at!==Z&&Ea(at.target)}).length||Fn(he?Gt:a,"scroll",kf),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),Fn(tt?a:Gt,Ni[1],ut,!0)),Fn(he?Gt:a,"scroll",L,_t),Fn(a,"wheel",Q,_t),Fn(a,Ni[0],xt,_t),Fn(Gt,Ni[2],G),Fn(Gt,Ni[3],G),Fn(a,"click",Bt,!0),Fn(a,"click",mt),Fn(Gt,"gesturestart",j),Fn(Gt,"gestureend",ht),Fn(a,Sr+"enter",pt),Fn(a,Sr+"leave",lt),Fn(a,Sr+"move",K),Z.isEnabled=Z.isPressed=Z.isDragging=!1,Ct&&Ct(Z))},Z.kill=Z.revert=function(){Z.disable();var at=po.indexOf(Z);at>=0&&po.splice(at,1),_s===Z&&(_s=0)},po.push(Z),tt&&Ea(a)&&(_s=Z),Z.enable(x)},pb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();He.version="3.15.1";He.create=function(s){return new He(s)};He.register=dg;He.getAll=function(){return po.slice()};He.getById=function(s){return po.filter(function(t){return t.vars.id===s})[0]};hg()&&gn.registerPlugin(He);var Rt,yo,Kt,ye,fi,ve,td,bh,za,Da,Ca,lh,Cn,Eh,Yf,Vn,pg,mg,So,Ig,Vf,Lg,kn,Zf,Dg,Ng,Js,Jf,ed,Mo,nd,$s,$f,Gf,ch=1,Rn=Date.now,Hf=Rn(),bi=0,Ra=0,gg=function(t,e,n){var i=ui(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},_g=function(t,e){return e&&(!ui(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},xb=function s(){return Ra&&requestAnimationFrame(s)},xg=function(){return Eh=1},vg=function(){return Eh=0},Ki=function(t){return t},Pa=function(t){return Math.round(t*1e5)/1e5||0},Ug=function(){return typeof window!="undefined"},Og=function(){return Rt||Ug()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},Ar=function(t){return!!~td.indexOf(t)},Fg=function(t){return(t==="Height"?nd:Kt["inner"+t])||fi["client"+t]||ve["client"+t]},Bg=function(t){return vs(t,"getBoundingClientRect")||(Ar(t)?function(){return Mh.width=Kt.innerWidth,Mh.height=nd,Mh}:function(){return ys(t)})},vb=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=vs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Fg(r):t["client"+r])||0}},yb=function(t,e){return!e||~Ui.indexOf(t)?Bg(t):function(){return Mh}},Qi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=vs(t,n))?o()-Bg(t)()[r]:Ar(t)?(fi[n]||ve[n])-Fg(i):t[n]-t["offset"+i])},hh=function(t,e){for(var n=0;n<So.length;n+=3)(!e||~e.indexOf(So[n+1]))&&t(So[n],So[n+1],So[n+2])},ui=function(t){return typeof t=="string"},Pn=function(t){return typeof t=="function"},Ia=function(t){return typeof t=="number"},Mr=function(t){return typeof t=="object"},Aa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},_o=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},xo=Math.abs,zg="left",kg="top",id="right",sd="bottom",Tr="width",wr="height",Na="Right",Ua="Left",Oa="Top",Fa="Bottom",Qe="padding",Si="margin",To="Width",rd="Height",on="px",Mi=function(t){return Kt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Sb=function(t){var e=Mi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},yg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ys=function(t,e){var n=e&&Mi(t)[Yf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Th=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Vg=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},Mb=function(t){return function(e){return Rt.utils.snap(Vg(t),e)}},od=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},bb=function(t){return function(e,n){return od(Vg(t))(e,n.direction)}},uh=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},un=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},hn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},fh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Sg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},dh={toggleActions:"play",anticipatePin:0},wh={top:0,left:0,center:.5,bottom:1,right:1},xh=function(t,e){if(ui(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in wh?wh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ph=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,p=ye.createElement("div"),x=Ar(n)||vs(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=x?ve:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&x?"fixed;":"absolute;"),(m||l||!x)&&(y+=(i===Ke?id:sd)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],vh(p,0,i,v),p},vh=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+To]=1,r["border"+a+To]=0,r[n.p]=e+"px",Rt.set(t,r)},$t=[],Kf={},ka,Mg=function(){return Rn()-bi>34&&(ka||(ka=requestAnimationFrame(Ss)))},vo=function(){(!kn||!kn.isPressed||kn.startX>ve.clientWidth)&&(Jt.cache++,kn?ka||(ka=requestAnimationFrame(Ss)):Ss(),bi||Rr("scrollStart"),bi=Rn())},Wf=function(){Ng=Kt.innerWidth,Dg=Kt.innerHeight},La=function(t){Jt.cache++,(t===!0||!Cn&&!Lg&&!ye.fullscreenElement&&!ye.webkitFullscreenElement&&(!Zf||Ng!==Kt.innerWidth||Math.abs(Kt.innerHeight-Dg)>Kt.innerHeight*.25))&&bh.restart(!0)},Cr={},Tb=[],Gg=function s(){return hn(Vt,"scrollEnd",s)||br(!0)},Rr=function(t){return Cr[t]&&Cr[t].map(function(e){return e()})||Tb},hi=[],Hg=function(t){for(var e=0;e<hi.length;e+=5)(!t||hi[e+4]&&hi[e+4].query===t)&&(hi[e].style.cssText=hi[e+1],hi[e].getBBox&&hi[e].setAttribute("transform",hi[e+2]||""),hi[e+3].uncache=1)},Wg=function(){Jt.cache++,Jt.forEach(function(t){return Pn(t)&&(t.rec=t())})},ad=function(t,e){var n;for(Vn=0;Vn<$t.length;Vn++)n=$t[Vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));$s=!0,e&&Hg(e),e||Rr("revert")},Xg=function(t,e){Jt.cache++,(e||!Gn)&&Jt.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),ui(t)&&(ed=t,Kt.history.scrollRestoration!==t&&(Kt.history.scrollRestoration=t))},Gn,Er=0,bg,wb=function(){if(bg!==Er){var t=bg=Er;requestAnimationFrame(function(){return t===Er&&br(!0)})}},qg=function(){ve.appendChild(Mo),nd=!kn&&Mo.offsetHeight||Kt.innerHeight,ve.removeChild(Mo)},Tg=function(t){return za(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},br=function(t,e){if(fi=ye.documentElement,ve=ye.body,td=[Kt,ye,fi,ve],bi&&!t&&!$s){un(Vt,"scrollEnd",Gg);return}qg(),Gn=Vt.isRefreshing=!0,$s||Wg();var n=Rr("refreshInit");Ig&&Vt.sort(),e||ad(),Jt.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$t.slice(0).forEach(function(i){return i.refresh()}),$s=!1,$t.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),$f=1,Tg(!0),$t.forEach(function(i){var r=Qi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Tg(!1),$f=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Jt.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Xg(ed,1),bh.pause(),Er++,Gn=2,Ss(2),$t.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=Vt.isRefreshing=!1,Rr("refresh")},Qf=0,yh=1,Ba,Ss=function(t){if(t===2||!Gn&&!$s){Vt.isUpdating=!0,Ba&&Ba.update(0);var e=$t.length,n=Rn(),i=n-Hf>=50,r=e&&$t[0].scroll();if(yh=Qf>r?-1:1,Gn||(Qf=r),i&&(bi&&!Eh&&n-bi>200&&(bi=0,Rr("scrollEnd")),Ca=Hf,Hf=n),yh<0){for(Vn=e;Vn-- >0;)$t[Vn]&&$t[Vn].update(0,i);yh=1}else for(Vn=0;Vn<e;Vn++)$t[Vn]&&$t[Vn].update(0,i);Vt.isUpdating=!1}ka=0},jf=[zg,kg,sd,id,Si+Fa,Si+Na,Si+Oa,Si+Ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sh=jf.concat([Tr,wr,"boxSizing","max"+To,"max"+rd,"position",Si,Qe,Qe+Oa,Qe+Na,Qe+Fa,Qe+Ua]),Eb=function(t,e,n){bo(n);var i=t._gsap;if(i.spacerIsNative)bo(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Xf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=jf.length,o=e.style,a=t.style,l;r--;)l=jf[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[sd]=a[id]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Tr]=Th(t,An)+on,o[wr]=Th(t,Ke)+on,o[Qe]=a[Si]=a[kg]=a[zg]="0",bo(i),a[Tr]=a["max"+To]=n[Tr],a[wr]=a["max"+rd]=n[wr],a[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ab=/([A-Z])/g,bo=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Ab,"-$1").toLowerCase())}},mh=function(t){for(var e=Sh.length,n=t.style,i=[],r=0;r<e;r++)i.push(Sh[r],n[Sh[r]]);return i.t=t,i},Cb=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Mh={left:0,top:0},wg=function(t,e,n,i,r,o,a,l,c,h,d,u,f,p){Pn(t)&&(t=t(l)),ui(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?xh("0"+t.substr(3),n):0));var x=f?f.time():0,m,g,v;if(f&&f.seek(0),isNaN(t)||(t=+t),Ia(t))f&&(t=Rt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&vh(a,n,i,!0);else{Pn(e)&&(e=e(l));var T=(t||"0").split(" "),y,w,E,_;v=zn(e,l)||ve,y=ys(v)||{},(!y||!y.left&&!y.top)&&Mi(v).display==="none"&&(_=v.style.display,v.style.display="block",y=ys(v),_?v.style.display=_:v.style.removeProperty("display")),w=xh(T[0],y[i.d]),E=xh(T[1]||"0",n),t=y[i.p]-c[i.p]-h+w+r-E,a&&vh(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var M=t+n,P=o._isStart;m="scroll"+i.d2,vh(o,M,i,P&&M>20||!P&&(d?Math.max(ve[m],fi[m]):o.parentNode[m])<=M+1),d&&(c=ys(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+on))}return f&&v&&(m=ys(v),f.seek(u),g=ys(v),f._caScrollDist=m[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(x),f?t:Math.round(t)},Rb=/(webkit|moz|length|cssText|inset)/i,Eg=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===ve){t._stOrig=r.cssText,a=Mi(t);for(o in a)!+o&&!Rb.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},Yg=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},gh=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},Ag=function(t,e){var n=xs(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var x=Yg(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return x(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){Jt.cache++,o.tween&&Ss()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Rt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},un(t,"wheel",n.wheelHandler),Vt.isTouch&&un(t,"touchmove",n.wheelHandler),r},Vt=(function(){function s(e,n){yo||s.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Jf(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ra){this.update=this.refresh=this.kill=Ki;return}n=yg(ui(n)||Ia(n)||n.nodeType?{trigger:n}:n,dh);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,p=r.pinSpacing,x=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,T=r.once,y=r.snap,w=r.pinReparent,E=r.pinSpacer,_=r.containerAnimation,M=r.fastScrollEnd,P=r.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Ke,D=!d&&d!==0,N=zn(n.scroller||Kt),H=Rt.core.getCache(N),I=Ar(N),V=("pinType"in n?n.pinType:vs(N,"pinType")||I&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=D&&n.toggleActions.split(" "),tt="markers"in n?n.markers:dh.markers,O=I?0:parseFloat(Mi(N)["border"+R.p2+To])||0,A=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(A)},ft=vb(N,I,R),Ct=yb(N,I),q=0,rt=0,_t=0,yt=xs(N,R),ct,Et,le,At,Wt,Dt,Ft,fe,ce,Z,jt,qe,Me,se,Be,We,F,me,he,Gt,dt,de,Nt,Bt,C,S,k,ot,it,ut,xt,G,j,ht,L,Q,K,pt,lt;if(A._startClamp=A._endClamp=!1,A._dir=R,m*=45,A.scroller=N,A.scroll=_?_.time.bind(_):yt,At=yt(),$s&&yt.rec==null&&(yt.rec=At),A.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ig=1,n.refreshPriority===-9999&&(Ba=A)),H.tweenScroll=H.tweenScroll||{top:Ag(N,Ke),left:Ag(N,An)},A.tweenTo=ct=H.tweenScroll[R.p],A.scrubDuration=function(et){j=Ia(et)&&et,j?G?G.duration(et):G=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return g&&g(A)}}):(G&&G.progress(1).kill(),G=0)},i&&(i.vars.lazy=!1,i._initted&&!A.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),A.animation=i.pause(),i.scrollTrigger=A,A.scrubDuration(d),ut=0,l||(l=i.vars.id)),y&&((!Mr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ve.style&&Rt.set(I?[ve,fi]:N,{scrollBehavior:"auto"}),Jt.forEach(function(et){return Pn(et)&&et.target===(I?ye.scrollingElement||fi:N)&&(et.smooth=!1)}),le=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Mb(i):y.snapTo==="labelsDirectional"?bb(i):y.directional!==!1?function(et,vt){return od(y.snapTo)(et,Rn()-rt<500?0:vt.direction)}:Rt.utils.snap(y.snapTo),ht=y.duration||{min:.1,max:2},ht=Mr(ht)?Da(ht.min,ht.max):Da(ht,ht),L=Rt.delayedCall(y.delay||j/2||.1,function(){var et=yt(),vt=Rn()-rt<500,nt=ct.tween;if((vt||Math.abs(A.getVelocity())<10)&&!nt&&!Eh&&q!==et){var Tt=(et-Dt)/se,te=i&&!D?i.totalProgress():Tt,Xt=vt?0:(te-xt)/(Rn()-Ca)*1e3||0,Re=Rt.utils.clamp(-Tt,1-Tt,xo(Xt/2)*Xt/.185),Ye=Tt+(y.inertia===!1?0:Re),Pe,be,_e=y,je=_e.onStart,Te=_e.onInterrupt,xn=_e.onComplete;if(Pe=le(Ye,A),Ia(Pe)||(Pe=Ye),be=Math.max(0,Math.round(Dt+Pe*se)),et<=Ft&&et>=Dt&&be!==et){if(nt&&!nt._initted&&nt.data<=xo(be-et))return;y.inertia===!1&&(Re=Pe-Tt),ct(be,{duration:ht(xo(Math.max(xo(Ye-te),xo(Pe-te))*.185/Xt/.05||0)),ease:y.ease||"power3",data:xo(be-et),onInterrupt:function(){return L.restart(!0)&&Te&&_o(A,Te)},onComplete:function(){A.update(),q=yt(),i&&!D&&(G?G.resetTo("totalProgress",Pe,i._tTime/i._tDur):i.progress(Pe)),ut=xt=i&&!D?i.totalProgress():A.progress,v&&v(A),xn&&_o(A,xn)}},et,Re*se,be-et-Re*se),je&&_o(A,je,ct.tween)}}else A.isActive&&q!==et&&L.restart(!0)}).pause()),l&&(Kf[l]=A),u=A.trigger=zn(u||f!==!0&&f),lt=u&&u._gsap&&u._gsap.stRevert,lt&&(lt=lt(A)),f=f===!0?u:zn(f),ui(a)&&(a={targets:u,className:a}),f&&(p===!1||p===Si||(p=!p&&f.parentNode&&f.parentNode.style&&Mi(f.parentNode).display==="flex"?!1:Qe),A.pin=f,Et=Rt.core.getCache(f),Et.spacer?Be=Et.pinState:(E&&(E=zn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Et.spacerIsNative=!!E,E&&(Et.spacerState=mh(E))),Et.spacer=me=E||ye.createElement("div"),me.classList.add("pin-spacer"),l&&me.classList.add("pin-spacer-"+l),Et.pinState=Be=mh(f)),n.force3D!==!1&&Rt.set(f,{force3D:!0}),A.spacer=me=Et.spacer,it=Mi(f),Bt=it[p+R.os2],Gt=Rt.getProperty(f),dt=Rt.quickSetter(f,R.a,on),Xf(f,me,it),F=mh(f)),tt){qe=Mr(tt)?yg(tt,Sg):Sg,Z=ph("scroller-start",l,N,R,qe,0),jt=ph("scroller-end",l,N,R,qe,0,Z),he=Z["offset"+R.op.d2];var mt=zn(vs(N,"content")||N);fe=this.markerStart=ph("start",l,mt,R,qe,he,0,_),ce=this.markerEnd=ph("end",l,mt,R,qe,he,0,_),_&&(pt=Rt.quickSetter([fe,ce],R.a,on)),!V&&!(Ui.length&&vs(N,"fixedMarkers")===!0)&&(Sb(I?ve:N),Rt.set([Z,jt],{force3D:!0}),S=Rt.quickSetter(Z,R.a,on),ot=Rt.quickSetter(jt,R.a,on))}if(_){var at=_.vars.onUpdate,gt=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){A.update(0,0,1),at&&at.apply(_,gt||[])})}if(A.previous=function(){return $t[$t.indexOf(A)-1]},A.next=function(){return $t[$t.indexOf(A)+1]},A.revert=function(et,vt){if(!vt)return A.kill(!0);var nt=et!==!1||!A.enabled,Tt=Cn;nt!==A.isReverted&&(nt&&(Q=Math.max(yt(),A.scroll.rec||0),_t=A.progress,K=i&&i.progress()),fe&&[fe,ce,Z,jt].forEach(function(te){return te.style.display=nt?"none":"block"}),nt&&(Cn=A,A.update(nt)),f&&(!w||!A.isActive)&&(nt?Eb(f,me,Be):Xf(f,me,Mi(f),C)),nt||A.update(nt),Cn=Tt,A.isReverted=nt)},A.refresh=function(et,vt,nt,Tt){if(!((Cn||!A.enabled)&&!vt)){if(f&&et&&bi){un(s,"scrollEnd",Gg);return}!Gn&&$&&$(A),Cn=A,ct.tween&&!nt&&(ct.tween.kill(),ct.tween=0),G&&G.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(z){return z.vars.immediateRender&&z.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var te=ft(),Xt=Ct(),Re=_?_.duration():Qi(N,R),Ye=se<=.01||!se,Pe=0,be=Tt||0,_e=Mr(nt)?nt.end:n.end,je=n.endTrigger||u,Te=Mr(nt)?nt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),xn=A.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,A),Kn=u&&Math.max(0,$t.indexOf(A))||0,ze=Kn,Ze,tn,Qn,Pr,en,ke,di,wo,Va,Ms,b,U,Y;for(tt&&Mr(nt)&&(U=Rt.getProperty(Z,R.p),Y=Rt.getProperty(jt,R.p));ze-- >0;)ke=$t[ze],ke.end||ke.refresh(0,1)||(Cn=A),di=ke.pin,di&&(di===u||di===f||di===xn)&&!ke.isReverted&&(Ms||(Ms=[]),Ms.unshift(ke),ke.revert(!0,!0)),ke!==$t[ze]&&(Kn--,ze--);for(Pn(Te)&&(Te=Te(A)),Te=gg(Te,"start",A),Dt=wg(Te,u,te,R,yt(),fe,Z,A,Xt,O,V,Re,_,A._startClamp&&"_startClamp")||(f?-.001:0),Pn(_e)&&(_e=_e(A)),ui(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(ui(Te)?Te.split(" ")[0]:"")+_e:(Pe=xh(_e.substr(2),te),_e=ui(Te)?Te:(_?Rt.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Dt):Dt)+Pe,je=u)),_e=gg(_e,"end",A),Ft=Math.max(Dt,wg(_e||(je?"100% 0":Re),je,te,R,yt()+Pe,ce,jt,A,Xt,O,V,Re,_,A._endClamp&&"_endClamp"))||-.001,Pe=0,ze=Kn;ze--;)ke=$t[ze]||{},di=ke.pin,di&&ke.start-ke._pinPush<=Dt&&!_&&ke.end>0&&(Ze=ke.end-(A._startClamp?Math.max(0,ke.start):ke.start),(di===u&&ke.start-ke._pinPush<Dt||di===xn)&&isNaN(Te)&&(Pe+=Ze*(1-ke.progress)),di===f&&(be+=Ze));if(Dt+=Pe,Ft+=Pe,A._startClamp&&(A._startClamp+=Pe),A._endClamp&&!Gn&&(A._endClamp=Ft||-.001,Ft=Math.min(Ft,Qi(N,R))),se=Ft-Dt||(Dt-=.01)&&.001,Ye&&(_t=Rt.utils.clamp(0,1,Rt.utils.normalize(Dt,Ft,Q))),A._pinPush=be,fe&&Pe&&(Ze={},Ze[R.a]="+="+Pe,xn&&(Ze[R.p]="-="+yt()),Rt.set([fe,ce],Ze)),f&&!($f&&A.end>=Qi(N,R)))Ze=Mi(f),Pr=R===Ke,Qn=yt(),de=parseFloat(Gt(R.a))+be,!Re&&Ft>1&&(b=(I?ye.scrollingElement||fi:N).style,b={style:b,value:b["overflow"+R.a.toUpperCase()]},I&&Mi(ve)["overflow"+R.a.toUpperCase()]!=="scroll"&&(b.style["overflow"+R.a.toUpperCase()]="scroll")),Xf(f,me,Ze),F=mh(f),tn=ys(f,!0),wo=V&&xs(N,Pr?An:Ke)(),p?(C=[p+R.os2,se+be+on],C.t=me,ze=p===Qe?Th(f,R)+se+be:0,ze&&(C.push(R.d,ze+on),me.style.flexBasis!=="auto"&&(me.style.flexBasis=ze+on)),bo(C),xn&&$t.forEach(function(z){z.pin===xn&&z.vars.pinSpacing!==!1&&(z._subPinOffset=!0)}),V&&yt(Q)):(ze=Th(f,R),ze&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=ze+on)),V&&(en={top:tn.top+(Pr?Qn-Dt:wo)+on,left:tn.left+(Pr?wo:Qn-Dt)+on,boxSizing:"border-box",position:"fixed"},en[Tr]=en["max"+To]=Math.ceil(tn.width)+on,en[wr]=en["max"+rd]=Math.ceil(tn.height)+on,en[Si]=en[Si+Oa]=en[Si+Na]=en[Si+Fa]=en[Si+Ua]="0",en[Qe]=Ze[Qe],en[Qe+Oa]=Ze[Qe+Oa],en[Qe+Na]=Ze[Qe+Na],en[Qe+Fa]=Ze[Qe+Fa],en[Qe+Ua]=Ze[Qe+Ua],We=Cb(Be,en,w),Gn&&yt(0)),i?(Va=i._initted,Vf(1),i.render(i.duration(),!0,!0),Nt=Gt(R.a)-de+se+be,k=Math.abs(se-Nt)>1,V&&k&&We.splice(We.length-2,2),i.render(0,!0,!0),Va||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vf(0)):Nt=se,b&&(b.value?b.style["overflow"+R.a.toUpperCase()]=b.value:b.style.removeProperty("overflow-"+R.a));else if(u&&yt()&&!_)for(tn=u.parentNode;tn&&tn!==ve;)tn._pinOffset&&(Dt-=tn._pinOffset,Ft-=tn._pinOffset),tn=tn.parentNode;Ms&&Ms.forEach(function(z){return z.revert(!1,!0)}),A.start=Dt,A.end=Ft,At=Wt=Gn?Q:yt(),!_&&!Gn&&!$s&&(At<Q&&yt(Q),A.scroll.rec=0),A.revert(!1,!0),rt=Rn(),L&&(q=-1,L.restart(!0)),Cn=0,i&&D&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Ye||_t!==A.progress||_||x||i&&!i._initted)&&(i&&!D&&(i._initted||_t||i.vars.immediateRender!==!1)&&i.totalProgress(_&&Dt<-.001&&!_t?Rt.utils.normalize(Dt,Ft,0):_t,!0),A.progress=Ye||(At-Dt)/se===_t?0:_t),f&&p&&(me._pinOffset=Math.round(A.progress*Nt)),G&&G.invalidate(),isNaN(U)||(U-=Rt.getProperty(Z,R.p),Y-=Rt.getProperty(jt,R.p),gh(Z,R,U),gh(fe,R,U-(Tt||0)),gh(jt,R,Y),gh(ce,R,Y-(Tt||0))),Ye&&!Gn&&A.update(),h&&!Gn&&!Me&&(Me=!0,h(A),Me=!1)}},A.getVelocity=function(){return(yt()-Wt)/(Rn()-Ca)*1e3||0},A.endAnimation=function(){Aa(A.callbackAnimation),i&&(G?G.progress(1):i.paused()?D||Aa(i,A.direction<0,1):Aa(i,i.reversed()))},A.labelToScroll=function(et){return i&&i.labels&&(Dt||A.refresh()||Dt)+i.labels[et]/i.duration()*se||0},A.getTrailing=function(et){var vt=$t.indexOf(A),nt=A.direction>0?$t.slice(0,vt).reverse():$t.slice(vt+1);return(ui(et)?nt.filter(function(Tt){return Tt.vars.preventOverlaps===et}):nt).filter(function(Tt){return A.direction>0?Tt.end<=Dt:Tt.start>=Ft})},A.update=function(et,vt,nt){if(!(_&&!nt&&!et)){var Tt=Gn===!0?Q:A.scroll(),te=et?0:(Tt-Dt)/se,Xt=te<0?0:te>1?1:te||0,Re=A.progress,Ye,Pe,be,_e,je,Te,xn,Kn;if(vt&&(Wt=At,At=_?yt():Tt,y&&(xt=ut,ut=i&&!D?i.totalProgress():Xt)),m&&f&&!Cn&&!ch&&bi&&(!Xt&&Dt<Tt+(Tt-Wt)/(Rn()-Ca)*m?Xt=1e-4:Xt===1&&Ft>Tt+(Tt-Wt)/(Rn()-Ca)*m&&(Xt=.9999)),Xt!==Re&&A.enabled){if(Ye=A.isActive=!!Xt&&Xt<1,Pe=!!Re&&Re<1,Te=Ye!==Pe,je=Te||!!Xt!=!!Re,A.direction=Xt>Re?1:-1,A.progress=Xt,je&&!Cn&&(be=Xt&&!Re?0:Xt===1?1:Re===1?2:3,D&&(_e=!Te&&B[be+1]!=="none"&&B[be+1]||B[be],Kn=i&&(_e==="complete"||_e==="reset"||_e in i))),P&&(Te||Kn)&&(Kn||d||!i)&&(Pn(P)?P(A):A.getTrailing(P).forEach(function(Qn){return Qn.endAnimation()})),D||(G&&!Cn&&!ch?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",Xt,i._tTime/i._tDur):(G.vars.totalProgress=Xt,G.invalidate().restart())):i&&i.totalProgress(Xt,!!(Cn&&(rt||et)))),f){if(et&&p&&(me.style[p+R.os2]=Bt),!V)dt(Pa(de+Nt*Xt));else if(je){if(xn=!et&&Xt>Re&&Ft+1>Tt&&Tt+1>=Qi(N,R),w)if(!et&&(Ye||xn)){var ze=ys(f,!0),Ze=Tt-Dt;Eg(f,ve,ze.top+(R===Ke?Ze:0)+on,ze.left+(R===Ke?0:Ze)+on)}else Eg(f,me);bo(Ye||xn?We:F),k&&Xt<1&&Ye||dt(de+(Xt===1&&!xn?Nt:0))}}y&&!ct.tween&&!Cn&&!ch&&L.restart(!0),a&&(Te||T&&Xt&&(Xt<1||!Gf))&&za(a.targets).forEach(function(Qn){return Qn.classList[Ye||T?"add":"remove"](a.className)}),o&&!D&&!et&&o(A),je&&!Cn?(D&&(Kn&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),o&&o(A)),(Te||!Gf)&&(c&&Te&&_o(A,c),W[be]&&_o(A,W[be]),T&&(Xt===1?A.kill(!1,1):W[be]=0),Te||(be=Xt===1?1:3,W[be]&&_o(A,W[be]))),M&&!Ye&&Math.abs(A.getVelocity())>(Ia(M)?M:2500)&&(Aa(A.callbackAnimation),G?G.progress(1):Aa(i,_e==="reverse"?1:!Xt,1))):D&&o&&!Cn&&o(A)}if(ot){var tn=_?Tt/_.duration()*(_._caScrollDist||0):Tt;S(tn+(Z._isFlipped?1:0)),ot(tn)}pt&&pt(-Tt/_.duration()*(_._caScrollDist||0))}},A.enable=function(et,vt){A.enabled||(A.enabled=!0,un(N,"resize",La),I||un(N,"scroll",vo),$&&un(s,"refreshInit",$),et!==!1&&(A.progress=_t=0,At=Wt=q=yt()),vt!==!1&&A.refresh())},A.getTween=function(et){return et&&ct?ct.tween:G},A.setPositions=function(et,vt,nt,Tt){if(_){var te=_.scrollTrigger,Xt=_.duration(),Re=te.end-te.start;et=te.start+Re*et/Xt,vt=te.start+Re*vt/Xt}A.refresh(!1,!1,{start:_g(et,nt&&!!A._startClamp),end:_g(vt,nt&&!!A._endClamp)},Tt),A.update()},A.adjustPinSpacing=function(et){if(C&&et){var vt=C.indexOf(R.d)+1;C[vt]=parseFloat(C[vt])+et+on,C[1]=parseFloat(C[1])+et+on,bo(C)}},A.disable=function(et,vt){if(et!==!1&&A.revert(!0,!0),A.enabled&&(A.enabled=A.isActive=!1,vt||G&&G.pause(),Q=0,Et&&(Et.uncache=1),$&&hn(s,"refreshInit",$),L&&(L.pause(),ct.tween&&ct.tween.kill()&&(ct.tween=0)),!I)){for(var nt=$t.length;nt--;)if($t[nt].scroller===N&&$t[nt]!==A)return;hn(N,"resize",La),I||hn(N,"scroll",vo)}},A.kill=function(et,vt){A.disable(et,vt),G&&!vt&&G.kill(),l&&delete Kf[l];var nt=$t.indexOf(A);nt>=0&&$t.splice(nt,1),nt===Vn&&yh>0&&Vn--,nt=0,$t.forEach(function(Tt){return Tt.scroller===A.scroller&&(nt=1)}),nt||Gn||$s||(A.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),vt||i.kill()),fe&&[fe,ce,Z,jt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),Ba===A&&(Ba=0),f&&(Et&&(Et.uncache=1),nt=0,$t.forEach(function(Tt){return Tt.pin===f&&nt++}),nt||(Et.spacer=0)),n.onKill&&n.onKill(A)},$t.push(A),A.enable(!1,!1),lt&&lt(A),i&&i.add&&!se){var st=A.update;A.update=function(){A.update=st,Jt.cache++,Dt||Ft||A.refresh()},Rt.delayedCall(.01,A.update),se=.01,Dt=Ft=0}else A.refresh();f&&wb()},s.register=function(n){return yo||(Rt=n||Og(),Ug()&&window.document&&s.enable(),yo=Ra),yo},s.defaults=function(n){if(n)for(var i in n)dh[i]=n[i];return dh},s.disable=function(n,i){Ra=0,$t.forEach(function(o){return o[i?"kill":"disable"](n)}),hn(Kt,"wheel",vo),hn(ye,"scroll",vo),clearInterval(lh),hn(ye,"touchcancel",Ki),hn(ve,"touchstart",Ki),uh(hn,ye,"pointerdown,touchstart,mousedown",xg),uh(hn,ye,"pointerup,touchend,mouseup",vg),bh.kill(),hh(hn);for(var r=0;r<Jt.length;r+=3)fh(hn,Jt[r],Jt[r+1]),fh(hn,Jt[r],Jt[r+2])},s.enable=function(){if(Kt=window,ye=document,fi=ye.documentElement,ve=ye.body,Rt){if(za=Rt.utils.toArray,Da=Rt.utils.clamp,Jf=Rt.core.context||Ki,Vf=Rt.core.suppressOverwrites||Ki,ed=Kt.history.scrollRestoration||"auto",Qf=Kt.pageYOffset||0,Rt.core.globals("ScrollTrigger",s),ve){Ra=1,Mo=document.createElement("div"),Mo.style.height="100vh",Mo.style.position="absolute",qg(),xb(),He.register(Rt),s.isTouch=He.isTouch,Js=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zf=He.isTouch===1,un(Kt,"wheel",vo),td=[Kt,ye,fi,ve],Rt.matchMedia?(s.matchMedia=function(h){var d=Rt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Rt.addEventListener("matchMediaInit",function(){Wg(),ad()}),Rt.addEventListener("matchMediaRevert",function(){return Hg()}),Rt.addEventListener("matchMedia",function(){br(0,1),Rr("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return Wf(),Wf})):console.warn("Requires GSAP 3.11.0 or later"),Wf(),un(ye,"scroll",vo);var n=ve.hasAttribute("style"),i=ve.style,r=i.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ys(ve),Ke.m=Math.round(a.top+Ke.sc())||0,An.m=Math.round(a.left+An.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(ve.setAttribute("style",""),ve.removeAttribute("style")),lh=setInterval(Mg,250),Rt.delayedCall(.5,function(){return ch=0}),un(ye,"touchcancel",Ki),un(ve,"touchstart",Ki),uh(un,ye,"pointerdown,touchstart,mousedown",xg),uh(un,ye,"pointerup,touchend,mouseup",vg),Yf=Rt.utils.checkPrefix("transform"),Sh.push(Yf),yo=Rn(),bh=Rt.delayedCall(.2,br).pause(),So=[ye,"visibilitychange",function(){var h=Kt.innerWidth,d=Kt.innerHeight;ye.hidden?(pg=h,mg=d):(pg!==h||mg!==d)&&La()},ye,"DOMContentLoaded",br,Kt,"load",br,Kt,"resize",La],hh(un),$t.forEach(function(h){return h.enable(0,1)}),l=0;l<Jt.length;l+=3)fh(hn,Jt[l],Jt[l+1]),fh(hn,Jt[l],Jt[l+2])}else if(ye){var c=function h(){s.enable(),ye.removeEventListener("DOMContentLoaded",h)};ye.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Gf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(lh)||(lh=i)&&setInterval(Mg,i),"ignoreMobileResize"in n&&(Zf=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(hh(hn)||hh(un,n.autoRefreshEvents||"none"),Lg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=zn(n),o=Jt.indexOf(r),a=Ar(r);~o&&Jt.splice(o,a?6:2),i&&(a?Ui.unshift(Kt,i,ve,i,fi,i):Ui.unshift(r,i))},s.clearMatchMedia=function(n){$t.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(ui(n)?zn(n):n).getBoundingClientRect(),a=o[r?Tr:wr]*i||0;return r?o.right-a>0&&o.left+a<Kt.innerWidth:o.bottom-a>0&&o.top+a<Kt.innerHeight},s.positionInViewport=function(n,i,r){ui(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[r?Tr:wr],l=i==null?a/2:i in wh?wh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/Kt.innerWidth:(o.top+l)/Kt.innerHeight},s.killAll=function(n){if($t.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Cr.killAll||[];Cr={},i.forEach(function(r){return r()})}},s})();Vt.version="3.15.1";Vt.saveStyles=function(s){return s?za(s).forEach(function(t){if(t&&t.style){var e=hi.indexOf(t);e>=0&&hi.splice(e,5),hi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),Jf())}}):hi};Vt.revert=function(s,t){return ad(!s,t)};Vt.create=function(s,t){return new Vt(s,t)};Vt.refresh=function(s){return s?La(!0):(yo||Vt.register())&&br(!0)};Vt.update=function(s){return++Jt.cache&&Ss(s===!0?2:0)};Vt.clearScrollMemory=Xg;Vt.maxScroll=function(s,t){return Qi(s,t?An:Ke)};Vt.getScrollFunc=function(s,t){return xs(zn(s),t?An:Ke)};Vt.getById=function(s){return Kf[s]};Vt.getAll=function(){return $t.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Vt.isScrolling=function(){return!!bi};Vt.snapDirectional=od;Vt.addEventListener=function(s,t){var e=Cr[s]||(Cr[s]=[]);~e.indexOf(t)||e.push(t)};Vt.removeEventListener=function(s,t){var e=Cr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Vt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Rt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Pn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Pn(r)&&(r=r(),un(Vt,"refresh",function(){return r=t.batchMax()})),za(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Vt.create(c))}),e};var Cg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},qf=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===fi&&s(ve,e)},_h={auto:1,scroll:1},Pb=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Rt.core.getCache(r),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==ve&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(_h[(l=Mi(r)).overflowY]||_h[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Ar(r)&&(_h[(l=Mi(r)).overflowY]||_h[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Zg=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Pb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(ye,He.eventTypes[0],Pg,!1,!0)},onDisable:function(){return hn(ye,He.eventTypes[0],Pg,!0)}})},Ib=/(input|label|select|textarea)/i,Rg,Pg=function(t){var e=Ib.test(t.target.tagName);(e||Rg)&&(t._gsapAllow=!0,Rg=e)},Lb=function(t){Mr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=zn(t.target)||fi,h=Rt.core.globals().ScrollSmoother,d=h&&h.get(),u=Js&&(t.content&&zn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=xs(c,Ke),p=xs(c,An),x=1,m=(He.isTouch&&Kt.visualViewport?Kt.visualViewport.scale*Kt.visualViewport.width:Kt.outerWidth)/Kt.innerWidth,g=0,v=Pn(i)?function(){return i(a)}:function(){return i||2.8},T,y,w=Zg(c,t.type,!0,r),E=function(){return y=!1},_=Ki,M=Ki,P=function(){l=Qi(c,Ke),M=Da(Js?1:0,l),n&&(_=Da(0,Qi(c,An))),T=Er},R=function(){u._gsap.y=Pa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(E);var tt=Pa(a.deltaY/2),O=M(f.v-tt);if(u&&O!==f.v+f.offset){f.offset=O-f.v;var A=Pa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",u._gsap.y=A+"px",f.cacheID=Jt.cache,Ss()}return!0}f.offset&&R(),y=!0},N,H,I,V,W=function(){P(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return u&&Rt.set(u,{y:"+=0"}),t.ignoreCheck=function(B){return Js&&B.type==="touchmove"&&D(B)||x>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},t.onPress=function(){y=!1;var B=x;x=Pa((Kt.visualViewport&&Kt.visualViewport.scale||1)/m),N.pause(),B!==x&&qf(c,x>1.01?!0:n?!1:"x"),H=p(),I=f(),P(),T=Er},t.onRelease=t.onGestureStart=function(B,tt){if(f.offset&&R(),!tt)V.restart(!0);else{Jt.cache++;var O=v(),A,$;n&&(A=p(),$=A+O*.05*-B.velocityX/.227,O*=Cg(p,A,$,Qi(c,An)),N.vars.scrollX=_($)),A=f(),$=A+O*.05*-B.velocityY/.227,O*=Cg(f,A,$,Qi(c,Ke)),N.vars.scrollY=M($),N.invalidate().duration(O).play(.01),(Js&&N.vars.scrollY>=l||A>=l-1)&&Rt.to({},{onUpdate:W,duration:O})}o&&o(B)},t.onWheel=function(){N._ts&&N.pause(),Rn()-g>1e3&&(T=0,g=Rn())},t.onChange=function(B,tt,O,A,$){if(Er!==T&&P(),tt&&n&&p(_(A[2]===tt?H+(B.startX-B.x):p()+tt-A[1])),O){f.offset&&R();var ft=$[2]===O,Ct=ft?I+B.startY-B.y:f()+O-$[1],q=M(Ct);ft&&Ct!==q&&(I+=q-Ct),f(q)}(O||tt)&&Ss()},t.onEnable=function(){qf(c,n?!1:"x"),Vt.addEventListener("refresh",W),un(Kt,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),w.enable()},t.onDisable=function(){qf(c,!0),hn(Kt,"resize",W),Vt.removeEventListener("refresh",W),w.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=Js,Js&&!f()&&f(1),Js&&Rt.ticker.add(Ki),V=a._dc,N=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Yg(f,f(),function(){return N.pause()})},onUpdate:Ss,onComplete:V.vars.onComplete}),a};Vt.sort=function(s){if(Pn(s))return $t.sort(s);var t=Kt.pageYOffset||0;return Vt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Kt.innerHeight}),$t.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Vt.observe=function(s){return new He(s)};Vt.normalizeScroll=function(s){if(typeof s=="undefined")return kn;if(s===!0&&kn)return kn.enable();if(s===!1){kn&&kn.kill(),kn=s;return}var t=s instanceof He?s:Lb(s);return kn&&kn.target===t.target&&kn.kill(),Ar(t.target)&&(kn=t),t};Vt.core={_getVelocityProp:ah,_inputObserver:Zg,_scrollers:Jt,_proxies:Ui,bridge:{ss:function(){bi||Rr("scrollStart"),bi=Rn()},ref:function(){return Cn}}};Og()&&Rt.registerPlugin(Vt);var Jg="1.3.27";function Qg(s,t,e){return Math.max(s,Math.min(t,e))}function Db(s,t,e){return(1-e)*s+e*t}function Nb(s,t,e,n){return Db(s,t,1-Math.exp(-e*n))}function Ub(s,t){return(s%t+t)%t}var Ob=class{constructor(){Ot(this,"isRunning",!1);Ot(this,"value",0);Ot(this,"from",0);Ot(this,"to",0);Ot(this,"currentTime",0);Ot(this,"lerp");Ot(this,"duration");Ot(this,"easing");Ot(this,"onUpdate")}advance(s){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let n=Qg(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Nb(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function Fb(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var Bb=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Ot(this,"width",0);Ot(this,"height",0);Ot(this,"scrollHeight",0);Ot(this,"scrollWidth",0);Ot(this,"debouncedResize");Ot(this,"wrapperResizeObserver");Ot(this,"contentResizeObserver");Ot(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ot(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ot(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=Fb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},jg=class{constructor(){Ot(this,"events",{})}emit(s,...t){var n;let e=this.events[s]||[];for(let i=0,r=e.length;i<r;i++)(n=e[i])==null||n.call(e,...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}}off(s,t){var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},zb=100/6,Ks={passive:!1};function $g(s,t){return s===1?zb:s===2?t:1}var kb=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Ot(this,"touchStart",{x:0,y:0});Ot(this,"lastDelta",{x:0,y:0});Ot(this,"window",{width:0,height:0});Ot(this,"emitter",new jg);Ot(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Ot(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Ot(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Ot(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=$g(n,this.window.width),r=$g(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Ot(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ks),this.element.addEventListener("touchstart",this.onTouchStart,Ks),this.element.addEventListener("touchmove",this.onTouchMove,Ks),this.element.addEventListener("touchend",this.onTouchEnd,Ks)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ks),this.element.removeEventListener("touchstart",this.onTouchStart,Ks),this.element.removeEventListener("touchmove",this.onTouchMove,Ks),this.element.removeEventListener("touchend",this.onTouchEnd,Ks)}},Kg=s=>Math.min(1,1.001-2**(-10*s)),t_=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:x=!0,prevent:m,virtualScroll:g,overscroll:v=!0,autoRaf:T=!1,anchors:y=!1,autoToggle:w=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:M=_,stopInertiaOnNavigate:P=!1,respectReducedMotion:R=!0}={}){Ot(this,"_isScrolling",!1);Ot(this,"_isStopped",!1);Ot(this,"_isLocked",!1);Ot(this,"_preventNextNativeScrollEvent",!1);Ot(this,"_resetVelocityTimeout",null);Ot(this,"_rafId",null);Ot(this,"_isDraggingSelection",!1);Ot(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ot(this,"isTouching");Ot(this,"isIos");Ot(this,"time",0);Ot(this,"userData",{});Ot(this,"lastVelocity",0);Ot(this,"velocity",0);Ot(this,"direction",0);Ot(this,"options");Ot(this,"targetScroll");Ot(this,"animatedScroll");Ot(this,"animate",new Ob);Ot(this,"emitter",new jg);Ot(this,"dimensions");Ot(this,"virtualScroll");Ot(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Ot(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ot(this,"onTransitionEnd",s=>{var t;(t=s.propertyName)!=null&&t.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Ot(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ot(this,"onPointerDown",s=>{s.button===1&&this.reset()});Ot(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var x,m,g,v,T;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((x=p.hasAttribute)==null?void 0:x.call(p,"data-lenis-prevent"))||h==="vertical"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-horizontal"))||i&&((v=p.hasAttribute)==null?void 0:v.call(p,"data-lenis-prevent-touch"))||r&&((T=p.hasAttribute)==null?void 0:T.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ot(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ot(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Jg,window.lenis||(window.lenis={}),window.lenis.version=Jg,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Kg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:x,prevent:m,virtualScroll:g,overscroll:v,autoRaf:T,anchors:y,autoToggle:w,allowNestedScroll:E,naiveDimensions:M,stopInertiaOnNavigate:P,respectReducedMotion:R},this.dimensions=new Bb(s,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new kb(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=s.targetTouches[0])!=null?c:s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let x=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(T)?0:T)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=Qg(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Kg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),x||this.emit(),x&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){var E;let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,p;if(n-((E=i.time)!=null?E:0)>2e3){i.time=Date.now();let _=window.getComputedStyle(s);if(i.computedStyle=_,r=["auto","overlay","scroll"].includes(_.overflowX),o=["auto","overlay","scroll"].includes(_.overflowY),c=["auto"].includes(_.overscrollBehaviorX),h=["auto"].includes(_.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,p=s.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let x=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,v,T,y,w;if(x==="horizontal")m=Math.round(s.scrollLeft),g=d-f,v=t,T=r,y=a,w=c;else if(x==="vertical")m=Math.round(s.scrollTop),g=u-p,v=e,T=o,y=l,w=h;else return!1;return!w&&(m>=g||m<=0)?!0:(v>0?m<g:m>0)&&T&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let s=this.options.wrapper;return this.isHorizontal?(t=s.scrollX)!=null?t:s.scrollLeft:(e=s.scrollY)!=null?e:s.scrollTop}get scroll(){return this.options.infinite?Ub(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};ae.registerPlugin(Vt);var Hn=matchMedia("(prefers-reduced-motion: reduce)").matches,hd=matchMedia("(pointer: fine)").matches,ld=(navigator.hardwareConcurrency||4)<=4||innerWidth<760,Yt=(s,t=document)=>t.querySelector(s),_n=(s,t=document)=>Array.from(t.querySelectorAll(s)),Fi=null;!Hn&&hd&&(Fi=new t_({lerp:.11,wheelMultiplier:.95}),Fi.on("scroll",Vt.update),ae.ticker.add(s=>Fi.raf(s*1e3)),ae.ticker.lagSmoothing(0),document.documentElement.classList.add("has-lenis"));document.addEventListener("click",s=>{let t=s.target.closest('a[href^="#"]');if(!t||s.defaultPrevented)return;let e=decodeURIComponent(t.getAttribute("href").slice(1)),n=e&&document.getElementById(e);n&&(s.preventDefault(),history.pushState(null,"","#"+e),window.dispatchEvent(new HashChangeEvent("hashchange")),requestAnimationFrame(()=>{let r=-(n.closest("#servicios")&&n!==Yt("#servicios")&&innerWidth>640?250:96);Fi?Fi.scrollTo(n,{offset:r,duration:1.2}):scrollTo({top:n.getBoundingClientRect().top+scrollY+r,behavior:Hn?"auto":"smooth"})}))});var cd=Yt("#site-head");if(cd){let s=0;Vt.create({start:0,end:"max",onUpdate(t){let e=t.scroll();cd.classList.toggle("scrolled",e>8),Hn||cd.classList.toggle("away",e>400&&t.direction===1&&e-s>0),s=e}})}function s_(s){if(s.dataset.split)return _n(".w > span",s);s.dataset.split="1";let t=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(r=>{if(!r)return;if(/^\s+$/.test(r)){i.appendChild(document.createTextNode(r));return}let o=document.createElement("span");o.className="w";let a=document.createElement("span");a.textContent=r,o.appendChild(a),i.appendChild(o)}),n.replaceWith(i)}else n.nodeType===1&&t(n)})};return t(s),_n(".w > span",s)}var Oi={progress:{v:Hn?1:0},morph:0,keys:[]};function Vb(s){let t=ld?4500:9e3,e=ld?300:700,n=t+e,i=new Bo,r=new Ln(42,1,.1,100);r.position.set(0,0,7.2);let o;try{o=new Uc({antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{return null}o.setPixelRatio(Math.min(devicePixelRatio||1,ld?1.25:1.5)),s.appendChild(o.domElement);let a=new Float32Array(n*3),l=new Float32Array(n*3),c=new Float32Array(n*3),h=new Float32Array(n*3),d=new Float32Array(n),u=new Float32Array(n),f=Math.floor(t*.62),p=-.42,x=Math.cos(.45),m=Math.sin(.45);for(let O=0;O<n;O++){let A,$,ft,Ct;if(O<f){let q=(O+.5)/f,rt=Math.acos(1-2*q),_t=Math.PI*(1+Math.sqrt(5))*O,yt=1.25+(Math.random()-.5)*.03;A=yt*Math.sin(rt)*Math.cos(_t),$=yt*Math.cos(rt),ft=yt*Math.sin(rt)*Math.sin(_t),Ct=0}else if(O<t){let q=Math.random()*Math.PI*2,rt=1.75+Math.pow(Math.random(),1.6)*.75,_t=Math.cos(q)*rt,yt=Math.sin(q)*rt,ct=(Math.random()-.5)*.04;A=_t,$=ct*Math.cos(p)-yt*Math.sin(p),ft=ct*Math.sin(p)+yt*Math.cos(p);let Et=A*x-$*m;$=A*m+$*x,A=Et,Ct=1}else A=(Math.random()-.5)*22,$=(Math.random()-.5)*12,ft=-4-Math.random()*10,Ct=2;if(l.set([A,$,ft],O*3),Ct===2)c.set([A,$,ft],O*3),h.set([A,$,ft],O*3),a.set([A,$,ft],O*3);else{let q=Math.random(),rt=O%2?0:Math.PI,_t=1.5+Math.pow(q,.8)*1.9+(Math.random()-.5)*.22,yt=Math.random()*Math.PI*2*.85+rt+_t*.55+(Math.random()-.5)*.9;c.set([Math.cos(yt)*_t*1.3,(Math.random()-.5)*.12,Math.sin(yt)*_t],O*3),h.set([(Math.random()-.5)*17,(Math.random()-.5)*9.5,-3+Math.random()*4.5],O*3);let ct=Math.random()*Math.PI*2,Et=Math.acos(2*Math.random()-1),le=5+Math.random()*6;a.set([le*Math.sin(Et)*Math.cos(ct),le*Math.sin(Et)*Math.sin(ct),le*Math.cos(Et)-2],O*3)}d[O]=Math.random(),u[O]=Ct}let g=new Ri;g.setAttribute("position",new dn(a,3)),g.setAttribute("aPlanet",new dn(l,3)),g.setAttribute("aRing",new dn(c,3)),g.setAttribute("aDust",new dn(h,3)),g.setAttribute("aRand",new dn(d,1)),g.setAttribute("aKind",new dn(u,1));let v={uTime:{value:0},uProgress:{value:Oi.progress.v},uMorph:{value:0},uMouse:{value:new J(99,99,0)},uPixel:{value:o.getPixelRatio()},uA:{value:new Qt("#5b86ff")},uB:{value:new Qt("#9fb4ff")},uC:{value:new Qt("#5ee0ff")}},T=new _i({uniforms:v,transparent:!0,depthWrite:!1,blending:$o,vertexShader:`
      uniform float uTime, uProgress, uMorph, uPixel; uniform vec3 uMouse;
      attribute vec3 aPlanet, aRing, aDust; attribute float aRand, aKind;
      varying float vMix, vAlpha;
      vec3 rotY(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }
      vec3 rotX(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x, c*p.y - s*p.z, s*p.y + c*p.z); }
      float stag(float x){ float d = aRand * 0.3; float t = clamp((x - d) / 0.7, 0.0, 1.0); return t*t*(3.0-2.0*t); }
      void main(){
        vec3 planet = rotY(aPlanet, uTime * 0.12);
        vec3 ring = rotX(rotY(aRing, uTime * 0.035), -0.5);
        vec3 dust = aDust + vec3(sin(uTime*0.13 + aRand*30.0), cos(uTime*0.11 + aRand*17.0), 0.0) * 0.35;
        float m1 = stag(clamp(uMorph, 0.0, 1.0)), m2 = stag(clamp(uMorph - 1.0, 0.0, 1.0));
        vec3 shape = aKind > 1.5 ? aPlanet : mix(mix(planet, ring, m1), dust, m2);
        float d = aRand * 0.35; float p = clamp((uProgress - d) / 0.65, 0.0, 1.0); p = p*p*(3.0-2.0*p);
        vec3 pos = mix(position, shape, p);
        pos += 0.025 * vec3(sin(uTime*0.9 + aRand*40.0), cos(uTime*0.7 + aRand*30.0), sin(uTime*0.8 + aRand*20.0));
        vec4 wp = modelMatrix * vec4(pos, 1.0);
        if (aKind < 1.5) {
          vec3 dir = wp.xyz - uMouse; float f = smoothstep(1.1, 0.0, length(dir.xy));
          wp.xyz += normalize(dir + 1e-4) * f * 0.45;
        }
        vec4 mv = viewMatrix * wp;
        gl_Position = projectionMatrix * mv;
        float size = aKind > 1.5 ? 1.8 : (aKind > 0.5 ? 2.6 : 3.1);
        size *= mix(1.0, 0.9, m1);
        gl_PointSize = size * uPixel * (7.0 / -mv.z) * (0.8 + aRand * 0.6);
        vMix = (aKind > 0.5 && aKind < 1.5 && m1 < 0.5) ? 1.0 : aRand;
        vAlpha = (aKind > 1.5 ? 0.55 : 1.0) * mix(1.0, 0.45, m2);
      }`,fragmentShader:`
      uniform vec3 uA, uB, uC; varying float vMix, vAlpha;
      void main(){
        vec2 c = gl_PointCoord - 0.5; float r = length(c);
        if (r > 0.5) discard;
        float a = smoothstep(0.5, 0.0, r);
        vec3 col = vMix > 0.99 ? mix(uB, uC, 0.35) : mix(uA, uB, vMix);
        gl_FragColor = vec4(col, a * vAlpha);
      }`}),y=new Go(g,T),w=new rs;w.add(y),i.add(w);let E=!0;function _(){let O=s.clientWidth,A=s.clientHeight;o.setSize(O,A,!1),r.aspect=O/A,r.updateProjectionMatrix(),E=O/A>1.15,s.classList.toggle("narrow",!E)}_();let M;addEventListener("resize",()=>{clearTimeout(M),M=setTimeout(_,120)});let P=new J(99,99,0),R=new J;hd&&!Hn&&addEventListener("pointermove",O=>{R.set(O.clientX/innerWidth*2-1,-(O.clientY/innerHeight)*2+1,.5).unproject(r),R.sub(r.position).normalize(),P.copy(r.position).addScaledVector(R,-r.position.z/R.z)},{passive:!0});let D={x:0,y:0};function N(O){let A=Oi.keys;if(!A.length)return 0;if(O<=A[0][0])return A[0][1];for(let $=1;$<A.length;$++)if(O<=A[$][0]){let[ft,Ct]=A[$-1],[q,rt]=A[$];return Ct+(rt-Ct)*((O-ft)/Math.max(1,q-ft))}return A[A.length-1][1]}let H=!1,I=0,V=performance.now(),W=0;function B(O){if(H&&(I=requestAnimationFrame(B)),Oi.morph>1.98&&Math.abs(N(scrollY)-Oi.morph)<.01&&(W=(W+1)%2))return;let $=Math.min(.05,(O-V)/1e3);V=O,Oi.morph+=(N(scrollY)-Oi.morph)*Math.min(1,$*5),v.uTime.value+=$,v.uProgress.value=Oi.progress.v,v.uMorph.value=Oi.morph,v.uMouse.value.lerp(P,.08);let ft=Math.min(1,Oi.morph);w.position.set((E?1.95:0)*(1-ft),(E?.1:1.1)*(1-ft),0),w.scale.setScalar((E?.88:.72)+(E?.12:.1)*ft),D.x+=((P.y<50?P.y*.04:0)-D.x)*.04,D.y+=((P.x<50?P.x*.04:0)-D.y)*.04,w.rotation.x=D.x,w.rotation.z=-D.y*.5,o.render(i,r)}function tt(){let O=!document.hidden&&!Hn;O!==H&&(H=O,cancelAnimationFrame(I),O&&(V=performance.now(),I=requestAnimationFrame(B)))}return document.addEventListener("visibilitychange",tt),B(performance.now()),tt(),!0}function e_(){var l,c;let s=h=>{let d=Yt(h);return d?d.getBoundingClientRect().top+scrollY:null},t=innerHeight,e=[[0,0]],n=(l=s("#demo"))!=null?l:s("#servicios"),i=s("#quick"),r=(c=s("#metodologia"))!=null?c:s("#stack"),o=Yt("#metodologia")||Yt("#stack"),a=r!=null?r+o.offsetHeight:null;n!=null&&e.push([n-t*.6,.05],[n,1]),i!=null&&e.push([i-t*.3,1],[i+t*.2,2]),r!=null&&e.push([r-t*.9,2],[r-t*.1,1],[a-t*.6,1],[a,2]),Oi.keys=e.filter(h=>h[0]!=null).sort((h,d)=>h[0]-d[0])}function Gb(){let s=Yt(".s010"),t=s?s_(s):[];if(Hn)return;ae.timeline({defaults:{ease:"power3.out"}}).to(Oi.progress,{v:1,duration:2.8,ease:"power3.inOut"},0).from(".s009",{y:20,opacity:0,duration:.7},.15).from(t,{yPercent:115,duration:1,stagger:.06},.25).from(".s011",{y:24,opacity:0,duration:.8},.75).from(".s012 > a",{y:20,opacity:0,duration:.7,stagger:.08},.9).from(".hero-tags span",{y:14,opacity:0,duration:.5,stagger:.05},1.05).from(".s015 > div",{y:24,opacity:0,duration:.7,stagger:.1},1.15).from(".site-head",{yPercent:-100,duration:.7},.1)}function Hb(){var c,h,d;if(Hn)return;let s=(c=Yt("#inicio"))==null?void 0:c.closest("section");s&&ae.to("#inicio",{yPercent:18,opacity:.2,ease:"none",scrollTrigger:{trigger:s,start:"top top",end:"bottom top",scrub:!0}});let t=Yt(".s015 .s016");if(t&&/^\d+/.test(t.textContent)){let u=t.textContent.replace(/^\d+/,""),f={v:0};ae.to(f,{v:parseInt(t.textContent,10),duration:1.6,delay:1.2,ease:"power2.out",onUpdate:()=>{t.textContent=Math.round(f.v)+u}})}_n(".s020,.s028,.s060,.s072,.s085,.s205,.startup-heading").filter(u=>!u.closest(".app-frame")).forEach(u=>{if(u.getBoundingClientRect().top<innerHeight*.9)return;let f=s_(u);ae.from(f,{yPercent:115,duration:.9,ease:"power3.out",stagger:.035,scrollTrigger:{trigger:u,start:"top 88%",once:!0}})}),_n(".s019,.s059").forEach(u=>{u.getBoundingClientRect().top<innerHeight*.9||ae.from(u,{opacity:0,x:-16,duration:.6,scrollTrigger:{trigger:u,start:"top 90%",once:!0}})});let e=_n(".s023,.s036,.s047,.s063,.s075,.s088,.s091,.s135,.s139,.s143,.s193,.s212,.startup-card").filter(u=>u.getBoundingClientRect().top>innerHeight*.95&&!u.closest(".car"));ae.set(e,{y:36,opacity:0});let n=[],i=0,r=()=>{ae.to(n,{y:0,opacity:1,duration:.8,ease:"power3.out",stagger:.08,overwrite:!0}),n=[]},o=new IntersectionObserver(u=>{u.forEach(f=>{f.isIntersecting&&(n.push(f.target),o.unobserve(f.target))}),n.length&&(clearTimeout(i),i=setTimeout(r,30))},{rootMargin:"0px 0px -6% 0px"});e.forEach(u=>o.observe(u)),["#cat-search","#cat-type","#cat-spec","#cat-reset"].forEach(u=>{var f;return(f=Yt(u))==null?void 0:f.addEventListener(u==="#cat-reset"?"click":"input",()=>{ae.set(e.filter(p=>p.closest("#servicios,#business")),{y:0,opacity:1}),Vt.refresh()})}),(h=Yt("#cat-type"))==null||h.addEventListener("change",()=>Vt.refresh()),(d=Yt("#cat-spec"))==null||d.addEventListener("change",()=>Vt.refresh()),window.addEventListener("hashchange",()=>ae.set(e,{y:0,opacity:1}));let a=Yt("#tl");if(a){a.classList.add("live");let u=_n(".tl-row",a),f=Yt(".tl-dot",a);Vt.create({trigger:a,start:"top 65%",end:"bottom 55%",scrub:!0,onUpdate:p=>{let x=a.offsetHeight-60;ae.set(f,{y:p.progress*x});let m=Math.min(u.length-1,Math.floor(p.progress*u.length));u.forEach((g,v)=>g.classList.toggle("on",v<=m))}}),u[0].classList.add("on"),u.forEach(p=>ae.from(Yt(".tl-num",p),{yPercent:40,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:p,start:"top 85%",once:!0}}))}let l=Yt(".star");l&&(ae.from(_n(".tile",l),{y:50,opacity:0,duration:.9,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:l,start:"top 80%",once:!0}}),ae.from(".g-fg",{strokeDasharray:"0 100",duration:1.6,ease:"power2.out",scrollTrigger:{trigger:l,start:"top 70%",once:!0}}),ae.from(".bars i",{backgroundSize:"0% 100%",duration:1.2,stagger:.12,ease:"power2.out",scrollTrigger:{trigger:l,start:"top 70%",once:!0}})),_n(".ghost").forEach(u=>ae.fromTo(u,{yPercent:-20},{yPercent:25,ease:"none",scrollTrigger:{trigger:u.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})),ae.from(".s191",{y:18,opacity:0,stagger:.04,duration:.5,scrollTrigger:{trigger:".s189",start:"top 92%",once:!0}})}function Wb(){let s=Yt("#burger"),t=Yt("#menu");if(!s||!t)return;let e=_n("a",t),n=i=>{var r;s.setAttribute("aria-expanded",String(i)),s.setAttribute("aria-label",i?"Cerrar men\xFA":"Abrir men\xFA"),document.documentElement.classList.toggle("menu-open",i),i?(t.hidden=!1,Fi==null||Fi.stop(),Hn||ae.fromTo(e,{yPercent:60,opacity:0},{yPercent:0,opacity:1,duration:.6,stagger:.05,ease:"power3.out"}),(r=e[0])==null||r.focus()):(t.hidden=!0,Fi==null||Fi.start())};s.addEventListener("click",()=>n(s.getAttribute("aria-expanded")!=="true")),e.forEach(i=>i.addEventListener("click",()=>n(!1))),addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&(n(!1),s.focus())})}function Xb(){let s=Yt("#car");if(!s)return;let t=_n(".car-item",s),e=Yt("#car-prev"),n=Yt("#car-next"),i=Yt("#car-i"),r=Yt("#car-n"),o=h=>String(h).padStart(2,"0");r.textContent=o(t.length);let a=()=>{let h=s.scrollLeft,d=0,u=1/0;return t.forEach((f,p)=>{let x=Math.abs(f.offsetLeft-s.offsetLeft-h);x<u&&(u=x,d=p)}),d},l=()=>{let h=a();i.textContent=o(h+1),e.disabled=s.scrollLeft<4,n.disabled=s.scrollLeft+s.clientWidth>=s.scrollWidth-4},c=h=>{let d=Math.max(0,Math.min(t.length-1,a()+h));s.scrollTo({left:t[d].offsetLeft-s.offsetLeft,behavior:Hn?"auto":"smooth"})};e.addEventListener("click",()=>c(-1)),n.addEventListener("click",()=>c(1)),s.addEventListener("scroll",()=>requestAnimationFrame(l),{passive:!0}),s.addEventListener("keydown",h=>{h.key==="ArrowRight"&&(h.preventDefault(),c(1)),h.key==="ArrowLeft"&&(h.preventDefault(),c(-1))}),l(),Hn||ae.from(t,{x:120,opacity:0,duration:1,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 85%",once:!0}})}function qb(){let s=Yt("#app-demo");if(!s)return;let t=_n(".scene",s),e=_n(".dtab"),n=_n(".app-item",s),i=Yt("#demo-input"),r=Yt("#demo-status"),o=Yt(".fake-cursor",s),a=Yt(".send",s),l=Yt(".app-main",s),c=JSON.parse(Yt("#demo-data").textContent),h=i.textContent;e.forEach(v=>{let T=document.createElement("span");T.className="prog",v.appendChild(T)});let d=0,u=null,f=!1,p=v=>{let T=v.getBoundingClientRect(),y=l.getBoundingClientRect();return{x:T.left-y.left+T.width/2,y:T.top-y.top+T.height/2}};function x(v){d=v,t.forEach((T,y)=>{T.hidden=y!==v}),e.forEach((T,y)=>{T.classList.toggle("on",y===v),T.setAttribute("aria-pressed",String(y===v)),ae.set(Yt(".prog",T),{scaleX:0})}),n.forEach((T,y)=>T.classList.toggle("on",y===v)),r.textContent=c[v]}function m(v){x(v);let T=t[v],y=Yt(".msg.user",T),w=Yt(".msg.bot",T),E=Yt(".hello",T),_=Yt(".typed",T).dataset.text,M=Yt(".approve",T);ae.set([y,w],{autoAlpha:0,y:14}),ae.set(E,{autoAlpha:1,y:0}),M&&(M.classList.remove("ok"),Yt("button",M).textContent="Aprobar"),i.textContent=h,i.classList.remove("typing");let P=ae.timeline({onComplete:()=>g(d+1)}),R={n:0};if(P.set(o,{autoAlpha:0,x:0,y:0}).to(R,{n:_.length,duration:Math.min(2.2,_.length*.04),ease:"none",onStart:()=>i.classList.add("typing"),onUpdate:()=>{i.textContent=_.slice(0,Math.round(R.n))}},.5).add(()=>{let D=l.getBoundingClientRect();ae.set(o,{left:D.width*.72,top:D.height*.55})}).to(o,{autoAlpha:1,duration:.2}).add(()=>{let D=p(a);ae.to(o,{left:D.x-4,top:D.y-2,duration:.7,ease:"power2.inOut"})}).to({},{duration:.8}).add(()=>{a.classList.add("press"),setTimeout(()=>a.classList.remove("press"),160)}).to(E,{autoAlpha:0,y:-20,duration:.35},"+=0.1").add(()=>{i.textContent=h,i.classList.remove("typing")}).to(y,{autoAlpha:1,y:0,duration:.4,ease:"power3.out"}).to(o,{autoAlpha:0,duration:.3},"<").to(w,{autoAlpha:1,y:0,duration:.5,ease:"power3.out"},"+=0.7").from(_n(".src em, .ext tbody tr, .plan li, .mini-chart i, .note",w),{autoAlpha:0,y:8,scaleY:(D,N)=>N.tagName==="I"?0:1,duration:.45,stagger:.15,ease:"power2.out"},"-=0.1"),M){let D=Yt("button",M);P.add(()=>{let N=p(D);ae.set(o,{left:N.x+60,top:N.y+50})}).to(o,{autoAlpha:1,duration:.2},"+=0.4").add(()=>{let N=p(D);ae.to(o,{left:N.x-4,top:N.y-2,duration:.6,ease:"power2.inOut"})}).to({},{duration:.75}).add(()=>{M.classList.add("ok"),D.textContent="Aprobado \u2713"}).to(o,{autoAlpha:0,duration:.3},"+=0.3")}return P.to({},{duration:2.6}),P.fromTo(Yt(".prog",e[v]),{scaleX:0},{scaleX:1,duration:P.duration(),ease:"none"},0),P}function g(v){if(u==null||u.kill(),v=(v+t.length)%t.length,Hn){x(v);return}u=m(v),f||u.pause()}if(e.forEach((v,T)=>v.addEventListener("click",()=>g(T))),Hn){x(0);return}new IntersectionObserver(([v])=>{if(f=v.isIntersecting,!u){f&&g(0);return}f?u.resume():u.pause()},{threshold:.35}).observe(s),document.addEventListener("visibilitychange",()=>{u&&(document.hidden?u.pause():f&&u.resume())}),t.forEach((v,T)=>{T||ae.set([Yt(".msg.user",v),Yt(".msg.bot",v)],{autoAlpha:0})})}function Yb(){let s=_n(".mq");if(!s.length)return;let t=Yt("#tech-used"),e=s.map(r=>{let o=Yt(".mq-track",r);return[...o.children].forEach(a=>{let l=a.cloneNode(!0);l.setAttribute("aria-hidden","true"),l.tabIndex=-1,o.appendChild(l)}),{row:r,track:o,x:0,dir:Number(r.dataset.dir)||1,drag:null,moved:0,hover:!1}}),n=!1;e.forEach(r=>{r.row.addEventListener("pointerdown",a=>{r.drag={x0:a.clientX,start:r.x,id:a.pointerId},r.moved=0}),r.row.addEventListener("pointermove",a=>{if(!r.drag)return;let l=a.clientX-r.drag.x0;if(r.moved=Math.max(r.moved,Math.abs(l)),r.moved>6&&!r.row.classList.contains("drag")){r.row.classList.add("drag");try{r.row.setPointerCapture(r.drag.id)}catch{}}r.moved>6&&(r.x=r.drag.start+l)});let o=()=>{r.drag=null,r.row.classList.remove("drag")};r.row.addEventListener("pointerup",o),r.row.addEventListener("pointercancel",o),r.row.addEventListener("pointerenter",()=>{r.hover=!0}),r.row.addEventListener("pointerleave",()=>{r.hover=!1}),r.row.addEventListener("click",a=>{let l=a.target.closest(".tech-pill");if(!l)return;if(r.moved>6){a.preventDefault();return}_n(".tech-pill.on").forEach(h=>h.classList.remove("on")),l.classList.add("on");let c=(l.lastChild&&l.lastChild.textContent||l.textContent).trim();t.textContent=l.dataset.used?c+" \u2192 "+l.dataset.used:c})});let i=(r,o)=>{n&&e.forEach(a=>{let l=a.track.scrollWidth/2;!a.drag&&!Hn&&(a.x-=a.dir*(a.hover?.25:1)*.045*o),a.x<=-l&&(a.x+=l),a.x>0&&(a.x-=l),a.track.style.transform="translate3d("+a.x.toFixed(1)+"px,0,0)"})};ae.ticker.add(i),new IntersectionObserver(r=>{n=r.some(o=>o.isIntersecting)||e.some(o=>{let a=o.row.getBoundingClientRect();return a.bottom>0&&a.top<innerHeight})}).observe(s[0]),new IntersectionObserver(()=>{n=e.some(r=>{let o=r.row.getBoundingClientRect();return o.bottom>0&&o.top<innerHeight})}).observe(s[s.length-1])}function Zb(){Hn||!hd||_n(".s007,.s013,.s014,.s071,.s142,.s207,.s217,.car-btn,.star-play,.burger").forEach(s=>{let t=ae.quickTo(s,"x",{duration:.4,ease:"power3.out"}),e=ae.quickTo(s,"y",{duration:.4,ease:"power3.out"});s.addEventListener("pointermove",n=>{let i=s.getBoundingClientRect();t((n.clientX-i.left-i.width/2)*.22),e((n.clientY-i.top-i.height/2)*.32)}),s.addEventListener("pointerleave",()=>{t(0),e(0)})})}var n_=Yt("#gl");n_&&Vb(n_);Wb();Gb();var i_=window.requestIdleCallback||(s=>setTimeout(s,120));i_(()=>{Hb(),i_(()=>{Xb(),qb(),Yb(),Zb(),e_(),Vt.addEventListener("refresh",e_),Vt.refresh()},{timeout:1200})},{timeout:800});addEventListener("load",()=>Vt.refresh());})();
