import { Format } from "../interface/Format.js";
import { FormatTablica } from "../interface/FormatTablica.js";


export class Payment implements FormatTablica{

    constructor(
        private type:string,
        private readonly iznos:number,
        private client:string,
        private date:Date,
        private details:string,
    ){}

    forTablica():any[]{
        
        let datum=`${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`
        return ['🟢 '+this.type, this.iznos, this.client,datum, this.details]

    }
}