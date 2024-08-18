const container = document.querySelector("#container");

container.style.width = "960px";
container.style.height = "960px";

container.style.display = "flex";
container.style.flexDirection = "column";

// Create a 16x16 grid
for (let i=0; i<16; i++) {
    const containerRow = document.createElement("div");

    containerRow.style.display = "flex";
    containerRow.style.flex = "1 1 100%";
    
    for (let j=0; j<16; j++) {
        const gridItem = document.createElement("div");
        gridItem.textContent = "grid";

        gridItem.style.width = 60;
        gridItem.style.flex = "1 1 100%";

        containerRow.appendChild(gridItem);
    }
    
    container.appendChild(containerRow);
}