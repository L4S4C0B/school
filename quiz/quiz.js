function check_namesurname(){
    const regex = /^[a-zA-Z\s]{3,}$/
    let name = document.getElementById("nomeecognome").value

    if(regex.test(name) == false){
        document.getElementById("Warnnomeecognome").innerText = "Il nome e il cognome insieme devo essere lunghi almeno 3 lettere!"
        return false
    }
    else{
        document.getElementById("Warnnomeecognome").innerText = ""
        return true
    }
}

function check_class(){
    let classe = document.getElementById("classe").value

    if(classe == ""){
        document.getElementById("Warnclasse").innerText = "Devi inserire una classe!"
        return false
    }
    else{
        document.getElementById("Warnclasse").innerText = ""
        return true
    }
}

function check_quiz(){
    let risposta = document.querySelector('input[name="q1"]:checked')
    let score = 0

    if (risposta == null) {
        document.getElementById("Warnq1").innerHTML = "Seleziona una risposta alla domanda 1!"
    }
    else if(risposta.value == "html"){
        score+=1.5
    }

    let risposta2 = document.querySelector('input[name="q2"]:checked')

    if (risposta2 == null) {
        document.getElementById("Warnq2").innerHTML = "Seleziona una risposta alla domanda 2!"
    }
    else if(risposta2.value == "printf"){
        score+=1.5
    }
    
    let risposta3 = document.querySelector('input[name="q3"]:checked')

    if (risposta3 == null) {
        document.getElementById("Warnq3").innerHTML = "Seleziona una risposta alla domanda 3!"
    }
    else if(risposta3.value == "serpente"){
        score+=1.5
    }

    if(check_namesurname == false || check_class == false){
        document.getElementById("Warncheck").innerHTML = "Compila correttamente i campi!"
        return
    }
    else{
        document.getElementById("Warncheck").innerHTML = ""
        let risultato

        if(score == 0 || score==1.5){
            risultato = "Risultato scarso"
        }
        else if(score == 3){
            risultato = "Risultato buono"
        }
        else{
            risultato = "Risultato ottimo"
        }


        document.getElementById("Warncheck").innerHTML = "Risposte fornite: 1. " + risposta.value + " 2. " + risposta2.value + " 3. " + risposta3.value + "<br>" + "Nome: " + document.getElementById("nomeecognome").value + "<br>Classe: " + document.getElementById("classe").value + "<br>Punteggio: " + score + "<br>Valutazione: " + risultato
    }
}