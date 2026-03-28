
function copiarcontacto(what) {

    const Numero = "+53 52740140";
    const correo = "marcosprofessional128@gmail.com";
    const ghub = "todavia no tengo jeje";

    if (what == 1) {
        texto = Numero
    }
    if (what == 2) {
        texto = correo
    }
    if (what == 3) {
        texto = ghub
    }
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert("los datos de contacto han sido copiados al portapapeles.");
      })
      .catch(err => {
        console.error("Error al copiar: ", err);
      });
  }



drawbox(blue)