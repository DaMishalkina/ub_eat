document.querySelector('#text-to-find').oninput = function () {
    let val = this.value.trim();
    let searchItems = document.querySelectorAll('#searchable-info li');
    if( val != ''){
        searchItems.forEach(function (elem) {
            if(elem.innerText.search(val) == -1){
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;

            }
        });
    }

    else {
        searchItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });

    }


}

/*let textInput = document.getElementById('text-to-find'),
    clearBtn = document.getElementById('search-form-clear');

textInput.onkeyup = function() {
    clearBtn.style.visibility = (this.value.length) ? "visible" : "hidden";
};
clearBtn.onclick = function() {
    this.style.visibility = "hidden";
    textInput.value = "";

};*/
