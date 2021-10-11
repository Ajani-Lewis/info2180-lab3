window.onload = function(){

    let status = document.getElementById("status");
    let board = document.getElementById("board").getElementsByTagName("div");
    let gameState = [];
    let turn = ["X","O"];
    const winCon = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['2','5','7']];

    for(x=0;x<board.length;x++){
        board[x].setAttribute("id",x+1);
        board[x].setAttribute("class","square");
        board[x].addEventListener("click",boxClicked,{once:true});
        board[x].addEventListener("mouseover",boxHover);
        board[x].addEventListener("mouseout",boxOut);
        board[x].innerHTML = "";
    }

    function boxClicked(e){
        //console.log(e.target.id);
        e.target.innerHTML=turn[0];
        e.target.classList.add(turn[0]);
        gameState.push([e.target.id,turn[0]]);
        console.log(gameState);
        nextTurn();
        console.log(checkWin());
        if(checkWin()!=-1){
            status.classList.add("you-won")
            status.innerHTML = ("Congratulations! "+checkWin()+" is the Winner!");
        }

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

    
    function checkWin(){
        if(gameState.length>=3){

            for(w=0;w<winCon.length;w++){
                arr=[];

                for(p=0;p<gameState.length;p++){

                    if(searchArr(gameState[p][0],winCon[w])){
                        arr.push(gameState[p][1]);
                    }

                    if(arr.length==3 && arr[0]==arr[1] && arr[1]==arr[2]){
                        return arr[0];
                    }
                }
            }
        }
        return "-1";
    }

    function searchArr(e,arr){
        for(x=0;x<arr.length;x++){
            if(e==arr[x]){
                return true
            }
        }
        return false
    }
    
    

};
