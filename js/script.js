// let elements = document.getElementsByClassName('element');
// for(let i = 0; i < elements.length; i++) {
//   let elem = elements[i];
//   elem.textContent = elem.textContent + " " + (i + 1);
// }

// let elem = document.querySelector('.container');
// elem.innerHTML = '<strong>Hello</strong> div'

// let elems = document.querySelectorAll('div.elem');
// for(let item of elems) {
//   item.innerHTML = item.innerHTML + ' ✔'
// }
// console.log(elems);

// let elem = document.querySelector('.block');
// elem.style.color = 'tomato';
// elem.style.backgroundColor = 'rgba(20,0,0, .5';

let title = document.createElement('h1');
title.textContent = 'Новый элемент';
title.style.color = 'tomato';

let wrap = document.querySelector('#wrap');
wrap.append(title);

title = document.createElement('h3');
title.textContent = 'Ещё Новый элемент';
title.style.color = 'orange ';

wrap.append(title);