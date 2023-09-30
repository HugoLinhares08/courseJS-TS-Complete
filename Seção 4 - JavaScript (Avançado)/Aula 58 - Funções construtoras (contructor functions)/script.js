// Função construtora -> objetos
// Função fábrica -> objetos
// Construtura -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {
        
    }

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(nome +': sou um método.');
    };
}

const p1 = new Pessoa('Ugo', 'Linhares')
const p2 = new Pessoa('Mariah', 'Vieira')
p1.metodo();

