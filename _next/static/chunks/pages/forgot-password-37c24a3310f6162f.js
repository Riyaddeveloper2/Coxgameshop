(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{8919:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return r(3539)}])},4950:function(e,t,r){"use strict";var n=r(5893),a=r(155),i=r(7516),o=r(3750);t.Z=function(e){var t=e.type,r=void 0===t?"warning":t,s=e.title,l=void 0===s?"Alert title":s,c=e.action,u=e.className,d="error"===r?i.Cw1:"success"===r?o.nRB:a.SZZ;return(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2.5 items-stretch justify-between rounded-md overflow-hidden p-1.5 border _alert ".concat(r," ").concat(u||""),children:[(0,n.jsxs)("div",{className:"flex items-stretch flex-grow",children:[(0,n.jsx)("div",{className:"min-h-[32px] min-w-[32px] max-h-[50] max-w-[50px] flex-shrink-0 rounded-md overflow-hidden p-1.5 _flex_center text-white _alert_icon_wrapper",style:{aspectRatio:"1/1"},children:(0,n.jsx)(d,{className:"w-full h-full"})}),(0,n.jsx)("div",{className:"px-2.5 flex items-center",children:(0,n.jsx)("h6",{className:"_h6 font-medium text-sm",children:l})})]}),c&&(0,n.jsx)("div",{className:"flex flex-shrink-0 justify-end sm:justify-start items-center",children:c})]})}},9264:function(e,t,r){"use strict";var n=r(5893),a=r(2175);t.Z=function(e){var t=e.name,r=e.showError,i=e.msg,o=(0,a.u6)(),s=o.errors,l=o.touched;return r||s[t]&&l[t]?(0,n.jsxs)("div",{className:"flex items-center space-x-1.5 text-red-600 text-xs mt-1.5",children:[(0,n.jsx)("div",{children:(0,n.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})})}),(0,n.jsx)("span",{children:i||s[t]})]}):null}},2082:function(e,t,r){"use strict";var n=r(5893),a=r(2175),i=r(9264);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}t.Z=function(e){var t=e.name,r=(e.className,e.type),o=void 0===r?"text":r,u=e.disabledErrorMessage,d=l(e,["name","className","type","disabledErrorMessage"]),p=(0,a.u6)(),f=p.errors,h=p.touched;if(!t)throw new Error("name is required");var m=f[t]&&h[t];return(0,n.jsxs)("div",{children:[(0,n.jsx)(a.gN,s({name:t,type:o},d,{isError:m,component:c})),!u&&(0,n.jsx)(i.Z,{name:t})]})};var c=function(e){var t=e.field,r=(e.form,e.className),a=e.label,i=e.isError,o=e.isTextArea,c=l(e,["field","form","className","label","isError","isTextArea"]);return(0,n.jsxs)("label",{className:"inline-block w-full",children:[a&&(0,n.jsx)("label",{htmlFor:t.name,className:"_subtitle2 mb-1.5 block",children:a}),o?(0,n.jsx)("textarea",s({id:t.name,className:"_input ".concat(r||""," ").concat(i?"!border-red-500":"")},t,c)):(0,n.jsx)("input",s({id:t.name,className:"_input ".concat(r||""," ").concat(i?"!border-red-500":"")},t,c))]})}},3539:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(2175),i=r(9008),o=r(1163),s=r(7294),l=r(4231),c=r(3513),u=r(4950),d=r(2077),p=r(2082),f=r(4811),h=r(7537),m=r(8604),b=r(4779),x=r(5920),y=r.n(x),v=r(4155),g={identity:""},w=l.Ry().shape({identity:l.Z_().required().label("Email or phone").trim()});t.default=function(){var e=(0,s.useState)(null),t=e[0],r=e[1],l=(0,s.useState)(""),x=l[0],k=l[1],_=function(){console.log("Done!!!!")},j=function(e){r(null),k(e)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default,{children:(0,n.jsxs)("title",{children:["Forgot password ",f.OA]})}),(0,n.jsx)("section",{className:"container flex-grow _flex_center",children:(0,n.jsxs)("div",{className:"w-full sm:w-[380px] relative _form_wrapper",children:[(0,n.jsx)("h3",{className:"_h3",children:"Forgot Password?"}),(0,n.jsxs)("div",{className:"mt-5",children:[t&&(0,n.jsx)(u.Z,{type:"error",title:t,className:"mb-4"}),(0,n.jsx)(a.J9,{initialValues:g,validationSchema:w,onSubmit:function(e,t){var n=t.setSubmitting;if(r(null),!x)return r(["Complete Recapcha"]),void n(!1);c.ZP.post("/reset-password-direct",{identity:e.identity,captcha_token:x}).then((function(e){(0,b.KY)(f.E1,e.data.data),o.default.push(h.Z.verifyOtp.name)})).catch((function(e){n(!1),r((0,m.FU)(e))}))},children:function(e){var t=e.isSubmitting,r=e.handleSubmit;return(0,n.jsxs)("form",{className:"flex flex-col gap-4",onSubmit:r,children:[(0,n.jsx)(p.Z,{name:"identity",label:"Email or Phone",placeholder:"Enter email or phone"}),(0,n.jsx)(y(),{sitekey:v.env.NEXT_PUBLIC_RECAPTCHA_KEY,render:"explicit",verifyCallback:j,onloadCallback:_}),(0,n.jsx)(d.Z,{loading:t,type:"submit",text:"Find account",className:"w-full"})]})}})]})]})})]})}},5920:function(e,t,r){var n;e.exports=(n=r(7294),function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(6),c=n(l),u=n(r(4)),d={className:u.default.string,onloadCallbackName:u.default.string,elementID:u.default.string,onloadCallback:u.default.func,verifyCallback:u.default.func,expiredCallback:u.default.func,render:u.default.oneOf(["onload","explicit"]),sitekey:u.default.string,theme:u.default.oneOf(["light","dark"]),type:u.default.string,verifyCallbackName:u.default.string,expiredCallbackName:u.default.string,size:u.default.oneOf(["invisible","compact","normal"]),tabindex:u.default.string,hl:u.default.string,badge:u.default.oneOf(["bottomright","bottomleft","inline"])},p={elementID:"g-recaptcha",className:"g-recaptcha",onloadCallback:void 0,onloadCallbackName:"onloadCallback",verifyCallback:void 0,verifyCallbackName:"verifyCallback",expiredCallback:void 0,expiredCallbackName:"expiredCallback",render:"onload",theme:"light",type:"image",size:"normal",tabindex:"0",hl:"en",badge:"bottomright"},f=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.grecaptcha&&"function"==typeof window.grecaptcha.render},h=void 0,m=function(e){function t(e){a(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._renderGrecaptcha=r._renderGrecaptcha.bind(r),r.reset=r.reset.bind(r),r.state={ready:f(),widget:null},r.state.ready||"undefined"==typeof window||(h=setInterval(r._updateReadyState.bind(r),1e3)),r}return o(t,e),s(t,[{key:"componentDidMount",value:function(){this.state.ready&&this._renderGrecaptcha()}},{key:"componentDidUpdate",value:function(e,t){var r=this.props,n=r.render,a=r.onloadCallback;"explicit"===n&&a&&this.state.ready&&!t.ready&&this._renderGrecaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(h)}},{key:"reset",value:function(){var e=this.state,t=e.ready,r=e.widget;t&&null!==r&&grecaptcha.reset(r)}},{key:"execute",value:function(){var e=this.state,t=e.ready,r=e.widget;t&&null!==r&&grecaptcha.execute(r)}},{key:"_updateReadyState",value:function(){f()&&(this.setState({ready:!0}),clearInterval(h))}},{key:"_renderGrecaptcha",value:function(){this.state.widget=grecaptcha.render(this.props.elementID,{sitekey:this.props.sitekey,callback:this.props.verifyCallback?this.props.verifyCallback:void 0,theme:this.props.theme,type:this.props.type,size:this.props.size,tabindex:this.props.tabindex,hl:this.props.hl,badge:this.props.badge,"expired-callback":this.props.expiredCallback?this.props.expiredCallback:void 0}),this.props.onloadCallback&&this.props.onloadCallback()}},{key:"render",value:function(){return"explicit"===this.props.render&&this.props.onloadCallback?c.default.createElement("div",{id:this.props.elementID,"data-onloadcallbackname":this.props.onloadCallbackName,"data-verifycallbackname":this.props.verifyCallbackName}):c.default.createElement("div",{id:this.props.elementID,className:this.props.className,"data-sitekey":this.props.sitekey,"data-theme":this.props.theme,"data-type":this.props.type,"data-size":this.props.size,"data-badge":this.props.badge,"data-tabindex":this.props.tabindex})}}]),t}(l.Component);t.default=m,m.propTypes=d,m.defaultProps=p,e.exports=t.default},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n,i,o,s,l){if(a(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,i,o,s,l],d=0;(c=new Error(t.replace(/%s/g,(function(){return u[d++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}var a=function(e){};e.exports=n},function(e,t,r){"use strict";var n=r(1),a=r(2),i=r(5);e.exports=function(){function e(e,t,r,n,o,s){s!==i&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){e.exports=r(3)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(e,t){e.exports=n}]))}},function(e){e.O(0,[141,774,888,179],(function(){return t=8919,e(e.s=t);var t}));var t=e.O();_N_E=t}]);