window.onload = function() {
    alert('Use the arrow keys to move Character 1:\n' +
          'Up Arrow: Move Up\n' +
          'Down Arrow: Move Down\n' +
          'Left Arrow: Move Left\n' +
          'Right Arrow: Move Right\n\n' +
          'Use W, A, S, D to move Character 2:\n' +
          'W: Move Up\n' +
          'S: Move Down\n' +
          'A: Move Left\n' +
          'D: Move Right');
};


document.addEventListener('keydown', function(event) {
    const character1 = document.getElementById('character1');
    const character2 = document.getElementById('character2');
    const step = 10;

    switch(event.key) {
        // Character 1 controls
        case 'ArrowUp':
            character1.style.top = `${character1.offsetTop - step}px`;
            break;
        case 'ArrowDown':
            character1.style.top = `${character1.offsetTop + step}px`;
            break;
        case 'ArrowLeft':
            character1.style.left = `${character1.offsetLeft - step}px`;
            break;
        case 'ArrowRight':
            character1.style.left = `${character1.offsetLeft + step}px`;
            break;

        // Character 2 controls
        case 'w':
            character2.style.top = `${character2.offsetTop - step}px`;
            break;
        case 's':
            character2.style.top = `${character2.offsetTop + step}px`;
            break;
        case 'a':
            character2.style.left = `${character2.offsetLeft - step}px`;
            break;
        case 'd':
            character2.style.left = `${character2.offsetLeft + step}px`;
            break;
    }

    
});
