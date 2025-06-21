let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turno) {
            box.innerText = "O";
            box.style.color=("black");
            turno = false;
        } else {
            box.innerText = "X";
            box.style.color=("white");
            turno = true;
        }
        box.disabled = true;
        checkwinner()
    })
})
const checkwinner = () => {


    for (let pattern of winpatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if ((p1 == 'X' && p2 == 'X' && p3 == 'X') || (p1 == 'O' && p2 == 'O' && p3 == 'O')) {

            showWinner(p1);

        }
    }
}
const showWinner = (p1) => {
    msg.innerText = `Congratulations, Winner is ${p1}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
