const form = document.getElementById("formulario");
const input = document.getElementById("entrada");
const output = document.getElementById("salida");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = input.value;
    output.value = encriptarTexto(texto);
});

// Tabla de encriptación (sustitución)
const mapa = {
    a: "n", b: "o", c: "p", d: "q", e: "r", f: "s", g: "t",
    h: "u", i: "v", j: "w", k: "x", l: "y", m: "z",
    n: "a", o: "b", p: "c", q: "d", r: "e", s: "f",
    t: "g", u: "h", v: "i", w: "j", x: "k", y: "l", z: "m"
};

// Función de encriptación
function encriptarTexto(cadena) {
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];

        if (/[a-z]/.test(char)) {
        resultado += mapa[char] || char;
        } else if (/[A-Z]/.test(char)) {
        const lower = char.toLowerCase();
        resultado += mapa[lower] ? mapa[lower].toUpperCase() : char;
        } else {
        resultado += char;
        }
    }

    return resultado;
}

