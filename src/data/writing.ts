export const write={

    writeData: async (e:Event)=>{
        e.preventDefault();
        const form=document.querySelector('.forma-unos') as HTMLFormElement
        
        const informacije={
            type:form.tip.value,
            iznos:form.amount.value,
            toFrom:form.toFrom.value,
            date:form.date.value,
            details:form.details.value
        }
    
        console.log(JSON.stringify(informacije));
    
        await fetch( 'http://localhost:5001/popis', {
            method:'POST',
            body: JSON.stringify(informacije),
            headers:{'Content-Type':'application/json'},
        })
    },
 
}