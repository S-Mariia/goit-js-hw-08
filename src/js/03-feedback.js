var throttle = require('lodash.throttle');

const RESPOND = "feedback-form-state";
const feedbackObj = {};

const form = document.querySelector(".feedback-form");

if (localStorage.getItem(RESPOND) !== null) {
    const feedbackData = JSON.parse(localStorage.getItem(RESPOND));
    
    form.elements.email.value = feedbackData.email;
    form.elements.message.value = feedbackData.message;
    feedbackObj.email = feedbackData.email;
    feedbackObj.message = feedbackData.message;
}

form.addEventListener('input', throttle(onInputUpdateLocalStorage,500));
form.addEventListener("submit", onFormSubmit);

function onInputUpdateLocalStorage(evt) {
    const { email, message } = evt.target.closest(".feedback-form").elements;
    feedbackObj.email = email.value;
    feedbackObj.message = message.value;

    localStorage.setItem(RESPOND, JSON.stringify(feedbackObj));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    
    const { email, message } = evt.currentTarget.elements;

    if (email.value !== "" && message.value !== "") { 
        console.log(feedbackObj);
    
        localStorage.removeItem(RESPOND);
        evt.currentTarget.reset();
    } else {
        alert("Please fill in all fields");
    }  
}

