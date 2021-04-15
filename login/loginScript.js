let email = document.getElementById("email")
let senha = document.getElementById("senha")

let emailCadastro = localStorage.getItem("emailParaLoginTeste")
let senhaCadastro = localStorage.getItem("senhaParaLoginTeste")





console.log(`Eu ainda não sei nada sobre back-end, isso é somente uma simulação usando o javascript e o LocalStorage`)
console.log("Se vc quiser acessar o login crie uma conta, não precisa ser um e-mail de verdade")
console.log(`E-mail:${emailCadastro}     senha:${senhaCadastro}`)

function entrar(){
    

    if(email.value === emailCadastro && senha.value === senhaCadastro){
        window.location.href = "./home/home.html"
    }else{
        alert("E-mail ou Senha inválidos")
        alert("verifique o CONSOLE")
    }
}