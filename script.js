let guessNumber = "Усть-Лабинск";
let tries = 10;

// String const
function restartMessage() {
 return "Уверен, что вам понравилось в этом городе!!!";
}
function triesMore() {
 return "Попыток осталось: " + tries;
}

// Boolean funcs
function isLose() {
 return tries === 0;
}
function isWin(number) {
 return guessNumber === number;
}
function isGt(number) {
 return guessNumber > number;
}
function isLt(number) {
 return guessNumber < number;
}

// Action funcs
function makeTriesLess() {
 tries--;
}

function init() {
 guessNumber = "Усть-Лабинск";
 tries = 10;
}
function win() {
 init();
 return `Правильно! ${restartMessage()}`;
}

function lose() {
 init();
 return `Попытки закончились - Вы проиграли. ${restartMessage()}`;
}

function gt() {
 makeTriesLess();
 return `Загаданное число больше. ${triesMore()}`;
}

function lt() {
 makeTriesLess();
 return `Загаданное число меньше. ${triesMore()}`;
}

function guess(number) {
 if (number=="Анапа") {
   return "Загаданный город находится восточнее";
 }
 if (number=="Краснодар") {
    return "Загаданный город находится восточнее";
  }
  if (number=="Тихорецк") {
    return "Загаданный город находится западнее";
  }
  if (number=="Сочи") {
    return "Загаданный город находится севернее";
  }
  if (number=="Геленджик") {
    return "Загаданный город находится восточнее";
  }
  if (number=="Новороссийск") {
    return "Загаданный город находится восточнее";
  }
  if (number=="Туапсе") {
    return "Загаданный город находится севернее";
  }
  if (number=="Кропоткин") { 
    return "Загаданный город находится западнее";
  }
if (isWin(number)) {
  return(win)
}
 return "ЗАГАДАЙ БОЛЕЕ ИЗВЕСТНЫЙ ГОРОД КРАСНОДАРСКОГО КРАЯ";
}

$(document).ready(function() {
    $(".btn").click(function() {
        const inputValue = $("input").val();
        const resultValue = guess(inputValue);
        const $result = $(".result");
        $result.html(resultValue);
      });

});

