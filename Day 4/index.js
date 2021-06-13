const loadTxt = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
const int = setInterval(blur, 30);

function blur() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    
    loadTxt.innerText = `${load}%`;
    let opacityValue = (100 - load) / 100;
    loadTxt.style.opacity = `${opacityValue}`;
    let blurValue = ((100-load) / 100) * 30;
    console.log(blurValue);
    bg.style.filter = `blur(${blurValue}px)`;
}