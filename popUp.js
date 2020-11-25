const butn = document.querySelector('button');
const popwrap = document.querySelector('.popup-wrapper');
const closeBut = document.querySelector('.popup-close');

butn.addEventListener('click', (e)=>{
    //console.log('buton clicked');
    popwrap.style.display = 'block';
});

closeBut.addEventListener('click',()=>{
    popwrap.style.display = 'none';
});

popwrap.addEventListener('click',()=>{
    popwrap.style.display = 'none';
});

