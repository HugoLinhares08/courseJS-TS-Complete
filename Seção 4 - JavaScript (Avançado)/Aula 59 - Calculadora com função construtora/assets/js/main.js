function Calculadora() {
    
    this.display = document.querySelector('.display');
        
    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumberToDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumberToDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();

        const display = document.getElementById('textBox');
        display.addEventListener("input", (e) => {
        var value = display.value;
        var digitsOnly = value.replace(/[^\d.\  -+()*/]/g, '');

        display.value = digitsOnly;
        });
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta)

            if (!conta) {
                alert('Conta Inválida!');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta Inválida!');
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();