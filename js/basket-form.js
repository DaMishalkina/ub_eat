const btnBasket = document.querySelector('#basket-button'),
    basketForm = document.querySelector('#basket-form'),
    pageBody = document.querySelector('body'),
    pageMain = document.querySelector('.page-main__wrapper');

const screenDarkTheme = function () {
        pageBody.classList.add('hide');
        pageMain.classList.add('hide');
};

const screenOrigin = function () {
    pageBody.classList.remove('hide');
    pageMain.classList.remove('hide');
}




btnBasket.onclick = function () {
    if(basketForm.style.visibility != 'visible') {
        basketForm.style.visibility = 'visible';
        screenDarkTheme();

    } else {
        basketForm.style.visibility = 'hidden';
        screenOrigin();
    }
};



document.onclick = function (event) {
    if (!$(event.target).closest(".basket-container,.basket-button, .log-in-button, .log-in__container, .log-button").length) {
        basketForm.style.visibility = 'hidden';
        logInForm.classList.remove('visible');
        screenOrigin();
    }
}





