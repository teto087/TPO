function validarEmail(valor) {
    // tomada prestada de Internet ;-)

    console.log(valor);
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validEmail.test(valor)){
        
        console.log("verdadero");
        return true;
    } else {
     console.log("falso");   
     return false;
    }
  }



var getData = function(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;




    if (nombre == ""){
        document.getElementById("nombre").focus();
    } else {
        if (apellido == "") {
            document.getElementById("apellido").focus();
        } else {
            if (validarEmail(email)) {
                // document.getElementById("nombre").value = "";
                // document.getElementById("apellido").value = "";
                // document.getElementById("email").value = "";

                // document.getElementById("miForm").clearData();

                //EMILIANO: ACA DEBERIA RESETEAR EL FORMULARIO Y NO ENCONTRE COMO
                alert("Gracias por registrar sus datos.");

            } else {
                alert("Por favor revisar la dirección de email ingresada.");
                document.getElementById("email").focus();
            }
        }
    }


}


var clearData = function(){

    document.getElementById("miForm").reset();

    // document.getElementById("nombre").value = "";
    // document.getElementById("apellido").value = "";
    // document.getElementById("email").value = "";

}




