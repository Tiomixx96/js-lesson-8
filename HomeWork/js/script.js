// let elem = document.querySelector("[data-widget-name]");
// console.log(elem);
// let value = elem.getAttribute("data-widget-name");
// console.log(value);

// console.log(table);

// Напишіть код, щоб зафарбувати всі діагональні клітинки таблиці червоним кольором.
// Вам потрібно буде отримати всі діагоналі <td> з <table> і розфарбувати їх за допомогою коду:

// let table = document.body.firstElementChild;
// for (let i = 0; i < table.rows.length; i++) {
//   for (let j = 0; j < table.rows.length; j++) {
//     if (i === j) {
//       let td = table.rows[i].cells[j];
//       td.style.backgroundColor = "red";
//     }
//   }
// }

// ------------------------ Методи вставки
// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML =
//   "<strong>Hello there!</strong> You have read an important message";
// let textNode = document.createTextNode(`It's me!`);

// document.body.append(div);

// ---------------------------- 3 --------------
// ol.before("before"); // вставити рядок "before" перед <ol>
// ol.after("after"); // вставити рядок "after" після <ol>

// let liFirst = document.createElement("li");
// liFirst.innerHTML = "prepend";
// ol.prepend(liFirst);
// let liLast = document.createElement("li");
// liLast.innerHTML = "append";
// console.log(liLast);
// ol.append(liLast);

// _-------------------------_
// "beforebegin" – вставити html безпосередньо перед elem,
// "afterbegin" – вставити html в elem, на початку,
// "beforeend" – вставити html в elem, в кінці,
// "afterend" – вставити html безпосередньо після elem.

// let diva = document.querySelector("#div");
// diva.insertAdjacentHTML("beforebegin", "<p>Hello this is text beforebegin</p>");
// diva.insertAdjacentHTML("afterend", "<p>Hello this is text after begin</p>");
// _-------------------------_

// Видалення вузлів

// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>Hello there! </strong> You`ve read this message";

// document.body.append(div);
// setTimeout(() => div.remove(), 1000);

// second.after(first); // взяти #second та після нього вставити #first

// Клонування вузлів: cloneNode
// let diva = document.querySelector(".alert");
// console.log(diva);
// let diva2 = diva.cloneNode(true);
// diva2.querySelector("Strong").innerHTML = "Bye there!";
// diva.after(diva2);

// function getListContent() {
//   let fragment = new DocumentFragment();

//   for (let i = 1; i <= 3; i++) {
//     let li = document.createElement("li");
//     li.append(i);
//     fragment.append(li);
//   }
//   return fragment;
// }

// ul.append(getListContent());

// let elem1 = document.querySelector("ol");

// function clear(elem) {
//   while (elem.firstChild) {
//     elem.firstChild.remove();
//   }
// }

// clear(elem1);

// Створіть список

// let list = document.createElement("ul");
// document.body.append(list);

// while (true) {
//   let input = prompt("Enter some items");

//   if (!input) {
//     break;
//   }
//   let li = document.createElement("li");
//   li.textContent = input;
//   list.append(li);
// }

// Створіть дерево з об'єкту
// let data = {
//   Риба: {
//     форель: {},
//     лосось: {},
//   },

//   Дерево: {
//     Величезні: {
//       секвойя: {},
//       дуб: {},
//     },
//     Квітучі: {
//       яблуня: {},
//       магнолія: {},
//     },
//   },
// };

// let div = document.querySelector("#div");

// ---------------Мій ХАРДКОД!!!!!-------------------------------
// function createTree(container, data) {
//   let ul = document.createElement("ul");
//   container.append(ul);
//   for (const key in data) {
//     let li = document.createElement("li");
//     li.textContent = key;
//     let firstChild = container.firstChild;
//     firstChild.append(li);
//     let check = data[`${key}`];
//     if (typeof check === "object") {
//       let ul = document.createElement("ul");
//       li.append(ul);
//       for (const key in check) {
//         let li2 = document.createElement("li");
//         li2.textContent = key;
//         ul.append(li2);
//         console.log(key);
//         let check2 = check[`${key}`];
//         if (typeof check2 === "object" && check2 !== null) {
//           let ul2 = document.createElement("ul");
//           li2.append(ul2);
//           for (const key in check2) {
//             let li3 = document.createElement("li");
//             li3.textContent = key;
//             ul2.append(li3);
//             console.log(key);
//           }
//         }
//       }
//     }
//   }
// }
// ----------------------------------------------

// function createTree(container, obj) {
//   if (!Object.keys(obj).length) return;

//   let ul = document.createElement("ul");

//   // проходимо по ключах
//   for (let key in obj) {
//     let li = document.createElement("li");
//     li.textContent = key;

//     if (Object.keys(obj[key]).length) {
//       createTree(li, obj[key]);
//     }
//     ul.append(li);
//   }
//   container.append(ul);
// }

// createTree(div, data);

// _---------------------------------------_
// let lis = document.getElementsByTagName("li");

// for (let li of lis) {
//   let descendantsCount = li.getElementsByTagName("li").length;
//   if (descendantsCount > 0) {
//     li.firstChild.data += " [" + descendantsCount + "]";
//   }
// }
// _---------------------------------------_

// ==================== Календар ЇБУЧИЙ!==============================
// let table =
//   "<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>НД</th></tr>";

// let div = document.querySelector("div");
// div.innerHTML = table;

// function createCalendar(year, month) {
//   let d = new Date(year, month - 1, 1);

//   while (d.getMonth() === month - 1) {
//     let day = d.getDate();
//     let weekDay = (d.getDay() + 6) % 7;

//     if (day == 1 && weekDay >= 0) {
//       for (let i = 0; i < weekDay; i++) {
//         table += "<td></td>";
//       }
//     }
//     if (weekDay == 0) {
//       table += `<tr>`;
//     }
//     table += `<td>${day}</td>`;
//     if (weekDay == 6) {
//       table += `</tr>`;
//     }
//     d.setDate(d.getDate() + 1);
//   }

//   let lastWeekday = (d.getDay() + 6) % 7;
//   if (lastWeekday !== 0) {
//     for (let i = lastWeekday; i <= 6; i++) {
//       table += "<td></td>";
//     }
//     table += "</tr>";
//   }
// }

// createCalendar(2025, 12);
// table += "</table>";
// div.innerHTML = table;
// ==================================================

// ==========================Вставте HTML в список==========================
// Напишіть код, щоб вставити <li>2</li><li>3</li> між двома <li> тут:

// let elem = document.querySelector("#one");
// elem.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");

// ========================== Відсортуйте таблицю==========================
// let table = document.querySelector("table");
// let tbody = document.querySelector("tbody");

// let sortedRows = Array.from(table.tBodies[0].rows).sort((rowA, rowB) =>
//   rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML)
// );

// table.tBodies[0].append(...sortedRows);
