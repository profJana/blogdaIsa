function entrar(){
    senha = document.getElementById("senha").value;
    if (senha == "eusoulinda"){
        window.location = "criarPosts.html"
    }
    else{
        document.getElementById("alerta").innerHTML = "Senha incorreta!"
    }
}