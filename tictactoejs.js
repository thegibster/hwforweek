var pressedButtr1b1 = document.getElementById('row1but1');
var pressedButtr1b2 = document.getElementById('row1but2');
var pressedButtr1b3 = document.getElementById('row1but3');
var pressedButtr2b1 = document.getElementById('row2but1');
var pressedButtr2b2 = document.getElementById('row2but2');
var pressedButtr2b3 = document.getElementById('row2but3');
var pressedButtr3b1 = document.getElementById('row3but1');
var pressedButtr3b2 = document.getElementById('row3but2');
var pressedButtr3b3 = document.getElementById('row3but3');
var currentPlayerMove = '';
var putname = document.getElementById('playname');
var resetButton = document.getElementById('resetBut');

function winLogic() {
    if (((pressedButtr1b1.innerHTML === pressedButtr2b1.innerHTML) && (pressedButtr1b1.innerHTML === pressedButtr3b1.innerHTML)) &&
        (pressedButtr1b1.innerHTML !== "" || pressedButtr2b1.innerHTML !== "" || pressedButtr3b1.innerHTML !== "")) {
        pressedButtr1b1.removeEventListener('click', letCheck);
        pressedButtr1b2.removeEventListener('click', letCheck);
        pressedButtr1b3.removeEventListener('click', letCheck);
        pressedButtr2b1.removeEventListener('click', letCheck);
        pressedButtr2b2.removeEventListener('click', letCheck);
        pressedButtr2b3.removeEventListener('click', letCheck);
        pressedButtr3b1.removeEventListener('click', letCheck);
        pressedButtr3b2.removeEventListener('click', letCheck);
        pressedButtr3b3.removeEventListener('click', letCheck);
        alert("You Won based on row 1");
        console.log("arfff");
    }
    if (((pressedButtr1b2.innerHTML === pressedButtr2b2.innerHTML) && (pressedButtr1b2.innerHTML === pressedButtr3b2.innerHTML)) &&
        (pressedButtr1b2.innerHTML !== "" || pressedButtr2b2.innerHTML !== "" || pressedButtr3b2.innerHTML !== "")) {
        pressedButtr1b1.removeEventListener('click', letCheck);
        pressedButtr1b2.removeEventListener('click', letCheck);
        pressedButtr1b3.removeEventListener('click', letCheck);
        pressedButtr2b1.removeEventListener('click', letCheck);
        pressedButtr2b2.removeEventListener('click', letCheck);
        pressedButtr2b3.removeEventListener('click', letCheck);
        pressedButtr3b1.removeEventListener('click', letCheck);
        pressedButtr3b2.removeEventListener('click', letCheck);
        pressedButtr3b3.removeEventListener('click', letCheck);
        alert("You Won based on row 2");
        console.log("arfff");
    }
    if (((pressedButtr1b3.innerHTML === pressedButtr2b3.innerHTML) && (pressedButtr1b3.innerHTML === pressedButtr3b3.innerHTML)) &&
        (pressedButtr1b3.innerHTML !== "" || pressedButtr2b3.innerHTML !== "" || pressedButtr3b3.innerHTML !== "")) {
        pressedButtr1b1.removeEventListener('click', letCheck);
        pressedButtr1b2.removeEventListener('click', letCheck);
        pressedButtr1b3.removeEventListener('click', letCheck);
        pressedButtr2b1.removeEventListener('click', letCheck);
        pressedButtr2b2.removeEventListener('click', letCheck);
        pressedButtr2b3.removeEventListener('click', letCheck);
        pressedButtr3b1.removeEventListener('click', letCheck);
        pressedButtr3b2.removeEventListener('click', letCheck);
        pressedButtr3b3.removeEventListener('click', letCheck);
        alert("You Won based on row 3");
        console.log("arfff");
    }
    //column checking
    if (((pressedButtr1b1.innerHTML === pressedButtr1b2.innerHTML) && (pressedButtr1b1.innerHTML === pressedButtr1b3.innerHTML)) &&
        (pressedButtr1b1.innerHTML !== "" || pressedButtr1b2.innerHTML !== "" || pressedButtr1b3.innerHTML !== "")) {
        pressedButtr1b1.removeEventListener('click', letCheck);
        pressedButtr1b2.removeEventListener('click', letCheck);
        pressedButtr1b3.removeEventListener('click', letCheck);
        pressedButtr2b1.removeEventListener('click', letCheck);
        pressedButtr2b2.removeEventListener('click', letCheck);
        pressedButtr2b3.removeEventListener('click', letCheck);
        pressedButtr3b1.removeEventListener('click', letCheck);
        pressedButtr3b2.removeEventListener('click', letCheck);
        pressedButtr3b3.removeEventListener('click', letCheck);
        alert("You Won based on column 1");
        console.log("arfff");
    }
    if (((pressedButtr2b1.innerHTML === pressedButtr2b2.innerHTML) && (pressedButtr2b1.innerHTML === pressedButtr2b3.innerHTML)) &&
        (pressedButtr2b1.innerHTML !== "" || pressedButtr2b2.innerHTML !== "" || pressedButtr2b3.innerHTML !== "")) {
        pressedButtr1b1.removeEventListener('click', letCheck);
        pressedButtr1b2.removeEventListener('click', letCheck);
        pressedButtr1b3.removeEventListener('click', letCheck);
        pressedButtr2b1.removeEventListener('click', letCheck);
        pressedButtr2b2.removeEventListener('click', letCheck);
        pressedButtr2b3.removeEventListener('click', letCheck);
        pressedButtr3b1.removeEventListener('click', letCheck);
        pressedButtr3b2.removeEventListener('click', letCheck);
        pressedButtr3b3.removeEventListener('click', letCheck);
        alert("You Won based on column 2");
        console.log("arfff");
    }
    if (((pressedButtr3b1.innerHTML === pressedButtr3b2.innerHTML) && (pressedButtr3b1.innerHTML === pressedButtr3b3.innerHTML)) &&
        (pressedButtr3b1.innerHTML !== "" || pressedButtr3b2.innerHTML !== "" || pressedButtr3b3.innerHTML !== "")) {
        pressedButtr1b1.removeEventListener('click', letCheck);
        pressedButtr1b2.removeEventListener('click', letCheck);
        pressedButtr1b3.removeEventListener('click', letCheck);
        pressedButtr2b1.removeEventListener('click', letCheck);
        pressedButtr2b2.removeEventListener('click', letCheck);
        pressedButtr2b3.removeEventListener('click', letCheck);
        pressedButtr3b1.removeEventListener('click', letCheck);
        pressedButtr3b2.removeEventListener('click', letCheck);
        pressedButtr3b3.removeEventListener('click', letCheck);
        alert("You Won based on column 3");
        console.log("arfff");
    }
    //diagonal checking
    if (((pressedButtr1b3.innerHTML === pressedButtr2b2.innerHTML) && (pressedButtr1b3.innerHTML === pressedButtr3b1.innerHTML)) &&
        (pressedButtr3b1.innerHTML !== "" || pressedButtr2b2.innerHTML !== "" || pressedButtr1b3.innerHTML !== "")) {
        pressedButtr1b1.removeEventListener('click', letCheck);
        pressedButtr1b2.removeEventListener('click', letCheck);
        pressedButtr1b3.removeEventListener('click', letCheck);
        pressedButtr2b1.removeEventListener('click', letCheck);
        pressedButtr2b2.removeEventListener('click', letCheck);
        pressedButtr2b3.removeEventListener('click', letCheck);
        pressedButtr3b1.removeEventListener('click', letCheck);
        pressedButtr3b2.removeEventListener('click', letCheck);
        pressedButtr3b3.removeEventListener('click', letCheck);
        alert("You Won based on diagonal right to left");
        console.log("arfff");
    }
    if (((pressedButtr1b1.innerHTML === pressedButtr2b2.innerHTML) && (pressedButtr1b1.innerHTML === pressedButtr3b3.innerHTML)) &&
        (pressedButtr1b1.innerHTML !== "" || pressedButtr2b2.innerHTML !== "" || pressedButtr3b3.innerHTML !== "")) {
        pressedButtr1b1.removeEventListener('click', letCheck);
        pressedButtr1b2.removeEventListener('click', letCheck);
        pressedButtr1b3.removeEventListener('click', letCheck);
        pressedButtr2b1.removeEventListener('click', letCheck);
        pressedButtr2b2.removeEventListener('click', letCheck);
        pressedButtr2b3.removeEventListener('click', letCheck);
        pressedButtr3b1.removeEventListener('click', letCheck);
        pressedButtr3b2.removeEventListener('click', letCheck);
        pressedButtr3b3.removeEventListener('click', letCheck);
        alert("You Won based on diagonal left to right ");
        console.log("arfff");
    }
    if(   ((((pressedButtr1b1.innerHTML !== '') && (pressedButtr1b2.innerHTML !== '')) && (pressedButtr1b3.innerHTML !== '')) &&
        (pressedButtr2b1.innerHTML !== '')) && ((((pressedButtr2b2.innerHTML !== '') && (pressedButtr2b3.innerHTML !== '') &&
        (pressedButtr3b1.innerHTML !== '') && (pressedButtr3b2.innerHTML !== '') && (pressedButtr3b3.innerHTML !== ''))))
        )
    {
        alert("Cats tie!")
    }
}

