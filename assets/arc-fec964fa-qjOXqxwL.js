import{w as ln,c as F}from"./path-39bad7e2-aUcfwwLI.js";import{bx as rn,by as S,bz as w,bA as an,bB as y,aA as on,bC as J,bD as _,bE as un,bF as t,bG as sn,bH as tn,bI as fn}from"./index-Gx8-dbLX.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,I,D,v,A,G,r){var q=I-l,i=D-h,n=G-v,m=r-A,a=m*q-n*i;if(!(a*a<y))return a=(n*(h-A)-m*(l-v))/a,[l+a*q,h+a*i]}function U(l,h,I,D,v,A,G){var r=l-I,q=h-D,i=(G?A:-A)/J(r*r+q*q),n=i*q,m=-i*r,a=l+n,s=h+m,f=I+n,c=D+m,H=(a+f)/2,o=(s+c)/2,p=f-a,g=c-s,R=p*p+g*g,b=v-A,T=a*c-f*s,z=(g<0?-1:1)*J(fn(0,b*b*R-T*T)),B=(T*g-p*z)/R,C=(-T*p-g*z)/R,P=(T*g+p*z)/R,d=(-T*p+g*z)/R,x=B-H,e=C-o,u=P-H,O=d-o;return x*x+e*e>u*u+O*O&&(B=P,C=d),{cx:B,cy:C,x01:-n,y01:-m,x11:B*(v/b-1),y11:C*(v/b-1)}}function vn(){var l=cn,h=yn,I=F(0),D=null,v=gn,A=mn,G=pn,r=null,q=ln(i);function i(){var n,m,a=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=A.apply(this,arguments)-an,H=un(c-f),o=c>f;if(r||(r=n=q()),s<a&&(m=s,s=a,a=m),!(s>y))r.moveTo(0,0);else if(H>on-y)r.moveTo(s*S(f),s*w(f)),r.arc(0,0,s,f,c,!o),a>y&&(r.moveTo(a*S(c),a*w(c)),r.arc(0,0,a,c,f,o));else{var p=f,g=c,R=f,b=c,T=H,z=H,B=G.apply(this,arguments)/2,C=B>y&&(D?+D.apply(this,arguments):J(a*a+s*s)),P=_(un(s-a)/2,+I.apply(this,arguments)),d=P,x=P,e,u;if(C>y){var O=sn(C/a*w(B)),K=sn(C/s*w(B));(T-=O*2)>y?(O*=o?1:-1,R+=O,b-=O):(T=0,R=b=(f+c)/2),(z-=K*2)>y?(K*=o?1:-1,p+=K,g-=K):(z=0,p=g=(f+c)/2)}var $=s*S(p),j=s*w(p),L=a*S(b),M=a*w(b);if(P>y){var N=s*S(g),Q=s*w(g),V=a*S(R),W=a*w(R),E;if(H<rn)if(E=dn($,j,V,W,N,Q,L,M)){var X=$-E[0],Y=j-E[1],Z=N-E[0],k=Q-E[1],nn=1/w(tn((X*Z+Y*k)/(J(X*X+Y*Y)*J(Z*Z+k*k)))/2),en=J(E[0]*E[0]+E[1]*E[1]);d=_(P,(a-en)/(nn-1)),x=_(P,(s-en)/(nn+1))}else d=x=0}z>y?x>y?(e=U(V,W,$,j,s,x,o),u=U(N,Q,L,M,s,x,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<P?r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),r.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(r.moveTo($,j),r.arc(0,0,s,p,g,!o)):r.moveTo($,j),!(a>y)||!(T>y)?r.lineTo(L,M):d>y?(e=U(L,M,N,Q,a,-d,o),u=U($,j,V,W,a,-d,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<P?r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,a,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),r.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):r.arc(0,0,a,b,R,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[S(m)*n,w(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:F(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:F(+n),i):h},i.cornerRadius=function(n){return arguments.length?(I=typeof n=="function"?n:F(+n),i):I},i.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:F(+n),i):D},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:F(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:F(+n),i):A},i.padAngle=function(n){return arguments.length?(G=typeof n=="function"?n:F(+n),i):G},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as d};
