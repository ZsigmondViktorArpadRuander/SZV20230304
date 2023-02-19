//UNIT tesztek
function Teszt1(){
    var tesztNev = "Elso DIV container class";

    try{
        let kontener = document.querySelector("div");
        if(kontener.classList.contains("container")){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }  
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt2(){
    var tesztNev = "Elso H1 margo";
    
    try{
        var h1 = document.querySelector("h1");

        if(h1.classList.contains("my-2")){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt3(){
    var tesztNev = "Elso input text";

    try{
        let inputok = document.querySelectorAll("input");

        if(inputok[0].type == "text"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt4(){
    var tesztNev = "Masodik input ID";

    try{
        let inputok = document.querySelectorAll("input");

        if(inputok[1].id == "email"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt5(){
    var tesztNev = "Elso input class";

    try{
        let inputok = document.querySelectorAll("input");

        if(inputok[0].classList.contains("form-control")){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt6(){
    var tesztNev = "Gomb tipus";

    try{
        var gomb = document.querySelector("button");

        if(gomb.type == "button"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt7(){
    var tesztNev = "Option 3db";

    try{
        var optok = document.querySelectorAll("option");

        if(optok.length == 3){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt8(){
    var tesztNev = "Elso label tartalom";

    try{
        var labelek = document.querySelectorAll("label");

        if(labelek[0].innerHTML == "Teljes nev"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Feladat1(){
    var tesztNev = "2. div row class";

    try{
        var divek = document.querySelectorAll("div");

        if(divek[1].classList.contains("row")){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Feladat2(){
    var tesztNev = "Elso H1 text-center";

    try{
        var h1 = document.querySelector("h1");

        if(h1.classList.contains("text-center")){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Feladat3(){
    var tesztNev = "Label 3db";

    try{
        var labelek = document.querySelectorAll("label");

        if(labelek.length == 3){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Feladat4(){
    var tesztNev = "3. input id munkakor";

    try{
        var select = document.querySelector("select");

        if(select.id == "munkakor"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Feladat5(){
    var tesztNev = "2. option jba";

    try{
        var optionok = document.querySelectorAll("option");

        if(optionok[1].value == "jba"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

//Tabla sor keszito
function TrKeszito(eredmenyek){
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(eredmenyek[0]));
    td2.appendChild(document.createTextNode(eredmenyek[1]));

    tr.appendChild(td1);
    tr.appendChild(td2);

    return tr;
}

//Tesztek meghivasa
function TesztHivasok(){
    var torzs = document.getElementById("torzs");

    torzs.appendChild(TrKeszito(Teszt1()));
    torzs.appendChild(TrKeszito(Teszt2()));
    torzs.appendChild(TrKeszito(Teszt3()));
    torzs.appendChild(TrKeszito(Teszt4()));
    torzs.appendChild(TrKeszito(Teszt5()));
    torzs.appendChild(TrKeszito(Teszt6()));
    torzs.appendChild(TrKeszito(Teszt7()));
    torzs.appendChild(TrKeszito(Teszt8()));

    torzs.appendChild(TrKeszito(Feladat1()));
    torzs.appendChild(TrKeszito(Feladat2()));
    torzs.appendChild(TrKeszito(Feladat3()));
    torzs.appendChild(TrKeszito(Feladat4()));
    torzs.appendChild(TrKeszito(Feladat5()));
}

TesztHivasok();