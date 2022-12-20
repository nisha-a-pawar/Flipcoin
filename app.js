let heads = 0;
let tails = 0;

let coin = document.getElementById("coin");
let flipBtn = document.getElementById("filpcoin");
let resetBtn = document.getElementById("reset");
let result = document.getElementsByClassName("result");
// console.log(coin,flipBtn,resetBtn);

/* On click of button animate-heads/tails ainamtion */
function flipCoin() {
  /* Generate Random number 0 or 1 */
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  /* If i = 0 change to heads along with animation for flipping effect */
  if (i === 0) {
    setTimeout(function () {
      coin.style.animation = "flipheads 3s forwards"
    }, 100);
    
    heads++;
    /* Heads count increase by 1 */
   
  }
  /* Else i = change to tails along with animation for flipping effect */
  else {
    setTimeout(function () {
      coin.style.animation = "fliptails 3s forwards"
    }, 100);
    tails++;
   
  }
  //   console.log(0);

  setTimeout(updateCount, 3000);

  // calling disableflip() to make sure we can not click the button until the timeout time interval 
  disableflip();

}

function updateCount() {
  /* Display number of heads */
  let headsCount = document.querySelector("#heads").textContent = `Heads : ${heads}`;
  /* Display number of tails */
  let tailsCount = document.querySelector("#tails").textContent = `Tails : ${tails}`;




}
/* To reset the count to 0 */
function reset() {
  let headsCount = document.querySelector("#heads").textContent = `Heads : 0`;
  let tailsCount = document.querySelector("#tails").textContent = `Tails : 0`;

}
// defininig disableflip() to make sure we can not click the button until 3000 ms
function disableflip() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}

