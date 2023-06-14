let camisa;
let pantalon;
let chaqueta;
let zapatos;

function setup() {
  createCanvas(400, 400);
  
  
  camisa = loadImage("camisa.png");
  pantalon = loadImage("pantalon.png");
  chaqueta = loadImage("chaqueta.png");
  zapatos = loadImage("zapatos.png");
}

function draw() {
  background(220);
  
  // Mostrar las imágenes de las prendas de vestir
  image(camisa, 50, 100, 100, 200);
  image(pantalon, 150, 100, 100, 200);
  image(chaqueta, 250, 100, 100, 200);
  image(zapatos, 350, 100, 100, 200);
}

function mousePressed() {
  // Comprobar si se hizo clic en alguna prenda de vestir
  if (mouseX > 50 && mouseX < 150 && mouseY > 100 && mouseY < 300) {
    console.log("Has seleccionado una camisa.");
    // Agregar aquí la lógica adicional para la camisa seleccionada
  } else if (mouseX > 150 && mouseX < 250 && mouseY > 100 && mouseY < 300) {
    console.log("Has seleccionado unos pantalones.");
    // Agregar aquí la lógica adicional para los pantalones seleccionados
  } else if (mouseX > 250 && mouseX < 350 && mouseY > 100 && mouseY < 300) {
    console.log("Has seleccionado una chaqueta.");
    // Agregar aquí la lógica adicional para la chaqueta seleccionada
  } else if (mouseX > 350 && mouseX < 450 && mouseY > 100 && mouseY < 300) {
    console.log("Has seleccionado unos zapatos.");
    // Agregar aquí la lógica adicional para los zapatos seleccionados
  }
}
