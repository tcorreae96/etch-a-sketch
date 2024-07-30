const container = document.querySelector("#container");

// Create a single div with the appropiate size.
function createDiv () {
	const newDiv = document.createElement("div");
	const squareSize = "40px"
	newDiv.style.height = squareSize;
	newDiv.style.width = squareSize;
	newDiv.style.margin = 0;
	newDiv.style.padding = 0;
	newDiv.style.backgroundColor = "#DEF5BD";
	newDiv.classList.add("gridSquare");
	newDiv.style.border = "1px solid black"
	return newDiv;
}

// Create a column with 16 squares inside
function createColumns () {
	const newColumn = document.createElement("div");
	for (let i = 0; i < 16; i++) {
		newColumn.appendChild(createDiv());
	}
	return newColumn;
}

// Create 16 rows.
function createRows () {
	const newRow = document.createElement("div");
	newRow.style.display = "flex";
	for (let i = 0; i < 16; i++) {
		newRow.appendChild(createColumns());
	}
	return newRow;
}

function createGrid () {
	container.appendChild(createRows());
}

createGrid();

const gridSquares = document.querySelectorAll(".gridSquare");

gridSquares.forEach((gridSquare) => {
	gridSquare.addEventListener("mouseover", handleMouseOver)
})

function handleMouseOver (event) {
	event.target.style.backgroundColor = "#4E7A10";
}