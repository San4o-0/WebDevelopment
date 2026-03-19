//Завдання 1
/* Першим виконається big.js, тому що звичайні <script> виконуються
 послідовно зверху вниз і блокують подальше завантаження сторінки.*/


//Завдання 2.1
let a = 2;
let x = 1 + (a *= 2);
console.log("Значення x - ", x);

//Завдання 2.2
// if ("0") {
//     alert('Привіт');
// }
//Так, буде, тому що "0" — це непорожній рядок, а значить true.

//Завдання 2.3
let admin;
let name = "Василь";
admin = name;
console.log(admin);


//Завдання 3
async function fetchCounties() {
    const res = await fetch("https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*");
    const data = await res.json();

    return data.slice(1).map(item => ({
        name: item[0],
        state: item[1],
        county: item[2]
    }));
}

function findCountyCode(counties, countyName) {
    const found = counties.find(c => c.name === countyName);
    return found ? `${found.state}${found.county}` : "Не знайдено";
}

let countiesData = [];

fetchCounties().then(data => {
    countiesData = data;
    console.log("Дані завантажені");
});

document.getElementById("btn").addEventListener("click", () => {
    const input = document.getElementById("countyInput").value;

    const code = findCountyCode(countiesData, input);

    document.getElementById("result").textContent = code;
});
//Baldwin County, Alabama


//Завдання 4
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const first = document.getElementById("first_name").value;
    const last = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;

    const errorDiv = document.getElementById("error");

    if (!first || !last || !email) {
        errorDiv.textContent = "Заповніть всі поля!";
        return;
    }

    errorDiv.textContent = "";
    alert(`Ім'я: ${first}, Прізвище: ${last}, Email: ${email}`);
});


//Завдання 5
let position = 200;
const el = document.getElementById("elid");

document.getElementById("left").addEventListener("click", () => {
    if (position > 0) {
        position -= 100;
        el.style.left = position + "px";
    }
});

document.getElementById("right").addEventListener("click", () => {
    if (position < 400) {
        position += 100;
        el.style.left = position + "px";
    }
});