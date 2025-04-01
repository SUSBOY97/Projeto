async function save()
{
   let name = "Xaolin Matador de porco";
   let email = "gerar email para teste";
   let userType = 1;
   let passowrd = "123456789";
   let termos = 1;
   let birthday = "1997-11-15";
   let cpf_cnpj= "gerar cpf para teste"

   info = 
   {
    "name": name,
    "email": email,
    "user_type_id": userType,
    "password": passowrd,
    "cpf_cnpj": cpf_cnpj,
    "terms": termos,
    "birthday": birthday,
   }

   let api = await fetch("https://go-wash-api.onrender.com/api/user" ,{
    method:"POST",
    body: JSON.stringify(info),
    headers:
    {
        'Content-Type':'application/json'
    }
    });

    if(api.ok)
    {
        let response = await api.json()
        console.log(response);
        return
    }
    let responseErro = await api.json()
    console.log(responseErro);
}