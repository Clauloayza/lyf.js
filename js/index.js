function init(){
    //console.log(init);
    var bandera=document.getElementById("bandera");
    var codigopais=document.getElementById("codigopais");
    
    var banderaC= localStorage.getItem('srcimg');
    var codeC = localStorage.getItem('code');
    
    bandera.src=banderaC;
    codigopais.textContent=codeC;
}



