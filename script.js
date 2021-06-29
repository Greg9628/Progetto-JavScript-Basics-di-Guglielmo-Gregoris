const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus')

const counter = document.querySelector('#counter');
minus.addEventListener('click', () => {
    counter.innerHTML--;
});

plus.addEventListener('click', () => {
    counter.innerHTML++;
});



