import"./assets/modulepreload-polyfill-3cfb730f.js";const o=document.querySelector(".feedback-form");let a={email:"",message:""};function m(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){a=e;for(const t in e)e.hasOwnProperty(t)&&(o.elements[t].value=e[t])}}m();function l(e){const t=e.target.name,r=e.target.value;a[t]=r,localStorage.setItem("feedback-form-state",JSON.stringify(a))}function s(e){e.preventDefault();const t={email:a.email.trim(),message:a.message.trim()};if(t.email===""||t.message==="")return alert("Fill please all fields");console.log(a),localStorage.removeItem("feedback-form-state"),a.email="",a.message="",o.reset()}o.addEventListener("input",l);o.addEventListener("submit",s);
//# sourceMappingURL=commonHelpers2.js.map