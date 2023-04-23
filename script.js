// Get the grid element
const grid = document.getElementById("grid");
// default grid size
const defaultGridSize= 64;

// Set the default grid columns and rows
grid.style.gridTemplateColumns = `repeat(${defaultGridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${defaultGridSize}, 1fr)`;

// Calculate the total number of boxes to create
const totalGridItems = defaultGridSize * defaultGridSize;

// Create and append boxes to the grid
for (let i = 0; i < totalGridItems; i++) {
  const box = document.createElement("div");
  box.classList.add("grid-item");
  grid.appendChild(box);
}