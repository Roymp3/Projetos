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
                if(n2 == 0){

                    resultado = "RS"
               }
               if(n2 == 1){

                    resultado = "Df, GO, MS e TO"
               }
                if(n2 == 2){

                    resultado = "AM, PA, RR, AP, AC e RO"
               }
                if(n2 == 3){

                    resultado = "CE, MA e PI"
               }
                if(n2 == 4){

                    resultado = "PB, PE, AL e RN"
               }
               if(n2 == 5){

                    resultado = "BA e SE"
               }
                if(n2 == 6){

                    resultado = "MG"
               }
               if(n2 == 7){

                    resultado = "RJ e ES"
               }
                if(n2 == 9){

                    resultado = "PR e SC"
               }
                if(n1 == ""){

                    resultado = "Cpf invalido"
               }
               if(n1.length < 11){

                    resultado ="Cpf invalido";
               }

          }
            document.getElementById("resultado").textContent = resultado
}           