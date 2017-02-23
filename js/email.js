function validateName(_evt){
	var name = document.getElementById('name');
	
	if(name.value == ""){
		name.innerHTML = 'completar campo';
	}else{
		var nameArray = name.value.split("");
		var primeraLetra = nameArray[0];
		var mayuscula = primeraLetra.toUpperCase();
		var espacio = false;
		
		for(var i=1; i<nameArray.length; i++){
			if(espacio){
            mayuscula += nameArray[i].toUpperCase();
            espacio =false;
        }else
			mayuscula += nameArray[i];
			if(nameArray[i] ==" ")
			espacio = true;
           
					
			}
		}
	}
