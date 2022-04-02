function calcular(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
      seletor = document.getElementById(`seletor`).value;
     switch (seletor) {
         case "+":
            var calculo = parseInt(n1) + parseInt(n2)
             document.getElementById(`res`).innerHTML = `O resultado é ${calculo}`
             document.getElementById('res').style.color = "white";
             document.getElementById('res').style.fontSize = '25px'
             if(Number.isNaN(calculo)){
                alert(` DIGITE UM NÚMERO `);
             }
             break;
     
         case "-":
             var calculo = (n1 - n2);
             document.getElementById(`res`).innerHTML = `O resultado é ${calculo}`
             break;
             case "*":
             var calculo = (n1 * n2);
             document.getElementById(`res`).innerHTML = `o resultado é ${calculo}`
             break;
             case "/":
             var calculo = Math.round((n1 / n2));
             document.getElementById(`res`).innerHTML = `o resultado é ${calculo}`
             break;
     }

         

        
    

  
} 