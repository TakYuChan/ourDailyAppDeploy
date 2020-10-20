(this.webpackJsonpourdailyapp=this.webpackJsonpourdailyapp||[]).push([[12],{307:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(4),c=t(3);function o(){var n=Object(i.a)(["\n  grid-area: accessAppWrapperBtn;\n  width: 100%;\n\n  max-width: 1000px;\n  justify-self: center;\n  align-self: flex-start;\n\n  margin-top: 3em;\n\n  @media (orientation: landscape) {\n    margin-bottom: 2em;\n  }\n"]);return o=function(){return n},n}function s(){var n=Object(i.a)(["\n  color: ",";\n  font-size: clamp(0.8rem, 1.5vw, 1.5rem);\n"]);return s=function(){return n},n}function m(){var n=Object(i.a)(["\n  grid-area: imageFrame;\n\n  align-self: flex-end;\n\n  display: grid;\n  place-items: center;\n\n  animation: "," 350ms;\n"]);return m=function(){return n},n}function u(){var n=Object(i.a)(['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  overflow: hidden;\n\n  font-size: clamp(0.8rem, 1.7vw, 1.7rem);\n\n  display: grid;\n  grid-template-rows: minmax(1em, 18em) minmax(1em, 1fr);\n  grid-template-columns: 1fr 1fr 1fr;\n\n  @media screen and (min-width: 680px) {\n    grid-template-rows: minmax(1em, 15em) minmax(1em, 1fr);\n  }\n\n  grid-template-areas:\n    ". imageFrame ."\n    "accessAppWrapperBtn accessAppWrapperBtn accessAppWrapperBtn";\n']);return u=function(){return n},n}function p(){var n=Object(i.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return p=function(){return n},n}var l={},d=Object(c.e)(p());l.MainPageContainer=c.d.div(u()),l.ImageFrameWrapper=c.d.div(m(),d),l.username=c.d.h2(s(),(function(n){return n.theme.mainPage.username})),l.AccessAppBtnWrapper=c.d.div(o());var f=l,g=t(30),v=t(71),b=t(112);function h(){var n=Object(i.a)(["\n  display: grid;\n  width: 100%;\n  height: 100%;\n  padding: 0 8%;\n\n  font-size: clamp(0.7rem, 1vw, 1rem);\n  --btn-size: 7em;\n\n  justify-content: center;\n\n  grid-template-columns: repeat(auto-fit, var(--btn-size));\n  grid-auto-rows: var(--btn-size);\n  row-gap: 1em;\n  column-gap: 0.6em;\n"]);return h=function(){return n},n}var x={};x.MainPageAccessAppWrapper=c.d.div(h());var j=x;function w(){var n=Object(i.a)(["\n  color: ",";\n  text-decoration: none;\n"]);return w=function(){return n},n}function O(){var n=Object(i.a)(["\n  --img-size: 5em;\n\n  border-radius: 100%;\n  object-fit: cover;\n  height: var(--img-size);\n  width: var(--img-size);\n\n  &:hover {\n    border: 1px solid white;\n    box-shadow: 0 0 10px rgba(255, 255, 255, 1);\n  }\n"]);return O=function(){return n},n}function E(){var n=Object(i.a)(["\n  cursor: pointer;\n\n  display: grid;\n  place-items: center;\n\n  font-size: 0.8em;\n  font-weight: 700;\n\n  height: 100%;\n  width: 100%;\n\n  animation: 600ms "," backwards ","s;\n  -webkit-perspective: 1000;\n  -webkit-backface-visibility: hidden;\n"]);return E=function(){return n},n}function y(){var n=Object(i.a)(["\n0% {\n  transform: scale(.8);\n  opacity: 0;\n}\n100% {\n  transform: scale(1);\n  opacity: 1;\n}\n"]);return y=function(){return n},n}var A={},P=Object(c.e)(y());A.ApplicationItemContainer=c.d.div(E(),P,(function(n){return n.stagger})),A.Image=c.d.img(O()),A.AppLinkText=c.d.span(w(),(function(n){return n.theme.mainPage.appAccessBtnText}));var z=A,k=t(41),I=function(n){var e=n.app,t=n.index,r=e.name,i=e.route,c=e.imageUrl,o=e.border;return a.a.createElement(k.b,{to:"/".concat(i),className:"link"},a.a.createElement(z.ApplicationItemContainer,{className:"application-item",stagger:.1*(t+1)},a.a.createElement(z.Image,{src:"".concat(c,".jpeg"),loading:"lazy",className:"".concat(o?"border":"")}),a.a.createElement(z.AppLinkText,{className:"link-text"},r)))},S=t(8),W=function(n){var e=n.SpinnerComponent,t=n.children,r=n.isLoading;Object(S.a)(n,["SpinnerComponent","children","isLoading"]);return r?a.a.createElement(e,null):t()};function C(){var n=Object(i.a)(["\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n\n  background-color: ",";\n\n  border-radius: 100%;\n  animation: "," 1s infinite ease-in-out;\n"]);return C=function(){return n},n}function T(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return T=function(){return n},n}function B(){var n=Object(i.a)(["\n0% { \n  transform: scale(0);\n} \n100% {\n  transform: scale(1.0);\n  opacity: 0;\n}"]);return B=function(){return n},n}var F={},N=Object(c.e)(B());F.SpinnerOverlay=c.d.div(T()),F.SpinnerContainer=c.d.div(C(),(function(n){return n.theme.mainPage.spinner_mainPageAccessAppWrapper}),N);var _=F,L=function(){return a.a.createElement(_.SpinnerOverlay,null,a.a.createElement(_.SpinnerContainer,null))},M=function(){var n=Object(g.d)((function(n){return n.app.accessAppBtns}));return a.a.createElement(j.MainPageAccessAppWrapper,{className:"application-container"},a.a.createElement(W,{SpinnerComponent:L,isLoading:!n},(function(){return n.map((function(n,e){return a.a.createElement(I,{key:e,app:n,index:e})}))})))};function J(){var n=Object(i.a)(["\n  color: ",";\n  font-size: clamp(0.8rem, 1.5vw, 1.5rem);\n"]);return J=function(){return n},n}function U(){var n=Object(i.a)(["\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  transform: translate(-50%, 10%);\n  font-size: 0.7em;\n  font-weight: 300;\n  opacity: 0;\n  pointer-events: none;\n\n  transition: opacity 250ms ease-in-out, transform 250ms;\n\n  color: ",";\n"]);return U=function(){return n},n}function q(){var n=Object(i.a)(["\n  object-fit: cover;\n  border-radius: 100%;\n\n  cursor: pointer;\n\n  transition: filter 250ms ease-in-out;\n\n  &:hover {\n    filter: blur(3px) brightness(0.5);\n  }\n  &:hover + .styled_editProfileSpan {\n    opacity: 1;\n    transform: translate(-50%, -20%);\n  }\n"]);return q=function(){return n},n}function D(){var n=Object(i.a)(["\n  font-size: clamp(0.8rem, 1.5vw, 1.5rem);\n  --size: 10em;\n  width: var(--size);\n  height: var(--size);\n  border: 5px solid white;\n\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n\n  position: relative;\n\n  ","\n\n  margin-bottom: 1em;\n"]);return D=function(){return n},n}var G={};G.ImageFrame=c.d.div(D(),(function(n){return n.styled_halo&&"box-shadow: 0 0 10px rgba(255, 255, 255, 1);"})),G.Img=c.d.img(q()),G.EditProfileText=c.d.span(U(),(function(n){return n.theme.mainPage.editProfileText})),G.ExtraImgSpan=c.d.span(J(),(function(n){return n.theme.mainPage.username}));var H=G,K=function(n){var e=n.children,t=n.src,r=n.halo,i=n.withExtraText,c=Object(S.a)(n,["children","src","halo","withExtraText"]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(H.ImageFrame,Object.assign({styled_halo:r},c),a.a.createElement(H.Img,{src:t}),a.a.createElement(H.EditProfileText,{className:"styled_editProfileSpan"},"Edit Profile")),i&&a.a.createElement(H.ExtraImgSpan,null,e))};K.defaultProps={withExtraText:!1,halo:!1};var Q=K,R=t(287);e.default=a.a.memo((function(){var n=Object(g.c)(),e=Object(b.a)(),t=Object(g.d)((function(n){return n.auth_P.user})),i=Object(g.d)((function(n){return n.auth_P.userAvatar}));return Object(r.useEffect)((function(){n(Object(v.a)())}),[n]),a.a.createElement(f.MainPageContainer,{className:"MainPage gs-page"},a.a.createElement(f.ImageFrameWrapper,null,a.a.createElement(Q,{src:"data:image/jpg;base64,".concat(Object(R.a)(i)),halo:!0,withExtraText:!0,onClick:function(){e.push("/settings")}},t.name)),a.a.createElement(f.AccessAppBtnWrapper,null,a.a.createElement(M,null)))}))}}]);
//# sourceMappingURL=12.05b7a66c.chunk.js.map