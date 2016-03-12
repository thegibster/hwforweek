var pressedButtr1b1 = document.getElementById('row1but1');
var pressedButtr1b2 = document.getElementById('row1but2');
var pressedButtr1b3 = document.getElementById('row1but3');
var pressedButtr2b1 = document.getElementById('row2but1');
var pressedButtr2b2 = document.getElementById('row2but2');
var pressedButtr2b3 = document.getElementById('row2but3');
var pressedButtr3b1 = document.getElementById('row3but1');
var pressedButtr3b2 = document.getElementById('row3but2');
var pressedButtr3b3 = document.getElementById('row3but3');
var currentPlayerMove='';
var resetButton = document.getElementById('resetBut');
function winLogic(){
  if((pressedButtr1b1.innerHTML === pressedButtr2b1.innerHTML)&&(pressedButtr1b1.innerHTML === pressedButtr3b1.innerHTML)){

    alert("You Won based on row 1");
    console.log("arfff");
  }else {console.log("hmmm");}
}



pressedButtr1b1.addEventListener('click', function() {
    if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            console.log(this.value);
            winLogic();
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("Y");
        currentPlayerMove = this.innerHTML;
        winLogic();
    } else if (currentPlayerMove === 'Y' && this.innerHTML === '') {
        this.innerHTML = ("X");
        currentPlayerMove = this.innerHTML;
        winLogic();
    } else {

        alert("This box has been used!");

    }

});
pressedButtr1b2.addEventListener('click', function(){
  if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            console.log(this.value);
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("Y");currentPlayerMove = this.innerHTML;
    } else if (currentPlayerMove === 'Y' && this.innerHTML === '') {
        this.innerHTML = ("X");currentPlayerMove = this.innerHTML;
    } else {

        alert("This box has been used!");

    }
});
pressedButtr1b3.addEventListener('click', function(){
   if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            console.log(this.value);
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("Y");currentPlayerMove = this.innerHTML;
    } else if (currentPlayerMove === 'Y' && this.innerHTML === '') {
        this.innerHTML = ("X");currentPlayerMove = this.innerHTML;
    } else {

        alert("This box has been used!");

    }
});
pressedButtr2b1.addEventListener('click', function(){
   if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            console.log(this.value);
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("Y");currentPlayerMove = this.innerHTML;
    } else if (currentPlayerMove === 'Y' && this.innerHTML === '') {
        this.innerHTML = ("X");currentPlayerMove = this.innerHTML;
    } else {

        alert("This box has been used!");

    }
});
pressedButtr2b2.addEventListener('click', function(){
   if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            console.log(this.value);
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("Y");currentPlayerMove = this.innerHTML;
    } else if (currentPlayerMove === 'Y' && this.innerHTML === '') {
        this.innerHTML = ("X");currentPlayerMove = this.innerHTML;
    } else {

        alert("This box has been used!");

    }
});
pressedButtr2b3.addEventListener('click', function(){
   if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            console.log(this.value);
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("Y");currentPlayerMove = this.innerHTML;
    } else if (currentPlayerMove === 'Y' && this.innerHTML === '') {
        this.innerHTML = ("X");currentPlayerMove = this.innerHTML;
    } else {

        alert("This box has been used!");

    }
});
pressedButtr3b1.addEventListener('click', function(){
   if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            console.log(this.value);
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("Y");currentPlayerMove = this.innerHTML;
    } else if (currentPlayerMove === 'Y' && this.innerHTML === '') {
        this.innerHTML = ("X");currentPlayerMove = this.innerHTML;
    } else {

        alert("This box has been used!");

    }
});
pressedButtr3b2.addEventListener('click', function(){
   if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            console.log(this.value);
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("Y");currentPlayerMove = this.innerHTML;
    } else if (currentPlayerMove === 'Y' && this.innerHTML === '') {
        this.innerHTML = ("X");currentPlayerMove = this.innerHTML;
    } else {

        alert("This box has been used!");

    }
});
pressedButtr3b3.addEventListener('click', function(){
   if (currentPlayerMove === '') {
        if (this.innerHTML === "") {
            this.value = "Big X";
            this.innerHTML = ("X");
            currentPlayerMove = this.innerHTML;
            console.log(this.value);
        } else {
            alert("This box has been used!");
        }
    } else if (currentPlayerMove === 'X' && this.innerHTML === '') {
        this.innerHTML = ("Y");currentPlayerMove = this.innerHTML;
    } else if (currentPlayerMove === 'Y' && this.innerHTML === '') {
        this.innerHTML = ("X");currentPlayerMove = this.innerHTML;
    } else {

        alert("This box has been used!");

    }
});
resetButton.addEventListener('click',function(){
  pressedButtr1b1.innerHTML='';
  pressedButtr1b2.innerHTML='';
  pressedButtr1b3.innerHTML='';
  pressedButtr2b1.innerHTML='';
  pressedButtr2b2.innerHTML='';
  pressedButtr2b3.innerHTML='';
  pressedButtr3b1.innerHTML='';
  pressedButtr3b2.innerHTML='';
  pressedButtr3b3.innerHTML='';
  alert("The Game is Refreshed!")
});
