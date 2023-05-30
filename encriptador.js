let cadUser="";
let cadEncripta=[];

function buttonEncriptar(){
    event.preventDefault();
    cadUser=document.getElementById("ingrese-frase").value;
    soloMinusculas();
    encriptador(cadUser);
    imprime();
}

function buttonDesencriptar(){
    event.preventDefault();
    cadUser=document.getElementById("ingrese-frase").value;
    soloMinusculas();
    desencriptador(cadUser);
    imprime();
}

function soloMinusculas( ){
    cadUser = cadUser.toLowerCase();
}
    
 function encriptador(cad){
    cadEncripta= cadUser
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
}

function desencriptador(cad){
    cadEncripta= cadUser
    .replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u")
}

function imprime(){
    document.getElementById("mensaje").textContent = cadEncripta;
}

function buttonCopiar(){
   var texto = document.getElementById("mensaje");
   texto.select();
   document.execCommand('copy');
}
    
