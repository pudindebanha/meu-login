function logar() {
    let login = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    if (login == 'admin' && senha == 'admin') { 
        location.href = "home.html";
    } else {
        window.alert('Usuário ou Senha incorretos!')
    }
}