const upload = document.getElementById("upload");
const photo = document.getElementById("photo");

upload.onchange = () => {
  const file = upload.files[0];
  if (file) {
    photo.src = URL.createObjectURL(file);
    photo.style.filter = "none";
  }
};

function applyEffect(effectType) {
  switch (effectType) {
    case 'grayscale':
      photo.style.filter = "grayscale(100%)";
      break;
    case 'sepia':
      photo.style.filter = "sepia(100%)";
      break;
    case 'brightness':
      photo.style.filter = "brightness(120%)";
      break;
    case 'saturate':
      photo.style.filter = "saturate(200%)";
      break;
    case 'contrast':
      photo.style.filter = "contrast(150%)";
      break;
    case 'hue':
      photo.style.filter = "hue-rotate(90deg)";
      break;
    case 'invert':
      photo.style.filter = "invert(100%)";
      break;
  }
}
