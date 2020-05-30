let formulario = document.querySelector("form");

let inputCard = document.getElementById("inputCard");
let inputCVC = document.getElementById("inputCVC");
let inputMount = document.getElementById("inputMount");
let inputFirstName = document.getElementById("inputFirstName");
let inputLastName = document.getElementById("inputLastName");
let inputCity = document.getElementById("inputCity");
let inputState = document.getElementById("inputState");
let inputPostalCode = document.getElementById("inputPostalCode");
let inputWeAccept = document.getElementById("inputWeAccept");
let inputMessage = document.getElementById("inputMessage");

//buttons
let sendButton = document.getElementById("sendButton");
let cancelButton = document.getElementById("cancelButton");


let alerta = document.getElementById("alerta");
alerta.style.display = "none";

formulario.addEventListener("submit", function(evento){
    
    let mensajeAlerta = "";
    evento.preventDefault();
    
    if (inputCard.value ==="" || !Number(inputCard.value)){
        inputCard.style.backgroundColor = "#f8d7da";
        inputCard.style.borderColor = "#f5c6cb";
        mensajeAlerta += "Missing " + inputCard.name +": only number" + "<br>"
    } else {
        inputCard.style.backgroundColor = "";
        inputCard.style.borderColor = "";
    }
    if (inputCVC.value === "" || !Number(inputCVC.value)){
        inputCVC.style.backgroundColor = "#f8d7da";
        inputCVC.style.borderColor = "#f5c6cb";
        mensajeAlerta += "Missing " + inputCVC.name + "<br>"
    }
    if (inputMount.value === "" || !Number(inputMount.value)){
        inputMount.style.backgroundColor = "#f8d7da";
        inputMount.style.borderColor = "#f5c6cb";
        mensajeAlerta += "Missing " + inputMount.name +": only number" + "<br>"
    }
    if(inputFirstName.value === "" || Number(inputFirstName.value)){
        inputFirstName.style.backgroundColor = "#f8d7da";
        inputFirstName.style.borderColor = "#f5c6cb";
        mensajeAlerta += "Missing " + inputFirstName.name.replace("_"," ") + ": only text" + "<br>"
    }
    if(inputLastName.value === "" || Number(inputLastName.value)){
        inputLastName.style.backgroundColor = "#f8d7da";
        inputLastName.style.borderColor = "#f5c6cb";
        mensajeAlerta += "Missing " + inputLastName.name.replace("_"," ") + ": only text" + "<br>"  
    }
    if(inputCity.value === "" || Number(inputCity.value)){
        inputCity.style.backgroundColor = "#f8d7da";
        inputCity.style.borderColor = "#f5c6cb";
        mensajeAlerta += "Missing " + inputCity.name + ": only text" + "<br>"
    } else {
        inputCity.style.backgroundColor = "";
        inputCity.style.borderColor = "";
    }
    if (inputPostalCode.value === "" || !Number(inputPostalCode.value)){
        inputPostalCode.style.backgroundColor = "#f8d7da";
        inputPostalCode.style.borderColor = "#f5c6cb";
        mensajeAlerta += "Missing " + inputPostalCode.name +": only number" + "<br>"
    }
    if (inputMessage.value === ""){
        inputMessage.style.backgroundColor = "#f8d7da";
        inputMessage.style.borderColor = "#f5c6cb";
        mensajeAlerta += "Missing " + inputMessage.name + "<br>"
    }
    if (mensajeAlerta != ""){
        alerta.style.display = "";
        alerta.innerHTML = mensajeAlerta;
    } else {
        formulario.submit();
    }
    

});
