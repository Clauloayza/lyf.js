/*function init(){
    //console.log(init);
    var bandera=document.getElementById("simbolo");
    var codigopais=document.getElementById("codigo");
    
    var banderaC= localStorage.getItem('srcimg');
    var codeC = localStorage.getItem('code');
    
    bandera.src=banderaC;
    codigopais.textContent=codeC;
    
   
}

var botonFlag = document.getElementById("btn-flag");
botonFlag.addEventListener("click",onFlagClick);

 function onFlagClick() {
    window.location.href="../paises.html";
}


function init()
{
    var imgFlag = document.getElementById("simbolo");
    
    var select = localStorage.getItem('cuntry_select'); 
    var country_url = paises[select].imageURL;
    
    imgFlag.src=country_url;
    
    // ------------------------- CODIGO
    var button = document.getElementById("next");
    button.addEventListener('click',onButtonClick);
}

// --------------------------------------
var inputNumber = document.getElementById("codigo");


function onButtonClick() {
    
    localStorage.setItem('Number', inputNumber.value);
    
    var mensajeNumber = document.getElementById("mensajeNumber");
    
    if(inputNumber.value == '') {
        mensajeNumber.innerHTML = "<br><h5 class='text-center' style='color:#FF1493';>Debes escribir tu número telefónico</h5>"
    } else {
        mensajeNumber.innerHTML = '';
        onCode();
        location.href = 'email.html';
    }
}

function onCode() {

    var lab = "LAB-";
    var aleatorio = Math.floor((Math.random()*999)+100);
    var concat = (lab += aleatorio);
    alert("Tu código de usuario es : " + concat);
}


function validateNumber(_evt){
    
    number = window.event.keyCode;


    if((number>=48 && number<=57)|| number==8 || number==32){
            
    } else {
        
        _evt.preventDefault();
    }     
} */



