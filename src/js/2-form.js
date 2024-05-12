let formData = {
    email: "",
    message: ""
}

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
let savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

form.addEventListener("input", handleInput);

if (savedForm) {
    formData = savedForm;
}

function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleInput(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveFormData();
} 
   
form.email.value = formData.email;
form.message.value = formData.message;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    Object.assign(formData, { email: '', message: '' });
});
