let email = document.getElementById("email")
let senha = document.getElementById("senha")

let emailLogin = "000@0"
let senhaLogin = "000"

console.log(`Eu ainda não sei nada sobre back-end, isso é somente uma simulação usando o javascript`)
console.log(`E-mail:${emailLogin}     senha:${senhaLogin}`)

function entrar(){
    if(email.value === emailLogin && senha.value === senhaLogin){
        window.location.href = "./home/home.html"
    }else{
        alert("E-mail ou Senha inválidos")
        alert("verifique o CONSOLE")
    }
}