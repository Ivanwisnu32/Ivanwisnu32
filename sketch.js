function setup() {
  // Membuat canvas 3D
  createCanvas(600, 600, WEBGL);
}

function draw() {
  // Mengatur latar belakang dan pencahayaan
  background(200);
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(150);

  // Menambahkan rotasi dasar untuk tampilan
  rotateY(frameCount * 0.01);

  // Bagian tubuh
  push();
  fill(255, 200, 150); // Warna tubuh
  translate(0, -100, 0); // Posisikan tubuh
  box(50, 100, 30); // Torso
  pop();

  // Kepala
  push();
  fill(255, 220, 200); // Warna kepala
  translate(0, -180, 0); // Posisikan kepala
  sphere(30); // Kepala
  pop();

  // Lengan Kiri
  push();
  fill(255, 200, 150);
  translate(-40, -120, 0); // Posisi lengan kiri
  rotateZ(sin(frameCount * 0.05) * PI / 4); // Gerakan
  box(15, 60, 15); // Lengan
  pop();

  // Lengan Kanan
  push();
  fill(255, 200, 150);
  translate(40, -120, 0); // Posisi lengan kanan
  rotateZ(-sin(frameCount * 0.05) * PI / 4); // Gerakan
  box(15, 60, 15); // Lengan
  pop();

  // Kaki Kiri
  push();
  fill(150, 100, 50); // Warna celana
  translate(-20, 0, 0); // Posisi kaki kiri
  rotateX(cos(frameCount * 0.05) * PI / 6); // Gerakan
  box(15, 80, 15); // Kaki
  pop();

  // Kaki Kanan
  push();
  fill(150, 100, 50);
  translate(20, 0, 0); // Posisi kaki kanan
  rotateX(-cos(frameCount * 0.05) * PI / 6); // Gerakan
  box(15, 80, 15); // Kaki
  pop();
}

