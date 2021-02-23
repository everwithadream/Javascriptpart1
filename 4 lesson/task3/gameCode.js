var answer, ok;
var sum = 0;
console.log(works);
answer = main(works.a00,works.a1,works.a2,works.a3,works.a4,works.a5,works.a0);
switch (answer) {
    case works.a01:
        sum += 5;
        answer = main(works.b00,works.b1,works.b2,works.b3,works.b4,works.b5,works.b0);
        switch (answer) {
            case works.b01:
                sum += 5;
                answer = main(works.c00,works.c1,works.c2,works.c3,works.c4,works.c5,works.c0);
                switch (answer) {
                    case works.c01:
                        sum += 5;
                        answer = main(works.d00,works.d1,works.d2,works.d3,works.d4,works.d5,works.d0);
                        switch (answer) {
                            case works.d01:
                                sum += 5;
                                answer = main(works.e00,works.e1,works.e2,works.e3,works.e4,works.e5,works.e0);
                                switch (answer) {
                                    case works.e01:
                                        sum += 5;
                                        answer = main(works.f00,works.f1,works.f2,works.f3,works.f4,works.f5,works.f0);
                                        switch (answer) {
                                            case works.f01:
                                                sum += 5;
                                                alert('Поздравляем вы выйграли!\nВаш выйгрыш = '+sum+'у.е.');
                                            case -1:
                                                break;
                                            default: 
                                                alert('Ответ не верный!\nВаш выйгрыш = '+sum+'у.е.');
                                                break;
                                        }
                                    case -1:
                                        break;
                                    default: 
                                        alert('Ответ не верный!\nВаш выйгрыш = '+sum+'у.е.');
                                        break;
                                }
                            case -1:
                                break;
                            default: 
                                alert('Ответ не верный!\nВаш выйгрыш = '+sum+'у.е.');
                                break;
                        }
                    case -1:
                        break;
                    default: 
                        alert('Ответ не верный!\nВаш выйгрыш = '+sum+'у.е.');
                        break;
                }
            case -1:
                break;
            default: 
                alert('Ответ не верный!\nВаш выйгрыш = '+sum+'у.е.');
                break;
        }
    case -1:
        break;
    default: 
        alert('Ответ не верный!\nВаш выйгрыш = '+sum+'у.е.');
        break;
}          
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, e) {
    if (isNaN(e) || !isFinite(e)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (e < 1 || e > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}

function main(a,b,c,d,e,f,g) {
    do {
        ok = false;
        answer = +prompt(a + b + c + d + e + f);
        if (answer == -1) {
            break;
        }
        else {
            ok = isAnswer(g, answer)
        }
    } while (!ok);
    return (answer);
}
