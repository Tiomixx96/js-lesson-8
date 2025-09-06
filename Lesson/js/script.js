// for (let i = 0; i < document.body.childNodes.length; i++) {
//   console.log(document.body.childNodes[i]);
// }

// let elem = document.getElementById("elem");

// elem.style.background = "red";

// ID Має бути уникальним і одним.
// Метод getElemntById використовуємо лише з документ

// let elements = document.querySelectorAll("ul>li:last-child");

// for (element of elements) {
//   console.log(element);
// }

// querySelector Обирає тільки 1 перший доступний елемент
// let element = document.querySelector("li");
// console.log(element);

// let element = document.getElementsByTagName("div");
// console.log(element);

// let textHidden = document.getElementById("textHidden");
// textHidden.hidden = true;

// let message = document.getElementById("message");
// console.log(message.value); // отримуємо сам текст

// let text = document.querySelector(".text-message");
// console.log(text.textContent);

// let text = document.querySelector(".text-message");
// text.textContent = "Hello Valera";

// let btn = document.querySelector(".button");
// btn.style.backgroundColor = "red";

// let text = document.querySelector("#p_text");
// console.log(text.classList);
// console.log(text.classList.contains("red"));
// text.classList.remove("red");
// console.log(text.classList);
// console.log(text.classList.contains("red"));
// text.classList.add("new-class");

// let image = document.querySelector(".image");
// console.log(image.hasAttribute("src"));
// console.log(image.getAttribute("src"));
// image.removeAttribute()

// ------------- Ми можемо не лише керувати, а і створювати----------------

// const item = document.createElement("a");
// item.href = "#";
// item.classList.add("btn");
// item.textContent = "3";
// const nav = document.querySelector(".nav");
// nav.appendChild(item);

// const heading = document.createElement("h1");
// heading.textContent = "Hello";

// const container = document.querySelector(".container");
// container.insertBefore(heading, nav);

// nav.removeChild(item); // старий метод
// item.remove() - більш новий

// const text = document.querySelector(".text");
// const parent = document.querySelector(".parent");

// const clone = text.cloneNode(true);

// parent.appendChild(clone);

// Поганий метод. Перерендює всю сторінку
// const container = document.querySelector(".container");
// const text = `<p>Sorry</p>`;
// container.innerHTML += text;

const list = document.querySelector("#list");
list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
list.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>");
list.insertAdjacentHTML("beforeend", "<li>beforeend</li>");
list.insertAdjacentHTML("afterend", "<p>afterend</p>");
