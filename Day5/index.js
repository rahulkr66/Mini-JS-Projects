const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', addBoxes);

addBoxes();

function addBoxes() {
    const triggerHeight = window.innerHeight / 5 * 4;
    //console.log(triggerHeight);
    boxes.forEach(box => {
        const topHeight = box.getBoundingClientRect().top;
        //console.log(topHeight);
        if (topHeight < triggerHeight) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}