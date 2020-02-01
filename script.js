let upId, downId;
let batteryCell;
let currentId = -1;
// d - direction
let d = 0; // 0 -вверх 1 - вправо 2 -вниз 3 -влево


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function processing() {
    // ищем клетку с батарейкой
    let str = $("#battery100").parent().attr("id").substring(); //id: 11
    batteryCell = parseInt(str.substr(4, str.length - 1));
    currentId = batteryCell;
    //
    upId = batteryCell - 10;
    downId = batteryCell + 10;


    // Просматриваем ячейки вокруг батареи
    if (
        $("#cell" + upId).find("img").length == 0 ||
        $("#cell" + downId).find("img").length == 0
    ) {
        console.log("Схема собрана неправильно");
        return;
    } else {
        console.log("The path is found!");
    }

    currentId = upId;
    while (1) {
        if (d === 0) { // moving up
            let arrowId = $("#cell" + currentId).find("img")[0].id;
            if (arrowId[0] === 'd') {
                console.log('correct arrow UP');
                // определяем направление (следующий шаг)
                if (arrowId[1] === "l") {
                    d = 3;
                    currentId -= 1;
                } else if (arrowId[1] === "u") {
                    d = 0;
                    currentId -= 10;
                } else if (arrowId[1] === "r") {
                    d = 1;
                    currentId += 1;
                }
            } else {
                console.log('Arrow INcorrect!!!');
                break;
            }

            console.log("currentId: " + currentId);
        } else if (d === 1) {  // moving right
            let arrowId = $("#cell" + currentId).find("img")[0].id;
            if (arrowId[0] === 'l') {
                console.log('correct arrow RIGHT');
                // определяем направление (следующий шаг)
                if (arrowId[1] === "u") {
                    d = 0;
                    currentId -= 10;
                } else if (arrowId[1] === "r") {
                    d = 1;
                    currentId += 1;
                } else if (arrowId[1] === "d") {
                    d = 2;
                    currentId += 10;
                }
            } else {
                console.log('Arrow INcorrect!!!');
                break;
            }
            console.log("currentId: " + currentId);
        } else if (d === 2) {  // moving down
            let arrowId = $("#cell" + currentId).find("img")[0].id;
            if (arrowId[0] === 'u') {
                console.log('correct arrow DOWN');
                // определяем направление (следующий шаг)
                if (arrowId[1] === "l") { // L маленькая
                    d = 3;
                    currentId -= 1;
                } else if (arrowId[1] === "r") {
                    d = 1;
                    currentId += 1;
                } else if (arrowId[1] === "d") {
                    d = 2;
                    currentId += 10;
                }
            } else {
                console.log('Arrow INcorrect!!!');
                break;
            }
            console.log("currentId: " + currentId);
        } else if (d === 3) {  // moving left
            let arrowId = $("#cell" + currentId).find("img")[0].id;
            if (arrowId[0] === 'r') {
                console.log('correct arrow LEFT');
                // определяем направление (следующий шаг)
                if (arrowId[1] === "l") { // L маленькая
                    d = 3;
                    currentId -= 1;
                } else if (arrowId[1] === "u") {
                    d = 0;
                    currentId -= 10;
                } else if (arrowId[1] === "d") {
                    d = 2;
                    currentId += 10;
                }
            } else {
                console.log('Arrow INcorrect!!!');
                break;
            }
            console.log("currentId: " + currentId);
        }
    }


}

function checkitem(cell, pic) {
    return $("#" + cell).find("." + pic).length == 1;
}


