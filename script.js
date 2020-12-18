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
function Conversaotemp(event){

     let temperatura = document.getElementById("temp").value
     let gf;
     let op = event.target.textContent
     let result

     if (op == "fahreinheit"){

          gf = (temperatura * 9/5) + 32;
          result = gf

         
     }
     if(op == "celcius"){

          gf = (temperatura - 32) * 5/9;
          result = gf
     }
     document.getElementById("resultado2").textContent = result


}      
function Conversaomoeda(event){




 
     let moeda = document.getElementById("moeda").value
     let Conversao
     let op = event.target.textContent
     let result

     if(op == "converter para dollar"){

          Conversao = moeda / 5,06;
          result = Conversao;

     }
     if(op == "converter para real"){

          Conversao = moeda * 5,06;
          result = Conversao;

     }
     document.getElementById("resultado3").textContent = result


}    
function parimpar(event){

     let numero = document.getElementById("num").value
     let op = event.target.textContent
     let result

     if(op == "Verificar"){

          if(numero % 2 == 0){

               result = "PAR"
          }
          else{

               result = "IMPAR"
          }

     }
     document.getElementById("resultado4").textContent = result

}
function calc(event){

     let num1 = parseFloat(document.getElementById("n1").value)
     let num2 = parseFloat(document.getElementById("n2").value)
     let op = event.target.textContent
     let result

     switch(op){

          case "+":
          result = num1 + num2;
          break;
          case "-":
          result = num1 - num2;
          break;
          case "*":
          result = num1 * num2;
          break;
          case "/":
          result = num1 / num2;
          break;
     }

     document.getElementById("resultado5").textContent = result;
}
function listar(event){

     let l = document.getElementById("lista").value
     let op = event.target.textContent
     let result
     if (op == "listar"){
          for(var i = 0;i <=l; i++){

               if(i % 2 !== 0){

                  result = alert(i)
               }
          }
         
         
          
     }

     document.getElementById("resultado6").textContent = result


}
function imc(event){

     let alt = document.getElementById("altura").value
     let peso = document.getElementById("peso").value
     let op= event.target.textContent
     let result

     if(op == "calcular"){

          result = peso/(alt * alt);
     }

     document.getElementById("resultado7").textContent = result.toFixed(2)


}
function primo(){

          let numero = document.getElementById("pri").value
          for(var i = 2; i < numero; i++){
        
               var resto = numero % i
       
               if (resto == 0) {
                   
                   document.getElementById("resultado8").textContent = "Não é primo"
                   i = n+1
               }
               else{
                    document.getElementById("resultado8").textContent = "Primo"
               }

        }  


}
function aleatorio(event){

     let num = document.getElementById("ale").value
     let rand
     let op = event.target.textContent

     if(op == "Gerar"){

          rand =  Math.floor(Math.random()*10 + 1);

          if(num == rand){
 
               document.getElementById("resultado9").textContent = `você acertou`
             }
             else{
                  document.getElementById("resultado9").textContent = `você errou` 
    
             }

     }   

     
}
