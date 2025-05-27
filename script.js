async function Login()
{
    let url = "https://viacep.com.br/ws/03730000/json/"
    let api = await fetch(url,{
        method:"GET"
    })

    if(api.ok)
    {let response =await api.json();
        alert("Login com sucesso!");

        let usuario = 
        {
            Nome : "Pedro",
            idade : 30
        };

        let responseErro = await api.json();
        console.log(responseError);
    }

    localStorage.setItem("user",JSON.stringify(response));
    getUserData();
    return
}
function getUserData()
{
    let user = localStorage.getItem("user");
    console.log(user)
}