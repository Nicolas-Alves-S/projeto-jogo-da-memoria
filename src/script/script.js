const emojis =[
   "🙈",
   "🙈",
   "🙉",
   "🙉",
   "🙊",
   "🙊",
   "🐵",
   "🐵",
   "🐶",
   "🐶",
   "🐺",
   "🐺",
   "🐭",
   "🐭",
   "🐼",
   "🐼" 
];
let opencard=[];// Array para armazenar as cartas abertas
// Embaralha os emojis
let shufflemojis = emojis.
sort(()=>(Math.random()> 0.5)? 1 : -1);
// Cria as cartas na tela
for(let i = 0; i < emojis.length; i++)
{
    let box = document.createElement
    ("div");
    box.className = "item";
    box.innerHTML = shufflemojis[i];
    box.onclick = handleclick;
    document.querySelector(".game").
    appendChild(box);
}
//aqui to pedindo pra checar se as duas cartas sao igual
function handleclick(){
    if(opencard.length < 2){
        this.classList.add("boxOpen");
        opencard.push(this);
    }
    if(opencard.length == 2) {
        setTimeout (checkmatch, 500); 
    }
}
function checkmatch(){
    if(opencard[0].innerHTML === opencard[1].innerHTML){
        opencard[0].classList.add("boxMatch");
        opencard[1].classList.add("boxMatch");
    }
else{
    opencard[0].classList.remove("boxOpen");
    opencard[1].classList.remove("boxOpen");   
}
opencard =[];

if(document.querySelectorAll(".boxMatch").length === emojis.length){
    alert("Você venceu !!");
}
}