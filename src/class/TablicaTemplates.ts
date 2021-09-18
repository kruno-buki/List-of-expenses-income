import { FormatTablica } from "../interface/FormatTablica"

export class TablicaTemplates {

    constructor(private row: HTMLTableElement) {}

    render(items: FormatTablica) {
        const tr = document.createElement('tr')
        
        const itemsArray=items.forTablica()
    
        let item:keyof typeof items  // kada iteriraš kroz objekt koriti ovo

        for(let item of itemsArray){
            const td = document.createElement('td')
            td.textContent=item
            tr.append(td)
        }

        
        this.row.append(tr)
    }

}