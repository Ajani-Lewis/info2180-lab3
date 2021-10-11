window.onload = function(){
    let game = document.getElementById("game");
    let status = document.getElementById("status");
    let board = document.getElementById("board").getElementsByTagName("div");
    let gameState = [];
    let turn = ["X","O"];
    
    console.log(typeof(board));

    for(x=0;x<board.length;x++){
        board[x].setAttribute("id",x+1);
        board[x].setAttribute("class","square");
        board[x].addEventListener("click",boxClicked);
        board[x].addEventListener("mouseover",boxHover);
        board[x].addEventListener("mouseout",boxOut);
    }

    function boxClicked(e){
        console.log(e.target.id);
        e.target.innerHTML=turn[0];
        e.target.classList.add(turn[0]);
        gameState.push([e.target.id,turn[0]]);
        console.log(gameState);
        nextTurn();
    }

    function boxHover(e){
        e.target.classList.add("hover");
    }

    function boxOut(e){
        e.target.classList.remove("hover")
    }

    function nextTurn(){
        temp = turn[0];
        turn[0] = turn[1];
        turn[1] = temp;
    }

};
