// Factory Function (Função Fábrica)
// Constructor function (Função Construtura)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${nome} está ${assunto}.`;
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('ugo', 'linhares', 1.83, 100);
console.log(p1.imc);
const p2 = criaPessoa('maria', 'joaquina', 1.54, 51);
console.log(p2.imc);
console.log(p1.fala('Falando sobre JS'));

console.log(p1.nome);
console.log(p1.sobrenome);