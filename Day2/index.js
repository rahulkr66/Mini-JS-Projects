const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//console.log(circles.length)

let currentlyActiveCircle = 1;

next.addEventListener('click', () => {
    currentlyActiveCircle++;
    
    if (currentlyActiveCircle > circles.length) {
        currentlyActiveCircle=circles.length;
    }
    update();
    
})

prev.addEventListener('click', () => {
    currentlyActiveCircle--;
    if (currentlyActiveCircle < 1) {
        currentlyActiveCircle = 1;
    }
    update();
    
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentlyActiveCircle) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })
    //incrementing the progress line
    const actives = document.querySelectorAll('.active');
  
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    //setting the button active state
    if (currentlyActiveCircle == 1) {
        prev.disabled = true;
    }
    else if (currentlyActiveCircle == circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
    
}