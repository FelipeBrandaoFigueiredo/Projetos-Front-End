//Váriaveis = Um espaço da memória do computador que guardamos algo ( um número, uma letra)
// FUNÇão = Uma função é um trecho de código que só é executado quando é chamado

let chave = "68d4106a7941f6a83928bf9e74b7a985"

function colocanatela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
     document.querySelector(".temp").innerHTML =  Math.floor (dados.main.temp) + "°C"
      document.querySelector(".descricao").innerHTML = dados.weather [0].description
       document.querySelector(".icone").src ="https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
        document.querySelector(".umidade").innerHTML =  Math.floor (dados.main.humidity) + '%' 


}

 async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + 
    "&lang=pt_br" +
    "&units=metric")
   
    .then(resposta => resposta.json())
colocanatela(dados)
   


}

function cliqueinobotao(){
    let cidade = document.querySelector(".input-cidade").value


buscarCidade(cidade)
} 




    