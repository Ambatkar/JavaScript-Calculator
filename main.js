var button = document.getElementsByClassName("btn-1");
var display = document.getElementById("display");


var operator = 0;
var operand1 = null;
var operand2 = null;
var splFlg = 0


for(var  i=0; i < button.length; i++ ){
        button[i].addEventListener('click',function(){
            var nuInput = this.getAttribute('data-value')
            /*if(splFlg == 1){
                display.innerText = ""
                splFlg = 0;
            }*/
            if(nuInput == "num-mi"){
            operator = "-"
            operand1 = parseFloat(display.textContent);  
            display.innerText = ""    
            } 
            else if(nuInput == "num-add"){
                operator = "+"
                operand1 = parseFloat(display.textContent);  
                display.innerText = ""               
            }
            else if(nuInput == "num-d"){
                operator = "/"
                operand1 = parseFloat(display.textContent);  
                display.innerText = "" 

            }
            else if(nuInput == "num-ac"){
                operator = ""
                operand1 = ""
                operand2 = ""
                display.innerText = "" 
            }
            else if(nuInput == "num-du"){
                operator = "%"
                operand1 = parseFloat(display.textContent);  
                display.innerText = "" 
            }
            else if(nuInput == "num-m"){
                operator = "*"
                operand1 = parseFloat(display.textContent);  
                display.innerText = "" 
            }else if(nuInput == "num-eq"){
                splFlg = 1;
                operand2 = parseFloat(display.textContent); 
                 var fin = operand1 + operator + operand2;
                 display.innerText = eval(fin)
            }
            else{
                display.innerText += nuInput;
            }
            

        });
}