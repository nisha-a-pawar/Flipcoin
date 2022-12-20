let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#filpcoin");
let resetBtn = document.querySelector("#reset");

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "flipheads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "fliptails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats(){
    document.querySelector("#heads").textContent = `Heads: ${heads}`;
    document.querySelector("#tails").textContent = `Tails: ${tails}`;
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});