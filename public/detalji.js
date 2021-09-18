import { deleteRacun } from "./data/deleting.js";
import { preload } from "./data/reading.js";
deleteRacun;
window.addEventListener('DOMContentLoaded', preload.renderDetalji);
const brisanje = document.querySelector('.brisanje');
brisanje === null || brisanje === void 0 ? void 0 : brisanje.addEventListener('click', deleteRacun.deleteData);
