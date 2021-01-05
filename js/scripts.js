
let html = document.querySelector('html');
html.setAttribute('lang', 'ru');

let meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');

document.head.appendChild(meta);

let meta1 = document.createElement('meta');
meta1.setAttribute('name', 'author');
meta1.setAttribute('content', 'Egor Kostuck');

document.head.appendChild(meta1);
let title = document.createElement('title');
title.innerHTML = 'New document';

document.head.appendChild(title);

let script = document.querySelector('script');
script.setAttribute('defer','');
document.head.appendChild(script);


let style = document.createElement('style');
document.head.appendChild(style);


let div = document.createElement('div');
div.classList.add('conteiner');

let body1 = document.querySelector('body');
body1.appendChild(div);

let h2 = document.createElement('h2');
h2.innerHTML = 'Choose Your Option';
div.appendChild(h2);

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p.classList.add('conteiner_p');
div.appendChild(p);

let div2 = document.createElement('div');
div2.classList.add('tab');
div.appendChild(div2);

let divLeft = document.createElement('div');
divLeft.classList.add('left_tab');
div2.appendChild(divLeft);

let left_P = document.createElement('p');
left_P.innerHTML = 'freelancer';
divLeft.appendChild(left_P);

let left_h2 = document.createElement('h2');
left_h2.innerHTML = 'Initially </br> designed to';
divLeft.appendChild(left_h2);

let left_P2 = document.createElement('p');
left_P2.innerHTML = 'But I must explain to you how all this </br> mistaken idea of denouncing ';
left_P2.classList.add('left_p2');
divLeft.appendChild(left_P2);

let leftButton = document.createElement('button');
leftButton.innerHTML = 'start here';
leftButton.setAttribute('type', 'button');
divLeft.appendChild(leftButton);

let divLeftClone = divLeft.cloneNode(true);
divLeftClone.classList.remove('left_tab');
divLeftClone.classList.add('right_tab');

div2.appendChild(divLeftClone);

divLeftClone.removeChild(divLeftClone.querySelector('p:nth-child(1)'));
let rightP = document.createElement('p');
rightP.innerHTML = 'studio';

divLeftClone.insertBefore(rightP, divLeftClone.querySelector('h2'));


style.innerHTML = `
*{
    margin: 0;
    padding: 0;
}
    .conteiner {
        width: 80%;
        height: 100vh;
        max-width: 1280px;
        margin: auto;
    }
    .conteiner p,
    .conteiner h2 {
        text-align: center;
    }
    .conteiner h2{
        font-size: 36px;
        line-height: 46px;
        color: #212121;
        margin-bottom: 10px;
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
    }
    .conteiner p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
    }
    .conteiner_p{
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
        margin-bottom: 55px;
    }
    .tab {
        display:flex;
    }
    .left_tab,
    .right_tab {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .left_tab {
        background-color: #fff;
        border: 1px solid #E8E9ED;
        border-radius: 5px 0 0 5px;
        border-right: none;
        
    }
    .right_tab {
        background-color: #8F75BE;
        border-radius: 0 5px 5px 0;
    }
    .left_tab p:nth-child(1),
    .right_tab p:nth-child(1){
        text-transform: uppercase;
        margin-top: 81px;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 2.4px;
        margin-bottom: 19px;
    }
    .left_tab p:nth-child(1){
        color: #9FA3A7;
    }
    .right_tab p:nth-child(1){
        color: #FFC80A;
    }
    .left_tab h2,
    .right_tab h2{
        margin-bottom: 25px;
    }
    .right_tab h2{
        color: #fff;
    }
    .right_tab .left_p2{
        color: #fff;
    }
    .left_p2 {
        font-size: 12px;
        line-height: 22px;
        color: #9FA3A7;
        margin-bottom: 64px;
    }
    .left_tab button,
    .right_tab button {
        width: 147px;
        height:46px;
        border: 3px solid #FFC80A;
        border-radius: 23px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 93px;
        jastify-content: center;

    }
    .left_tab button{
        background-color: #fff;
    }
    .right_tab button {
        color: #fff;
        background-color:#8F75BE;
    }
`;