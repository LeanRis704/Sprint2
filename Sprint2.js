function obtenerdatos(){
    let nombre = document.getElementById("nombrePersona").value
    let monto = document.getElementById("montoPersona").value
        if (nombre==""){
            alert("Por favor, ingrese un nombre!")
            document.getElementById("nombrePersona").focus();
        } else {
            if (monto==""){
                alert("Por favor, ingrese un monto!")
                document.getElementById("montoPersona").focus();
            }

            }
        }

const form = document.getElementById("datos");
form.addEventListener8("submit", function(evento){
    evento.preventDefault();
    let montoPersona = new FormTabla(form);

})
