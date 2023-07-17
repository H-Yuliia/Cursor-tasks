function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateBlocks() {
    const container = document.getElementById("container");

    for (let i = 0; i < container.length; i++) {
        const squares = document.createElement("div");
        squares.className = "square";
        squares.style.backgroundColor = getRandomColor();
    }
}

function generateBlocksInterval() {
    const squares = document.getElementsByClassName("square");

    setInterval(() => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = getRandomColor();
        }
    }, 1000);
}

generateBlocks();
generateBlocksInterval();
