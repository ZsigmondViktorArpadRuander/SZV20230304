/*
    - Keszitsd el az alabbi teszteket tetszoleges
    tablabahelyezesi megoldassal:
        - 3db radiobutton van-e
        - E-mail type email-e
        - 2db szoveges input van-e
        - Az inputok mindegyike rendelkezik-e
        a form-control classal
*/

function Teszt1(){
    var tesztNev = "3db radio";

    try{
        var inputok = document.querySelectorAll("input");

        var db = 0;

        for(var i = 0; i < inputok.length; i++){
            if(inputok[i].type == "radio"){
                db++;
            }
        }

        if(db == 3){
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
    var tesztNev = "E-mail input";

    try{
        var inputok = document.querySelectorAll("input");

        var email = 0;

        while(email < inputok.length && !(inputok[email].type == "email")){
            email++;
        }

        if(email < inputok.length){
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
    var tesztNev = "3db text";

    try{
        var inputok = document.querySelectorAll("input");

        var db = 0;

        for(var i = 0; i < inputok.length; i++){
            if(inputok[i].type == "text"){
                db++;
            }
        }

        if(db == 2){
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
    var tesztNev = "Form-control classok";

    try{
        var inputok = document.querySelectorAll("input");
        var db = 0;

        for(var i = 0; i < inputok.length; i++){
            if(inputok[i].classList.contains("form-control")){
                db++;
            }
        }

        if(db == inputok.length){
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

function TrKeszito(eredmeny){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(eredmeny[0]));
    td2.appendChild(document.createTextNode(eredmeny[1]));

    tr.appendChild(td1);
    tr.appendChild(td2);

    return tr;
}

//komment

function TesztHivasok(){
    var torzs = document.getElementById("torzs");

    torzs.appendChild(TrKeszito(Teszt1()));
    torzs.appendChild(TrKeszito(Teszt2()));
    torzs.appendChild(TrKeszito(Teszt3()));
    torzs.appendChild(TrKeszito(Teszt4()));
}

TesztHivasok();