function operacao(event){
       
            let n1 = String(document.getElementById("cpf").value)
            var n2
            let op = event.target.textContent
            let resultado

          if(op == "Verificar cpf"){

               console.log("validar");
               n2 = n1.substring(9,8)
               if (n2 == 8) {
                    resultado = "SP"
               }
               else if(n2 == 0){

                    resultado = "RS"
               }
               else if(n2 == 1){

                    resultado = "Df, GO, MS e TO"
               }
               else if(n2 == 2){

                    resultado = "AM, PA, RR, AP, AC e RO"
               }
               else if(n2 == 3){

                    resultado = "CE, MA e PI"
               }
               else if(n2 == 4){

                    resultado = "PB, PE, AL e RN"
               }
               else if(n2 == 5){

                    resultado = "BA e SE"
               }
               else if(n2 == 6){

                    resultado = "MG"
               }
               else if(n2 == 7){

                    resultado = "RJ e ES"
               }
               else if(n2 == 9){

                    resultado = "PR e SC"
               }

          }
            document.getElementById("resultado").textContent = resultado
}           