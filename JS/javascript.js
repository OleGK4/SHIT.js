let hunger = 0;
let loop_flag = true;
let shit_flag = false;

function eat(food) {
    switch(food){
        case 'cheese':
            hunger += 20;
            alert("Вы съели сыр");
            break;
        case 'bread':
            hunger += 10;
            alert("Вы съели хлеб");
            break;
        case 'tomato':
            hunger += 50;
            alert("Вы съели помидор");
            break;
    }
    if (hunger >= 100){
        shit_flag = true;
        alert("Вы полностью насытились");
    }
}


function shit(){
    alert("Самое время посрать!");
    while (true){
        let cm = prompt("Введите количество оторванной бумаги в сантиметрах", '70');
        if (cm >= 60){
            alert("Господи, зачем тебе столько на твою то жопу?\nЛадно вытирайся, что с тобой поделать то.");
            break;
        }else if (cm == null || isNaN(cm)){
            alert("Дружище, надо бы подтереться, не уходи.");
            continue;
        }else if (cm <= 59){
            alert("Вполне рациональный расчёт.");
            break;
        }
    }
    while (true){
        let clean = prompt("Введите 'смыть' или 'свалить'", 'свалить');
        if(clean === 'смыть'){
            alert("Ой какой чистюля, малаца");
            break;
        }else if (clean === 'свалить'){
            alert("КТО НАСРАЛ И СЪЕБАЛСЯ??!?! ДЕРЖИ ЗАСРАНЦА!!!!");
            break;
        }else if (clean === null){
            alert("Куда уходишь? Перед тобой моральный выбор!")
            continue;
        }
    }
    while (true){
        let choice = (prompt("Продолжить цикл бесконечного потребления? ('да' || 'нет')", 'да'));
        if (choice === 'да') choice = true;
        if (choice === true){
            loop_flag = true;
            alert("Удачно ожиреть, дрыщ!");
            break;
        }else if (choice == null){
            alert("Друг, надо бы выбрать, не уходи!");
        }else{
            loop_flag = false;
            alert("Удачно побегать, жиробас!");
            break;
        }
    }
    hunger = 0;
    shit_flag = false;
}

do{
    eat(prompt("Что будет вашей сегодняшней трапезой? \n('cheese' || 'tomato' || 'bread')", 'toato'));
    if (shit_flag === true){
        shit();
    }
} while (loop_flag === true);