function letCheck() {
    if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            putname.innerHTML= currentPlayerMove;
            console.log(this.value);
            winLogic();
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("O");
        currentPlayerMove = this.innerHTML;
        putname.innerHTML= currentPlayerMove;
        winLogic();
    } else if (currentPlayerMove === 'O' && this.innerHTML === '') {
        this.innerHTML = ("X");
        currentPlayerMove = this.innerHTML;
        putname.innerHTML= currentPlayerMove;
        winLogic();
    } else {
        alert("This box has been used!");
    }
}

function putBack() {
    pressedButtr1b1.innerHTML = '';
    pressedButtr1b2.innerHTML = '';
    pressedButtr1b3.innerHTML = '';
    pressedButtr2b1.innerHTML = '';
    pressedButtr2b2.innerHTML = '';
    pressedButtr2b3.innerHTML = '';
    pressedButtr3b1.innerHTML = '';
    pressedButtr3b2.innerHTML = '';
    pressedButtr3b3.innerHTML = '';
    pressedButtr1b1.removeEventListener('click', letCheck);
    pressedButtr1b2.removeEventListener('click', letCheck);
    pressedButtr1b3.removeEventListener('click', letCheck);
    pressedButtr2b1.removeEventListener('click', letCheck);
    pressedButtr2b2.removeEventListener('click', letCheck);
    pressedButtr2b3.removeEventListener('click', letCheck);
    pressedButtr3b1.removeEventListener('click', letCheck);
    pressedButtr3b2.removeEventListener('click', letCheck);
    pressedButtr3b3.removeEventListener('click', letCheck);
    pressedButtr1b1.addEventListener('click', letCheck);
    pressedButtr1b2.addEventListener('click', letCheck);
    pressedButtr1b3.addEventListener('click', letCheck);
    pressedButtr2b1.addEventListener('click', letCheck);
    pressedButtr2b2.addEventListener('click', letCheck);
    pressedButtr2b3.addEventListener('click', letCheck);
    pressedButtr3b1.addEventListener('click', letCheck);
    pressedButtr3b2.addEventListener('click', letCheck);
    pressedButtr3b3.addEventListener('click', letCheck);
    currentPlayerMove = '';
    //alert("The Game is Refreshed!")
}

pressedButtr1b1.addEventListener('click', letCheck);
pressedButtr1b2.addEventListener('click', letCheck);
pressedButtr1b3.addEventListener('click', letCheck);
pressedButtr2b1.addEventListener('click', letCheck);
pressedButtr2b2.addEventListener('click', letCheck);
pressedButtr2b3.addEventListener('click', letCheck);
pressedButtr3b1.addEventListener('click', letCheck);
pressedButtr3b2.addEventListener('click', letCheck);
pressedButtr3b3.addEventListener('click', letCheck);
resetButton.addEventListener('click', putBack);
