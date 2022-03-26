// VALIDAR CPF DO INPUT

function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}
function validarCPF(el) {
    if (!_cpf(el.value)) {
        alert("CPF inválido!" + el.value);
        // apaga o valor
        el.value = "";
    }
}


// VALIDAR TELEFONE INPUT

const regexTelefoneSemDDD = /^(\d{4})(\d{4})$|^(\d{5})(\d{4})$/g;
const regeTelefoneComDDD = /^(0\d{2})(\d{5})(\d{4})$|^(0\d{2})(\d{4})(\d{4})|^(\d{2})(\d{4})(\d{4})$|^(\d{2})(\d{5})(\d{4})$|^(\d{3})(\d{5})(\d{4})$/g;
const regexTelefoneSeparador = /^(\d{4})(\d{1,4})$/g;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;


function mascara_telefone() {
    // remove caracteres que não são números
    this.value = this.value.replace(/[^0-9]/gi, "");

    if (this.value.length > 11) {
        this.value = this.value.substr(0, 12);
    }

    if (regexTelefoneSemDDD.test(this.value)) {
        this.value = this.value.replace(regexTelefoneSemDDD, "$1$3-$2$4");
        this.style.color = 'black';
    } else if (regeTelefoneComDDD.test(this.value)) {
        this.value = this.value.replace(regeTelefoneComDDD, "($1$4$7$10$13)$2$5$8$11$14-$3$6$9$12$15");
        this.style.color = 'black';
    } else if (regexTelefoneSeparador.test(this.value)) {
        this.value = this.value.replace(regexTelefoneSeparador, "$1-$2");
        this.style.color = 'black';
    } else {
        this.style.color = 'red';
    }
};

function validacao_telefone() {
    let valor = this.value.replace(/[^0-9]/gi, "");
    if (!(regexTelefoneSemDDD.test(valor) || regeTelefoneComDDD.test(valor))) {
        this.style.color = 'red';
    }
}

// function validacao_email() {
//     if (!regexEmail.test(this.value)) {
//         this.style.color = 'red';
//         alert("Email Inválido");
//     } else {
//         this.style.color = 'black';
//     }
// }

document.getElementById("phone").onkeyup = mascara_telefone;
document.getElementById("phone").onblur = validacao_telefone;
document.getElementById("email").onblur = validacao_email;



// MASCARA INPUT VALOR EMPRESTIMO

function formatarMoeda() {
    var elemento = document.getElementById('valor');
    var valor = elemento.value;

 
    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if (valor == 'NaN') elemento.value = '';

}


// CONTROLAR SCROLLING 



// BUTTON TO TOP

function scrollBar(){
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    });
};

function controlarBotao(){
    if (window.scrollY == 0){
        document.querySelector(".btnTop").style.display = 'block'; 
    } else{
        document.querySelector(".btnTop").style.display = 'none';
    }
};
window.addEventListener("scroll", controlarBotao);



function mascara_telefone() {
    // remove caracteres que não são números
    this.value = this.value.replace(/[^0-9]/gi, "");

    if (this.value.length > 11) {
        this.value = this.value.substr(0, 12);
    }

    if (regexTelefoneSemDDD.test(this.value)) {
        this.value = this.value.replace(regexTelefoneSemDDD, "$1$3-$2$4");
        this.style.color = 'black';
    } else if (regeTelefoneComDDD.test(this.value)) {
        this.value = this.value.replace(regeTelefoneComDDD, "($1$4$7$10$13)$2$5$8$11$14-$3$6$9$12$15");
        this.style.color = 'black';
    } else if (regexTelefoneSeparador.test(this.value)) {
        this.value = this.value.replace(regexTelefoneSeparador, "$1-$2");
        this.style.color = 'black';
    } else {
        this.style.color = 'red';
    }
};

function validacao_telefone() {
    let valor = this.value.replace(/[^0-9]/gi, "");
    if (!(regexTelefoneSemDDD.test(valor) || regeTelefoneComDDD.test(valor))) {
        this.style.color = 'red';
    }
}


document.getElementById("phone2").onkeyup = mascara_telefone;
document.getElementById("phone2").onblur = validacao_telefone;


// AREA MODAL CONTATO

function openModal(){
    let contactModal = document.querySelector('#modal')
    contactModal.style.display = 'flex';
    contactModal.addEventListener('click', (e) => {
        console.log(e.target)
        if(e.target.id == 'modal' || e.target.className == 'closeModal'){
            contactModal.style.display = 'none';
        }
    })

}



