const reqAns = Math.floor(Math.random()*100);
let cnt = 0;

const btn = document.getElementById('submit-btn');

btn.addEventListener('click',(event) => checkResult(event));

function reload(){
    location.reload();
}

function checkResult(){
    event.preventDefault();
    cnt++;
    const input = document.getElementById('guess-num').value;
    const res = document.getElementById('result');
    const guessNum = parseInt(input);
    if(guessNum == reqAns){
        res.innerHTML = `Congrats, You have guessed the number in ${cnt} guesses.`;
        res.style.color = 'tomato';
        res.style.fontWeight = 'bolder';
        res.style.fontSize = 'larger';
        setTimeout(reload,3000);
    }else if(guessNum < reqAns){
        res.innerHTML = `You have guessed a smaller number. Think big.`;
    }else{
        res.innerHTML = `Thats too big. Think a smaller number.`;
    }
}