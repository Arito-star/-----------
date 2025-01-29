// Функция для показа дополнительного текста в разделе "Статья 5"
function showText() {
    const extraText = document.getElementById("extra-text");
    if (extraText.style.display === "none") {
      extraText.style.display = "block";
    } else {
      extraText.style.display = "none";
    }
  }
