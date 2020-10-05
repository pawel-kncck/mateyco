window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let isDrawing = false;

    function startPosition() {
        isDrawing = true;
    }

    function finishPosition() {
        isDrawing = false;
    }

    function draw(e) {
        if (isDrawing) {
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            
        }
    }

    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', finishPosition)

})

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})