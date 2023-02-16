const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color") 
const hasan = document.querySelector(".hasan")
btn.addEventListener("click", function(){
    let hexcolor = "#";
    for(let=i = 0; i<6; i++){
        hexcolor +=hex[getRandomNumber()] ;
    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
    document.querySelector(".hasan").style.color ="blue";
    
});

function getRandomNumber () {
    return Math.floor(Math.random() * hex.length)
}
const par = document.createElement("h1");
    const node = document.createTextNode("created by HASAN");
   const div2 = par.appendChild(node);
   let hasan1 =hasan.appendChild(div2);
   