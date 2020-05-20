document.querySelector('#text-to-find').oninput = function () { /*Получаем данные, введённые пользователем*/
    let val = this.value.trim(); /*Удаляем пробелы в данных от пользователя*/
    val = val.toLowerCase();
    let clearBtn = document.getElementById('search-form-clear');
    let searchItems = document.querySelectorAll('#searchable-info li'); /*Задаём область поиска*/
    if( val != ''){
        clearBtn.style.visibility = 'visible';
        searchItems.forEach(function (elem) { /*Пишем функцию для каждого элемента в области поиска*/
            if(elem.innerText.toLowerCase().search(val) == -1){
                elem.classList.add('hide'); /*Прячем все элементы, в которых нет свопадений с запросом пользователя*/
            }
            else {
                elem.classList.remove('hide'); /*Если в элементе есть текст, совпадающий с текстовым запросом польователя, делаем его снова видимым*/
                // let str = elem.innerText;

            }
        });

        clearBtn.onclick = function() {
            document.querySelector('#text-to-find').value ='';
            clearBtn.style.visibility = 'hidden';
            searchItems.forEach(function (elem) { /*Если от пользователся не получено ничего, то все элементы так и остаются видимыми*/
                elem.classList.remove('hide');
            });

        }
    }

    else {
        clearBtn.style.visibility = 'hidden';
        searchItems.forEach(function (elem) { /*Если от пользователся не получено ничего, то все элементы так и остаются видимыми*/
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
