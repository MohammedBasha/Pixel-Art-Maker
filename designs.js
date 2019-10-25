// Creating variables of the elements
const INPUT_HEIGHT = document.getElementById("inputHeight"),
      INPUT_WIDTH = document.getElementById("inputWidth"),
      SUBMIT_BTN = document.getElementById("submitBtn"),
      COLOR_PICKER = document.getElementById("colorPicker"),
      PIXEL_CANVAS = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()

SUBMIT_BTN.addEventListener("click", makeGrid);

function makeGrid(e) {

  // Prevent the default submission action from taking palce
  e.preventDefault();
  
  // Empty the Canvas every new grid
  PIXEL_CANVAS.innerHTML = "";

  // Reserve the Height and Width input values after parse it to integer numbers
  let rows = parseInt(INPUT_HEIGHT.value),
      cells = parseInt(INPUT_WIDTH.value);

  // Loop for creating the rows
  for (let i = 0; i < rows; i++) {
    let row = PIXEL_CANVAS.insertRow(i);

    // Loop for creating the cells
    for (let x = 0; x < cells; x++) {
      let cell = row.insertCell(x);
    }
  }
}

