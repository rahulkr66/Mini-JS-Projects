const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.boxes');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


for (box of boxes) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop',dragDrop)
}

function dragStart() {
    this.classList+=' hold';
    //fill class is immediately removed from
    //add a setTimeout function to prevent that event
    setTimeout(() => this.classList.remove('fill'), 0);
 
}
function dragEnd() {
    this.className='fill'
 
}
function dragOver(e) {
    e.preventDefault();
 
}
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered')
   
}
function dragLeave() {
    this.className = 'boxes'
   
}
function dragDrop() {
    this.className = 'boxes'
    this.append(fill);
  
}