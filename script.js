document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('signatureCanvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Start drawing
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    // Draw signature
    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    // Stop drawing
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    // Clear canvas
    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('savedSignature').src = '';
    });

    // Save signature
    // Save signature
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
    const dataUrl = canvas.toDataURL(); // Convert canvas to base64 data URL
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'signature.png'; // Set the filename
    link.click();
});

    
});
