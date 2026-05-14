        function menu_r(){
            document.getElementById('grafico').innerText = ""
            let output = document.getElementById('risultato')
            let button = document.createElement('button')
            button.onclick = () => disegnaRetta()
            button.textContent = 'Genera retta'
            output.innerHTML = ""
            let input1 = document.createElement('input')
            input1.placeholder = 'Inserisci la a'
            input1.type = 'text'
            input1.id = "ar"
            let input2 = document.createElement('input')
            input2.placeholder = 'Inserisci la b'
            input2.type = 'text'
            input2.id = "br"
            output.appendChild(input1)
            output.innerHTML += "<br>"
            output.appendChild(input2)
            output.innerHTML += "<br>"
            output.appendChild(button)
        }

        function menu_p(){
            document.getElementById('grafico').innerText = ""
            let button = document.createElement('button')
            button.textContent = 'Genera parabola'
            button.onclick = () => disegnaParabola()
            let output = document.getElementById('risultato')
            output.innerHTML = ""
            let input1 = document.createElement('input')
            input1.placeholder = 'Inserisci la a'
            input1.type = 'text'
            input1.id = "ap"
            let input2 = document.createElement('input')
            input2.placeholder = 'Inserisci la b'
            input2.type = 'text'
            input2.id = "bp"
            let input3 = document.createElement('input')
            input3.placeholder = 'Inserisci la c'
            input3.type = 'text'
            input3.id = "cp"
            output.appendChild(input1)
            output.innerHTML += "<br>"
            output.appendChild(input2)
            output.innerHTML += "<br>"
            output.appendChild(input3)
            output.innerHTML += "<br>"
            output.appendChild(button)
        }

        function disegnaRetta() {
            let m = parseFloat(document.getElementById('ar').value);
            let q = parseFloat(document.getElementById('br').value);

            if (isNaN(m) || isNaN(q)) {
                document.getElementById('risultato').innerText = "Inserisci cifre valide!"
                return; 
            }

            let data = new google.visualization.DataTable();
            data.addColumn('number', 'X');
            data.addColumn('number', 'Y');

            let righeDati = [];
            for (let x = -10; x <= 10; x++) {
                let y = m * x + q;
                righeDati.push([x, y]);
            }
            data.addRows(righeDati);

            let options = {
                title: 'Grafico della retta',
                hAxis: {title: 'Asse X', minValue: -10, maxValue: 10},
                vAxis: {title: 'Asse Y', minValue: -10, maxValue: 10},
                legend: 'none',
                lineWidth: 3
            };

            let chart = new google.visualization.LineChart(document.getElementById('grafico'));
            chart.draw(data, options);
        }

        function disegnaParabola(){
            
            let a = parseFloat(document.getElementById('ap').value);
            let b = parseFloat(document.getElementById('bp').value);
            let c = parseFloat(document.getElementById('cp').value);

            
            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                alert("Inserisci cifre valide!");
                return;
            }

            let data = new google.visualization.DataTable();
            data.addColumn('number', 'X');
            data.addColumn('number', 'Y');

            let righeDati = [];
            for (let x = -10; x <= 10; x += 0.5) {
                let y = (a * x * x) + (b * x) + c;
                righeDati.push([x, y]);
            }
            data.addRows(righeDati);

            let options = {
                title: 'Grafico della parabola',
                hAxis: {title: 'Asse X', minValue: -10, maxValue: 10},
                vAxis: {title: 'Asse Y'}, 
                legend: 'none',
                lineWidth: 3,
                colors: ['#ff9900']
            };

            let chart = new google.visualization.LineChart(document.getElementById('grafico'));
            chart.draw(data, options);
        }