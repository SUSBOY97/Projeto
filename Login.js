async function Login(){
   let Email = document.getElementById("email").value;
   let senha = document.getElementById("senha").value;


   if (Email == ''  || senha  == '')
    {
        alert ("Todos os campos devem ser preenchidos")
        return
    }
    
    if(senha.length < 6)
    {
        alert ("Senha necessita ter minimo de 6  digitos")
        return
    }

    info = 
    {
        "password": senha,
        "email": Email,
        "user_type_id": 1,
    };

   let api = await fetch("https://go-wash-api.onrender.com/api/login", {
        method: "POST",
        
        body: JSON.stringify(info),

        headers: {'Content-type': 'application/json'}
    });

        if (api.ok) 
        {
                let resp = await api.json();
                localStorage.setItem("user", JSON.stringify(resp));
                alert("Login realizado com sucesso!");
                window.location.href = 'C:/Users/guuhs/OneDrive/Área de Trabalho/Projeto/NovoProjeto/Listagem.html'
                return;
        } 
}



