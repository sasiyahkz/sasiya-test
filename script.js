const upload = document.getElementById("upload");
const photo = document.getElementById("photo");

upload.onchange = () => {
  const file = upload.files[0];
  if (file) {
    photo.src = URL.createObjectURL(file);
    photo.style.filter = "none";
  }
};

function applyBlur() {
  photo.style.filter = "blur(5px)";
}

function applyCartoon() {
  photo.style.filter = "contrast(200%) saturate(150%) brightness(110%)";
}

function resetImage() {
  photo.style.filter = "none";
}
