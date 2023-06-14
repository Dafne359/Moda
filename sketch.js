let camisa;
let pantalon;
let chaqueta;
let zapatos;

function setup() {
  createCanvas(400, 400);
  
  camisa = loadImage("camisa.jpg");
  pantalon = loadImage("pantalon.jpg");
  chaqueta = loadImage("chaqueta.jpg");
  zapatos = loadImage("zapatos.jpg");
}

function draw() {
  background(220);
  
  image(camisa, 50, 100, 100, 200);
  image(pantalon, 150, 100, 100, 200);
  image(chaqueta, 250, 100, 100, 200);
  image(zapatos, 350, 100, 100, 200);
}


