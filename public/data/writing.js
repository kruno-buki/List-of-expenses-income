var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const write = {
    writeData: (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const form = document.querySelector('.forma-unos');
        const informacije = {
            type: form.tip.value,
            iznos: form.amount.value,
            toFrom: form.toFrom.value,
            date: form.date.value,
            details: form.details.value
        };
        console.log(JSON.stringify(informacije));
        yield fetch('http://localhost:5001/popis', {
            method: 'POST',
            body: JSON.stringify(informacije),
            headers: { 'Content-Type': 'application/json' },
        });
    }),
};
