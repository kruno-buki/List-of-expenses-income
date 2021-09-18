
// ! UČITAVANJE ELEMENATA




function ucitavanjeFormulara() {
    let tl = gsap.timeline();
    let element=document.querySelector('.form-wrapper')

    if(element!=null){
        tl.from(element, {
            y:150,
            duration: .7,
            ease: "slow",
            opacity:0,
    })
    return tl
    }
    return

}
function ucitavanjeElementata1() {
    let tl = gsap.timeline();
    let elementi=document.querySelectorAll('.polje')

    if(elementi!=null){
        //-----
        gsap.utils.toArray(elementi).forEach(e => {

            tl.from(e, {

                y: 100,
                x:70,
                
                duration: .2,
                ease: "slow",
                opacity: 0,
            })
        
        
        })
        
        
        // ----
   
    return tl
    }
    return

}

function ucitavanjeTablice() {
    let tl = gsap.timeline();
    let element=document.querySelector('table')

    if(element!=null){
        tl.from(element, {

        y: 100,
        x:40,
        duration: .5,
        ease: "slow",
        opacity: 0,
    })
    return tl
    }
    return

}
function ucitavanjeTBody() {
    let tl = gsap.timeline();
    let element=document.querySelector("body > div.tablica-wrapper > table > tbody")
       

    if(element!=null){
        tl.from(element, {
            y:100,
            x:70,
            duration: .4,
            ease: "slow",
            opacity:0
            
        })
    

    return tl
    }
    return

}


const master = gsap.timeline()
    .add(ucitavanjeFormulara())
    .add(ucitavanjeTablice())
    .add(ucitavanjeTBody()) 
    .add(ucitavanjeElementata1()) 
    
    

    // window.onload = ()=>{master}


// !-------------------------------------------------
// ? hover nad svim input elementima
let input = document.querySelectorAll("input")

//funkcija zajednička za nekoliko animacija
function hoverFunkcija(e) {
    let hover = gsap.to(e, {

        scale: 1.005,
        duration: .5,
        paused: true,
        ease: "slow",
        
        backgroundColor: "#5095d5af",

    })
    return hover
}

gsap.utils.toArray(input).forEach(e => {


    let hover=hoverFunkcija(e)

    e.addEventListener("mouseenter", () => hover.play());
    e.addEventListener("mouseleave", () => hover.reverse());

})
// -----------------------
// ? HOVER nad pojedinačnim elementom (tip-selektor)
let selectTip = document.querySelector('#tip')
let hoverTip =hoverFunkcija(selectTip)
selectTip.addEventListener("mouseenter", () => hoverTip.play());
selectTip.addEventListener("mouseleave", () => hoverTip.reverse());
// -------------------

// ? HOVER nad pojedinačnim elementom (textfield-)
let details = document.querySelector('#details')
let hoverDetails = hoverFunkcija(details)
/*
!inače:
let hoverDetails = gsap.to(details, {
    scale: 1.005,
    duration: .5,
    paused: true,
    ease: "slow",
    backgroundColor: '#25C89A',

})
*/
details.addEventListener("mouseenter", () => hoverDetails.play());
details.addEventListener("mouseleave", () => hoverDetails.reverse());
// -------------------

let dodaj=document.querySelector('#dodaj')
let tekstDodaj=document.querySelector('#tekstDodaj')

var tl = gsap.timeline({paused: true});  //ne zaboravi pauzirati

tl.to(dodaj, {
        backgroundColor: "#5095d5af",
        duration: .3,
        ease: "slow",
       
    })
    .to(tekstDodaj, {
       
        fontSize:"1.5rem",
        duration: .5,
        color:'#10155a', //#D72859
        ease: "elastic",
        letterSpacing:'6px'
    })

dodaj.addEventListener("mouseover", () => tl.play());
dodaj.addEventListener("mouseout", () => tl.reverse());


