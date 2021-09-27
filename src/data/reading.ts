

export const preload = {

    renderHardcoded: async (items: any[], id: any) => {

        const tbody=document.querySelector('tbody')!
        const tr = document.createElement('tr')
    
        const table = document.querySelector('table') !
            
        items[4] = items[4].slice(0,50) + '...'
      
        for (let item of items) {
            const td = document.createElement('td')
            
            if(item==='trošak'){
                tr.classList.add('red_boja_trosak')
            }
            if(item=='prihod'){
                tr.classList.add('red_boja_prihod')
            }
            td.textContent = item
            tr.append(td)

        }


        let td = document.createElement('td')
        let template = ''
        template = `<a href="detalji.html?id=${id}" class="read_more">Read more <span>👉🏻</span></a>`
        td.innerHTML = template
        tr.append(td)
        tbody?.insertAdjacentElement("afterbegin",tr)
        table.append(tbody)


    },

    renderDetalji: async () => {

        console.log('tu smo');

        const id = new URLSearchParams(window.location.search).get('id')
        let uri = 'http://localhost:5001/popis/'
        // const res = await fetch('http://localhost:5001/posts/' + id);
        const res = await fetch(uri + id)
        const json = await res.json()
        console.log(json);
        let template1 = ''
        let template2 = ''

        let detalji1 = document.querySelector('.detalji1') !
        let detalji2 = document.querySelector('.detalji2') !

        
     
        template1 += 
        `
        
            <p class="det1">TIP: <span>${json.type}</span></p>
            <p class="det1">IZNOS: <span>${json.iznos} HRK</span> </p>
            <p class="det1">PREMA/OD: <span>${json.toFrom}</span></p>
            <p class="det1">DATUM: <span>${json.date}</span></p>
            
        `
       if(json.type==='trošak'){
            detalji1.classList.add('red_boja_trosak')
        }
        if(json.type=='prihod'){
            detalji1.classList.add('red_boja_prihod')
        }
        template2 += 
        `
            
                <p>OPIS:</p> 
                <div>${json.details}</div> 
                                   
        `

        detalji1.innerHTML = template1
        detalji2.innerHTML=template2

    },
 
    fetchData: async () => {
        let uri = 'http://localhost:5001/popis/'

        const res = await fetch(uri)

        if (res.ok) {
            let json = await res.json()
            return json
        } else {
            console.log("HTTP ERROR: " + res.status);
        }
    }

}