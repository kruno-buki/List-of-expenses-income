export class Expenses {
    constructor(type, iznos, receiver, date, details) {
        this.type = type;
        this.iznos = iznos;
        this.receiver = receiver;
        this.date = date;
        this.details = details;
    }
    formatPlacanja() {
        return `${this.receiver} plaća HRK: ${this.iznos} za: ${this.details}  datuma: ${this.date.getDay()}. ${this.date.getMonth() + 1}.${this.date.getFullYear()}`;
    }
    forTablica() {
        let datum = `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`;
        return ['🔴' + this.type, this.iznos, this.receiver, datum, this.details];
    }
}
