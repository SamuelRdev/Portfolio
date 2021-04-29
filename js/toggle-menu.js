let menu = document.querySelector('.menu'),
isOpened = false;
menu.addEventListener('click', function(){
    if(isOpened){
        menu.classList.remove('opened');
    } else{
        menu.classList.add('opened');
    }
    isOpened = !isOpened;
});