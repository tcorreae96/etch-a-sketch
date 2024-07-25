const container = document.querySelector("#container");

function createDivs () {
	const newDiv = document.createElement("div");
	const squareSize = "60px"
	newDiv.style.height = squareSize;
	newDiv.style.width = squareSize;
	newDiv.style.margin = 0;
	newDiv.style.padding = 0;
	return newDiv;
}

