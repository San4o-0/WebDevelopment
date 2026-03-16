//Завдання 1
let a = 10;
let b = 5;
console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Множення:", a * b);
console.log("Ділення:", a / b, );


//Завдання 2
let firstName = "Олександр";
let lastName = "Олександрович";
let fullName = `${firstName} ${lastName}`;
console.log(`\nПривіт, ${fullName}!`);


//Завдання 3
let age = 19;
if (age >= 18) {
    console.log("\nДоступ дозволено\n");
} else {
    console.log("\nДоступ заборонено\n");
}


//Завдання 4
for ( let i = 1; i < 11; i++) {
    console.log("Число: ", i);
}


//Завдання 5
function square(number){
    return number*number;
}
console.log("\nКвадрат числа 5: ", square(5));


//Завдання 6
let fruits = ["Банан", "Ананас", "Яблуко"];
fruits.push("Авокадо")
console.log("\n", fruits);