// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch. Отобразите на странице имена персонажей из 
Рика и Морти в list.
(Вы можете стилизовать страницу по желанию.)
*/

let names = document.querySelector(".names");
// console.log(namesUl);
let rickandmortyapi = fetch("https://rickandmortyapi.com/api/character");
let rick = fetch("https://rickandmortyapi.com/api/character");
// console.log(rick);
rickandmortyapi
  .then((res) => res.json())
  .then((info) => {
    let data = info.results;
    // console.log(data);
    data.forEach((a, index) => {
      // let gender = a.gender;
      names.innerHTML += `
    <div class="similar">
    <img src="${a.image}" alt="#" width=150 height=150>
    <h3><i class="fa-solid fa-hippo" width=10></i>: ${a.name}</h3>
    <p><i class="fa-solid fa-venus-mars"></i>: ${
      a.gender == "Male"
        ? `<span class="genderblue  gender">${a.gender}</span>`
        : a.gender == "Female"
        ? `<span class="genderred gender">${a.gender}</span>`
        : `<span class="genderblack gender">${a.gender}</span>`
    }</p>
    <p style="font-size:14px"><i class="fa-solid fa-location-dot"></i>: ${
      a.location.name
    }</p>
    ${
      a.status == "Alive"
        ? `<span class="green status">${a.status}</span>`
        : a.status == "Dead"
        ? `<span class="red status">${a.status}</span>`
        : `<span class="unknown status">${a.status}</span>`
    }
    </div>`;
    });
    // console.log(info.results.status);
    // console.log(info.results);
    // fetch("http://localhost:8000/characters", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
  });
/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/
//!FIRST ATTEMPT COPY DATA TO DB.JSON USING LocalStorage
//?creating localStorage
// function addtols() {
//   let data = rick.then((res) => res.json()).then((data) => data.results);
//   data.then((a) => {
//     let char = [];
//     a.forEach((a) => {
//       char.push({ name: a.name, image: a.image });

//       //   let data = JSON.parse(localStorage.getItem("characters")) || [];
//       //   data.push(char);
//       //   localStorage.setItem("characters", data);
//     });
//     localStorage.setItem("character", JSON.stringify(char));
//   });
// }
// addtols();

// let newvar =
//?adding to db.json an array from localSorage
// let arr = [];
// let ls = JSON.parse(localStorage.getItem("character"));
// ls.forEach((a) => {
//   arr.push(a);
// });
// console.log(arr);
// // console.log(JSON.stringify(ls));

// // fetch("http://localhost:8000/characters", {
// //   method: "POST",
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// //   body: JSON.stringify(arr),
// // });
//!--------------------------------------------------------------

//!SECOND ATTEMPT COPY DATA TO DB.JSON (WAAY EASIER)

// rick
//   .then((res) => res.json())
//   .then((data) => {
//     fetch("http://localhost:8000/characters", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data.results),
//     });
//   });
//!--------------------------------------------------------------

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.*/

let block = document.querySelector(".block-2");

fetch("http://localhost:8000/characters", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    // block.innerHTML = "";
    data[0].forEach((a, index) => {
      block.innerHTML += `
      <div class="similar">
      <img src="${a.image}" alt="#" width=150 height=150>
      <h3><i class="fa-solid fa-hippo" width=10></i>: ${a.name}</h3>
      <p><i class="fa-solid fa-venus-mars"></i>: ${
        a.gender == "Male"
          ? `<span class="genderblue  gender">${a.gender}</span>`
          : a.gender == "Female"
          ? `<span class="genderred gender">${a.gender}</span>`
          : `<span class="genderblack gender">${a.gender}</span>`
      }</p>
      <p style="font-size:14px"><i class="fa-solid fa-location-dot"></i>: ${
        a.location.name
      }</p>
      ${
        a.status == "Alive"
          ? `<span class="green status">${a.status}</span>`
          : a.status == "Dead"
          ? `<span class="red status">${a.status}</span>`
          : `<span class="unknown status">${a.status}</span>`
      }
      </div>`;
    });
  });

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
