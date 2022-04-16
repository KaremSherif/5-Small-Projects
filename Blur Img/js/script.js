const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 20);

function blurring(){
    load++
    if(load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100 ,1 ,0);
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}

const scale =(num, in_min, inmax, outmin, outmax) =>{
    return (num - in_min) * (outmax - outmin) / (inmax - in_min) + outmin;
}