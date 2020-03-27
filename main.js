const button = document.querySelector('a');
const next = document.querySelector('.next');
const article = document.querySelector('.congratulation');
const h1=document.querySelector('h1');
const main=document.querySelector('.main');
const wish=document.querySelector('.whish_list');
const end=document.querySelector('.the_end');

let buttonHeight = button.offsetHeight;
let buttonWidth = button.offsetWidth;
document.documentElement.style.setProperty("--bh", `${buttonHeight}px`);
document.documentElement.style.setProperty("--bw", `${buttonWidth}px`);

button.addEventListener("click",()=>{
    event.preventDefault();
    article.classList.toggle('fade');
    button.classList.toggle('fade');
    next.classList.toggle('fade');
    let i = 1;
    next.addEventListener("click", ()=>{
        event.preventDefault();
        if(i<3){
            article.style.transform = 'translate(0, '+-i*100+'vh)';
            i +=1;
        } else{
            next.classList.toggle('fade');
            article.style.transform = 'translate(0, '+-i*100+'vh)';
        }
    })
})