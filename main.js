

function prevodCisla() {
    const inputCislo = document.getElementById("cislo").value;
    const binarniCisloVygener = parseInt(inputCislo, 10).toString(2);
    document.getElementById("vysledek").innerText = `je to ${binarniCisloVygener}`;
}