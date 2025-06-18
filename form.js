let formulario = document.getElementById("formulario");
let input_nom = document.getElementById("nombre").value.trim();
let input_codigo_postal = document.getElementById("codigo_postal").value.trim();
let input_edad = document.getElementById("edad").value.trim();
let input_genero = document.getElementById("genero");
let input_intereses = document.getElementById("intereses").value.trim();
let input_comentarios = document.getElementById("comentarios");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

let valido = true;
const errorNombre = document.getElementById("error-nombre");
const errorCP = document.getElementById("error-cp");
const errorPais = document.getElementById("error-pais");
const errorCaptcha = document.getElementById("error-captcha");
const mensajeFinal = document.getElementById("mensaje-final");

    
  // Validación de nombre
  if (nombre === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
    errorNombre.style.display = "block";
    valido = false;
  }

  // Validación código postal (5 dígitos)
  if (!/^\d{5}$/.test(cp)) {
    errorCP.style.display = "block";
    valido = false;
  }

  // Validación país
  if (pais === "") {
    errorPais.style.display = "block";
    valido = false;
  }

  // Validación CAPTCHA (77 + 5 = 82)
  if (captcha !== 82) {
    errorCaptcha.style.display = "block";
    valido = false;
  }

  // Si todo está bien:
  if (valido) {
    mensajeFinal.textContent = "¡Formulario enviado correctamente! 🎉";
    mensajeFinal.scrollIntoView({ behavior: "smooth" });
    // Aquí puedes hacer un reset o enviar los datos a un servidor
  }
    
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
