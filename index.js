



firstScreen()
function resetFirstScreen(){
    const catalogueContainer=document.getElementById("catalogue-container")
    const catalogueImage=document.getElementById("img-catalogue")

    catalogueContainer.style.height="630px"
    catalogueContainer.style.maxHeight="630px"
        
    catalogueImage.style.height="300px"
    catalogueImage.style.maxHeight="300px"
    catalogueImage.style.transform="translateY(0)"
}
function resetSecondScreen(){
    const content=document.getElementById("content")
    const secondScreen=document.getElementById("second-screen")
    
    const listeProduit=content.childNodes
    for (var i=0; i<listeProduit.length; i++) {
        element=listeProduit[i]
        const name=element.id;
        if(name){ 
            document.getElementById(name).style.opacity="100%";
            document.getElementById(name).style.display="block";
            reset(name)
        }
    }
}
function reset(name){
    let produit=document.getElementById(name);
    let price=produit.querySelector(".img-price");

    let title=produit.querySelector(".description-container");
    let imgProduit=produit.querySelector(".img-product");
    let button=produit.querySelector(".button");

    let listElements=[price, title, imgProduit, button];
    

    for (var i=0; i<listElements.length; i++) {
        element=listElements[i]
        if(element&&element==price){
            element.style.transform="translateX(-300px)"
        }
        else if(element){
            element.style.transform="translateX(300px)"

        }
        
    }
}

async function firstScreen(){
    await sleep(1000)
    const catalogueContainer=document.getElementById("catalogue-container")
    const catalogueImage=document.getElementById("img-catalogue")
    const firstScreen=document.getElementById("first-screen")

    catalogueImage.style.maxHeight="200px"
    await sleep(500)
   catalogueImage.style.height=catalogueImage.clientHeight;
   //catalogueImage.style.transition="transform 1s"
    catalogueImage.style.maxHeight="120px"

    catalogueContainer.style.maxHeight = "45%";
    catalogueImage.style.transform="translateY(-30%)"
    await sleep(1000)
    firstScreen.style.transform="translateX(-100%)";
    await sleep(1000)
    firstScreen.style.display="none"
    firstScreen.style.transform="translate(0px,-100%)"; 
    firstScreen.style.transition="transform 1s";
    
    secondScreen();
}

async function secondScreen(){
    
    const content=document.getElementById("content")
    const secondScreen=document.getElementById("second-screen")
    secondScreen.style.display="block"
    const listeProduit=content.childNodes
    for (var i=0; i<listeProduit.length; i++) {
        element=listeProduit[i]
        const name=element.id;

        if(name){
            anim(name);
            await sleep(3500);
            document.getElementById(name).style.opacity="0%";
            await sleep(500);
            document.getElementById(name).style.display="none";
            
        }
    }

    resetFirstScreen();
    final()    
}
async function final(){
 const secondScreen=document.getElementById("second-screen")
 const fs=document.getElementById("first-screen");
 secondScreen.style.display="none";
 fs.style.display="block"
await sleep(100);
 fs.style.transform="translate(0px,0px)"; 
 await sleep(1000);

 firstScreen();
 await sleep(1000);
 resetSecondScreen();
}

async function anim(name){

    console.log("caca");
    let produit=document.getElementById(name);
    console.log(produit);
    let price=produit.querySelector(".img-price");

    let title=produit.querySelector(".description-container");
    let imgProduit=produit.querySelector(".img-product");
    let button=produit.querySelector(".button");

    let listElements=[price, title, imgProduit, button];
    console.log(listElements)
    
    await sleep(100);

    for (var i=0; i<listElements.length; i++) {
        element=listElements[i]
        console.log("dans boucle", element);
        element?element.style.transform="translateX(0)":null
    }

    

}
function sleep(ms) {
    console.log("attente");
    return new Promise(resolve => setTimeout(resolve, ms));
  }


