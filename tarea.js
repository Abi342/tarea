function calcularEdad() 
{
  const fechaInput = document.getElementById("fechaNacimiento").value;
  const resultado = document.getElementById("resultado");

  if (!fechaInput) {
    resultado.textContent = "Por favor, ingresa tu fecha de nacimiento.";
    return;
  }

  const hoy = new Date();
  const nacimiento = new Date(fechaInput);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  resultado.textContent = `Tu edad es: ${edad} años.`;;
}

function limpiarCampos()
{
  document.getElementById("fechaNacimiento").value = "";
  document.getElementById("resultado").textContent = "";
}