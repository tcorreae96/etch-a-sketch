const container = document.querySelector("#container");
const squareButton = document.querySelector("#squareButton");

squareButton.addEventListener("click", handleSquareButtonClick);

function handleSquareButtonClick () {
	userChoice = prompt("How many squares should the Grid be (It has to be less than 100)");
	if (userChoice < 101) {
		setSquares(userChoice);
	} else {
		alert("Number of squares should be less than 100, please try again");
	}
}

function setSquares (userChoice) {
	clearGrid();
	createGrid(userChoice);
}

function clearGrid () {
	container.lastChild.remove();
}

// Create a single div with the appropiate size.
function createDiv () {
	const newDiv = document.createElement("div");
	const squareSize = "40px";
	newDiv.style.height = squareSize;
	newDiv.style.width = squareSize;
	newDiv.style.margin = 0;
	newDiv.style.padding = 0;
	newDiv.style.backgroundColor = "#DEF5BD";
	newDiv.classList.add("gridSquare");
	newDiv.addEventListener("mouseover", handleMouseOver);
	return newDiv;
}

// function calculateSquareSize (squares) {
// 	return (640 / squares);
// }

// Create a column with 16 squares inside
function createColumns (squares) {
	const newColumn = document.createElement("div");
	for (let i = 0; i < squares; i++) {
		newColumn.appendChild(createDiv());
	}
	return newColumn;
}

// Create 16 rows.
function createRows (squares) {
	const newRow = document.createElement("div");
	newRow.style.display = "flex";
	for (let i = 0; i < squares; i++) {
		newRow.appendChild(createColumns(squares));
	}
	return newRow;
}

function createGrid (squares = 16) {
	container.appendChild(createRows(squares));
}

createGrid();


function handleMouseOver (event) {
	event.target.style.backgroundColor = "#4E7A10";
}