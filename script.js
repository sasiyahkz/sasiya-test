
const upload = document.getElementById('upload');
const preview = document.getElementById('preview');
const filterSelect = document.getElementById('filterSelect');

upload.addEventListener('change', () => {
    const file = upload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

filterSelect.addEventListener('change', () => {
    preview.className = filterSelect.value;
});

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = preview.src;
    link.click();
}

function toggleBlur() {
    const editor = document.querySelector('.editor');
    editor.classList.toggle('blur');
}

let isFlipped = false;
let rotation = 0;

function rotateImage() {
    rotation = (rotation + 90) % 360;
    preview.style.transform = `rotate(${rotation}deg)`;
}

function flipImage() {
    isFlipped = !isFlipped;
    preview.style.transform += ` scaleX(${isFlipped ? -1 : 1})`;
}

function addCartoonEffect() {
    preview.classList.toggle('cartoon');
}

function addFrame() {
    preview.classList.toggle('framed');
}

function addText() {
    const text = document.getElementById('overlayText').value;
    const ctx = document.createElement('canvas').getContext('2d');
    const img = document.getElementById('preview');
    const canvas = document.getElementById('canvas');
    const image = new Image();
    image.src = img.src;

    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        ctx.font = "40px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(text, canvas.width / 2, canvas.height - 50);
        img.src = canvas.toDataURL();
    };
}
