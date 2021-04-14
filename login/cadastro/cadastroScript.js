let nome = document.getElementById("nome")
let email = document.getElementById("email")
let senha1 = document.getElementById("senha1")
let senha2 = document.getElementById("senha2")
let botao = document.getElementById("botao")


let container = document.getElementById("container")
let form = document.getElementById("form")
let h1 = document.createElement("h1")
let login = document.createElement("a")
login.setAttribute("href", "../index.html")


botao.addEventListener("click", cadastrar)




function cadastrar(){
    
if(nome.value.lentgh == 0 || email.value.length == 0 || senha1.value.length == 0){
    alert("Dados Obrigatórios")
}else if(senha1.value != senha2.value){
    alert("[ERRO] Verifique a senha, e tente novamente")
}else if(senha1.value.length < 6){
    alert("Digite uma senha com pelo menos 6 dígitos")
}else{
    
    container.removeChild(form)
    container.appendChild(h1)
    h1.innerHTML = "inscrição realizada com sucesso"

    container.appendChild(login)
    login.innerHTML = "FAZER LOGIN"

    alert("Abra o console")
    console.log("apenas uma simulação usando javaScript a inscrição não foi salva")
}




}



