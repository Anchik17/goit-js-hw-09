import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""};const l="feedback-form-state",t=document.querySelector(".feedback-form");let s=JSON.parse(localStorage.getItem(l));t.addEventListener("input",i);s&&(e=s);function o(){localStorage.setItem(l,JSON.stringify(e))}function i(a){const{name:m,value:r}=a.target;e[m]=r.trim(),o()}t.email.value=e.email;t.message.value=e.message;t.addEventListener("submit",function(a){if(a.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),t.reset(),Object.assign(e,{email:"",message:""})});
//# sourceMappingURL=commonHelpers2.js.map
