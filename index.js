let defaultColor = "black";
const gridContainer = document.getElementById("grid-container");

const createGrid = (size) => {
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.flexBasis = `${100 / size}%`;
    
    square.addEventListener("mouseenter", () => {
      if (defaultColor === "black") {
        square.style.backgroundColor = "black";
      } else if (defaultColor === "randomColor") {
        square.style.backgroundColor = randomColor();
      }
    });
    gridContainer.appendChild(square);
  }
};
createGrid(16);

const resizeGrid = () => {
  let newGrid = parseInt(prompt("Enter new grid size (1-100):"))

  if (Number.isNaN(newGrid) || newGrid < 1) {
    alert("Please enter a valid number")
    return;
  }
  if (newGrid > 100) newGrid = 100;

  gridContainer.innerHTML = "";
  createGrid(newGrid);
};

const resetGrid = () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.style.backgroundColor = "white";
  })
};

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

document.getElementById("resize-btn").addEventListener("click", resizeGrid);
document.getElementById("reset-btn").addEventListener("click", resetGrid);
document.getElementById("random-btn").addEventListener("click", () => {defaultColor = "randomColor"});
document.getElementById("default-btn").addEventListener("click", () => {defaultColor = "black"})