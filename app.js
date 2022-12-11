let heads =0;
let tails =0;

let coin =document.getElementById("coin");
let flipBtn =document.getElementById("filpcoin");
let resetBtn=document.getElementById("reset");
// console.log(coin,flipBtn,resetBtn);

 function flipCoin(){
    let i =Math.floor(Math.random()*2);
    coin.style.animation="none";
  
    if(i){
        setTimeout(function(){
          coin.style.animation="flipheads 3s forwards";
        },100);
        heads++;
    }
   
    else {
      setTimeout(function(){
         coin.style.animation="fliptails 2s forwards";
      },100);
      tails++;
      }
      console.log(0);

      setTimeout(updateCount ,1000);
      disableflip();
    
}

function updateCount(){
    
    let headsCount =document.querySelector("#heads").textContent = `Heads : ${heads}`;
    let tailsCount =document.querySelector("#tails").textContent = `Tails : ${tails}`;

    


}

function reset ()
{
    let headsCount =document.querySelector("#heads").textContent = `Heads : 0`;
    let tailsCount =document.querySelector("#tails").textContent = `Tails : 0`;

}

function disableflip()
{
    flipBtn.disabled =true;
    setTimeout(function(){
        flipBtn.disabled=false;
    },3000);
}

  