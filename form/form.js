function CheckEmail(){
    const check = /^[A-Za-z1-9]+@[a-z]+\.[a-z]{2,}$/
    let Email = document.getElementById("Email").value
    if(check.test(Email) == false || Email == ""){
        document.getElementById("WarnEmail").innerHTML = "Il format per l'email è 'example@[dominio].[minimo due lettere]'!"
        return false
    }
    else{
        document.getElementById("WarnEmail").innerHTML = ""
        return true
    }
}

function CheckNome(){
    const check = /^[A-Za-z\s]{3,}$/
    let Username = document.getElementById("Nome").value
    if(check.test(Username) == false || Username == ""){
        document.getElementById("WarnNome").innerHTML = "Per lo username possono solo esserci solo lettere minuscole e maiuscole e spazi!"
        return false
    }
    else{
        document.getElementById("WarnNome").innerHTML = ""
        return true
    }
}

function CheckNumero(){
    const check = /^[0-9]{10,}$/
    let Numero = document.getElementById("Telefono").value
    if(check.test(Numero) == false || Numero == ""){
        document.getElementById("WarnNumero").innerHTML = "Per il numero devo esserci 10 cifre e niente spazi!"
        return false
    }
    else{
        document.getElementById("WarnNumero").innerHTML = ""
        return true
    }
}

function CheckBudget(){
    const check = /^[0-9]+$/
    let Budget = document.getElementById("Budget").value
    if(check.test(Budget) == false || Budget == ""){
        document.getElementById("WarnBudget").innerHTML = "Il budget deve essere positivo!"
        return false
    }
    else{
        document.getElementById("WarnBudget").innerHTML = ""
        return true
    }
}

function CalcolaPreventivo(){
    const servizi = [document.getElementById("HTML").checked, document.getElementById("PHP").checked, document.getElementById("ASP").checked, document.getElementById("Java").checked, document.getElementById("C++").checked]
    let i = 0
    let preventivo = 0

    if(CheckBudget() == false || CheckEmail() == false || CheckNome() == false || CheckNumero() == false){
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
    else{
        document.getElementById("WarnCheck").innerHTML = ""

        if(document.getElementById("HTML").checked){
            preventivo+=20*10
        }

        if(document.getElementById("PHP").checked){
           preventivo+=25*10
        }

        if(document.getElementById("ASP").checked){
            preventivo+=30*10
        }

        if(document.getElementById("Java").checked){
            preventivo+=35*10
        }

        if(document.getElementById("C++").checked){
            preventivo+=40*10
        }

        document.getElementById("preventivo").innerHTML = "Il tuo preventivo è: " + preventivo
        if(document.getElementById("Budget").value < preventivo){
            document.getElementById("preventivo").innerHTML += " Il budget non è sufficiente"
        }
        else{
            document.getElementById("preventivo").innerHTML += " Il budget è sufficiente"
        }
    }
}
