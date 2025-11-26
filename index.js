let defaultColor = "black";
const gridContainer = document.getElementById("grid-container");

const createGrid = (size) => {
  const squares = size * size;

  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.flexBasic = `${100 / size}%`;
    
    square.addEventListener("mouseenter", () => {
      if (defaultColor === "black") {
        square.style.backgroundColor = "black";
      } else if (defaultColor === "randomColor") {
        square.style.backgroundColor = getRandomColor();
      }
    });
    gridContainer.appendChild(square);
  }
};

createGrid(16);

const resetGrid = () => {
  let newGrid = parseInt(prompt("Enter new grid size (1-100):"))

  if (Number.isNaN(newGrid) || newGrid < 1) {
    alert("Please enter a valid number")
    return;
  }
  if (newSize > 100) newSize = 100;

  gridContainer.innerHTML = "";
  createGrid(newSize);
}







document.getElementById("")