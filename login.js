function logar() {
    const usuarioValido = {
      email: 'admin',
      senha: 'admin'
    };
  
    const emailDigitado = document.getElementById('user').value;
    const senhaDigitada = document.getElementById('password').value;
  
    if (emailDigitado === usuarioValido.email && senhaDigitada === usuarioValido.senha) {
      location.href = 'home.html'
    } else {
      alert('Usuário ou Senha incorretos.');
    }
  }

  function cadastrar() {
        location.href = 'cadastrar.html'
  }
