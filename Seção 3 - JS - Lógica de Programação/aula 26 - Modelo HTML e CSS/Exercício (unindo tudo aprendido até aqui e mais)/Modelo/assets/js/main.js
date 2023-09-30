d = document;
    const form = d.querySelector(`.form`);
    const resultIMC = d.querySelector(`.resultIMC`);
    
function meuEscopo () {


    const peso = d.getElementById('peso')
    peso.addEventListener("input",function(event){
        var value = peso.value;
        var digitsOnly = value.replace(/\D/g, '');
        var limitedValue = digitsOnly.substr(0, 4);
        var formattedValue = limitedValue.replace(/^(\d{3})/, '$1.');

        peso.value = formattedValue;
    });

    const altura = d.getElementById('altura')
    altura.addEventListener("input",function(event){
        var value = altura.value;
        var digitsOnly = value.replace(/\D/g, '');
        var limitedValue = digitsOnly.substr(0, 3);
        var formattedValue = limitedValue.replace(/^(\d{1})/, '$1.');

        altura.value = formattedValue;
    });
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const peso = d.getElementById('peso');
        const altura = d.getElementById('altura');

        if (!peso.value) {
            return nOkIMC(peso, 'Digite o peso!');
        } else if (!altura.value){
            return nOkIMC(altura, 'Digite a altura!');
        }

        const IMC = calculo(peso.value, altura.value);
        console.log(IMC, peso.value, altura.value)
        if (IMC < 18.5) {
            nOkIMC(resultIMC,`O seu IMC é: ${IMC.toFixed(2)} (Abaixo do peso)`);
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            okIMC(resultIMC, `O seu IMC é: ${IMC.toFixed(2)} (Peso normal)`);
        } else if (IMC >= 25 && IMC <= 29.9) {
            nOkIMC(resultIMC, `O seu IMC é: ${IMC.toFixed(2)} (Sobrepeso)`);
        } else if (IMC >= 30 && IMC <= 34.9) {
            nOkIMC(resultIMC, `O seu IMC é: ${IMC.toFixed(2)} (Obesidade grau 1)`);
        } else if (IMC >= 35 && IMC <= 39.9) {
            nOkIMC(resultIMC, `O seu IMC é: ${IMC.toFixed(2)} (Obesidade grau 2)`);
        } else if (IMC > 40) {
            nOkIMC(resultIMC, `O seu IMC é: ${IMC.toFixed(2)} (Obesidade grau 3)`);
        } 
        
    });
}

function calculo(peso, altura){
    return peso/(altura**2);
};

function nOkIMC(input, message) {
    const result = input.parentElement;
    const small = result.querySelector('small');

    small.innerText = message;
    result.className = 'resultIMC nook';
}

function okIMC(input, message) {
    const result = input.parentElement;
    const small = result.querySelector('small');

    small.innerText = message;
    result.className = 'resultIMC ok';
}

meuEscopo();