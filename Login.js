async function Login(){
    let api = await fetch("https://go-wash-api.onrender.com/api/login",{
        method : "POST",
        body :JSON.stringify({
            "email": "carlosr.m.fernandes@gmail.com",
            "password ": "123456",
            "user_type_id" : 1

        }),
        headers :{
            'Content-Type': 'application/json'
        }
    });

        if(api.ok)
        {
            alert("login sucesso!..")
            let response = await api.json()
            console.log(response);
        }
        
        // if(api.ok)
        // {
        //         alert("login sucesso!..")
        //         let response = await api.json()
        //         localStorage. setItem("user",JSON.stringify(response))
        //         Window.location = "C:\Users\guuhs\OneDrive\Área de Trabalho\Projeto\NovoProjeto/Listagem.html"
        // }
        
}

// function GetUserData()
// {
//     let user = JSON.parse(localStorage.getItem("user"))
//     console.log(user.bairro)
// }