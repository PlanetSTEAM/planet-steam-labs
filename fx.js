(()=>{var Dd=0,tu=1,Nd=2;var qa=1,Ud=2,Js=3,Nr=0,Nn=1,Vi=2,rs=0,$s=1,Ya=2,eu=3,nu=4,Od=5;var ss=100,Fd=101,Bd=102,zd=103,kd=104,Vd=200,Gd=201,Hd=202,Wd=203,iu=204,ru=205,Xd=206,qd=207,Yd=208,Zd=209,Jd=210,$d=211,Kd=212,Qd=213,jd=214,ul=0,fl=1,dl=2,Hs=3,pl=4,ml=5,gl=6,_l=7,su=0,tp=1,ep=2,Gi=0,au=1,ou=2,lu=3,cu=4,hu=5,uu=6,fu=7;var du=300,as=301,Ks=302,Xl=303,ql=304,xl=1e3,Fi=1001,vl=1002,hn=1003,np=1004;var Za=1005;var Dn=1006,Yl=1007;var or=1008;var ri=1009,pu=1010,mu=1011,Qs=1012,Zl=1013,Ri=1014,Pi=1015,Ii=1016,Jl=1017,$l=1018,os=1020,gu=35902,_u=35899,xu=1021,vu=1022,Li=1023,sr=1026,lr=1027,yu=1028,Kl=1029,Ur=1030,Ql=1031;var jl=1033,Ja=33776,$a=33777,Ka=33778,Qa=33779,tc=35840,ec=35841,nc=35842,ic=35843,rc=36196,sc=37492,ac=37496,oc=37488,lc=37489,ja=37490,cc=37491,hc=37808,uc=37809,fc=37810,dc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,vc=37817,yc=37818,Sc=37819,Mc=37820,bc=37821,Tc=36492,wc=36494,Ec=36495,Ac=36283,Cc=36284,to=36285,Rc=36286;var Ca=2300,yl=2301,cl=2302,Yh=2303,Zh=2400,Jh=2401,$h=2402;var ip=3200;var Su=0,rp=1,cr="",ti="srgb",Ra="srgb-linear",Pa="linear",ge="srgb";var hl=7680;var sp=519,ap=512,op=513,lp=514,Mu=515,cp=516,hp=517,bu=518,Tu=519,up=35044;var wu="300 es",pi=2e3,Ia=2001;function Qg(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function jg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function La(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fp(){let r=La("canvas");return r.style.display="block",r}var hd={},Ws=null;function Eu(...r){let t="THREE."+r.shift();Ws?Ws("log",t,...r):console.log(t,...r)}function dp(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Bt(...r){r=dp(r);let t="THREE."+r.shift();if(Ws)Ws("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function kt(...r){r=dp(r);let t="THREE."+r.shift();if(Ws)Ws("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Aa(...r){let t=r.join(" ");t in hd||(hd[t]=!0,Bt(...r))}function pp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var mp={[ul]:ul,[dl]:gl,[pl]:pl,[Hs]:ml,[fl]:fl,[gl]:dl,[_l]:_l,[ml]:Hs},Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Eh=Math.PI/180,Sl=180/Math.PI;function eo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function re(r,t,e){return Math.max(t,Math.min(e,r))}function t_(r,t){return(r%t+t)%t}function Ah(r,t,e){return(1-e)*r+e*t}function gp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Au(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function e_(r,t){if(t.constructor===Float32Array)return r;let e=Au(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function n_(r,t){if(t.constructor===Float32Array)return r;let e=Au(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var Lu=class Lu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lu.prototype.isVector2=!0;var ue=Lu,zi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],m=s[a+2],x=s[a+3];if(d!==x||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*x;p<0&&(u=-u,f=-f,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);g=Math.sin(g*v)/T,o=Math.sin(o*v)/T,l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+x*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],m=s[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Du=class Du{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ud.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ud.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Du.prototype.isVector3=!0;var $=Du,Ch=new $,ud=new zi,Nu=class Nu{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],p=i[3],g=i[6],v=i[1],T=i[4],y=i[7],w=i[2],E=i[5],_=i[8];return s[0]=a*x+o*v+l*w,s[3]=a*p+o*T+l*E,s[6]=a*g+o*y+l*_,s[1]=c*x+h*v+d*w,s[4]=c*p+h*T+d*E,s[7]=c*g+h*y+d*_,s[2]=u*x+f*v+m*w,s[5]=u*p+f*T+m*E,s[8]=u*g+f*y+m*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Aa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rh.makeScale(t,e)),this}rotate(t){return Aa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rh.makeRotation(-t)),this}translate(t,e){return Aa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Nu.prototype.isMatrix3=!0;var Gt=Nu,Rh=new Gt,fd=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dd=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i_(){let r={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ge&&(i.r=rr(i.r),i.g=rr(i.g),i.b=rr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cr?Pa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ra]:{primaries:t,whitePoint:n,transfer:Pa,toXYZ:fd,fromXYZ:dd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:fd,fromXYZ:dd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}var ne=i_();function rr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Rs,Ml=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Rs===void 0&&(Rs=La("canvas")),Rs.width=t.width,Rs.height=t.height;let i=Rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=rr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rr(e[n]/255)*255):e[n]=rr(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},r_=0,Xs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=eo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ph(i[a].image)):s.push(Ph(i[a]))}else s=Ph(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ph(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Ml.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var s_=0,Ih=new $,Hn=class r extends Bi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Fi,i=Fi,s=Dn,a=or,o=Li,l=ri,c=r.DEFAULT_ANISOTROPY,h=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=eo(),this.name="",this.source=new Xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xl:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xl:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=du;Hn.DEFAULT_ANISOTROPY=1;var Uu=class Uu{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(f+1)/2,w=(g+1)/2,E=(h+u)/4,_=(d+x)/4,M=(m+p)/4;return T>y&&T>w?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=E/n,s=_/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=M/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=_/s,i=M/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uu.prototype.isVector4=!0;var De=Uu,bl=class extends Bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Hn({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Xs(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Da=class extends Hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tl=class extends Hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Wl=class Wl{constructor(t,e,n,i,s,a,o,l,c,h,d,u,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,u,f,m,x,p)}set(t,e,n,i,s,a,o,l,c,h,d,u,f,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ps.setFromMatrixColumn(t,0).length(),s=1/Ps.setFromMatrixColumn(t,1).length(),a=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a_,t,o_)}lookAt(t,e,n){let i=this.elements;return Qn.subVectors(t,e),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Mr.crossVectors(n,Qn),Mr.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Mr.crossVectors(n,Qn)),Mr.normalize(),Vo.crossVectors(Qn,Mr),i[0]=Mr.x,i[4]=Vo.x,i[8]=Qn.x,i[1]=Mr.y,i[5]=Vo.y,i[9]=Qn.y,i[2]=Mr.z,i[6]=Vo.z,i[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],T=n[7],y=n[11],w=n[15],E=i[0],_=i[4],M=i[8],P=i[12],C=i[1],N=i[5],U=i[9],H=i[13],I=i[2],V=i[6],W=i[10],D=i[14],Y=i[3],B=i[7],R=i[11],Q=i[15];return s[0]=a*E+o*C+l*I+c*Y,s[4]=a*_+o*N+l*V+c*B,s[8]=a*M+o*U+l*W+c*R,s[12]=a*P+o*H+l*D+c*Q,s[1]=h*E+d*C+u*I+f*Y,s[5]=h*_+d*N+u*V+f*B,s[9]=h*M+d*U+u*W+f*R,s[13]=h*P+d*H+u*D+f*Q,s[2]=m*E+x*C+p*I+g*Y,s[6]=m*_+x*N+p*V+g*B,s[10]=m*M+x*U+p*W+g*R,s[14]=m*P+x*H+p*D+g*Q,s[3]=v*E+T*C+y*I+w*Y,s[7]=v*_+T*N+y*V+w*B,s[11]=v*M+T*U+y*W+w*R,s[15]=v*P+T*H+y*D+w*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15],v=l*f-c*u,T=o*f-c*d,y=o*u-l*d,w=a*f-c*h,E=a*u-l*h,_=a*d-o*h;return e*(x*v-p*T+g*y)-n*(m*v-p*w+g*E)+i*(m*T-x*w+g*_)-s*(m*y-x*E+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],v=e*o-n*a,T=e*l-i*a,y=e*c-s*a,w=n*l-i*o,E=n*c-s*o,_=i*c-s*l,M=h*x-d*m,P=h*p-u*m,C=h*g-f*m,N=d*p-u*x,U=d*g-f*x,H=u*g-f*p,I=v*H-T*U+y*N+w*C-E*P+_*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return t[0]=(o*H-l*U+c*N)*V,t[1]=(i*U-n*H-s*N)*V,t[2]=(x*_-p*E+g*w)*V,t[3]=(u*E-d*_-f*w)*V,t[4]=(l*C-a*H-c*P)*V,t[5]=(e*H-i*C+s*P)*V,t[6]=(p*y-m*_-g*T)*V,t[7]=(h*_-u*y+f*T)*V,t[8]=(a*U-o*C+c*M)*V,t[9]=(n*C-e*U-s*M)*V,t[10]=(m*E-x*y+g*v)*V,t[11]=(d*y-h*E-f*v)*V,t[12]=(o*P-a*N-l*M)*V,t[13]=(e*N-n*P+i*M)*V,t[14]=(x*T-m*w-p*v)*V,t[15]=(h*w-d*T+u*v)*V,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,m=s*d,x=a*h,p=a*d,g=o*d,v=l*c,T=l*h,y=l*d,w=n.x,E=n.y,_=n.z;return i[0]=(1-(x+g))*w,i[1]=(f+y)*w,i[2]=(m-T)*w,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+g))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(m+T)*_,i[9]=(p-v)*_,i[10]=(1-(u+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Ps.set(i[0],i[1],i[2]).length(),o=Ps.set(i[4],i[5],i[6]).length(),l=Ps.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ti.copy(this);let c=1/a,h=1/o,d=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,e.setFromRotationMatrix(Ti),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=pi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===pi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ia)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=pi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===pi)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ia)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Wl.prototype.isMatrix4=!0;var Le=Wl,Ps=new $,Ti=new Le,a_=new $(0,0,0),o_=new $(1,1,1),Mr=new $,Vo=new $,Qn=new $,pd=new Le,md=new zi,Cr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return md.setFromEuler(this),this.setFromQuaternion(md,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cr.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},l_=0,gd=new $,Is=new zi,Qi=new Le,Go=new $,ba=new $,c_=new $,h_=new zi,_d=new $(1,0,0),xd=new $(0,1,0),vd=new $(0,0,1),yd={type:"added"},u_={type:"removed"},Ls={type:"childadded",child:null},Lh={type:"childremoved",child:null},ni=class r extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new $,e=new Cr,n=new zi,i=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Gt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(_d,t)}rotateY(t){return this.rotateOnAxis(xd,t)}rotateZ(t){return this.rotateOnAxis(vd,t)}translateOnAxis(t,e){return gd.copy(t).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_d,t)}translateY(t){return this.translateOnAxis(xd,t)}translateZ(t){return this.translateOnAxis(vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Go.copy(t):Go.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(ba,Go,this.up):Qi.lookAt(Go,ba,this.up),this.quaternion.setFromRotationMatrix(Qi),i&&(Qi.extractRotation(i.matrixWorld),Is.setFromRotationMatrix(Qi),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yd),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u_),Lh.child=t,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yd),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,t,c_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,h_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ni.DEFAULT_UP=new $(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ir=class extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},f_={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Dh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=t_(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Dh(a,s,t+1/3),this.g=Dh(a,s,t),this.b=Dh(a,s,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=ti){function n(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ti){let n=_p[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return ne.workingToColorSpace(Mn.copy(this),t),Math.round(re(Mn.r*255,0,255))*65536+Math.round(re(Mn.g*255,0,255))*256+Math.round(re(Mn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Mn.copy(this),e);let n=Mn.r,i=Mn.g,s=Mn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=ti){ne.workingToColorSpace(Mn.copy(this),t);let e=Mn.r,n=Mn.g,i=Mn.b;return t!==ti?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(br),this.setHSL(br.h+t,br.s+e,br.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(br),t.getHSL(Ho);let n=Ah(br.h,Ho.h,e),i=Ah(br.s,Ho.s,e),s=Ah(br.l,Ho.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Kt;Kt.NAMES=_p;var Ua=class extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wi=new $,ji=new $,Nh=new $,tr=new $,Ds=new $,Ns=new $,Sd=new $,Uh=new $,Oh=new $,Fh=new $,Bh=new De,zh=new De,kh=new De,Ar=class r{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wi.subVectors(t,e),i.cross(wi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){wi.subVectors(i,e),ji.subVectors(n,e),Nh.subVectors(t,e);let a=wi.dot(wi),o=wi.dot(ji),l=wi.dot(Nh),c=ji.dot(ji),h=ji.dot(Nh),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tr.x),l.addScaledVector(a,tr.y),l.addScaledVector(o,tr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Bh.setScalar(0),zh.setScalar(0),kh.setScalar(0),Bh.fromBufferAttribute(t,e),zh.fromBufferAttribute(t,n),kh.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Bh,s.x),a.addScaledVector(zh,s.y),a.addScaledVector(kh,s.z),a}static isFrontFacing(t,e,n,i){return wi.subVectors(n,e),ji.subVectors(t,e),wi.cross(ji).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),wi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Ds.subVectors(i,n),Ns.subVectors(s,n),Uh.subVectors(t,n);let l=Ds.dot(Uh),c=Ns.dot(Uh);if(l<=0&&c<=0)return e.copy(n);Oh.subVectors(t,i);let h=Ds.dot(Oh),d=Ns.dot(Oh);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Ds,a);Fh.subVectors(t,s);let f=Ds.dot(Fh),m=Ns.dot(Fh);if(m>=0&&f<=m)return e.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ns,o);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Sd.subVectors(s,i),o=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Sd,o);let g=1/(p+x+u);return a=x*g,o=u*g,e.copy(n).addScaledVector(Ds,a).addScaledVector(Ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rr=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ei):Ei.fromBufferAttribute(s,a),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ta),Xo.subVectors(this.max,Ta),Us.subVectors(t.a,Ta),Os.subVectors(t.b,Ta),Fs.subVectors(t.c,Ta),Tr.subVectors(Os,Us),wr.subVectors(Fs,Os),Qr.subVectors(Us,Fs);let e=[0,-Tr.z,Tr.y,0,-wr.z,wr.y,0,-Qr.z,Qr.y,Tr.z,0,-Tr.x,wr.z,0,-wr.x,Qr.z,0,-Qr.x,-Tr.y,Tr.x,0,-wr.y,wr.x,0,-Qr.y,Qr.x,0];return!Vh(e,Us,Os,Fs,Xo)||(e=[1,0,0,0,1,0,0,0,1],!Vh(e,Us,Os,Fs,Xo))?!1:(qo.crossVectors(Tr,wr),e=[qo.x,qo.y,qo.z],Vh(e,Us,Os,Fs,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(er),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},er=[new $,new $,new $,new $,new $,new $,new $,new $],Ei=new $,Wo=new Rr,Us=new $,Os=new $,Fs=new $,Tr=new $,wr=new $,Qr=new $,Ta=new $,Xo=new $,qo=new $,jr=new $;function Vh(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){jr.fromArray(r,s);let o=i.x*Math.abs(jr.x)+i.y*Math.abs(jr.y)+i.z*Math.abs(jr.z),l=t.dot(jr),c=e.dot(jr),h=n.dot(jr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $e=new $,Yo=new ue,d_=0,cn=class extends Bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=up,this.updateRanges=[],this.gpuType=Pi,this.version=0,this._normalizationScale=t!==void 0?Au(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):e_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):n_(t,this.array)}};var Oa=class extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fa=class extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var mi=class extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}},p_=new Rr,wa=new $,Gh=new $,ns=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):p_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wa.subVectors(t,this.center);let e=wa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wa.copy(t.center).add(Gh)),this.expandByPoint(wa.copy(t.center).sub(Gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},m_=0,di=new Le,Hh=new ni,Bs=new $,jn=new Rr,Ea=new Rr,ln=new $,Ci=class r extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qg(t)?Fa:Oa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return Hh.lookAt(t),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(jn.min,Ea.min),jn.expandByPoint(ln),ln.addVectors(jn.max,Ea.max),jn.expandByPoint(ln)):(jn.expandByPoint(Ea.min),jn.expandByPoint(Ea.max))}jn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ln.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ln));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(t,c),ln.add(Bs)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new $,l[P]=new $;let h=new $,d=new $,u=new $,f=new ue,m=new ue,x=new ue,p=new $,g=new $;function v(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,N),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,N),d.sub(h),u.sub(h),m.sub(f),x.sub(f);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(U),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(U),o[P].add(p),o[C].add(p),o[N].add(p),l[P].add(g),l[C].add(g),l[N].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,C=T.length;P<C;++P){let N=T[P],U=N.start,H=N.count;for(let I=U,V=U+H;I<V;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new $,w=new $,E=new $,_=new $;function M(P){E.fromBufferAttribute(i,P),_.copy(E);let C=o[P];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),w.crossVectors(_,C);let U=w.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,U)}for(let P=0,C=n.count;P<C;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new $,s=new $,a=new $,o=new $,l=new $,c=new $,h=new $,d=new $;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new cn(u,h,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wh=new $,g_=new $,__=new Gt,Ai=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wh.subVectors(n,e).cross(g_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Wh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||__.getNormalMatrix(t),i=this.coplanarPoint(Wh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},x_=0,Pr=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=$s,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=ru,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hl,this.stencilZFail=hl,this.stencilZPass=hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ai().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var nr=new $,Xh=new $,Zo=new $,Jo=new $,Ba=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=nr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nr.copy(this.origin).addScaledVector(this.direction,e),nr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xh.copy(t).add(e).multiplyScalar(.5),Zo.copy(e).sub(t).normalize(),Jo.copy(this.origin).sub(Xh);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Zo),o=Jo.dot(this.direction),l=-Jo.dot(Zo),c=Jo.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Xh).addScaledVector(Zo,u),f}intersectSphere(t,e){if(t.radius<0)return null;nr.subVectors(t.center,this.origin);let n=nr.dot(this.direction),i=nr.dot(nr)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,nr)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,p=e.z-a.z,g=n.x-a.x,v=n.y-a.y,T=n.z-a.z,y=Math.abs(l),w=Math.abs(c),E=Math.abs(h),_,M,P,C,N,U,H,I,V,W,D,Y;if(y>=w&&y>=E?(P=l,U=d,V=m,Y=g,l>=0?(_=c,M=h,C=u,N=f,H=x,I=p,W=v,D=T):(_=h,M=c,C=f,N=u,H=p,I=x,W=T,D=v)):w>=E?(P=c,U=u,V=x,Y=v,c>=0?(_=h,M=l,C=f,N=d,H=p,I=m,W=T,D=g):(_=l,M=h,C=d,N=f,H=m,I=p,W=g,D=T)):(P=h,U=f,V=p,Y=T,h>=0?(_=l,M=c,C=d,N=u,H=m,I=x,W=g,D=v):(_=c,M=l,C=u,N=d,H=x,I=m,W=v,D=g)),P===0)return null;let B=_/P,R=M/P,Q=1/P,_t=C-B*U,Et=N-R*U,q=H-B*V,ot=I-R*V,vt=W-B*Y,Mt=D-R*Y,ht=vt*ot-Mt*q,Nt=_t*Mt-Et*vt,xe=q*Et-ot*_t;if(i){if(ht<0||Nt<0||xe<0)return null}else if((ht<0||Nt<0||xe<0)&&(ht>0||Nt>0||xe>0))return null;let At=ht+Nt+xe;if(At===0)return null;let Wt=Q*(ht*U+Nt*V+xe*Y);return(At>0?Wt<0:Wt>0)?null:this.at(Wt/At,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wl=class extends Pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Md=new Le,ts=new Ba,$o=new ns,bd=new $,Ko=new $,Qo=new $,jo=new $,qh=new $,tl=new $,Td=new $,el=new $,ki=class extends ni{constructor(t=new Ci,e=new wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(qh.fromBufferAttribute(d,t),a?tl.addScaledVector(qh,h):tl.addScaledVector(qh.sub(e),h))}e.add(tl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),ts.copy(t.ray).recast(t.near),!($o.containsPoint(ts.origin)===!1&&(ts.intersectSphere($o,bd)===null||ts.origin.distanceToSquared(bd)>(t.far-t.near)**2))&&(Md.copy(s).invert(),ts.copy(t.ray).applyMatrix4(Md),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=T;y<w;y+=3){let E=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);i=nl(this,g,t,n,c,h,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);i=nl(this,a,t,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=T;y<w;y+=3){let E=y,_=y+1,M=y+2;i=nl(this,g,t,n,c,h,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=p,T=p+1,y=p+2;i=nl(this,a,t,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function v_(r,t,e,n,i,s,a,o){let l;if(t.side===Nn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Nr,o),l===null)return null;el.copy(o),el.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(el);return c<e.near||c>e.far?null:{distance:c,point:el.clone(),object:r}}function nl(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ko),r.getVertexPosition(l,Qo),r.getVertexPosition(c,jo);let h=v_(r,t,e,n,Ko,Qo,jo,Td);if(h){let d=new $;Ar.getBarycoord(Td,Ko,Qo,jo,d),i&&(h.uv=Ar.getInterpolatedAttribute(i,o,l,c,d,new ue)),s&&(h.uv1=Ar.getInterpolatedAttribute(s,o,l,c,d,new ue)),a&&(h.normal=Ar.getInterpolatedAttribute(a,o,l,c,d,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new $,materialIndex:0};Ar.getNormal(Ko,Qo,jo,u.normal),h.face=u,h.barycoord=d}return h}var El=class extends Hn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=hn,h=hn,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=new ns,y_=new ue(.5,.5),il=new $,is=class{constructor(t=new Ai,e=new Ai,n=new Ai,i=new Ai,s=new Ai,a=new Ai){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],x=s[9],p=s[10],g=s[11],v=s[12],T=s[13],y=s[14],w=s[15];if(i[0].setComponents(c-a,f-h,g-m,w-v).normalize(),i[1].setComponents(c+a,f+h,g+m,w+v).normalize(),i[2].setComponents(c+o,f+d,g+x,w+T).normalize(),i[3].setComponents(c-o,f-d,g-x,w-T).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,g-p,w-y).normalize();else if(i[4].setComponents(c-l,f-u,g-p,w-y).normalize(),e===pi)i[5].setComponents(c+l,f+u,g+p,w+y).normalize();else if(e===Ia)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);let e=y_.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(il.x=i.normal.x>0?t.max.x:t.min.x,il.y=i.normal.y>0?t.max.y:t.min.y,il.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(il)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wd=new Le,Al=class r{constructor(){this.coordinateSystem=pi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];wd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new is),n[i].setFromProjectionMatrix(wd,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new is),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Cl=class extends Pr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ed=new Le,Kh=new Ba,rl=new ns,sl=new $,za=class extends ni{constructor(t=new Ci,e=new Cl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(i),rl.radius+=s,t.ray.intersectsSphere(rl)===!1)return;Ed.copy(i).invert(),Kh.copy(t.ray).applyMatrix4(Ed);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,x=f;m<x;m++){let p=c.getX(m);sl.fromBufferAttribute(d,p),Ad(sl,p,l,i,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,x=f;m<x;m++)sl.fromBufferAttribute(d,m),Ad(sl,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ad(r,t,e,n,i,s,a){let o=Kh.distanceSqToPoint(r);if(o<e){let l=new $;Kh.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ka=class extends Hn{constructor(t=[],e=as,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ar=class extends Hn{constructor(t,e,n=Ri,i,s,a,o=hn,l=hn,c,h=sr,d=1){if(h!==sr&&h!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Va=class extends ar{constructor(t,e=Ri,n=as,i,s,a=hn,o=hn,l,c=sr){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ga=class extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ys=class r extends Ci{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new mi(c,3)),this.setAttribute("normal",new mi(h,3)),this.setAttribute("uv",new mi(d,2));function m(x,p,g,v,T,y,w,E,_,M,P){let C=y/_,N=w/M,U=y/2,H=w/2,I=E/2,V=_+1,W=M+1,D=0,Y=0,B=new $;for(let R=0;R<W;R++){let Q=R*N-H;for(let _t=0;_t<V;_t++){let Et=_t*C-U;B[x]=Et*v,B[p]=Q*T,B[g]=I,c.push(B.x,B.y,B.z),B[x]=0,B[p]=0,B[g]=E>0?1:-1,h.push(B.x,B.y,B.z),d.push(_t/_),d.push(1-R/M),D+=1}}for(let R=0;R<M;R++)for(let Q=0;Q<_;Q++){let _t=u+Q+V*R,Et=u+Q+V*(R+1),q=u+(Q+1)+V*(R+1),ot=u+(Q+1)+V*R;l.push(_t,Et,ot),l.push(Et,q,ot),Y+=6}o.addGroup(f,Y,P),f+=Y,u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ha=class r extends Ci{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let v=g*u-a;for(let T=0;T<c;T++){let y=T*d-s;m.push(y,-v,0),x.push(0,0,1),p.push(T/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let T=v+c*g,y=v+c*(g+1),w=v+1+c*(g+1),E=v+1+c*g;f.push(T,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new mi(m,3)),this.setAttribute("normal",new mi(x,3)),this.setAttribute("uv",new mi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function ls(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Cd(i))i.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Cd(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function bn(r){let t={};for(let e=0;e<r.length;e++){let n=ls(r[e]);for(let i in n)t[i]=n[i]}return t}function Cd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function S_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Cu(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var xp={clone:ls,merge:bn},M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends Pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=b_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=S_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new $().fromArray(i.value);break;case"v4":this.uniforms[n].value=new De().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Rl=class extends gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Pl=class extends Pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Il=class extends Pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function zs(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function al(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Ir=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends Ir{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jh:s=t,o=2*e-n;break;case $h:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jh:a=t,l=2*n-e;break;case $h:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,v=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,T=(-1-f)*p+(1.5+f)*x+.5*m,y=f*p-f*x;for(let w=0;w!==o;++w)s[w]=g*a[h+w]+v*a[c+w]+T*a[l+w]+y*a[d+w];return s}},Dl=class extends Ir{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},Nl=class extends Ir{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ul=class extends Ir{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),x=1-m;for(let p=0;p!==o;++p)s[p]=a[c+p]*x+a[l+p]*m;return s}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=f*u+m*2,v=d[g],T=d[g+1],y=t*u+m*2,w=h[y],E=h[y+1],_=w_(n,e,v,w,i);s[m]=vp(_,x,T,E,p)}return s}};function vp(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function T_(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function w_(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=vp(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=T_(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var ii=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zs(e,this.TimeBufferType),this.values=zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zs(t.times,Array),values:zs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),al(t.settings)&&(n.settings={inTangents:zs(t.settings.inTangents,Array),outTangents:zs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ul(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ca:e=this.InterpolantFactoryMethodDiscrete;break;case yl:e=this.InterpolantFactoryMethodLinear;break;case cl:e=this.InterpolantFactoryMethodSmooth;break;case Yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return cl;case this.InterpolantFactoryMethodBezier:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;al(this.settings)&&(Rd(this.settings.inTangents,t),Rd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;al(this.settings)&&(Pd(this.settings.inTangents,t),Pd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&jg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cl,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,al(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Rd(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function Pd(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=yl;var Lr=class extends ii{constructor(t,e,n){super(t,e,n)}};Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=Ca;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};Ol.prototype.ValueTypeName="color";var Fl=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};Fl.prototype.ValueTypeName="number";var Bl=class extends Ir{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)zi.slerpFlat(s,0,a,c-o,a,c,l);return s}},Wa=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}};Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends ii{constructor(t,e,n){super(t,e,n)}};Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Ca;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends ii{constructor(t,e,n,i){super(t,e,n,i)}};zl.prototype.ValueTypeName="vector";var kl=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yp=new kl,Vl=class{constructor(t){this.manager=t!==void 0?t:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ol=new $,ll=new zi,Oi=new $,Xa=class extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ol,ll,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,ll,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ol,ll,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,ll,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Er=new $,Id=new ue,Ld=new ue,Ln=class extends Xa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Eh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sl*2*Math.atan(Math.tan(Eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Er.x,Er.y).multiplyScalar(-t/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-t/Er.z)}getViewSize(t,e){return this.getViewBounds(t,Id,Ld),e.subVectors(Ld,Id)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Eh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Gl=class extends Xa{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ks=-90,Vs=1,Zs=class extends ni{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ln(ks,Vs,t,e);i.layers=this.layers,this.add(i);let s=new Ln(ks,Vs,t,e);s.layers=this.layers,this.add(s);let a=new Ln(ks,Vs,t,e);a.layers=this.layers,this.add(a);let o=new Ln(ks,Vs,t,e);o.layers=this.layers,this.add(o);let l=new Ln(ks,Vs,t,e);l.layers=this.layers,this.add(l);let c=new Ln(ks,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Hl=class extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ru="\\[\\]\\.:\\/",E_=new RegExp("["+Ru+"]","g"),Pu="[^"+Ru+"]",A_="[^"+Ru.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",Pu),R_=/(WCOD+)?/.source.replace("WCOD",A_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pu),I_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pu),L_=new RegExp("^"+C_+R_+P_+I_+"$"),D_=["material","materials","bones","map"],Qh=class{constructor(t,e,n){let i=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(E_,"")}static parseTrackName(t){let e=L_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);D_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Qh;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ob=new Float32Array(1);var Ou=class Ou{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};Ou.prototype.isMatrix2=!0;var jh=Ou;function Iu(r,t,e,n){let i=N_(n);switch(e){case xu:return r*t;case yu:return r*t/i.components*i.byteLength;case Kl:return r*t/i.components*i.byteLength;case Ur:return r*t*2/i.components*i.byteLength;case Ql:return r*t*2/i.components*i.byteLength;case vu:return r*t*3/i.components*i.byteLength;case Li:return r*t*4/i.components*i.byteLength;case jl:return r*t*4/i.components*i.byteLength;case Ja:case $a:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ka:case Qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(r,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(r,8)*Math.max(t,8)/2;case rc:case sc:case oc:case lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ac:case ja:case cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case fc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Tc:case wc:case Ec:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ac:case Cc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case to:case Rc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function N_(r){switch(r){case ri:case pu:return{byteLength:1,components:1};case Qs:case mu:case Ii:return{byteLength:2,components:1};case Jl:case $l:return{byteLength:2,components:4};case Ri:case Zl:case Pi:return{byteLength:4,components:1};case gu:case _u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Gp(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function O_(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var F_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B_=`#ifdef USE_ALPHAHASH
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
#endif`,z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H_=`#ifdef USE_AOMAP
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
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X_=`#ifdef USE_BATCHING
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
#endif`,q_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$_=`#ifdef USE_IRIDESCENCE
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
#endif`,K_=`#ifdef USE_BUMPMAP
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
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,a0=`#define PI 3.141592653589793
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
} // validated`,o0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#endif`,N0=`uniform sampler2D dfgLUT;
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
}`,U0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
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
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sx=`#ifdef USE_NORMALMAP
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
#endif`,ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sx=`float getShadowMask() {
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
}`,Mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fx=`uniform sampler2D t2D;
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform float backgroundBlurriness;
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Wx=`#define DISTANCE
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
}`,Xx=`#define DISTANCE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`uniform float scale;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Qx=`#define LAMBERT
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
}`,jx=`#define LAMBERT
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
}`,tv=`#define MATCAP
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
}`,ev=`#define MATCAP
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
}`,nv=`#define NORMAL
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
}`,iv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,sv=`#define PHONG
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
}`,av=`#define STANDARD
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
}`,ov=`#define STANDARD
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
}`,lv=`#define TOON
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
}`,cv=`#define TOON
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
}`,hv=`uniform float size;
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
}`,uv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,dv=`uniform vec3 color;
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
}`,pv=`uniform float rotation;
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
}`,mv=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:F_,alphahash_pars_fragment:B_,alphamap_fragment:z_,alphamap_pars_fragment:k_,alphatest_fragment:V_,alphatest_pars_fragment:G_,aomap_fragment:H_,aomap_pars_fragment:W_,batching_pars_vertex:X_,batching_vertex:q_,begin_vertex:Y_,beginnormal_vertex:Z_,bsdfs:J_,iridescence_fragment:$_,bumpmap_pars_fragment:K_,clipping_planes_fragment:Q_,clipping_planes_pars_fragment:j_,clipping_planes_pars_vertex:t0,clipping_planes_vertex:e0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:r0,color_vertex:s0,common:a0,defaultnormal_vertex:o0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:h0,emissivemap_pars_fragment:u0,colorspace_fragment:f0,colorspace_pars_fragment:d0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:C0,envmap_vertex:x0,fog_vertex:v0,fog_pars_vertex:y0,fog_fragment:S0,fog_pars_fragment:M0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:T0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:E0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:P0,lights_phong_fragment:I0,lights_phong_pars_fragment:L0,lights_physical_fragment:D0,lights_physical_pars_fragment:N0,lights_fragment_begin:U0,lights_fragment_maps:O0,lights_fragment_end:F0,lightprobes_pars_fragment:B0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:G0,map_fragment:H0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:J0,morphcolor_vertex:$0,morphnormal_vertex:K0,morphtarget_pars_vertex:Q0,morphtarget_vertex:j0,normal_fragment_begin:tx,normal_fragment_maps:ex,normal_pars_fragment:nx,normal_pars_vertex:ix,normal_vertex:rx,normalmap_pars_fragment:sx,clearcoat_normal_fragment_begin:ax,clearcoat_normal_fragment_maps:ox,clearcoat_pars_fragment:lx,iridescence_pars_fragment:cx,opaque_fragment:hx,packing:ux,premultiplied_alpha_fragment:fx,project_vertex:dx,dithering_fragment:px,dithering_pars_fragment:mx,roughnessmap_fragment:gx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:vx,shadowmap_vertex:yx,shadowmask_pars_fragment:Sx,skinbase_vertex:Mx,skinning_pars_vertex:bx,skinning_vertex:Tx,skinnormal_vertex:wx,specularmap_fragment:Ex,specularmap_pars_fragment:Ax,tonemapping_fragment:Cx,tonemapping_pars_fragment:Rx,transmission_fragment:Px,transmission_pars_fragment:Ix,uv_pars_fragment:Lx,uv_pars_vertex:Dx,uv_vertex:Nx,worldpos_vertex:Ux,background_vert:Ox,background_frag:Fx,backgroundCube_vert:Bx,backgroundCube_frag:zx,cube_vert:kx,cube_frag:Vx,depth_vert:Gx,depth_frag:Hx,distance_vert:Wx,distance_frag:Xx,equirect_vert:qx,equirect_frag:Yx,linedashed_vert:Zx,linedashed_frag:Jx,meshbasic_vert:$x,meshbasic_frag:Kx,meshlambert_vert:Qx,meshlambert_frag:jx,meshmatcap_vert:tv,meshmatcap_frag:ev,meshnormal_vert:nv,meshnormal_frag:iv,meshphong_vert:rv,meshphong_frag:sv,meshphysical_vert:av,meshphysical_frag:ov,meshtoon_vert:lv,meshtoon_frag:cv,points_vert:hv,points_frag:uv,shadow_vert:fv,shadow_frag:dv,sprite_vert:pv,sprite_frag:mv},bt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Wi={basic:{uniforms:bn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:bn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:bn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:bn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:bn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:bn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:bn([bt.points,bt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:bn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:bn([bt.common,bt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:bn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:bn([bt.sprite,bt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:bn([bt.common,bt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:bn([bt.lights,bt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Wi.physical={uniforms:bn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Pc={r:0,b:0,g:0},gv=new Le,Hp=new Gt;Hp.set(-1,0,0,0,1,0,0,0,1);function _v(r,t,e,n,i,s){let a=new Kt(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=t.get(T,y)}return T}function m(v){let T=!1,y=f(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,T){let y=f(T);y&&y.isCubeTexture?(c===void 0&&(c=new ki(new Ys(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:ls(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gv.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hp),c.material.toneMapped=ne.getTransfer(y.colorSpace)!==ge,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ki(new Ha(2,2),new gi({name:"BackgroundMaterial",uniforms:ls(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,T){v.getRGB(Pc,Cu(r)),e.buffers.color.setClear(Pc.r,Pc.g,Pc.b,T,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:x,dispose:g}}function xv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(N,U,H,I,V){let W=!1,D=d(N,I,H,U);s!==D&&(s=D,c(s.object)),W=f(N,I,H,V),W&&m(N,I,H,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(N,U,H,I),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,U,H,I){let V=I.wireframe===!0,W=n[U.id];W===void 0&&(W={},n[U.id]=W);let D=N.isInstancedMesh===!0?N.id:0,Y=W[D];Y===void 0&&(Y={},W[D]=Y);let B=Y[H.id];B===void 0&&(B={},Y[H.id]=B);let R=B[V];return R===void 0&&(R=u(l()),B[V]=R),R}function u(N){let U=[],H=[],I=[];for(let V=0;V<e;V++)U[V]=0,H[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,U,H,I){let V=s.attributes,W=U.attributes,D=0,Y=H.getAttributes();for(let B in Y)if(Y[B].location>=0){let Q=V[B],_t=W[B];if(_t===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(_t=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(_t=N.instanceColor)),Q===void 0||Q.attribute!==_t||_t&&Q.data!==_t.data)return!0;D++}return s.attributesNum!==D||s.index!==I}function m(N,U,H,I){let V={},W=U.attributes,D=0,Y=H.getAttributes();for(let B in Y)if(Y[B].location>=0){let Q=W[B];Q===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));let _t={};_t.attribute=Q,Q&&Q.data&&(_t.data=Q.data),V[B]=_t,D++}s.attributes=V,s.attributesNum=D,s.index=I}function x(){let N=s.newAttributes;for(let U=0,H=N.length;U<H;U++)N[U]=0}function p(N){g(N,0)}function g(N,U){let H=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;H[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),V[N]!==U&&(r.vertexAttribDivisor(N,U),V[N]=U)}function v(){let N=s.newAttributes,U=s.enabledAttributes;for(let H=0,I=U.length;H<I;H++)U[H]!==N[H]&&(r.disableVertexAttribArray(H),U[H]=0)}function T(N,U,H,I,V,W,D){D===!0?r.vertexAttribIPointer(N,U,H,V,W):r.vertexAttribPointer(N,U,H,I,V,W)}function y(N,U,H,I){x();let V=I.attributes,W=H.getAttributes(),D=U.defaultAttributeValues;for(let Y in W){let B=W[Y];if(B.location>=0){let R=V[Y];if(R===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let Q=R.normalized,_t=R.itemSize,Et=t.get(R);if(Et===void 0)continue;let q=Et.buffer,ot=Et.type,vt=Et.bytesPerElement,Mt=ot===r.INT||ot===r.UNSIGNED_INT||R.gpuType===Zl;if(R.isInterleavedBufferAttribute){let ht=R.data,Nt=ht.isInterleavedBuffer===!0?ht.stride:ht.itemSize,xe=R.offset;if(ht.isInstancedInterleavedBuffer||ht.isInstancedBufferAttribute){for(let At=0;At<B.locationSize;At++)g(B.location+At,ht.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let At=0;At<B.locationSize;At++)p(B.location+At);r.bindBuffer(r.ARRAY_BUFFER,q);for(let At=0;At<B.locationSize;At++)T(B.location+At,_t/B.locationSize,ot,Q,Nt*vt,(xe+_t/B.locationSize*At)*vt,Mt)}else{if(R.isInstancedBufferAttribute){for(let ht=0;ht<B.locationSize;ht++)g(B.location+ht,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ht=0;ht<B.locationSize;ht++)p(B.location+ht);r.bindBuffer(r.ARRAY_BUFFER,q);for(let ht=0;ht<B.locationSize;ht++)T(B.location+ht,_t/B.locationSize,ot,Q,_t*vt,_t/B.locationSize*ht*vt,Mt)}}else if(D!==void 0){let Q=D[Y];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(B.location,Q);break;case 3:r.vertexAttrib3fv(B.location,Q);break;case 4:r.vertexAttrib4fv(B.location,Q);break;default:r.vertexAttrib1fv(B.location,Q)}}}}v()}function w(){P();for(let N in n){let U=n[N];for(let H in U){let I=U[H];for(let V in I){let W=I[V];for(let D in W)h(W[D].object),delete W[D];delete I[V]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let H in U){let I=U[H];for(let V in I){let W=I[V];for(let D in W)h(W[D].object),delete W[D];delete I[V]}}delete n[N.id]}function _(N){for(let U in n){let H=n[U];for(let I in H){let V=H[I];if(V[N.id]===void 0)continue;let W=V[N.id];for(let D in W)h(W[D].object),delete W[D];delete V[N.id]}}}function M(N){for(let U in n){let H=n[U],I=N.isInstancedMesh===!0?N.id:0,V=H[I];if(V!==void 0){for(let W in V){let D=V[W];for(let Y in D)h(D[Y].object),delete D[Y];delete V[W]}delete H[I],Object.keys(H).length===0&&delete n[U]}}}function P(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function vv(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function yv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==Li&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==ri&&_!==Pi&&!M&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:E}}function Sv(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Ai,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let v=s?0:n,T=v*4,y=g.clippingState||null;l.value=y,y=h(m,u,T,f);for(let w=0;w!==T;++w)y[w]=e[w];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=f;T!==x;++T,y+=4)a.copy(d[T]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var ro=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ka(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ys(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:rs});s.uniforms.tEquirect.value=e;let a=new ki(i,s),o=e.minFilter;return e.minFilter===or&&(e.minFilter=Dn),new Zs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},Sp=256,Mv=3,bv=20,Wp=256,Xp=16,Tv=3,wv=new $,Ev=new Kt,Lc=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Zs(1,10,null),this._boxMesh=new ki(new Ys(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=wv}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Ev));let p=new Zs(n,i,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Sp,gp(t))}_fromTexture(t,e){t.mapping===as||t.mapping===Ks?this._setSize(t.image.length===0?Sp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Mp(t,!1,!1),n=Math.log2(t)-Mv;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Mp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===as||t.mapping===Ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Av(),this._integrationMaterial=Cv());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Xp);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-Tv)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Wp*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Rv());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};function Mp(r,t,e){return new ro(r,{minFilter:or,generateMipmaps:t,type:Ii,colorSpace:Ra,depthBuffer:e})}function so(r,t,e){return new gi({name:r,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:Nn,blending:rs,depthTest:!1,depthWrite:!1})}function Av(){return so("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wp}u

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
	`)}function Cv(){return so("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xp}},`

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
	`)}function Rv(){return so("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bv}
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
	`)}function bp(){return so("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tp(){return so("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Pv(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Xl||f===ql)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new ro(m.height);return x.fromEquirectangularTexture(r,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Xl||f===ql,x=f===as||f===Ks;if(m||x){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Lc(r)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Lc(r)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Xl?u.mapping=as:f===ql&&(u.mapping=Ks),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Iv(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Aa("WebGLRenderer: "+n+" extension not supported."),i}}}function Lv(r,t,e,n){let i={},s=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let x=s.get(m);x&&(t.remove(x),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)t.update(x[p],r.ARRAY_BUFFER)}function d(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?Fa:Oa,y=new T(Math.ceil(v/3)*6,1),w=y.array;if(x!==null){let _=x.array;g=x.version;for(let M=0,P=0;M<v;M+=3){let C=_[M+0],N=_[M+1],U=_[M+2];w[P++]=C,w[P++]=N,w[P++]=N,w[P++]=U,w[P++]=U,w[P++]=C}}else{g=p.version;for(let _=0,M=0;_<v;_+=3){let P=_+0,C=_+1,N=_+2;w[M++]=P,w[M++]=C,w[M++]=C,w[M++]=N,w[M++]=N,w[M++]=P}}y.version=g;let E=s.get(m);E&&t.remove(E),s.set(m,y)}function u(m){let x=s.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&d(m)}else d(m);return s.get(m)}function f(){for(let m in i){let x=i[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Dv(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Nv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Uv(r,t,e){let n=new WeakMap,i=new De;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let y=o.attributes.position.count*T,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*w*4*d),_=new Da(E,y,w,d);_.type=Pi,_.needsUpdate=!0;let M=T*4;for(let C=0;C<d;C++){let N=p[C],U=g[C],H=v[C],I=y*w*4*C;for(let V=0;V<N.count;V++){let W=V*M;f===!0&&(i.fromBufferAttribute(N,V),E[I+W+0]=i.x,E[I+W+1]=i.y,E[I+W+2]=i.z,E[I+W+3]=0),m===!0&&(i.fromBufferAttribute(U,V),E[I+W+4]=i.x,E[I+W+5]=i.y,E[I+W+6]=i.z,E[I+W+7]=0),x===!0&&(i.fromBufferAttribute(H,V),E[I+W+8]=i.x,E[I+W+9]=i.y,E[I+W+10]=i.z,E[I+W+11]=H.itemSize===4?i.w:1)}}u={count:d,texture:_,size:new ue(y,w)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Ov(r,t,e,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Fv={[au]:"LINEAR_TONE_MAPPING",[ou]:"REINHARD_TONE_MAPPING",[lu]:"CINEON_TONE_MAPPING",[cu]:"ACES_FILMIC_TONE_MAPPING",[uu]:"AGX_TONE_MAPPING",[fu]:"NEUTRAL_TONE_MAPPING",[hu]:"CUSTOM_TONE_MAPPING"};function Bv(r,t,e,n,i,s){let a=new ei(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ci;h.setAttribute("position",new mi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mi([0,2,0,0,2,0],2));let d=new Rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ki(h,d),f=new Gl(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,v=null,T=[],y=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let _=0;_<T.length;_++){let M=T[_];M.setSize&&M.setSize(w,E)}},this.setEffects=function(w){T=w,y=T.length>0&&T[0].isRenderPass===!0;let E=a.width,_=a.height;T.length>0&&o===null&&(o=new ei(E,_,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new ei(E,_,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&T.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new ar(E,_),s===!0&&(c.format=lr,c.type=os)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<T.length;P++){let C=T[P];C.setSize&&C.setSize(E,_),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,E){if(p||w.toneMapping===Gi&&T.length===0)return!1;if(v=E,E!==null){let _=E.width,M=E.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=Gi,!0},this.hasRenderPass=function(){return y},this.end=function(w,E){w.toneMapping=g,p=!0;let _=a,M=o;for(let P=0;P<T.length;P++){let C=T[P];C.enabled!==!1&&(C.render(w,M,_,E),C.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(m!==w.outputColorSpace||x!==w.toneMapping){m=w.outputColorSpace,x=w.toneMapping,d.defines={},ne.getTransfer(m)===ge&&(d.defines.SRGB_TRANSFER="");let P=Fv[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(v),w.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var qp=new Hn,Yp=new ar(1,1),Zp=new Va(1),Jp=new Da,$p=new Tl,Kp=new ka,wp=[],Ep=[],Ap=new Float32Array(16),Cp=new Float32Array(9),Rp=new Float32Array(4);function ta(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=wp[i];if(s===void 0&&(s=new Float32Array(i),wp[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function nn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function rn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Nc(r,t){let e=Ep[t];e===void 0&&(e=new Int32Array(t),Ep[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function zv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function kv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;r.uniform2fv(this.addr,t),rn(e,t)}}function Vv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;r.uniform3fv(this.addr,t),rn(e,t)}}function Gv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;r.uniform4fv(this.addr,t),rn(e,t)}}function Hv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;Rp.set(n),r.uniformMatrix2fv(this.addr,!1,Rp),rn(e,n)}}function Wv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;Cp.set(n),r.uniformMatrix3fv(this.addr,!1,Cp),rn(e,n)}}function Xv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;Ap.set(n),r.uniformMatrix4fv(this.addr,!1,Ap),rn(e,n)}}function qv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Yv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;r.uniform2iv(this.addr,t),rn(e,t)}}function Zv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;r.uniform3iv(this.addr,t),rn(e,t)}}function Jv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;r.uniform4iv(this.addr,t),rn(e,t)}}function $v(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Kv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;r.uniform2uiv(this.addr,t),rn(e,t)}}function Qv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;r.uniform3uiv(this.addr,t),rn(e,t)}}function jv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;r.uniform4uiv(this.addr,t),rn(e,t)}}function Uc(r){return r.version===0&&(r.compareFunction=Tu,r.needsUpdate=!0),r}function ty(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Uc(Yp):s=qp,e.setTexture2D(t||s,i)}function ey(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||$p,i)}function ny(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Uc(Zp):s=Kp,e.setTextureCube(t||s,i)}function iy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jp,i)}function ry(r){switch(r){case 5126:return zv;case 35664:return kv;case 35665:return Vv;case 35666:return Gv;case 35674:return Hv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return Yv;case 35668:case 35672:return Zv;case 35669:case 35673:return Jv;case 5125:return $v;case 36294:return Kv;case 36295:return Qv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function sy(r,t){r.uniform1fv(this.addr,t)}function ay(r,t){let e=ta(t,this.size,2);r.uniform2fv(this.addr,e)}function oy(r,t){let e=ta(t,this.size,3);r.uniform3fv(this.addr,e)}function ly(r,t){let e=ta(t,this.size,4);r.uniform4fv(this.addr,e)}function cy(r,t){let e=ta(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function hy(r,t){let e=ta(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function uy(r,t){let e=ta(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function fy(r,t){r.uniform1iv(this.addr,t)}function dy(r,t){r.uniform2iv(this.addr,t)}function py(r,t){r.uniform3iv(this.addr,t)}function my(r,t){r.uniform4iv(this.addr,t)}function gy(r,t){r.uniform1uiv(this.addr,t)}function _y(r,t){r.uniform2uiv(this.addr,t)}function xy(r,t){r.uniform3uiv(this.addr,t)}function vy(r,t){r.uniform4uiv(this.addr,t)}function yy(r,t,e){let n=this.cache,i=t.length,s=Nc(e,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Uc(Yp):a=qp;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Sy(r,t,e){let n=this.cache,i=t.length,s=Nc(e,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||$p,s[a])}function My(r,t,e){let n=this.cache,i=t.length,s=Nc(e,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Uc(Zp):a=Kp;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,s[o])}function by(r,t,e){let n=this.cache,i=t.length,s=Nc(e,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Jp,s[a])}function Ty(r){switch(r){case 5126:return sy;case 35664:return ay;case 35665:return oy;case 35666:return ly;case 35674:return cy;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return fy;case 35667:case 35671:return dy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return _y;case 36295:return xy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return by}}var zu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ry(e.type)}},ku=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ty(e.type)}},Vu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},Fu=/(\w+)(\])?(\[|\.)?/g;function Pp(r,t){r.seq.push(t),r.map[t.id]=t}function wy(r,t,e){let n=r.name,i=n.length;for(Fu.lastIndex=0;;){let s=Fu.exec(n),a=Fu.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Pp(e,c===void 0?new zu(o,r,t):new ku(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Vu(o),Pp(e,d)),e=d}}}var js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);wy(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Ip(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Ey=37297,Ay=0;function Cy(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Lp=new Gt;function Ry(r){ne._getMatrix(Lp,ne.workingColorSpace,r);let t=`mat3( ${Lp.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(r)){case Pa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Dp(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Cy(r.getShaderSource(t),o)}else return s}function Py(r,t){let e=Ry(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Iy={[au]:"Linear",[ou]:"Reinhard",[lu]:"Cineon",[cu]:"ACESFilmic",[uu]:"AgX",[fu]:"Neutral",[hu]:"Custom"};function Ly(r,t){let e=Iy[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ic=new $;function Dy(){ne.getLuminanceCoefficients(Ic);let r=Ic.x.toFixed(4),t=Ic.y.toFixed(4),e=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ny(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function Uy(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Oy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function io(r){return r!==""}function Np(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Up(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(r){return r.replace(Fy,By)}function By(r,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Gu(e)}var zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Op(r){return r.replace(zy,ky)}function ky(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fp(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var Vy={[qa]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function Gy(r){return Vy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hy={[Ks]:"ENVMAP_MODE_REFRACTION"};function Wy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Hy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xy={[su]:"ENVMAP_BLENDING_MULTIPLY",[tp]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};function qy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Xy[r.combine]||"ENVMAP_BLENDING_NONE"}function Yy(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Gy(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Wy(e),d=qy(e),u=Ny(e),f=Uy(s),m=i.createProgram(),x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(io).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(io).join(`
`),p.length>0&&(p+=`
`)):(x=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),p=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Ly("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Py("linearToOutputTexel",e.outputColorSpace),Dy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),a=Gu(a),a=Np(a,e),a=Up(a,e),o=Gu(o),o=Np(o,e),o=Up(o,e),a=Op(a),o=Op(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+x+a,T=g+p+o,y=Ip(i,i.VERTEX_SHADER,v),w=Ip(i,i.FRAGMENT_SHADER,T);i.attachShader(m,y),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(C){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",U=i.getShaderInfoLog(y)||"",H=i.getShaderInfoLog(w)||"",I=N.trim(),V=U.trim(),W=H.trim(),D=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,y,w);else{let B=Dp(i,y,"vertex"),R=Dp(i,w,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+B+`
`+R)}else I!==""?Bt("WebGLProgram: Program Info Log:",I):(V===""||W==="")&&(Y=!1);Y&&(C.diagnostics={runnable:D,programLog:I,vertexShader:{log:V,prefix:x},fragmentShader:{log:W,prefix:p}})}i.deleteShader(y),i.deleteShader(w),_=new js(i,m),M=Oy(i,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,Ey)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ay++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}var Zy=0,Hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wu(t),e.set(t,n)),n}},Wu=class{constructor(t){this.id=Zy++,this.code=t,this.usedTimes=0}};function Jy(r){return r===Ur||r===ja||r===to}function $y(r,t,e,n,i,s){let a=new Na,o=new Hu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,P,C,N,U){let H=C.fog,I=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=t.get(_.envMap||V,W),Y=u[_.type],B=n.precision;_.precision!==null&&(B=n.getMaxPrecision(_.precision),B!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",B,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=R!==void 0?R.length:0,_t=0;I.morphAttributes.position!==void 0&&(_t=1),I.morphAttributes.normal!==void 0&&(_t=2),I.morphAttributes.color!==void 0&&(_t=3);let Et,q,ot,vt;if(Y){let nt=Wi[Y];Et=nt.vertexShader,q=nt.fragmentShader}else{Et=_.vertexShader,q=_.fragmentShader;let nt=o.getVertexShaderStage(_),Tt=o.getFragmentShaderStage(_);o.update(_,nt,Tt),ot=nt.id,vt=Tt.id}let Mt=r.getRenderTarget(),ht=r.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,At=!!_.map,Wt=!!_.matcap,Lt=!!D,Ot=Lt&&D.isPMREMTexture===!0,ce=!!_.aoMap,ae=!!_.lightMap,J=!!_.bumpMap&&_.wireframe===!1,Qt=!!_.normalMap,qe=!!_.displacementMap,Se=!!_.emissiveMap,ie=!!_.metalnessMap,Fe=!!_.roughnessMap,We=_.anisotropy>0,F=_.clearcoat>0,de=_.diffuseRoughness>0,oe=_.dispersion>0,Vt=_.retroreflectivity>0,ft=_.iridescence>0,he=_.sheen>0,Dt=_.transmission>0,Ft=We&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,S=F&&!!_.clearcoatNormalMap,k=F&&!!_.clearcoatRoughnessMap,st=de&&!!_.diffuseRoughnessMap,it=ft&&!!_.iridescenceMap,ut=ft&&!!_.iridescenceThicknessMap,gt=he&&!!_.sheenColorMap,G=he&&!!_.sheenRoughnessMap,tt=!!_.specularMap,ct=!!_.specularColorMap,L=!!_.specularIntensityMap,j=Dt&&!!_.transmissionMap,K=Dt&&!!_.thicknessMap,dt=!!_.gradientMap,lt=!!_.alphaMap,pt=_.alphaTest>0,at=!!_.alphaHash,mt=!!_.extensions,rt=Gi;_.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(rt=r.toneMapping);let et=Ot?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,xt={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Et,fragmentShader:q,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:B,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:At,matcap:Wt,envMap:Lt,envMapMode:Lt&&D.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?et.length-1:null,envMapSize:Ot?et[0].width:null,aoMap:ce,lightMap:ae,bumpMap:J,normalMap:Qt,displacementMap:qe,emissiveMap:Se,normalMapObjectSpace:Qt&&_.normalMapType===rp,normalMapTangentSpace:Qt&&_.normalMapType===Su,packedNormalMap:Qt&&_.normalMapType===Su&&Jy(_.normalMap.format),metalnessMap:ie,roughnessMap:Fe,anisotropy:We,anisotropyMap:Ft,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:k,diffuseRoughness:de,diffuseRoughnessMap:st,dispersion:oe,retroreflection:Vt,iridescence:ft,iridescenceMap:it,iridescenceThicknessMap:ut,sheen:he,sheenColorMap:gt,sheenRoughnessMap:G,specularMap:tt,specularColorMap:ct,specularIntensityMap:L,transmission:Dt,transmissionMap:j,thicknessMap:K,gradientMap:dt,opaque:_.transparent===!1&&_.blending===$s&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:pt,alphaHash:at,combine:_.combine,mapUv:At&&f(_.map.channel),aoMapUv:ce&&f(_.aoMap.channel),lightMapUv:ae&&f(_.lightMap.channel),bumpMapUv:J&&f(_.bumpMap.channel),normalMapUv:Qt&&f(_.normalMap.channel),displacementMapUv:qe&&f(_.displacementMap.channel),emissiveMapUv:Se&&f(_.emissiveMap.channel),metalnessMapUv:ie&&f(_.metalnessMap.channel),roughnessMapUv:Fe&&f(_.roughnessMap.channel),anisotropyMapUv:Ft&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:G&&f(_.sheenRoughnessMap.channel),specularMapUv:tt&&f(_.specularMap.channel),specularColorMapUv:ct&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:K&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qt||We),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(At||lt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Qt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:_t,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(nt=>nt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===ge,decodeVideoTextureEmissive:Se&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===ge,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vi,flipSided:_.side===Nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)M.push(P),M.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(M,_),g(M,_),M.push(r.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let M=u[_.type],P;if(M){let C=Wi[M];P=xp.clone(C.uniforms)}else P=_.uniforms;return P}function T(_,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new Yy(r,M,_,i),c.push(P),h.set(M,P)),P}function y(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:E}}function Ky(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Qy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Bp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zp(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,x,p,g){let v=r[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},r[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=p,v.group=g),t++,v}function l(u,f,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);let T=o(u,f,m,x,p,g);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):e.push(T)}function c(u,f,m,x,p,g){let v=o(u,f,m,x,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Qy),n.length>1&&n.sort(f||Bp),i.length>1&&i.sort(f||Bp)}function d(){for(let u=t,f=r.length;u<f;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function jy(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new zp,r.set(n,[a])):i>=s.length?(a=new zp,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function tS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new Kt};break;case"SpotLight":e={position:new $,direction:new $,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=e,e}}}function eS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var nS=0;function iS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function rS(r){let t=new tS,e=eS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let i=new $,s=new Le,a=new Le;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,v=0,T=0,y=0,w=0,E=0,_=0,M=0,P=0,C=0;c.sort(iS);for(let U=0,H=c.length;U<H;U++){let I=c[U],V=I.color,W=I.intensity,D=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ur?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*W,d+=V.g*W,u+=V.b*W;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],W);C++}else if(I.isSunLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,Q=e.get(I);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=Y;let _t=R.getViewportCount();for(let Et=0;Et<_t;Et++)n.sunShadowMatrix[x+Et]=R.getMatrix(Et),n.sunShadowCascade[x+Et]=R._cascadeData[Et];x+=_t,m++}n.sun[f]=B,f++}else if(I.isDirectionalLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,Q=e.get(I);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=B,p++}else if(I.isSpotLight){let B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(V).multiplyScalar(W),B.distance=D,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[v]=B;let R=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let Q=e.get(I);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=Y,_++}v++}else if(I.isRectAreaLight){let B=t.get(I);B.color.copy(V).multiplyScalar(W),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=B,T++}else if(I.isPointLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let R=I.shadow,Q=e.get(I);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,Q.shadowCameraNear=R.camera.near,Q.shadowCameraFar=R.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=B,g++}else if(I.isHemisphereLight){let B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(W),B.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[y]=B,y++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==T||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==w||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==M||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=T,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=w,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=M,N.numLightProbes=C,n.version=nS++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),u++}else if(y.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function kp(r){let t=new rS(r),e=[],n=[],i=[];function s(d){h.camera=d,e.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sS(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new kp(r),t.set(i,[o])):s>=a.length?(o=new kp(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var aS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
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
}`,lS=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],cS=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Vp=new Le,no=new $,Bu=new $;function hS(r,t,e){let n=new is,i=new ue,s=new ue,a=new De,o=new Pl,l=new Il,c={},h=e.maxTextureSize,d={[Nr]:Nn,[Nn]:Nr,[Vi]:Vi},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:aS,fragmentShader:oS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ci;m.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ki(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa;let g=this.type;this.render=function(E,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Ud&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qa);let P=r.getRenderTarget(),C=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),U=r.state;U.setBlending(rs),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=g!==this.type;H&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=E.length;I<V;I++){let W=E[I],D=W.shadow;if(D===void 0){Bt("WebGLShadowMap:",W,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);let Y=D.getFrameExtents();i.multiply(Y),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,D.mapSize.y=s.y));let B=r.state.buffers.depth.getReversed();if(D.camera._reversedDepth=B,D.map===null||H===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Js){if(W.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new ei(i.x,i.y,{format:Ur,type:Ii,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),D.map.texture.name=W.name+".shadowMap",D.map.depthTexture=new ar(i.x,i.y,Pi),D.map.depthTexture.name=W.name+".shadowMapDepth",D.map.depthTexture.format=sr,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=hn,D.map.depthTexture.magFilter=hn}else W.isPointLight?(D.map=new ro(i.x),D.map.depthTexture=new Va(i.x,Ri)):(D.map=new ei(i.x,i.y),D.map.depthTexture=new ar(i.x,i.y,Ri)),D.map.depthTexture.name=W.name+".shadowMap",D.map.depthTexture.format=sr,this.type===qa?(D.map.depthTexture.compareFunction=B?bu:Mu,D.map.depthTexture.minFilter=Dn,D.map.depthTexture.magFilter=Dn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=hn,D.map.depthTexture.magFilter=hn);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==i.x||D.map.height!==i.y)&&D.map.setSize(i.x,i.y);let R=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();W.isPointLight!==!0&&D.updateMatrices(W,M);let Q=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:M.layers;for(let _t=0;_t<R;_t++){let Et=D.getCamera(_t);if(W.isPointLight){let q=D.camera,ot=D.matrix,vt=W.distance||q.far;vt!==q.far&&(q.far=vt,q.updateProjectionMatrix()),no.setFromMatrixPosition(W.matrixWorld),q.position.copy(no),Bu.copy(q.position),Bu.add(lS[_t]),q.up.copy(cS[_t]),q.lookAt(Bu),q.updateMatrixWorld(),ot.makeTranslation(-no.x,-no.y,-no.z),Vp.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Vp,q.coordinateSystem,q.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)r.setRenderTarget(D.map,_t),r.clear();else{_t===0&&(r.setRenderTarget(D.map),r.clear());let q=D.getViewport(_t);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),U.viewport(a)}n=D.getFrustum(_t),y(_,M,Et,W,Q,this.type)}D.isPointLightShadow!==!0&&this.type===Js&&v(D,M),D.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,C,N)};function v(E,_){let M=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ei(i.x,i.y,{format:Ur,type:Ii}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(_,null,M,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(_,null,M,f,x,null)}function T(E,_,M,P){let C=null,N=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=C.uuid,H=_.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let V=I[H];V===void 0&&(V=C.clone(),I[H]=V,_.addEventListener("dispose",w)),C=V}if(C.visible=_.visible,C.wireframe=_.wireframe,P===Js?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=r.properties.get(C);U.light=M}return C}function y(E,_,M,P,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Js)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let I=t.update(E),V=E.material;if(Array.isArray(V)){let W=I.groups;for(let D=0,Y=W.length;D<Y;D++){let B=W[D],R=V[B.materialIndex];if(R&&R.visible){let Q=T(E,R,P,N);E.onBeforeShadow(r,E,_,M,I,Q,B),r.renderBufferDirect(M,null,I,Q,E,B),E.onAfterShadow(r,E,_,M,I,Q,B)}}}else if(V.visible){let W=T(E,V,P,N);E.onBeforeShadow(r,E,_,M,I,W,null),r.renderBufferDirect(M,null,I,W,E,null),E.onAfterShadow(r,E,_,M,I,W,null)}}let H=E.children;for(let I=0,V=H.length;I<V;I++)y(H[I],_,M,P,C,N)}function w(E){E.target.removeEventListener("dispose",w);for(let M in c){let P=c[M],C=E.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function uS(r,t){function e(){let L=!1,j=new De,K=null,dt=new De(0,0,0,0);return{setMask:function(lt){K!==lt&&!L&&(r.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){L=lt},setClear:function(lt,pt,at,mt,rt){rt===!0&&(lt*=mt,pt*=mt,at*=mt),j.set(lt,pt,at,mt),dt.equals(j)===!1&&(r.clearColor(lt,pt,at,mt),dt.copy(j))},reset:function(){L=!1,K=null,dt.set(-1,0,0,0)}}}function n(){let L=!1,j=!1,K=null,dt=null,lt=null;return{setReversed:function(pt){if(j!==pt){let at=t.get("EXT_clip_control");pt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),j=pt;let mt=lt;lt=null,this.setClear(mt)}},getReversed:function(){return j},setTest:function(pt){pt?ht(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(pt){K!==pt&&!L&&(r.depthMask(pt),K=pt)},setFunc:function(pt){if(j&&(pt=mp[pt]),dt!==pt){switch(pt){case ul:r.depthFunc(r.NEVER);break;case fl:r.depthFunc(r.ALWAYS);break;case dl:r.depthFunc(r.LESS);break;case Hs:r.depthFunc(r.LEQUAL);break;case pl:r.depthFunc(r.EQUAL);break;case ml:r.depthFunc(r.GEQUAL);break;case gl:r.depthFunc(r.GREATER);break;case _l:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=pt}},setLocked:function(pt){L=pt},setClear:function(pt){lt!==pt&&(lt=pt,j&&(pt=1-pt),r.clearDepth(pt))},reset:function(){L=!1,K=null,dt=null,lt=null,j=!1}}}function i(){let L=!1,j=null,K=null,dt=null,lt=null,pt=null,at=null,mt=null,rt=null;return{setTest:function(et){L||(et?ht(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(et){j!==et&&!L&&(r.stencilMask(et),j=et)},setFunc:function(et,xt,nt){(K!==et||dt!==xt||lt!==nt)&&(r.stencilFunc(et,xt,nt),K=et,dt=xt,lt=nt)},setOp:function(et,xt,nt){(pt!==et||at!==xt||mt!==nt)&&(r.stencilOp(et,xt,nt),pt=et,at=xt,mt=nt)},setLocked:function(et){L=et},setClear:function(et){rt!==et&&(r.clearStencil(et),rt=et)},reset:function(){L=!1,j=null,K=null,dt=null,lt=null,pt=null,at=null,mt=null,rt=null}}}let s=new e,a=new n,o=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,T=null,y=null,w=null,E=null,_=null,M=new Kt(0,0,0),P=0,C=!1,N=null,U=null,H=null,I=null,V=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,Y=0,B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=Y>=2);let R=null,Q={},_t=r.getParameter(r.SCISSOR_BOX),Et=r.getParameter(r.VIEWPORT),q=new De().fromArray(_t),ot=new De().fromArray(Et);function vt(L,j,K,dt){let lt=new Uint8Array(4),pt=r.createTexture();r.bindTexture(L,pt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<K;at++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(j,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(j+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return pt}let Mt={};Mt[r.TEXTURE_2D]=vt(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=vt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=vt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=vt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(r.DEPTH_TEST),a.setFunc(Hs),J(!1),Qt(tu),ht(r.CULL_FACE),ce(rs);function ht(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Nt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function xe(L,j){return u[L]!==j?(r.bindFramebuffer(L,j),u[L]=j,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=j),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=j),!0):!1}function At(L,j){let K=m,dt=!1;if(L){K=f.get(j),K===void 0&&(K=[],f.set(j,K));let lt=L.textures;if(K.length!==lt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,at=lt.length;pt<at;pt++)K[pt]=r.COLOR_ATTACHMENT0+pt;K.length=lt.length,dt=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,dt=!0);dt&&r.drawBuffers(K)}function Wt(L){return x!==L?(r.useProgram(L),x=L,!0):!1}let Lt={[ss]:r.FUNC_ADD,[Fd]:r.FUNC_SUBTRACT,[Bd]:r.FUNC_REVERSE_SUBTRACT};Lt[zd]=r.MIN,Lt[kd]=r.MAX;let Ot={[Vd]:r.ZERO,[Gd]:r.ONE,[Hd]:r.SRC_COLOR,[iu]:r.SRC_ALPHA,[Jd]:r.SRC_ALPHA_SATURATE,[Yd]:r.DST_COLOR,[Xd]:r.DST_ALPHA,[Wd]:r.ONE_MINUS_SRC_COLOR,[ru]:r.ONE_MINUS_SRC_ALPHA,[Zd]:r.ONE_MINUS_DST_COLOR,[qd]:r.ONE_MINUS_DST_ALPHA,[$d]:r.CONSTANT_COLOR,[Kd]:r.ONE_MINUS_CONSTANT_COLOR,[Qd]:r.CONSTANT_ALPHA,[jd]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(L,j,K,dt,lt,pt,at,mt,rt,et){if(L===rs){p===!0&&(Nt(r.BLEND),p=!1);return}if(p===!1&&(ht(r.BLEND),p=!0),L!==Od){if(L!==g||et!==C){if((v!==ss||w!==ss)&&(r.blendEquation(r.FUNC_ADD),v=ss,w=ss),et)switch(L){case $s:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ya:r.blendFunc(r.ONE,r.ONE);break;case eu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:kt("WebGLState: Invalid blending: ",L);break}else switch(L){case $s:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ya:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case eu:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",L);break}T=null,y=null,E=null,_=null,M.set(0,0,0),P=0,g=L,C=et}return}lt=lt||j,pt=pt||K,at=at||dt,(j!==v||lt!==w)&&(r.blendEquationSeparate(Lt[j],Lt[lt]),v=j,w=lt),(K!==T||dt!==y||pt!==E||at!==_)&&(r.blendFuncSeparate(Ot[K],Ot[dt],Ot[pt],Ot[at]),T=K,y=dt,E=pt,_=at),(mt.equals(M)===!1||rt!==P)&&(r.blendColor(mt.r,mt.g,mt.b,rt),M.copy(mt),P=rt),g=L,C=!1}function ae(L,j){L.side===Vi?Nt(r.CULL_FACE):ht(r.CULL_FACE);let K=L.side===Nn;j&&(K=!K),J(K),L.blending===$s&&L.transparent===!1?ce(rs):ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function Qt(L){L!==Dd?(ht(r.CULL_FACE),L!==U&&(L===tu?r.cullFace(r.BACK):L===Nd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),U=L}function qe(L){L!==H&&(D&&r.lineWidth(L),H=L)}function Se(L,j,K){L?(ht(r.POLYGON_OFFSET_FILL),(I!==j||V!==K)&&(I=j,V=K,a.getReversed()&&(j=-j,K=-K),r.polygonOffset(j,K))):Nt(r.POLYGON_OFFSET_FILL)}function ie(L){L?ht(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function Fe(L){L===void 0&&(L=r.TEXTURE0+W-1),R!==L&&(r.activeTexture(L),R=L)}function We(L,j,K){K===void 0&&(R===null?K=r.TEXTURE0+W-1:K=R);let dt=Q[K];dt===void 0&&(dt={type:void 0,texture:void 0},Q[K]=dt),(dt.type!==L||dt.texture!==j)&&(R!==K&&(r.activeTexture(K),R=K),r.bindTexture(L,j||Mt[L]),dt.type=L,dt.texture=j)}function F(){let L=Q[R];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{r.compressedTexImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function oe(){try{r.compressedTexImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Vt(){try{r.texSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function ft(){try{r.texSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function Dt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Ft(){try{r.texStorage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function A(){try{r.texStorage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function S(){try{r.texImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function k(){try{r.texImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function st(L){return d[L]!==void 0?d[L]:r.getParameter(L)}function it(L,j){d[L]!==j&&(r.pixelStorei(L,j),d[L]=j)}function ut(L){q.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function gt(L){ot.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ot.copy(L))}function G(L,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let dt=K.get(L);dt===void 0&&(dt=r.getUniformBlockIndex(j,L.name),r.uniformBlockBinding(j,dt,dt),K.set(L,dt))}function tt(L,j,K){let lt=c.get(j).get(L);l[lt]!==K&&(r.bindBufferBase(r.UNIFORM_BUFFER,lt,K),l[lt]=K)}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,Q={},u={},l={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,T=null,y=null,w=null,E=null,_=null,M=new Kt(0,0,0),P=0,C=!1,N=null,U=null,H=null,I=null,V=null,q.set(0,0,r.canvas.width,r.canvas.height),ot.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ht,disable:Nt,bindFramebuffer:xe,drawBuffers:At,useProgram:Wt,setBlending:ce,setMaterial:ae,setFlipSided:J,setCullFace:Qt,setLineWidth:qe,setPolygonOffset:Se,setScissorTest:ie,activeTexture:Fe,bindTexture:We,unbindTexture:F,compressedTexImage2D:de,compressedTexImage3D:oe,texImage2D:S,texImage3D:k,pixelStorei:it,getParameter:st,updateUBOMapping:G,uniformBlockBinding:tt,texStorage2D:Ft,texStorage3D:A,texSubImage2D:Vt,texSubImage3D:ft,compressedTexSubImage2D:he,compressedTexSubImage3D:Dt,scissor:ut,viewport:gt,reset:ct}}function fS(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):La("canvas")}function v(A,S,k){let st=1,it=Ft(A);if((it.width>k||it.height>k)&&(st=k/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ut=Math.floor(st*it.width),gt=Math.floor(st*it.height);u===void 0&&(u=g(ut,gt));let G=S?g(ut,gt):u;return G.width=ut,G.height=gt,G.getContext("2d").drawImage(A,0,0,ut,gt),Bt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ut+"x"+gt+")."),G}else return"data"in A&&Bt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function T(A){return A.generateMipmaps}function y(A){r.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(A,S,k,st,it,ut=!1){if(A!==null){if(r[A]!==void 0)return r[A];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;st&&(gt=t.get("EXT_texture_norm16"),gt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=S;if(S===r.RED&&(k===r.FLOAT&&(G=r.R32F),k===r.HALF_FLOAT&&(G=r.R16F),k===r.UNSIGNED_BYTE&&(G=r.R8),k===r.UNSIGNED_SHORT&&gt&&(G=gt.R16_EXT),k===r.SHORT&&gt&&(G=gt.R16_SNORM_EXT)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.R8UI),k===r.UNSIGNED_SHORT&&(G=r.R16UI),k===r.UNSIGNED_INT&&(G=r.R32UI),k===r.BYTE&&(G=r.R8I),k===r.SHORT&&(G=r.R16I),k===r.INT&&(G=r.R32I)),S===r.RG&&(k===r.FLOAT&&(G=r.RG32F),k===r.HALF_FLOAT&&(G=r.RG16F),k===r.UNSIGNED_BYTE&&(G=r.RG8),k===r.UNSIGNED_SHORT&&gt&&(G=gt.RG16_EXT),k===r.SHORT&&gt&&(G=gt.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RG8UI),k===r.UNSIGNED_SHORT&&(G=r.RG16UI),k===r.UNSIGNED_INT&&(G=r.RG32UI),k===r.BYTE&&(G=r.RG8I),k===r.SHORT&&(G=r.RG16I),k===r.INT&&(G=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RGB8UI),k===r.UNSIGNED_SHORT&&(G=r.RGB16UI),k===r.UNSIGNED_INT&&(G=r.RGB32UI),k===r.BYTE&&(G=r.RGB8I),k===r.SHORT&&(G=r.RGB16I),k===r.INT&&(G=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),k===r.UNSIGNED_INT&&(G=r.RGBA32UI),k===r.BYTE&&(G=r.RGBA8I),k===r.SHORT&&(G=r.RGBA16I),k===r.INT&&(G=r.RGBA32I)),S===r.RGB&&(k===r.UNSIGNED_SHORT&&gt&&(G=gt.RGB16_EXT),k===r.SHORT&&gt&&(G=gt.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),S===r.RGBA){let tt=ut?Pa:ne.getTransfer(it);k===r.FLOAT&&(G=r.RGBA32F),k===r.HALF_FLOAT&&(G=r.RGBA16F),k===r.UNSIGNED_BYTE&&(G=tt===ge?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&gt&&(G=gt.RGBA16_EXT),k===r.SHORT&&gt&&(G=gt.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function _(A,S){let k;return A?S===null||S===Ri||S===os?k=r.DEPTH24_STENCIL8:S===Pi?k=r.DEPTH32F_STENCIL8:S===Qs&&(k=r.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===os?k=r.DEPTH_COMPONENT24:S===Pi?k=r.DEPTH_COMPONENT32F:S===Qs&&(k=r.DEPTH_COMPONENT16),k}function M(A,S){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==hn&&A.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){let S=new WeakRef(A);n.get(A).__ref=S,m.add(S),x.register(A,S,S)}function C(A){let S=n.get(A).__ref;S!==void 0&&(m.delete(S),x.unregister(S))}function N(A){H(A.target)}function U(A){I(A.target)}function H(A){A.removeEventListener("dispose",N),C(A),W(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",U),C(A),Y(A)}function V(){for(let A of m){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):H(S))}m.clear(),d.clear()}function W(A){let S=n.get(A);if(S.__webglInit===void 0)return;let k=A.source,st=f.get(k);if(st){let it=st[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&D(A),Object.keys(st).length===0&&f.delete(k)}n.remove(A)}function D(A){let S=n.get(A);r.deleteTexture(S.__webglTexture);let k=A.source,st=f.get(k);delete st[S.__cacheKey],a.memory.textures--}function Y(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&H(k),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let ut=0;ut<S.__webglFramebuffer[it].length;ut++)r.deleteFramebuffer(S.__webglFramebuffer[it][ut]);else r.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)r.deleteFramebuffer(S.__webglFramebuffer[it]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let st=A.textures;for(let it=0,ut=st.length;it<ut;it++){let gt=n.get(st[it]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(st[it])}n.remove(A)}let B=0;function R(){B=0}function Q(){return B}function _t(A){B=A}function Et(){let A=B;return A>=i.maxTextures&&Bt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,A}function q(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ot(A,S){let k=n.get(A);if(A.isVideoTexture&&he(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let st=A.image;if(st===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(k,A,S);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function vt(A,S){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ae(k,A,S);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function Mt(A,S){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ae(k,A,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function ht(A,S){let k=n.get(A);if(A.version>0&&k.__version!==A.version){J(k,A,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}let Nt={[xl]:r.REPEAT,[Fi]:r.CLAMP_TO_EDGE,[vl]:r.MIRRORED_REPEAT},xe={[hn]:r.NEAREST,[np]:r.NEAREST_MIPMAP_NEAREST,[Za]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Yl]:r.LINEAR_MIPMAP_NEAREST,[or]:r.LINEAR_MIPMAP_LINEAR},At={[ap]:r.NEVER,[Tu]:r.ALWAYS,[op]:r.LESS,[Mu]:r.LEQUAL,[lp]:r.EQUAL,[bu]:r.GEQUAL,[cp]:r.GREATER,[hp]:r.NOTEQUAL};function Wt(A,S){if(S.type===Pi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===Yl||S.magFilter===Za||S.magFilter===or||S.minFilter===Dn||S.minFilter===Yl||S.minFilter===Za||S.minFilter===or)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,Nt[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Nt[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Nt[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,xe[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,xe[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==Za&&S.minFilter!==or||S.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N),P(S));let st=S.source,it=f.get(st);it===void 0&&(it={},f.set(st,it));let ut=q(S);if(ut!==A.__cacheKey){it[ut]===void 0&&(it[ut]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),it[ut].usedTimes++;let gt=it[A.__cacheKey];gt!==void 0&&(it[A.__cacheKey].usedTimes--,gt.usedTimes===0&&D(S)),A.__cacheKey=ut,A.__webglTexture=it[ut].texture}return k}function Ot(A,S,k){return Math.floor(Math.floor(A/k)/S)}function ce(A,S,k,st){let ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,k,st,S.data);else{ut.sort((L,j)=>L.start-j.start);let gt=0;for(let L=1;L<ut.length;L++){let j=ut[gt],K=ut[L],dt=j.start+j.count,lt=Ot(K.start,S.width,4),pt=Ot(j.start,S.width,4);K.start<=dt+1&&lt===pt&&Ot(K.start+K.count-1,S.width,4)===lt?j.count=Math.max(j.count,K.start+K.count-j.start):(++gt,ut[gt]=K)}ut.length=gt+1;let G=e.getParameter(r.UNPACK_ROW_LENGTH),tt=e.getParameter(r.UNPACK_SKIP_PIXELS),ct=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let L=0,j=ut.length;L<j;L++){let K=ut[L],dt=Math.floor(K.start/4),lt=Math.ceil(K.count/4),pt=dt%S.width,at=Math.floor(dt/S.width),mt=lt,rt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(r.UNPACK_SKIP_ROWS,at),e.texSubImage2D(r.TEXTURE_2D,0,pt,at,mt,rt,k,st,S.data)}A.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,G),e.pixelStorei(r.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ct)}}function ae(A,S,k){let st=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=r.TEXTURE_3D);let it=Lt(A,S),ut=S.source;e.bindTexture(st,A.__webglTexture,r.TEXTURE0+k);let gt=n.get(ut);if(ut.version!==gt.__version||it===!0){if(e.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let rt=ne.getPrimaries(ne.workingColorSpace),et=S.colorSpace===cr?null:ne.getPrimaries(S.colorSpace),xt=S.colorSpace===cr||rt===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=v(S.image,!1,i.maxTextureSize);tt=Dt(S,tt);let ct=s.convert(S.format,S.colorSpace),L=s.convert(S.type),j=E(S.internalFormat,ct,L,S.normalized,S.colorSpace,S.isVideoTexture);Wt(st,S);let K,dt=S.mipmaps,lt=S.isVideoTexture!==!0,pt=gt.__version===void 0||it===!0,at=ut.dataReady,mt=M(S,tt);if(S.isDepthTexture)j=_(S.format===lr,S.type),pt&&(lt?e.texStorage2D(r.TEXTURE_2D,1,j,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,L,null));else if(S.isDataTexture)if(dt.length>0){lt&&pt&&e.texStorage2D(r.TEXTURE_2D,mt,j,dt[0].width,dt[0].height);for(let rt=0,et=dt.length;rt<et;rt++)K=dt[rt],lt?at&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,K.width,K.height,ct,L,K.data):e.texImage2D(r.TEXTURE_2D,rt,j,K.width,K.height,0,ct,L,K.data);S.generateMipmaps=!1}else lt?(pt&&e.texStorage2D(r.TEXTURE_2D,mt,j,tt.width,tt.height),at&&ce(S,tt,ct,L)):e.texImage2D(r.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,L,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&pt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,j,dt[0].width,dt[0].height,tt.depth);for(let rt=0,et=dt.length;rt<et;rt++)if(K=dt[rt],S.format!==Li)if(ct!==null)if(lt){if(at)if(S.layerUpdates.size>0){let xt=Iu(K.width,K.height,S.format,S.type);for(let nt of S.layerUpdates){let Tt=K.data.subarray(nt*xt/K.data.BYTES_PER_ELEMENT,(nt+1)*xt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,nt,K.width,K.height,1,ct,Tt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,tt.depth,ct,K.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,j,K.width,K.height,tt.depth,0,K.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,tt.depth,ct,L,K.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,j,K.width,K.height,tt.depth,0,ct,L,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{lt&&pt&&e.texStorage2D(r.TEXTURE_2D,mt,j,dt[0].width,dt[0].height);for(let rt=0,et=dt.length;rt<et;rt++)K=dt[rt],S.format!==Li?ct!==null?lt?at&&e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,K.width,K.height,ct,K.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,j,K.width,K.height,0,K.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,K.width,K.height,ct,L,K.data):e.texImage2D(r.TEXTURE_2D,rt,j,K.width,K.height,0,ct,L,K.data)}else if(S.isDataArrayTexture)if(lt){if(pt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,j,tt.width,tt.height,tt.depth),at)if(S.layerUpdates.size>0){let rt=Iu(tt.width,tt.height,S.format,S.type);for(let et of S.layerUpdates){let xt=tt.data.subarray(et*rt/tt.data.BYTES_PER_ELEMENT,(et+1)*rt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,ct,L,xt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,L,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,ct,L,tt.data);else if(S.isData3DTexture)lt?(pt&&e.texStorage3D(r.TEXTURE_3D,mt,j,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,L,tt.data)):e.texImage3D(r.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,ct,L,tt.data);else if(S.isFramebufferTexture){if(pt)if(lt)e.texStorage2D(r.TEXTURE_2D,mt,j,tt.width,tt.height);else{let rt=tt.width,et=tt.height;for(let xt=0;xt<mt;xt++)e.texImage2D(r.TEXTURE_2D,xt,j,rt,et,0,ct,L,null),rt>>=1,et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let rt=r.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),tt.parentNode!==rt){rt.appendChild(tt),d.add(S),rt.onpaint=et=>{let xt=et.changedElements;for(let nt of d)xt.includes(nt.image)&&(nt.needsUpdate=!0)},rt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,tt);else{let xt=r.RGBA,nt=r.RGBA,Tt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xt,nt,Tt,tt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(dt.length>0){if(lt&&pt){let rt=Ft(dt[0]);e.texStorage2D(r.TEXTURE_2D,mt,j,rt.width,rt.height)}for(let rt=0,et=dt.length;rt<et;rt++)K=dt[rt],lt?at&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,ct,L,K):e.texImage2D(r.TEXTURE_2D,rt,j,ct,L,K);S.generateMipmaps=!1}else if(lt){if(pt){let rt=Ft(tt);e.texStorage2D(r.TEXTURE_2D,mt,j,rt.width,rt.height)}at&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,L,tt)}else e.texImage2D(r.TEXTURE_2D,0,j,ct,L,tt);T(S)&&S.mipmapsAutoUpdate===!0&&y(st),gt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function J(A,S,k){if(S.image.length!==6)return;let st=Lt(A,S),it=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);let ut=n.get(it);if(it.version!==ut.__version||st===!0){e.activeTexture(r.TEXTURE0+k);let gt=ne.getPrimaries(ne.workingColorSpace),G=S.colorSpace===cr?null:ne.getPrimaries(S.colorSpace),tt=S.colorSpace===cr||gt===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,j=[];for(let nt=0;nt<6;nt++)!ct&&!L?j[nt]=v(S.image[nt],!0,i.maxCubemapSize):j[nt]=L?S.image[nt].image:S.image[nt],j[nt]=Dt(S,j[nt]);let K=j[0],dt=s.convert(S.format,S.colorSpace),lt=s.convert(S.type),pt=E(S.internalFormat,dt,lt,S.normalized,S.colorSpace),at=S.isVideoTexture!==!0,mt=ut.__version===void 0||st===!0,rt=it.dataReady,et=M(S,K);Wt(r.TEXTURE_CUBE_MAP,S);let xt;if(S.isDepthTexture){if(pt=_(S.format===lr,S.type),mt)if(at)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,pt,K.width,K.height);else for(let nt=0;nt<6;nt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,K.width,K.height,0,dt,lt,null)}else if(ct){at&&mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,et,pt,K.width,K.height);for(let nt=0;nt<6;nt++){xt=j[nt].mipmaps;for(let Tt=0;Tt<xt.length;Tt++){let jt=xt[Tt];S.format!==Li?dt!==null?at?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,jt.width,jt.height,dt,jt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,pt,jt.width,jt.height,0,jt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,jt.width,jt.height,dt,lt,jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,pt,jt.width,jt.height,0,dt,lt,jt.data)}}}else{if(xt=S.mipmaps,at&&mt){xt.length>0&&et++;let nt=Ft(j[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,et,pt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(L){at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,j[nt].width,j[nt].height,dt,lt,j[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,j[nt].width,j[nt].height,0,dt,lt,j[nt].data);for(let Tt=0;Tt<xt.length;Tt++){let Xt=xt[Tt].image[nt].image;at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Xt.width,Xt.height,dt,lt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,pt,Xt.width,Xt.height,0,dt,lt,Xt.data)}}else{at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt,lt,j[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,dt,lt,j[nt]);for(let Tt=0;Tt<xt.length;Tt++){let jt=xt[Tt];at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,dt,lt,jt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,pt,dt,lt,jt.image[nt])}}}T(S)&&S.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ut.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Qt(A,S,k,st,it,ut){let gt=s.convert(k.format,k.colorSpace),G=s.convert(k.type),tt=E(k.internalFormat,gt,G,k.normalized,k.colorSpace),ct=n.get(S),L=n.get(k);if(L.__renderTarget=S,!ct.__hasExternalTextures){let j=Math.max(1,S.width>>ut),K=Math.max(1,S.height>>ut);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,ut,tt,j,K,S.depth,0,gt,G,null):e.texImage2D(it,ut,tt,j,K,0,gt,G,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),ft(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,it,L.__webglTexture,0,Vt(S)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,it,L.__webglTexture,ut),e.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(A,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){let st=S.depthTexture,it=st&&st.isDepthTexture?st.type:null,ut=_(S.stencilBuffer,it),gt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ft(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(S),ut,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(S),ut,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ut,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,A)}else{let st=S.textures;for(let it=0;it<st.length;it++){let ut=st[it],gt=s.convert(ut.format,ut.colorSpace),G=s.convert(ut.type),tt=E(ut.internalFormat,gt,G,ut.normalized,ut.colorSpace);ft(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(S),tt,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(S),tt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,tt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(A,S,k){let st=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(S.depthTexture);it.__renderTarget=S;let ut=st?S.depthTexture.image[0]:S.depthTexture.image;(!it.__webglTexture||ut.width!==S.width||ut.height!==S.height)&&(ut.width=S.width,ut.height=S.height,S.depthTexture.needsUpdate=!0),st?ht(S.depthTexture,0):ot(S.depthTexture,0);let gt=it.__webglTexture,G=Vt(S),tt=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,ct=S.depthTexture.format===lr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===sr)ft(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,tt,gt,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,ct,tt,gt,0);else if(S.depthTexture.format===lr)ft(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,tt,gt,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,ct,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(A){let S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let st=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",it)};st.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=st}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let st=0;st<6;st++)Se(S.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?Se(S.__webglFramebuffer[0],A,0):Se(S.__webglFramebuffer,A,0);else if(k){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=r.createRenderbuffer(),qe(S.__webglDepthbuffer[st],A,!1);else{let it=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ut)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),qe(S.__webglDepthbuffer,A,!1);else{let it=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ut)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(A,S,k){let st=n.get(A);S!==void 0&&Qt(st.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ie(A)}function We(A){let S=A.texture,k=n.get(A),st=n.get(S);A.addEventListener("dispose",U),P(A);let it=A.textures,ut=A.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=S.version,a.memory.textures++),ut){k.__webglFramebuffer=[];for(let G=0;G<6;G++)if(S.mipmaps.length>0){k.__webglFramebuffer[G]=[];for(let tt=0;tt<S.mipmaps.length;tt++)k.__webglFramebuffer[G][tt]=r.createFramebuffer()}else k.__webglFramebuffer[G]=r.createFramebuffer()}else{if(S.mipmaps.length>0){k.__webglFramebuffer=[];for(let G=0;G<S.mipmaps.length;G++)k.__webglFramebuffer[G]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(gt)for(let G=0,tt=it.length;G<tt;G++){let ct=n.get(it[G]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&ft(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let G=0;G<it.length;G++){let tt=it[G];k.__webglColorRenderbuffer[G]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[G]);let ct=s.convert(tt.format,tt.colorSpace),L=s.convert(tt.type),j=E(tt.internalFormat,ct,L,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),K=Vt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,j,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+G,r.RENDERBUFFER,k.__webglColorRenderbuffer[G])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Wt(r.TEXTURE_CUBE_MAP,S);for(let G=0;G<6;G++)if(S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Qt(k.__webglFramebuffer[G][tt],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt);else Qt(k.__webglFramebuffer[G],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);T(S)?y(r.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let G=0,tt=it.length;G<tt;G++){let ct=it[G],L=n.get(ct),j=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(j,L.__webglTexture),Wt(j,ct),Qt(k.__webglFramebuffer,A,ct,r.COLOR_ATTACHMENT0+G,j,0),T(ct)&&y(j)}e.unbindTexture()}else{let G=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(G=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(G,st.__webglTexture),Wt(G,S),S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Qt(k.__webglFramebuffer[tt],A,S,r.COLOR_ATTACHMENT0,G,tt);else Qt(k.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,G,0);T(S)?y(G):S.mipmaps.length>0&&r.texParameteri(G,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ie(A)}function F(A){let S=A.textures;for(let k=0,st=S.length;k<st;k++){let it=S[k];if(T(it)&&it.mipmapsAutoUpdate===!0){let ut=w(A),gt=n.get(it).__webglTexture;e.bindTexture(ut,gt),y(ut),e.unbindTexture()}}}let de=[];function oe(A){if(A.samples>0){if(ft(A)===!1){let S=A.textures,k=A.width,st=A.height,it=r.COLOR_BUFFER_BIT,ut=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=n.get(A),G=S.length>1;if(G)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),G){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let L=n.get(S[ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,k,st,0,0,k,st,it,r.NEAREST),l===!0&&(de.length=0,de.push(r.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&de.push(ut),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),G)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let L=n.get(S[ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,L,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Vt(A){return Math.min(i.maxSamples,A.samples)}function ft(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Dt(A,S){let k=A.colorSpace,st=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Ra&&k!==cr&&(ne.getTransfer(k)===ge?(st!==Li||it!==ri)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",k)),S}function Ft(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Et,this.resetTextureUnits=R,this.getTextureUnits=Q,this.setTextureUnits=_t,this.setTexture2D=ot,this.setTexture2DArray=vt,this.setTexture3D=Mt,this.setTextureCube=ht,this.rebindTextures=Fe,this.setupRenderTarget=We,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=ft,this.dispose=V}function dS(r,t){function e(n,i=cr){let s,a=ne.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===Jl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return r.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===pu)return r.BYTE;if(n===mu)return r.SHORT;if(n===Qs)return r.UNSIGNED_SHORT;if(n===Zl)return r.INT;if(n===Ri)return r.UNSIGNED_INT;if(n===Pi)return r.FLOAT;if(n===Ii)return r.HALF_FLOAT;if(n===xu)return r.ALPHA;if(n===vu)return r.RGB;if(n===Li)return r.RGBA;if(n===sr)return r.DEPTH_COMPONENT;if(n===lr)return r.DEPTH_STENCIL;if(n===yu)return r.RED;if(n===Kl)return r.RED_INTEGER;if(n===Ur)return r.RG;if(n===Ql)return r.RG_INTEGER;if(n===jl)return r.RGBA_INTEGER;if(n===Ja||n===$a||n===Ka||n===Qa)if(a===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===ec||n===nc||n===ic)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===sc||n===ac||n===oc||n===lc||n===ja||n===cc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rc||n===sc)return a===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ac)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return s.COMPRESSED_R11_EAC;if(n===lc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ja)return s.COMPRESSED_RG11_EAC;if(n===cc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Sc||n===Mc||n===bc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===wc||n===Ec)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Tc)return a===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Cc||n===to||n===Rc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ac)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var pS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mS=`
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

}`,Xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ga(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gi({vertexShader:pS,fragmentShader:mS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ki(new Ha(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qu=class extends Bi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding!="undefined",p=new Xu,g={},v=e.getContextAttributes(),T=null,y=null,w=[],E=[],_=new ue,M=null,P=null,C=new Ln;C.viewport=new De;let N=new Ln;N.viewport=new De;let U=[C,N],H=new Hl,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=w[q];return ot===void 0&&(ot=new qs,w[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=w[q];return ot===void 0&&(ot=new qs,w[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=w[q];return ot===void 0&&(ot=new qs,w[q]=ot),ot.getHandSpace()};function W(q){let ot=E.indexOf(q.inputSource);if(ot===-1)return;let vt=w[ot];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<w.length;q++){let ot=E[q];ot!==null&&(E[q]=null,w[q].disconnect(ot))}I=null,V=null,p.reset();for(let q in g)delete g[q];if(t.setRenderTarget(T),f=null,u=null,d=null,i=null,y=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),P!==null){let q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",D),i.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Mt=null,ht=null;v.depth&&(ht=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=v.stencil?lr:sr,Mt=v.stencil?os:Ri);let Nt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Nt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ei(u.textureWidth,u.textureHeight,{format:Li,type:ri,depthTexture:new ar(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:Li,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(q){for(let ot=0;ot<q.removed.length;ot++){let vt=q.removed[ot],Mt=E.indexOf(vt);Mt>=0&&(E[Mt]=null,w[Mt].disconnect(vt))}for(let ot=0;ot<q.added.length;ot++){let vt=q.added[ot],Mt=E.indexOf(vt);if(Mt===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=E.length){E.push(vt),Mt=Nt;break}else if(E[Nt]===null){E[Nt]=vt,Mt=Nt;break}if(Mt===-1)break}let ht=w[Mt];ht&&ht.connect(vt)}}function B(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ot=q.near,vt=q.far;p.texture!==null&&(p.depthNear>0&&(ot=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),H.near=N.near=C.near=ot,H.far=N.far=C.far=vt,(I!==H.near||V!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,V=H.far),H.layers.mask=q.layers.mask|6,C.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Mt=q.parent,ht=H.cameras;B(H,Mt);for(let Nt=0;Nt<ht.length;Nt++)B(ht[Nt],Mt);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),R(q,H,Mt)};function R(q,ot,vt){vt===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Sl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(q){return g[q]};let Q=null;function _t(q,ot){if(h=ot.getViewerPose(c||a),m=ot,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Mt=!1;vt.length!==H.cameras.length&&(H.cameras.length=0,Mt=!0);for(let At=0;At<vt.length;At++){let Wt=vt[At],Lt=null;if(f!==null)Lt=f.getViewport(Wt);else{let ce=d.getViewSubImage(u,Wt);Lt=ce.viewport,At===0&&(t.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(y))}let Ot=U[At];Ot===void 0&&(Ot=new Ln,Ot.layers.enable(At),Ot.viewport=new De,U[At]=Ot),Ot.matrix.fromArray(Wt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Wt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),At===0&&(H.matrix.copy(Ot.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Mt===!0&&H.cameras.push(Ot)}let ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let At=d.getDepthInformation(vt[0]);At&&At.isValid&&At.texture&&p.init(At,i.renderState)}if(ht&&ht.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let At=0;At<vt.length;At++){let Wt=vt[At].camera;if(Wt){let Lt=g[Wt];Lt||(Lt=new Ga,g[Wt]=Lt);let Ot=d.getCameraImage(Wt);Lt.sourceTexture=Ot}}}}for(let vt=0;vt<w.length;vt++){let Mt=E[vt],ht=w[vt];Mt!==null&&ht!==void 0&&ht.update(Mt,ot,c||a)}Q&&Q(q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}let Et=new Gp;Et.setAnimationLoop(_t),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}},gS=new Le,Qp=new Gt;Qp.set(-1,0,0,0,1,0,0,0,1);function _S(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Cu(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Nn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Nn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),T=v.envMap,y=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(gS.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Qp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=T*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xS(r,t,e,n){let i={},s={};function a(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,T){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let w=T.program;n.updateUBOMapping(v,w);let E=t.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){let T=r.createBuffer(),y=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,y,w),r.bindBuffer(r.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let E=0,_=y.length;E<_;E++){let M=y[E];if(Array.isArray(M))for(let P=0,C=M.length;P<C;P++)h(M[P],E,P,w);else h(M,E,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,T,y,w){if(u(v,T,y,w)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let P=0;P<_.length;P++){let C=_[P],N=x(C,!0);d(C,v.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function d(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function u(v,T,y,w){let E=v.value,_=T+"_"+y;if(Array.isArray(E)){w[_]===void 0&&(w[_]=[]);let M=w[_],P=!1;for(let C=0;C<E.length;C++)f(E[C],M,C)===!0&&(P=!0);return P}return f(E,w,_)}function f(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let w=T[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function m(v){let T=v.uniforms,y=0,w=16;for(let _=0,M=T.length;_<M;_++){let P=Array.isArray(T[_])?T[_]:[T[_]];for(let C=0,N=P.length;C<N;C++){let U=P[C],H=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(T[_])||Array.isArray(U.value),V=y;for(let D=0,Y=H.length;D<Y;D++){let B=H[D],R=x(B,I),Q=y%w,_t=Q%R.boundary,Et=Q+_t;y+=_t,Et!==0&&w-Et<R.storage&&(y+=w-Et),D===0&&(V=y),y+=R.storage}let W=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new W((y-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let E=y%w;return E>0&&(y+=w-E),v.__size=y,v.__cache={},this}function x(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let T=v.target;T.removeEventListener("dispose",p),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}var vS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function yS(){return Hi===null&&(Hi=new El(vS,16,16,Ur,Ii),Hi.name="DFG_LUT",Hi.minFilter=Dn,Hi.magFilter=Dn,Hi.wrapS=Fi,Hi.wrapT=Fi,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var Dc=class{constructor(t={}){let{canvas:e=fp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ri}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,p=new Set([jl,Ql,Kl]),g=new Set([ri,Ri,Qs,os,Jl,$l]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,E=null,_=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,U=null,H=null,I=null,V=null;this._outputColorSpace=ti;let W=0,D=0,Y=null,B=-1,R=null,Q=new De,_t=new De,Et=null,q=new Kt(0),ot=0,vt=e.width,Mt=e.height,ht=1,Nt=null,xe=null,At=new De(0,0,vt,Mt),Wt=new De(0,0,vt,Mt),Lt=!1,Ot=new is,ce=new Al,ae=!1,J=!1,Qt=new Le,qe=new $,Se=new De,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function We(){return Y===null?ht:1}let F=n;function de(b,O){return e.getContext(b,O)}let oe,Vt,ft,he,Dt,Ft,A,S,k,st,it,ut,gt,G,tt,ct,L,j,K,dt,lt,pt,at;try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),F===null){let O="webgl2";if(F=de(O,b),F===null)throw de(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(b){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),kt("WebGLRenderer: "+b.message),b}function mt(){oe=new Iv(F),oe.init(),lt=new dS(F,oe),Vt=new yv(F,oe,t,lt),ft=new uS(F,oe),Vt.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),H=F.createFramebuffer(),I=F.createFramebuffer(),V=F.createFramebuffer(),he=new Nv(F),Dt=new Ky,Ft=new fS(F,oe,ft,Dt,Vt,lt,he),A=new Pv(C),S=new O_(F),pt=new xv(F,S),k=new Lv(F,S,he,pt),st=new Ov(F,k,S,pt,he),j=new Uv(F,Vt,Ft),tt=new Sv(Dt),it=new $y(C,A,oe,Vt,pt,tt),ut=new _S(C,Dt),gt=new jy,G=new sS(oe),L=new _v(C,A,ft,st,m,l),ct=new hS(C,st,Vt),at=new xS(F,he,Vt,ft),K=new vv(F,oe,he),dt=new Dv(F,oe,he),he.programs=it.programs,C.capabilities=Vt,C.extensions=oe,C.properties=Dt,C.renderLists=gt,C.shadowMap=ct,C.state=ft,C.info=he}x!==ri&&(P=new Bv(x,e.width,e.height,o,i,s));let rt=new qu(C,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(b){b!==void 0&&(ht=b,this.setSize(vt,Mt,!1))},this.getSize=function(b){return b.set(vt,Mt)},this.setSize=function(b,O,Z=!0){if(rt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=b,Mt=O,e.width=Math.floor(b*ht),e.height=Math.floor(O*ht),Z===!0&&(e.style.width=b+"px",e.style.height=O+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(vt*ht,Mt*ht).floor()},this.setDrawingBufferSize=function(b,O,Z){vt=b,Mt=O,ht=Z,e.width=Math.floor(b*Z),e.height=Math.floor(O*Z),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(x===ri){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,O,Z,z){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,O,Z,z),ft.viewport(Q.copy(At).multiplyScalar(We()).round())},this.getScissor=function(b){return b.copy(Wt)},this.setScissor=function(b,O,Z,z){b.isVector4?Wt.set(b.x,b.y,b.z,b.w):Wt.set(b,O,Z,z),ft.scissor(_t.copy(Wt).multiplyScalar(We()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(b){ft.setScissorTest(Lt=b)},this.setOpaqueSort=function(b){Nt=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Z=!0){let z=0;if(b){let X=!1;if(Y!==null){let St=Y.texture.format;X=p.has(St)}if(X){let St=Y.texture.type,Rt=g.has(St),yt=L.getClearColor(),wt=L.getClearAlpha(),Ut=yt.r,qt=yt.g,te=yt.b;Rt?(v[0]=Ut,v[1]=qt,v[2]=te,v[3]=wt,F.clearBufferuiv(F.COLOR,0,v)):(T[0]=Ut,T[1]=qt,T[2]=te,T[3]=wt,F.clearBufferiv(F.COLOR,0,T))}else z|=F.COLOR_BUFFER_BIT}O&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),L.dispose(),gt.dispose(),G.dispose(),Ft.dispose(),Dt.dispose(),A.dispose(),st.dispose(),k.dispose(),pt.dispose(),at.dispose(),it.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Me),rt.removeEventListener("sessionend",me),je.stop()};function et(b){b.preventDefault(),Eu("WebGLRenderer: Context Lost."),N=!0}function xt(){Eu("WebGLRenderer: Context Restored."),N=!1;let b=he.autoReset,O=ct.enabled,Z=ct.autoUpdate,z=ct.needsUpdate,X=ct.type;mt(),he.autoReset=b,ct.enabled=O,ct.autoUpdate=Z,ct.needsUpdate=z,ct.type=X}function nt(b){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Tt(b){let O=b.target;O.removeEventListener("dispose",Tt),jt(O)}function jt(b){Xt(b),Dt.remove(b)}function Xt(b){let O=Dt.get(b).programs;O!==void 0&&(O.forEach(function(Z){it.releaseProgram(Z)}),b.isShaderMaterial&&it.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Z,z,X,St){O===null&&(O=ie);let Rt=X.isMesh&&X.matrixWorld.determinantAffine()<0,yt=fi(b,O,Z,z,X);ft.setMaterial(z,Rt);let wt=Z.index,Ut=1;if(z.wireframe===!0){if(wt=k.getWireframeAttribute(Z),wt===void 0)return;Ut=2}let qt=Z.drawRange,te=Z.attributes.position,Pt=qt.start*Ut,ee=(qt.start+qt.count)*Ut;St!==null&&(Pt=Math.max(Pt,St.start*Ut),ee=Math.min(ee,(St.start+St.count)*Ut)),wt!==null?(Pt=Math.max(Pt,0),ee=Math.min(ee,wt.count)):te!=null&&(Pt=Math.max(Pt,0),ee=Math.min(ee,te.count));let Je=ee-Pt;if(Je<0||Je===1/0)return;pt.setup(X,z,yt,Z,wt);let Ee,Te=K;if(wt!==null&&(Ee=S.get(wt),Te=dt,Te.setIndex(Ee)),X.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*We()),Te.setMode(F.LINES)):Te.setMode(F.TRIANGLES);else if(X.isLine){let vn=z.linewidth;vn===void 0&&(vn=1),ft.setLineWidth(vn*We()),X.isLineSegments?Te.setMode(F.LINES):X.isLineLoop?Te.setMode(F.LINE_LOOP):Te.setMode(F.LINE_STRIP)}else X.isPoints?Te.setMode(F.POINTS):X.isSprite&&Te.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Te.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let vn=X._multiDrawStarts,It=X._multiDrawCounts,In=X._multiDrawCount,pe=wt?S.get(wt).bytesPerElement:1,$r=Dt.get(z).currentProgram.getUniforms();for(let yn=0;yn<In;yn++)$r.setValue(F,"_gl_DrawID",yn),Te.render(vn[yn]/pe,It[yn])}else if(X.isInstancedMesh)Te.renderInstances(Pt,Je,X.count);else if(Z.isInstancedBufferGeometry){let vn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,It=Math.min(Z.instanceCount,vn);Te.renderInstances(Pt,Je,It)}else Te.render(Pt,Je)};function Ce(b,O,Z,z){U!==null&&b.isNodeMaterial&&U.setObject(z,b),ae===!0&&tt.setState(b,Z,!1),b.transparent===!0&&b.side===Vi&&b.forceSinglePass===!1?(b.side=Nn,b.needsUpdate=!0,Kn(b,O,z),b.side=Nr,b.needsUpdate=!0,Kn(b,O,z),b.side=Vi):Kn(b,O,z)}this.compile=function(b,O,Z=null){Z===null&&(Z=b),U!==null&&U.renderStart(b,O,Z),E=G.get(Z),E.init(O),M.push(E),Z.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),b!==Z&&b.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),J=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,J),ae===!0&&tt.setGlobalState(this.clippingPlanes,O),U!==null&&ct.render(E.state.shadowsArray,Z,O);let z=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let St=X.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let yt=St[Rt];Ce(yt,Z,O,X),z.add(yt)}else Ce(St,Z,O,X),z.add(St)}),E=M.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(b,O,Z=null){let z=this.compile(b,O,Z);return new Promise(X=>{function St(){if(z.forEach(function(Rt){let wt=Dt.get(Rt).currentProgram;(wt===void 0||wt.isReady())&&z.delete(Rt)}),z.size===0){X(b);return}setTimeout(St,10)}oe.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ye=null;function Re(b){Ye&&Ye(b)}function Me(){je.stop()}function me(){je.start()}let je=new Gp;je.setAnimationLoop(Re),typeof self!="undefined"&&je.setContext(self),this.setAnimationLoop=function(b){Ye=b,rt.setAnimationLoop(b),b===null?je.stop():je.start()},rt.addEventListener("sessionstart",Me),rt.addEventListener("sessionend",me),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(b,O);let Z=rt.enabled===!0&&rt.isPresenting===!0,z=P!==null&&(Y===null||Z)&&P.begin(C,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,O,Y),E=G.get(b,M.length),E.init(O),E.state.textureUnits=Ft.getTextureUnits(),M.push(E),Qt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?ce.setFromArrayCamera(O):Ot.setFromProjectionMatrix(Qt,pi,O.reversedDepth),J=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,J),w=gt.get(b,_.length),w.init(),_.push(w),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Rt=C.xr.getDepthSensingMesh();Rt!==null&&be(Rt,O,-1/0,C.sortObjects)}be(b,O,0,C.sortObjects),w.finish(),U!==null&&U.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(Nt,xe),Fe=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Fe&&L.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),ae===!0&&tt.beginShadows();let X=E.state.shadowsArray;if(ct.render(X,b,O),ae===!0&&tt.endShadows(),(z&&P.hasRenderPass())===!1){let Rt=w.opaque,yt=w.transmissive;if(E.setupLights(),O.isArrayCamera){let wt=O.cameras;if(yt.length>0)for(let Ut=0,qt=wt.length;Ut<qt;Ut++){let te=wt[Ut];$n(Rt,yt,b,te)}Fe&&L.render(b);for(let Ut=0,qt=wt.length;Ut<qt;Ut++){let te=wt[Ut];xn(w,b,te,te.viewport)}}else yt.length>0&&$n(Rt,yt,b,O),Fe&&L.render(b),xn(w,b,O)}Y!==null&&D===0&&(Ft.updateMultisampleRenderTarget(Y),Ft.updateRenderTargetMipmap(Y)),z&&P.end(C),b.isScene===!0&&b.onAfterRender(C,b,O),pt.resetDefaultState(),B=-1,R=null,M.pop(),M.length>0?(E=M[M.length-1],Ft.setTextureUnits(E.state.textureUnits),ae===!0&&tt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,U!==null&&U.renderEnd()};function be(b,O,Z,z){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let Rt=O.isArrayCamera?ce:Ot;if(!b.frustumCulled||b.intersectsFrustum(Rt)){z&&Se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Qt);let yt=st.update(b),wt=b.material;wt.visible&&w.push(b,yt,wt,Z,Se.z,null,O)}}else if(b.isMesh||b.isLine||b.isPoints){let Rt=O.isArrayCamera?ce:Ot;if(!b.frustumCulled||b.intersectsFrustum(Rt)){let yt=st.update(b),wt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Se.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Se.copy(yt.boundingSphere.center)),Se.applyMatrix4(b.matrixWorld).applyMatrix4(Qt)),Array.isArray(wt)){let Ut=yt.groups;for(let qt=0,te=Ut.length;qt<te;qt++){let Pt=Ut[qt],ee=wt[Pt.materialIndex];ee&&ee.visible&&w.push(b,yt,ee,Z,Se.z,Pt,O)}}else wt.visible&&w.push(b,yt,wt,Z,Se.z,null,O)}}}let St=b.children;for(let Rt=0,yt=St.length;Rt<yt;Rt++)be(St[Rt],O,Z,z)}function xn(b,O,Z,z){let{opaque:X,transmissive:St,transparent:Rt}=b;E.setupLightsView(Z),ae===!0&&tt.setGlobalState(C.clippingPlanes,Z),z&&ft.viewport(Q.copy(z)),X.length>0&&Be(X,O,Z),St.length>0&&Be(St,O,Z),Rt.length>0&&Be(Rt,O,Z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function $n(b,O,Z,z){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Pt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new ei(1,1,{generateMipmaps:!0,type:Pt?Ii:ri,minFilter:or,samples:Math.max(4,Vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let St=E.state.transmissionRenderTarget[z.id],Rt=z.viewport||Q;St.setSize(Rt.z*C.transmissionResolutionScale,Rt.w*C.transmissionResolutionScale);let yt=C.getRenderTarget(),wt=C.getActiveCubeFace(),Ut=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(q),ot=C.getClearAlpha(),ot<1&&C.setClearColor(16777215,.5),C.clear(),Fe&&L.render(Z);let qt=C.toneMapping;C.toneMapping=Gi;let te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),ae===!0&&tt.setGlobalState(C.clippingPlanes,z),Be(b,Z,z),Ft.updateMultisampleRenderTarget(St),Ft.updateRenderTargetMipmap(St),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ee=0,Je=O.length;ee<Je;ee++){let Ee=O[ee],{object:Te,geometry:vn,material:It,group:In}=Ee;if(It.side===Vi&&Te.layers.test(z.layers)){let pe=It.side;It.side=Nn,It.needsUpdate=!0,Ze(Te,Z,z,vn,It,In),It.side=pe,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(Ft.updateMultisampleRenderTarget(St),Ft.updateRenderTargetMipmap(St))}C.setRenderTarget(yt,wt,Ut),C.setClearColor(q,ot),te!==void 0&&(z.viewport=te),C.toneMapping=qt}function Be(b,O,Z){let z=O.isScene===!0?O.overrideMaterial:null;for(let X=0,St=b.length;X<St;X++){let Rt=b[X],{object:yt,geometry:wt,group:Ut}=Rt,qt=Rt.material;qt.allowOverride===!0&&z!==null&&(qt=z),yt.layers.test(Z.layers)&&Ze(yt,O,Z,wt,qt,Ut)}}function Ze(b,O,Z,z,X,St){U!==null&&X.isNodeMaterial&&U.setObject(b,X),b.onBeforeRender(C,O,Z,z,X,St),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(C,O,Z,z,b,St),X.transparent===!0&&X.side===Vi&&X.forceSinglePass===!1?(X.side=Nn,X.needsUpdate=!0,C.renderBufferDirect(Z,O,z,X,b,St),X.side=Nr,X.needsUpdate=!0,C.renderBufferDirect(Z,O,z,X,b,St),X.side=Vi):C.renderBufferDirect(Z,O,z,X,b,St),b.onAfterRender(C,O,Z,z,X,St)}function tn(b){let O=0;for(let Z of b)Z.texture!==null&&O++;return O}function Kn(b,O,Z){O.isScene!==!0&&(O=ie);let z=Dt.get(b),X=E.state.lights,St=E.state.shadowsArray,Rt=X.state.version,yt=it.getParameters(b,X.state,St,O,Z,E.state.lightProbeGridArray),wt=it.getProgramCacheKey(yt),Ut=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,z.fog=O.fog;let qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=A.get(b.envMap||z.environment,qt),z.envMapRotation=z.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Tt),Ut=new Map,z.programs=Ut,z.programVariants=new Map);let te=Ut.get(wt);if(te!==void 0){if(z.currentProgram===te&&z.lightsStateVersion===Rt)return ze(b,yt),te}else yt.uniforms=it.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,Z,yt),b.onBeforeCompile(yt,C),te=it.acquireProgram(yt,wt),Ut.set(wt,te),z.uniforms=yt.uniforms;let Pt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=tt.uniform),ze(b,yt),z.needsLights=zo(b),z.lightsStateVersion=Rt,z.needsLights&&(Pt.ambientLightColor.value=X.state.ambient,Pt.lightProbe.value=X.state.probe,Pt.sunLights.value=X.state.sun,Pt.sunLightShadows.value=X.state.sunShadow,Pt.directionalLights.value=X.state.directional,Pt.directionalLightShadows.value=X.state.directionalShadow,Pt.spotLights.value=X.state.spot,Pt.spotLightShadows.value=X.state.spotShadow,Pt.rectAreaLights.value=X.state.rectArea,Pt.ltc_1.value=X.state.rectAreaLTC1,Pt.ltc_2.value=X.state.rectAreaLTC2,Pt.pointLights.value=X.state.point,Pt.pointLightShadows.value=X.state.pointShadow,Pt.hemisphereLights.value=X.state.hemi,Pt.sunShadowMatrix.value=X.state.sunShadowMatrix,Pt.sunShadowCascade.value=X.state.sunShadowCascade,Pt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pt.spotLightMatrix.value=X.state.spotLightMatrix,Pt.spotLightMap.value=X.state.spotLightMap,Pt.pointShadowMatrix.value=X.state.pointShadowMatrix),z.numLightProbeGrids=tn(E.state.lightProbeGridArray),z.currentProgram=te,z.uniformsList=null,te}function Cs(b,O,Z,z,X){let St=Dt.get(b),Rt=St.currentProgram.id+","+z+","+X,yt=St.programVariants.get(Rt);return yt===void 0?(yt=Kn(b,O,Z),St.programVariants.set(Rt,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=z,St.toneMapping=X),yt}function en(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=js.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function ze(b,O){let Z=Dt.get(b);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function fi(b,O,Z,z,X){O.isScene!==!0&&(O=ie),Ft.resetTextureUnits();let St=O.fog,Rt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?O.environment:null,yt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ne.workingColorSpace,wt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ut=A.get(z.envMap||Rt,wt),qt=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,te=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!Z.morphAttributes.position,ee=!!Z.morphAttributes.normal,Je=!!Z.morphAttributes.color,Ee=Gi;z.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ee=C.toneMapping);let Te=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,vn=Te!==void 0?Te.length:0,It=Dt.get(z),In=E.state.lights;if(ae===!0&&(J===!0||b!==R)){let Ie=b===R&&z.id===B;tt.setState(z,b,Ie)}let pe=!1,$r=!1;z.version===It.__version?It.needsLights&&It.lightsStateVersion!==In.state.version||X.isBatchedMesh&&It.batching===!1||!X.isBatchedMesh&&It.batching===!0||X.isBatchedMesh&&It.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&It.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&It.instancing===!1||!X.isInstancedMesh&&It.instancing===!0||X.isSkinnedMesh&&It.skinning===!1||!X.isSkinnedMesh&&It.skinning===!0||X.isInstancedMesh&&It.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&It.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&It.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&It.instancingMorph===!1&&X.morphTexture!==null||It.envMap!==Ut||z.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==tt.numPlanes||It.numIntersection!==tt.numIntersection)||It.vertexAlphas!==qt||It.vertexTangents!==te||It.morphTargets!==Pt||It.morphNormals!==ee||It.morphColors!==Je||It.morphTargetsCount!==vn||It.numLightProbeGrids!==tn(E.state.lightProbeGridArray)?pe=!0:(It.outputColorSpace!==yt||It.toneMapping!==Ee)&&($r=!0):(pe=!0,It.__version=z.version);let yn=It.currentProgram;(pe===!0||$r===!0)&&(yn=$r===!0?Cs(z,O,X,yt,Ee):Kn(z,O,X),U&&z.isNodeMaterial&&U.onUpdateProgram(z,yn,It));let ko=!1,Sr=!1,Kr=!1,le=yn.getUniforms(),dn=It.uniforms;if(ft.useProgram(yn.program)&&(ko=!0,Sr=!0,Kr=!0),z.id!==B&&(B=z.id,Sr=!0),ko||R!==b){ft.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),le.setValue(F,"projectionMatrix",b.projectionMatrix),le.setValue(F,"viewMatrix",b.matrixWorldInverse);let on=le.map.cameraPosition;on!==void 0&&on.setValue(F,qe.setFromMatrixPosition(b.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Sr=!0,Kr=!0)}if(It.needsLights&&(In.state.sunShadowMap.length>0&&le.setValue(F,"sunShadowMap",In.state.sunShadowMap,Ft),In.state.directionalShadowMap.length>0&&le.setValue(F,"directionalShadowMap",In.state.directionalShadowMap,Ft),In.state.spotShadowMap.length>0&&le.setValue(F,"spotShadowMap",In.state.spotShadowMap,Ft),In.state.pointShadowMap.length>0&&le.setValue(F,"pointShadowMap",In.state.pointShadowMap,Ft)),X.isSkinnedMesh){le.setOptional(F,X,"bindMatrix"),le.setOptional(F,X,"bindMatrixInverse");let Ie=X.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),le.setValue(F,"boneTexture",Ie.boneTexture,Ft))}X.isBatchedMesh&&(le.setOptional(F,X,"batchingTexture"),le.setValue(F,"batchingTexture",X._matricesTexture,Ft),le.setOptional(F,X,"batchingIdTexture"),le.setValue(F,"batchingIdTexture",X._indirectTexture,Ft),le.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&le.setValue(F,"batchingColorTexture",X._colorsTexture,Ft));let bi=Z.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&j.update(X,Z,yn),(Sr||It.receiveShadow!==X.receiveShadow)&&(It.receiveShadow=X.receiveShadow,le.setValue(F,"receiveShadow",X.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&O.environment!==null&&(dn.envMapIntensity.value=O.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=yS()),Sr){if(le.setValue(F,"toneMappingExposure",C.toneMappingExposure),It.needsLights&&Ma(dn,Kr),St&&z.fog===!0&&ut.refreshFogUniforms(dn,St),ut.refreshMaterialUniforms(dn,z,ht,Mt,E.state.transmissionRenderTarget[b.id]),It.needsLights&&It.numLightProbeGrids>0){let Ie=y,on=0;for(let Ki of E.state.lightProbeGridArray)Ki.texture!==null&&(Ie.textures[on]=Ki.texture,Ie.min[on]=Ki.boundingBox.min,Ie.max[on]=Ki.boundingBox.max,Ie.resolution[on]=Ki.resolution,on++);for(let Ki in Ie)Ie[Ki].length=on;dn.probesSH.value=Ie.textures,dn.probesMin.value=Ie.min,dn.probesMax.value=Ie.max,dn.probesResolution.value=Ie.resolution}js.upload(F,en(It),dn,Ft)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(js.upload(F,en(It),dn,Ft),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(F,"center",X.center),le.setValue(F,"modelViewMatrix",X.modelViewMatrix),le.setValue(F,"normalMatrix",X.normalMatrix),le.setValue(F,"modelMatrix",X.matrixWorld),z.uniformsGroups!==void 0){let Ie=z.uniformsGroups;for(let on=0,Ki=Ie.length;on<Ki;on++){let cd=Ie[on];at.update(cd,yn),at.bind(cd,yn)}}return yn}function Ma(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function zo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,O,Z){let z=Dt.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Dt.get(b.texture).__webglTexture=O,Dt.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Z,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let Z=Dt.get(b);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Z=0){Y=b,W=O,D=Z;let z=null,X=!1,St=!1;if(b){let yt=Dt.get(b);if(yt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),Q.copy(b.viewport),_t.copy(b.scissor),Et=b.scissorTest,ft.viewport(Q),ft.scissor(_t),ft.setScissorTest(Et),B=-1;return}else if(yt.__webglFramebuffer===void 0)Ft.setupRenderTarget(b);else if(yt.__hasExternalTextures)Ft.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let qt=b.depthTexture;if(yt.__boundDepthTexture!==qt){if(qt!==null&&Dt.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(b)}}let wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);let Ut=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?z=Ut[O][Z]:z=Ut[O],X=!0):b.samples>0&&Ft.useMultisampledRTT(b)===!1?z=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?z=Ut[Z]:z=Ut,Q.copy(b.viewport),_t.copy(b.scissor),Et=b.scissorTest}else Q.copy(At).multiplyScalar(ht).floor(),_t.copy(Wt).multiplyScalar(ht).floor(),Et=Lt;if(Z!==0&&(z=H),ft.bindFramebuffer(F.FRAMEBUFFER,z)&&ft.drawBuffers(b,z),ft.viewport(Q),ft.scissor(_t),ft.setScissorTest(Et),X){let yt=Dt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,Z)}else if(St){let yt=O;for(let wt=0;wt<b.textures.length;wt++){let Ut=Dt.get(b.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,Z,yt)}}else if(b!==null&&Z!==0){let yt=Dt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,Z)}B=-1};function yr(b){let O=Dt.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=Vt.textureFormatReadable(b.format),O.__typeReadable=Vt.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,Z,z,X,St,Rt,yt=0){if(!(b&&b.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt){ft.bindFramebuffer(F.FRAMEBUFFER,wt);try{let Ut=b.textures[yt],qt=Ut.format,te=Ut.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=yr(Ut);if(Pt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-z&&Z>=0&&Z<=b.height-X&&F.readPixels(O,Z,z,X,lt.convert(qt),lt.convert(te),St)}finally{let Ut=Y!==null?Dt.get(Y).__webglFramebuffer:null;ft.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,O,Z,z,X,St,Rt,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt)if(O>=0&&O<=b.width-z&&Z>=0&&Z<=b.height-X){ft.bindFramebuffer(F.FRAMEBUFFER,wt);let Ut=b.textures[yt],qt=Ut.format,te=Ut.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=yr(Ut);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),F.readPixels(O,Z,z,X,lt.convert(qt),lt.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Je=Y!==null?Dt.get(Y).__webglFramebuffer:null;ft.bindFramebuffer(F.FRAMEBUFFER,Je);let Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pp(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Z=0){let z=Math.pow(2,-Z),X=Math.floor(b.image.width*z),St=Math.floor(b.image.height*z),Rt=O!==null?O.x:0,yt=O!==null?O.y:0;Ft.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Rt,yt,X,St),ft.unbindTexture()},this.copyTextureToTexture=function(b,O,Z=null,z=null,X=0,St=0){let Rt,yt,wt,Ut,qt,te,Pt,ee,Je,Ee=b.isCompressedTexture?b.mipmaps[St]:b.image;if(Z!==null)Rt=Z.max.x-Z.min.x,yt=Z.max.y-Z.min.y,wt=Z.isBox3?Z.max.z-Z.min.z:1,Ut=Z.min.x,qt=Z.min.y,te=Z.isBox3?Z.min.z:0;else{let le=Math.pow(2,-X);Rt=Math.floor(Ee.width*le),yt=Math.floor(Ee.height*le),b.isDataArrayTexture?wt=Ee.depth:b.isData3DTexture?wt=Math.floor(Ee.depth*le):wt=1,Ut=0,qt=0,te=0}z!==null?(Pt=z.x,ee=z.y,Je=z.z):(Pt=0,ee=0,Je=0);let Te=lt.convert(O.format),vn=lt.convert(O.type),It;O.isData3DTexture?(Ft.setTexture3D(O,0),It=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ft.setTexture2DArray(O,0),It=F.TEXTURE_2D_ARRAY):(Ft.setTexture2D(O,0),It=F.TEXTURE_2D),ft.activeTexture(F.TEXTURE0),ft.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),ft.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ft.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let In=ft.getParameter(F.UNPACK_ROW_LENGTH),pe=ft.getParameter(F.UNPACK_IMAGE_HEIGHT),$r=ft.getParameter(F.UNPACK_SKIP_PIXELS),yn=ft.getParameter(F.UNPACK_SKIP_ROWS),ko=ft.getParameter(F.UNPACK_SKIP_IMAGES);ft.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),ft.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),ft.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),ft.pixelStorei(F.UNPACK_SKIP_ROWS,qt),ft.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let Sr=b.isDataArrayTexture||b.isData3DTexture,Kr=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let le=Dt.get(b),dn=Dt.get(O),bi=Dt.get(le.__renderTarget),Ie=Dt.get(dn.__renderTarget);ft.bindFramebuffer(F.READ_FRAMEBUFFER,bi.__webglFramebuffer),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let on=0;on<wt;on++)Sr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(b).__webglTexture,X,te+on),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(O).__webglTexture,St,Je+on)),F.blitFramebuffer(Ut,qt,Ut+Rt,qt+yt,Pt,ee,Pt+Rt,ee+yt,F.DEPTH_BUFFER_BIT,F.NEAREST);ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Dt.has(b)){let le=Dt.get(b),dn=Dt.get(O);ft.bindFramebuffer(F.READ_FRAMEBUFFER,I),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let bi=0;bi<wt;bi++)Sr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,le.__webglTexture,X,te+bi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,le.__webglTexture,X),Kr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,St,Je+bi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,St),X!==0?F.blitFramebuffer(Ut,qt,Ut+Rt,qt+yt,Pt,ee,Pt+Rt,ee+yt,F.COLOR_BUFFER_BIT,F.NEAREST):Kr?F.copyTexSubImage3D(It,St,Pt,ee,Je+bi,Ut,qt,Rt,yt):F.copyTexSubImage2D(It,St,Pt,ee,Ut,qt,Rt,yt);ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Kr?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(It,St,Pt,ee,Je,Rt,yt,wt,Te,vn,Ee.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(It,St,Pt,ee,Je,Rt,yt,wt,Te,Ee.data):F.texSubImage3D(It,St,Pt,ee,Je,Rt,yt,wt,Te,vn,Ee):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,St,Pt,ee,Rt,yt,Te,vn,Ee.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,St,Pt,ee,Ee.width,Ee.height,Te,Ee.data):F.texSubImage2D(F.TEXTURE_2D,St,Pt,ee,Rt,yt,Te,vn,Ee);ft.pixelStorei(F.UNPACK_ROW_LENGTH,In),ft.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe),ft.pixelStorei(F.UNPACK_SKIP_PIXELS,$r),ft.pixelStorei(F.UNPACK_SKIP_ROWS,yn),ft.pixelStorei(F.UNPACK_SKIP_IMAGES,ko),St===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&F.generateMipmap(It),ft.unbindTexture()},this.initRenderTarget=function(b){Dt.get(b).__webglFramebuffer===void 0&&Ft.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ft.setTextureCube(b,0):b.isData3DTexture?Ft.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ft.setTexture2DArray(b,0):Ft.setTexture2D(b,0),ft.unbindTexture()},this.resetState=function(){W=0,D=0,Y=null,ft.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};function hr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function om(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},uo={duration:.5,overwrite:!1,delay:0},cf,pn,Pe,xi=1e8,ye=1/xi,tf=Math.PI*2,SS=tf/4,MS=0,lm=Math.sqrt,bS=Math.cos,TS=Math.sin,sn=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},fr=function(t){return typeof t=="number"},Yc=function(t){return typeof t=="undefined"},Yi=function(t){return typeof t=="object"},qn=function(t){return t!==!1},hf=function(){return typeof window!="undefined"},Oc=function(t){return ke(t)||sn(t)},cm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,wS=/random\([^)]+\)/g,ES=/,\s*/g,jp=/(?:-?\.?\d|\.)+/gi,uf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ff=/[+-]=-?[.\d]+/,AS=/[^,'"\[\]\s]+/gi,CS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,Xi,ef,df,ai={},kc={},hm,um=function(t){return(kc=na(t,ai))&&En},Zc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},fo=function(t,e){return!e&&console.warn(t)},fm=function(t,e){return t&&(ai[t]=e)&&kc&&(kc[t]=e)||ai},po=function(){return 0},RS={suppressEvents:!0,isStart:!0,kill:!1},Fc={suppressEvents:!0,kill:!1},PS={suppressEvents:!0},pf={},Fr=[],nf={},dm,Wn={},Zu={},tm=30,Bc=[],mf="",gf=function(t){var e=t[0],n,i;if(Yi(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Bc.length;i--&&!Bc[i].targetTest(e););n=Bc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new yf(t[i],n)))||t.splice(i,1);return t},Br=function(t){return t._gsap||gf(vi(t))[0]._gsap},_f=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():Yc(n)&&t.getAttribute&&t.getAttribute(e)||n},Un=function(t,e){return(t=t.split(",")).forEach(e)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},Ne=function(t){return Math.round(t*1e7)/1e7||0},ds=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},IS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Vc=function(){var t=Fr.length,e=Fr.slice(0),n,i;for(nf={},Fr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xf=function(t){return!!(t._initted||t._startAt||t.add)},pm=function(t,e,n,i){Fr.length&&!pn&&Vc(),t.render(e,n,i||!!(pn&&e<0&&xf(t))),Fr.length&&!pn&&Vc()},mm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(AS).length<2?e:sn(t)?t.trim():t},gm=function(t){return t},oi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},LS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},na=function(t,e){for(var n in e)t[n]=e[n];return t},em=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Gc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},lo=function(t){var e=t.parent||Ue,n=t.keyframes?LS(wn(t.keyframes)):oi;if(qn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},DS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},_m=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Jc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},zr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},cs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},NS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},rf=function(t,e,n,i){return t._startAt&&(pn?t._startAt.revert(Fc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},US=function r(t){return!t||t._ts&&r(t.parent)},nm=function(t){return t._repeat?ia(t._tTime,t=t.duration()+t._rDelay)*t:0},ia=function(t,e){var n=Math.floor(t=Ne(t/e));return t&&n===t?n-1:n},Hc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},$c=function(t){return t._end=Ne(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},Kc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ne(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),$c(t),n._dirty||cs(n,t)),t},xm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Hc(t.rawTime(),e),(!e._dur||xo(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),cs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},qi=function(t,e,n,i){return e.parent&&zr(e),e._start=Ne((fr(n)?n:!n&&Wc(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Ue?_i(t,n,e):t._time)+e._delay),e._end=Ne(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),_m(t,e,"_first","_last",t._sort?"_start":0),Wc(e)||(t._recent=e),i||xm(t,e),t._ts<0&&Kc(t,t._tTime),t},vm=function(t,e){return(ai.ScrollTrigger||Zc("scrollTrigger",e))&&ai.ScrollTrigger.create(e,t)},ym=function(t,e,n,i,s){if(bf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&dm!==Xn.frame)return Fr.push(t),t._lazy=[s,i],1},OS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Wc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},FS=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&OS(t)&&!(!t._initted&&Wc(t))||(t._ts<0||t._dp._ts<0)&&!Wc(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=xo(0,t._tDur,e),h=ia(l,o),t._yoyo&&h&1&&(a=1-a),h!==ia(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||pn||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&ym(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&rf(t,e,n,!0),t._onUpdate&&!n&&si(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&si(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&zr(t,1),!n&&!pn&&(si(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},BS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ra=function(t,e,n,i){var s=t._repeat,a=Ne(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ne(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Kc(t,t._tTime=t._tDur*o),t.parent&&$c(t),n||cs(t.parent,t),t},im=function(t){return t instanceof Tn?cs(t):ra(t,t._dur)},zS={_start:0,endTime:po,totalDuration:po},_i=function r(t,e,n){var i=t.labels,s=t._recent||zS,a=t.duration()>=xi?s.endTime(!1):t._dur,o,l,c;return sn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},co=function(t,e,n){var i=fr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qn(l.vars.inherit)&&l.parent;a.immediateRender=qn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Xe(e[0],a,e[s+1])},kr=function(t,e){return t||t===0?e(t):e},xo=function(t,e,n){return n<t?t:n>e?e:n},mn=function(t,e){return!sn(t)||!(e=CS.exec(t))?"":e[1]},kS=function(t,e,n){return kr(n,function(i){return xo(t,e,i)})},sf=[].slice,Sm=function(t,e){return t&&Yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yi(t[0]))&&!t.nodeType&&t!==Xi},VS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return sn(i)&&!e||Sm(i,1)?(s=n).push.apply(s,vi(i)):n.push(i)})||n},vi=function(t,e,n){return Pe&&!e&&Pe.selector?Pe.selector(t):sn(t)&&!n&&(ef||!sa())?sf.call((e||df).querySelectorAll(t),0):wn(t)?VS(t,n):Sm(t)?sf.call(t,0):t?[t]:[]},af=function(t){return t=vi(t)[0]||fo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vi(e,n.querySelectorAll?n:n===t?fo("Invalid scope")||df.createElement("div"):t)}},Mm=function(t){return t.sort(function(){return .5-Math.random()})},bm=function(t){if(ke(t))return t;var e=Yi(t)?t:{each:t},n=hs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return sn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,m){var x=(m||e).length,p=a[x],g,v,T,y,w,E,_,M,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,xi])[1],!P){for(_=-xi;_<(_=m[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(p=a[x]=[],g=l?Math.min(P,x)*h-.5:i%P,v=P===xi?0:l?x*d/P-.5:i/P|0,_=0,M=xi,E=0;E<x;E++)T=E%P-g,y=v-(E/P|0),p[E]=w=c?Math.abs(c==="y"?y:T):lm(T*T+y*y),w>_&&(_=w),w<M&&(M=w);i==="random"&&Mm(p),p.max=_-M,p.min=M,p.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(P>x?x-1:c?c==="y"?x/P:P:Math.max(P,x/P))||0)*(i==="edges"?-1:1),p.b=x<0?s-x:s,p.u=mn(e.amount||e.each)||0,n=n&&x<0?tM(n):n}return x=(p[u]-p.min)/p.max||0,Ne(p.b+(n?n(x):x)*p.v)+p.u}},of=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ne(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(fr(n)?0:mn(n))}},Tm=function(t,e){var n=wn(t),i,s;return!n&&Yi(t)&&(i=n=t.radius||xi,t.values?(t=vi(t.values),(s=!fr(t[0]))&&(i*=i)):t=of(t.increment)),kr(e,n?ke(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=xi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-o,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,s||h===a||fr(a)?h:h+mn(a)}:of(t))},wm=function(t,e,n,i){return kr(wn(t)?!e:n===!0?!!(n=0):!i,function(){return wn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},GS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},HS=function(t,e){return function(n){return t(parseFloat(n))+(e||mn(n))}},WS=function(t,e,n){return Am(t,e,0,1,n)},Em=function(t,e,n){return kr(n,function(i){return t[~~e(i)]})},XS=function r(t,e,n){var i=e-t;return wn(t)?Em(t,r(0,t.length),e):kr(n,function(s){return(i+(s-t)%i)%i+t})},qS=function r(t,e,n){var i=e-t,s=i*2;return wn(t)?Em(t,r(0,t.length-1),e):kr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},aa=function(t){return t.replace(wS,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ES);return wm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Am=function(t,e,n,i,s){var a=e-t,o=i-n;return kr(s,function(l){return n+((l-t)/a*o||0)})},YS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=sn(t),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(wn(t)&&!wn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(m){m*=d;var x=Math.min(u,~~m);return h[x](m-x)},n=e}else i||(t=na(wn(t)?[]:{},t));if(!h){for(l in e)Sf.call(o,t,l,"get",e[l]);s=function(m){return Ef(m,o)||(a?t.p:t)}}}return kr(n,s)},rm=function(t,e,n){var i=t.labels,s=xi,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},si=function(t,e,n){var i=t.vars,s=i[e],a=Pe,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Fr.length&&Vc(),o&&(Pe=o),h=l?s.apply(c,l):s.call(c),Pe=a,h},ao=function(t){return zr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pn),t.progress()<1&&si(t,"onInterrupt"),t},ea,Cm=[],Rm=function(t){if(t)if(t=!t.name&&t.default||t,hf()||t.headless){var e=t.name,n=ke(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:po,render:Ef,add:Sf,kill:hM,modifier:cM,rawVars:0},a={targetTest:0,get:0,getSetter:Qc,aliases:{},register:0};if(sa(),t!==i){if(Wn[e])return;oi(i,oi(Gc(t,s),a)),na(i.prototype,na(s,Gc(t,a))),Wn[i.prop=e]=i,t.targetTest&&(Bc.push(i),pf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}fm(e,i),t.register&&t.register(En,i,On)}else Cm.push(t)},we=255,oo={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},Ju=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},Pm=function(t,e,n){var i=t?fr(t)?[t>>16,t>>8&we,t&we]:0:oo.black,s,a,o,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),oo[t])i=oo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(jp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Ju(l+1/3,s,a),i[1]=Ju(l,s,a),i[2]=Ju(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(uf),n&&i.length<4&&(i[3]=1),i}else i=t.match(jp)||oo.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/we,a=i[1]/we,o=i[2]/we,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Im=function(t){var e=[],n=[],i=-1;return t.split(ur).forEach(function(s){var a=s.match(fs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},sm=function(t,e,n){var i="",s=(t+i).match(ur),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Pm(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Im(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ur,"1").split(fs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ur),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},ur=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in oo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),ZS=/hsl[a]?\(/,vf=function(t){var e=t.join(" "),n;if(ur.lastIndex=0,ur.test(e))return n=ZS.test(e),t[1]=sm(t[1],n),t[0]=sm(t[0],n,Im(t[1])),!0},mo,Xn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,f,m=function x(p){var g=r()-i,v=p===!0,T,y,w,E;if((g>t||g<0)&&(n+=g-e),i+=g,w=i-n,T=w-a,(T>0||v)&&(E=++d.frame,u=w-d.time*1e3,d.time=w=w/1e3,a+=T+(T>=s?0:s-T),y=1),v||(l=c(x)),y)for(f=0;f<o.length;f++)o[f](w,u,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){hm&&(!ef&&hf()&&(Xi=ef=window,df=Xi.document||{},ai.gsap=En,(Xi.gsapVersions||(Xi.gsapVersions=[])).push(En.version),um(kc||Xi.GreenSockGlobals||!Xi.gsap&&Xi||{}),Cm.forEach(Rm)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},mo=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),mo=0,c=po},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,g,v){var T=g?function(y,w,E,_){p(y,w,E,_),d.remove(T)}:p;return d.remove(p),o[v?"unshift":"push"](T),sa(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},d})(),sa=function(){return!mo&&Xn.wake()},se={},JS=/^[\d.\-M][\d.\-,\s]/,$S=/["']/g,KS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace($S,"").trim():+c,i=l.substr(o+1).trim();return e},QS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},jS=function(t){var e=(t+"").split("("),n=se[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[KS(e[1])]:QS(t).split(",").map(mm)):se._CE&&JS.test(t)?se._CE("",t):n},tM=function(t){return function(e){return 1-t(1-e)}},hs=function(t,e){return t&&(ke(t)?t:se[t]||jS(t))||e},ps=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Un(t,function(o){se[o]=ai[o]=s,se[a=o.toLowerCase()]=n;for(var l in s)se[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[o+"."+l]=s[l]}),s},Lm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},$u=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/tf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*TS((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Lm(o);return s=tf/s,l.config=function(c,h){return r(t,c,h)},l},Ku=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Lm(n);return i.config=function(s){return r(t,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ps(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;ps("Elastic",$u("in"),$u("out"),$u());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};ps("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ps("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ps("Circ",function(r){return-(lm(1-r*r)-1)});ps("Sine",function(r){return r===1?1:-bS(r*SS)+1});ps("Back",Ku("in"),Ku("out"),Ku());se.SteppedEase=se.steps=ai.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ye;return function(o){return((i*xo(0,a,o)|0)+s)*n}}};uo.ease=se["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return mf+=r+","+r+"Params,"});var yf=function(t,e){this.id=MS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:_f,this.set=e?e.getSetter:Qc},go=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ra(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),mo||Xn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ra(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(sa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Kc(this,n),!s._dp||s.parent||xm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),pm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ia(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Hc(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(xo(-Math.abs(this._delay),o,s),i!==!1),$c(this),NS(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{sa(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==ye,a;if(s)for(this._tTime-=ye,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+ye){s=!1;break}a=a._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Ne(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&qi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=PS);var i=pn;return pn=n,xf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,im(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,im(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(_i(this,n),qn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qn(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ye)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ke(n)?n:gm,l=function(){var h=i.then;i.then=null,s&&s(),ke(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ao(this)},r})();oi(go.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){om(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qn(n.sortChildren),Ue&&qi(n.parent||Ue,hr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&vm(hr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return co(0,arguments,this),this},e.from=function(i,s,a){return co(1,arguments,this),this},e.fromTo=function(i,s,a,o){return co(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xe(i,s,_i(this,a),1),this},e.call=function(i,s,a){return qi(this,Xe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Xe(i,a,_i(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,lo(a).immediateRender=qn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,lo(o).immediateRender=qn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ne(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,x,p,g,v,T,y,w,E,_;if(this!==Ue&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,T=this._ts,g=!T,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=Ne(h%p),h===l?(x=this._repeat,u=c):(w=Ne(h/p),x=~~w,x&&x===w&&(u=c,x--),u>c&&(u=c)),w=ia(this._tTime,p),!o&&this._tTime&&w!==x&&this._tTime-w*p-this._dur<=0&&(w=x),E&&x&1&&(u=c-u,_=1),x!==w&&!this._lock){var M=E&&w&1,P=M===(E&&x&1);if(x<w&&(M=!M),o=M?0:h%c?c:h,this._lock=1,this.render(o||(_?0:Ne(x*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,w=x),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=BS(this,Ne(o),Ne(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!w&&(si(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-ye);break}}f=m}else{f=this._last;for(var C=i<0?i:u;f;){if(m=f._prev,(f._act||C<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||pn&&xf(f)),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=C?-ye:ye);break}}f=m}}if(v&&!s&&(this.pause(),v.render(u>=o?0:-ye)._zTime=u>=o?1:-1,this._ts))return this._start=y,$c(this),this.render(i,s,a);this._onUpdate&&!s&&si(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&zr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(si(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(fr(s)||(s=_i(this,s,i)),!(i instanceof go)){if(wn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(sn(i))return this.addLabel(i,s);if(ke(i))i=Xe.delayedCall(0,i);else return this}return this!==i?qi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-xi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Xe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return sn(i)?this.removeLabel(i):ke(i)?this.killTweensOf(i):(i.parent===this&&Jc(this,i),i===this._recent&&(this._recent=this._last),cs(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=_i(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Xe.delayedCall(0,s||po,a);return o.data="isPause",this._hasPause=1,qi(this,o,_i(this,i))},e.removePause=function(i){var s=this._first;for(i=_i(this,i);s;)s._start===i&&s.data==="isPause"&&zr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Or!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=vi(i),l=this._first,c=fr(s),h;l;)l instanceof Xe?IS(l._targets,o)&&(c?(!Or||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=_i(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=Xe.to(a,oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ye,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&ra(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},s));return u?m.render(0):m},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,oi({startAt:{time:_i(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),rm(this,_i(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),rm(this,_i(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ne(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return cs(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),cs(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=xi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,qi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ne(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ra(a,a===Ue&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ue._ts&&(pm(Ue,Hc(i,Ue)),dm=Xn.frame),Xn.frame>=tm){tm+=Yn.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&Yn.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},t})(go);oi(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var eM=function(t,e,n,i,s,a,o){var l=new On(this._pt,t,e,0,1,wf,null,s),c=0,h=0,d,u,f,m,x,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=aa(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),u=n.match(Yu)||[];d=Yu.exec(i);)m=d[0],x=i.substring(c,d.index),f?f=(f+1)%5:x.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:p,c:m.charAt(1)==="="?ds(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Yu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ff.test(i)||g)&&(l.e=0),this._pt=l,l},Sf=function(t,e,n,i,s,a,o,l,c,h){ke(i)&&(i=i(s||0,t,a));var d=t[e],u=n!=="get"?n:ke(d)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ke(d)?c?aM:Nm:Tf,m;if(sn(i)&&(~i.indexOf("random(")&&(i=aa(i)),i.charAt(1)==="="&&(m=ds(u,i)+(mn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||lf)return!isNaN(u*i)&&i!==""?(m=new On(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?lM:Um,0,f),c&&(m.fp=c),o&&m.modifier(o,this,t),this._pt=m):(!d&&!(e in t)&&Zc(e,i),eM.call(this,t,e,u,i,f,l||Yn.stringFilter,c))},nM=function(t,e,n,i,s){if(ke(t)&&(t=ho(t,s,e,n,i)),!Yi(t)||t.style&&t.nodeType||wn(t)||cm(t))return sn(t)?ho(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ho(t[o],s,e,n,i);return a},Mf=function(t,e,n,i,s,a){var o,l,c,h;if(Wn[t]&&(o=new Wn[t]).init(s,o.rawVars?e[t]:nM(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new On(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ea))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Or,lf,bf=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,x=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,T=t._overwrite==="auto"&&!cf,y=t.timeline,w=i.easeReverse||d,E,_,M,P,C,N,U,H,I,V,W,D,Y;if(y&&(!u||!s)&&(s="none"),t._ease=hs(s,uo.ease),t._rEase=w&&(hs(w)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(H=p[0]?Br(p[0]).harness:0,D=H&&i[H.prop],E=Gc(i,pf),x&&(x._zTime<0&&x.progress(1),e<0&&h&&o&&!f?x.render(-1,!0):x.revert(h&&m?Fc:RS),x._lazy=0),a){if(zr(t._startAt=Xe.set(p,oi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&qn(l),startAt:null,delay:0,onUpdate:c&&function(){return si(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn||!o&&!f)&&t._startAt.revert(Fc),o&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!x){if(e&&(o=!1),M=oi({overwrite:!1,data:"isFromStart",lazy:o&&!x&&qn(l),immediateRender:o,stagger:0,parent:g},E),D&&(M[H.prop]=D),zr(t._startAt=Xe.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn?t._startAt.revert(Fc):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&qn(l)||l&&!m,_=0;_<p.length;_++){if(C=p[_],U=C._gsap||gf(p)[_]._gsap,t._ptLookup[_]=V={},nf[U.id]&&Fr.length&&Vc(),W=v===p?_:v.indexOf(C),H&&(I=new H).init(C,D||E,t,W,v)!==!1&&(t._pt=P=new On(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(B){V[B]=P}),I.priority&&(N=1)),!H||D)for(M in E)Wn[M]&&(I=Mf(M,E,t,W,C,v))?I.priority&&(N=1):V[M]=P=Sf.call(t,C,M,"get",E[M],W,v,0,i.stringFilter);t._op&&t._op[_]&&t.kill(C,t._op[_]),T&&t._pt&&(Or=t,Ue.killTweensOf(C,V,t.globalTime(e)),Y=!t.parent,Or=0),t._pt&&l&&(nf[U.id]=1)}N&&Af(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,u&&e<=0&&y.render(xi,!0,!0)},iM=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return lf=1,t.vars[e]="+=0",bf(t,o),lf=0,l?fo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Ve(n)+mn(d.e)),d.b&&(d.b=h.s+mn(d.b))},rM=function(t,e){var n=t[0]?Br(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=na({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},sM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(wn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ho=function(t,e,n,i,s){return ke(t)?t.call(e,n,i,s):sn(t)&&~t.indexOf("random(")?aa(t):t},Xc=mf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Dm={};Un(Xc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Dm[r]=1});Xc=Xc.split(",");var Xe=(function(r){om(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:lo(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,x=l.defaults,p=l.scrollTrigger,g=i.parent||Ue,v=(wn(n)||cm(n)?fr(n[0]):"length"in i)?[n]:vi(n),T,y,w,E,_,M,P,C;if(o._targets=v.length?gf(v):fo("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||u||Oc(c)||Oc(h)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(T=o.timeline=new Tn({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:v}),T.kill(),T.parent=T._dp=hr(o),T._start=0,u||Oc(c)||Oc(h)){if(E=v.length,P=u&&bm(u),Yi(u))for(_ in u)~Xc.indexOf(_)&&(C||(C={}),C[_]=u[_]);for(y=0;y<E;y++)w=Gc(i,Dm),w.stagger=0,N&&(w.easeReverse=N),C&&na(w,C),M=v[y],w.duration=+ho(c,hr(o),y,M,v),w.delay=(+ho(h,hr(o),y,M,v)||0)-o._delay,!u&&E===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),T.to(M,w,P?P(y,M,v):0),T._ease=se.none;T.duration()?c=h=0:o.timeline=0}else if(m){lo(oi(T.vars.defaults,{ease:"none"})),T._ease=hs(m.ease||i.ease||"none");var U=0,H,I,V;if(wn(m))m.forEach(function(W){return T.to(v,W,">")}),T.duration();else{w={};for(_ in m)_==="ease"||_==="easeEach"||sM(_,m[_],w,m.easeEach);for(_ in w)for(H=w[_].sort(function(W,D){return W.t-D.t}),U=0,y=0;y<H.length;y++)I=H[y],V={ease:I.e,duration:(I.t-(y?H[y-1].t:0))/100*c},V[_]=I.v,T.to(v,V,U),U+=V.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return f===!0&&!cf&&(Or=hr(o),Ue.killTweensOf(v),Or=0),qi(g,hr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!m&&o._start===Ne(g._time)&&qn(d)&&US(hr(o))&&g.data!=="nested")&&(o._tTime=-ye,o.render(Math.max(0,-h)||0)),p&&vm(hr(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ye&&!h?l:i<ye?0:i,u,f,m,x,p,g,v,T;if(!c)FS(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,T=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,s,a);if(u=Ne(d%x),d===l?(m=this._repeat,u=c):(p=Ne(d/x),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=ia(this._tTime,x),u===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==x&&this._initted&&(this._lock=a=1,this.render(Ne(x*m),!0).invalidate()._lock=0)}if(!this._initted){if(ym(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var w=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(si(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&rf(this,i,s,a),si(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&rf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&zr(this,1),!s&&!(h&&!o)&&(d||o||g)&&(si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){mo||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||bf(this,c),h=this._ease(c/this._dur),iM(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Kc(this,0),this.parent||_m(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ao(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Or&&Or.vars.overwrite!==!0)._first||ao(this),this.parent&&a!==this.timeline.totalDuration()&&ra(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?vi(i):o,c=this._ptLookup,h=this._pt,d,u,f,m,x,p,g;if((!s||s==="all")&&DS(o,l))return s==="all"&&(this._pt=0),ao(this);for(d=this._op=this._op||[],s!=="all"&&(sn(s)&&(x={},Un(s,function(v){return x[v]=1}),s=x),s=rM(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){u=c[g],s==="all"?(d[g]=s,m=u,f={}):(f=d[g]=d[g]||{},m=s);for(x in m)p=u&&u[x],p&&((!("kill"in p.d)||p.d.kill(x)===!0)&&Jc(this,p,"_pt"),delete u[x]),f!=="all"&&(f[x]=1)}return this._initted&&!this._pt&&h&&ao(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return co(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return co(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ue.killTweensOf(i,s,a)},t})(go);oi(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){Xe[r]=function(){var t=new Tn,e=sf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Tf=function(t,e,n){return t[e]=n},Nm=function(t,e,n){return t[e](n)},aM=function(t,e,n,i){return t[e](i.fp,n)},oM=function(t,e,n){return t.setAttribute(e,n)},Qc=function(t,e){return ke(t[e])?Nm:Yc(t[e])&&t.setAttribute?oM:Tf},Um=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},lM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},wf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ef=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},cM=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},hM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Jc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},uM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Af=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},On=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Um,this.d=l||this,this.set=c||Tf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=uM,this.m=n,this.mt=s,this.tween=i},r})();Un(mf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return pf[r]=1});ai.TweenMax=ai.TweenLite=Xe;ai.TimelineLite=ai.TimelineMax=Tn;Ue=new Tn({sortChildren:!1,defaults:uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=vf;var us=[],zc={},fM=[],am=0,dM=0,Qu=function(t){return(zc[t]||fM).map(function(e){return e()})},_o=function(){var t=Date.now(),e=[];t-am>2&&(Qu("matchMediaInit"),us.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Xi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Qu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),am=t,Qu("matchMedia"))},Om=(function(){function r(e,n){this.selector=n&&af(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dM++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ke(n)&&(s=i,i=n,n=ke);var a=this,o=function(){var c=Pe,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=af(s)),Pe=a,d=i.apply(a,arguments),ke(d)&&a._r.push(d),Pe=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===ke?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Pe;Pe=null,n(this),Pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=us.length;a--;)us[a].id===this.id&&us.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(_o):o.removeEventListener("change",_o)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),pM=(function(){function r(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Yi(n)||(n={matches:n});var a=new Om(0,s||this.scope),o=a.conditions={},l,c,h;Pe&&!a.selector&&(a.selector=Pe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Xi.matchMedia(n[c]),l&&(us.indexOf(a)<0&&us.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(_o):l.addEventListener("change",_o),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),qc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Rm(i)})},timeline:function(t){return new Tn(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){sn(t)&&(t=vi(t)[0]);var s=Br(t||{}).get,a=n?gm:mm;return n==="native"&&(n=""),t&&(e?a((Wn[e]&&Wn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Wn[o]&&Wn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=vi(t),t.length>1){var i=t.map(function(h){return En.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=Wn[e],o=Br(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;ea._pt=0,d.init(t,n?h+n:h,ea,0,[t]),d.render(1,d),ea._pt&&Ef(1,ea)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=En.to(t,oi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=hs(t.ease,uo.ease)),em(uo,t||{})},config:function(t){return em(Yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Wn[o]&&!ai[o]&&fo(e+" effect requires "+o+" plugin.")}),Zu[e]=function(o,l,c){return n(vi(o),oi(l||{},s),c)},a&&(Tn.prototype[e]=function(o,l,c){return this.add(Zu[e](o,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){se[t]=hs(e)},parseEase:function(t,e){return arguments.length?hs(t,e):se},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Tn(t),i,s;for(n.smoothChildTiming=qn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&qi(n,i,i._start-i._delay),i=s;return qi(Ue,n,0),n},context:function(t,e){return t?new Om(t,e):Pe},matchMedia:function(t){return new pM(t)},matchMediaRefresh:function(){return us.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||_o()},addEventListener:function(t,e){var n=zc[t]||(zc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=zc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:XS,wrapYoyo:qS,distribute:bm,random:wm,snap:Tm,normalize:WS,getUnit:mn,clamp:kS,splitColor:Pm,toArray:vi,selector:af,mapRange:Am,pipe:GS,unitize:HS,interpolate:YS,shuffle:Mm},install:um,effects:Zu,ticker:Xn,updateRoot:Tn.updateRoot,plugins:Wn,globalTimeline:Ue,core:{PropTween:On,globals:fm,Tween:Xe,Timeline:Tn,Animation:go,getCache:Br,_removeLinkedListItem:Jc,reverting:function(){return pn},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return cf=t}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return qc[r]=Xe[r]});Xn.add(Tn.updateRoot);ea=qc.to({},{duration:0});var mM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},gM=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=mM(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},ju=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(sn(s)&&(l={},Un(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}gM(o,s)}}}},En=qc.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ju("roundProps",of),ju("modifiers"),ju("snap",Tm))||qc;Xe.version=Tn.version=En.version="3.15.1";hm=1;hf()&&sa();var _M=se.Power0,xM=se.Power1,vM=se.Power2,yM=se.Power3,SM=se.Power4,MM=se.Linear,bM=se.Quad,TM=se.Cubic,wM=se.Quart,EM=se.Quint,AM=se.Strong,CM=se.Elastic,RM=se.Back,PM=se.SteppedEase,IM=se.Bounce,LM=se.Sine,DM=se.Expo,NM=se.Circ;var Fm,Vr,la,Df,xs,UM,Bm,Nf,OM=function(){return typeof window!="undefined"},pr={},_s=180/Math.PI,ca=Math.PI/180,oa=Math.atan2,zm=1e8,Uf=/([A-Z])/g,FM=/(left|right|width|margin|padding|x)/i,BM=/[\s,\(]\S/,Zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},zM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},VM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},GM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ym=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Zm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},HM=function(t,e,n){return t.style[e]=n},WM=function(t,e,n){return t.style.setProperty(e,n)},XM=function(t,e,n){return t._gsap[e]=n},qM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},YM=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ZM=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Oe="transform",Zn=Oe+"Origin",JM=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in pr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=dr(i,o)}):this.tfm[t]=a.x?a[t]:dr(i,t),t===Zn&&(this.tfm.zOrigin=a.zOrigin);else return Zi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Oe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Zn,e,"")),t=Oe}(s||e)&&this.props.push(t,e,s[t])},Jm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},$M=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Uf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Nf(),(!s||!s.isStart)&&!n[Oe]&&(Jm(n),i.zOrigin&&n[Zn]&&(n[Zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$m=function(t,e){var n={target:t,props:[],revert:$M,save:JM};return t._gsap||En.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Km,Pf=function(t,e){var n=Vr.createElementNS?Vr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vr.createElement(t);return n&&n.style?n:Vr.createElement(t)},li=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Uf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ha(e)||e,1)||""},km="O,Moz,ms,Ms,Webkit".split(","),ha=function(t,e,n){var i=e||xs,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(km[a]+t in s););return a<0?null:(a===3?"ms":a>=0?km[a]:"")+t},If=function(){OM()&&window.document&&(Fm=window,Vr=Fm.document,la=Vr.documentElement,xs=Pf("div")||{style:{}},UM=Pf("div"),Oe=ha(Oe),Zn=Oe+"Origin",xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Km=!!ha("perspective"),Nf=En.core.reverting,Df=1)},Vm=function(t){var e=t.ownerSVGElement,n=Pf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),la.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),la.removeChild(n),s},Gm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Qm=function(t){var e,n;try{e=t.getBBox()}catch{e=Vm(t),n=1}return e&&(e.width||e.height)||n||(e=Vm(t)),e&&!e.width&&!e.x&&!e.y?{x:+Gm(t,["x","cx","x1"])||0,y:+Gm(t,["y","cy","y1"])||0,width:0,height:0}:e},jm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Qm(t))},Hr=function(t,e){if(e){var n=t.style,i;e in pr&&e!==Zn&&(e=Oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Uf,"-$1").toLowerCase())):n.removeAttribute(e)}},Gr=function(t,e,n,i,s,a){var o=new On(t._pt,e,n,0,1,a?Zm:Ym);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Hm={deg:1,rad:1,turn:1},KM={grid:1,flex:1},Wr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=xs.style,l=FM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,x,p,g;if(i===a||!s||Hm[i]||Hm[a])return s;if(a!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&jm(t),(f||a==="%")&&(pr[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Ve(f?s/m*d:s/100*m);if(o[l?"width":"height"]=d+(u?a:i),x=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Vr||!x.appendChild)&&(x=Vr.body),p=x._gsap,p&&f&&p.width&&l&&p.time===Xn.time&&!p.uncache)return Ve(s/p.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,m=t[h],v?t.style[e]=v:Hr(t,e)}else(f||a==="%")&&!KM[li(x,"display")]&&(o.position=li(t,"position")),x===t&&(o.position="static"),x.appendChild(xs),m=xs[h],x.removeChild(xs),o.position="absolute";return l&&f&&(p=Br(x),p.time=Xn.time,p.width=x[h]),Ve(u?m*s/d:m&&s?d/m*s:0)},dr=function(t,e,n,i){var s;return Df||If(),e in Zi&&e!=="transform"&&(e=Zi[e],~e.indexOf(",")&&(e=e.split(",")[0])),pr[e]&&e!=="transform"?(s=So(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:th(li(t,Zn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=jc[e]&&jc[e](t,e,n)||li(t,e)||_f(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Wr(t,e,s,n)+n:s},QM=function(t,e,n,i){if(!n||n==="none"){var s=ha(e,t,1),a=s&&li(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=li(t,"borderTopColor"))}var o=new On(this._pt,t.style,e,0,1,wf),l=0,c=0,h,d,u,f,m,x,p,g,v,T,y,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=t.style[e],t.style[e]=i,i=li(t,e)||i,x?t.style[e]=x:Hr(t,e)),h=[n,i],vf(h),n=h[0],i=h[1],u=n.match(fs)||[],w=i.match(fs)||[],w.length){for(;d=fs.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(x=u[c++]||"")&&(f=parseFloat(x)||0,y=x.substr((f+"").length),p.charAt(1)==="="&&(p=ds(f,p)+y),g=parseFloat(p),T=p.substr((g+"").length),l=fs.lastIndex-T.length,T||(T=T||Yn.units[e]||y,l===i.length&&(i+=T,o.e+=T)),y!==T&&(f=Wr(t,e,x,T)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Zm:Ym;return ff.test(i)&&(o.e=0),this._pt=o,o},Wm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Wm[n]||n,e[1]=Wm[i]||i,e.join(" ")},tb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],pr[o]&&(l=1,o=o==="transformOrigin"?Zn:Oe),Hr(n,o);l&&(Hr(n,Oe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",So(n,1),a.uncache=1,Jm(i)))}},jc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new On(t._pt,e,n,0,0,tb);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},yo=[1,0,0,1,0,0],tg={},eg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Xm=function(t){var e=li(t,Oe);return eg(e)?yo:e.substr(7).match(uf).map(Ve)},Of=function(t,e){var n=t._gsap||Br(t),i=t.style,s=Xm(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?yo:s):(s===yo&&!t.offsetParent&&t!==la&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,la.appendChild(t)),s=Xm(t),l?i.display=l:Hr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):la.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Lf=function(t,e,n,i,s,a){var o=t._gsap,l=s||Of(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],m=l[1],x=l[2],p=l[3],g=l[4],v=l[5],T=e.split(" "),y=parseFloat(T[0])||0,w=parseFloat(T[1])||0,E,_,M,P;n?l!==yo&&(_=f*p-m*x)&&(M=y*(p/_)+w*(-x/_)+(x*v-p*g)/_,P=y*(-m/_)+w*(f/_)-(f*v-m*g)/_,y=M,w=P):(E=Qm(t),y=E.x+(~T[0].indexOf("%")?y/100*E.width:y),w=E.y+(~(T[1]||T[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&o.smooth?(g=y-c,v=w-h,o.xOffset=d+(g*f+v*x)-g,o.yOffset=u+(g*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=w,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Zn]="0px 0px",a&&(Gr(a,o,"xOrigin",c,y),Gr(a,o,"yOrigin",h,w),Gr(a,o,"xOffset",d,o.xOffset),Gr(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+w)},So=function(t,e){var n=t._gsap||new yf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=li(t,Zn)||"0",h,d,u,f,m,x,p,g,v,T,y,w,E,_,M,P,C,N,U,H,I,V,W,D,Y,B,R,Q,_t,Et,q,ot;return h=d=u=x=p=g=v=T=y=0,f=m=1,n.svg=!!(t.getCTM&&jm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Oe]!=="none"?l[Oe]:"")),i.scale=i.rotate=i.translate="none"),_=Of(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",D=""):D=!e&&t.getAttribute("data-svg-origin"),Lf(t,D||c,!!D||n.originIsAbsolute,n.smooth!==!1,_)),w=n.xOrigin||0,E=n.yOrigin||0,_!==yo&&(N=_[0],U=_[1],H=_[2],I=_[3],h=V=_[4],d=W=_[5],_.length===6?(f=Math.sqrt(N*N+U*U),m=Math.sqrt(I*I+H*H),x=N||U?oa(U,N)*_s:0,v=H||I?oa(H,I)*_s+x:0,v&&(m*=Math.abs(Math.cos(v*ca))),n.svg&&(h-=w-(w*N+E*H),d-=E-(w*U+E*I))):(ot=_[6],Et=_[7],R=_[8],Q=_[9],_t=_[10],q=_[11],h=_[12],d=_[13],u=_[14],M=oa(ot,_t),p=M*_s,M&&(P=Math.cos(-M),C=Math.sin(-M),D=V*P+R*C,Y=W*P+Q*C,B=ot*P+_t*C,R=V*-C+R*P,Q=W*-C+Q*P,_t=ot*-C+_t*P,q=Et*-C+q*P,V=D,W=Y,ot=B),M=oa(-H,_t),g=M*_s,M&&(P=Math.cos(-M),C=Math.sin(-M),D=N*P-R*C,Y=U*P-Q*C,B=H*P-_t*C,q=I*C+q*P,N=D,U=Y,H=B),M=oa(U,N),x=M*_s,M&&(P=Math.cos(M),C=Math.sin(M),D=N*P+U*C,Y=V*P+W*C,U=U*P-N*C,W=W*P-V*C,N=D,V=Y),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,g=180-g),f=Ve(Math.sqrt(N*N+U*U+H*H)),m=Ve(Math.sqrt(W*W+ot*ot)),M=oa(V,W),v=Math.abs(M)>2e-4?M*_s:0,y=q?1/(q<0?-q:q):0),n.svg&&(D=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!eg(li(t,Oe)),D&&t.setAttribute("transform",D))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Ve(f),n.scaleY=Ve(m),n.rotation=Ve(x)+o,n.rotationX=Ve(p)+o,n.rotationY=Ve(g)+o,n.skewX=v+o,n.skewY=T+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Zn]=th(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?nb:Km?ng:eb,n.uncache=0,n},th=function(t){return(t=t.split(" "))[0]+" "+t[1]},Cf=function(t,e,n){var i=mn(e);return Ve(parseFloat(e)+parseFloat(Wr(t,"x",n+"px",i)))+i},eb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ng(t,e)},ms="0deg",vo="0px",gs=") ",ng=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,x=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,T=n.zOrigin,y="",w=g==="auto"&&t&&t!==1||g===!0;if(T&&(d!==ms||h!==ms)){var E=parseFloat(h)*ca,_=Math.sin(E),M=Math.cos(E),P;E=parseFloat(d)*ca,P=Math.cos(E),a=Cf(v,a,_*P*-T),o=Cf(v,o,-Math.sin(E)*-T),l=Cf(v,l,M*P*-T+T)}p!==vo&&(y+="perspective("+p+gs),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(w||a!==vo||o!==vo||l!==vo)&&(y+=l!==vo||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+gs),c!==ms&&(y+="rotate("+c+gs),h!==ms&&(y+="rotateY("+h+gs),d!==ms&&(y+="rotateX("+d+gs),(u!==ms||f!==ms)&&(y+="skew("+u+", "+f+gs),(m!==1||x!==1)&&(y+="scale("+m+", "+x+gs),v.style[Oe]=y||"translate(0, 0)"},nb=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,x=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,T=parseFloat(a),y=parseFloat(o),w,E,_,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ca,c*=ca,w=Math.cos(l)*d,E=Math.sin(l)*d,_=Math.sin(l-c)*-u,M=Math.cos(l-c)*u,c&&(h*=ca,P=Math.tan(c-h),P=Math.sqrt(1+P*P),_*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),w*=P,E*=P)),w=Ve(w),E=Ve(E),_=Ve(_),M=Ve(M)):(w=d,M=u,E=_=0),(T&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=Wr(f,"x",a,"px"),y=Wr(f,"y",o,"px")),(m||x||p||g)&&(T=Ve(T+m-(m*w+x*_)+p),y=Ve(y+x-(m*E+x*M)+g)),(i||s)&&(P=f.getBBox(),T=Ve(T+i/100*P.width),y=Ve(y+s/100*P.height)),P="matrix("+w+","+E+","+_+","+M+","+T+","+y+")",f.setAttribute("transform",P),v&&(f.style[Oe]=P)},ib=function(t,e,n,i,s){var a=360,o=sn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?_s:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*zm)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*zm)%a-~~(c/a)*a)),t._pt=u=new On(t._pt,e,n,i,c,zM),u.e=h,u.u="deg",t._props.push(n),u},qm=function(t,e){for(var n in e)t[n]=e[n];return t},rb=function(t,e,n){var i=qm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Oe]=e,o=So(n,1),Hr(n,Oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Oe],a[Oe]=e,o=So(n,1),a[Oe]=c);for(l in pr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=mn(c),m=mn(h),d=f!==m?Wr(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new On(t._pt,o,l,d,u-d,Rf),t._pt.u=m||0,t._props.push(l));qm(o,i)};Un("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});jc[t>1?"border"+r:r]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(m){return dr(o,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(m,x){return f[m]=u[x]=u[x]||u[(x-1)/2|0]}),o.init(l,f,d)}});var Ff={name:"css",register:If,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,u,f,m,x,p,g,v,T,y,w,E,_,M,P;Df||If(),this.styles=this.styles||$m(t),M=this.styles.props,this.tween=n;for(x in e)if(x!=="autoRound"&&(h=e[x],!(Wn[x]&&Mf(x,e,n,i,t,s)))){if(f=typeof h,m=jc[x],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=aa(h)),m)m(this,t,x,h,n)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",ur.lastIndex=0,ur.test(c)||(p=mn(c),g=mn(h),g?p!==g&&(c=Wr(t,x,c,g)+g):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,x),a.push(x),M.push(x,0,o[x]);else if(f!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,t,s):l[x],sn(c)&&~c.indexOf("random(")&&(c=aa(c)),mn(c+"")||c==="auto"||(c+=Yn.units[x]||mn(dr(t,x))||""),(c+"").charAt(1)==="="&&(c=dr(t,x))):c=dr(t,x),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),x in Zi&&(x==="autoAlpha"&&(u===1&&dr(t,"visibility")==="hidden"&&d&&(u=0),M.push("visibility",0,o.visibility),Gr(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=Zi[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in pr,T){if(this.styles.save(x),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=li(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=li(t,"perspective"),C?t.style.perspective=C:Hr(t,"perspective")}d=parseFloat(h)}if(y||(w=t._gsap,w.renderTransform&&!e.parseTransform||So(t,e.parseTransform),E=e.smoothOrigin!==!1&&w.smooth,y=this._pt=new On(this._pt,o,Oe,0,1,w.renderTransform,w,0,-1),y.dep=1),x==="scale")this._pt=new On(this._pt,w,"scaleY",w.scaleY,(v?ds(w.scaleY,v+d):d)-w.scaleY||0,Rf),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){M.push(Zn,0,o[Zn]),h=jM(h),w.svg?Lf(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==w.zOrigin&&Gr(this,w,"zOrigin",w.zOrigin,g),Gr(this,o,x,th(c),th(h)));continue}else if(x==="svgOrigin"){Lf(t,h,1,E,0,this);continue}else if(x in tg){ib(this,w,x,u,v?ds(u,v+h):h);continue}else if(x==="smoothOrigin"){Gr(this,w,"smooth",w.smooth,h);continue}else if(x==="force3D"){w[x]=h;continue}else if(x==="transform"){rb(this,h,t);continue}}else x in o||(x=ha(x)||x);if(T||(d||d===0)&&(u||u===0)&&!BM.test(h)&&x in o)p=(c+"").substr((u+"").length),d||(d=0),g=mn(h)||(x in Yn.units?Yn.units[x]:p),p!==g&&(u=Wr(t,x,c,g)),this._pt=new On(this._pt,T?w:o,x,u,(v?ds(u,v+d):d)-u,!T&&(g==="px"||x==="zIndex")&&e.autoRound!==!1?GM:Rf),this._pt.u=g||0,T&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=VM):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=kM);else if(x in o)QM.call(this,t,x,c,v?v+h:h);else if(x in t)this.add(t,x,c||t[x],v?v+h:h,i,s);else if(x!=="parseTransform"){Zc(x,h);continue}T||(x in o?M.push(x,0,o[x]):typeof t[x]=="function"?M.push(x,2,t[x]()):M.push(x,1,c||t[x])),a.push(x)}}_&&Af(this)},render:function(t,e){if(e.tween._time||!Nf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:dr,aliases:Zi,getSetter:function(t,e,n){var i=Zi[e];return i&&i.indexOf(",")<0&&(e=i),e in pr&&e!==Zn&&(t._gsap.x||dr(t,"x"))?n&&Bm===n?e==="scale"?qM:XM:(Bm=n||{})&&(e==="scale"?YM:ZM):t.style&&!Yc(t.style[e])?HM:~e.indexOf("-")?WM:Qc(t,e)},core:{_removeProperty:Hr,_getMatrix:Of}};En.utils.checkPrefix=ha;En.core.getStyleSaver=$m;(function(r,t,e,n){var i=Un(r+","+t+","+e,function(s){pr[s]=1});Un(t,function(s){Yn.units[s]="deg",tg[s]=1}),Zi[i[13]]=r+","+t,Un(n,function(s){var a=s.split(":");Zi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});En.registerPlugin(Ff);var fe=En.registerPlugin(Ff)||En,LE=fe.core.Tween;function ig(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function sb(r,t,e){return t&&ig(r.prototype,t),e&&ig(r,e),r}var gn,ih,ab,Jn,Xr,qr,fa,sg,vs,da,ag,mr,Di,og,lg=function(){return gn||typeof window!="undefined"&&(gn=window.gsap)&&gn.registerPlugin&&gn},cg=1,ua=[],Zt=[],Ni=[],bo=Date.now,Bf=function(t,e){return e},ob=function(){var t=da.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Zt),i.push.apply(i,Ni),Zt=n,Ni=i,Bf=function(a,o){return e[a](o)}},_r=function(t,e){return~Ni.indexOf(t)&&Ni[Ni.indexOf(t)+1][e]},To=function(t){return!!~ag.indexOf(t)},Bn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},eh="scrollLeft",nh="scrollTop",zf=function(){return mr&&mr.isPressed||Zt.cache++},rh=function(t,e){var n=function i(s){if(s||s===0){cg&&Jn.history.scrollRestoration!=="manual"&&(Jn.history.scrollRestoration="manual");var a=mr&&mr.isPressed;s=i.v=Math.round(s)||(mr&&mr.iOS?1:0),t(s),i.cacheID=Zt.cache,a&&Bf("ss",s)}else(e||Zt.cache!==i.cacheID||Bf("ref"))&&(i.cacheID=Zt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},An={s:eh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rh(function(r){return arguments.length?Jn.scrollTo(r,Ke.sc()):Jn.pageXOffset||Xr[eh]||qr[eh]||fa[eh]||0})},Ke={s:nh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:rh(function(r){return arguments.length?Jn.scrollTo(An.sc(),r):Jn.pageYOffset||Xr[nh]||qr[nh]||fa[nh]||0})},zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||gn.utils.toArray)(t)[0]||(typeof t=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},lb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},gr=function(t,e){var n=e.s,i=e.sc;To(t)&&(t=Xr.scrollingElement||qr);var s=Zt.indexOf(t),a=i===Ke.sc?1:2;!~s&&(s=Zt.push(t)-1),Zt[s+a]||Bn(t,"scroll",zf);var o=Zt[s+a],l=o||(Zt[s+a]=rh(_r(t,n),!0)||(To(t)?i:rh(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=gn.getProperty(t,"scrollBehavior")==="smooth"),l},sh=function(t,e,n){var i=t,s=t,a=bo(),o=a,l=e||50,c=Math.max(500,l*3),h=function(m,x){var p=bo();x||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(m){var x=o,p=s,g=bo();return(m||m===0)&&m!==i&&h(m),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-x)*1e3};return{update:h,reset:d,getVelocity:u}},Mo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},rg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},hg=function(){da=gn.core.globals().ScrollTrigger,da&&da.core&&ob()},ug=function(t){return gn=t||lg(),!ih&&gn&&typeof document!="undefined"&&document.body&&(Jn=window,Xr=document,qr=Xr.documentElement,fa=Xr.body,ag=[Jn,Xr,qr,fa],ab=gn.utils.clamp,og=gn.core.context||function(){},vs="onpointerenter"in fa?"pointer":"mouse",sg=Ge.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=Ge.eventTypes=("ontouchstart"in qr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in qr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cg=0},500),ih=1),da||hg(),ih};An.op=Ke;Zt.cache=0;var Ge=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){ih||ug(gn)||console.warn("Please gsap.registerPlugin(Observer)"),da||hg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,x=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,w=n.onRight,E=n.onLeft,_=n.onUp,M=n.onDown,P=n.onChangeX,C=n.onChangeY,N=n.onChange,U=n.onToggleX,H=n.onToggleY,I=n.onHover,V=n.onHoverEnd,W=n.onMove,D=n.ignoreCheck,Y=n.isNormalizer,B=n.onGestureStart,R=n.onGestureEnd,Q=n.onWheel,_t=n.onEnable,Et=n.onDisable,q=n.onClick,ot=n.scrollSpeed,vt=n.capture,Mt=n.allowClicks,ht=n.lockAxis,Nt=n.onLockAxis;this.target=o=zn(o)||qr,this.vars=n,f&&(f=gn.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,ot=ot||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(fa).lineHeight)||22);var xe,At,Wt,Lt,Ot,ce,ae,J=this,Qt=0,qe=0,Se=n.passive||!h&&n.passive!==!1,ie=gr(o,An),Fe=gr(o,Ke),We=ie(),F=Fe(),de=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Di[0]==="pointerdown",oe=To(o),Vt=o.ownerDocument||Xr,ft=[0,0,0],he=[0,0,0],Dt=0,Ft=function(){return Dt=bo()},A=function(mt,rt){return(J.event=mt)&&f&&lb(mt.target,f)||rt&&de&&mt.pointerType!=="touch"||D&&D(mt,rt)},S=function(){J._vx.reset(),J._vy.reset(),At.pause(),d&&d(J)},k=function(){var mt=J.deltaX=rg(ft),rt=J.deltaY=rg(he),et=Math.abs(mt)>=i,xt=Math.abs(rt)>=i;N&&(et||xt)&&N(J,mt,rt,ft,he),et&&(w&&J.deltaX>0&&w(J),E&&J.deltaX<0&&E(J),P&&P(J),U&&J.deltaX<0!=Qt<0&&U(J),Qt=J.deltaX,ft[0]=ft[1]=ft[2]=0),xt&&(M&&J.deltaY>0&&M(J),_&&J.deltaY<0&&_(J),C&&C(J),H&&J.deltaY<0!=qe<0&&H(J),qe=J.deltaY,he[0]=he[1]=he[2]=0),(Lt||Wt)&&(W&&W(J),Wt&&(p&&Wt===1&&p(J),v&&v(J),Wt=0),Lt=!1),ce&&!(ce=!1)&&Nt&&Nt(J),Ot&&(Q(J),Ot=!1),xe=0},st=function(mt,rt,et){ft[et]+=mt,he[et]+=rt,J._vx.update(mt),J._vy.update(rt),c?xe||(xe=requestAnimationFrame(k)):k()},it=function(mt,rt){ht&&!ae&&(J.axis=ae=Math.abs(mt)>Math.abs(rt)?"x":"y",ce=!0),ae!=="y"&&(ft[2]+=mt,J._vx.update(mt,!0)),ae!=="x"&&(he[2]+=rt,J._vy.update(rt,!0)),c?xe||(xe=requestAnimationFrame(k)):k()},ut=function(mt){if(!A(mt,1)){mt=Mo(mt,h);var rt=mt.clientX,et=mt.clientY,xt=rt-J.x,nt=et-J.y,Tt=J.isDragging;J.x=rt,J.y=et,(Tt||(xt||nt)&&(Math.abs(J.startX-rt)>=s||Math.abs(J.startY-et)>=s))&&(Wt||(Wt=Tt?2:1),Tt||(J.isDragging=!0),it(xt,nt))}},gt=J.onPress=function(at){A(at,1)||at&&at.button||(J.axis=ae=null,At.pause(),J.isPressed=!0,at=Mo(at),Qt=qe=0,J.startX=J.x=at.clientX,J.startY=J.y=at.clientY,J._vx.reset(),J._vy.reset(),Bn(Y?o:Vt,Di[1],ut,Se,!0),J.deltaX=J.deltaY=0,T&&T(J))},G=J.onRelease=function(at){if(!A(at,1)){Fn(Y?o:Vt,Di[1],ut,!0);var mt=!isNaN(J.y-J.startY),rt=J.isDragging,et=rt&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),xt=Mo(at);!et&&mt&&(J._vx.reset(),J._vy.reset(),h&&Mt&&gn.delayedCall(.08,function(){if(bo()-Dt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Vt.createEvent){var nt=Vt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,Jn,1,xt.screenX,xt.screenY,xt.clientX,xt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,d&&rt&&!Y&&At.restart(!0),Wt&&k(),g&&rt&&g(J),y&&y(J,et)}},tt=function(mt){return mt.touches&&mt.touches.length>1&&(J.isGesturing=!0)&&B(mt,J.isDragging)},ct=function(){return(J.isGesturing=!1)||R(J)},L=function(mt){if(!A(mt)){var rt=ie(),et=Fe();st((rt-We)*ot,(et-F)*ot,1),We=rt,F=et,d&&At.restart(!0)}},j=function(mt){if(!A(mt)){mt=Mo(mt,h),Q&&(Ot=!0);var rt=(mt.deltaMode===1?l:mt.deltaMode===2?Jn.innerHeight:1)*m;st(mt.deltaX*rt,mt.deltaY*rt,0),d&&!Y&&At.restart(!0)}},K=function(mt){if(!A(mt)){var rt=mt.clientX,et=mt.clientY,xt=rt-J.x,nt=et-J.y;J.x=rt,J.y=et,Lt=!0,d&&At.restart(!0),(xt||nt)&&it(xt,nt)}},dt=function(mt){J.event=mt,I(J)},lt=function(mt){J.event=mt,V(J)},pt=function(mt){return A(mt)||Mo(mt,h)&&q(J)};At=J._dc=gn.delayedCall(u||.25,S).pause(),J.deltaX=J.deltaY=0,J._vx=sh(0,50,!0),J._vy=sh(0,50,!0),J.scrollX=ie,J.scrollY=Fe,J.isDragging=J.isGesturing=J.isPressed=!1,og(this),J.enable=function(at){return J.isEnabled||(Bn(oe?Vt:o,"scroll",zf),a.indexOf("scroll")>=0&&Bn(oe?Vt:o,"scroll",L,Se,vt),a.indexOf("wheel")>=0&&Bn(o,"wheel",j,Se,vt),(a.indexOf("touch")>=0&&sg||a.indexOf("pointer")>=0)&&(Bn(o,Di[0],gt,Se,vt),Bn(Vt,Di[2],G),Bn(Vt,Di[3],G),Mt&&Bn(o,"click",Ft,!0,!0),q&&Bn(o,"click",pt),B&&Bn(Vt,"gesturestart",tt),R&&Bn(Vt,"gestureend",ct),I&&Bn(o,vs+"enter",dt),V&&Bn(o,vs+"leave",lt),W&&Bn(o,vs+"move",K)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Lt=Wt=!1,J._vx.reset(),J._vy.reset(),We=ie(),F=Fe(),at&&at.type&&gt(at),_t&&_t(J)),J},J.disable=function(){J.isEnabled&&(ua.filter(function(at){return at!==J&&To(at.target)}).length||Fn(oe?Vt:o,"scroll",zf),J.isPressed&&(J._vx.reset(),J._vy.reset(),Fn(Y?o:Vt,Di[1],ut,!0)),Fn(oe?Vt:o,"scroll",L,vt),Fn(o,"wheel",j,vt),Fn(o,Di[0],gt,vt),Fn(Vt,Di[2],G),Fn(Vt,Di[3],G),Fn(o,"click",Ft,!0),Fn(o,"click",pt),Fn(Vt,"gesturestart",tt),Fn(Vt,"gestureend",ct),Fn(o,vs+"enter",dt),Fn(o,vs+"leave",lt),Fn(o,vs+"move",K),J.isEnabled=J.isPressed=J.isDragging=!1,Et&&Et(J))},J.kill=J.revert=function(){J.disable();var at=ua.indexOf(J);at>=0&&ua.splice(at,1),mr===J&&(mr=0)},ua.push(J),Y&&To(o)&&(mr=J),J.enable(x)},sb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ge.version="3.15.1";Ge.create=function(r){return new Ge(r)};Ge.register=ug;Ge.getAll=function(){return ua.slice()};Ge.getById=function(r){return ua.filter(function(t){return t.vars.id===r})[0]};lg()&&gn.registerPlugin(Ge);var Ct,_a,$t,ve,ui,_e,jf,Sh,Fo,Io,Eo,ah,Cn,Th,qf,Vn,fg,dg,xa,Rg,kf,Pg,kn,Yf,Ig,Lg,Yr,Zf,td,va,ed,Zr,Jf,Vf,oh=1,Rn=Date.now,Gf=Rn(),Mi=0,Ao=0,pg=function(t,e,n){var i=hi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},mg=function(t,e){return e&&(!hi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},cb=function r(){return Ao&&requestAnimationFrame(r)},gg=function(){return Th=1},_g=function(){return Th=0},Ji=function(t){return t},Co=function(t){return Math.round(t*1e5)/1e5||0},Dg=function(){return typeof window!="undefined"},Ng=function(){return Ct||Dg()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},ws=function(t){return!!~jf.indexOf(t)},Ug=function(t){return(t==="Height"?ed:$t["inner"+t])||ui["client"+t]||_e["client"+t]},Og=function(t){return _r(t,"getBoundingClientRect")||(ws(t)?function(){return yh.width=$t.innerWidth,yh.height=ed,yh}:function(){return xr(t)})},hb=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=_r(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Ug(s):t["client"+s])||0}},ub=function(t,e){return!e||~Ni.indexOf(t)?Og(t):function(){return yh}},$i=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=_r(t,n))?a()-Og(t)()[s]:ws(t)?(ui[n]||_e[n])-Ug(i):t[n]-t["offset"+i])},lh=function(t,e){for(var n=0;n<xa.length;n+=3)(!e||~e.indexOf(xa[n+1]))&&t(xa[n],xa[n+1],xa[n+2])},hi=function(t){return typeof t=="string"},Pn=function(t){return typeof t=="function"},Ro=function(t){return typeof t=="number"},ys=function(t){return typeof t=="object"},wo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},pa=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ma=Math.abs,Fg="left",Bg="top",nd="right",id="bottom",Ms="width",bs="height",Lo="Right",Do="Left",No="Top",Uo="Bottom",Qe="padding",yi="margin",Sa="Width",rd="Height",an="px",Si=function(t){return $t.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},fb=function(t){var e=Si(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},xg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},xr=function(t,e){var n=e&&Si(t)[qf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Mh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},zg=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},db=function(t){return function(e){return Ct.utils.snap(zg(t),e)}},sd=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},pb=function(t){return function(e,n){return sd(zg(t))(e,n.direction)}},ch=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},fn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},hh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},vg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},uh={toggleActions:"play",anticipatePin:0},bh={top:0,left:0,center:.5,bottom:1,right:1},gh=function(t,e){if(hi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in bh?bh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},fh=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,m=ve.createElement("div"),x=ws(n)||_r(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=x?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&x?"fixed;":"absolute;"),(p||l||!x)&&(y+=(i===Ke?nd:id)+":"+(a+parseFloat(u))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],_h(m,0,i,v),m},_h=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Sa]=1,s["border"+o+Sa]=0,s[n.p]=e+"px",Ct.set(t,s)},Jt=[],$f={},Bo,yg=function(){return Rn()-Mi>34&&(Bo||(Bo=requestAnimationFrame(vr)))},ga=function(){(!kn||!kn.isPressed||kn.startX>_e.clientWidth)&&(Zt.cache++,kn?Bo||(Bo=requestAnimationFrame(vr)):vr(),Mi||As("scrollStart"),Mi=Rn())},Hf=function(){Lg=$t.innerWidth,Ig=$t.innerHeight},Po=function(t){Zt.cache++,(t===!0||!Cn&&!Pg&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!Yf||Lg!==$t.innerWidth||Math.abs($t.innerHeight-Ig)>$t.innerHeight*.25))&&Sh.restart(!0)},Es={},mb=[],kg=function r(){return un(Ht,"scrollEnd",r)||Ss(!0)},As=function(t){return Es[t]&&Es[t].map(function(e){return e()})||mb},ci=[],Vg=function(t){for(var e=0;e<ci.length;e+=5)(!t||ci[e+4]&&ci[e+4].query===t)&&(ci[e].style.cssText=ci[e+1],ci[e].getBBox&&ci[e].setAttribute("transform",ci[e+2]||""),ci[e+3].uncache=1)},Gg=function(){Zt.cache++,Zt.forEach(function(t){return Pn(t)&&(t.rec=t())})},ad=function(t,e){var n;for(Vn=0;Vn<Jt.length;Vn++)n=Jt[Vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Zr=!0,e&&Vg(e),e||As("revert")},Hg=function(t,e){Zt.cache++,(e||!Gn)&&Zt.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),hi(t)&&(td=t,$t.history.scrollRestoration!==t&&($t.history.scrollRestoration=t))},Gn,Ts=0,Sg,gb=function(){if(Sg!==Ts){var t=Sg=Ts;requestAnimationFrame(function(){return t===Ts&&Ss(!0)})}},Wg=function(){_e.appendChild(va),ed=!kn&&va.offsetHeight||$t.innerHeight,_e.removeChild(va)},Mg=function(t){return Fo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ss=function(t,e){if(ui=ve.documentElement,_e=ve.body,jf=[$t,ve,ui,_e],Mi&&!t&&!Zr){fn(Ht,"scrollEnd",kg);return}Wg(),Gn=Ht.isRefreshing=!0,Zr||Gg();var n=As("refreshInit");Rg&&Ht.sort(),e||ad(),Zt.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Jt.slice(0).forEach(function(i){return i.refresh()}),Zr=!1,Jt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Jf=1,Mg(!0),Jt.forEach(function(i){var s=$i(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Mg(!1),Jf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Zt.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Hg(td,1),Sh.pause(),Ts++,Gn=2,vr(2),Jt.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=Ht.isRefreshing=!1,As("refresh")},Kf=0,xh=1,Oo,vr=function(t){if(t===2||!Gn&&!Zr){Ht.isUpdating=!0,Oo&&Oo.update(0);var e=Jt.length,n=Rn(),i=n-Gf>=50,s=e&&Jt[0].scroll();if(xh=Kf>s?-1:1,Gn||(Kf=s),i&&(Mi&&!Th&&n-Mi>200&&(Mi=0,As("scrollEnd")),Eo=Gf,Gf=n),xh<0){for(Vn=e;Vn-- >0;)Jt[Vn]&&Jt[Vn].update(0,i);xh=1}else for(Vn=0;Vn<e;Vn++)Jt[Vn]&&Jt[Vn].update(0,i);Ht.isUpdating=!1}Bo=0},Qf=[Fg,Bg,id,nd,yi+Uo,yi+Lo,yi+No,yi+Do,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vh=Qf.concat([Ms,bs,"boxSizing","max"+Sa,"max"+rd,"position",yi,Qe,Qe+No,Qe+Lo,Qe+Uo,Qe+Do]),_b=function(t,e,n){ya(n);var i=t._gsap;if(i.spacerIsNative)ya(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Wf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Qf.length,a=e.style,o=t.style,l;s--;)l=Qf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[id]=o[nd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ms]=Mh(t,An)+an,a[bs]=Mh(t,Ke)+an,a[Qe]=o[yi]=o[Bg]=o[Fg]="0",ya(i),o[Ms]=o["max"+Sa]=n[Ms],o[bs]=o["max"+rd]=n[bs],o[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},xb=/([A-Z])/g,ya=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(xb,"-$1").toLowerCase())}},dh=function(t){for(var e=vh.length,n=t.style,i=[],s=0;s<e;s++)i.push(vh[s],n[vh[s]]);return i.t=t,i},vb=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},yh={left:0,top:0},bg=function(t,e,n,i,s,a,o,l,c,h,d,u,f,m){Pn(t)&&(t=t(l)),hi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?gh("0"+t.substr(3),n):0));var x=f?f.time():0,p,g,v;if(f&&f.seek(0),isNaN(t)||(t=+t),Ro(t))f&&(t=Ct.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),o&&_h(o,n,i,!0);else{Pn(e)&&(e=e(l));var T=(t||"0").split(" "),y,w,E,_;v=zn(e,l)||_e,y=xr(v)||{},(!y||!y.left&&!y.top)&&Si(v).display==="none"&&(_=v.style.display,v.style.display="block",y=xr(v),_?v.style.display=_:v.style.removeProperty("display")),w=gh(T[0],y[i.d]),E=gh(T[1]||"0",n),t=y[i.p]-c[i.p]-h+w+s-E,o&&_h(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),a){var M=t+n,P=a._isStart;p="scroll"+i.d2,_h(a,M,i,P&&M>20||!P&&(d?Math.max(_e[p],ui[p]):a.parentNode[p])<=M+1),d&&(c=xr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+an))}return f&&v&&(p=xr(v),f.seek(u),g=xr(v),f._caScrollDist=p[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(x),f?t:Math.round(t)},yb=/(webkit|moz|length|cssText|inset)/i,Tg=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===_e){t._stOrig=s.cssText,o=Si(t);for(a in o)!+a&&!yb.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},Xg=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},ph=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},wg=function(t,e){var n=gr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,d){var u=a.tween,f=l.onComplete,m={};c=c||n();var x=Xg(n,c,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return x(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){Zt.cache++,a.tween&&vr()},l.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Ct.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(t,"wheel",n.wheelHandler),Ht.isTouch&&fn(t,"touchmove",n.wheelHandler),s},Ht=(function(){function r(e,n){_a||r.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Zf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ao){this.update=this.refresh=this.kill=Ji;return}n=xg(hi(n)||Ro(n)||n.nodeType?{trigger:n}:n,uh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,m=s.pinSpacing,x=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,T=s.once,y=s.snap,w=s.pinReparent,E=s.pinSpacer,_=s.containerAnimation,M=s.fastScrollEnd,P=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Ke,N=!d&&d!==0,U=zn(n.scroller||$t),H=Ct.core.getCache(U),I=ws(U),V=("pinType"in n?n.pinType:_r(U,"pinType")||I&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],D=N&&n.toggleActions.split(" "),Y="markers"in n?n.markers:uh.markers,B=I?0:parseFloat(Si(U)["border"+C.p2+Sa])||0,R=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(R)},_t=hb(U,I,C),Et=ub(U,I),q=0,ot=0,vt=0,Mt=gr(U,C),ht,Nt,xe,At,Wt,Lt,Ot,ce,ae,J,Qt,qe,Se,ie,Fe,We,F,de,oe,Vt,ft,he,Dt,Ft,A,S,k,st,it,ut,gt,G,tt,ct,L,j,K,dt,lt;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=U,R.scroll=_?_.time.bind(_):Mt,At=Mt(),Zr&&Mt.rec==null&&(Mt.rec=At),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Rg=1,n.refreshPriority===-9999&&(Oo=R)),H.tweenScroll=H.tweenScroll||{top:wg(U,Ke),left:wg(U,An)},R.tweenTo=ht=H.tweenScroll[C.p],R.scrubDuration=function(et){tt=Ro(et)&&et,tt?G?G.duration(et):G=Ct.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(R)}}):(G&&G.progress(1).kill(),G=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),ut=0,l||(l=i.vars.id)),y&&((!ys(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _e.style&&Ct.set(I?[_e,ui]:U,{scrollBehavior:"auto"}),Zt.forEach(function(et){return Pn(et)&&et.target===(I?ve.scrollingElement||ui:U)&&(et.smooth=!1)}),xe=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?db(i):y.snapTo==="labelsDirectional"?pb(i):y.directional!==!1?function(et,xt){return sd(y.snapTo)(et,Rn()-ot<500?0:xt.direction)}:Ct.utils.snap(y.snapTo),ct=y.duration||{min:.1,max:2},ct=ys(ct)?Io(ct.min,ct.max):Io(ct,ct),L=Ct.delayedCall(y.delay||tt/2||.1,function(){var et=Mt(),xt=Rn()-ot<500,nt=ht.tween;if((xt||Math.abs(R.getVelocity())<10)&&!nt&&!Th&&q!==et){var Tt=(et-Lt)/ie,jt=i&&!N?i.totalProgress():Tt,Xt=xt?0:(jt-gt)/(Rn()-Eo)*1e3||0,Ce=Ct.utils.clamp(-Tt,1-Tt,ma(Xt/2)*Xt/.185),Ye=Tt+(y.inertia===!1?0:Ce),Re,Me,me=y,je=me.onStart,be=me.onInterrupt,xn=me.onComplete;if(Re=xe(Ye,R),Ro(Re)||(Re=Ye),Me=Math.max(0,Math.round(Lt+Re*ie)),et<=Ot&&et>=Lt&&Me!==et){if(nt&&!nt._initted&&nt.data<=ma(Me-et))return;y.inertia===!1&&(Ce=Re-Tt),ht(Me,{duration:ct(ma(Math.max(ma(Ye-jt),ma(Re-jt))*.185/Xt/.05||0)),ease:y.ease||"power3",data:ma(Me-et),onInterrupt:function(){return L.restart(!0)&&be&&pa(R,be)},onComplete:function(){R.update(),q=Mt(),i&&!N&&(G?G.resetTo("totalProgress",Re,i._tTime/i._tDur):i.progress(Re)),ut=gt=i&&!N?i.totalProgress():R.progress,v&&v(R),xn&&pa(R,xn)}},et,Ce*ie,Me-et-Ce*ie),je&&pa(R,je,ht.tween)}}else R.isActive&&q!==et&&L.restart(!0)}).pause()),l&&($f[l]=R),u=R.trigger=zn(u||f!==!0&&f),lt=u&&u._gsap&&u._gsap.stRevert,lt&&(lt=lt(R)),f=f===!0?u:zn(f),hi(o)&&(o={targets:u,className:o}),f&&(m===!1||m===yi||(m=!m&&f.parentNode&&f.parentNode.style&&Si(f.parentNode).display==="flex"?!1:Qe),R.pin=f,Nt=Ct.core.getCache(f),Nt.spacer?Fe=Nt.pinState:(E&&(E=zn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Nt.spacerIsNative=!!E,E&&(Nt.spacerState=dh(E))),Nt.spacer=de=E||ve.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),Nt.pinState=Fe=dh(f)),n.force3D!==!1&&Ct.set(f,{force3D:!0}),R.spacer=de=Nt.spacer,it=Si(f),Ft=it[m+C.os2],Vt=Ct.getProperty(f),ft=Ct.quickSetter(f,C.a,an),Wf(f,de,it),F=dh(f)),Y){qe=ys(Y)?xg(Y,vg):vg,J=fh("scroller-start",l,U,C,qe,0),Qt=fh("scroller-end",l,U,C,qe,0,J),oe=J["offset"+C.op.d2];var pt=zn(_r(U,"content")||U);ce=this.markerStart=fh("start",l,pt,C,qe,oe,0,_),ae=this.markerEnd=fh("end",l,pt,C,qe,oe,0,_),_&&(dt=Ct.quickSetter([ce,ae],C.a,an)),!V&&!(Ni.length&&_r(U,"fixedMarkers")===!0)&&(fb(I?_e:U),Ct.set([J,Qt],{force3D:!0}),S=Ct.quickSetter(J,C.a,an),st=Ct.quickSetter(Qt,C.a,an))}if(_){var at=_.vars.onUpdate,mt=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(_,mt||[])})}if(R.previous=function(){return Jt[Jt.indexOf(R)-1]},R.next=function(){return Jt[Jt.indexOf(R)+1]},R.revert=function(et,xt){if(!xt)return R.kill(!0);var nt=et!==!1||!R.enabled,Tt=Cn;nt!==R.isReverted&&(nt&&(j=Math.max(Mt(),R.scroll.rec||0),vt=R.progress,K=i&&i.progress()),ce&&[ce,ae,J,Qt].forEach(function(jt){return jt.style.display=nt?"none":"block"}),nt&&(Cn=R,R.update(nt)),f&&(!w||!R.isActive)&&(nt?_b(f,de,Fe):Wf(f,de,Si(f),A)),nt||R.update(nt),Cn=Tt,R.isReverted=nt)},R.refresh=function(et,xt,nt,Tt){if(!((Cn||!R.enabled)&&!xt)){if(f&&et&&Mi){fn(r,"scrollEnd",kg);return}!Gn&&Q&&Q(R),Cn=R,ht.tween&&!nt&&(ht.tween.kill(),ht.tween=0),G&&G.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(z){return z.vars.immediateRender&&z.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var jt=_t(),Xt=Et(),Ce=_?_.duration():$i(U,C),Ye=ie<=.01||!ie,Re=0,Me=Tt||0,me=ys(nt)?nt.end:n.end,je=n.endTrigger||u,be=ys(nt)?nt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),xn=R.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,R),$n=u&&Math.max(0,Jt.indexOf(R))||0,Be=$n,Ze,tn,Kn,Cs,en,ze,fi,Ma,zo,yr,b,O,Z;for(Y&&ys(nt)&&(O=Ct.getProperty(J,C.p),Z=Ct.getProperty(Qt,C.p));Be-- >0;)ze=Jt[Be],ze.end||ze.refresh(0,1)||(Cn=R),fi=ze.pin,fi&&(fi===u||fi===f||fi===xn)&&!ze.isReverted&&(yr||(yr=[]),yr.unshift(ze),ze.revert(!0,!0)),ze!==Jt[Be]&&($n--,Be--);for(Pn(be)&&(be=be(R)),be=pg(be,"start",R),Lt=bg(be,u,jt,C,Mt(),ce,J,R,Xt,B,V,Ce,_,R._startClamp&&"_startClamp")||(f?-.001:0),Pn(me)&&(me=me(R)),hi(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(hi(be)?be.split(" ")[0]:"")+me:(Re=gh(me.substr(2),jt),me=hi(be)?be:(_?Ct.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Lt):Lt)+Re,je=u)),me=pg(me,"end",R),Ot=Math.max(Lt,bg(me||(je?"100% 0":Ce),je,jt,C,Mt()+Re,ae,Qt,R,Xt,B,V,Ce,_,R._endClamp&&"_endClamp"))||-.001,Re=0,Be=$n;Be--;)ze=Jt[Be]||{},fi=ze.pin,fi&&ze.start-ze._pinPush<=Lt&&!_&&ze.end>0&&(Ze=ze.end-(R._startClamp?Math.max(0,ze.start):ze.start),(fi===u&&ze.start-ze._pinPush<Lt||fi===xn)&&isNaN(be)&&(Re+=Ze*(1-ze.progress)),fi===f&&(Me+=Ze));if(Lt+=Re,Ot+=Re,R._startClamp&&(R._startClamp+=Re),R._endClamp&&!Gn&&(R._endClamp=Ot||-.001,Ot=Math.min(Ot,$i(U,C))),ie=Ot-Lt||(Lt-=.01)&&.001,Ye&&(vt=Ct.utils.clamp(0,1,Ct.utils.normalize(Lt,Ot,j))),R._pinPush=Me,ce&&Re&&(Ze={},Ze[C.a]="+="+Re,xn&&(Ze[C.p]="-="+Mt()),Ct.set([ce,ae],Ze)),f&&!(Jf&&R.end>=$i(U,C)))Ze=Si(f),Cs=C===Ke,Kn=Mt(),he=parseFloat(Vt(C.a))+Me,!Ce&&Ot>1&&(b=(I?ve.scrollingElement||ui:U).style,b={style:b,value:b["overflow"+C.a.toUpperCase()]},I&&Si(_e)["overflow"+C.a.toUpperCase()]!=="scroll"&&(b.style["overflow"+C.a.toUpperCase()]="scroll")),Wf(f,de,Ze),F=dh(f),tn=xr(f,!0),Ma=V&&gr(U,Cs?An:Ke)(),m?(A=[m+C.os2,ie+Me+an],A.t=de,Be=m===Qe?Mh(f,C)+ie+Me:0,Be&&(A.push(C.d,Be+an),de.style.flexBasis!=="auto"&&(de.style.flexBasis=Be+an)),ya(A),xn&&Jt.forEach(function(z){z.pin===xn&&z.vars.pinSpacing!==!1&&(z._subPinOffset=!0)}),V&&Mt(j)):(Be=Mh(f,C),Be&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=Be+an)),V&&(en={top:tn.top+(Cs?Kn-Lt:Ma)+an,left:tn.left+(Cs?Ma:Kn-Lt)+an,boxSizing:"border-box",position:"fixed"},en[Ms]=en["max"+Sa]=Math.ceil(tn.width)+an,en[bs]=en["max"+rd]=Math.ceil(tn.height)+an,en[yi]=en[yi+No]=en[yi+Lo]=en[yi+Uo]=en[yi+Do]="0",en[Qe]=Ze[Qe],en[Qe+No]=Ze[Qe+No],en[Qe+Lo]=Ze[Qe+Lo],en[Qe+Uo]=Ze[Qe+Uo],en[Qe+Do]=Ze[Qe+Do],We=vb(Fe,en,w),Gn&&Mt(0)),i?(zo=i._initted,kf(1),i.render(i.duration(),!0,!0),Dt=Vt(C.a)-he+ie+Me,k=Math.abs(ie-Dt)>1,V&&k&&We.splice(We.length-2,2),i.render(0,!0,!0),zo||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),kf(0)):Dt=ie,b&&(b.value?b.style["overflow"+C.a.toUpperCase()]=b.value:b.style.removeProperty("overflow-"+C.a));else if(u&&Mt()&&!_)for(tn=u.parentNode;tn&&tn!==_e;)tn._pinOffset&&(Lt-=tn._pinOffset,Ot-=tn._pinOffset),tn=tn.parentNode;yr&&yr.forEach(function(z){return z.revert(!1,!0)}),R.start=Lt,R.end=Ot,At=Wt=Gn?j:Mt(),!_&&!Gn&&!Zr&&(At<j&&Mt(j),R.scroll.rec=0),R.revert(!1,!0),ot=Rn(),L&&(q=-1,L.restart(!0)),Cn=0,i&&N&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Ye||vt!==R.progress||_||x||i&&!i._initted)&&(i&&!N&&(i._initted||vt||i.vars.immediateRender!==!1)&&i.totalProgress(_&&Lt<-.001&&!vt?Ct.utils.normalize(Lt,Ot,0):vt,!0),R.progress=Ye||(At-Lt)/ie===vt?0:vt),f&&m&&(de._pinOffset=Math.round(R.progress*Dt)),G&&G.invalidate(),isNaN(O)||(O-=Ct.getProperty(J,C.p),Z-=Ct.getProperty(Qt,C.p),ph(J,C,O),ph(ce,C,O-(Tt||0)),ph(Qt,C,Z),ph(ae,C,Z-(Tt||0))),Ye&&!Gn&&R.update(),h&&!Gn&&!Se&&(Se=!0,h(R),Se=!1)}},R.getVelocity=function(){return(Mt()-Wt)/(Rn()-Eo)*1e3||0},R.endAnimation=function(){wo(R.callbackAnimation),i&&(G?G.progress(1):i.paused()?N||wo(i,R.direction<0,1):wo(i,i.reversed()))},R.labelToScroll=function(et){return i&&i.labels&&(Lt||R.refresh()||Lt)+i.labels[et]/i.duration()*ie||0},R.getTrailing=function(et){var xt=Jt.indexOf(R),nt=R.direction>0?Jt.slice(0,xt).reverse():Jt.slice(xt+1);return(hi(et)?nt.filter(function(Tt){return Tt.vars.preventOverlaps===et}):nt).filter(function(Tt){return R.direction>0?Tt.end<=Lt:Tt.start>=Ot})},R.update=function(et,xt,nt){if(!(_&&!nt&&!et)){var Tt=Gn===!0?j:R.scroll(),jt=et?0:(Tt-Lt)/ie,Xt=jt<0?0:jt>1?1:jt||0,Ce=R.progress,Ye,Re,Me,me,je,be,xn,$n;if(xt&&(Wt=At,At=_?Mt():Tt,y&&(gt=ut,ut=i&&!N?i.totalProgress():Xt)),p&&f&&!Cn&&!oh&&Mi&&(!Xt&&Lt<Tt+(Tt-Wt)/(Rn()-Eo)*p?Xt=1e-4:Xt===1&&Ot>Tt+(Tt-Wt)/(Rn()-Eo)*p&&(Xt=.9999)),Xt!==Ce&&R.enabled){if(Ye=R.isActive=!!Xt&&Xt<1,Re=!!Ce&&Ce<1,be=Ye!==Re,je=be||!!Xt!=!!Ce,R.direction=Xt>Ce?1:-1,R.progress=Xt,je&&!Cn&&(Me=Xt&&!Ce?0:Xt===1?1:Ce===1?2:3,N&&(me=!be&&D[Me+1]!=="none"&&D[Me+1]||D[Me],$n=i&&(me==="complete"||me==="reset"||me in i))),P&&(be||$n)&&($n||d||!i)&&(Pn(P)?P(R):R.getTrailing(P).forEach(function(Kn){return Kn.endAnimation()})),N||(G&&!Cn&&!oh?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",Xt,i._tTime/i._tDur):(G.vars.totalProgress=Xt,G.invalidate().restart())):i&&i.totalProgress(Xt,!!(Cn&&(ot||et)))),f){if(et&&m&&(de.style[m+C.os2]=Ft),!V)ft(Co(he+Dt*Xt));else if(je){if(xn=!et&&Xt>Ce&&Ot+1>Tt&&Tt+1>=$i(U,C),w)if(!et&&(Ye||xn)){var Be=xr(f,!0),Ze=Tt-Lt;Tg(f,_e,Be.top+(C===Ke?Ze:0)+an,Be.left+(C===Ke?0:Ze)+an)}else Tg(f,de);ya(Ye||xn?We:F),k&&Xt<1&&Ye||ft(he+(Xt===1&&!xn?Dt:0))}}y&&!ht.tween&&!Cn&&!oh&&L.restart(!0),o&&(be||T&&Xt&&(Xt<1||!Vf))&&Fo(o.targets).forEach(function(Kn){return Kn.classList[Ye||T?"add":"remove"](o.className)}),a&&!N&&!et&&a(R),je&&!Cn?(N&&($n&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),a&&a(R)),(be||!Vf)&&(c&&be&&pa(R,c),W[Me]&&pa(R,W[Me]),T&&(Xt===1?R.kill(!1,1):W[Me]=0),be||(Me=Xt===1?1:3,W[Me]&&pa(R,W[Me]))),M&&!Ye&&Math.abs(R.getVelocity())>(Ro(M)?M:2500)&&(wo(R.callbackAnimation),G?G.progress(1):wo(i,me==="reverse"?1:!Xt,1))):N&&a&&!Cn&&a(R)}if(st){var tn=_?Tt/_.duration()*(_._caScrollDist||0):Tt;S(tn+(J._isFlipped?1:0)),st(tn)}dt&&dt(-Tt/_.duration()*(_._caScrollDist||0))}},R.enable=function(et,xt){R.enabled||(R.enabled=!0,fn(U,"resize",Po),I||fn(U,"scroll",ga),Q&&fn(r,"refreshInit",Q),et!==!1&&(R.progress=vt=0,At=Wt=q=Mt()),xt!==!1&&R.refresh())},R.getTween=function(et){return et&&ht?ht.tween:G},R.setPositions=function(et,xt,nt,Tt){if(_){var jt=_.scrollTrigger,Xt=_.duration(),Ce=jt.end-jt.start;et=jt.start+Ce*et/Xt,xt=jt.start+Ce*xt/Xt}R.refresh(!1,!1,{start:mg(et,nt&&!!R._startClamp),end:mg(xt,nt&&!!R._endClamp)},Tt),R.update()},R.adjustPinSpacing=function(et){if(A&&et){var xt=A.indexOf(C.d)+1;A[xt]=parseFloat(A[xt])+et+an,A[1]=parseFloat(A[1])+et+an,ya(A)}},R.disable=function(et,xt){if(et!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,xt||G&&G.pause(),j=0,Nt&&(Nt.uncache=1),Q&&un(r,"refreshInit",Q),L&&(L.pause(),ht.tween&&ht.tween.kill()&&(ht.tween=0)),!I)){for(var nt=Jt.length;nt--;)if(Jt[nt].scroller===U&&Jt[nt]!==R)return;un(U,"resize",Po),I||un(U,"scroll",ga)}},R.kill=function(et,xt){R.disable(et,xt),G&&!xt&&G.kill(),l&&delete $f[l];var nt=Jt.indexOf(R);nt>=0&&Jt.splice(nt,1),nt===Vn&&xh>0&&Vn--,nt=0,Jt.forEach(function(Tt){return Tt.scroller===R.scroller&&(nt=1)}),nt||Gn||Zr||(R.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),xt||i.kill()),ce&&[ce,ae,J,Qt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),Oo===R&&(Oo=0),f&&(Nt&&(Nt.uncache=1),nt=0,Jt.forEach(function(Tt){return Tt.pin===f&&nt++}),nt||(Nt.spacer=0)),n.onKill&&n.onKill(R)},Jt.push(R),R.enable(!1,!1),lt&&lt(R),i&&i.add&&!ie){var rt=R.update;R.update=function(){R.update=rt,Zt.cache++,Lt||Ot||R.refresh()},Ct.delayedCall(.01,R.update),ie=.01,Lt=Ot=0}else R.refresh();f&&gb()},r.register=function(n){return _a||(Ct=n||Ng(),Dg()&&window.document&&r.enable(),_a=Ao),_a},r.defaults=function(n){if(n)for(var i in n)uh[i]=n[i];return uh},r.disable=function(n,i){Ao=0,Jt.forEach(function(a){return a[i?"kill":"disable"](n)}),un($t,"wheel",ga),un(ve,"scroll",ga),clearInterval(ah),un(ve,"touchcancel",Ji),un(_e,"touchstart",Ji),ch(un,ve,"pointerdown,touchstart,mousedown",gg),ch(un,ve,"pointerup,touchend,mouseup",_g),Sh.kill(),lh(un);for(var s=0;s<Zt.length;s+=3)hh(un,Zt[s],Zt[s+1]),hh(un,Zt[s],Zt[s+2])},r.enable=function(){if($t=window,ve=document,ui=ve.documentElement,_e=ve.body,Ct){if(Fo=Ct.utils.toArray,Io=Ct.utils.clamp,Zf=Ct.core.context||Ji,kf=Ct.core.suppressOverwrites||Ji,td=$t.history.scrollRestoration||"auto",Kf=$t.pageYOffset||0,Ct.core.globals("ScrollTrigger",r),_e){Ao=1,va=document.createElement("div"),va.style.height="100vh",va.style.position="absolute",Wg(),cb(),Ge.register(Ct),r.isTouch=Ge.isTouch,Yr=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Yf=Ge.isTouch===1,fn($t,"wheel",ga),jf=[$t,ve,ui,_e],Ct.matchMedia?(r.matchMedia=function(h){var d=Ct.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ct.addEventListener("matchMediaInit",function(){Gg(),ad()}),Ct.addEventListener("matchMediaRevert",function(){return Vg()}),Ct.addEventListener("matchMedia",function(){Ss(0,1),As("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return Hf(),Hf})):console.warn("Requires GSAP 3.11.0 or later"),Hf(),fn(ve,"scroll",ga);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,a=Ct.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=xr(_e),Ke.m=Math.round(o.top+Ke.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),ah=setInterval(yg,250),Ct.delayedCall(.5,function(){return oh=0}),fn(ve,"touchcancel",Ji),fn(_e,"touchstart",Ji),ch(fn,ve,"pointerdown,touchstart,mousedown",gg),ch(fn,ve,"pointerup,touchend,mouseup",_g),qf=Ct.utils.checkPrefix("transform"),vh.push(qf),_a=Rn(),Sh=Ct.delayedCall(.2,Ss).pause(),xa=[ve,"visibilitychange",function(){var h=$t.innerWidth,d=$t.innerHeight;ve.hidden?(fg=h,dg=d):(fg!==h||dg!==d)&&Po()},ve,"DOMContentLoaded",Ss,$t,"load",Ss,$t,"resize",Po],lh(fn),Jt.forEach(function(h){return h.enable(0,1)}),l=0;l<Zt.length;l+=3)hh(un,Zt[l],Zt[l+1]),hh(un,Zt[l],Zt[l+2])}else if(ve){var c=function h(){r.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Vf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ah)||(ah=i)&&setInterval(yg,i),"ignoreMobileResize"in n&&(Yf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(lh(un)||lh(fn,n.autoRefreshEvents||"none"),Pg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=zn(n),a=Zt.indexOf(s),o=ws(s);~a&&Zt.splice(a,o?6:2),i&&(o?Ni.unshift($t,i,_e,i,ui,i):Ni.unshift(s,i))},r.clearMatchMedia=function(n){Jt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(hi(n)?zn(n):n).getBoundingClientRect(),o=a[s?Ms:bs]*i||0;return s?a.right-o>0&&a.left+o<$t.innerWidth:a.bottom-o>0&&a.top+o<$t.innerHeight},r.positionInViewport=function(n,i,s){hi(n)&&(n=zn(n));var a=n.getBoundingClientRect(),o=a[s?Ms:bs],l=i==null?o/2:i in bh?bh[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/$t.innerWidth:(a.top+l)/$t.innerHeight},r.killAll=function(n){if(Jt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Es.killAll||[];Es={},i.forEach(function(s){return s()})}},r})();Ht.version="3.15.1";Ht.saveStyles=function(r){return r?Fo(r).forEach(function(t){if(t&&t.style){var e=ci.indexOf(t);e>=0&&ci.splice(e,5),ci.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),Zf())}}):ci};Ht.revert=function(r,t){return ad(!r,t)};Ht.create=function(r,t){return new Ht(r,t)};Ht.refresh=function(r){return r?Po(!0):(_a||Ht.register())&&Ss(!0)};Ht.update=function(r){return++Zt.cache&&vr(r===!0?2:0)};Ht.clearScrollMemory=Hg;Ht.maxScroll=function(r,t){return $i(r,t?An:Ke)};Ht.getScrollFunc=function(r,t){return gr(zn(r),t?An:Ke)};Ht.getById=function(r){return $f[r]};Ht.getAll=function(){return Jt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ht.isScrolling=function(){return!!Mi};Ht.snapDirectional=sd;Ht.addEventListener=function(r,t){var e=Es[r]||(Es[r]=[]);~e.indexOf(t)||e.push(t)};Ht.removeEventListener=function(r,t){var e=Es[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Ht.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var d=[],u=[],f=Ct.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),s<=d.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Pn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Pn(s)&&(s=s(),fn(Ht,"refresh",function(){return s=t.batchMax()})),Fo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Ht.create(c))}),e};var Eg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Xf=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===ui&&r(_e,e)},mh={auto:1,scroll:1},Sb=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Ct.core.getCache(s),o=Rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(mh[(l=Si(s)).overflowY]||mh[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ws(s)&&(mh[(l=Si(s)).overflowY]||mh[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},qg=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Sb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(ve,Ge.eventTypes[0],Cg,!1,!0)},onDisable:function(){return un(ve,Ge.eventTypes[0],Cg,!0)}})},Mb=/(input|label|select|textarea)/i,Ag,Cg=function(t){var e=Mb.test(t.target.tagName);(e||Ag)&&(t._gsapAllow=!0,Ag=e)},bb=function(t){ys(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=zn(t.target)||ui,h=Ct.core.globals().ScrollSmoother,d=h&&h.get(),u=Yr&&(t.content&&zn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=gr(c,Ke),m=gr(c,An),x=1,p=(Ge.isTouch&&$t.visualViewport?$t.visualViewport.scale*$t.visualViewport.width:$t.outerWidth)/$t.innerWidth,g=0,v=Pn(i)?function(){return i(o)}:function(){return i||2.8},T,y,w=qg(c,t.type,!0,s),E=function(){return y=!1},_=Ji,M=Ji,P=function(){l=$i(c,Ke),M=Io(Yr?1:0,l),n&&(_=Io(0,$i(c,An))),T=Ts},C=function(){u._gsap.y=Co(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(y){requestAnimationFrame(E);var Y=Co(o.deltaY/2),B=M(f.v-Y);if(u&&B!==f.v+f.offset){f.offset=B-f.v;var R=Co((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=Zt.cache,vr()}return!0}f.offset&&C(),y=!0},U,H,I,V,W=function(){P(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return u&&Ct.set(u,{y:"+=0"}),t.ignoreCheck=function(D){return Yr&&D.type==="touchmove"&&N(D)||x>1.05&&D.type!=="touchstart"||o.isGesturing||D.touches&&D.touches.length>1},t.onPress=function(){y=!1;var D=x;x=Co(($t.visualViewport&&$t.visualViewport.scale||1)/p),U.pause(),D!==x&&Xf(c,x>1.01?!0:n?!1:"x"),H=m(),I=f(),P(),T=Ts},t.onRelease=t.onGestureStart=function(D,Y){if(f.offset&&C(),!Y)V.restart(!0);else{Zt.cache++;var B=v(),R,Q;n&&(R=m(),Q=R+B*.05*-D.velocityX/.227,B*=Eg(m,R,Q,$i(c,An)),U.vars.scrollX=_(Q)),R=f(),Q=R+B*.05*-D.velocityY/.227,B*=Eg(f,R,Q,$i(c,Ke)),U.vars.scrollY=M(Q),U.invalidate().duration(B).play(.01),(Yr&&U.vars.scrollY>=l||R>=l-1)&&Ct.to({},{onUpdate:W,duration:B})}a&&a(D)},t.onWheel=function(){U._ts&&U.pause(),Rn()-g>1e3&&(T=0,g=Rn())},t.onChange=function(D,Y,B,R,Q){if(Ts!==T&&P(),Y&&n&&m(_(R[2]===Y?H+(D.startX-D.x):m()+Y-R[1])),B){f.offset&&C();var _t=Q[2]===B,Et=_t?I+D.startY-D.y:f()+B-Q[1],q=M(Et);_t&&Et!==q&&(I+=q-Et),f(q)}(B||Y)&&vr()},t.onEnable=function(){Xf(c,n?!1:"x"),Ht.addEventListener("refresh",W),fn($t,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),w.enable()},t.onDisable=function(){Xf(c,!0),un($t,"resize",W),Ht.removeEventListener("refresh",W),w.kill()},t.lockAxis=t.lockAxis!==!1,o=new Ge(t),o.iOS=Yr,Yr&&!f()&&f(1),Yr&&Ct.ticker.add(Ji),V=o._dc,U=Ct.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Xg(f,f(),function(){return U.pause()})},onUpdate:vr,onComplete:V.vars.onComplete}),o};Ht.sort=function(r){if(Pn(r))return Jt.sort(r);var t=$t.pageYOffset||0;return Ht.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+$t.innerHeight}),Jt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ht.observe=function(r){return new Ge(r)};Ht.normalizeScroll=function(r){if(typeof r=="undefined")return kn;if(r===!0&&kn)return kn.enable();if(r===!1){kn&&kn.kill(),kn=r;return}var t=r instanceof Ge?r:bb(r);return kn&&kn.target===t.target&&kn.kill(),ws(t.target)&&(kn=t),t};Ht.core={_getVelocityProp:sh,_inputObserver:qg,_scrollers:Zt,_proxies:Ni,bridge:{ss:function(){Mi||As("scrollStart"),Mi=Rn()},ref:function(){return Cn}}};Ng()&&Ct.registerPlugin(Ht);fe.registerPlugin(Ht);var _n=matchMedia("(prefers-reduced-motion: reduce)").matches,$g=matchMedia("(pointer: fine)").matches;function Tb(){try{let r=document.createElement("canvas").getContext("webgl"),t=r&&r.getExtension("WEBGL_debug_renderer_info");return t?String(r.getParameter(t.UNMASKED_RENDERER_WEBGL)):""}catch{return""}}var wb=/intel|uhd|iris|mali|adreno|powervr|apple gpu|swiftshader|llvmpipe|microsoft basic/i.test(Tb()),wh=wb||(navigator.hardwareConcurrency||4)<=4||innerWidth<760,zt=(r,t=document)=>t.querySelector(r),He=(r,t=document)=>Array.from(t.querySelectorAll(r)),Jr=null;document.addEventListener("click",r=>{let t=r.target.closest('a[href^="#"]');if(!t||r.defaultPrevented)return;let e=decodeURIComponent(t.getAttribute("href").slice(1)),n=e&&document.getElementById(e);n&&(r.preventDefault(),history.pushState(null,"","#"+e),window.dispatchEvent(new HashChangeEvent("hashchange")),ld(n),requestAnimationFrame(()=>{let s=-(n.closest("#servicios")&&n!==zt("#servicios")&&innerWidth>640?250:96);Jr?Jr.scrollTo(n,{offset:s,duration:1.2}):scrollTo({top:n.getBoundingClientRect().top+scrollY+s,behavior:_n?"auto":"smooth"})}))});function ld(r){let t=r&&r.closest(".hrow");t&&t.scrollTo({left:r.offsetLeft-t.offsetLeft-2,behavior:"auto"})}window.addEventListener("hashchange",()=>ld(document.getElementById(decodeURIComponent(location.hash.slice(1)))));location.hash&&ld(document.getElementById(decodeURIComponent(location.hash.slice(1))));var od=zt("#site-head");if(od){let r=0;Ht.create({start:0,end:"max",onUpdate(t){let e=t.scroll();od.classList.toggle("scrolled",e>8),_n||od.classList.toggle("away",e>400&&t.direction===1&&e-r>0),r=e}})}function Kg(r){if(r.dataset.split)return He(".w > span",r);r.dataset.split="1";let t=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(s=>{if(!s)return;if(/^\s+$/.test(s)){i.appendChild(document.createTextNode(s));return}let a=document.createElement("span");a.className="w";let o=document.createElement("span");o.textContent=s,a.appendChild(o),i.appendChild(a)}),n.replaceWith(i)}else n.nodeType===1&&t(n)})};return t(r),He(".w > span",r)}var Ui={progress:{v:_n?1:0},morph:0,keys:[]};function Eb(r){let t=wh?3200:8e3,e=wh?250:600,n=t+e,i=new Ua,s=new Ln(42,1,.1,100);s.position.set(0,0,7.2);let a;try{a=new Dc({antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{return null}a.setPixelRatio(wh?1:Math.min(devicePixelRatio||1,1.5)),r.appendChild(a.domElement);let o=new Float32Array(n*3),l=new Float32Array(n*3),c=new Float32Array(n*3),h=new Float32Array(n*3),d=new Float32Array(n),u=new Float32Array(n),f=new Float32Array(n),m=Math.floor(t*.3);for(let D=0;D<n;D++){let Y,B,R,Q;if(D<m){let _t=(D+.5)/m,Et=Math.acos(1-2*_t),q=Math.PI*(1+Math.sqrt(5))*D,ot=.55*Math.cbrt(.35+.65*Math.random());Y=ot*Math.sin(Et)*Math.cos(q),B=ot*Math.cos(Et),R=ot*Math.sin(Et)*Math.sin(q),Q=0}else if(D<t){let _t=(D-m)%3,Et=Math.random()<.09;Y=Et?_t*2.1+(Math.random()-.5)*.16:Math.random()*Math.PI*2,B=(Math.random()-.5)*(Et?.1:.05),R=Et?1:0,Q=1,f[D]=_t+1}else Y=(Math.random()-.5)*22,B=(Math.random()-.5)*12,R=-4-Math.random()*10,Q=2;if(l.set([Y,B,R],D*3),Q===2)c.set([Y,B,R],D*3),h.set([Y,B,R],D*3),o.set([Y,B,R],D*3);else{let _t=Math.random(),Et=D%2?0:Math.PI,q=1.5+Math.pow(_t,.8)*1.9+(Math.random()-.5)*.22,ot=Math.random()*Math.PI*2*.85+Et+q*.55+(Math.random()-.5)*.9;c.set([Math.cos(ot)*q*1.3,(Math.random()-.5)*.12,Math.sin(ot)*q],D*3),h.set([(Math.random()-.5)*17,(Math.random()-.5)*9.5,-3+Math.random()*4.5],D*3);let vt=Math.random()*Math.PI*2,Mt=Math.acos(2*Math.random()-1),ht=5+Math.random()*6;o.set([ht*Math.sin(Mt)*Math.cos(vt),ht*Math.sin(Mt)*Math.sin(vt),ht*Math.cos(Mt)-2],D*3)}d[D]=Math.random(),u[D]=Q}let x=new Ci;x.setAttribute("position",new cn(o,3)),x.setAttribute("aPlanet",new cn(l,3)),x.setAttribute("aRing",new cn(c,3)),x.setAttribute("aDust",new cn(h,3)),x.setAttribute("aRand",new cn(d,1)),x.setAttribute("aKind",new cn(u,1)),x.setAttribute("aOrb",new cn(f,1));let p={uTime:{value:0},uProgress:{value:Ui.progress.v},uMorph:{value:0},uMouse:{value:new $(99,99,0)},uPixel:{value:a.getPixelRatio()},uA:{value:new Kt("#5b86ff")},uB:{value:new Kt("#9fb4ff")},uC:{value:new Kt("#5ee0ff")}},g=new gi({uniforms:p,transparent:!0,depthWrite:!1,blending:Ya,vertexShader:`
      uniform float uTime, uProgress, uMorph, uPixel; uniform vec3 uMouse;
      attribute vec3 aPlanet, aRing, aDust; attribute float aRand, aKind, aOrb;
      varying float vMix, vAlpha;
      vec3 rotY(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }
      vec3 rotX(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x, c*p.y - s*p.z, s*p.y + c*p.z); }
      vec3 rotZ(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(c*p.x - s*p.y, s*p.x + c*p.y, p.z); }
      float stag(float x){ float d = aRand * 0.3; float t = clamp((x - d) / 0.7, 0.0, 1.0); return t*t*(3.0-2.0*t); }
      void main(){
        vec3 planet;
        if (aOrb > 0.5) {
          float a = aPlanet.x + uTime * 0.55;
          vec3 o = vec3(cos(a) * 2.35, sin(a) * 0.82 + aPlanet.y, aPlanet.y * 0.6);
          planet = rotZ(o, (aOrb - 1.0) * 1.0472 + 0.35);
        } else planet = rotY(aPlanet, uTime * 0.25);
        planet = rotX(rotY(planet, sin(uTime * 0.25) * 0.35), 0.18);
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
        float elec = aOrb > 0.5 ? aPlanet.z : 0.0;
        float size = aKind > 1.5 ? 1.8 : (aKind > 0.5 ? mix(2.4, 3.6, elec * (1.0 - m1)) : 3.1);
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
      }`}),v=new za(x,g),T=new ir;T.add(v),i.add(T);let y=!0;function w(){let D=r.clientWidth,Y=r.clientHeight;a.setSize(D,Y,!1),s.aspect=D/Y,s.updateProjectionMatrix(),y=D/Y>1.15,r.classList.toggle("narrow",!y)}w();let E;addEventListener("resize",()=>{clearTimeout(E),E=setTimeout(w,120)});let _=new $(99,99,0),M=new $;$g&&!_n&&addEventListener("pointermove",D=>{M.set(D.clientX/innerWidth*2-1,-(D.clientY/innerHeight)*2+1,.5).unproject(s),M.sub(s.position).normalize(),_.copy(s.position).addScaledVector(M,-s.position.z/M.z)},{passive:!0});let P={x:0,y:0};function C(D){let Y=Ui.keys;if(!Y.length)return 0;if(D<=Y[0][0])return Y[0][1];for(let B=1;B<Y.length;B++)if(D<=Y[B][0]){let[R,Q]=Y[B-1],[_t,Et]=Y[B];return Q+(Et-Q)*((D-R)/Math.max(1,_t-R))}return Y[Y.length-1][1]}let N=!1,U=0,H=performance.now(),I=0;function V(D){N&&(U=requestAnimationFrame(V));let B=Ui.morph>1.98&&Math.abs(C(scrollY)-Ui.morph)<.01?6:wh?2:1;if(I=(I+1)%B,I)return;let R=Math.min(.05,(D-H)/1e3);H=D,Ui.morph+=(C(scrollY)-Ui.morph)*Math.min(1,R*5),p.uTime.value+=R,p.uProgress.value=Ui.progress.v,p.uMorph.value=Ui.morph,p.uMouse.value.lerp(_,.08);let Q=Math.min(1,Ui.morph);T.position.set((y?1.95:0)*(1-Q),(y?.1:1.1)*(1-Q),0),T.scale.setScalar((y?.88:.72)+(y?.12:.1)*Q),P.x+=((_.y<50?_.y*.04:0)-P.x)*.04,P.y+=((_.x<50?_.x*.04:0)-P.y)*.04,T.rotation.x=P.x,T.rotation.z=-P.y*.5,a.render(i,s)}function W(){let D=!document.hidden&&!_n;D!==N&&(N=D,cancelAnimationFrame(U),D&&(H=performance.now(),U=requestAnimationFrame(V)))}return document.addEventListener("visibilitychange",W),V(performance.now()),W(),!0}function Yg(){var a;let r=o=>{let l=zt(o);return l?l.getBoundingClientRect().top+scrollY:null},t=innerHeight,e=[[0,0]],n=(a=r("#demo"))!=null?a:r("#servicios"),i=zt("#stack")||zt("#servicios"),s=i?i.getBoundingClientRect().top+scrollY+i.offsetHeight:null;n!=null&&e.push([n-t*.6,.05],[n,1]),s!=null&&e.push([s-t*.3,1],[s+t*.4,2]),Ui.keys=e.sort((o,l)=>o[0]-l[0])}function Ab(){let r=zt(".s010"),t=r?Kg(r):[];if(_n)return;fe.timeline({defaults:{ease:"power3.out"}}).to(Ui.progress,{v:1,duration:2.8,ease:"power3.inOut"},0).from(".s009",{y:20,opacity:0,duration:.7},.15).from(t,{yPercent:115,duration:1,stagger:.06},.25).from(".s011",{y:24,opacity:0,duration:.8},.75).from(".s012 > a",{y:20,opacity:0,duration:.7,stagger:.08},.9).from(".hero-tags span",{y:14,opacity:0,duration:.5,stagger:.05},1.05).from(".s015 > div",{y:24,opacity:0,duration:.7,stagger:.1},1.15).from(".site-head",{yPercent:-100,duration:.7},.1)}function Cb(){var c,h,d;if(_n)return;let r=(c=zt("#inicio"))==null?void 0:c.closest("section");r&&fe.to("#inicio",{yPercent:18,opacity:.2,ease:"none",scrollTrigger:{trigger:r,start:"top top",end:"bottom top",scrub:!0}});let t=zt(".s015 .s016");if(t&&/^\d+/.test(t.textContent)){let u=t.textContent.replace(/^\d+/,""),f={v:0};fe.to(f,{v:parseInt(t.textContent,10),duration:1.6,delay:1.2,ease:"power2.out",onUpdate:()=>{t.textContent=Math.round(f.v)+u}})}He(".s020,.s028,.s060,.s072,.s085,.s205,.startup-heading").filter(u=>!u.closest(".app-frame")).forEach(u=>{if(u.getBoundingClientRect().top<innerHeight*.9)return;let f=Kg(u);fe.from(f,{yPercent:115,duration:.9,ease:"power3.out",stagger:.035,scrollTrigger:{trigger:u,start:"top 88%",once:!0}})}),He(".s019,.s059").forEach(u=>{u.getBoundingClientRect().top<innerHeight*.9||fe.from(u,{opacity:0,x:-16,duration:.6,scrollTrigger:{trigger:u,start:"top 90%",once:!0}})});let e=He(".s023,.s036,.s047,.s063,.s075,.s088,.s091,.s135,.s139,.s143,.s193,.s212,.startup-card").filter(u=>u.getBoundingClientRect().top>innerHeight*.95&&!u.closest(".car"));fe.set(e,{y:36,opacity:0});let n=[],i=0,s=()=>{fe.to(n,{y:0,opacity:1,duration:.8,ease:"power3.out",stagger:.08,overwrite:!0}),n=[]},a=new IntersectionObserver(u=>{u.forEach(f=>{f.isIntersecting&&(n.push(f.target),a.unobserve(f.target))}),n.length&&(clearTimeout(i),i=setTimeout(s,30))},{rootMargin:"0px 0px -6% 0px"});e.forEach(u=>a.observe(u)),["#cat-search","#cat-type","#cat-spec","#cat-reset"].forEach(u=>{var f;return(f=zt(u))==null?void 0:f.addEventListener(u==="#cat-reset"?"click":"input",()=>{fe.set(e.filter(m=>m.closest("#servicios,#business")),{y:0,opacity:1}),Ht.refresh()})}),(h=zt("#cat-type"))==null||h.addEventListener("change",()=>Ht.refresh()),(d=zt("#cat-spec"))==null||d.addEventListener("change",()=>Ht.refresh()),window.addEventListener("hashchange",()=>fe.set(e,{y:0,opacity:1}));let o=zt("#tl");if(o){o.classList.add("live");let u=He(".tl-row",o),f=zt(".tl-dot",o);Ht.create({trigger:o,start:"top 65%",end:"bottom 55%",scrub:!0,onUpdate:m=>{let x=o.offsetHeight-60;fe.set(f,{y:m.progress*x});let p=Math.min(u.length-1,Math.floor(m.progress*u.length));u.forEach((g,v)=>g.classList.toggle("on",v<=p))}}),u[0].classList.add("on"),u.forEach(m=>fe.from(zt(".tl-num",m),{yPercent:40,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 85%",once:!0}}))}let l=zt(".star");l&&(fe.from(He(".tile",l),{y:50,opacity:0,duration:.9,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:l,start:"top 80%",once:!0}}),fe.from(".g-fg",{strokeDasharray:"0 100",duration:1.6,ease:"power2.out",scrollTrigger:{trigger:l,start:"top 70%",once:!0}}),fe.from(".bars i",{backgroundSize:"0% 100%",duration:1.2,stagger:.12,ease:"power2.out",scrollTrigger:{trigger:l,start:"top 70%",once:!0}})),fe.from(".s191",{y:18,opacity:0,stagger:.04,duration:.5,scrollTrigger:{trigger:".s189",start:"top 92%",once:!0}})}function Rb(){let r=zt("#burger"),t=zt("#menu");if(!r||!t)return;let e=He("a",t),n=i=>{var s;r.setAttribute("aria-expanded",String(i)),r.setAttribute("aria-label",i?"Cerrar men\xFA":"Abrir men\xFA"),document.documentElement.classList.toggle("menu-open",i),i?(t.hidden=!1,Jr==null||Jr.stop(),_n||fe.fromTo(e,{yPercent:60,opacity:0},{yPercent:0,opacity:1,duration:.6,stagger:.05,ease:"power3.out"}),(s=e[0])==null||s.focus()):(t.hidden=!0,Jr==null||Jr.start())};r.addEventListener("click",()=>n(r.getAttribute("aria-expanded")!=="true")),e.forEach(i=>i.addEventListener("click",()=>n(!1))),addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&(n(!1),r.focus())})}function Pb(){let r=zt("#car");if(!r)return;let t=He(".car-item",r),e=zt("#car-prev"),n=zt("#car-next"),i=zt("#car-i"),s=zt("#car-n"),a=h=>String(h).padStart(2,"0");s.textContent=a(t.length);let o=()=>{let h=r.scrollLeft,d=0,u=1/0;return t.forEach((f,m)=>{let x=Math.abs(f.offsetLeft-r.offsetLeft-h);x<u&&(u=x,d=m)}),d},l=()=>{let h=o();i.textContent=a(h+1),e.disabled=r.scrollLeft<4,n.disabled=r.scrollLeft+r.clientWidth>=r.scrollWidth-4},c=h=>{let d=Math.max(0,Math.min(t.length-1,o()+h));r.scrollTo({left:t[d].offsetLeft-r.offsetLeft,behavior:_n?"auto":"smooth"})};e.addEventListener("click",()=>c(-1)),n.addEventListener("click",()=>c(1)),r.addEventListener("scroll",()=>requestAnimationFrame(l),{passive:!0}),r.addEventListener("keydown",h=>{h.key==="ArrowRight"&&(h.preventDefault(),c(1)),h.key==="ArrowLeft"&&(h.preventDefault(),c(-1))}),l(),_n||fe.from(t,{x:120,opacity:0,duration:1,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 85%",once:!0}})}function Ib(){let r=zt("#app-demo");if(!r)return;let t=He(".scene",r),e=He(".dtab"),n=He(".app-item",r),i=zt("#demo-input"),s=zt("#demo-status"),a=zt(".fake-cursor",r),o=zt(".send",r),l=zt(".app-main",r),c=JSON.parse(zt("#demo-data").textContent),h=i.textContent;e.forEach(v=>{let T=document.createElement("span");T.className="prog",v.appendChild(T)});let d=0,u=null,f=!1,m=v=>{let T=v.getBoundingClientRect(),y=l.getBoundingClientRect();return{x:T.left-y.left+T.width/2,y:T.top-y.top+T.height/2}};function x(v){d=v,t.forEach((T,y)=>{T.hidden=y!==v}),e.forEach((T,y)=>{T.classList.toggle("on",y===v),T.setAttribute("aria-pressed",String(y===v)),fe.set(zt(".prog",T),{scaleX:0})}),n.forEach((T,y)=>T.classList.toggle("on",y===v)),s.textContent=c[v]}function p(v){x(v);let T=t[v],y=zt(".msg.user",T),w=zt(".msg.bot",T),E=zt(".hello",T),_=zt(".typed",T).dataset.text,M=zt(".approve",T);fe.set([y,w],{autoAlpha:0,y:14}),fe.set(E,{autoAlpha:1,y:0}),M&&(M.classList.remove("ok"),zt("button",M).textContent="Aprobar"),i.textContent=h,i.classList.remove("typing");let P=fe.timeline({onComplete:()=>g(d+1)}),C={n:0};if(P.set(a,{autoAlpha:0,x:0,y:0}).to(C,{n:_.length,duration:Math.min(2.2,_.length*.04),ease:"none",onStart:()=>i.classList.add("typing"),onUpdate:()=>{i.textContent=_.slice(0,Math.round(C.n))}},.5).add(()=>{let N=l.getBoundingClientRect();fe.set(a,{left:N.width*.72,top:N.height*.55})}).to(a,{autoAlpha:1,duration:.2}).add(()=>{let N=m(o);fe.to(a,{left:N.x-4,top:N.y-2,duration:.7,ease:"power2.inOut"})}).to({},{duration:.8}).add(()=>{o.classList.add("press"),setTimeout(()=>o.classList.remove("press"),160)}).to(E,{autoAlpha:0,y:-20,duration:.35},"+=0.1").add(()=>{i.textContent=h,i.classList.remove("typing")}).to(y,{autoAlpha:1,y:0,duration:.4,ease:"power3.out"}).to(a,{autoAlpha:0,duration:.3},"<").to(w,{autoAlpha:1,y:0,duration:.5,ease:"power3.out"},"+=0.7").from(He(".src em, .ext tbody tr, .plan li, .mini-chart i, .note",w),{autoAlpha:0,y:8,scaleY:(N,U)=>U.tagName==="I"?0:1,duration:.45,stagger:.15,ease:"power2.out"},"-=0.1"),M){let N=zt("button",M);P.add(()=>{let U=m(N);fe.set(a,{left:U.x+60,top:U.y+50})}).to(a,{autoAlpha:1,duration:.2},"+=0.4").add(()=>{let U=m(N);fe.to(a,{left:U.x-4,top:U.y-2,duration:.6,ease:"power2.inOut"})}).to({},{duration:.75}).add(()=>{M.classList.add("ok"),N.textContent="Aprobado \u2713"}).to(a,{autoAlpha:0,duration:.3},"+=0.3")}return P.to({},{duration:2.6}),P.fromTo(zt(".prog",e[v]),{scaleX:0},{scaleX:1,duration:P.duration(),ease:"none"},0),P}function g(v){if(u==null||u.kill(),v=(v+t.length)%t.length,_n){x(v);return}u=p(v),f||u.pause()}if(e.forEach((v,T)=>v.addEventListener("click",()=>g(T))),_n){x(0);return}new IntersectionObserver(([v])=>{if(f=v.isIntersecting,!u){f&&g(0);return}f?u.resume():u.pause()},{threshold:.35}).observe(r),document.addEventListener("visibilitychange",()=>{u&&(document.hidden?u.pause():f&&u.resume())}),t.forEach((v,T)=>{T||fe.set([zt(".msg.user",v),zt(".msg.bot",v)],{autoAlpha:0})})}function Lb(){let r=He(".mq");if(!r.length)return;let t=zt("#tech-used"),e=r.map(s=>{let a=zt(".mq-track",s);return[...a.children].forEach(o=>{let l=o.cloneNode(!0);l.setAttribute("aria-hidden","true"),l.tabIndex=-1,a.appendChild(l)}),{row:s,track:a,x:0,dir:Number(s.dataset.dir)||1,drag:null,moved:0,hover:!1}}),n=!1;e.forEach(s=>{s.row.addEventListener("pointerdown",o=>{s.drag={x0:o.clientX,start:s.x,id:o.pointerId},s.moved=0}),s.row.addEventListener("pointermove",o=>{if(!s.drag)return;let l=o.clientX-s.drag.x0;if(s.moved=Math.max(s.moved,Math.abs(l)),s.moved>6&&!s.row.classList.contains("drag")){s.row.classList.add("drag");try{s.row.setPointerCapture(s.drag.id)}catch{}}s.moved>6&&(s.x=s.drag.start+l)});let a=()=>{s.drag=null,s.row.classList.remove("drag")};s.row.addEventListener("pointerup",a),s.row.addEventListener("pointercancel",a),s.row.addEventListener("pointerenter",()=>{s.hover=!0}),s.row.addEventListener("pointerleave",()=>{s.hover=!1}),s.row.addEventListener("click",o=>{let l=o.target.closest(".tech-pill");if(!l)return;if(s.moved>6){o.preventDefault();return}He(".tech-pill.on").forEach(h=>h.classList.remove("on")),l.classList.add("on");let c=(l.lastChild&&l.lastChild.textContent||l.textContent).trim();t.textContent=l.dataset.used?c+" \u2192 "+l.dataset.used:c})});let i=(s,a)=>{n&&e.forEach(o=>{let l=o.track.scrollWidth/2;!o.drag&&!_n&&(o.x-=o.dir*(o.hover?.25:1)*.045*a),o.x<=-l&&(o.x+=l),o.x>0&&(o.x-=l),o.track.style.transform="translate3d("+o.x.toFixed(1)+"px,0,0)"})};fe.ticker.add(i),new IntersectionObserver(s=>{n=s.some(a=>a.isIntersecting)||e.some(a=>{let o=a.row.getBoundingClientRect();return o.bottom>0&&o.top<innerHeight})}).observe(r[0]),new IntersectionObserver(()=>{n=e.some(s=>{let a=s.row.getBoundingClientRect();return a.bottom>0&&a.top<innerHeight})}).observe(r[r.length-1])}function Db(){let r=t=>`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="${t}"/></svg>`;He(".hrow").forEach(t=>{let e=[...t.children];if(e.length<2)return;let n=document.createElement("div");n.className="row-ctl";let i=t.previousElementSibling,s=i&&/\d/.test(i.textContent);n.innerHTML=`${s?"":`<span>${e.length}</span>`}<button type="button" class="row-btn" aria-label="Anterior">${r("M19 12H5M11 18l-6-6 6-6")}</button><button type="button" class="row-btn" aria-label="Siguiente">${r("M5 12h14M13 6l6 6-6 6")}</button>`;let a=t.previousElementSibling,o=document.createElement("div");o.className="row-head",a&&a.matches("h3")?(a.before(o),o.append(a,n)):(o.append(document.createElement("span"),n),t.before(o));let[l,c]=n.querySelectorAll("button"),h=()=>(e[0].getBoundingClientRect().width+16)*Math.max(1,Math.floor(t.clientWidth/(e[0].getBoundingClientRect().width+16)));l.addEventListener("click",()=>t.scrollBy({left:-h(),behavior:_n?"auto":"smooth"})),c.addEventListener("click",()=>t.scrollBy({left:h(),behavior:_n?"auto":"smooth"}));let d=0,u=()=>{d=0,l.disabled=t.scrollLeft<4,c.disabled=t.scrollLeft+t.clientWidth>=t.scrollWidth-4};t.addEventListener("scroll",()=>{d||(d=requestAnimationFrame(u))},{passive:!0}),u()})}function Nb(){let r=He("[data-video]"),t=He("[data-play]");if(!r.length&&!t.length)return;let e={},n=document.createElement("div");n.className="vbox",n.hidden=!0,n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Video"),n.innerHTML='<div class="vbox-in"><div class="vbox-head"><span class="vbox-title"></span><button type="button" class="vbox-x" aria-label="Cerrar video">\u2715</button></div><div class="vbox-media"></div></div>',document.body.appendChild(n);let i=zt(".vbox-media",n),s=zt(".vbox-title",n),a=null,o=()=>{i.innerHTML="",n.hidden=!0,He(".vthumb video.on").forEach(c=>c.play().catch(()=>{})),document.documentElement.classList.remove("menu-open"),a==null||a.focus()},l=(c,h)=>{let d=e[c];d&&(a=h||null,s.textContent=d.title||"",i.innerHTML=d.youtube?`<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(d.youtube)}?autoplay=1&rel=0" title="${(d.title||"Video").replace(/"/g,"")}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`:`<video src="${d.src}" ${d.poster?`poster="${d.poster}"`:""} controls autoplay playsinline preload="auto"></video>`,He(".vthumb video").forEach(u=>u.pause()),n.hidden=!1,document.documentElement.classList.add("menu-open"),zt(".vbox-x",n).focus())};zt(".vbox-x",n).addEventListener("click",o),n.addEventListener("click",c=>{c.target===n&&o()}),addEventListener("keydown",c=>{c.key==="Escape"&&!n.hidden&&o()}),fetch("assets/videos/videos.json",{cache:"no-cache"}).then(c=>c.ok?c.json():{}).catch(()=>({})).then(c=>{e=c||{};let h=[],d=new WeakMap;if(r.forEach(u=>{var T;let f=u.dataset.video,m=e[f];if(!m)return;let x=m.poster||(m.youtube?`https://i.ytimg.com/vi/${encodeURIComponent(m.youtube)}/hqdefault.jpg`:""),p=document.createElement("button");p.type="button",p.className="vthumb",p.setAttribute("aria-label","Ver video: "+(m.title||f)),p.innerHTML=`${x?`<img src="${x}" alt="" loading="lazy" decoding="async">`:""}<span class="vplay" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z"/></svg></span>${m.duration?`<span class="vdur">${m.duration}</span>`:""}`;let g=!!u.closest(".star-reel");g&&p.insertAdjacentHTML("beforeend",`<span class="vcap">${m.title||"Ver el video"}</span>`),p.addEventListener("click",()=>l(f,p)),m.src&&!_n&&!((T=navigator.connection)!=null&&T.saveData)&&h.push([p,m]);let v=u.closest("article");v&&!g&&!u.closest(".startup-card")?(v.insertBefore(p,v.firstChild),u.remove()):u.replaceWith(p)}),h.length&&"IntersectionObserver"in window){let u=new IntersectionObserver(f=>f.forEach(m=>{let x=m.target,p=d.get(x),g=zt("video",x);m.isIntersecting?(g||(g=document.createElement("video"),g.muted=!0,g.loop=!0,g.playsInline=!0,g.preload="auto",g.setAttribute("aria-hidden","true"),g.src=p.src,g.addEventListener("playing",()=>g.classList.add("on"),{once:!0}),x.insertBefore(g,x.firstChild.nextSibling)),g.play().catch(()=>{})):g&&g.pause()}),{rootMargin:"200px 0px"});h.forEach(([f,m])=>{d.set(f,m),u.observe(f)})}t.forEach(u=>{if(!e[u.dataset.play]){u.classList.contains("star-video")&&(u.hidden=!0);return}u.addEventListener("click",()=>l(u.dataset.play,u))}),He("[data-dur]").forEach(u=>{let f=e[u.dataset.dur];f&&f.duration&&(u.textContent=f.duration)})})}function Ub(){_n||!$g||He(".s007,.s013,.s014,.s071,.s142,.s207,.s217,.car-btn,.star-play,.burger").forEach(r=>{let t=fe.quickTo(r,"x",{duration:.4,ease:"power3.out"}),e=fe.quickTo(r,"y",{duration:.4,ease:"power3.out"});r.addEventListener("pointermove",n=>{let i=r.getBoundingClientRect();t((n.clientX-i.left-i.width/2)*.22),e((n.clientY-i.top-i.height/2)*.32)}),r.addEventListener("pointerleave",()=>{t(0),e(0)})})}var Zg=zt("#gl");Zg&&Eb(Zg);Rb();Db();Nb();Ab();var Jg=window.requestIdleCallback||(r=>setTimeout(r,120));Jg(()=>{Cb(),Jg(()=>{Pb(),Ib(),Lb(),Ub(),Yg(),Ht.addEventListener("refresh",Yg),Ht.refresh()},{timeout:1200})},{timeout:800});addEventListener("load",()=>Ht.refresh());})();
