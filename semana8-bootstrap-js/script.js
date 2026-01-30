// ====== BOTÓN DE ALERTA ======
const btnAlerta = document.getElementById("btnAlerta");
btnAlerta.addEventListener("click", () => {
  alert("🏡 ¡Promo en Lago Agrio! Comisión reducida por tiempo limitado. Escríbenos para más info.");
});

// ====== VALIDACIÓN DEL FORMULARIO ======
const form = document.getElementById("formContacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const msgExito = document.getElementById("msgExito");
const btnLimpiar = document.getElementById("btnLimpiar");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setValid(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
}

function setInvalid(input) {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
}

function validarNombre() {
  const v = nombre.value.trim();
  if (v.length >= 3) { setValid(nombre); return true; }
  setInvalid(nombre); return false;
}

function validarCorreo() {
  const v = correo.value.trim();
  if (emailRegex.test(v)) { setValid(correo); return true; }
  setInvalid(correo); return false;
}

function validarMensaje() {
  const v = mensaje.value.trim();
  if (v.length >= 10) { setValid(mensaje); return true; }
  setInvalid(mensaje); return false;
}

// Validación en tiempo real
nombre.addEventListener("input", validarNombre);
correo.addEventListener("input", validarCorreo);
mensaje.addEventListener("input", validarMensaje);

// Envío del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ok1 = validarNombre();
  const ok2 = validarCorreo();
  const ok3 = validarMensaje();

  if (ok1 && ok2 && ok3) {
    msgExito.classList.remove("d-none");

    // Simular envío y limpiar
    setTimeout(() => {
      form.reset();
      [nombre, correo, mensaje].forEach(el => el.classList.remove("is-valid", "is-invalid"));
    }, 1200);
  } else {
    msgExito.classList.add("d-none");
  }
});

// Botón limpiar
btnLimpiar.addEventListener("click", () => {
  msgExito.classList.add("d-none");
  [nombre, correo, mensaje].forEach(el => el.classList.remove("is-valid", "is-invalid"));
});