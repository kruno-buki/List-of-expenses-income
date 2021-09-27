import { preload } from "./data/reading.js"
import { write } from "./data/writing.js"

const form=document.querySelector('.forma-unos') as HTMLFormElement

// const ucitaj=document.querySelector('#ucitaj')!

//* Učitavanje - preload podataka
window.addEventListener('DOMContentLoaded',(e)=>{
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
