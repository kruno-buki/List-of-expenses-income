// ! UČITAVANJE dijelova

window.onload = ()=>{master}


function ucitavanjeFormulara() {
    let tl = gsap.timeline();
    let element=document.querySelector('.form-wrapper')

    if(element!=null){
        tl.from(element, {

        y: 100,
        x:-70,
        duration: .7,
        ease: "elastic",
        opacity: 0,
    })
    return tl
    }
    return

}



function ucitavanjeSviDetalji() {
    let tl = gsap.timeline();
    let element=document.querySelector('.sviDetaljiWrapper')

    if(element!=null){
        tl.from(element, {

        y: 100,
        x:-70,
        duration: .5,
        ease: "slow",
        opacity: 0,
    })
    return tl
    }
    return

}
function ucitavanjeDetalji1() {
    let tl = gsap.timeline();
    let element=document.querySelector('.detalji1')

    if(element!=null){
        tl.from(element, {

        y: 100,
        x:40,
        duration: .5,
        ease: "elastic",
        opacity: 0,
    })
    return tl
    }
    return

}

function ucitavanjeDetalji2() {
    let tl = gsap.timeline();
    let element=document.querySelector('.detalji2')

    if(element!=null){
        tl.from(element, {

        y: 100,
        x:-70,
        duration: .5,
        ease: "elastic",
        opacity: 0,
    })
    return tl
    }
    return

}

function ucitavanjeKontrola() {
    let tl = gsap.timeline();
    let element=document.querySelector('.kontrole')

    if(element!=null){
        tl.from(element, {

       duration: .8,
        ease: "slow",
        opacity: 0,
    })
    return tl
    }
    return

}

const master = gsap.timeline()
    .add(ucitavanjeSviDetalji())
    .add(ucitavanjeDetalji1()) 
    .add(ucitavanjeDetalji2())
    .add(ucitavanjeKontrola()) 

// ! HOVER NAD DELETE DUGMETOM


let brisanje=document.querySelector(".brisanje")
let deleteEmoji=document.querySelector("body > div.kontrole > button > span")

let tl1 = gsap.timeline({paused: true});  //ne zaboravi pauzirati

tl1.to(brisanje, {
        backgroundColor: "#e42b2bd0",
        duration: .3,
        ease: "slow",
       
    })
    .from(deleteEmoji, {
       
        duration: .8,
        position:'absolute',
        
        ease: "elastic",
        letterSpacing:'6px',
        opacity:0,
        x:50
    })

brisanje.addEventListener("mouseover", () => tl1.play());
brisanje.addEventListener("mouseout", () => tl1.reverse());


let pocetna=document.querySelector("div.kontrole > a")
let pocetnaEmoji=document.querySelector(".kontrole > a > span")

let tl2  = gsap.timeline({paused: true});  //ne zaboravi pauzirati

tl2.to(pocetna, {
        backgroundColor: "#3e70fad0",
        duration: .3,
        ease: "slow",
       
    })
    .from(pocetnaEmoji, {
       
        duration: .8,
        position:'absolute',
        
        ease: "elastic",
        letterSpacing:'6px',
        opacity:0,
        x:50
    })

    pocetna.addEventListener("mouseover", () => tl2.play());
    pocetna.addEventListener("mouseout", () => tl2.reverse());
    