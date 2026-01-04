// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

// Funções
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Só retorna número minúsculo
};
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Só retorna número Maiúsculo
};
const getNumber = () => {
  return Math.floor(Math.random() * 10).toString(); // Só retorna número
};
const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)]; // Só retorna símbolos
};

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";
  const passwordLength = +lengthInput.value;
  const generators = [];

  // Faz a personalização da senha

  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }

  if (numbersInput.checked) {
    generators.push(getNumber);
  }

  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }

  if (symbolsInput.checked) {
    generators.push(getSymbol);
  }

  if (generators.length === 0) {
    return;
  }

  if (passwordLength <= 30) {

    // Fazer um loop para rodar as funções aleatoriamente
    for (let i = 0; i < passwordLength; i = i + generators.length) {
      generators.forEach(() => {
        const randomValue =
          generators[Math.floor(Math.random() * generators.length)]();
        password += randomValue;
      });
    }
    password = password.slice(0, passwordLength); // Retira os 2 últimos dígitos por que se não ficaria 12 caracteres
    generatePasswordElement.style.display = "block";
    generatePasswordElement.querySelector("h4").innerText = password;
  }
};


// Funcionalidades extras
const openCloseGeneratorButton = document.querySelector(
  "#open-generate-password"
);
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");


// Eventos
generatePasswordButton.addEventListener("click", (e) => {
  e.preventDefault();
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});

openCloseGeneratorButton.addEventListener("click", (e) => {
  generatePasswordContainer.classList.toggle("hide");
});

copyPasswordButton.addEventListener("click", (e) => {
  e.preventDefault();

  const password = generatePasswordElement.querySelector("h4").innerText;
  navigator.clipboard.writeText(password).then(() => {
    copyPasswordButton.innerText = "Senha copiada";

    setTimeout(() => {
      copyPasswordButton.innerText = "Copiar";
    }, 1000);
  });
});
