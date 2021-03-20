 
 var valor;
 var resultado;
 function botao(num){
    valor= document.cal.visor.value += num;
}

function reseta(){
    document.cal.visor.value ='';
}

function calcula(){
    resultado= eval(valor);
    document.cal.visor.value = resultado;
}