function Validation(values) {
  if (typeof values !== "object" || values === null) {
    throw new Error("Validation expects an object as parameter");
  }

  const error = {}; // Inicializar como un objeto vacío en lugar de un número
  const email_pattern = /^[^\s@]+@[^\s@]+\-[^\s@]+$/;
  const password_pattern = /^[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "Email should not be empty"; // Corregir el mensaje de error
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email format is invalid"; // Corregir el mensaje de error
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password format is invalid"; // Corregir el mensaje de error
  } else {
    error.password = "";
  }
  return error;
}
export default Validation;
