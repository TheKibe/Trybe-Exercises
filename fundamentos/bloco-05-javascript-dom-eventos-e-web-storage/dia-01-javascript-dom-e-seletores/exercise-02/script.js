document.querySelector('header').style.backgroundColor = 'rgb(0, 176, 105)';

document.querySelector('.emergency-tasks').style.backgroundColor = 'rgb(222, 78, 78)';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'rgb(66, 147, 158)';

const yellowLineBar = document.querySelectorAll('h3');

for(let i = 0; i < 2; i +=1) {
    yellowLineBar[i].style.backgroundColor = 'rgb(244, 206, 21)';
}

for(let i = 2; i < 4; i +=1) {
    yellowLineBar[i].style.backgroundColor = 'rgb(24, 170, 224)';
}

document.querySelector('footer').style.backgroundColor = 'rgb(0, 53, 51)';