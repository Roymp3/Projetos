function operacao(event){
       
            let n1 = parseFloat(document.getElementById("num1").value)
            let n2 = parseFloat(document.getElementById("num2").value)
            let op = event.target.textContent
            let resultado

            switch(op){

                case "+":
                     console.log("soma");
                     resultado = n1 + n2;
                     break;
                case "-":
                     console.log("subtração");
                     resultado = n1 - n2;
                     break;
                case "*":
                     console.log("multiplicação");
                     resultado = n1 * n2;
                     break;
                case "/":
                     console.log("divisão");
                     resultado = n1 / n2;
                     break;


            }
            document.getElementById("resultado").textContent = resultado
}           