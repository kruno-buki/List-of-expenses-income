import { Payment } from "./class/Payment.js"
import { Expenses } from "./class/Expenses.js"
import { Format } from "./interface/Format.js"
import { FormatTablica } from "./interface/FormatTablica.js"
import {ListaTemplate} from "./class/ListaTemplate.js"
import { TablicaTemplates } from "./class/TablicaTemplates.js"
import { preload } from "./data/reading.js"
import { write } from "./data/writing.js"
import { deleteRacun } from "./data/deleting.js"


const form=document.querySelector('.forma-unos') as HTMLFormElement
const type=document.querySelector('#tip') as HTMLSelectElement
const toFrom=document.querySelector('#toFrom') as HTMLInputElement;
const detalji=document.querySelector('#details') as HTMLInputElement;
const now=new Date()
const datum=((<HTMLInputElement>document.querySelector('#datum')).valueAsDate)=now;
const iznos=document.querySelector('#amount') as HTMLInputElement;
const brisanje=document.querySelectorAll('tr')
// const ucitaj=document.querySelector('#ucitaj')!



//* Učitavanje - preload podataka
window.addEventListener('DOMContentLoaded',(e)=>{
// ucitaj.addEventListener('click',(e)=>{
    e.preventDefault()
    let values:[string,number,string,string,string]

    preload.fetchData().then(dobiveno=>{
        for(let item of dobiveno){
            
            let date = new Date(item.date)    
            let konvertDate=`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`          
            values = [item.type, item.iznos, item.toFrom, konvertDate, item.details]

            preload.renderHardcoded(values,item.id)
      
            
        }
    

    })


})


form.addEventListener('submit',(write.writeData))!
