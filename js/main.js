// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

const listaSpesa = ["Pane","Zucchine", "Pesce", "Latte", "pomodori", "insalata", "formaggio"];

const lista = document.getElementById("lista");

let i = 0;

while (i < listaSpesa.length) {

    lista.innerHTML += `<div>${listaSpesa[i]}</div>`;


    i++;
}