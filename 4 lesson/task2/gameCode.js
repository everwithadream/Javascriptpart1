//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok, o, n;

var answers = [];

event = main(works.a00,works.a0,works.a1,works.a2);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers.push(osave(works.a00,works.a1));
        event = main(works.b00,works.b0,works.b1,works.b2);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                answers.push(osave(works.b00,works.b1));
                event = main(works.d00,works.d0,works.d1,works.d2);
                switch (event) {
                    case 1:
                        answers.push(osave(works.d00,works.d1));
                        break;
                    case 2:
                        answers.push(osave(works.d00,works.d2));
                        break;
                    case -1:
                        break;
                    default: 
                        alert('Ошибка');
                }
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answers.push(osave(works.b00,works.b2));
                event = main(works.d00,works.d0,works.d1,works.d2);
                switch (event) {
                    case 1:
                        answers.push(osave(works.d00,works.d1));
                        break;
                    case 2:
                        answers.push(osave(works.d00,works.d2));
                        break;
                    case -1:
                        break;
                    default: 
                        alert('Ошибка');
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers.push(osave(works.a00,works.a2));
        event = main(works.c00,works.c0,works.c1,works.c2);
        switch (event) {
            case 1: // Второе действие
                answers.push(osave(works.c00,works.c1));
                event = main(works.d00,works.d0,works.d1,works.d2);
                switch (event) {
                    case 1:
                        answers.push(osave(works.d00,works.d1));
                        break;
                    case 2:
                        answers.push(osave(works.d00,works.d2));
                        break;
                    case -1:
                        break;
                    default: 
                        alert('Ошибка');
                }
                break;
            case 2: // Второе действие
                answers.push(osave(works.c00,works.c2));
                event = main(works.d00,works.d0,works.d1,works.d2);
                switch (event) {
                    case 1:
                        answers.push(osave(works.d00,works.d1));
                        break;
                    case 2:
                        answers.push(osave(works.d00,works.d2));
                        break;
                    case -1:
                        break;
                    default: 
                        alert('Ошибка');
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
do {
    n = +prompt("Введите номер вопроса для проверки.-1 - Выход из игры");
    if (n >= 1 && n <= 3) {
        alert("Ваш вопрос:"+answers[n-1].question+" Ваш ответ:"+answers[n-1].answer);
    }
    else if (n == -1) {
        alert('Проверка завершена');
    }
    else {
        alert('Нет такого номера вопроса!');
    }
} while (n != -1);
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function main(a,b,c,d) {
    do {
        ok = false;
        event = +prompt(a + c + d + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(b, event);
        }
    } while (!ok);
    return (event);
}

function osave(a,b) {
        var o = {
        question:a,
        answer:b,
    };
    return (o);
}

