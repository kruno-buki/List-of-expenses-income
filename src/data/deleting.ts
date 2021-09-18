export const deleteRacun={
    deleteData:async()=>{
       
        let uri='  http://localhost:5001/popis/'
        let id=new URLSearchParams(window.location.search).get('id')
      
        await fetch(uri+id,{
            method:'DELETE'
        })

        window.location.replace('index.html')
  
    }
}