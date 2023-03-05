
const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const tel = document.getElementById('tel')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telValue = tel.value.trim()
    
    if(nomeValue == '') {
        //mostrar o erro
        //adicionar a classe erro
        erroValidation(nome, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        sucessoValidation(nome)
    }

    if(emailValue == '') {
        //mostrar o erro
        //adicionar a classe erro
        erroValidation(email, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        sucessoValidation(email)
    }

    if(telValue == '') {
        //mostrar o erro
        //adicionar a classe erro
        erroValidation(tel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        sucessoValidation(tel)
    }
}


function erroValidation(input, mensagem) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('smalll')

    small.innerText = menssagem

    formControl.className = 'campo erro'
}

function sucessoValidation(input) {
    const formControl = input.parentElement;
    
    formControl.className = 'campo sucesso'
}