//////////////////Задание 1
function func() {
    var
     b=0;
     result = prompt('Что было «завтра», а будет «вчера»?');
    if (result == 'Сегодня') {
    alert('Вы правы');
    b=b+1
    document.querySelector('#otvet').textContent = b;
    result = prompt('Каких камней нет ни в одном море?');
        if (result == 'Сухих') {
            alert('Вы правы');
            b=b+1
            document.querySelector('#otvet').textContent = b;
            result = prompt('Что можно видеть с закрытыми глазами?');
            if (result == 'Сон') {
                alert('Вы правы');
                b=b+1
                document.querySelector('#otvet').textContent = b;
  } else {
    alert('вы ошиблись ')
  }
}
}
}
//////////////////Задание 2
function sum() {
    var sum = 0;
    var i = 0;
    while(i <= 9){
      i=i+1;
      sum=sum+1;
      document.writeln(sum);
    }
}
///////////////////Задание 3
function stol() {
    do {
        alert('ну,еще по одной!');
    }
    while (prompt('введите стоп слово')!= 'стоп');
    alert('бывай');
}
//////////////////Задание 4
function factorial() {
    // Запрашиваем число у пользователя
    let num = prompt("Введите число для вычисления факториала:");
    // Преобразуем введенное значение в число
    num = parseInt(num);
    // Проверяем, является ли введенное значение числом
        if (isNaN(num)) {
            alert("Пожалуйста, введите число!");
            return;
        }
    // Проверяем, является ли число положительным
        if (num < 0) {
            alert("Пожалуйста, введите положительное число!");
            return;
    }
    // Вычисляем факториал
        let factorial = 1;
            for(let i = 1; i <= num; i++) {
             factorial *= i;
            }
    // Выводим результат
    alert(`Факториал числа ${num} равен ${factorial}`);
}
//////////////////Задание 5
function familiy() {
    // Запрашиваем фамилию у пользователя
    let surname = prompt("Введите фамилию для проверки:");
    // Проверяем, что пользователь что-то ввел
    if (!surname) {
        alert("Вы ничего не ввели!");
        return;
    }
    // Приводим к нижнему регистру и убираем пробелы
    surname = surname.toLowerCase().replace(/\s/g, '');
    // Создаем перевернутую строку
    let reversed = surname.split('').reverse().join('');
    // Проверяем, является ли палиндромом
    if (surname === reversed) {
        alert("Эта фамилия является палиндромом!");
    } else {
        alert("Эта фамилия не является палиндромом.");
    }
}
//////////////////Задание 6
function chislo() {
    // Запрашиваем число у пользователя
    let num = prompt("Введите ваш порядковый номер в журнале :");
    // Преобразуем в число и проверяем корректность ввода
    num = parseInt(num);
    if (isNaN(num) || num < 1) {
        alert("Ваш номер не может быть ниже 0");
        return;
    }
    // Функция для проверки, является ли число простым
    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    // Находим и выводим все простые числа
    let primeNumbers = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    if (primeNumbers.length > 0) {
        alert(`Простые числа от 1 до ${num}: ${primeNumbers.join(', ')}`);
    } else {
        alert("Простых чисел в указанном диапазоне нет");
    }
}