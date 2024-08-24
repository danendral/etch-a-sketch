const container = document.querySelector("#container");

container.style.width = "960px";
container.style.height = "960px";

container.style.display = "flex";
container.style.flexDirection = "column";

// Function to generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// Function to create grid based on the size
function createGrid(gridSize) {
    container.innerHTML = "";

    for (let i=0; i<gridSize; i++) {
        const containerRow = document.createElement("div");
    
        containerRow.style.display = "flex";
        containerRow.style.flex = "1 1 100%";
        
        for (let j=0; j<gridSize; j++) {
            const gridItem = document.createElement("div");
            gridItem.style.flex = "1 1 100%";
            gridItem.style.border = "solid 1px";

            // Add event listener for hover with random color
            gridItem.addEventListener("mouseover", () => {
                gridItem.style.background = generateRandomColor();
                console.log(generateRandomColor());
            })    
            containerRow.appendChild(gridItem);
        }
    
        container.appendChild(containerRow);
    }    

}
createGrid(16);


// Resize grid size when user click the resize button
const resizeButton = document.querySelector("#resizeButton");

resizeButton.addEventListener("click", () => {
    let gridSize = prompt("Enter grid size: ", 16);

    // Validate the input
    if (gridSize !== null) {
        gridSize = parseInt(gridSize);

        while (isNaN(gridSize) || gridSize <= 0 || gridSize >= 100) {
            alert("Invalid input! Please eneer a number between 0 and 100")
            gridSize = prompt("Enter grid size: ", 16);
        } 
        createGrid(gridSize);
    }
} );