function spawnFigur() {
  const figur = document.createElement("img");
  figur.src = "figur1.png"; // bisa diganti array random figur
  figur.classList.add("figur");

  // random posisi kiri
  figur.style.left = Math.random() * 90 + "%";

  // random ukuran
  let size = 80 + Math.random() * 80; // 80px – 160px
  figur.style.width = size + "px";

  // random durasi animasi
  let duration = 5 + Math.random() * 5; // 5s – 10s
  figur.style.animation = `fallRotate ${duration}s linear forwards`;

  // masukin ke container
  document.querySelector(".container").appendChild(figur);

  // hapus setelah selesai animasi
  setTimeout(() => {
    figur.remove();
  }, duration * 1000);
}

// spawn figur terus2 tiap beberapa detik
setInterval(spawnFigur, 1500);
