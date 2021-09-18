import {
    Format
} from "../interface/Format.js";


export class ListaTemplate {

    constructor(private row: HTMLUListElement) {}

    render(item: Format, tip: string) {
        const li = document.createElement('li')
        const h4 = document.createElement('h4')

        h4.textContent = tip;
        li.append(h4)

        const p = document.createElement('p')
        p.textContent = item.formatPlacanja()
        li.append(p)
        
        this.row.append(li)
    }

}