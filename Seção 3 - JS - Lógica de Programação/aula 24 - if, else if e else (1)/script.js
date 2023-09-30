// const hora = 13;

// if (hora <= 12) {
//     console.log('Bom dia!');
// }

/**
 * Entre 0 ~ 11 -> Bom dia!
 * Entre 12 ~ 17 -> Boa tarde!
 * Entre 18 ~ 23 -> Boa noite!
 */

const hora = 13;

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá!');
}