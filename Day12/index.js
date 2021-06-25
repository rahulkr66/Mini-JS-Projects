const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const sizeElement = document.getElementById('size');
const colorElement = document.getElementById('color');
const clear=document.getElementById('clear');


let color = 'black';
let size = 4;
let x;
let y;
let isPressed = false;

sizeElement.innerText = size;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

colorElement.addEventListener('change', (e) => color = e.target.value);

increase.addEventListener('click', () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSizeOnToolBox(size);
    
})


decrease.addEventListener('click', () => {
    size -= 5;
    if (size < 4) {
        size = 4;
    }
    updateSizeOnToolBox(size);
})

function updateSizeOnToolBox(size) {
    sizeElement.innerText = size;
}

clear.addEventListener('click', () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
})
