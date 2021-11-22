window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    window.addEventListener('scroll', () => {
        if(window.pageYOffset == 0){
            document.body.classList.remove('scrolled');
        } else {
            document.body.classList.add('scrolled');
        }
    })

    let pageImages = document.getElementsByTagName('img');
    for(let i = 0; i < pageImages.length; i++){
        pageImages[i].setAttribute('draggable', false);
    }
})