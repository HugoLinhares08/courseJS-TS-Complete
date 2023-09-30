// let i = 0;

// while (i <= 10) {
//     i++
//     console.log(i);
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1, max = 50;
let rand;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
} // Faz enquanto a condição não estiver tratada.
console.log("##########");
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10); // Faz e depois checa.