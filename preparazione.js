function validate_username(){
    const regex = /^[a-zA-Z\d ]{3,}$/
    let username = document.getElementById("username").value

    if(regex.test(username) == false){
        document.getElementById("Warnusername").innerText = "Username non corretto, deve contenere almeno tre caratteri!"
        return false
    }   
    else{
        document.getElementById("Warnusername").innerText = ""
        return true
    }
}

function validate_password(){
    const regex = /^[a-zA-Z\d]{8,}$/
    let password = document.getElementById("password").value

    if(regex.test(password) == false){
        document.getElementById("Warnpassword").innerText = "Password non corretta, deve contenere almeno otto caratteri!"
        return false
    }
    else{
        document.getElementById("Warnpassword").innerText = ""
        return true
    }
}

function validate_telefono(){
    const regex = /^\d{10}$/
    let phone = document.getElementById("telefono").value

    if(regex.test(phone) == false){
        document.getElementById("Warntelefono").innerText = "Telefono non valido (10 cifre)"
        return false
    } else{
        document.getElementById("Warntelefono").innerText = ""
        return true
    }
}

function validate_URL(){
    const regex = /^[a-z]+\.[a-z]+\.[a-z]+$/
    let url = document.getElementById("sito").value

    if(regex.test(url) == false){
        document.getElementById("Warnurl").innerText = "url non valido, formato: 'www.sito.it' e tutto in minuscolo"
        return false
    } else{
        document.getElementById("Warnurl").innerText = ""
        return true
    }
}

function stampa_richiesta(){
    const servizi = [document.getElementById("linux").checked, document.getElementById("windows").checked, document.getElementById("android").checked, document.getElementById("database").checked]
    let i = 0
    const dataInput = document.getElementById("data").value
    const data = new Date(dataInput)

    if(data.getDay() != 0 && data.getDay() != 6){
        data.setDate(data.getDate() + 7)
    }
    else if (data.getDay() == 0){
        data.setDate(data.getDate() + 1)
    }
    else if (data.getDay() == 6){
        data.setDate(data.getDay() + 2)
    }

    if(validate_password() == false || validate_URL() == false || validate_telefono() == false || validate_username() == false || document.getElementById("ente").value == ""){
        document.getElementById("WarnCheck").innerHTML = "Compila bene tutti i campi!"
        return
    }

    servizi.forEach(element => {
        if (element == false) {
            i++
        }
    })

    if(i == 5){
        document.getElementById("WarnCheck").innerHTML = "Devi selezionare almeno un opzione!"
    }
    
    document.getElementById("Warncheck").innerText = "Username: " + document.getElementById("username").value + "\nPassword: " + "\nNumero di telefono : +39" + document.getElementById("telefono").value + "\nSito: " + document.getElementById("sito").value + "\nConsulenza da professionisti laureati nel giro di una settimana dalla richiesta, la tua data: " + data

}