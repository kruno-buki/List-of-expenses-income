import { Format } from "../interface/Format.js";
import { FormatTablica } from "../interface/FormatTablica.js";

export class Expenses implements FormatTablica {

    constructor(
        private type:string,
        private readonly iznos: number,
        private receiver: string,
        private date: Date,
        private details: string,
    ) {}

    formatPlacanja(): string {
        return `${this.receiver} plaća HRK: ${this.iznos} za: ${this.details}  datuma: ${this.date.getDay()}. ${this.date.getMonth()+1}.${this.date.getFullYear()}`
    }

    forTablica():any[]{
        let datum=`${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`
        return ['🔴'+this.type, this.iznos, this.receiver,datum, this.details]

    }
}