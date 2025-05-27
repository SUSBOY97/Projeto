async function Login()
{
   let Email = document.getElementById("email").value;
   let senha = document.getElementById("senha").value;
   let api = await fetch ("https://go-wash-api.onrender.com/api/login")
   headers:

    let url = "https://go-wash-api.onrender.com/api/login";

    let info = 
    {
        "email": Email,
        "user_type_id": 1,
        "password": senha,
    }

    if(!Email || !senha)
    {
        alert ("Todos os campos devem ser preenchidos")
        return
    }

    // let api = await fetch(url ,
    // {
    //     method:"POST",
    //     body: JSON.stringify(info),
    //     headers:
    //     {
    //         'Content-Type':'application/json'
    //     }
    // });
    
        if(api.ok)
        {
            alert("login sucesso!..")
            let response = await api.json()
            localStorage.setItem("user",JSON.stringify
                (response))

                window.location ="file:///C:\Users\guuhs\OneDrive\Área de Trabalho\Projeto\NovoProjeto/Listagem.html"

        }
}