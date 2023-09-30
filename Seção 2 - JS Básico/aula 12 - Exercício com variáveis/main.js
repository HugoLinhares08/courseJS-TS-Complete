// variáveis A, B, C com valores respectivos de A, B, C. 
// Substituir o A pelo "B", B pelo "C" e C pelo "A".
// UTILIZAR SOMENTE AS VARIÁVEIS PARA REALIZAR AS ALTERAÇÕES

let varA = `A`, varB = `B`, varC = `C`

let varD = varA
varA = varB
varB = varC
varC = varD

console.log(varA,varB,varC)

// outra forma:
[varA, varB, varC] = [varB, varC, varA]