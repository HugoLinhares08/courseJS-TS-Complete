// ? :
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // fallback (valor padrão)

console.log(nivelUsuario, corPadrao)

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário vip');
// } else {
//     console.log('Usuário normal');
// }