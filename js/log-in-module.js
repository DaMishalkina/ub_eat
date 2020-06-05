const logInBtn = document.querySelector('#log-in-button'),
    logInForm = document.querySelector('.log-in__container'),
    cancelButton = document.querySelector('.sign-up__cancel-button');



logInBtn.onclick = function () {
    if (basketForm.style.visibility == 'visible') {
        basketForm.style.visibility = 'hidden';
    }
    if(!logInForm.classList.contains("visible")) {
        screenDarkTheme();
        logInForm.classList.add('visible');
    } else {
        logInForm.classList.remove('visible');
        screenOrigin();
        }
};

cancelButton.onclick = function () {
    if(logInForm.classList.contains("visible")) {
        screenOrigin();
        logInForm.classList.remove('visible');
    }
};


