import { preload } from "./data/reading.js";
import { write } from "./data/writing.js";
const form = document.querySelector('.forma-unos');
const type = document.querySelector('#tip');
const toFrom = document.querySelector('#toFrom');
const detalji = document.querySelector('#details');
const now = new Date();
const datum = (document.querySelector('#datum').valueAsDate) = now;
const iznos = document.querySelector('#amount');
const brisanje = document.querySelectorAll('tr');
// const ucitaj=document.querySelector('#ucitaj')!
//* Učitavanje - preload podataka
window.addEventListener('DOMContentLoaded', (e) => {
    // ucitaj.addEventListener('click',(e)=>{
    e.preventDefault();
    let values;
    preload.fetchData().then(dobiveno => {
        for (let item of dobiveno) {
            let date = new Date(item.date);
            let konvertDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
            values = [item.type, item.iznos, item.toFrom, konvertDate, item.details];
            preload.renderHardcoded(values, item.id);
        }
    });
});
form.addEventListener('submit', (write.writeData));
