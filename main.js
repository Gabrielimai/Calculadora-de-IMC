function calcular() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("Weight").value;

  const imc = weight / height ** 2;
  let text = "";
  if (imc < 18.5) {
    text="Você está magro de mais"
  } else if (imc < 24.9) {
    text="Você está com o peso normal"
  } else if (imc < 29.9) {
     text="Você está com sobrepeso";
  } else if (imc < 39.9) {
    text="Você está com obesidade"
  } else if (imc > 39.9) {
    text="Você está com obesidade mórbida"
  }
  document.getElementById("textarea").innerText = text;
}
