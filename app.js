const imganim = document.querySelector('.animation2'); 
const img = document.querySelector('img');

imganim.addEventListener('click', ()=> {
    if (img.style.animationPlayState === 'paused') {
        img.style.animationPlayState = 'running';
    }else {
        img.style.animationPlayState = 'paused'
    }
    
})