//var cadena ="hola";
var cadenaEncriptada ="";

// button element
var buttonEncriptar = document.getElementById("Encriptar")

// touchstart handler
buttonEncriptar.addEventListener("touchStart", onlyTouch, false);

function onlyTouch(ev) {
        
        // Call preventDefault() to prevent any further handling
        console.log("Here a touchstart event is trigerred"); 
        ev.preventDefault();
        mostrarCambio();
}

// click event handler
buttonEncriptar.addEventListener("click", onlyClick, false); 

function onlyClick(ev) {

    // Call preventDefault() to prevent any further handling
    console.log("Here a click event is trigerred"); 
    ev.preventDefault();
    console.log("After triggering an event");
    mostrarCambio();
}

function cambioDeLetra() {
    let x = String.fromCharCode(event.keyCode)

    if (onkeypress = true){
        //let newcadena = cadena + x;
        encriptador(x);
    }
}

function mostrarCambio(){

    document.getElementById("out").innerHTML = "";
    document.getElementById("out").innerHTML = cadenaEncriptada;
    cadenaEncriptada = "";

}

function encriptador(cadena){
    
    for (var i = 0; i < cadena.length ; i++) {

        if(cadena[i] === cadena[i].toLowerCase()){
            switch(cadena[i]){
                case "a":
                cadenaEncriptada += "n";
                break;
                case "n":
                cadenaEncriptada += "a";
                break;
                case "b":
                cadenaEncriptada += "o";
                break;
                case "o":
                cadenaEncriptada += "b";
                break;
                case "c":
                cadenaEncriptada += "p";
                break;
                case "p":
                cadenaEncriptada += "c";
                break;
                case "d":
                cadenaEncriptada += "q";
                break;
                case "q":
                cadenaEncriptada += "d";
                break;
                case "e":
                cadenaEncriptada += "r";
                break;
                case "r":
                cadenaEncriptada += "e";
                break;
                case "f":
                cadenaEncriptada += "s";
                break;
                case "s":
                cadenaEncriptada += "f";
                break;
                case "g":
                cadenaEncriptada += "t";
                break;
                case "t":
                cadenaEncriptada += "g";
                break;
                case "h":
                cadenaEncriptada += "u";
                break;
                case "u":
                cadenaEncriptada += "h";
                break;
                case "i":
                cadenaEncriptada += "v";
                break;
                case "v":
                cadenaEncriptada += "i";
                break;
                case "j":
                cadenaEncriptada += "w";
                break;
                case "w":
                cadenaEncriptada += "j";
                break;
                case "k":
                cadenaEncriptada += "x";
                break;
                case "x":
                cadenaEncriptada += "k";
                break;
                case "l":
                cadenaEncriptada += "y";
                break;
                case "y":
                cadenaEncriptada += "l";
                break;
                case "m":
                cadenaEncriptada += "z";
                break;
                case "z":
                cadenaEncriptada += "m";
                break;
                case " ":
                cadenaEncriptada += " ";
                break;
            }
                    
        }else if(cadena[i] === cadena[i].toUpperCase()){
            switch(cadena[i]){
                case "A":
                cadenaEncriptada += "N";
                break;
                case "N":
                cadenaEncriptada += "A";
                break;
                case "B":
                cadenaEncriptada += "O";
                break;
                case "O":
                cadenaEncriptada += "B";
                break;
                case "C":
                cadenaEncriptada += "P";
                break;
                case "P":
                cadenaEncriptada += "C";
                break;
                case "D":
                cadenaEncriptada += "Q";
                break;
                case "Q":
                cadenaEncriptada += "D";
                break;
                case "E":
                cadenaEncriptada += "R";
                break;
                case "R":
                cadenaEncriptada += "E";
                break;
                case "F":
                cadenaEncriptada += "S";
                break;
                case "S":
                cadenaEncriptada += "F";
                break;
                case "G":
                cadenaEncriptada += "T";
                break;
                case "T":
                cadenaEncriptada += "G";
                break;
                case "H":
                cadenaEncriptada += "U";
                break;
                case "U":
                cadenaEncriptada += "H";
                break;
                case "I":
                cadenaEncriptada += "V";
                break;
                case "V":
                cadenaEncriptada += "I";
                break;
                case "J":
                cadenaEncriptada += "W";
                break;
                case "W":
                cadenaEncriptada += "J";
                break;
                case "K":
                cadenaEncriptada += "X";
                break;
                case "X":
                cadenaEncriptada += "K";
                break;
                case "L":
                cadenaEncriptada += "Y";
                break;
                case "Y":
                cadenaEncriptada += "L";
                break;
                case "M":
                cadenaEncriptada += "Z";
                break;
                case "Z":
                cadenaEncriptada += "M";
                break;
                case " ":
                cadenaEncriptada += " ";
                break;
            }
        }else if(cadena[i] != isNaN){
            cadenaEncriptada += cadena[i];
        }
    }

}
