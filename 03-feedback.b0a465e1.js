!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(T,t),d?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function T(){var e=p();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&r?y(e):(r=o=void 0,u)}function w(){var e=p(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(T,t),y(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S,O={form:document.querySelector(".feedback-form"),textarea:document.querySelector('textarea[name="message"]'),email:document.querySelector('input[name = "email"]')},T="feedback-form-state",h={};O.form.addEventListener("submit",(function(e){return e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(T),console.log(h),h={}})),O.form.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(h))}),500)),(S=localStorage.getItem(T))&&((h=JSON.parse(S)).email&&(O.email.value=h.email),h.message&&(O.textarea.value=h.message))}();
//# sourceMappingURL=03-feedback.b0a465e1.js.map
