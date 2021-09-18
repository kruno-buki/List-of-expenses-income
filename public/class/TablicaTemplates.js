export class TablicaTemplates {
    constructor(row) {
        this.row = row;
    }
    render(items) {
        const tr = document.createElement('tr');
        const itemsArray = items.forTablica();
        let item; // kada iteriraš kroz objekt koriti ovo
        for (let item of itemsArray) {
            const td = document.createElement('td');
            td.textContent = item;
            tr.append(td);
        }
        this.row.append(tr);
    }
}
