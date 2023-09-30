// Sempre utilizar LET, pois VAR é um pouco mais antigo, sendo assim, com menos funcionalidades
let nome = `João`

console.log(`João nasceu em 1984.`)
console.log(`Em 2000 João conheceu Maria.`)
console.log(`João casou-se com Maria em 2012.`)
console.log(`Maria teve 1 filho com João em 2015.`)
console.log(`O filho de João e Maria se chama Eduardo.\n`)

console.log(nome,`nasceu em 1984.`)
console.log(`Em 2000 `+nome+` conheceu Maria.`)
console.log(nome,`casou-se com Maria em 2012.`)
console.log(`Maria teve 1 filho com `+nome+` em 2015.`)
console.log(`O filho de `+nome+` e Maria se chama Eduardo.`)

/** Não podemos criar variáveis com palavras reservadas, por Exemplo: 
 *  let if;
 *
 *  => Variáveis precisam ter nomes significativos, por exemplo:
 *  let nomeCliente, cpfCliente;
 * 
 *  => Não pode-se começar uma variável com números
 *  let 1nomeCliente;
 * 
 */