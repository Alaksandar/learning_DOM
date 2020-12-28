// Напишите код, как получить h1, ul, коллекцию элементов li, 
// коллекцию четных элементов li, коллекцию нечетных элементов li 
// (для этого вспоминаем odd, even в css).

let h1 = document.querySelector("h1");
let ul = document.querySelector("ul.users-list");
let li = ul.querySelectorAll("li");
let li_even = ul.querySelectorAll("li:nth-child(even)");
let li_odd = ul.querySelectorAll("li:nth-child(odd)");


console.log(h1);
console.log(ul);
console.log(li);
console.log(li_even);
console.log(li_odd);

//     Задание со звездочкой. 
// Для всех нечетных переключение цвета с красного на синий каждые две 
// секунды (вначале красный через 2 секунды синий, потом через 2 секунды 
// опять красный и т.д.). А для нечентных элементов переключение с синего 
// на красный цвет каждые две секунды(вначале синий 2 секунды через 
// 2 секунды красный, потом через 2 секунды опять синий и т.д.).
//     Для этого использовать setInterval.


for (let el of li_even) {
    el.classList.toggle("even");
    let elStyles = getComputedStyle(el);
    setInterval(() => {
        el.classList.toggle("odd");
        el.classList.toggle("even");
    }, 2000)
}

for (let el of li_odd) {
    el.classList.toggle("odd");
    let elStyles = getComputedStyle(el);
    setInterval(() => {
        el.classList.toggle("even");
        el.classList.toggle("odd");
    }, 2000)
}



// //      h1: переключение цвета

// h1.classList.toggle("odd");
// let h1Styles = getComputedStyle(h1);
// let colorChange = setInterval(() => {
//     h1.classList.toggle("odd"); h1.classList.toggle("even");
// }, 2000);

