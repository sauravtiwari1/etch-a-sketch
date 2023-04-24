// Get the grid element
const grid = document.getElementById("grid");

// get the grid size display element
const gridSizeDisplay = document.getElementById("grid-size-display");


// default grid size
let gridSize = 16;
// Set the initial grid size display
gridSizeDisplay.textContent = `${gridSize}x${gridSize}`;

// Set the default grid columns and rows
grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

// Calculate the total number of boxes to create
const totalGridItems = gridSize * gridSize;


// Define a function to change the color of a box
function changeBoxColor(box) {
  const eraserButton = document.getElementById("eraser-button");
  if (eraserButton.classList.contains("selected")) {
    box.style.backgroundColor = "";
  } else if (randomButton.classList.contains("selected")) {
    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  } else{
    // do nothing
  }
}



// Create and append boxes to the grid
for (let i = 0; i < totalGridItems; i++) {
  const box = document.createElement("div");
  box.classList.add("grid-item");
  grid.appendChild(box);


  // Add event listener to each box to change color
  
    // if clicked color will change
    box.addEventListener("mousedown", () => {
      changeBoxColor(box);
    });
    
    // if clicked and hovered, it will change color
    box.addEventListener("mouseover", (event) => {
      // Check if mouse button is pressed
      if (event.buttons === 1) {
        changeBoxColor(box);
      }
    });
}

// Get the grid slider element
const gridSlider = document.getElementById("grid-slider");


// Add an event listener to the slider to update the grid size
gridSlider.addEventListener("input", () => {
  // Get the value of the slider
  gridSize = gridSlider.value;

  // Set the grid columns and rows based on the slider value
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  // Remove any existing boxes from the grid
  grid.innerHTML = "";

  // Create and append new boxes to the grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const box = document.createElement("div");
    box.classList.add("grid-item");
    grid.appendChild(box);
    
  // Add event listener to each box to change color
  
    // if clicked color will change
    box.addEventListener("mousedown", () => {
      changeBoxColor(box);
    });
    
    // if clicked and hovered, it will change color
    box.addEventListener("mouseover", (event) => {
      // Check if mouse button is pressed
      if (event.buttons === 1) {
        changeBoxColor(box);
      }
    });

  }
    // Update the grid size display
    gridSizeDisplay.textContent = `${gridSize}x${gridSize}`;
});


// Get the clear button element
const clearButton = document.getElementById("clear-button");

// Add an event listener to the button to clear the grid
clearButton.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "";
  });
});


// Get the eraser button element
const eraserButton = document.getElementById("eraser-button");

// Add an event listener to the button to toggle the eraser mode
eraserButton.addEventListener("click", () => {
  eraserButton.classList.toggle("selected");
});


// Get the randomizer button element
const randomButton = document.getElementById("randomizer");
// Add an event listener to the button to toggle the randomizer mode
randomButton.addEventListener("click", () => {
  randomButton.classList.toggle("selected");
});