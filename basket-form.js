const btnBasket = document.querySelector('#basket-button'),
    basketForm = document.querySelector('#basket-form');

// const myFunc = function () {
//     if(basketForm.style.visibility != 'visible') {
//         basketForm.style.visibility = 'visible';
//         document.querySelector('body').classList.add('hide');
//     } else {
//         basketForm.style.visibility = 'hidden';
//         document.querySelector('body').classList.remove('hide');
//
//     }
// };
//
// btnBasket.addEventListener('click', myFunc);

btnBasket.onclick = function () {
    if(basketForm.style.visibility != 'visible') {
        basketForm.style.visibility = 'visible';
        document.querySelector('body').classList.add('hide');
    } else {
        basketForm.style.visibility = 'hidden';
        document.querySelector('body').classList.remove('hide');

    }
};



document.onclick = function (event) {
    if (!$(event.target).closest(".basket-container,.basket-button").length) {
        basketForm.style.visibility = 'hidden';
        document.querySelector('body').classList.remove('hide');
    }
}





