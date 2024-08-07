const form = document.querySelector(".feedback-form");
let formData = {email: "", message: ""};

function formFile() {
    const formDataFile = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (formDataFile === null) {
        return;
    }

    formData = formDataFile;

    for (const key in formDataFile) {
        if (formDataFile.hasOwnProperty(key)) {
            form.elements[key].value = formDataFile[key];
        }
    }
};

formFile();

function formFileInput(event) {
    const el = event.target.name;
    const formEl = event.target.value;

    formData[el] = formEl;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function formFileSubmit(event) {
    event.preventDefault();
    
    const formLogin = {
        email: formData.email.trim(),
        message: formData.message.trim(),
    };
    
    if (formLogin.email === "" || formLogin.message === "") {
        return alert("Fill please all fields");
    }
    
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.reset();
};

form.addEventListener("input", formFileInput);
form.addEventListener("submit", formFileSubmit);
