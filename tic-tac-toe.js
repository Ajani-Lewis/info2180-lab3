window.onload = function(){
    let game = document.getElementById("game");
    let status = document.getElementById("status");
    let board = document.getElementById("board").getElementsByTagName("div");
    

    console.log(typeof(board));

    for(x=0;x<board.length;x++){
        board[x].setAttribute("class","square");
    }

};
