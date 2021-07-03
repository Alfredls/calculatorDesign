const dark = document.getElementById("active-dark");
const light = document.getElementById("active-light");
const calLight = document.getElementById("calculator");

const swichtbox = document.getElementById("swichtbox");
const basic = document.getElementById("basic");
const scientific = document.getElementById("scientific");

const btn1 = document.getElementById("button-1");
const btn2 = document.getElementById("button-2");
const btn3 = document.getElementById("button-3");
const btn4 = document.getElementById("button-4");
const btn5 = document.getElementById("button-5");
const btn6 = document.getElementById("button-6");
const btn7 = document.getElementById("button-7");
const btn8 = document.getElementById("button-8");
const btn9 = document.getElementById("button-9");
const btnZero = document.getElementById("button-zero");

const multiply = document.getElementById("button-multiply");
const divide = document.getElementById("button-divide");
const sum = document.getElementById("button-sum");
const minus = document.getElementById("button-minus");
const percent = document.getElementById("button-percent");
const point = document.getElementById("button-point");

const back = document.getElementById("button-back");
const clear = document.getElementById("button-clear");
const equal = document.getElementById("button-equal");

const lite = document.getElementById("buttom-lite");
const backLight = document.getElementById("btn-back");

const activeSpan = document.getElementById("active-span");

const operacion = document.getElementById("operaciones");
const resultado = document.getElementById("resultado");
const buttons = document.getElementById("buttons");

//////////////////////////////////////////////////

dark.addEventListener("click", () => {
  document.querySelector("#soundMix").play();

  lite.classList.add("light-lite");
  backLight.classList.add("btn-back__light");
  swichtbox.classList.add("swicht__box--show");
  basic.classList.add("txt-light");
  scientific.classList.add("txt-dark");

  activeSpan.classList.add("light");
  calLight.classList.add("calculator-light");
  btn1.classList.add("buttonLight");
  btn2.classList.add("buttonLight");
  btn3.classList.add("buttonLight");
  btn4.classList.add("buttonLight");
  btn5.classList.add("buttonLight");
  btn6.classList.add("buttonLight");
  btn7.classList.add("buttonLight");
  btn8.classList.add("buttonLight");
  btn9.classList.add("buttonLight");
  btnZero.classList.add("buttonLight");

  multiply.classList.add("buttonLight");
  divide.classList.add("buttonLight");
  sum.classList.add("buttonLight");
  minus.classList.add("buttonLight");
  percent.classList.add("buttonLight");
  point.classList.add("buttonLight");

  back.classList.remove("button--color");
  clear.classList.remove("button--color");
  equal.classList.remove("button--color");

  back.style.color = "#ffff";
  clear.style.color = "#ffff";
  equal.style.color = "#ffff";
});

//////////////////

light.addEventListener("click", () => {
  document.querySelector("#soundMix").play();

  lite.classList.remove("light-lite");
  backLight.classList.remove("btn-back__light");
  swichtbox.classList.remove("swicht__box--show");
  basic.classList.remove("txt-light");
  scientific.classList.remove("txt-dark");

  activeSpan.classList.remove("light");
  calLight.classList.remove("calculator-light");
  btn1.classList.remove("buttonLight");
  btn2.classList.remove("buttonLight");
  btn3.classList.remove("buttonLight");
  btn4.classList.remove("buttonLight");
  btn5.classList.remove("buttonLight");
  btn6.classList.remove("buttonLight");
  btn7.classList.remove("buttonLight");
  btn8.classList.remove("buttonLight");
  btn9.classList.remove("buttonLight");
  btnZero.classList.remove("buttonLight");

  multiply.classList.remove("buttonLight");
  divide.classList.remove("buttonLight");
  sum.classList.remove("buttonLight");
  minus.classList.remove("buttonLight");
  percent.classList.remove("buttonLight");
  point.classList.remove("buttonLight");

  back.classList.add("button--color");
  clear.classList.add("button--color");
  equal.classList.add("button--color");

  back.style.color = "rgba(53, 82, 89, 1)";
  clear.style.color = "rgba(53, 82, 89, 1)";
  equal.style.color = "rgba(53, 82, 89, 1)";
});

let operationComplete = false;

const lastValue = () =>
  operacion.textContent.substring(operacion.textContent.length - 2);

const writeOperantion = (text) => {
  if (
    operacion.textContent === "0" &&
    (text === " + " || text === " × " || text === " ÷ ")
  ) {
    operacion.textContent = "0";
  } else {
    if (operacion.textContent === "0" && text != ".")
      operacion.textContent = "";

    if (operationComplete && isNaN(text)) {
      operacion.textContent = resultado.textContent;
      operationComplete = false;
    }

    if (operationComplete && !isNaN(text)) {
      operacion.textContent = "";
      resultado.textContent = "0";
      operationComplete = false;
    }

    if (isNaN(lastValue()) && isNaN(text)) {
      operacion.textContent = operacion.textContent.substring(
        0,
        operacion.textContent.length - 2
      );
    }

    if (operacion.textContent.length > 14) {
      operacion.style.fontSize = "2rem";
    }
    operacion.textContent += text;
  }
};

//

function convert(txt) {
  let mult = txt.replace(/×/g, "*");
  return mult.replace(/÷/g, "/");
}

const writeResult = () => {
  resultado.textContent = eval(convert(operacion.textContent));
  operationComplete = true;
};

const goBack = () => {
  if (operacion.textContent.length > 14) {
    operacion.style.fontSize = "3rem";
  }

  if (operacion.textContent === "0" || operacion.textContent.length < 2) {
    operacion.textContent = "0";
  } else if (
    operacion.textContent.charAt(operacion.textContent.length - 1) === " "
  ) {
    console.log("Esta vacio");
    console.log(operacion.textContent.length);
    operacion.textContent = operacion.textContent.substring(
      0,
      operacion.textContent.length - 3
    );
    /* operacion.textContent = "0"; */
  } else {
    operacion.textContent = operacion.textContent.substring(
      0,
      operacion.textContent.length - 1
    );
  }
};

const resetScreen = () => {
  if (operacion.textContent.length > 14) {
    operacion.style.fontSize = "3rem";
  }
  operacion.textContent = 0;
  resultado.textContent = 0;
};

buttons.addEventListener("click", (e) => {
  switch (e.target.textContent) {
    case "=":
      document.querySelector("#soundKey").play();
      writeResult();
      break;
    case "C":
      document.querySelector("#soundKey").play();
      resetScreen();
      break;
    case "":
      document.querySelector("#soundKey").play();
      goBack();
      break;
    case ".":
      if (operacion.textContent.indexOf(".") != -1) {
        break;
      } else {
        document.querySelector("#soundKey").play();
        writeOperantion(".");
        break;
      }
    default:
      if (e.target.textContent.length > 3) {
        break;
      } else {
        document.querySelector("#soundKey").play();
        writeOperantion(e.target.textContent);
      }
  }
});
