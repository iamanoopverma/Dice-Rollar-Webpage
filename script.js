function roll(){
    const images=['one.jpg','two.jpg','three.jpg','four.jpg','five.jpg','six.jpg'];
    const dice=document.getElementById("dice");
    const btn=document.getElementById("btn");
    const diceResult=document.getElementById("diceResult");
    let randomNumber=Math.floor(Math.random() * images.length);
    dice.style.animationPlayState="running";
    btn.disabled=true;
    setTimeout(()=>{
        dice.style.animationPlayState="paused";
        document.getElementById("dice").style.backgroundImage=`url(${images[randomNumber]})`; 
        diceResult.textContent=randomNumber+1;
        btn.disabled=false; 
    },3000);
    
}

