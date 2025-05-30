async function listagem()
{
    let token = JSON.parse(localStorage.getItem
        ("user"));
    
        let api = await fetch("https://go-wash-api.onrender.com/api/auth/address" , {
            method :"GET",
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer' + token.
                access_token
            }
        });
    if(api.ok)
    {
        alert ("Login sucesso!..")
        let response = await api.json()
        localStorage.setItem("user",JSON.stringify
        (response))
    }
}