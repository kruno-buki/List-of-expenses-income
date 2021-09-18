export class Payment {
    constructor(type, iznos, client, date, details) {
        this.type = type;
        this.iznos = iznos;
        this.client = client;
        this.date = date;
        this.details = details;
    }
    forTablica() {
        let datum = `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`;
        return ['🟢 ' + this.type, this.iznos, this.client, datum, this.details];
    }
}
