let number = 16;

function gridBox() {
  const container = document.querySelector("#container");
  if (!container) {
    console.error("Container element not found!");
    return;
  }
  container.innerHTML = "";

  const squareSize = 800 / number;

  for (let i = 0; i < number; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    container.appendChild(row);

    for (let j = 0; j < number; j++) {
      const square = document.createElement("div");
      square.classList.add("grid");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;

      square.addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
      });
      row.appendChild(square);
    }
  }
}

function btnClick() {
  const userInput = parseInt(prompt("Enter the number of boxes per side:"));
  if (userInput > 0) {
    number = userInput;
    gridBox();
  } else {
    alert("Please enter a number greater than 0");
  }
}

  gridBox();

