let formulario = document.getElementById("formulario");
let input_nom = document.getElementById("nombre");
let input_codigo_postal = document.getElementById("codigo_postal");
let input_edad = document.getElementById("edad");
let input_genero = document.getElementById("genero");
let input_intereses = document.getElementById("intereses");
let input_comentarios = document.getElementById("comentarios");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("El nombre es:  " + input_nom.value);

    if(input_codigo_postal.value.length==5){
        console.log("El código postal es válido " + input_codigo_postal.value);
    }else{
        console.log("El código postal no es válido ");
    }
    
    if(isNaN(input_edad.value)==true){
        console.log("La edad es numérica");
    }

    let genero=["masculino", "femenino","otro"];
    let input_genero=document.querySelector("input[name='genero']:checked");
    console.log("El género seleccionado es: " + input_genero.value);

     if(genero.indexOf(input_genero.value) != -1){
        console.log("Tu género es válida");
    }else{
        console.log("Tu género no es válida");
    }
    
    const checkboxes= document.querySelectorAll('input[name="intereses"]:checked');
    const interesesSeleccionados=[];

    checkboxes.forEach(function(checkbox){
        interesesSeleccionados.push(checkbox.value);
    })
    console.log("Intereses seleccionados: " + interesesSeleccionados.join(", "));

    console.log("Los comentarios fueron: " + input_comentarios.value);
});
