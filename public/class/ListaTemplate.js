export class ListaTemplate {
    constructor(row) {
        this.row = row;
    }
    render(item, tip) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.textContent = tip;
        li.append(h4);
        const p = document.createElement('p');
        p.textContent = item.formatPlacanja();
        li.append(p);
        this.row.append(li);
    }
}
