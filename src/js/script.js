const users = [
	{
		login: 'brunohs',
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
    {
        login: 'willianfl',
        email: 'willianfl@pbtech.net.br',
        age: 30
    },
    {
        login: 'lucasplc',
        email: 'lucasplc@pbtech.net.br',
        age: 20
    }
];

// DESAFIO 1
function somaIdade(){
    const idade = users.map(user => user.age);
    const soma = idade.reduce((previous, current) => previous + current, 0);
    console.log("A soma das idades é " + soma);
}
// somaIdade();


function validaLogin(parametro){
    const login = users.find(user => user.login === parametro);

    if (login === undefined){
        console.log('Usuário ' + login.login + ' não encontrado');
    }else{
        console.log('Usuário ' + login.login + ' encontrado');
    }
}
// validaLogin('brunohs');


function mostraEmails(){
    const emails = users.map(user => user.email);
    console.log("Lista de emails: " + emails);
}
// mostraEmails();


function contaEmailsPb(){
    const emailsPb = users.filter(user => user.email.endsWith('@pbtech.net.br'));
    console.log(emailsPb.length + " usuários possuem o email da empresa");
}
// contaEmailsPb();


// DESAFIO 2
function validateForm(event){
    let emailDigitado = event.target.elements.namedItem("email").value;
    let senhaDigitada = event.target.elements.namedItem("passwd").value;
    const usuario = users.find(user => user.email === emailDigitado);
    const idades = users.map(user => user.age);
    const soma = idades.reduce((previous, current) => previous + current, 0);
    if (!emailDigitado || !senhaDigitada) {
        alert('Preencher usuário e senha');
    } else if (!usuario || (senhaDigitada != soma)) {
        alert('Usuário ou senha incorretos');
    } else {
        alert('Formulário submetido');
    }

    return false;
}
