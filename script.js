const container = document.querySelector("#container");

container.style.width = "960px";
container.style.height = "960px";

container.style.display = "flex";
container.style.flexDirection = "column";

// Function to create grid based on the size
function createGrid(gridSize) {
    for (let i=0; i<gridSize; i++) {
        const containerRow = document.createElement("div");
    
        containerRow.style.display = "flex";
        containerRow.style.flex = "1 1 100%";
        
        for (let j=0; j<gridSize; j++) {
            const gridItem = document.createElement("div");
            gridItem.style.flex = "1 1 100%";
            gridItem.style.border = "solid 1px"
            gridItem.addEventListener("mouseover", () => {
                gridItem.style.backgroundColor = "grey";
            })    
            containerRow.appendChild(gridItem);
        }
    
        container.appendChild(containerRow);
    }    

}
createGrid(16);

// const resizeButton = document.querySelector("#resizeButton");

// console.log(resizeButton);

// function resizeGrid(gridSize) {
//     console.log("TEST", gridSize);
// };

// resizeButton.addEventListener("click", console.log("AA"));